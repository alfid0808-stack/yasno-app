/* Расширение курса, уровень C1: 26 тем по 16 фраз. Формат фразы тот же: [ru, "эталон|вариант", ключ, "ложный1|ложный2", pid].
   Новые темы не вычитаны носителем языка: прошли только автоматический QA (tools/qa.js). */
(function(){
const X = (id, title, level, rule, trap, items) => ({ id, title, level, rule, trap, draft: true,
  examples: items.slice(0, 2).map(a => [a[1].split("|")[0], a[0]]),
  items: items.map(a => ({ ru: a[0], en: a[1].split("|"), key: a[2], opts: a[3].split("|"), pid: a[4] })) });
window.EXTRA = window.EXTRA || {};
const add = u => { window.EXTRA[u.id] = u; };

add(X("x1","Оттенки модальности","C1",[
 "<b>may / might well</b> — «вполне возможно»; <b>may / might as well</b> — «можно и…, раз уж так»; <b>be bound to</b> — «обязательно, неизбежно».",
 "<b>needn't have + V3</b> — сделал, хотя было не нужно; <b>could at least have</b> — упрёк; <b>can't possibly have</b> — категорическое «не может быть».",
 "<b>can't help + -ing</b> — «не могу не…»; <b>would have thought</b> — «я бы подумал (а вышло иначе)»."
],"Русское «можно», «вполне», «обязательно» передаются не отдельными словами, а модальными конструкциями. «Не мог не рассмеяться» — couldn't help laughing, а не couldn't not laugh.",[
["Вполне возможно, что он прав.","He may well be right.|He might well be right.|He could well be right.","may well","may good|may very","p1793"],
["Раз уж мы здесь, можно и зайти.","We may as well go in, since we are here.|We might as well go in, since we are here.","may as well","may so well|may also well","p1794"],
["Я бы подумал, что он позвонит.","I would have thought he would call.|I would have thought that he would call.","would have thought","would think have|will have thought","p1795"],
["Тебе не нужно было приносить подарок.","You needn't have brought a present.","needn't have brought","needn't brought|didn't need have brought","p1796"],
["Он обязательно опоздает.","He is bound to be late.","bound to","bound for|bounded to","p1797"],
["Я не мог не рассмеяться.","I couldn't help laughing.|I couldn't help but laugh.","help laughing","help to laugh|help laugh","p1798"],
["Лучше и быть не могло.","It couldn't have been better.","couldn't have been","couldn't be been|can't have be","p1799"],
["Не может быть, чтобы она забыла.","She can't possibly have forgotten.|She can't have forgotten.","can't possibly have","can't possible have|mustn't possibly have","p1800"],
["Ему, пожалуй, стоило бы извиниться.","He might want to apologise.|He might want to apologize.|He should probably apologise.|He should probably apologize.","might want to","might wants to|might to want","p1801"],
["Осмелюсь сказать, вы правы.","I dare say you're right.|I daresay you are right.","dare say","dare to saying|dares say","p1802"],
["Вам не придётся долго ждать.","You won't have to wait long.","won't have to","won't must|won't have","p1803"],
["Ты мог бы хотя бы позвонить!","You could at least have called!|You could have at least called!","could at least have","could at least|can at least have","p1804"],
["Не стоило так волноваться.","There was no need to worry so much.|You needn't have worried so much.","no need","not need|no needs","p1805"],
["Вряд ли он согласится.","He is unlikely to agree.","unlikely to","unlike to|unlikely for","p1806"],
["Будь я на твоём месте, я бы подождал.","If I were in your shoes, I would wait.|If I were you, I would wait.|If I were in your position, I would wait.","in your shoes","in your boots|on your shoes","p1807"],
["Так и должно быть.","That's the way it should be.|That is how it should be.","should be","should being|should to be","p1808"]
]));

add(X("x2","Смягчение и осторожные формулировки","C1",[
 "Осторожность в утверждениях: <b>It would seem that</b>, <b>arguably</b>, <b>to some extent</b>, <b>tend to</b>, <b>might be</b>, <b>is likely to</b>.",
 "Смягчение несогласия: <b>That's not quite what I meant</b>, <b>I would say that…</b>, <b>There is reason to believe…</b>",
 "В английском прямота воспринимается жёстче, чем в русском: «Это неправильно» часто превращается в «I'm not sure that's quite right»."
],"Русская речь допускает категоричность («Это ошибка»). В английском деловом и академическом стиле принято смягчать: seems, tend to, arguably.",[
["Похоже, проблема глубже.","It would seem that the problem is deeper.|It seems that the problem is deeper.|The problem seems to be deeper.","would seem","will seem|would seems","p1809"],
["Это, можно сказать, лучший вариант.","This is arguably the best option.|It is arguably the best option.","arguably","argue|arguable","p1810"],
["В какой-то степени ты прав.","To some extent, you are right.|To a certain extent, you are right.|You are right to some extent.","To some extent","On some extent|In some extent","p1811"],
["Люди склонны переоценивать риски.","People tend to overestimate risks.|People tend to overestimate the risks.","tend to","tend|tends to","p1812"],
["Мне кажется, тут может быть небольшая проблема.","I think there might be a slight problem.|It seems to me there might be a slight problem.|I think there may be a slight problem.","might be","might being|might to be","p1813"],
["Насколько я могу судить, всё в порядке.","As far as I can tell, everything is fine.|As far as I can judge, everything is fine.","As far as","As long as|As soon as","p1814"],
["Не хочу вас торопить, но время на исходе.","I don't want to rush you, but time is running out.","rush","rushing|hurry up","p1815"],
["Возможно, стоит пересмотреть план.","It might be worth reconsidering the plan.|It may be worth reconsidering the plan.|Perhaps we should reconsider the plan.","worth reconsidering","worth to reconsider|worthy reconsidering","p1816"],
["Скорее всего, цены вырастут.","Prices are likely to rise.|Prices will probably rise.|Prices are likely to go up.","likely to","likely|like to","p1817"],
["Это не совсем то, что я имел в виду.","That's not quite what I meant.|That's not exactly what I meant.","quite","quiet|quit","p1818"],
["Я бы сказал, что это рискованно.","I would say that it is risky.|I'd say it's risky.","would say","will say|would said","p1819"],
["Есть основания полагать, что он лжёт.","There is reason to believe that he is lying.|There is reason to believe he is lying.|There are reasons to believe he is lying.","reason to believe","reason for believe|reasons believing","p1820"],
["Данные указывают на рост.","The data suggest growth.|The data suggests growth.|The data point to growth.|The data points to growth.","suggest","suggests to|suggesting","p1821"],
["Это довольно спорный вопрос.","It's a rather controversial issue.|It's quite a controversial issue.","rather","rather a|rathers","p1822"],
["Не исключено, что он передумает.","He may change his mind.|It is possible that he will change his mind.|He might change his mind.","may change","may changes|may to change","p1823"],
["Если я правильно понимаю, вы против.","If I understand correctly, you are against it.|If I understand you correctly, you are against it.","understand correctly","understand correct|understanding correctly","p1824"]
]));

add(X("x3","Инверсия: усиление","C1",[
 "После <b>Little, Only after, Not until, At no time, On no account, Seldom, Nowhere</b> в начале фразы — порядок слов как в вопросе: <b>Little did I know</b>…",
 "<b>Scarcely / Hardly … when</b>, <b>No sooner … than</b> — «едва… как». <b>Not only is he…, but…</b>",
 "Формальное условие без if: <b>Had I known</b>, <b>Were I to</b>. <b>Here she comes!</b> — с местоимением порядок прямой."
],"Русский выделяет интонацией. Английский — инверсией: «Я и не подозревал» = Little did I know (а не Little I knew).",[
["Я и не подозревал, что он вернётся.","Little did I know that he would come back.|Little did I know he would come back.|Little did I know that he would return.","Little did I know","Little I knew|Little I did know","p1825"],
["Только после звонка я понял.","Only after the call did I understand.|Only after the call did I realise.|Only after the call did I realize.","did I","I did|have I","p1826"],
["Лишь когда он ушёл, я заметил ошибку.","Not until he had left did I notice the mistake.|Not until he left did I notice the mistake.","did I notice","I noticed|did I noticed","p1827"],
["Ни в коем случае не открывайте эту дверь.","On no account should you open this door.|Under no circumstances should you open this door.","should you open","you should open|should open you","p1828"],
["Ни разу она не пожаловалась.","At no time did she complain.|Not once did she complain.","did she complain","she complained|did she complained","p1829"],
["Редко увидишь такое.","Seldom do you see such a thing.|Rarely do you see such a thing.|Seldom does one see such a thing.","do you see","you see|you do see","p1830"],
["Настолько он устал, что сразу уснул.","So tired was he that he fell asleep at once.|So tired was he that he fell asleep immediately.","was he","he was|did he","p1831"],
["Знай я раньше, я бы помог.","Had I known earlier, I would have helped.|If I had known earlier, I would have helped.","Had I known","Did I know|Have I known","p1832"],
["Он не только умный, но и добрый.","Not only is he clever, but he is also kind.|Not only is he smart, but he is also kind.","is he","he is|does he","p1833"],
["Никогда больше я туда не вернусь.","Never again will I go back there.|I will never go back there again.","will I","I will|do I","p1834"],
["Едва мы сели, как начался фильм.","Scarcely had we sat down when the film started.|Hardly had we sat down when the film started.|No sooner had we sat down than the film started.","Scarcely had we","Scarcely we had|Scarcely did we","p1835"],
["Будь у меня время, я бы это прочитал.","Were I to have time, I would read it.|If I had time, I would read it.","Were I","Was I|Am I","p1836"],
["Таковы были правила.","Such were the rules.","Such were","Such was|So were","p1837"],
["Вот она идёт!","Here she comes!","Here she comes","Here comes she|Here she come","p1838"],
["Только тогда стало ясно.","Only then did it become clear.|Only then did it become obvious.","did it become","it became|did it became","p1839"],
["Нигде я не чувствовал себя так спокойно.","Nowhere have I felt so calm.|Nowhere else have I felt so calm.|Nowhere have I felt so peaceful.","have I felt","I have felt|I felt","p1840"]
]));

add(X("x4","Выделение: всё, что…, дело в том, что…","C1",[
 "<b>All I want is…</b> (а не all what), <b>What happened was…</b>, <b>The thing is…</b>, <b>The reason (why) I'm calling is…</b>",
 "<b>It's not that…, it's that…</b> — «дело не в том, что…, а в том, что…». <b>It wasn't until Monday that…</b> — «только в понедельник».",
 "Эмфатическое <b>do / did</b>: I <b>did</b> see him! — «я правда видел!»"
],"«Всё, что» — all (that), а не all what: All I want is peace. Это одна из самых частых ошибок русскоговорящих на продвинутом уровне.",[
["Всё, чего я хочу, — это покой.","All I want is peace.|All I want is some peace.|All I want is peace and quiet.","All I want","All what I want|Everything what I want","p1841"],
["Дело в том, что у нас нет времени.","The thing is, we don't have time.|The thing is that we don't have time.|The point is, we don't have time.","The thing is","The thing it is|A thing is","p1842"],
["Случилось вот что: поезд сломался.","What happened was that the train broke down.|What happened was the train broke down.","What happened was","What was happened|That happened was","p1843"],
["Дело не в том, что я не хочу, а в том, что не могу.","It's not that I don't want to, it's that I can't.","It's not that","It's not what|It's no that","p1844"],
["Именно поэтому я ушёл.","That's why I left.|That's the reason I left.","That's why","That's because|That's what","p1845"],
["Мне нужна именно твоя помощь.","It's your help that I need.|What I need is your help.","that I need","what I need|which I need","p1846"],
["Удивило меня то, как быстро он согласился.","What surprised me was how quickly he agreed.","What surprised me","That surprised me|Which surprised me","p1847"],
["Единственное, что меня беспокоит, — цена.","The only thing that worries me is the price.|The only thing worrying me is the price.","The only thing","Only thing|An only thing","p1848"],
["Я правда его видел!","I did see him!|I really did see him!","did see","did saw|do saw","p1849"],
["Только в понедельник я узнал правду.","It wasn't until Monday that I learned the truth.|It wasn't until Monday that I learnt the truth.","It wasn't until","It wasn't since|It was until","p1850"],
["Это он мне сказал, а не она.","It was he who told me, not her.|It was him who told me, not her.","who told me","which told me|whom told me","p1851"],
["Больше всего мне нравится в ней честность.","What I like most about her is her honesty.|What I like about her most is her honesty.","What I like most","That I like most|Which I like most","p1852"],
["Познакомились мы именно в Риге.","It was in Riga that we met.|It was in Riga where we met.","that we met","which we met|what we met","p1853"],
["Тебе остаётся только подождать.","All you have to do is wait.|All you need to do is wait.","All you have to do","All what you have to do|Everything you have to do","p1854"],
["Он ведь сам это предложил!","He did suggest it himself!|He himself suggested it!","did suggest","did suggested|does suggested","p1855"],
["Я звоню по поводу встречи.","The reason I'm calling is the meeting.|The reason why I'm calling is the meeting.","The reason","The cause|A reason","p1856"]
]));

add(X("x5","Формальный и разговорный регистр","C1",[
 "Формально: <b>commence</b> (start), <b>obtain</b> (get), <b>enquire</b> (ask), <b>contact you shortly</b>, <b>are required to</b>, <b>free of charge</b>, <b>inform us of</b>.",
 "Разговорно: <b>How's it going?</b>, <b>No worries!</b>, <b>Gotta go</b>, <b>Never mind</b>, <b>I almost forgot!</b>",
 "Ошибка регистра — не грамматическая, но заметная: «commence» в чате звучит смешно, «gotta» в письме — неуважительно."
],"В русском разница между «приступить» и «начать» небольшая. В английском выбор слова сразу выдаёт ситуацию: офис, друзья, официальный документ.",[
["Мероприятие начнётся в 10 утра (официально).","The event will commence at ten a.m.","commence","commencing|commenced","p1857"],
["Чтобы получить визу, заполните анкету.","To obtain a visa, please complete the form.|To obtain a visa, complete the form.","obtain","obtaining|obtained","p1858"],
["Хотел бы узнать о ценах (официально).","I would like to enquire about prices.|I would like to inquire about prices.|I am writing to enquire about prices.|I am writing to inquire about prices.","enquire","enquiring|enquiry","p1859"],
["Мы приносим извинения за задержку.","We apologise for the delay.|We apologize for the delay.","apologise","apologies|apology","p1860"],
["Ну что, как жизнь?","So, how's it going?|So, how are things?","how's it going","how's it go|how it going","p1861"],
["Без проблем!","No worries!|No problem!","worries","worry|worried","p1862"],
["Покупатели обязаны предъявить чек.","Customers are required to present a receipt.|Customers must present a receipt.|Customers are required to show a receipt.","are required to","are require to|are required","p1863"],
["Мы свяжемся с вами в ближайшее время.","We will contact you shortly.|We will be in touch shortly.|We will contact you soon.","shortly","short|shortest","p1864"],
["Я сейчас занят, перезвоню.","I'm a bit busy right now, I'll call you back.|I'm busy right now, I'll call you back.","call you back","call you again|call back you","p1865"],
["Просим соблюдать тишину.","Please remain silent.|Please keep quiet.|Please be quiet.","remain","remaining|remains","p1866"],
["Это превышает наш бюджет.","This exceeds our budget.|This is beyond our budget.","exceeds","exceed|exceeding","p1867"],
["Чуть не забыл!","I almost forgot!|I nearly forgot!","almost","most|almostly","p1868"],
["Помощь предоставляется бесплатно.","Assistance is provided free of charge.|Help is provided free of charge.|Assistance is provided for free.","free of charge","free of pay|free from charge","p1869"],
["Ладно, неважно.","Never mind.","mind","mine|minds","p1870"],
["Прошу сообщить о вашем решении.","Please inform us of your decision.|Please let us know your decision.|Please inform us about your decision.","inform us of","inform us|inform to us","p1871"],
["Мне пора, пока!","Gotta go, bye!|I've got to go, bye!|I have to go, bye!","Gotta","Gonna|Wanna","p1872"]
]));

add(X("x6","Академическая лексика","C1",[
 "Связки: <b>consequently, nevertheless, according to, in other words</b>. Глаголы: <b>indicate, derive from, claim, contradict, observe</b>.",
 "Прилагательные и существительные: <b>substantial, preliminary, further, limitations, phenomenon (мн. phenomena)</b>.",
 "В академическом тексте вместо «показывает» чаще <b>indicates / suggests</b>, вместо «много» — <b>substantial / a number of</b>."
],"Phenomenon во множественном числе — phenomena; data, criteria — тоже латинские формы. Contradict — без предлога: contradicts the findings (а не contradicts with).",[
["Следовательно, гипотеза неверна.","Consequently, the hypothesis is false.|Therefore, the hypothesis is false.|Consequently, the hypothesis is incorrect.","Consequently","Consequent|Consequence","p1873"],
["Результаты указывают на связь.","The results indicate a link.|The results indicate a connection.|The results point to a link.","indicate","indicates to|indication","p1874"],
["Это слово происходит из латыни.","This word derives from Latin.|This word is derived from Latin.|This word comes from Latin.","derives","derive|deriving","p1875"],
["Значительная часть данных отсутствует.","A substantial part of the data is missing.|A significant part of the data is missing.|A substantial proportion of the data is missing.","substantial","substance|substantially","p1876"],
["Тем не менее исследование ценно.","Nevertheless, the study is valuable.|Nonetheless, the study is valuable.|Even so, the study is valuable.","Nevertheless","Never the less|Nevermore","p1877"],
["Авторы утверждают, что метод надёжен.","The authors claim that the method is reliable.|The authors argue that the method is reliable.|The authors maintain that the method is reliable.","claim","claims to|claiming","p1878"],
["Эта тенденция наблюдается во всех странах.","This trend is observed in all countries.|This trend can be seen in all countries.|This tendency is observed in all countries.","observed","observing|observe","p1879"],
["Мы проанализировали выборку из 500 человек.","We analysed a sample of 500 people.|We analyzed a sample of 500 people.|We analysed a sample of five hundred people.","sample","example|simple","p1880"],
["Этот фактор играет ключевую роль.","This factor plays a key role.|This factor plays a crucial role.|This factor plays a vital role.","plays a key role","plays a key part of|makes a key role","p1881"],
["Вопрос требует дальнейшего изучения.","The issue requires further investigation.|The question requires further study.|The issue requires further research.","further","farther|furthermore","p1882"],
["Иными словами, гипотеза подтвердилась.","In other words, the hypothesis was confirmed.","In other words","On other words|In another words","p1883"],
["Это противоречит предыдущим выводам.","This contradicts previous findings.|This contradicts earlier findings.|This contradicts the previous findings.","contradicts","contradicts with|contradict to","p1884"],
["Согласно отчёту, безработица снизилась.","According to the report, unemployment has fallen.|According to the report, unemployment fell.|According to the report, unemployment has decreased.","According to","According|Accordingly to","p1885"],
["Данный подход имеет ряд ограничений.","This approach has a number of limitations.|This approach has several limitations.","limitations","limitation|limitness","p1886"],
["Предварительные результаты обнадёживают.","The preliminary results are encouraging.|Preliminary results are encouraging.|The preliminary results are promising.","encouraging","encouraged|encourage","p1887"],
["Это явление широко распространено.","This phenomenon is widespread.|This phenomenon is very common.","phenomenon","phenomena|phenomenons","p1888"]
]));

add(X("x7","Ирония и подтекст","C1",[
 "Ирония в английском часто звучит как согласие: <b>Yeah, right.</b> (не верю), <b>Oh great, that's just perfect.</b> (всё плохо), <b>Very funny.</b> (не смешно).",
 "Устойчивые реплики: <b>Tell me about it!</b> (и не говори), <b>Dream on!</b>, <b>Lucky me!</b>, <b>That's an understatement.</b>",
 "Подтекст держится на интонации и контексте: на письме иронию легко не заметить."
],"Буквальный перевод иронии опасен: «Tell me about it» — не «расскажи мне», а «и не говори, сам знаю».",[
["Ну конечно, так я и поверил.","Yeah, right.","right","true|correct","p1889"],
["Отлично, просто замечательно (когда всё плохо).","Oh great, that's just perfect.|Oh great, just perfect.|Great, that's just perfect.","just perfect","only perfect|just perfectly","p1890"],
["И не говори!","Tell me about it!|You're telling me!","Tell me about it","Say me about it|Tell me it about","p1891"],
["Как будто я не знаю!","As if I didn't know!|As if I don't know!","As if","Like if|As though if","p1892"],
["Вот это новость! (впервые слышу)","Well, that's news to me!","news to me","news for me|a news to me","p1893"],
["Не то чтобы мне было важно, но кто это был?","Not that I care, but who was it?","Not that","Not what|No that","p1894"],
["Очень смешно (совсем не смешно).","Very funny.","funny","fun|funnily","p1895"],
["Спасибо огромное, очень помог (с иронией).","Thanks a lot, you've been a great help.","a great help","a great helps|great help of","p1896"],
["Можно подумать, ты лучше!","As if you were any better!|As if you're any better!","any better","any good|some better","p1897"],
["Это ещё мягко сказано.","That's an understatement.|That's putting it mildly.","understatement","underestimate|overstatement","p1898"],
["Как же, жди!","Dream on!|In your dreams!","Dream on","Dream in|Dreams on","p1899"],
["Ну мне и «повезло»!","Lucky me!","Lucky","Luck|Luckily","p1900"],
["Жду не дождусь (с иронией).","I can hardly wait.","hardly","hard|hardy","p1901"],
["Кто бы мог подумать!","Who would have thought!|Who would have thought it!","would have thought","would thought|will have thought","p1902"],
["Спасибо, Капитан Очевидность!","Thank you, Captain Obvious!|Thanks, Captain Obvious!","Captain Obvious","Captain Clear|Mister Obvious","p1903"],
["Ага, сейчас!","Yeah, sure.|Sure thing.","sure","surely|shore","p1904"]
]));

add(X("x8","Сложные связки","C1",[
 "Условие: <b>provided (that)</b>, <b>given that</b>, <b>seeing that</b>, <b>insofar as</b>. Уступка: <b>albeit</b>, <b>even so</b>, <b>regardless of</b>.",
 "Сравнение и замена: <b>while / whereas</b>, <b>instead of / rather than</b>. Отсылка: <b>as for</b>, <b>not to mention</b>, <b>either way</b>.",
 "<b>albeit</b> ставится перед прилагательным или наречием, а не перед полным предложением: The work is progressing, albeit slowly."
],"«Независимо от» — regardless of (с of). «Не говоря уже о» — not to mention (без about).",[
["При условии, что все согласны, мы начнём.","Provided that everyone agrees, we will start.|Provided everyone agrees, we will start.|As long as everyone agrees, we will start.","Provided that","Providing to|Provide that","p1905"],
["Учитывая, что времени мало, давай поспешим.","Given that time is short, let's hurry.|Given that we have little time, let's hurry.","Given that","Giving that|Given than","p1906"],
["Работа продвигается, хотя и медленно.","The work is progressing, albeit slowly.","albeit","despite|however","p1907"],
["Если говорить обо мне, я согласен.","As far as I'm concerned, I agree.","As far as I'm concerned","As long as I'm concerned|As far as I concern","p1908"],
["Раз уж ты здесь, помоги мне.","Seeing that you're already here, help me.|Since you're already here, help me.|Now that you're here, help me.","Seeing that","Seen that|Looking that","p1909"],
["Независимо от погоды, мы поедем.","Regardless of the weather, we will go.|Whatever the weather, we will go.","Regardless of","Regardless|Regarding of","p1910"],
["Одни согласны, а другие нет.","While some agree, others don't.|Whereas some agree, others don't.","While","During|Meanwhile","p1911"],
["Вместо того чтобы жаловаться, действуй.","Instead of complaining, take action.|Rather than complaining, take action.|Instead of complaining, act.","Instead of","Instead|Instead to","p1912"],
["Не говоря уже о расходах.","Not to mention the costs.|Not to mention the expenses.","Not to mention","Not mentioning|No to mention","p1913"],
["Что касается цены, она разумная.","As for the price, it is reasonable.|As regards the price, it is reasonable.","As for","As to for|So for","p1914"],
["Тем не менее мы продолжим.","Even so, we will continue.|Nevertheless, we will continue.|All the same, we will continue.","Even so","Even though|Even if","p1915"],
["В той мере, в какой это возможно.","Insofar as it is possible.|To the extent that it is possible.","Insofar as","In so far that|Insofar that","p1916"],
["Благодаря его помощи мы успели.","Thanks to his help, we made it.|Thanks to his help, we made it in time.","Thanks to","Thanks for|Thank to","p1917"],
["Иначе мы опоздаем.","Otherwise, we will be late.|Or else we will be late.","Otherwise","Other|Unless","p1918"],
["Тем более что он сам об этом просил.","Especially since he asked for it himself.|Especially as he asked for it himself.","Especially since","Specially since|Especially for","p1919"],
["Так или иначе, решение принято.","Either way, the decision has been made.|One way or another, the decision has been made.|In any case, the decision has been made.","Either way","Neither way|Every way","p1920"]
]));

add(X("x9","Перефразирование","C1",[
 "Переформулировать: <b>In other words</b>, <b>To put it another way</b>, <b>What I mean is</b>, <b>Let me rephrase that</b>.",
 "Обобщить: <b>In short</b>, <b>In a nutshell</b>, <b>The bottom line is</b>, <b>Simply put</b>. Уточнить: <b>To be more precise</b>, <b>Strictly speaking</b>, <b>Roughly speaking</b>.",
 "Перефразирование — главный навык C1: не знаете слово — скажите то же другими словами."
],"«Я согласен» — I agree, а не I am agree. Ошибка с лишним am держится у русскоговорящих до продвинутого уровня.",[
["Иначе говоря, мы банкроты.","To put it another way, we are bankrupt.|In other words, we are bankrupt.|To put it differently, we are bankrupt.","To put it another way","To put it other way|To put another way","p1921"],
["То есть ты не придёшь?","So you mean you're not coming?|So you're not coming?|You mean you're not coming?","you mean","you means|you meaning","p1922"],
["Проще говоря, это не работает.","Simply put, it doesn't work.|To put it simply, it doesn't work.|Put simply, it doesn't work.","Simply put","Simple put|Simply putting","p1923"],
["Короче говоря, мы опоздали.","In short, we were late.|Long story short, we were late.|To cut a long story short, we were late.","In short","In shortly|On short","p1924"],
["Другими словами, нужно больше денег.","In other words, we need more money.","need more money","need more moneys|need much money","p1925"],
["Позволь перефразировать.","Let me rephrase that.|Let me put it another way.|Let me rephrase it.","rephrase","rephrasing|phrase again","p1926"],
["Я имею в виду, что это рискованно.","What I mean is that it's risky.|What I mean is, it's risky.|I mean, it's risky.","What I mean is","What I mean it is|That I mean is","p1927"],
["Суть в том, что мы теряем клиентов.","The bottom line is that we are losing customers.|The point is that we are losing customers.|The bottom line is we're losing clients.","bottom line","bottom row|base line","p1928"],
["Грубо говоря, половина из них не пришла.","Roughly speaking, half of them didn't come.","Roughly speaking","Rough speaking|Roughly say","p1929"],
["Строго говоря, это не ошибка.","Strictly speaking, it's not a mistake.|Strictly speaking, this isn't a mistake.","Strictly speaking","Strict speaking|Strictly saying","p1930"],
["Если можно так выразиться, он гений хаоса.","If I may put it that way, he is a genius of chaos.|So to speak, he is a genius of chaos.","put it that way","put it this ways|putting it that way","p1931"],
["Вкратце: проект отложен.","In a nutshell, the project has been postponed.|In brief, the project has been postponed.|In short, the project has been postponed.","In a nutshell","In a nut|In nutshell","p1932"],
["Говоря его словами, «это катастрофа».","In his words, \"it's a disaster\".|In his own words, \"it's a disaster\".","In his words","With his words|By his words","p1933"],
["Иными словами, вы предлагаете сдаться.","In other words, you are suggesting we give up.|In other words, you're suggesting that we give up.","suggesting","suggest to|suggesting to","p1934"],
["Если коротко, мы согласны.","In short, we agree.|Basically, we agree.|To sum up, we agree.","agree","agree with|are agree","p1935"],
["Точнее, он мой двоюродный брат.","To be more precise, he's my cousin.|More precisely, he is my cousin.|To be precise, he is my cousin.","To be more precise","To be more precisely|For more precise","p1936"]
]));

add(X("x10","Медиация: пересказ и объяснение","C1",[
 "Передать суть: <b>The gist is that…</b>, <b>He basically said…</b>, <b>According to him…</b>, <b>From what I understood…</b>",
 "Пересказать документ: <b>The letter says that…</b> (не tells), <b>The author argues that…</b>, <b>He mentioned that…</b> (без about).",
 "Медиация — это не перевод слово в слово, а передача смысла для конкретного собеседника."
],"«В письме говорится» — The letter says (а не tells). «Он упомянул, что…» — He mentioned that… (а не mentioned about).",[
["Суть в том, что встречу перенесли.","The gist is that the meeting has been moved.|The gist is that the meeting was moved.|Basically, the meeting has been rescheduled.","gist","guest|just","p1937"],
["Он, по сути, сказал, что не согласен.","He basically said that he disagreed.|Basically, he said he disagreed.","basically","basic|basicly","p1938"],
["Если вкратце, она хочет повышения.","In a nutshell, she wants a promotion.|In short, she wants a promotion.","promotion","promote|promoting","p1939"],
["Позвольте объяснить, о чём статья.","Let me explain what the article is about.","what the article is about","what is the article about|what about the article is","p1940"],
["Автор утверждает, что технологии нас изолируют.","The author argues that technology isolates us.|The author claims that technology isolates us.","argues","argue|argues about","p1941"],
["Если я правильно поняла, вы предлагаете скидку.","If I understood correctly, you are offering a discount.|If I've understood correctly, you're offering a discount.","offering","offer|offered","p1942"],
["Она просила передать, что опоздает.","She asked me to tell you that she would be late.|She asked me to let you know she'd be late.","asked me to tell you","asked me tell you|asked to me tell you","p1943"],
["Если проще, это значит «нет».","Put simply, it means \"no\".","it means","it is mean|it meaning","p1944"],
["В письме говорится, что срок продлили.","The letter says that the deadline has been extended.|The letter says the deadline has been extended.","says","tells|speaks","p1945"],
["Короче, главная мысль доклада — экономия.","Basically, the main point of the report is saving money.|In short, the main point of the report is cutting costs.","main point","main dot|main sense","p1946"],
["Он упомянул, что может задержаться.","He mentioned that he might be late.|He mentioned he might be delayed.","mentioned","mentioned about|mention","p1947"],
["Подводя итог обсуждению, мы договорились о трёх пунктах.","To summarise the discussion, we agreed on three points.|To summarize the discussion, we agreed on three points.","agreed on","agreed in|agree on","p1948"],
["Иными словами, клиент недоволен.","In other words, the client is unhappy.|In other words, the customer is unhappy.","unhappy","unhappily|happiness","p1949"],
["По его словам, проблема в бюджете.","According to him, the problem is the budget.","According to him","According him|According to his","p1950"],
["Попробую передать это своими словами.","I'll try to put it in my own words.|Let me try to put it in my own words.","in my own words","with my own words|in my words own","p1951"],
["Насколько я понял из звонка, сделка сорвалась.","From what I understood from the call, the deal fell through.|As far as I understood from the call, the deal fell through.","fell through","fell down|fell out","p1952"]
]));

add(X("x11","Сложные формы инфинитива и -ing","C1",[
 "Перфектный инфинитив — действие раньше: He seems <b>to have left</b>. She claims <b>to have seen</b> him. С пассивом: <b>to have been arrested</b>.",
 "Пассивный -ing: I like <b>being praised</b>, He hates <b>being interrupted</b>. Перфектный -ing: She denied <b>having taken</b> the money.",
 "needs <b>to be solved</b> = needs <b>solving</b> — «нужно решить»."
],"Русское «меня хвалят, меня перебивают» после like / hate / avoid / remember — being + V3, а не to be + V3.",[
["Он, кажется, уже ушёл.","He seems to have left.|He seems to have already left.","to have left","to left|to has left","p1953"],
["Мне нравится, когда меня хвалят.","I like being praised.","being praised","be praised|to praised","p1954"],
["Она утверждает, что видела его.","She claims to have seen him.|She claims that she saw him.","to have seen","to saw|to have saw","p1955"],
["Я помню, как меня наказали.","I remember being punished.","being punished","to be punished|been punished","p1956"],
["Ему повезло, что его не уволили.","He was lucky not to have been fired.|He was lucky not to be fired.|He was lucky not to have been sacked.","not to have been fired","to not have fired|not to have fired","p1957"],
["Я ненавижу, когда меня перебивают.","I hate being interrupted.","being interrupted","be interrupted|interrupting","p1958"],
["Похоже, он работает весь день.","He appears to have been working all day.|He seems to have been working all day.","to have been working","to be worked|to have worked been","p1959"],
["После того как его выбрали, он изменился.","After being elected, he changed.|Having been elected, he changed.|After he was elected, he changed.","being elected","be elected|electing","p1960"],
["Говорят, его арестовали.","He is said to have been arrested.|It is said that he was arrested.","to have been arrested","to be arrested been|to have arrested","p1961"],
["Я ожидал, что меня пригласят.","I expected to be invited.","to be invited","being invited|to invite","p1962"],
["Она отрицала, что брала деньги.","She denied having taken the money.|She denied taking the money.","having taken","to have taken|to take","p1963"],
["Ему не нравится, когда на него смотрят.","He doesn't like being looked at.","being looked at","be looked at|looking at","p1964"],
["Жаль, что я не дослушал до конца.","I regret not having listened to the end.|I regret not listening to the end.","not having listened","not to have listening|having not listen","p1965"],
["Надеюсь закончить к пятнице.","I hope to have finished by Friday.|I hope to finish by Friday.","to have finished","to finished|to having finished","p1966"],
["Эту проблему нужно решить.","This problem needs to be solved.|This problem needs solving.","needs to be solved","needs to solve|needs be solved","p1967"],
["Он избежал наказания.","He avoided being punished.|He escaped punishment.","avoided being punished","avoided to be punished|avoided punishing","p1968"]
]));

add(X("x12","Обособленные обороты","C1",[
 "Устойчивые: <b>Weather permitting</b>, <b>All things considered</b>, <b>That being said</b>, <b>Generally speaking</b>, <b>Frankly speaking</b>, <b>Without further ado</b>.",
 "С with: <b>with the light on</b>, <b>with his arms crossed</b>. С -ing: <b>Judging by</b>, <b>Considering</b>, <b>Looking back</b>.",
 "Это признак зрелого письма: два предложения сливаются в одно без лишних «и» и «потому что»."
],"«Сидел, скрестив руки» — with his arms crossed: деепричастие здесь не нужно, нужен оборот with + существительное + V3.",[
["Если позволит погода, мы поедем.","Weather permitting, we will go.|If the weather permits, we will go.","Weather permitting","Weather permits|Weather permitted","p1969"],
["С учётом всего, это был успех.","All things considered, it was a success.|All in all, it was a success.","All things considered","All things considering|All thing considered","p1970"],
["С учётом сказанного, я согласен.","That being said, I agree.|Having said that, I agree.|That said, I agree.","That being said","That been said|That be said","p1971"],
["По общему мнению, он прав.","By all accounts, he is right.","By all accounts","By all account|On all accounts","p1972"],
["Закончив работу, мы пошли домой.","Our work done, we went home.|With our work finished, we went home.|Having finished our work, we went home.","Our work done","Our work doing|Our work did","p1973"],
["С включённым светом трудно спать.","It's hard to sleep with the light on.|It is hard to sleep with the lights on.","with the light on","with on the light|with the light turned","p1974"],
["Он сидел, скрестив руки.","He sat with his arms crossed.|He sat with his arms folded.","with his arms crossed","with his arms crossing|with crossed his arms","p1975"],
["Судя по его лицу, новости плохие.","Judging by his face, the news is bad.|Judging from his face, the news is bad.","Judging by","Judge by|Judged by","p1976"],
["Учитывая обстоятельства, решение верное.","Considering the circumstances, the decision is right.|Given the circumstances, the decision is right.","Considering","Considered|Consider","p1977"],
["Если не считать дождя, отпуск удался.","Apart from the rain, the holiday was great.|Except for the rain, the holiday was great.|Rain aside, the holiday was great.","Apart from","Apart of|A part from","p1978"],
["Как правило, он приходит вовремя.","As a rule, he arrives on time.|Generally, he arrives on time.","As a rule","As rule|By a rule","p1979"],
["Честно говоря, я устал.","Frankly speaking, I'm tired.|To be honest, I'm tired.|Frankly, I am tired.","Frankly speaking","Frank speaking|Frankly saying","p1980"],
["Вообще говоря, это неплохая идея.","Generally speaking, it's not a bad idea.","Generally speaking","General speaking|Generally saying","p1981"],
["Оглядываясь назад, я бы поступил иначе.","Looking back, I would have done it differently.|In hindsight, I would have done it differently.","Looking back","Looked back|Look back","p1982"],
["Время идёт, а решения всё нет.","Time is passing, and there is still no solution.","passing","past|passed","p1983"],
["Без лишних слов, начнём.","Without further ado, let's begin.","further ado","farther ado|further adieu","p1984"]
]));

add(X("x13","Номинализация","C1",[
 "Вместо глагола — существительное: decide → <b>the decision to</b>, implement → <b>the implementation of</b>, refuse → <b>refusal to</b>, lack → <b>the lack of</b>.",
 "Устойчивые предлоги: <b>rise / increase / reduction in</b> (prices), <b>confirmation of</b>, <b>possibility of</b>, <b>result of</b>.",
 "Номинализация делает текст плотным и формальным; в разговоре её много не нужно."
],"«Рост цен» — the rise in prices (а не rise of). «Возможность сотрудничества» — possibility of cooperation (а не possibility to cooperation).",[
["Решение закрыть завод вызвало протесты.","The decision to close the factory caused protests.|The decision to close the plant sparked protests.","decision to close","decision of closing|decision for closing","p1985"],
["Внедрение системы заняло год.","The implementation of the system took a year.|Implementing the system took a year.","implementation of","implementation from|implementing of","p1986"],
["Рост цен беспокоит людей.","The rise in prices worries people.|Rising prices worry people.|The increase in prices worries people.","rise in","raise in|rising in","p1987"],
["Его отказ помочь удивил всех.","His refusal to help surprised everyone.","refusal to help","refuse to help|refusal of helping","p1988"],
["Снижение налогов повлияет на бюджет.","The reduction in taxes will affect the budget.|Tax cuts will affect the budget.|The reduction of taxes will affect the budget.","reduction in","reducing in|reduce in","p1989"],
["Мы ждём подтверждения бронирования.","We are waiting for confirmation of the booking.|We are awaiting confirmation of the booking.|We are waiting for the booking confirmation.","confirmation of","confirm of|confirmation to","p1990"],
["Её уход стал неожиданностью.","Her departure came as a surprise.|Her leaving came as a surprise.","came as a surprise","came as surprise|came like a surprise","p1991"],
["Анализ данных выявил ошибку.","Analysis of the data revealed an error.|The analysis of the data showed a mistake.|Data analysis revealed an error.","revealed","revealing|reveal","p1992"],
["Отсутствие доказательств удивляет.","The lack of evidence is surprising.|The absence of evidence is surprising.","lack of","lack in|lacking of","p1993"],
["Улучшение качества — наша цель.","Improving quality is our goal.|The improvement of quality is our goal.|Quality improvement is our aim.","Improving quality","Improve quality|Improvement quality","p1994"],
["Требуется одобрение руководства.","Management approval is required.|The approval of management is required.|Approval from management is required.","approval","approve|approving","p1995"],
["Мы обсудили возможность сотрудничества.","We discussed the possibility of cooperation.|We discussed the possibility of working together.","possibility of","possibility to|possible of","p1996"],
["Его прибытие задержалось.","His arrival was delayed.","arrival","arrive|arriving","p1997"],
["Понимание проблемы — первый шаг.","Understanding the problem is the first step.|An understanding of the problem is the first step.","Understanding","Understand|To understanding","p1998"],
["Рост спроса привёл к дефициту.","The increase in demand led to a shortage.|The rise in demand led to a shortage.|Increased demand led to a shortage.","led to","lead to|leaded to","p1999"],
["Обеспечение безопасности — приоритет.","Ensuring safety is a priority.|Ensuring security is a priority.","Ensuring","Ensure|Insuring","p2000"]
]));

add(X("x14","Условие без if","C1",[
 "<b>But for / Without + сущ.</b> — «если бы не»; <b>If it weren't / hadn't been for</b>; <b>Suppose / Supposing</b>; <b>on condition that</b>; <b>Should you…</b>",
 "<b>otherwise / or (else)</b> — «иначе»; <b>unless</b> — «если не»; <b>What if…?</b> — «а что если…?»; <b>In case of</b> + сущ.",
 "<b>Even if</b> — «даже если» (условие), <b>even though</b> — «хотя» (факт)."
],"«Если нужно» — If necessary (а не If it is need). «В случае пожара» — In case of fire, без артикля.",[
["Если бы не ты, я бы проиграл.","But for you, I would have lost.|If it hadn't been for you, I would have lost.|Without you, I would have lost.","But for you","But for your|Except you","p2001"],
["Предположим, ты выиграл. Что бы ты сделал?","Suppose you won. What would you do next?|Supposing you won, what would you do next?","Suppose","Supposed|Supposition","p2002"],
["Я пойду при условии, что ты пойдёшь со мной.","I'll go on condition that you come with me.|I'll go as long as you come with me.","on condition that","on condition|in condition that","p2003"],
["Поторопись, иначе опоздаешь.","Hurry up, otherwise you'll be late.|Hurry up, or you'll be late.|Hurry up, or else you'll be late.","otherwise","other way|unless","p2004"],
["Если вдруг увидишь его, передай привет.","Should you see him, say hello.|If you happen to see him, say hello.|If you see him, say hello.","Should you see","Would you see|Should you saw","p2005"],
["Даже если бы мне заплатили, я бы не согласился.","Even if they paid me, I wouldn't agree.","Even if","Even though|Even so","p2006"],
["Если только он не заболеет, он придёт.","Unless he gets ill, he will come.|Unless he gets sick, he'll come.|He will come unless he falls ill.","Unless","If|Except","p2007"],
["А что если нас поймают?","What if we get caught?|What if we are caught?","What if","What when|How if","p2008"],
["Если бы не дождь, мы бы сейчас гуляли.","If it weren't for the rain, we would be walking now.|If it wasn't for the rain, we'd be walking now.","If it weren't for","If it wasn't by|If it weren't of","p2009"],
["В случае пожара не пользуйтесь лифтом.","In case of fire, do not use the lift.|In the event of a fire, do not use the elevator.|In case of fire, do not use the elevator.","In case of","In case|In the case fire","p2010"],
["Если бы ты тогда послушал, сейчас бы не было проблем.","If you had listened then, we wouldn't have problems now.","had listened","listened|would listen","p2011"],
["Допустим, это правда.","Let's assume that it is true.|Let us assume it is true.|Assuming that it is true.","assume","assumption|resume","p2012"],
["Если нужно, я помогу.","If necessary, I'll help.|If need be, I will help.|If needed, I'll help.","If necessary","If necessarily|If necessity","p2013"],
["Без твоей поддержки я бы сдался.","Without your support, I would have given up.|Had it not been for your support, I would have given up.","would have given up","would give up have|will have given up","p2014"],
["Не будь он таким упрямым, всё было бы проще.","If he weren't so stubborn, everything would be easier.|If he wasn't so stubborn, everything would be easier.|Were he not so stubborn, everything would be easier.","weren't so stubborn","isn't so stubborn|wouldn't be so stubborn","p2015"],
["А если бы ты был президентом?","What if you were president?|What would you do if you were president?","were","are|will be","p2016"]
]));

add(X("x15","Упрёк и сожаление о прошлом","C1",[
 "<b>should / shouldn't have + V3</b> — надо было / не надо было. <b>could / might have + V3</b> — мог бы (упрёк): You might have warned me!",
 "<b>needn't have + V3</b> — сделал, но было не нужно. <b>didn't have to</b> — было не обязательно (могли и не делать).",
 "<b>may / might not have + V3</b> — возможно, не…; <b>can't have + V3</b> — не может быть, чтобы."
],"«Зря я это купил» — I shouldn't have bought it, а не I bought it in vain (так говорят редко).",[
["Тебе не стоило ему говорить.","You shouldn't have told him.","shouldn't have told","shouldn't told|shouldn't have tell","p2017"],
["Мы могли бы выиграть.","We could have won.","could have won","could won|could have win","p2018"],
["Не нужно было вставать так рано (а мы встали).","We needn't have got up so early.","needn't have got up","needn't got up|didn't need have got up","p2019"],
["Ты мог бы и предупредить!","You might have warned me!|You could have warned me!","might have warned","might warned|might have warn","p2020"],
["Возможно, он не понял.","He may not have understood.|He might not have understood.|He probably didn't understand.","may not have understood","may not understood|may have not understand","p2021"],
["Им следовало прийти раньше.","They should have come earlier.|They ought to have come earlier.|They should have arrived earlier.","should have come","should came|should have came","p2022"],
["Я бы на твоём месте так не сделал.","I wouldn't have done that if I were you.|I would not have done that in your place.","wouldn't have done","wouldn't did|won't have done","p2023"],
["Не может быть, чтобы она это сказала.","She can't have said that.|She couldn't have said that.","can't have said","can't said|mustn't have said","p2024"],
["Мне следовало бы догадаться.","I should have guessed.","should have guessed","should guessed|should have guess","p2025"],
["Ему не обязательно было приходить, но он пришёл.","He didn't have to come, but he did.","didn't have to","mustn't|didn't must","p2026"],
["Наверное, ты оставил ключи в машине.","You must have left the keys in the car.|You must have left your keys in the car.","must have left","must left|must have leave","p2027"],
["Зря я это купил.","I shouldn't have bought it.|I shouldn't have bought this.","shouldn't have bought","shouldn't have buy|shouldn't bought","p2028"],
["Возможно, письмо потерялось.","The letter may have got lost.|The letter might have been lost.|The letter may have been lost.","may have","may has|may had","p2029"],
["Надо было взять зонт.","We should have taken an umbrella.|I should have taken an umbrella.|We should have brought an umbrella.","should have taken","should took|should have took","p2030"],
["Ты не мог видеть его вчера — он в Париже.","You can't have seen him yesterday; he is in Paris.|You couldn't have seen him yesterday; he's in Paris.","can't have seen","can't saw|mustn't have seen","p2031"],
["Лучше было позвонить заранее.","It would have been better to call in advance.|It would have been better to phone in advance.","would have been better","would be better been|will have been better","p2032"]
]));

add(X("x16","Эмфаза: do, such, the very, whatever","C1",[
 "<b>do / did + глагол</b> — «правда, действительно»: I <b>do</b> try! He <b>did</b> come. <b>Do sit down!</b> — настойчивая вежливость.",
 "<b>such a + прил. + сущ.</b>, <b>so + прил. / нареч.</b>: such a good idea, so well. <b>the very</b> — «тот самый, именно».",
 "<b>whatsoever</b> после отрицания — «вообще никаких». <b>Whatever / Whoever / However</b> + предложение — «что / кто / как бы ни»."
],"«Такая хорошая идея» — such a good idea (а не so good idea). «Он так хорошо поёт» — so well (а не so good).",[
["Я правда стараюсь!","I do try!|I really do try!","do try","do tries|does try","p2033"],
["Он и правда пришёл.","He did come.|He really did come.","did come","did came|does came","p2034"],
["Это такая хорошая идея!","It's such a good idea!|That's such a good idea!","such a good idea","so a good idea|such good idea","p2035"],
["Он так хорошо поёт!","He sings so well!","so well","such well|so good","p2036"],
["Это то самое место.","This is the very place.|This is the exact place.","the very place","a very place|the very places","p2037"],
["У меня нет никаких сомнений.","I have no doubts whatsoever.|I have no doubt whatsoever.","whatsoever","whatever|what so ever","p2038"],
["Сама мысль об этом пугает.","The very thought of it is frightening.|The mere thought of it is frightening.|Just the thought of it is scary.","The very thought","The very thinking|A very thought","p2039"],
["Ты-то мне как раз и нужен!","You're just the person I need!","just the person","just a person|only the person","p2040"],
["Садитесь же, пожалуйста!","Do sit down!|Please do sit down.","Do sit down","Does sit down|Do sitting down","p2041"],
["Понятия не имею.","I haven't the slightest idea.|I don't have the slightest idea.","the slightest idea","the slightly idea|a slightest idea","p2042"],
["Бери сколько хочешь яблок.","Take as many apples as you like.|Take as many apples as you want.","as many","as much|so many","p2043"],
["Совершенно ничего не изменилось.","Absolutely nothing has changed.|Nothing at all has changed.","Absolutely nothing","Absolute nothing|Absolutely anything","p2044"],
["Именно в этот момент зазвонил телефон.","At that very moment, the phone rang.|Just at that moment, the phone rang.","very moment","very time|exact moments","p2045"],
["Что бы ты ни делал, не сдавайся.","Whatever you do, don't give up.","Whatever","What ever|Whichever","p2046"],
["Кто бы ни позвонил, меня нет.","Whoever calls, I'm not here.|Whoever calls, I am not in.","Whoever","Who ever|Whomever","p2047"],
["Как бы трудно ни было, мы справимся.","However hard it is, we will manage.|No matter how hard it is, we will manage.","However hard","How hard|However hardly","p2048"]
]));

add(X("x17","Фразовые глаголы C1","C1",[
 "<b>bring about</b> — вызвать, <b>carry out</b> — провести, <b>come across</b> — наткнуться, <b>put forward</b> — выдвинуть, <b>rule out</b> — исключить.",
 "<b>sort out</b> — уладить, <b>put off</b> — отложить, <b>catch on</b> — уловить, <b>fall behind</b> — отстать, <b>catch up on</b> — наверстать.",
 "<b>fall through</b> — сорваться, <b>bring up</b> — поднять тему, <b>get around</b> — распространиться, <b>give in to</b> — уступить."
],"Фразовые глаголы делают речь естественной, но в официальном письме их часто заменяют однословным синонимом: carry out = conduct, rule out = exclude.",[
["Реформа привела к большим переменам.","The reform brought about major changes.|The reform brought about big changes.","brought about","brought up|brought in","p2049"],
["Мы провели исследование.","We carried out a study.|We carried out research.|We conducted a study.","carried out","carried on|carried off","p2050"],
["Я случайно наткнулся на старое письмо.","I came across an old letter.","came across","came along|came over","p2051"],
["Он выдвинул новую идею.","He put forward a new idea.|He came up with a new idea.","put forward","put off|put away","p2052"],
["Мы не можем исключить эту возможность.","We can't rule out this possibility.","rule out","rule off|rule over","p2053"],
["Нужно разобраться с проблемой.","We need to sort out the problem.|We need to deal with the problem.|We need to sort the problem out.","sort out","sort off|sort up","p2054"],
["Не откладывай это.","Don't put it off.","put it off","put it on|put it out","p2055"],
["Она быстро уловила суть.","She quickly caught on.|She caught on quickly.","caught on","caught up|caught in","p2056"],
["Он отстаёт от группы.","He is falling behind the group.|He's falling behind the rest of the group.","falling behind","falling back|falling off","p2057"],
["Нам нужно наверстать упущенное.","We need to catch up on lost time.|We need to make up for lost time.","catch up on","catch on on|catch up of","p2058"],
["Проект в итоге сорвался.","The project eventually fell through.|In the end, the project fell through.","fell through","fell over|fell for","p2059"],
["Попробуй вникнуть в детали.","Try to go into the details.|Try to get into the details.","go into","go in|go on","p2060"],
["Конференцию отменили из-за погоды.","The conference was called off because of the weather.|The conference was cancelled because of the weather.","called off","called on|called out","p2061"],
["Он вскользь поднял эту тему.","He brought up the topic briefly.|He raised the topic briefly.","brought up","brought out|brought in","p2062"],
["Новость быстро разошлась.","The news quickly got around.|The news spread quickly.|The news got around quickly.","got around","got along|got over","p2063"],
["Не поддавайся давлению.","Don't give in to pressure.|Don't give in to the pressure.","give in to","give up to|give out to","p2064"]
]));

add(X("x18","Идиомы C1","C1",[
 "Идиомы — готовые образы: <b>sit on the fence</b> (не определиться), <b>cut corners</b> (халтурить), <b>the elephant in the room</b> (неудобная тема, о которой молчат).",
 "<b>hit the nail on the head</b> — попасть в точку, <b>drop the ball</b> — подвести, <b>a double-edged sword</b> — палка о двух концах, <b>in the same boat</b> — в одной лодке.",
 "Идиому нельзя менять: «a drop in the ocean», но не «a drop in the sea»."
],"Многие русские идиомы имеют английский аналог с другим образом: «не дели шкуру неубитого медведя» — don't count your chickens before they hatch.",[
["Он никак не определится, на чьей он стороне.","He is sitting on the fence.","on the fence","on the wall|over the fence","p2065"],
["Не экономьте на качестве.","Don't cut corners on quality.","cut corners","cut angles|cut edges","p2066"],
["Все молчат о главной проблеме.","Nobody mentions the elephant in the room.|No one mentions the elephant in the room.","elephant in the room","elephant at the room|lion in the room","p2067"],
["Ты попал в точку!","You hit the nail on the head!|You've hit the nail on the head!","nail","hammer|point","p2068"],
["Это пустяк.","It's no big deal.|It's not a big deal.","big deal","great deal|big affair","p2069"],
["Давай не будем торопить события.","Let's not jump the gun.|Let's not get ahead of ourselves.","jump the gun","jump the shark|run the gun","p2070"],
["Он всё провалил.","He dropped the ball.","dropped the ball","dropped the bomb|lost the ball","p2071"],
["Это палка о двух концах.","It's a double-edged sword.","double-edged sword","two-edged knife|double sword","p2072"],
["Мы в одной лодке.","We're in the same boat.","same boat","one boat|same ship","p2073"],
["Он сжёг за собой мосты.","He burned his bridges.|He has burned his bridges.|He burnt his bridges.","burned his bridges","broke his bridges|burned his roads","p2074"],
["Это капля в море.","It's a drop in the ocean.|It's a drop in the bucket.","a drop in the ocean","a drop in the sea|a drip in the ocean","p2075"],
["Он ходит вокруг да около.","He is beating around the bush.|He is beating about the bush.","beating around the bush","beating around the tree|hitting around the bush","p2076"],
["Это стоит целое состояние.","It costs a fortune.","a fortune","a luck|the fortune","p2077"],
["Давай разрядим обстановку и поговорим честно.","Let's clear the air and talk honestly.","clear the air","clean the air|clear the sky","p2078"],
["Не дели шкуру неубитого медведя.","Don't count your chickens before they hatch.","count your chickens","count your eggs|count your birds","p2079"],
["Он на седьмом небе.","He is over the moon.|He is thrilled.","over the moon","on the moon|above the moon","p2080"]
]));

add(X("x19","Коллокации C1","C1",[
 "Глагол + существительное: <b>draw a conclusion</b>, <b>raise awareness</b>, <b>meet a deadline</b>, <b>pose a threat</b>, <b>make every effort</b>, <b>seize the opportunity</b>.",
 "Прилагательное / наречие + слово: <b>strong accent</b>, <b>deeply regret</b>, <b>vital importance</b>.",
 "Коллокации не выводятся логикой: их запоминают парами."
],"Русские кальки звучат странно: «сделать вывод» — draw (не make) a conclusion, «повысить осведомлённость» — raise (не rise) awareness.",[
["Мы сделали вывод.","We drew a conclusion.|We came to a conclusion.|We reached a conclusion.","drew a conclusion","made a conclusion|did a conclusion","p2081"],
["Кампания повышает осведомлённость.","The campaign raises awareness.|The campaign is raising awareness.","raises awareness","rises awareness|lifts awareness","p2082"],
["Нам нужно уложиться в срок.","We need to meet the deadline.","meet the deadline","keep the deadline|hold the deadline","p2083"],
["Это представляет серьёзную угрозу.","This poses a serious threat.|This represents a serious threat.","poses","puts|makes","p2084"],
["Имейте в виду, что магазин закрывается рано.","Bear in mind that the shop closes early.|Keep in mind that the shop closes early.|Bear in mind that the store closes early.","Bear in mind","Bear on mind|Hold in mind","p2085"],
["Он нарушил обещание.","He broke his promise.|He broke the promise.","broke his promise","destroyed his promise|cracked his promise","p2086"],
["Она оказала большое влияние.","She had a great influence.|She had a big influence.|She exerted a strong influence.","had a great influence","made a great influence|did a great influence","p2087"],
["Решение вызвало бурную реакцию.","The decision provoked a strong reaction.|The decision caused a strong reaction.|The decision sparked a strong reaction.","provoked","provocated|provoke","p2088"],
["Мы приложим все усилия.","We will make every effort.|We will do our best.","make every effort","do every effort|make all efforts","p2089"],
["Он выполняет свои обязанности.","He fulfils his duties.|He fulfills his duties.|He carries out his duties.|He performs his duties.","fulfils","fills|fulfil","p2090"],
["Это не соответствует требованиям.","It does not meet the requirements.|It does not satisfy the requirements.","meet the requirements","meet with the requirements|reach the requirements","p2091"],
["Он взял на себя ответственность.","He took responsibility.|He took on the responsibility.|He assumed responsibility.","took responsibility","made responsibility|did responsibility","p2092"],
["Я хочу воспользоваться возможностью.","I want to seize the opportunity.|I want to take the opportunity.","seize the opportunity","seize the possibility|catch the opportunity","p2093"],
["У него сильный акцент.","He has a strong accent.|He has a heavy accent.|He has a thick accent.","strong accent","big accent|hard accent","p2094"],
["Я глубоко сожалею о случившемся.","I deeply regret what happened.|I sincerely regret what happened.","deeply regret","highly regret|greatly regretted","p2095"],
["Это вопрос жизненной важности.","It's a matter of vital importance.|It's a matter of the utmost importance.","vital importance","life importance|vitally importance","p2096"]
]));

add(X("x20","Деловая коммуникация C1","C1",[
 "Планирование: <b>going forward</b>, <b>next steps</b>, <b>prioritise</b>, <b>wrap up</b>. Связь: <b>touch base</b>, <b>follow up on</b>, <b>copy everyone in</b>.",
 "Документы и рамки: <b>as per</b> the contract, <b>outside my remit</b>, <b>acknowledge receipt</b>, <b>flag</b> an issue.",
 "Согласие: <b>on the same page</b>, <b>align</b>, <b>a win-win situation</b>. «Обсудить отдельно» — <b>take this offline</b>."
],"Деловой жаргон уместен в переписке и на встречах, но в официальных документах лучше нейтральные слова: «as per» — в письмах, «according to» — в отчётах.",[
["В дальнейшем будем отправлять отчёты по пятницам.","Going forward, we will send reports on Fridays.|From now on, we will send reports on Fridays.","Going forward","Going further|Go forward","p2097"],
["Давайте созвонимся на следующей неделе.","Let's touch base next week.|Let's catch up next week.","touch base","touch basis|touch the base","p2098"],
["Я вернусь к этому письму позже.","I'll follow up on this email.","follow up on","follow on up|follow up with on","p2099"],
["Согласно договору, оплата в течение 30 дней.","As per the contract, payment is due within 30 days.|According to the contract, payment is due within 30 days.|As per the contract, payment is due within thirty days.","As per","As for per|Per as","p2100"],
["Я отмечу этот вопрос для юристов.","I'll flag this issue for the legal team.|I will flag this issue to the legal team.","flag","flagging|flags","p2101"],
["Давайте согласуем позиции перед встречей.","Let's align our positions before the meeting.|Let's get on the same page before the meeting.","align","alien|line","p2102"],
["Нам нужно расставить приоритеты.","We need to prioritise.|We need to prioritize.|We need to set priorities.","prioritise","priority|prioritising","p2103"],
["Это вне моей компетенции.","This is outside my remit.|This falls outside my area of responsibility.|This is beyond my remit.","outside my remit","outside my remittance|out my remit","p2104"],
["Какие следующие шаги?","What are the next steps?","next steps","next stairs|nearest steps","p2105"],
["Мы на одной волне.","We're on the same page.|We're on the same wavelength.","same page","same list|one page","p2106"],
["Прошу подтвердить получение.","Please acknowledge receipt.|Please confirm receipt.|Please confirm that you have received it.","acknowledge receipt","acknowledge recipe|acknowledge reception","p2107"],
["Давайте обсудим это отдельно.","Let's discuss this offline.|Let's take this offline.|Let us discuss this privately.","offline","online|off line","p2108"],
["У нас ограниченные ресурсы.","We have limited resources.|Our resources are limited.|We have limited bandwidth.","limited","limit|limiting","p2109"],
["Предлагаю завершить обсуждение.","I suggest we wrap up the discussion.|I suggest that we wrap up the discussion.|I propose we wrap up the discussion.","wrap up","wrap off|wrap out","p2110"],
["Ставлю всех в копию.","I'm copying everyone in.","copying everyone in","copying in everyone|coping everyone in","p2111"],
["Это выгодно обеим сторонам.","It's a win-win situation.|This is a win-win situation.","win-win","win-lose|two-win","p2112"]
]));

add(X("x21","Аргументация в дискуссии","C1",[
 "Признать довод: <b>I take your point</b>, <b>That's a valid point</b>, <b>To be fair</b>, <b>I have to admit</b>.",
 "Возразить вежливо: <b>I beg to differ</b>, <b>With all due respect</b>, <b>That's beside the point</b>, <b>I'm not entirely convinced</b>.",
 "Вернуть разговор: <b>Let's get back to the point</b>, <b>Let's not make it personal</b>, <b>from a different angle</b>."
],"«Не относится к делу» — beside the point (без s). Besides — «кроме того», это другое слово.",[
["Понимаю вашу мысль, но всё же не согласен.","I take your point, but I still disagree.|I see your point, but I still disagree.","take your point","take your dot|catch your point","p2113"],
["Это не относится к делу.","That's beside the point.|That's irrelevant.","beside the point","besides the point|next to the point","p2114"],
["При всём уважении, вы ошибаетесь.","With all due respect, you are wrong.|With all due respect, you're mistaken.","With all due respect","With all respects|With due all respect","p2115"],
["Позвольте с вами не согласиться.","I beg to differ.","beg to differ","beg to different|ask to differ","p2116"],
["Справедливости ради, он старался.","To be fair, he tried.|In fairness, he tried.|To be fair, he did try.","To be fair","For be fair|To be fairly","p2117"],
["Это веский аргумент.","That's a valid point.|That's a fair point.","valid point","valid dot|validate point","p2118"],
["Давайте вернёмся к сути.","Let's get back to the point.","get back to the point","get back on the point|come back the point","p2119"],
["С одной стороны — да, с другой — нет.","On the one hand yes, on the other hand no.","On the one hand","In the one hand|On one side hand","p2120"],
["Я не совсем в этом убеждён.","I'm not entirely convinced.|I'm not completely sure.","entirely","entire|entirety","p2121"],
["Где доказательства?","What's the evidence for that?|Where is the evidence?","evidence","evidences|evident","p2122"],
["Вы упускаете важный момент.","You're missing an important point.","missing","losing|missed","p2123"],
["Это слишком упрощённо.","That's an oversimplification.|That is too simplistic.","oversimplification","oversimplicity|over simple","p2124"],
["Вынужден признать, что вы правы.","I have to admit that you're right.|I must admit you are right.","admit","admit to|accept to","p2125"],
["Это спорное утверждение.","That's a debatable claim.|That is a debatable statement.|That's a questionable claim.","debatable","debating|debated","p2126"],
["Не будем переходить на личности.","Let's not make it personal.|Let's not get personal.","make it personal","do it personal|make it personally","p2127"],
["Посмотрим на это с другой стороны.","Let's look at it from a different angle.|Let's look at it from another perspective.","from a different angle","from a different corner|in a different angle","p2128"]
]));

add(X("x22","Вероятность и шансы","C1",[
 "Почти наверняка: <b>bound to</b>, <b>there's every chance</b>, <b>in all likelihood</b>, <b>surely</b>. Скорее нет: <b>the odds are</b> he won't, <b>a slim chance</b>, <b>next to impossible</b>.",
 "Нейтрально: <b>quite likely</b>, <b>apparently</b>, <b>fifty-fifty</b>, <b>at any moment</b>.",
 "<b>There's no way…</b> — «ни за что / никаких шансов»."
],"«В любой момент» — at any moment (не in any moment). «Шансы невелики» — a slim chance (не a thin chance).",[
["Он непременно узнает.","He is bound to find out.","bound to","bounded to|bind to","p2129"],
["Велика вероятность, что пойдёт дождь.","There's every chance it will rain.|There is a good chance it will rain.|It's very likely to rain.","every chance","all chance|each chance","p2130"],
["Скорее всего, он не придёт.","The odds are he won't come.|Chances are he won't come.|He probably won't come.","The odds are","The odds is|The odd are","p2131"],
["Вряд ли это сработает.","It's unlikely to work.","unlikely to","unlike to|unlikely for","p2132"],
["Есть небольшой шанс, что мы успеем.","There's a slim chance we'll make it.|There's a small chance we'll make it.|There is a slight chance we will make it.","slim chance","thin chance|slimy chance","p2133"],
["Это вполне вероятно.","It's quite likely.|It is quite probable.","quite likely","quite like|quiet likely","p2134"],
["Ни за что он не согласится.","There's no way he'll agree.|There is no chance he will agree.","no way","no road|not way","p2135"],
["Он, по всей видимости, уехал.","He has apparently left.|Apparently, he has left.|He seems to have left.","apparently","apparent|appearingly","p2136"],
["Наверняка это ошибка.","Surely it's a mistake.|It's surely a mistake.","Surely","Sure|Surly","p2137"],
["Всё указывает на то, что он виновен.","Everything points to him being guilty.|Everything suggests that he is guilty.|All the evidence suggests he is guilty.","points to","points at|points on","p2138"],
["Маловероятно, но возможно.","Unlikely, but possible.|It's unlikely but possible.","but possible","but possibly|but possibility","p2139"],
["По всей вероятности, цены вырастут.","In all likelihood, prices will rise.|In all probability, prices will go up.|Most likely, prices will rise.","In all likelihood","In all likely|On all likelihood","p2140"],
["Это может случиться в любой момент.","It could happen at any moment.|It could happen any minute.","at any moment","in any moment|on any moment","p2141"],
["Вполне возможно, ты прав.","You might well be right.|You may well be right.","might well","might good|might very","p2142"],
["Шансы пятьдесят на пятьдесят.","It's fifty-fifty.|The chances are fifty-fifty.|It's a fifty-fifty chance.","fifty-fifty","half-half|fifty-to-fifty","p2143"],
["Это практически невозможно.","It's next to impossible.|It's practically impossible.|It is virtually impossible.","next to impossible","near to impossible|close impossible","p2144"]
]));

add(X("x23","Эллипсис и замещение","C1",[
 "Короткие ответы-заместители: <b>I hope so / I'm afraid not / I think so / I don't think so</b>, <b>If so / If not</b>.",
 "Повтор заменяют вспомогательным глаголом: She said she would help, <b>and she did</b>. I can't swim, <b>but he can</b>.",
 "<b>one / ones</b> вместо существительного: <b>the red one</b>, these ones. <b>Maybe</b> (наречие) ≠ <b>may be</b> (глагол)."
],"«Надеюсь, да» — I hope so, а не I hope yes. «Боюсь, что нет» — I'm afraid not.",[
["Ты придёшь? — Надеюсь, да.","Are you coming? I hope so.","I hope so","I hope it|I hope yes","p2145"],
["Он опоздает? — Боюсь, что нет.","Will he be late? I'm afraid not.","I'm afraid not","I'm afraid no|I'm not afraid","p2146"],
["Если да, позвони мне.","If so, call me.|If so, give me a call.","If so","If yes|If it","p2147"],
["Если нет, ничего страшного.","If not, never mind.|If not, it doesn't matter.","If not","If no|If don't","p2148"],
["Мне нужны новые туфли: эти уже старые.","I need new shoes; these ones are old.|I need new shoes; these are old.","these ones","these one|this ones","p2149"],
["Какую сумку ты хочешь? — Красную.","Which bag do you want? The red one.","The red one","The red|The red ones","p2150"],
["Я думаю, да.","I think so.","I think so","I think yes|I think it","p2151"],
["Она сказала, что поможет, и помогла.","She said she would help, and she did.","and she did","and she helped did|and she has","p2152"],
["Я не умею плавать, а он умеет.","I can't swim, but he can.","but he can","but he does|but he is","p2153"],
["Я не люблю кофе, и она тоже.","I don't like coffee, and neither does she.|I don't like coffee and she doesn't either.","neither does she","neither she does|so does she","p2154"],
["Если нужно, я это сделаю.","I'll do it if necessary.|I will do so if necessary.","do it","doing it|do this it","p2155"],
["Тебе помочь? — Да, пожалуйста.","Do you need any help? Yes, please.","Yes, please","Yes, thank|Please, yes","p2156"],
["Он придёт? — Может быть.","Is he coming? Maybe.|Is he coming? Perhaps.","Maybe","May be|Might","p2157"],
["Я сделаю, как ты сказал.","I'll do as you said.|I'll do what you said.","as you said","how you said|as you told","p2158"],
["Он хотел пойти, но не смог.","He wanted to go but couldn't.|He wanted to go, but he couldn't.","but couldn't","but didn't could|but not could","p2159"],
["Я бы сделал то же самое.","I would have done the same.","the same","same|the similar","p2160"]
]));

add(X("x24","Время и последовательность событий","C1",[
 "<b>In the meantime / Meanwhile</b> — тем временем, <b>subsequently</b> — впоследствии, <b>prior to</b> — до, <b>by then</b> — к тому времени.",
 "<b>The moment</b> he walked in — как только, <b>shortly afterwards</b> — вскоре после, <b>ultimately</b> — в конечном счёте, <b>the other day</b> — на днях.",
 "<b>in the near future</b> — без «nearest»: калька «в ближайшем будущем» = in the near future."
],"«Через неделю» — in a week; «неделю назад» — a week ago; «в ближайшем будущем» — in the near future (не in the nearest future).",[
["Тем временем дети уснули.","In the meantime, the children fell asleep.|Meanwhile, the children fell asleep.","In the meantime","In the mean|At the meantime","p2161"],
["Впоследствии он стал министром.","He subsequently became a minister.|He later became a minister.","subsequently","subsequent|consequently","p2162"],
["До встречи прочитайте документ.","Prior to the meeting, read the document.|Before the meeting, read the document.","Prior to","Prior|Prior of","p2163"],
["С тех пор мы не виделись.","We haven't seen each other since then.|We have not seen each other since.","since then","from then|after then","p2164"],
["Как только он вошёл, все замолчали.","The moment he walked in, everyone went quiet.|As soon as he came in, everyone fell silent.","The moment","In the moment|At moment","p2165"],
["К тому времени все уже ушли.","By then, everyone had already left.|By that time, everyone had left.","By then","Until then|To then","p2166"],
["Вскоре после этого он уволился.","Shortly afterwards, he quit.|Soon after that, he resigned.|Shortly after that, he quit.","Shortly afterwards","Short afterwards|Shortly afterwarding","p2167"],
["В конечном счёте решение за тобой.","Ultimately, the decision is yours.|Ultimately, it's up to you.","Ultimately","Ultimate|Lastly","p2168"],
["Поначалу мне не нравилось.","At first, I didn't like it.|Initially, I didn't like it.","At first","At firstly|In first","p2169"],
["Наконец-то!","At last!","At last","At the last|At lastly","p2170"],
["Рано или поздно он поймёт.","Sooner or later, he will understand.|Sooner or later he'll realise.","Sooner or later","Early or late|Sooner or latter","p2171"],
["Тогда-то я и понял.","It was then that I realised.|It was then that I realized.|That's when I realised.","It was then that","It was than that|It was that then","p2172"],
["Время от времени он звонит.","He calls from time to time.|He calls every now and then.|He calls now and again.","from time to time","from time on time|time to time from","p2173"],
["На днях я его видел.","I saw him the other day.","the other day","another day|the others day","p2174"],
["В ближайшем будущем цены не изменятся.","Prices won't change in the near future.","in the near future","in the nearest future|in near future","p2175"],
["Давным-давно здесь была река.","Long ago, there was a river here.|A long time ago there was a river here.|Once upon a time, there was a river here.","Long ago","Long before|Longer ago","p2176"]
]));

add(X("x25","Абстрактная лексика C1","C1",[
 "Оценка идей: <b>feasible</b> (осуществимый), <b>viable</b> (жизнеспособный), <b>compelling</b> (убедительный), <b>plausible</b> (правдоподобный), <b>untenable</b> (несостоятельный).",
 "Масштаб и важность: <b>ubiquitous</b>, <b>far-reaching</b>, <b>paramount</b>, <b>integral</b>, <b>invaluable</b>.",
 "Действия: <b>mitigate</b> (смягчить), <b>strive for</b> (стремиться к)."
],"Invaluable — «бесценный», а не «не имеющий ценности» (valueless). Ложный друг, который путают даже на продвинутом уровне.",[
["Этот план вполне осуществим.","This plan is feasible.|This plan is quite feasible.|This plan is perfectly feasible.","feasible","feasable|feasibility","p2177"],
["Это жизнеспособная альтернатива.","It's a viable alternative.","viable","vital|viability","p2178"],
["У неё убедительные доводы.","She has compelling arguments.|She makes compelling arguments.|Her arguments are compelling.","compelling","compelled|compulsive","p2179"],
["Это правдоподобное объяснение.","It's a plausible explanation.|That is a plausible explanation.","plausible","plausive|applaudable","p2180"],
["Смартфоны повсюду.","Smartphones are ubiquitous.|Smartphones are everywhere.","ubiquitous","ubiquity|obvious","p2181"],
["Меры должны смягчить последствия.","The measures should mitigate the consequences.|The measures should reduce the impact.","mitigate","migrate|militate","p2182"],
["Это неотъемлемая часть культуры.","It's an integral part of the culture.","integral","integrate|integer","p2183"],
["Он проявил большую стойкость.","He showed great resilience.","resilience","resilient|residence","p2184"],
["Это противоречивые данные.","These are conflicting data.|The data are contradictory.|This data is conflicting.","conflicting","conflicted|conflict","p2185"],
["Нужен комплексный подход.","We need a holistic approach.|We need a comprehensive approach.|A holistic approach is needed.","holistic","holy|wholesome","p2186"],
["Это нарушает хрупкий баланс.","It upsets a delicate balance.|It disrupts a delicate balance.","delicate","delicious|dedicated","p2187"],
["Его аргумент несостоятелен.","His argument is untenable.|His argument doesn't hold water.","untenable","untenant|unattainable","p2188"],
["Последствия были далеко идущими.","The consequences were far-reaching.|The implications were far-reaching.","far-reaching","far-reached|far-away","p2189"],
["Это вопрос первостепенной важности.","It's of paramount importance.|It's of the utmost importance.","paramount","parameter|tantamount","p2190"],
["Мы стремимся к прозрачности.","We strive for transparency.|We aim for transparency.","transparency","transparence|transparent","p2191"],
["Её вклад неоценим.","Her contribution is invaluable.","invaluable","valueless|unvaluable","p2192"]
]));

add(X("x26","Усилители и устойчивые сочетания","C1",[
 "Наречия-усилители сочетаются выборочно: <b>utterly</b> exhausted, <b>highly</b> unlikely, <b>deeply</b> moved, <b>bitterly</b> cold, <b>terribly</b> sorry, <b>seriously</b> ill, <b>strictly</b> forbidden.",
 "Устойчивые прилагательные: <b>fast asleep</b>, <b>wide awake</b>, <b>dead right</b>, <b>well known</b>.",
 "«Очень» не всегда very: very exhausted звучит хуже, чем utterly / completely exhausted."
],"«Тяжело болен» — seriously ill (а не heavily ill). «Крепко спит» — fast asleep (а не strongly asleep).",[
["Я совершенно измотан.","I'm utterly exhausted.|I'm completely exhausted.|I am absolutely exhausted.","utterly","utter|very","p2193"],
["Это крайне маловероятно.","It's highly unlikely.|It's extremely unlikely.","highly","high|deeply","p2194"],
["Я глубоко тронут.","I'm deeply moved.|I am deeply touched.","deeply","deep|highly","p2195"],
["Сегодня жутко холодно.","It's bitterly cold today.|It's freezing cold today.","bitterly","bitter|hardly","p2196"],
["Ребёнок крепко спит.","The baby is fast asleep.|The baby is sound asleep.","fast asleep","quickly asleep|strong asleep","p2197"],
["Сна ни в одном глазу.","I'm wide awake.","wide awake","wide awoken|widely awake","p2198"],
["Он абсолютно прав.","He's dead right.|He's absolutely right.","dead right","died right|dead correct","p2199"],
["Это совершенно разные вещи.","They are completely different things.|These are totally different things.|They're entirely different things.","completely different","complete different|completely differently","p2200"],
["Мне ужасно жаль.","I'm terribly sorry.|I'm awfully sorry.","terribly","terrible|terrifically","p2201"],
["Это хорошо известно.","It's well known.|It's a well-known fact.","well known","good known|very known","p2202"],
["Он невероятно хорош.","He's incredibly good.|He's really good.","incredibly","incredible|incredulously","p2203"],
["Я полностью согласен.","I wholeheartedly agree.|I completely agree.|I fully agree.","wholeheartedly","whole heart|wholly hearted","p2204"],
["Это строго запрещено.","It's strictly forbidden.|It is strictly prohibited.","strictly","strict|strongly","p2205"],
["Он тяжело болен.","He is seriously ill.|He is gravely ill.","seriously ill","heavily ill|hardly ill","p2206"],
["Я крайне благодарен.","I'm extremely grateful.|I am deeply grateful.|I'm very grateful.","extremely","extreme|extremly","p2207"],
["Это совершенно бесполезно.","It's totally useless.|It is completely useless.|It's absolutely pointless.","totally","total|totaly","p2208"]
]));
})();
