/* Грамматика B1–C1: 22 темы по 16 фраз. */
(function(){
const G = (id, title, level, rule, examples, trap, items) => ({ id, title, level, rule, examples, trap,
  items: items.map(a => ({ ru: a[0], en: a[1].split("|"), key: a[2], opts: a[3].split("|"), pid: a[4] })) });
window.EXTRA = window.EXTRA || {};
const add = u => { window.EXTRA[u.id] = u; };

add(G("u25","Present Perfect Continuous: уже давно","B1",[
 "<b>have / has been + -ing</b> — действие началось в прошлом и продолжается до сих пор, либо только что закончилось и виден результат: I <b>have been learning</b> English for two years.",
 "С <b>for</b> (период: for two years) и <b>since</b> (начало: since 2020). Вопрос: <b>How long have you been</b> waiting?",
 "Perfect Simple отвечает на «сколько / что сделано» (I have written three letters), Perfect Continuous — на «как долго / чем занимался» (I have been writing all day).",
 "Глаголы состояния (know, like, be) продолжаются в Perfect Simple: I <b>have known</b> him for years."
],[["She has been waiting since morning.","Она ждёт с утра."],["How long have you been waiting?","Сколько времени ты ждёшь?"]],
"Русский говорит «я учу английский два года» в настоящем. Английский требует Perfect Continuous: I have been learning, а не I am learning for two years.",[
["Я учу английский уже два года.","I have been learning English for two years.|I have been studying English for two years.","have been learning","am learning|have learning","p0689"],
["Она ждёт тебя с утра.","She has been waiting for you since morning.|She has been waiting for you since the morning.","has been waiting","is waiting|has waiting","p0690"],
["Ты выглядишь усталым. Ты бегал?","You look tired. Have you been running?","been running","ran|being run","p0691"],
["Дождь идёт с самого утра.","It has been raining since this morning.|It has been raining since morning.","has been raining","is raining|was raining","p0692"],
["Сколько времени ты здесь ждёшь?","How long have you been waiting here?|How long have you been waiting?","have you been waiting","are you waiting|did you wait","p0693"],
["Мы живём здесь десять лет.","We have been living here for ten years.|We have lived here for ten years.","for","since|from","p0694"],
["Он работает над этим проектом с марта.","He has been working on this project since March.","since","for|from","p0695"],
["Я весь день убираю квартиру, поэтому я устал.","I have been cleaning the flat all day, so I am tired.|I have been cleaning the apartment all day, so I am tired.|I have been cleaning the flat all day, so I am exhausted.","all day","every day|whole day","p0696"],
["Дети играли на улице, поэтому они грязные.","The children have been playing outside, so they are dirty.|The kids have been playing outside, so they are dirty.","have been playing","are playing|have been played","p0697"],
["Сегодня я написал три письма.","I have written three letters today.|I have written three emails today.","have written","have been writing|wrote","p0698"],
["Я искал тебя повсюду!","I have been looking for you everywhere!|I have been looking everywhere for you!","have been looking","looked|am looking","p0699"],
["Что ты делал всё это время?","What have you been doing all this time?|What have you been doing all this while?","have you been doing","did you do|are you doing","p0700"],
["Он плохо спит последние недели.","He has not been sleeping well lately.|He has not been sleeping well recently.|He has not been sleeping well for the last few weeks.","has not been sleeping","does not sleep|has not been sleep","p0701"],
["Цены растут уже несколько лет.","Prices have been rising for several years.|Prices have been going up for several years.|Prices have been increasing for several years.","have been rising","are rising|have been risen","p0702"],
["Мы встречаемся уже полгода.","We have been dating for six months.|We have been seeing each other for six months.|We have been together for six months.","have been dating","date|are dating","p0703"],
["Вы много лет курите?","Have you been smoking for many years?|Have you been smoking for years?","Have you been smoking","Do you smoke|Are you smoking","p0704"]
]));

add(G("u26","Past Perfect: «до того, как»","B1",[
 "<b>had + третья форма</b> — действие, которое произошло <b>раньше</b> другого прошлого действия: When I arrived, the film <b>had</b> already <b>started</b>.",
 "Рассказывая о прошлом, мы идём назад во времени: сначала Past Simple (arrived), потом Past Perfect для того, что случилось раньше.",
 "Часто с <b>already, just, never, by the time, after, before</b>. В косвенной речи: He said he <b>had finished</b>.",
 "Если порядок событий и так ясен (after, before), Past Simple тоже допустим: After he left, I went to bed."
],[["When I arrived, the film had already started.","Когда я пришёл, фильм уже начался."],["He had never been to London before.","Он раньше никогда не был в Лондоне."]],
"Русский не различает «начался» и «уже начался до того». Для английского это разные формы: started и had started.",[
["Когда я пришёл, фильм уже начался.","When I arrived, the film had already started.|When I came, the film had already started.|When I got there, the movie had already started.|When I arrived, the movie had already started.","had already started","already started|has already started","p0705"],
["Она сказала, что уже поела.","She said that she had already eaten.|She said she had already eaten.","had already eaten","has already eaten|already eat","p0706"],
["Я потерял ключи, которые он мне дал.","I lost the keys that he had given me.|I lost the keys he had given me.|I lost the keys which he had given me.","had given","has given|have given","p0707"],
["После того как он ушёл, я лёг спать.","After he had left, I went to bed.|After he left, I went to bed.","had left","has left|leaves","p0708"],
["Мы опоздали, потому что поезд уже ушёл.","We were late because the train had already left.|We were late because the train had left.","had already left","has already left|was already left","p0709"],
["До того лета он никогда не был в Лондоне.","He had never been to London before that summer.|He had never been to London before last summer.","had never been","has never been|never was","p0710"],
["Я понял, что уже где-то видел её.","I realised that I had seen her somewhere before.|I realized that I had seen her somewhere before.|I realised I had seen her somewhere before.|I realized I had seen her somewhere before.","had seen","have seen|has seen","p0711"],
["К десяти часам мы уже закончили работу.","By ten o'clock we had already finished the work.|By ten o'clock we had finished the work.","had already finished","have already finished|has already finished","p0712"],
["Она выглядела грустной, потому что плакала.","She looked sad because she had been crying.","had been crying","has been crying|was cried","p0713"],
["Он жил в Париже, пока не переехал в Рим.","He had lived in Paris until he moved to Rome.|He had lived in Paris before he moved to Rome.","had lived","has lived|lives","p0714"],
["Мы не знали, что ты уже уехал.","We did not know that you had already left.|We did not know you had already left.","had already left","have already left|already leave","p0715"],
["Он вошёл в комнату, где уже сидели гости.","He entered the room where the guests had already been sitting.|He walked into the room where the guests had already been sitting.","had already been sitting","have already been sitting|already sat","p0716"],
["Я не мог войти, потому что забыл ключ.","I could not get in because I had forgotten my key.|I could not get in because I had forgotten the key.|I could not get in because I had left my key.|I could not enter because I had forgotten my key.","had forgotten","have forgotten|has forgotten","p0717"],
["Когда мы приехали, он уже ушёл.","When we arrived, he had already gone.|When we got there, he had already left.|When we arrived, he had already left.","had already gone","has already gone|already goed","p0718"],
["Это был лучший фильм, который я когда-либо видел.","It was the best film I had ever seen.|It was the best movie I had ever seen.","had ever seen","have ever seen|ever saw","p0719"],
["Он спросил, закончила ли я работу.","He asked whether I had finished the work.|He asked if I had finished the work.|He asked me if I had finished the work.|He asked me whether I had finished the work.","had finished","have finished|has finished","p0720"]
]));

add(G("u27","Used to, would и привыкать","B1",[
 "<b>used to + глагол</b> — привычка или состояние в прошлом, которых больше нет: I <b>used to live</b> in a village. Отрицание и вопрос: I <b>did not use to</b>, <b>Did</b> you <b>use to</b>…?",
 "<b>would + глагол</b> — повторяющееся действие в прошлом (но не состояние): Every summer we <b>would visit</b> my grandmother.",
 "<b>be used to + -ing / существительное</b> — «привык»: I <b>am used to getting up</b> early. <b>get used to</b> — привыкать.",
 "Не смешивайте: used to live (раньше жил) и am used to living (привык жить)."
],[["I used to live in a village.","Раньше я жил в деревне."],["I am used to getting up early.","Я привык рано вставать."]],
"Русское «привык» и «раньше делал» — разные конструкции. После be / get used to — форма -ing, после used to — глагол.",[
["Раньше я жил в деревне.","I used to live in a village.","used to live","use to live|am used to live","p0737"],
["Мы каждое лето ездили к бабушке.","We used to visit our grandmother every summer.|Every summer we used to visit our grandmother.|We would visit our grandmother every summer.|We used to go to our grandmother's every summer.","used to visit","were used to visit|use to visit","p0738"],
["Я привык рано вставать.","I am used to getting up early.|I am used to waking up early.","am used to","used to|am use to","p0739"],
["Он не привык к холоду.","He is not used to the cold.|He is not used to cold weather.|He is not used to the cold weather.","is not used to","did not use to|is not use to","p0740"],
["Раньше она не любила кофе.","She did not use to like coffee.|She never used to like coffee.|She used not to like coffee.","did not use to","did not used to|was not used to","p0741"],
["Ты раньше курил?","Did you use to smoke?|Did you used to smoke?","Did you use to","Do you used to|Were you used to","p0742"],
["Я привыкаю к новой работе.","I am getting used to my new job.|I am getting used to the new job.|I am getting used to my new work.","getting used to","getting use to|get used","p0743"],
["Раньше здесь был кинотеатр.","There used to be a cinema here.|There used to be a movie theater here.","used to be","was used to be|use to be","p0744"],
["Каждое утро дед гулял в парке.","Every morning my grandfather would walk in the park.|Every morning my grandfather used to walk in the park.","would walk","would walks|will walk","p0745"],
["Я никак не привыкну к этому шуму.","I cannot get used to this noise.|I cannot get used to the noise.","get used to","get use to|got used","p0746"],
["Раньше мы жили в Риге, а теперь живём в Москве.","We used to live in Riga, but now we live in Moscow.","used to live","are used to live|use to live","p0747"],
["Ты привыкла жить одна?","Are you used to living alone?|Are you used to living on your own?","used to living","used to live|use to living","p0748"],
["В детстве я много играл на улице.","When I was a child, I used to play outside a lot.|When I was a child, I often played outside.","used to play","was used to play|use to play","p0749"],
["Он привык к жаре.","He is used to the heat.|He is used to hot weather.","used to","use to|used for","p0750"],
["Раньше она много путешествовала.","She used to travel a lot.|She travelled a lot.|She traveled a lot.","used to travel","was used to travel|use to travel","p0751"],
["Привыкнуть к другой культуре непросто.","It is not easy to get used to a different culture.|It is not easy to get used to another culture.|It is hard to get used to a different culture.|It is difficult to get used to a different culture.","get used to","use to|used to get","p0752"]
]));

add(G("u28","Хвостики-вопросы и «я тоже»","B1",[
 "<b>Question tag</b> — короткий вопрос в конце: It is cold, <b>isn't it</b>? Утверждение → отрицательный хвост, отрицание → положительный: She won't come, <b>will she</b>?",
 "Хвост повторяет вспомогательный глагол: like → don't you; has left → hasn't he; can → can't you. Особый случай: I am right, <b>aren't I</b>? Let's go, <b>shall we</b>?",
 "«Я тоже»: после утверждения — <b>So + вспомогательный + подлежащее</b> (So do I, So am I); после отрицания — <b>Neither / Nor + вспомогательный + подлежащее</b> (Neither do I).",
 "Вспомогательный глагол берём из исходной фразы: I like coffee → So <b>do</b> I; I am tired → So <b>am</b> I."
],[["You like coffee, don't you?","Ты любишь кофе, да?"],["I am tired. So am I.","Я устал. И я."]],
"В русском «правда?» и «я тоже» не меняются. В английском хвост и ответ каждый раз строятся по вспомогательному глаголу исходной фразы.",[
["Сегодня холодно, правда?","It is cold today, isn't it?","isn't it","is it|don't it","p0753"],
["Ты любишь кофе, да?","You like coffee, don't you?","don't you","do you|aren't you","p0754"],
["Она не придёт, да?","She won't come, will she?","will she","won't she|does she","p0755"],
["Они уже ушли, не так ли?","They have already left, haven't they?","haven't they","have they|didn't they","p0756"],
["Ты можешь мне помочь, да?","You can help me, can't you?","can't you","can you|don't you","p0757"],
["Он вчера звонил, да?","He called yesterday, didn't he?","didn't he","doesn't he|wasn't he","p0758"],
["Давай пойдём, хорошо?","Let's go, shall we?","shall we","will we|don't we","p0759"],
["Ты не занят, правда?","You aren't busy, are you?","are you","aren't you|do you","p0760"],
["Я прав, да?","I'm right, aren't I?","aren't I","am not I|isn't I","p0761"],
["Я люблю кофе. — И я.","I like coffee. So do I.","So do I","So I do|So am I","p0762"],
["Она живёт в Риге. — И он тоже.","She lives in Riga. So does he.|She lives in Riga. He does too.","So does he","So is he|So do he","p0763"],
["Я не знаю. — И я не знаю.","I don't know. Neither do I.|I do not know. Nor do I.","Neither do I","So do I|Neither I do","p0764"],
["Я устал. — И я.","I'm tired. So am I.","So am I","So do I|So I am","p0765"],
["Она не любит рыбу. — Он тоже.","She doesn't like fish. Neither does he.|She doesn't like fish. Nor does he.|She doesn't like fish. He doesn't either.","Neither does he","So does he|Neither do he","p0766"],
["Мы были в Париже. — И мы тоже.","We were in Paris. So were we.","So were we","So we were|So did we","p0767"],
["Я не умею плавать. — И я не умею.","I can't swim. Neither can I.|I can't swim. Nor can I.","Neither can I","So can I|Neither I can","p0768"]
]));

add(G("u29","Косвенная речь: что сказали","B1",[
 "Пересказывая чужие слова, обычно сдвигаем время «на шаг назад»: Present → Past (<b>is</b> → <b>was</b>), Past Simple → Past Perfect, <b>will</b> → <b>would</b>, <b>can</b> → <b>could</b>.",
 "Меняются слова: now → then, today → that day, tomorrow → the next day, yesterday → the day before, here → there.",
 "Глаголы: <b>say</b> (that…), <b>tell</b> (кому-то: tell me), <b>admit, promise, reply, announce</b>. Нельзя «said me», только <b>told me</b> или said to me.",
 "Если сказанное остаётся верным (общеизвестные факты), сдвигать время необязательно: The teacher said that the Earth <b>is</b> round."
],[["He said that he was tired.","Он сказал, что устал."],["She told me that she would call.","Она сказала мне, что позвонит."]],
"В русском в косвенной речи время не меняется («он сказал, что устал»). В английском чаще нужен шаг назад: said that he was tired.",[
["Он сказал, что устал.","He said that he was tired.|He said he was tired.","was","were|be","p0785"],
["Она сказала, что любит джаз.","She said that she liked jazz.|She said she liked jazz.","liked","was liking|like","p0786"],
["Он сказал, что придёт завтра.","He said that he would come the next day.|He said he would come the next day.|He said he would come the following day.|He said that he would come the following day.|He said he would come tomorrow.|He said that he would come tomorrow.","would come","will come|comes","p0787"],
["Они сказали, что уже поели.","They said that they had already eaten.|They said they had already eaten.","had already eaten","have already eaten|already eat","p0788"],
["Она сказала мне: «Я позвоню тебе завтра».","She told me that she would call me the next day.|She told me she would call me the next day.|She told me she would call me the following day.","told me","said me|talked me","p0789"],
["Он сказал: «Вчера я был в кино».","He said that he had been to the cinema the day before.|He said he had been to the cinema the day before.|He said he had been to the movies the day before.|He said he had been to the cinema the previous day.","the day before","the day after|the next day","p0790"],
["Учитель сказал, что Земля круглая.","The teacher said that the Earth is round.|The teacher said the Earth is round.|The teacher said that the Earth was round.","is round","were round|are round","p0791"],
["Она сказала, что не может прийти.","She said that she couldn't come.|She said she could not come.","couldn't","wasn't can|not could","p0792"],
["Он признался, что украл деньги.","He admitted that he had stolen the money.|He admitted he had stolen the money.|He admitted stealing the money.","had stolen","has stolen|stealed","p0793"],
["Врач сказал, что мне нужно отдохнуть.","The doctor said that I needed to rest.|The doctor said I needed to rest.|The doctor said that I should rest.|The doctor said I should rest.","needed","need|am needed","p0794"],
["Он сказал, что работает над этим.","He said that he was working on it.|He said he was working on it.","was working","were working|has worked","p0795"],
["Она ответила, что подумает.","She replied that she would think about it.|She said that she would think about it.|She answered that she would think about it.","would think","will think|thinks","p0796"],
["Он сообщил, что поезд опаздывает.","He announced that the train was late.|He said that the train was late.|He announced the train was late.|He said the train was late.","was late","were late|be late","p0797"],
["Я сказал ему не волноваться.","I told him not to worry.|I told him that he should not worry.|I told him he should not worry.","not to worry","do not worry|not worry","p0798"],
["Он пообещал, что поможет.","He promised that he would help.|He promised he would help.|He promised to help.","would help","will help|helps","p0799"],
["Мы думали, что он уже уехал.","We thought that he had already left.|We thought he had already left.|We thought he had left already.","had already left","has already left|already leave","p0800"]
]));

add(G("u30","Косвенные вопросы и просьбы","B1",[
 "В косвенном вопросе порядок слов <b>прямой</b>, без do / does: He asked <b>where I lived</b> (а не where did I live).",
 "Вопрос без вопросительного слова вводим через <b>if / whether</b>: She asked <b>if I spoke</b> French.",
 "Просьбы и приказы: <b>ask / tell / order / advise + кому + to + глагол</b>: The teacher asked us <b>to open</b> our books. Отрицание: told me <b>not to be</b> late.",
 "Время сдвигается так же, как в утверждениях: will → would, is → was, have → had."
],[["He asked where I lived.","Он спросил, где я живу."],["She told me not to be late.","Она велела мне не опаздывать."]],
"В русском «он спросил, где я живу» — просто придаточное. В английском после спросил порядок слов прямой, без вспомогательного глагола.",[
["Он спросил, где я живу.","He asked where I lived.|He asked me where I lived.|He asked me where I live.","where I lived","where did I live|where I did live","p0801"],
["Она спросила, говорю ли я по-французски.","She asked if I spoke French.|She asked whether I spoke French.|She asked me if I spoke French.|She asked me whether I spoke French.","if I spoke","did I speak|if did I speak","p0802"],
["Я спросил, сколько это стоит.","I asked how much it cost.|I asked how much it costs.|I asked how much that cost.","how much it cost","how much did it cost|how much cost it","p0803"],
["Он спросил, когда начнётся фильм.","He asked when the film would start.|He asked when the movie would start.","would start","will start|did start","p0804"],
["Она спросила, были ли мы дома.","She asked if we had been at home.|She asked whether we had been at home.|She asked if we were at home.|She asked whether we were at home.","had been","have been|were been","p0805"],
["Учитель попросил нас открыть книги.","The teacher asked us to open our books.|The teacher told us to open our books.","to open","open|opening","p0806"],
["Мама велела мне не опаздывать.","Mum told me not to be late.|My mother told me not to be late.","not to be","do not be|not be","p0807"],
["Он попросил меня помочь ему.","He asked me to help him.","to help","help|helping","p0808"],
["Врач посоветовал мне больше отдыхать.","The doctor advised me to rest more.|The doctor advised me to get more rest.|The doctor told me to rest more.","advised me","advice me|advised to me","p0809"],
["Она спросила, где находится вокзал.","She asked where the station was.|She asked me where the station was.|She asked where the station is.","where the station was","where was the station|where the station did","p0810"],
["Он спросил меня, почему я плачу.","He asked me why I was crying.|He asked why I was crying.","why I was crying","why was I crying|why I am cry","p0811"],
["Они спросили, умею ли я водить.","They asked if I could drive.|They asked whether I could drive.|They asked me if I could drive.|They asked me whether I could drive.","if I could","could I|if can I","p0812"],
["Она сказала мне никому не говорить.","She told me not to tell anyone.|She told me not to tell anybody.|She told me not to tell anyone about it.","not to tell","do not tell|to not tell","p0813"],
["Он спросил, есть ли у меня время.","He asked if I had time.|He asked whether I had time.|He asked me if I had time.|He asked me whether I had time.|He asked if I had any time.","if I had","did I have|if had I","p0814"],
["Полицейский приказал нам остановиться.","The policeman ordered us to stop.|The police officer ordered us to stop.|The policeman told us to stop.|The police officer told us to stop.","ordered us","ordered to us|order us","p0815"],
["Она хотела знать, кто звонил.","She wanted to know who had called.|She wanted to know who had phoned.|She asked who had called.|She asked who had phoned.","who had called","who has called|who have called","p0816"]
]));

add(G("u31","Условные III и смешанные: «если бы тогда»","B2",[
 "<b>Третье условное</b> — нереальное прошлое: If I <b>had known</b>, I <b>would have called</b> you (но я не знал и не позвонил). После if — Past Perfect, в главной части — would have + третья форма.",
 "<b>Смешанное условное</b>: прошлая причина → результат сейчас: If I <b>had studied</b> harder, I <b>would be working</b> in a bank now.",
 "<b>Without / But for + существительное</b> заменяет условие: Without your help, I <b>would not have managed</b>.",
 "Не ставьте would после if: If I <b>had known</b> (а не if I would have known)."
],[["If I had known, I would have called you.","Если бы я знал, я бы тебе позвонил."],["Without your help, I would not have managed.","Без твоей помощи я бы не справился."]],
"Русское «бы» одно на все случаи. В английском для прошлого нужно две части: had + третья форма в условии и would have + третья форма в результате.",[
["Если бы я знал, я бы тебе позвонил.","If I had known, I would have called you.|If I had known, I would have phoned you.","would have called","would call|will have called","p0849"],
["Если бы она не опоздала, она успела бы на поезд.","If she had not been late, she would have caught the train.|If she had not been late, she would have made the train.","would have caught","would catch|had caught","p0850"],
["Мы бы выиграли, если бы играли лучше.","We would have won if we had played better.","would have won","would win|had won","p0851"],
["Если бы я выучил слова, я бы сдал тест.","If I had learned the words, I would have passed the test.|If I had learnt the words, I would have passed the test.","had learned","would have learned|learned","p0852"],
["Если бы не дождь, мы бы пошли на пляж.","If it had not rained, we would have gone to the beach.|If it had not been for the rain, we would have gone to the beach.","would have gone","would go|had gone","p0853"],
["Что бы ты сделал, если бы знал?","What would you have done if you had known?|What would you have done had you known?","would you have done","would you do|did you do","p0854"],
["Если бы я лучше учился в школе, сейчас я работал бы в банке.","If I had studied harder at school, I would be working in a bank now.|If I had studied harder at school, I would work in a bank now.","would be working","would have working|will be working","p0855"],
["Если бы он был богаче, он купил бы тот дом.","If he had been richer, he would have bought that house.|If he had been rich, he would have bought that house.","had been richer","would have been richer|was richer","p0856"],
["Я бы не поехал, если бы знал о пробках.","I wouldn't have gone if I had known about the traffic.","wouldn't have gone","wouldn't go|hadn't gone","p0857"],
["Если бы мы выехали раньше, мы бы не опоздали.","If we had left earlier, we would not have been late.|If we had set off earlier, we would not have been late.","would not have been","would not be|had not been","p0858"],
["Если бы она была здесь вчера, она бы всё увидела.","If she had been here yesterday, she would have seen everything.|If she had been here yesterday, she would have seen it all.","would have seen","would see|had seen","p0859"],
["Если бы я родился в Италии, я бы говорил по-итальянски.","If I had been born in Italy, I would speak Italian.","would speak","would have spoke|will speak","p0860"],
["Жаль, что я не послушал тебя.","I wish I had listened to you.|If only I had listened to you.","had listened","listened|would listen","p0861"],
["Без твоей помощи я бы не справился.","Without your help, I would not have managed.|Without your help I would not have coped.","would not have managed","would not manage|had not managed","p0862"],
["Если бы он не позвонил, я бы не узнал.","If he had not called, I would not have known.","would not have known","would not know|did not known","p0863"],
["Я бы помог тебе, если бы ты попросил.","I would have helped you if you had asked.|I would have helped you if you had asked me.","had asked","asked|would have asked","p0864"]
]));

add(G("u32","Предположения: must, might, can't have","B2",[
 "Уверенность в настоящем: <b>must be</b> (наверняка), <b>might / may / could be</b> (возможно), <b>can't be</b> (не может быть). He <b>must be</b> at home.",
 "Предположения о прошлом: <b>must have + V3</b>, <b>might / may / could have + V3</b>, <b>can't / couldn't have + V3</b>. He <b>must have forgotten</b>.",
 "Для длящегося: must be doing, might be doing (She <b>may still be sleeping</b>).",
 "Упрёк и сожаление: <b>should have</b> + V3 (надо было сделать), <b>could have</b> + V3 (мог бы сделать, но не сделал)."
],[["He must be at home.","Он, должно быть, дома."],["She can't have known that.","Она не могла этого знать."]],
"Русское «должно быть» и «не может быть» передаются модальными глаголами, а не словом «должен» (must): уверенность — это must, а не should.",[
["Он, должно быть, дома: свет горит.","He must be at home: the light is on.|He must be home: the light is on.","must be","must to be|can be","p0865"],
["Она не может быть врачом, ей шестнадцать.","She can't be a doctor, she is sixteen.","can't be","must be|might be","p0866"],
["Они, возможно, уже ушли.","They might have already left.|They may have already left.|They could have already left.","might have","might has|might had","p0867"],
["Он, наверное, забыл.","He must have forgotten.|He might have forgotten.|He may have forgotten.","must have forgotten","must forgot|must had forgotten","p0868"],
["Не может быть, чтобы он это сделал.","He can't have done that.|He could not have done that.","can't have","must have|mustn't have","p0869"],
["Возможно, она ещё спит.","She may still be sleeping.|She might still be sleeping.|She could still be sleeping.|She may be still sleeping.","may still be","may still being|may still been","p0870"],
["Это, должно быть, дорого стоило.","That must have cost a lot.|It must have cost a lot.|That must have been expensive.|It must have been expensive.","must have cost","must cost have|must had cost","p0871"],
["Он, вероятно, опоздает.","He might be late.|He may be late.|He could be late.","might be","might to be|might been","p0872"],
["Ты, наверное, устал после поездки.","You must be tired after the trip.|You must be tired after the journey.","must be tired","must are tired|must is tired","p0873"],
["Она не могла этого знать.","She couldn't have known that.|She cannot have known that.","couldn't have known","couldn't knew|couldn't has known","p0874"],
["Вам следовало позвонить раньше.","You should have called earlier.|You ought to have called earlier.","should have called","should call have|must have called","p0875"],
["Они, должно быть, заблудились.","They must have got lost.|They must have gotten lost.|They must have lost their way.","must have got lost","must have get lost|must got lost","p0876"],
["Он может быть где угодно.","He could be anywhere.|He might be anywhere.|He may be anywhere.","could be","can to be|could been","p0877"],
["Кто-то, видимо, оставил окно открытым.","Someone must have left the window open.|Somebody must have left the window open.","must have left","must left|must have leave","p0878"],
["Это не может быть правдой!","That can't be true!|It can't be true!","can't be","mustn't be|might not been","p0879"],
["Она могла бы помочь, но не захотела.","She could have helped, but she didn't want to.","could have helped","could helped|could had helped","p0880"]
]));

add(G("u33","Будущее: Continuous и Perfect","B2",[
 "<b>will be + -ing</b> (Future Continuous) — действие будет идти в определённый момент будущего: This time tomorrow I <b>will be flying</b> to Rome.",
 "<b>will have + V3</b> (Future Perfect) — действие будет завершено к определённому моменту: By Friday I <b>will have finished</b> the report.",
 "Слова-подсказки: by Friday, by the end of the year, by the time you come, in a year, this time tomorrow.",
 "После by the time, when, before о будущем — Present Simple: By the time you <b>arrive</b>, I <b>will have left</b>."
],[["This time tomorrow I will be flying to Rome.","Завтра в это время я буду лететь в Рим."],["By Friday I will have finished the report.","К пятнице я закончу отчёт."]],
"Русское будущее не различает «буду делать в тот момент» и «успею закончить к тому моменту». Английский — различает: will be doing и will have done.",[
["Завтра в это время я буду лететь в Рим.","This time tomorrow I will be flying to Rome.|Tomorrow at this time I will be flying to Rome.","will be flying","will fly be|will have flown","p0897"],
["К пятнице я закончу отчёт.","By Friday I will have finished the report.","will have finished","will finish have|will have finish","p0898"],
["В восемь вечера мы будем ужинать.","At eight tonight we will be having dinner.|At eight this evening we will be having dinner.|At eight tonight we will be eating dinner.","will be having","will having|will be have","p0899"],
["Через год я буду жить в другом городе.","In a year I will be living in another city.|A year from now I will be living in another city.|In a year I will be living in a different city.","will be living","will living|will be live","p0900"],
["К концу месяца они построят дом.","By the end of the month they will have built the house.","will have built","will have build|will built","p0901"],
["Не звони в семь: я буду спать.","Do not call at seven: I will be sleeping.|Do not call me at seven: I will be sleeping.","will be sleeping","will sleeping|will have slept","p0902"],
["К тому времени, как ты придёшь, я уже уйду.","By the time you come, I will have already left.|By the time you arrive, I will have already left.|By the time you come, I will have left.|By the time you arrive, I will have left.","will have already left","will already left|have already left","p0903"],
["Ты будешь пользоваться машиной завтра?","Will you be using the car tomorrow?","Will you be using","Will you using|Do you be using","p0904"],
["В следующем году ей исполнится тридцать.","Next year she will be thirty.|Next year she will turn thirty.|She will be thirty next year.|She will turn thirty next year.","will be","will have|will has","p0905"],
["Через неделю мы уже будем дома.","In a week we will already be back home.|In a week we will have returned home.|In a week we will be back home.|A week from now we will be back home.","will already be","already will be|will already is","p0906"],
["К концу года я накоплю достаточно денег.","By the end of the year I will have saved enough money.","will have saved","will saved|will have save","p0907"],
["Я буду ждать тебя у входа.","I will be waiting for you at the entrance.|I will be waiting for you by the entrance.|I will be waiting at the entrance.","will be waiting","will waiting|will have waited","p0908"],
["Через пять лет она станет врачом.","In five years she will have become a doctor.|In five years she will be a doctor.|In five years she will have qualified as a doctor.","will have become","will become have|will have became","p0909"],
["К этому времени завтра всё уже закончится.","By this time tomorrow it will all be over.|By this time tomorrow everything will be over.|By this time tomorrow it will all have finished.","will all be over","will all been over|all will over","p0910"],
["Мы будем праздновать до утра.","We will be celebrating until morning.|We will be celebrating until the morning.","will be celebrating","will celebrating|will have celebrated","p0911"],
["Ты закончишь к моему приходу?","Will you have finished by the time I arrive?|Will you have finished by the time I get there?|Will you have finished by the time I come?","Will you have finished","Will you finished|Will you be finished have","p0912"]
]));

add(G("u34","Пассив и have something done","B2",[
 "Пассив с «безличным» подлежащим: <b>He is said to be</b> rich = <b>It is said that</b> he is rich. Так же: is believed / thought / known / reported to.",
 "<b>be being + V3</b> — действие идёт сейчас: The building <b>is being repaired</b>. <b>has been + V3</b> — результат: The letter <b>has been sent</b>. <b>can't be done</b>, <b>will be announced</b>.",
 "<b>have / get + предмет + V3</b> — «мне сделали, я отдал сделать»: I <b>had my hair cut</b>.",
 "После некоторых глаголов можно два объекта: I <b>was given</b> an injection, He <b>was told</b> to wait, We <b>were shown</b> around."
],[["He is said to be very rich.","Говорят, что он очень богат."],["I had my hair cut.","Мне подстригли волосы."]],
"Русские «подстригли, починили, сфотографировали» без указания исполнителя нельзя переводить активом I cut my hair — это значит, что вы стригли сами.",[
["Говорят, что он очень богат.","He is said to be very rich.|It is said that he is very rich.|They say he is very rich.","is said to be","says to be|is said be","p0913"],
["Мне подстригли волосы.","I had my hair cut.|I got my hair cut.","had my hair cut","had cut my hair|have my hair cut","p0914"],
["Мне отремонтировали машину.","I had my car repaired.|I got my car repaired.|I had my car fixed.|I got my car fixed.","had my car repaired","had repaired my car|had my car repair","p0915"],
["Считается, что она знает пять языков.","She is believed to speak five languages.|She is thought to speak five languages.|It is believed that she speaks five languages.|It is thought that she speaks five languages.","is believed to","believes to|is believed","p0916"],
["Мне сделали укол.","I was given an injection.|I had an injection.|I got a vaccination.|I was vaccinated.|I had a vaccination.|I got a jab.","was given","gave|was give","p0917"],
["Нам показали город.","We were shown around the city.|We were shown the city.|We were shown around the town.|We were shown the town.","were shown","showed|were show","p0918"],
["Я не хочу, чтобы меня беспокоили.","I don't want to be disturbed.","to be disturbed","to disturbed|being disturbed","p0919"],
["Он ненавидит, когда над ним смеются.","He hates being laughed at.|He hates it when people laugh at him.","being laughed at","to be laughed|laughed at","p0920"],
["За ним следили.","He was being followed.|He was followed.","was being followed","was follow|has been followed","p0921"],
["Здание сейчас ремонтируют.","The building is being repaired right now.|The building is being repaired.|The building is being renovated.","is being repaired","is repairing|is been repaired","p0922"],
["Моё окно разбили, пока меня не было.","My window was broken while I was away.|My window got broken while I was away.","was broken","were broken|broke","p0923"],
["Отчёт нужно сдать до пятницы.","The report is to be submitted by Friday.|The report has to be handed in by Friday.|The report must be handed in by Friday.","is to be submitted","is to submit|is submitted to be","p0924"],
["Результаты объявят завтра.","The results will be announced tomorrow.","will be announced","will announce|will been announced","p0925"],
["Это нельзя сделать за один день.","It can't be done in one day.|This cannot be done in one day.","can't be done","can't be do|can't done","p0926"],
["Дом, построенный в прошлом году, уже продан.","The house that was built last year has already been sold.|The house which was built last year has already been sold.|The house built last year has already been sold.","has already been sold","has already sold|has already been sell","p0927"],
["Ему сказали подождать.","He was told to wait.","was told","told|was say","p0928"]
]));

add(G("u35","Wish и If only: сожаление","B2",[
 "<b>I wish + Past Simple</b> — сожаление о настоящем: I wish I <b>lived</b> closer to work. С be допустимо <b>were</b>: I wish I <b>were</b> taller.",
 "<b>I wish + Past Perfect</b> — сожаление о прошлом: I wish I <b>had gone</b> to the party.",
 "<b>I wish + would</b> — раздражение чужим поведением или желание перемен: I wish you <b>would listen</b> to me. Не для себя: нельзя «I wish I would».",
 "<b>If only</b> — то же самое, но эмоциональнее: If only we <b>had</b> more time!"
],[["I wish I could play the guitar.","Жаль, что я не умею играть на гитаре."],["I wish I had gone to the party.","Жаль, что я не пошёл на вечеринку."]],
"«Жаль, что…» по-английски превращается во «время назад»: о настоящем — Past Simple (wish I had), о прошлом — Past Perfect (wish I had gone).",[
["Жаль, что я не умею играть на гитаре.","I wish I could play the guitar.","could play","can play|would play","p0929"],
["Хотел бы я жить ближе к работе.","I wish I lived closer to work.|I wish I lived nearer to work.","lived","live|would live","p0930"],
["Жаль, что вчера я не пошёл на вечеринку.","I wish I had gone to the party yesterday.|I wish I had gone to the party.","had gone","went|would have gone","p0931"],
["Если бы только у нас было больше времени!","If only we had more time!","had","have|would have","p0932"],
["Жаль, что ты меня не слушаешь.","I wish you would listen to me.|I wish you listened to me.","would listen","will listen|listen","p0933"],
["Хотел бы я быть выше.","I wish I were taller.|I wish I was taller.","were","am|would be","p0934"],
["Если бы только она позвонила!","If only she would call!|If only she would phone!","would call","will call|calls","p0935"],
["Жаль, что мы потеряли столько времени.","I wish we hadn't wasted so much time.|I wish we had not lost so much time.","hadn't wasted","didn't waste|wouldn't waste","p0936"],
["Я хотел бы, чтобы ты перестал курить.","I wish you would stop smoking.|I wish you would quit smoking.","would stop","will stop|stop","p0937"],
["Если бы только я знал её адрес!","If only I knew her address!|If only I had known her address!","knew","know|would know","p0938"],
["Жаль, что идёт дождь.","I wish it weren't raining.|I wish it was not raining.|I wish it would stop raining.","weren't raining","isn't raining|wouldn't raining","p0939"],
["Жаль, что я это сказал.","I wish I hadn't said that.|I regret saying that.","hadn't said","didn't say|wouldn't say","p0940"],
["Хотел бы я иметь больше друзей.","I wish I had more friends.","had","have|would have","p0941"],
["Если бы только он не опоздал!","If only he hadn't been late!","hadn't been","wasn't|wouldn't be","p0942"],
["Хотел бы я, чтобы она осталась.","I wish she would stay.|I wish she had stayed.|I wish she would stay with us.","would stay","will stay|stays","p0943"],
["Жаль, что мы не знакомы лучше.","I wish we knew each other better.","knew","know|would know","p0944"]
]));

add(G("u36","Относительные придаточные: who, which, whose","B2",[
 "<b>Определяющее</b> (без запятых, нужно для смысла): The man <b>who / that</b> lives next door. Можно опустить who / that, если это не подлежащее: The book (that) I bought.",
 "<b>Описывающее</b> (в запятых, добавочная информация): My brother, <b>who</b> lives in London, is a doctor. Здесь <b>that</b> нельзя.",
 "<b>whose</b> — чей: the girl <b>whose</b> bag is missing. <b>which</b> может относиться ко всей фразе: He lost his job, <b>which</b> upset him.",
 "Предлог можно оставить в конце (the house I grew up <b>in</b>) или вынести вперёд (the house <b>in which</b> I grew up). Люди после предлога — <b>whom</b>."
],[["My brother, who lives in London, is a doctor.","Мой брат, который живёт в Лондоне, врач."],["The man with whom I work is kind.","Человек, с которым я работаю, добрый."]],
"Русское «который» одно на всё. В английском важно: запятые (who, не that), чей (whose), всё предложение (which), предлог (with whom).",[
["Мой брат, который живёт в Лондоне, врач.","My brother, who lives in London, is a doctor.","who","that|which","p0961"],
["Москва, основанная в 1147 году, — столица России.","Moscow, which was founded in 1147, is the capital of Russia.","which","that|who","p0962"],
["Человек, с которым я работаю, очень добрый.","The man with whom I work is very kind.|The man I work with is very kind.|The man that I work with is very kind.|The man who I work with is very kind.","with whom","whom with|with who","p0963"],
["Девушка, чьего имени я не помню.","The girl whose name I don't remember.","whose","who's|which","p0964"],
["Это единственное, что мне нужно.","That is the only thing I need.|That is the only thing that I need.","only thing","one thing|alone thing","p0965"],
["Всё, что он сказал, оказалось правдой.","Everything he said turned out to be true.|Everything that he said turned out to be true.|All that he said turned out to be true.","turned out","turned off|turned in","p0966"],
["Дом, в котором я вырос, снесли.","The house where I grew up was demolished.|The house in which I grew up was demolished.|The house I grew up in was demolished.|The house that I grew up in was demolished.","grew up","growed up|grown up","p0967"],
["Он потерял работу, что его очень расстроило.","He lost his job, which upset him a lot.|He lost his job, which upset him very much.|He lost his job, which upset him greatly.","which","that|what","p0968"],
["У меня есть книга, о которой ты говорил.","I have the book you were talking about.|I have the book that you were talking about.|I have the book which you were talking about.|I have the book about which you were talking.","talking about","talking for|talking","p0969"],
["Те, кто опоздал, не получили билетов.","Those who were late did not get tickets.|Those who arrived late did not get tickets.|People who were late did not get tickets.","Those who","Who|Them who","p0970"],
["Студенты, сдавшие экзамен, могут идти домой.","Students who have passed the exam can go home.|The students who have passed the exam can go home.|Students who passed the exam can go home.","who have passed","which have passed|have passed who","p0971"],
["Я знаю женщину, дочь которой учится в Оксфорде.","I know a woman whose daughter studies at Oxford.|I know a woman whose daughter is studying at Oxford.|I know a woman whose daughter studies in Oxford.","whose","who|which her","p0972"],
["Он живёт в городе, который славится музеями.","He lives in a city that is famous for its museums.|He lives in a city which is famous for its museums.|He lives in a city famous for its museums.","famous for","famous of|famous with","p0973"],
["Она сказала правду, чему я удивился.","She told the truth, which surprised me.|She told the truth, which was a surprise to me.","which surprised","what surprised|that surprised","p0974"],
["Сумка, которую я купил вчера, уже порвалась.","The bag that I bought yesterday has already torn.|The bag I bought yesterday has already torn.|The bag which I bought yesterday has already torn.|The bag I bought yesterday has already ripped.","that I bought","what I bought|who I bought","p0975"],
["Место, где мы познакомились, закрыли.","The place where we met has been closed.|The place where we met was closed.|The place where we met has closed.","where we met","which we met|what we met","p0976"]
]));

add(G("u37","Причастные обороты: Walking home…","B2",[
 "<b>-ing</b> — действие одновременно или причина: <b>Walking</b> home, I met a friend. = While I was walking home…",
 "<b>Having + V3</b> — действие уже закончилось: <b>Having finished</b> her work, she went home. Отрицание: <b>Not knowing</b> the answer…",
 "<b>V3</b> — страдательное значение: a letter <b>written</b> yesterday, a bridge <b>built</b> in 1900. <b>-ing</b> после существительного: the girl <b>sitting</b> by the window.",
 "Подлежащее действия должно совпадать с подлежащим главной части: Walking home, <b>I</b> met a friend (а не «walking home, the rain started»)."
],[["Walking home, I met a friend.","Идя домой, я встретил друга."],["Having finished her work, she went home.","Закончив работу, она пошла домой."]],
"Русские деепричастия «идя, закончив» дословно в английском не работают: нужны -ing или having + третья форма, и у действия то же подлежащее, что в главной части.",[
["Идя домой, я встретил друга.","Walking home, I met a friend.|While walking home, I met a friend.|When I was walking home, I met a friend.","Walking","Walked|To walk","p0977"],
["Закончив работу, она пошла домой.","Having finished her work, she went home.|Having finished work, she went home.|After finishing her work, she went home.","Having finished","Having finish|Had finishing","p0978"],
["Не зная ответа, он промолчал.","Not knowing the answer, he said nothing.|Not knowing the answer, he kept silent.|Not knowing the answer, he stayed silent.","Not knowing","Knowing not|Do not knowing","p0979"],
["Девушка, сидящая у окна, — моя сестра.","The girl sitting by the window is my sister.|The girl who is sitting by the window is my sister.|The girl sitting at the window is my sister.","sitting","sat|sits","p0980"],
["Письмо, написанное вчера, ещё не отправлено.","The letter written yesterday hasn't been sent yet.","written","writing|wrote","p0981"],
["Увидев меня, он улыбнулся.","Seeing me, he smiled.|When he saw me, he smiled.|On seeing me, he smiled.","Seeing","Seen|To see","p0982"],
["Он сидел, читая газету.","He sat reading a newspaper.|He sat reading the newspaper.|He was sitting reading a newspaper.","reading","read|to reading","p0983"],
["Построенный в 1900 году, мост всё ещё стоит.","Built in 1900, the bridge is still standing.|Built in 1900, the bridge still stands.","Built","Building|Build","p0984"],
["Уставший после работы, он лёг спать.","Tired after work, he went to bed.|Being tired after work, he went to bed.|Tired after work, he lay down.","Tired","Tiring|Tire","p0985"],
["Все, кто здесь живёт, его знают.","Everyone living here knows him.|Everybody living here knows him.|Everyone who lives here knows him.","living","lived|lives","p0986"],
["Он вышел, хлопнув дверью.","He left, slamming the door.|He went out, slamming the door.|He left, banging the door.","slamming","slammed|to slam","p0987"],
["Опоздав на поезд, мы взяли такси.","Having missed the train, we took a taxi.|Having missed the train, we got a taxi.","Having missed","Have missed|Having miss","p0988"],
["Дети, играющие во дворе, очень шумят.","The children playing in the yard are very noisy.|The children playing in the yard are making a lot of noise.|The children playing in the garden are very noisy.","playing","played|plays","p0989"],
["Она сидела, глядя в окно.","She sat looking out of the window.|She sat looking out the window.|She was sitting looking out of the window.","looking","looked|look","p0990"],
["Живя рядом с работой, он экономит время.","Living near work, he saves time.|Living close to work, he saves time.|Living next to his work, he saves time.","Living","Lived|To live","p0991"],
["Это письмо, адресованное тебе.","This is a letter addressed to you.|It is a letter addressed to you.|This letter is addressed to you.","addressed","addressing|address","p0992"]
]));

add(G("u38","Связки: although, despite, however","B2",[
 "<b>Although / though / even though + предложение</b> и <b>despite / in spite of + существительное / -ing</b>: <b>Although</b> it was raining… / <b>Despite</b> the rain…",
 "<b>However</b> и <b>moreover / furthermore / besides</b> — наречия, начинают предложение и отделяются запятой: He was ill. <b>However</b>, he went to work.",
 "Причина: <b>because + предложение</b>, <b>because of / due to + существительное</b>. Цель: <b>so that + предложение</b>, <b>in order to + глагол</b>.",
 "Условие: <b>unless</b> = if … not; <b>in case</b> — «на случай». Противопоставление: <b>whereas / while</b>. Выбор: <b>either … or</b>, <b>neither … nor</b>."
],[["Although it was raining, we went for a walk.","Хотя шёл дождь, мы пошли гулять."],["Despite the rain, we went for a walk.","Несмотря на дождь, мы пошли гулять."]],
"Русское «хотя» и «несмотря на» часто путают: although — с предложением, despite — с существительным. «Из-за» — because of, а не because.",[
["Хотя шёл дождь, мы пошли гулять.","Although it was raining, we went for a walk.|Though it was raining, we went for a walk.|Even though it was raining, we went for a walk.","Although","Despite|However","p0993"],
["Несмотря на дождь, мы пошли гулять.","Despite the rain, we went for a walk.|In spite of the rain, we went for a walk.","Despite","Although|However","p0994"],
["Он был болен, однако пошёл на работу.","He was ill. However, he went to work.|He was ill, but he went to work.","However","Although|Despite","p0995"],
["Я люблю кофе, тогда как мой брат предпочитает чай.","I like coffee, whereas my brother prefers tea.|I like coffee, while my brother prefers tea.","whereas","because|despite","p0996"],
["Он остался дома, потому что был болен.","He stayed at home because he was ill.|He stayed home because he was ill.|He stayed at home as he was ill.|He stayed at home since he was ill.","because","because of|although","p0997"],
["Из-за пробок мы опоздали.","Because of the traffic, we were late.|Due to the traffic, we were late.|Owing to the traffic, we were late.","Because of","Because|Although","p0998"],
["Он усердно учился, чтобы сдать экзамен.","He studied hard so that he could pass the exam.|He studied hard in order to pass the exam.|He studied hard to pass the exam.","so that","because|although","p0999"],
["Возьми зонт на случай дождя.","Take an umbrella in case it rains.","in case","if|unless","p1000"],
["Я не буду звонить, если он сам не позвонит.","I won't call unless he calls first.","unless","if|although","p1001"],
["Кроме того, это очень дёшево.","Moreover, it is very cheap.|Besides, it is very cheap.|Furthermore, it is very cheap.|In addition, it is very cheap.","Moreover","Although|Despite","p1002"],
["В конце концов, мы нашли решение.","In the end, we found a solution.|Finally, we found a solution.","In the end","At the end|In the finish","p1003"],
["Сначала подумай, а потом говори.","First think, then speak.|Think first, then speak.|First think, and then speak.","then","after|later","p1004"],
["Либо ты идёшь, либо остаёшься.","Either you go or you stay.|Either you come or you stay.","Either","Neither|Both","p1005"],
["Ни он, ни она не знают.","Neither he nor she knows.|Neither he nor she know.|Neither of them knows.","Neither","Either|Both","p1006"],
["Как только он пришёл, мы начали.","As soon as he arrived, we started.|As soon as he came, we started.|Once he arrived, we started.","As soon as","As far as|As long as","p1007"],
["Пока ты не извинишься, я не буду с тобой говорить.","I will not speak to you until you apologise.|I will not speak to you until you apologize.","until","while|since","p1008"]
]));

add(G("u39","Фразовые глаголы: повседневные","B2",[
 "Фразовый глагол — глагол + частица, значение часто нельзя угадать: <b>give up</b> (сдаться, бросить), <b>find out</b> (выяснить), <b>look after</b> (заботиться).",
 "Разделяемые: объект-существительное можно вставить внутрь (turn <b>the light</b> off), но местоимение — только внутрь: turn <b>it</b> off. Неразделяемые: look after <b>her</b>.",
 "Одна и та же частица меняет смысл: turn <b>on</b> (включить), turn <b>off</b> (выключить), turn <b>down</b> (отклонить), turn <b>up</b> (появиться).",
 "Учите фразовые глаголы целыми блоками и в предложениях, а не по частицам."
],[["Turn off the light.","Выключи свет."],["She looks after her grandmother.","Она заботится о бабушке."]],
"Нельзя переводить частицу отдельно: give up — не «дать вверх». Значение глагола меняется целиком.",[
["Я встаю в семь.","I get up at seven.","get up","get on|get off","p1025"],
["Выключи свет.","Turn off the light.|Switch off the light.","Turn off","Turn on|Turn out","p1026"],
["Включи телевизор.","Turn on the TV.|Switch on the TV.|Turn the TV on.","Turn on","Turn off|Turn in","p1027"],
["Я ищу ключи.","I am looking for my keys.|I am looking for the keys.","looking for","looking at|looking after","p1028"],
["Она заботится о бабушке.","She looks after her grandmother.|She takes care of her grandmother.|She is looking after her grandmother.","looks after","looks for|looks at","p1029"],
["Не сдавайся!","Don't give up!","give up","give off|give away","p1030"],
["Он бросил курить.","He gave up smoking.|He quit smoking.|He stopped smoking.","gave up","gave in|gave out","p1031"],
["Я выясню, во сколько поезд.","I will find out what time the train is.|I will find out when the train leaves.|I will find out what time the train leaves.","find out","find up|find off","p1032"],
["Рейс отменили.","The flight was called off.|The flight was cancelled.|The flight was canceled.","called off","called out|called up","p1033"],
["Я работаю над новым проектом.","I am working on a new project.","working on","working in|working for","p1034"],
["Поговорим, когда я вернусь.","Let's talk when I come back.|Let us talk when I get back.","come back","come on|come off","p1035"],
["Он вчера заходил ко мне.","He dropped by yesterday.|He dropped in yesterday.|He came by yesterday.|He stopped by yesterday.|He popped in yesterday.|He called round yesterday.","dropped by","dropped off|dropped on","p1036"],
["Мы с ней поссорились.","She and I fell out.|We fell out.","fell out","fell off|fell down","p1037"],
["Я справляюсь с этим.","I am coping with it.|I am managing.|I can handle it.|I can deal with it.","coping with","coping for|coping on","p1038"],
["Давай начнём сначала.","Let's start over.|Let us start again.","start over","start up|start off","p1039"],
["Он вырос в деревне.","He grew up in a village.|He was raised in a village.|He was brought up in a village.","grew up","grew out|grew on","p1040"]
]));

add(G("u40","Фразовые глаголы: работа и идеи","B2",[
 "<b>come up with</b> — придумать, <b>put off</b> — отложить, <b>turn down</b> — отклонить, <b>take off</b> — взлететь / снять, <b>break down</b> — сломаться, <b>sign up</b> — записаться.",
 "<b>put up with</b> — мириться, <b>cut down on</b> — сократить, <b>go over</b> — разобрать, <b>fill in</b> — заполнить, <b>back down</b> — отступить.",
 "Эти глаголы часто заменяют формальные: postpone = put off, reject = turn down, tolerate = put up with, invent = come up with.",
 "Не путайте похожие: break <b>down</b> (сломаться), break <b>up</b> (расстаться), break <b>out</b> (вспыхнуть)."
],[["She came up with a great idea.","Она придумала отличную идею."],["The car broke down on the way.","Машина сломалась по дороге."]],
"Русские приставки (при-, от-, за-) соответствуют английским частицам, но не один к одному. Учите глагол и частицу как одно слово.",[
["Мне нужно это обдумать.","I need to think it over.|I need to think about it.|I need to think this over.","think it over","think it on|think it up","p1041"],
["Она придумала отличную идею.","She came up with a great idea.|She thought up a great idea.","came up with","came out with|came on with","p1042"],
["Мы отложили встречу до завтра.","We put off the meeting until tomorrow.|We put the meeting off until tomorrow.|We postponed the meeting until tomorrow.|We put off the meeting till tomorrow.","put off","put on|put out","p1043"],
["Она пошла в мать.","She takes after her mother.|She looks like her mother.","takes after","takes on|takes off","p1044"],
["Мы должны сократить расходы.","We must cut down on costs.|We have to cut down on costs.|We must cut costs.|We have to cut costs.","cut down on","cut off on|cut out on","p1045"],
["Самолёт взлетел вовремя.","The plane took off on time.|The plane took off punctually.","took off","took out|took up","p1046"],
["Я записался на курсы.","I signed up for a course.|I signed up for the course.|I enrolled in a course.|I enrolled on a course.","signed up","signed off|signed in","p1047"],
["Машина сломалась по дороге.","The car broke down on the way.|The car broke down on the road.","broke down","broke up|broke out","p1048"],
["Они расстались.","They broke up.|They split up.","broke up","broke down|broke out","p1049"],
["Начался пожар.","A fire broke out.","broke out","broke in|broke off","p1050"],
["Он отклонил моё предложение.","He turned down my offer.|He rejected my offer.|He declined my offer.","turned down","turned up|turned over","p1051"],
["Она появилась на вечеринке поздно.","She turned up at the party late.|She showed up at the party late.|She turned up late at the party.|She showed up late at the party.","turned up","turned in|turned on","p1052"],
["Давайте разберём этот вопрос.","Let's go over this issue.|Let us talk this over.|Let's discuss this issue.","go over","go off|go out","p1053"],
["Я не могу мириться с этим шумом.","I can't put up with this noise.|I cannot stand this noise.","put up with","put up for|put in with","p1054"],
["Заполните, пожалуйста, эту форму.","Please fill in this form.|Please fill out this form.|Fill in this form, please.|Fill out this form, please.","fill in","fill on|fill off","p1055"],
["Мы никогда не отступим.","We will never back down.|We will never give in.|We will never give up.|We won't ever back down.","back down","back in|back at","p1056"]
]));

add(G("u41","Устойчивые сочетания и идиомы","B2",[
 "<b>make</b> — создавать, результат: make a decision, make a mistake. <b>do</b> — действие, дело: do homework, do the dishes. Не меняйте: нельзя «do a mistake».",
 "<b>take</b>: take a shower, take a break, take care. <b>pay</b>: pay attention. <b>save</b>: save time. <b>heavy rain</b>, <b>strong coffee</b>.",
 "Идиомы нельзя переводить дословно: <b>a piece of cake</b> — проще простого, <b>once in a blue moon</b> — раз в сто лет, <b>break a leg</b> — ни пуха ни пера.",
 "Сочетаемость в английском фиксирована: русскому «сильный» соответствует то strong, то heavy, то big."
],[["I made a mistake.","Я сделал ошибку."],["It was a piece of cake.","Это было проще простого."]],
"Слова сочетаются не по логике, а по традиции: make a decision, но do homework; heavy rain, но strong coffee.",[
["Мне нужно принять решение.","I have to make a decision.|I must make a decision.","make","do|have","p1073"],
["Я каждый день делаю домашнее задание.","I do my homework every day.|I do my homework daily.","do","make|take","p1074"],
["Я принимаю душ каждое утро.","I take a shower every morning.|I have a shower every morning.|I have a shower in the morning.","take","make|do","p1075"],
["Я сделал ошибку.","I made a mistake.|I have made a mistake.","made","did|took","p1076"],
["Обратите внимание, пожалуйста.","Please pay attention.|Pay attention, please.","pay","give|make","p1077"],
["Давай сделаем перерыв.","Let's take a break.|Let us have a break.","take","make|do","p1078"],
["Это сэкономит вам время.","This will save you time.|This will save time.","save","keep|hold","p1079"],
["Она хорошо зарабатывает.","She earns good money.|She makes good money.|She earns a good salary.","earns","wins|gains","p1080"],
["Целый день шёл сильный дождь.","There was heavy rain all day.|It was heavy rain all day.","heavy","strong|big","p1081"],
["Я люблю крепкий кофе.","I like strong coffee.","strong","heavy|hard","p1082"],
["Это было проще простого.","It was a piece of cake.|It was very easy.|It was easy as pie.","piece of cake","piece of bread|slice of cake","p1083"],
["Он наконец выдал секрет.","He finally let the cat out of the bag.|He finally spilled the beans.","cat","dog|bird","p1084"],
["Ни пуха ни пера!","Break a leg!","leg","arm|hand","p1085"],
["Это не по мне.","It's not my cup of tea.|That is not my cup of tea.","cup of tea","cup of coffee|glass of tea","p1086"],
["Время — деньги.","Time is money.","money","gold|water","p1087"],
["Я вижу его раз в сто лет.","I see him once in a blue moon.","blue moon","red moon|full moon","p1088"]
]));

add(G("u42","Артикли и количества: тонкости","B2",[
 "<b>the + прилагательное</b> = группа людей: <b>the rich</b>, the poor, the young. Институты без артикля, когда речь о назначении: go <b>to school</b>, in <b>hospital</b>, <b>at</b> home, go <b>home</b>.",
 "С конкретным зданием — артикль: I am going to <b>the school</b> for a meeting. Приёмы пищи без артикля: during <b>lunch</b>. Дни и сезоны: <b>last</b> Tuesday, in summer.",
 "<b>each</b> и <b>every</b> — каждый по отдельности (+ ед. число), <b>all</b> — все вместе, <b>both</b> — оба. <b>any of / none of / neither of</b>.",
 "<b>another</b> (ещё один: another cup) и <b>the other</b> (второй из двух): Give me another cup. The other option is better."
],[["The rich are not always happy.","Богатые не всегда счастливы."],["I go to school every day.","Я хожу в школу каждый день."]],
"Артикль часто зависит от смысла: go to school (учиться), go to the school (в здание школы). В русском такого различия нет.",[
["Богатые не всегда счастливы.","The rich are not always happy.|Rich people are not always happy.","The rich","Rich|A rich","p1089"],
["Я хожу в школу каждый день.","I go to school every day.|I go to school each day.","go to school","go to the school|go to a school","p1090"],
["Я иду в школу на собрание.","I am going to the school for a meeting.","the school","school|a school","p1091"],
["Она лежит в больнице.","She is in hospital.|She is in the hospital.","in hospital","in a hospital|at hospital","p1092"],
["Он вернулся домой.","He went home.|He came home.|He returned home.","home","to home|to the home","p1093"],
["Во время обеда пошёл дождь.","It rained during lunch.|It rained at lunch.","lunch","the lunch|a lunch","p1094"],
["Я видела её в прошлый вторник.","I saw her last Tuesday.","last","the last|in last","p1095"],
["Цены выросли на десять процентов.","Prices rose by ten percent.|Prices went up by ten percent.|Prices rose ten percent.|Prices increased by ten per cent.","by","on|in","p1096"],
["Я не знаю никого из них.","I don't know any of them.|I know none of them.","any of","none of|some of","p1097"],
["Оба моих брата живут в Москве.","Both of my brothers live in Moscow.|Both my brothers live in Moscow.","Both","Every|Each","p1098"],
["Каждый студент получил книгу.","Each student received a book.|Every student received a book.|Each student got a book.|Every student got a book.","Each","All|Both","p1099"],
["Все студенты сдали экзамен.","All the students passed the exam.|All students passed the exam.|All of the students passed the exam.","All","Every|Each","p1100"],
["Никто из них не пришёл.","None of them came.|None of them showed up.|Neither of them came.","None","No|Not","p1101"],
["У него почти нет шансов.","He has little chance.|He has few chances.|He does not have much of a chance.","little","a few|few","p1102"],
["Другой вариант лучше.","The other option is better.|The other choice is better.|The other variant is better.","other","another|others","p1103"],
["Дай мне ещё одну чашку.","Give me another cup.|Give me a different cup.|Give me another cup, please.","another","other|others","p1104"]
]));

add(G("u43","Инверсия и выделение","C1",[
 "После отрицательных и ограничительных слов в начале предложения порядок слов <b>как в вопросе</b>: <b>Never have I seen</b> such beauty. <b>Rarely does</b> anyone help. <b>Only then did I</b> understand.",
 "<b>Hardly / No sooner … when / than</b>: <b>Hardly had he entered when</b> the phone rang. <b>No sooner had she left than</b> he called.",
 "<b>Not only … but also</b>: <b>Not only was he</b> late, but he forgot… Формально без if: <b>Had I known</b>, I would have called; <b>Should you need</b> help…; <b>Were he</b> here…",
 "Выделение: <b>It was Anna who</b> called (именно Анна). <b>What I need is</b> time (то, что мне нужно, — время). <b>Here comes</b> the bus."
],[["Never have I seen such beauty.","Никогда я не видел такой красоты."],["It was Anna who called me.","Это Анна позвонила мне."]],
"В русском порядок слов свободный и выделение делается интонацией. В английском для акцента нужна инверсия или конструкция it is … who.",[
["Никогда я не видел такой красоты.","Never have I seen such beauty.|Never in my life have I seen such beauty.","have I seen","I have seen|I saw","p1105"],
["Едва он вошёл, зазвонил телефон.","Hardly had he entered when the phone rang.|No sooner had he entered than the phone rang.|Hardly had he come in when the phone rang.","Hardly had","Hardly he had|Hardly did","p1106"],
["Только тогда я понял.","Only then did I understand.|Only then did I realise.|Only then did I realize.","did I","I did|have I","p1107"],
["Ни при каких обстоятельствах я не соглашусь.","Under no circumstances will I agree.|On no account will I agree.","will I","I will|do I","p1108"],
["Он не только опоздал, но и забыл документы.","Not only was he late, but he also forgot the documents.|Not only was he late but he also forgot his documents.","was he","he was|did he","p1109"],
["Мало кто так помогает.","Rarely does anyone help like that.|Rarely does anybody help like that.|Seldom does anyone help like that.","does anyone","anyone does|do anyone","p1110"],
["Если бы я знал, я бы позвонил.","Had I known, I would have called.","Had I known","If I known|Did I know","p1111"],
["Если вам понадобится помощь, позвоните мне.","Should you need help, please call me.|If you need help, call me.","Should you need","If should you need|Would you need","p1112"],
["Именно он разбил окно.","It was he who broke the window.|It was him who broke the window.|It was he that broke the window.","It was","He was|There was","p1113"],
["Мне нужно именно время.","What I need is time.|What I need is more time.","What I need","That I need|Which I need","p1114"],
["Вчера мне позвонила Анна, а не Мария.","It was Anna who called me yesterday, not Maria.|It was Anna that called me yesterday, not Maria.|It was Anna who phoned me yesterday, not Maria.","who called","which called|whom called","p1115"],
["В углу стоял старый стол.","In the corner stood an old table.|In the corner there stood an old table.","stood","stands|was stand","p1116"],
["Вот идёт автобус!","Here comes the bus!","Here comes","Here is come|Here coming","p1117"],
["Он был так удивлён, что не мог говорить.","So surprised was he that he could not speak.","was he","he was|did he","p1118"],
["Я понятия не имею, что делать.","I have no idea what to do.|I have not the faintest idea what to do.","no idea","none idea|not idea","p1119"],
["Не успела она уйти, как он позвонил.","No sooner had she left than he called.|No sooner had she left than he phoned.|Hardly had she left when he called.","than","when|that","p1120"]
]));

add(G("u44","Формальный стиль и осторожные формулировки","C1",[
 "Деловое письмо: <b>I am writing with regard to</b>…, <b>Please find attached</b>…, <b>I look forward to hearing from you</b>, <b>We would appreciate</b> your reply, <b>I apologise for the inconvenience</b>.",
 "Осторожные оценки: <b>It seems / appears that</b>, <b>This appears to be</b>, <b>may / might be</b>, <b>is likely to</b>, <b>As far as I can tell</b>. Они смягчают категоричность.",
 "Структура мысли: <b>In my opinion</b>, <b>To sum up</b>, <b>I would like to point out that</b>, <b>This does not, however, mean that</b>…",
 "Избегайте разговорных сокращений в формальном тексте и фразовых глаголов, когда есть нейтральный синоним."
],[["I look forward to hearing from you.","С нетерпением жду вашего ответа."],["It depends on the circumstances.","Это зависит от обстоятельств."]],
"Русская вежливость часто через «пожалуйста» и «будьте добры». Английская — через модальные и осторожные формы: would appreciate, would like to, it appears that.",[
["Прошу прощения за неудобства.","I apologise for the inconvenience.|I apologize for the inconvenience.|We apologise for the inconvenience.|We apologize for the inconvenience.","apologise","excuse|forgive","p1121"],
["Мы будем признательны за ваш ответ.","We would appreciate your reply.|We would appreciate your response.|We would be grateful for your reply.|We would be grateful for your response.","would appreciate","will appreciating|would appreciated","p1122"],
["Прилагаю документы.","Please find the documents attached.|Please find attached the documents.|I attach the documents.","find","found|finding","p1123"],
["Дайте знать, если у вас возникнут вопросы.","Please let me know if you have any questions.|Please let us know if you have any questions.|Let me know if you have any questions.","let me know","tell me know|let me to know","p1124"],
["Я пишу в связи с вашим заказом.","I am writing with regard to your order.|I am writing regarding your order.|I am writing in connection with your order.|I am writing about your order.","with regard to","with regarding to|in regard of","p1125"],
["Насколько я понимаю, проблема решена.","As far as I understand, the problem has been solved.|As far as I know, the problem has been solved.|As far as I can tell, the problem has been solved.","As far as","As long as|As soon as","p1126"],
["Кажется, это ошибка.","It seems that this is a mistake.|It seems this is a mistake.|It appears that this is a mistake.|This appears to be a mistake.|This seems to be a mistake.","It seems","It seen|It is seem","p1127"],
["Возможно, мы ошибаемся.","We may be mistaken.|We might be mistaken.|We could be wrong.|We may be wrong.","may be mistaken","may mistaken|may been mistaken","p1128"],
["Вероятно, он придёт позже.","He is likely to come later.|He will probably come later.|He is likely to arrive later.","is likely to","is likely|likely to be","p1129"],
["Я хотел бы отметить, что это важно.","I would like to point out that this is important.|I would like to stress that this is important.|I would like to emphasise that this is important.|I would like to emphasize that this is important.","point out","point on|point at","p1130"],
["С нетерпением жду вашего ответа.","I look forward to hearing from you.|I look forward to your reply.|I am looking forward to hearing from you.","look forward to","look forward for|look forwards to","p1131"],
["Подводя итог, нам нужно больше времени.","To sum up, we need more time.|In conclusion, we need more time.|To conclude, we need more time.","To sum up","To add up|To sum off","p1132"],
["Это, однако, не означает, что мы согласны.","This does not, however, mean that we agree.|This does not mean, however, that we agree.|However, this does not mean that we agree.","does not","do not|is not","p1133"],
["По моему мнению, решение разумно.","In my opinion, the decision is sensible.|In my view, the decision is sensible.|In my opinion, the decision is reasonable.|In my view, the decision is reasonable.","In my opinion","By my opinion|On my opinion","p1134"],
["Я полностью с вами согласен.","I completely agree with you.|I fully agree with you.|I totally agree with you.|I entirely agree with you.","agree with","agree to|agree on","p1135"],
["Это зависит от обстоятельств.","It depends on the circumstances.|That depends on the circumstances.","depends on","depends of|depends from","p1136"]
]));

add(G("u45","Нереальное и желательное: it is time, would rather","C1",[
 "<b>It is time + Past Simple</b> — «давно пора»: It is time we <b>went</b> home. <b>would rather + глагол</b> — «предпочёл бы»: I would rather <b>stay</b>. <b>would rather + Past Simple</b> — чтобы другой: I would rather you <b>didn't smoke</b>.",
 "<b>Suppose / Imagine + Past Simple</b> — «представь, что». <b>as if / as though + Past Simple (were)</b> — «будто»: He behaves as if he <b>were</b> the boss.",
 "<b>Сослагательное наклонение</b> (формальный стиль): It is important that everyone <b>know</b> the rules, I insist that he <b>apologise</b>.",
 "<b>If you should</b> — «если вдруг»: If you <b>should</b> change your mind, call me. <b>Even if he asked</b>, I would refuse."
],[["It is time we went home.","Пора идти домой."],["I would rather you didn't smoke here.","Я предпочёл бы, чтобы ты здесь не курил."]],
"По-русски «чтобы» всегда с глаголом в прошедшем. В английском это разные формы: would rather you didn't, insist that he apologise, wish he would.",[
["Пора идти домой.","It is time we went home.|It is time to go home.|It is time for us to go home.","went","go|will go","p1153"],
["Я бы лучше остался дома.","I'd rather stay at home.|I would rather stay home.","rather stay","rather to stay|better stay","p1154"],
["Я предпочёл бы, чтобы ты здесь не курил.","I'd rather you didn't smoke here.|I would prefer you not to smoke here.","didn't smoke","don't smoke|wouldn't smoke","p1155"],
["Представь, что у тебя миллион. Что бы ты сделал?","Suppose you had a million. What would you do?|Imagine you had a million. What would you do?","had","have|would have","p1156"],
["Он ведёт себя так, будто он начальник.","He behaves as if he were the boss.|He behaves as if he was the boss.|He acts as if he were the boss.|He acts as if he was the boss.|He behaves as though he were the boss.","as if","as like|like if","p1157"],
["Важно, чтобы все знали правила.","It is important that everyone know the rules.|It is important that everyone knows the rules.","know","to know|will know","p1158"],
["Я настаиваю, чтобы он извинился.","I insist that he apologise.|I insist that he apologize.|I insist that he apologises.|I insist that he apologizes.|I insist that he should apologise.","apologise","will apologise|to apologise","p1159"],
["Как будто он всё знает.","It is as if he knows everything.|It is as though he knows everything.|It seems as if he knows everything.","as if","as for|like if","p1160"],
["Если бы он только был здесь.","If only he were here.|If only he was here.","were","is|would be","p1161"],
["Если бы он не был болен, он пришёл бы.","Were he not ill, he would come.|Were he not ill, he would have come.|If he were not ill, he would come.|If he were not ill, he would have come.","Were he not","If he not were|Was he not","p1162"],
["На случай, если что-то пойдёт не так.","In case something goes wrong.|Just in case something goes wrong.","In case","In case of|Just in","p1163"],
["Я хотел бы, чтобы ты ушёл.","I would like you to leave.|I want you to leave.","you to leave","that you leave|you leave","p1164"],
["Тебе лучше помолчать.","You'd better keep quiet.|You had better be quiet.","better keep","better to keep|best keep","p1165"],
["Если вдруг ты передумаешь, позвони.","If you should change your mind, call me.|Should you change your mind, call me.|If you happen to change your mind, call me.","should","would|shall","p1166"],
["Даже если бы он попросил, я бы отказал.","Even if he asked, I would refuse.|Even if he asked me, I would refuse.|Even if he were to ask, I would refuse.|Even if he were to ask me, I would refuse.","asked","ask|would ask","p1167"],
["Скорее бы выходные!","I wish it were the weekend already!|If only it were the weekend!|I wish the weekend would come sooner!","were","is|would be","p1168"]
]));

add(G("u46","Похожие слова и ложные друзья","C1",[
 "Пары, которые путают: <b>affect</b> (влиять, глагол) и <b>effect</b> (влияние, существительное); <b>lend</b> (одолжить кому) и <b>borrow</b> (одолжить у кого); <b>rise</b> (расти, без объекта) и <b>raise</b> (поднимать что-то).",
 "<b>lie – lying</b> (лежать) и <b>lay – laid</b> (класть); <b>bring</b> (принести сюда) и <b>take</b> (унести отсюда); <b>economic</b> (экономический) и <b>economical</b> (экономный); <b>sensible</b> (разумный) и <b>sensitive</b> (чувствительный).",
 "<b>Ложные друзья</b>: actually — «на самом деле», а не «актуально / сейчас» (currently); eventually — «в конце концов», а не «возможно» (possibly).",
 "Если слово похоже на русское, проверьте по словарю: часто значение расходится."
],[["The weather affected our plans.","Погода повлияла на наши планы."],["Actually, I do not know.","На самом деле я не знаю."]],
"Английские слова, похожие на русские, коварны: actual ≠ актуальный, eventually ≠ возможно, sensible ≠ сенсибельный.",[
["Погода повлияла на наши планы.","The weather affected our plans.","affected","effected|effect","p1169"],
["Это сильно повлияло на меня.","It had a big effect on me.|It had a great effect on me.|It had a huge effect on me.","effect","affect|affects","p1170"],
["Одолжи мне ручку.","Lend me a pen.|Could you lend me a pen?|Can you lend me a pen?","Lend","Borrow|Rent","p1171"],
["Можно одолжить у тебя ручку?","Can I borrow a pen from you?|Can I borrow your pen?|Could I borrow a pen from you?|Could I borrow your pen?","borrow","lend|rent","p1172"],
["Цены растут.","Prices are rising.|Prices are going up.","rising","raising|arising","p1173"],
["Они повысили зарплату.","They raised the salary.|They have raised the salary.|They raised salaries.|They have raised salaries.","raised","rose|risen","p1174"],
["Он лежит на диване.","He is lying on the sofa.|He is lying on the couch.","lying","laying|lieing","p1175"],
["Она положила книгу на стол.","She laid the book on the table.|She put the book on the table.|She placed the book on the table.","laid","lay|lied","p1176"],
["Принеси мне воды.","Bring me some water.|Bring me water.|Bring me a glass of water.","Bring","Take|Carry","p1177"],
["Возьми зонт с собой.","Take an umbrella with you.|Take your umbrella with you.|Take an umbrella.","Take","Bring|Carry","p1178"],
["Это экономичная машина.","It is an economical car.|It is a fuel-efficient car.","economical","economic|economy","p1179"],
["Это историческое событие.","It is a historic event.|It is a historical event.|This is a historic event.","historic","historian|histories","p1180"],
["Она очень чувствительная.","She is very sensitive.","sensitive","sensible|sensitiv","p1181"],
["Это разумное решение.","It is a sensible decision.|That is a sensible decision.","sensible","sensitive|sensual","p1182"],
["На самом деле я не знаю.","Actually, I don't know.|In fact, I do not know.|To be honest, I do not know.","Actually","Actual|Currently","p1183"],
["В конце концов он согласился.","Eventually he agreed.|In the end he agreed.|Finally he agreed.","Eventually","Possibly|Eventual","p1184"]
]));
})();
