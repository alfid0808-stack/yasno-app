/* Ясно Play: анимация и игровой интерфейс без изменений учебного движка или сохранённого прогресса. */
(function(){
  "use strict";
  var app = document.getElementById("app"), dock = document.getElementById("dock");
  if (!app || !dock) return;
  var motion = !(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  var dockState = "idle", queued = false;

  function makeMascot(){
    return '<div class="hero-mascot" aria-hidden="true">' +
      '<span class="hero-star a">✦</span><span class="hero-star b">✧</span>' +
      '<svg viewBox="0 0 200 200" role="presentation" focusable="false">' +
      '<defs><linearGradient id="yasnoBuddyFill" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#A0ED7A"/><stop offset="1" stop-color="#39B768"/></linearGradient></defs>' +
      '<ellipse cx="100" cy="187" rx="65" ry="10" fill="#417E66" opacity=".12"/>' +
      '<path d="M45 159 Q35 179 33 181 Q59 182 77 172" fill="#39B768"/>' +
      '<rect x="29" y="43" width="145" height="132" rx="61" fill="url(#yasnoBuddyFill)" stroke="#31A75A" stroke-width="4"/>' +
      '<path d="M33 88 Q13 92 22 113" stroke="#32AA66" stroke-width="10" fill="none" stroke-linecap="round"/>' +
      '<path d="M170 91 Q194 91 189 117" stroke="#32AA66" stroke-width="10" fill="none" stroke-linecap="round"/>' +
      '<ellipse cx="76" cy="103" rx="9" ry="14" fill="#1E4B44" class="eye"/>' +
      '<ellipse cx="125" cy="103" rx="9" ry="14" fill="#1E4B44" class="eye"/>' +
      '<circle cx="73" cy="98" r="3" fill="#FFF"/><circle cx="122" cy="98" r="3" fill="#FFF"/>' +
      '<path d="M79 131 Q100 149 122 130" stroke="#23604B" stroke-width="6" stroke-linecap="round" fill="none"/>' +
      '<circle cx="54" cy="124" r="10" fill="#FF9A93" opacity=".65"/>' +
      '<circle cx="148" cy="124" r="10" fill="#FF9A93" opacity=".65"/>' +
      '<path d="M73 49 Q91 31 110 45" stroke="#D5FFAE" stroke-width="10" stroke-linecap="round" fill="none" opacity=".5"/>' +
      '<path d="M75 173 Q77 187 65 187 M132 172 Q133 186 145 186" stroke="#2EAA5B" stroke-width="8" stroke-linecap="round" fill="none"/>' +
      '</svg></div>';
  }

  function decorateHome(){
    var root = app.querySelector(".fade-in");
    if (!root || !root.querySelector(".unit") || root.dataset.playful === "1") return;
    root.dataset.playful = "1";
    var h = root.querySelector("h1.display"), note = root.querySelector("p.note");
    if (h && note){
      var hero = document.createElement("div"), copy = document.createElement("div");
      hero.className = "hero-playful"; copy.className = "hero-copy";
      var kicker = document.createElement("span");
      kicker.className = "hero-kicker"; kicker.textContent = "Учись играя";
      copy.appendChild(kicker); copy.appendChild(h); copy.appendChild(note);
      hero.appendChild(copy);
      hero.insertAdjacentHTML("beforeend",makeMascot());
      root.insertBefore(hero,root.firstChild);
    }
    var first = root.querySelector(".units"), cap = document.createElement("div");
    cap.className = "path-caption";
    cap.innerHTML = '<div><h2>Твой маршрут</h2><small>Выбери ступень и открой урок</small></div><span class="path-flag" aria-hidden="true">✦</span>';
    if (first) first.before(cap);
    var symbols = ["★","✿","◆","✦","♫","⚡","✧"];
    root.querySelectorAll(".units").forEach(function(group){
      group.classList.add("play-path");
      group.querySelectorAll(".unit").forEach(function(button,i){
        button.classList.add("path-stop");
        button.style.setProperty("--stagger",Math.min(7,i)*60 + "ms");
        var num = button.querySelector(".num");
        if (num){
          var n = num.textContent.trim();
          num.textContent = "";
          var glyph = document.createElement("span"), count = document.createElement("span");
          glyph.className = "node-symbol";count.className = "node-count";
          glyph.setAttribute("aria-hidden","true");count.setAttribute("aria-hidden","true");
          glyph.textContent = button.classList.contains("done") ? "✓" : symbols[(Number(n)-1+symbols.length)%symbols.length];
          count.textContent = n;
          num.appendChild(glyph); num.appendChild(count);
        }
        if (button.classList.contains("cur")){
          var flag = document.createElement("span");
          flag.className = "current-flag";flag.textContent = "ТЫ ЗДЕСЬ";
          flag.setAttribute("aria-hidden","true");
          button.appendChild(flag);
        }
      });
    });
  }

  function decorateLesson(){
    if (!document.body.classList.contains("in-lesson")) return;
    var top = app.querySelector(".lesson-top");
    if (!top || top.dataset.playful === "1") return;
    top.dataset.playful = "1";
    var progress = top.querySelector(".progress");
    if (progress){
      var n = document.createElement("span");
      n.className = "lesson-counter";
      n.textContent = (Number(progress.getAttribute("aria-valuenow"))||0) + " / " + (Number(progress.getAttribute("aria-valuemax"))||0);
      top.appendChild(n);
    }
    var body = app.querySelector(".fade-in"), label = body && body.querySelector(".task-label");
    if (label){
      var buddy = document.createElement("div");
      buddy.className = "task-buddy";
      buddy.innerHTML = '<span class="mini-orb" aria-hidden="true"><i></i><i></i><span></span></span><span class="buddy-text">Маленький шаг — большой прогресс!</span>';
      label.before(buddy);
    }
  }

  function trophy(){
    return '<svg viewBox="0 0 180 165" focusable="false" role="presentation" aria-hidden="true">' +
      '<defs><linearGradient id="yasnoGold" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#FFE999"/><stop offset="1" stop-color="#FFB738"/></linearGradient></defs>' +
      '<path d="M50 36 H23 Q14 36 15 47 Q16 78 48 88 M130 36 H156 Q166 36 165 47 Q164 78 132 88" fill="none" stroke="#E4A229" stroke-width="13" stroke-linecap="round"/>' +
      '<path d="M44 20 H137 L129 99 Q122 117 91 123 Q56 116 52 99 Z" fill="url(#yasnoGold)" stroke="#D99823" stroke-width="4"/>' +
      '<path d="M89 45 L96 62 L115 64 L101 77 L105 96 L89 87 L72 96 L76 77 L63 64 L82 62 Z" fill="#FFF6CA"/>' +
      '<rect x="80" y="121" width="19" height="18" rx="4" fill="#F1B43E"/>' +
      '<rect x="58" y="137" width="64" height="17" rx="8" fill="#E9A72E"/>' +
      '<path d="M19 14 L25 28 L38 31 L25 36 L19 49 L13 36 L0 31 L13 27 Z" fill="#70CBF6"/>' +
      '<path d="M151 4 L156 18 L170 23 L156 28 L151 42 L146 28 L132 23 L146 18 Z" fill="#78D772"/>' +
      '</svg>';
  }
  function decorateResult(){
    var result = app.querySelector(".result");
    if (!result || result.dataset.playful === "1") return;
    result.dataset.playful = "1";
    var crown = document.createElement("div");
    crown.className = "result-trophy";
    crown.innerHTML = trophy();
    result.prepend(crown);
    burst(55,true);
  }

  function popXP(){
    if (!motion) return;
    var el = document.createElement("div");
    el.className = "xp-toast";el.textContent = "+ XP";
    el.setAttribute("aria-hidden","true");
    document.body.appendChild(el);
    window.setTimeout(function(){el.remove()},1300);
  }

  function burst(count,wide){
    if (!motion) return;
    var layer = document.createElement("div");
    layer.className = "confetti-layer";layer.setAttribute("aria-hidden","true");
    var colors = ["#67D871","#6BBDF8","#FFC951","#FD8490","#A98BEF"];
    for (var i=0;i<count;i++){
      var p=document.createElement("i");p.className="confetti-piece";
      var x=wide ? (15+Math.random()*70) : (25+Math.random()*50);
      var y=wide ? (12+Math.random()*16) : (46+Math.random()*7);
      p.style.setProperty("--x",x+"%");
      p.style.setProperty("--y",y+"%");
      p.style.setProperty("--w",(6+Math.random()*7)+"px");
      p.style.setProperty("--h",(8+Math.random()*8)+"px");
      p.style.setProperty("--dx",(-135+Math.random()*270)+"px");
      p.style.setProperty("--dy",(wide?160:90+Math.random()*160)+"px");
      p.style.setProperty("--rot",(-650+Math.random()*1300)+"deg");
      p.style.setProperty("--c",colors[i%colors.length]);
      p.style.setProperty("--d",(1.15+Math.random()*.75)+"s");
      p.style.setProperty("--wait",(Math.random()*.28)+"s");
      layer.appendChild(p);
    }
    document.body.appendChild(layer);
    window.setTimeout(function(){layer.remove()},2300);
  }

  function decorateDock(){
    var nextState = dock.classList.contains("ok") ? "ok" : dock.classList.contains("bad") ? "bad" : "idle";
    if (nextState === dockState) return;
    dockState=nextState;
    if (nextState === "idle") return;
    var title = dock.querySelector(".fb-title");
    if (title){
      var icon=document.createElement("span");icon.className="feedback-icon";icon.setAttribute("aria-hidden","true");
      icon.textContent=nextState==="ok" ? "✓" : "!";
      title.prepend(icon);
    }
    if (nextState === "ok"){popXP();burst(16,false)}
  }

  function enhance(){decorateHome();decorateLesson();decorateResult();decorateDock()}
  function schedule(){
    if(queued)return;
    queued=true;
    window.requestAnimationFrame(function(){queued=false;enhance()});
  }
  var observer = new MutationObserver(schedule);
  observer.observe(app,{childList:true});
  observer.observe(dock,{attributes:true,attributeFilter:["class"]});
  enhance();
})();
