/* Расширение курса, уровни A2 и B1: 21 тема по 16 фраз. Не вычитано носителем языка: только автоматический QA.
   A2-темы стоят в конце блока A2 и используют только грамматику до Present Perfect включительно. */
(function(){
const X = (id, title, level, rule, trap, items) => ({ id, title, level, rule, trap, draft: true,
  examples: items.slice(0, 2).map(a => [a[1].split("|")[0], a[0]]),
  items: items.map(a => ({ ru: a[0], en: a[1].split("|"), key: a[2], opts: a[3].split("|"), pid: a[4] })) });
window.EXTRA = window.EXTRA || {};
const add = u => { window.EXTRA[u.id] = u; };

/* ============================ A2 ============================ */

add(X("x43","Рассказ: сначала, потом, наконец","A2",[
 "Порядок событий: <b>First</b> (сначала), <b>Then / After that</b> (потом), <b>Later</b> (позже), <b>Finally / In the end</b> (наконец).",
 "<b>At first</b> — «поначалу» (потом стало иначе), а не «во-первых». <b>The next day</b> — на следующий день.",
 "«Через час» — <b>an hour later</b>; «неделю назад» — <b>a week ago</b>."
],"«Через час» о прошлом — an hour later (а не through an hour). «Неделю назад» — a week ago (а не before a week).",[
["Сначала мы позавтракали.","First, we had breakfast.","First","At first|Firstly at","p1201"],
["Потом мы пошли в парк.","Then we went to the park.|After that, we went to the park.","Then","Than|When","p1202"],
["После этого мы пообедали.","After that, we had lunch.|Then we had lunch.","After that","After|After this that","p1203"],
["Наконец мы вернулись домой.","Finally, we came back home.|In the end, we went home.|Finally, we went home.","Finally","Final|At the end","p1204"],
["Я читаю перед сном.","I read before bed.|I read before going to bed.|Before bed, I read.","before bed","before the bed|until bed","p1205"],
["После работы он пошёл в спортзал.","After work, he went to the gym.","After work","After the work|Behind work","p1206"],
["Позже я позвонил маме.","Later, I called my mum.|Later, I phoned my mother.","Later","Latter|Lately","p1207"],
["Поначалу было трудно, но потом стало легче.","At first it was hard, but then it got easier.|At first it was difficult, but later it became easier.","At first","First of|Firstly","p1208"],
["Вчера я встал в семь.","Yesterday I got up at seven.|I got up at seven yesterday.","got up","get up|getted up","p1209"],
["Потом я принял душ и оделся.","Then I had a shower and got dressed.|Then I took a shower and got dressed.","got dressed","dressed up|got dress","p1210"],
["Мы приехали в отель вечером.","We arrived at the hotel in the evening.|We got to the hotel in the evening.","arrived at","arrived to|arrived in","p1211"],
["На следующий день мы поехали на море.","The next day, we went to the sea.|The next day we went to the beach.","The next day","The nearest day|Next day the","p1212"],
["Через час фильм закончился.","An hour later, the film ended.|After an hour, the film finished.|An hour later the movie ended.","An hour later","Through an hour|A hour later","p1213"],
["Неделю назад я начал новую работу.","A week ago, I started a new job.|I started a new job a week ago.","A week ago","Before a week|A week before","p1214"],
["Сначала прочитай, потом отвечай.","Read first, then answer.|First read, then answer.","first","firstly at|at first","p1215"],
["В конце концов мы нашли отель.","In the end, we found a hotel.|Finally, we found the hotel.","In the end","At the end|In the finish","p1216"]
]));

add(X("x44","Too, enough и сравнения в речи","A2",[
 "<b>too + прилагательное</b> — слишком: too heavy. <b>прилагательное + enough</b> — достаточно: tall enough. <b>enough + существительное</b>: enough time.",
 "<b>too many</b> (исчисляемое) / <b>too much</b> (неисчисляемое). <b>too hot to drink</b> — слишком горячий, чтобы пить.",
 "Сравнения: <b>as … as</b>, <b>not as … as</b>, <b>the same as</b>, <b>different from</b>."
],"Enough ставится после прилагательного: tall enough (а не enough tall). «Слишком много людей» — too many people (а не too much).",[
["Этот чемодан слишком тяжёлый.","This suitcase is too heavy.","too heavy","to heavy|very much heavy","p1217"],
["Я недостаточно высокий.","I'm not tall enough.","tall enough","enough tall|tall enought","p1218"],
["У нас достаточно времени.","We have enough time.|We've got enough time.","enough time","enough of time|enought time","p1219"],
["Он не такой высокий, как отец.","He isn't as tall as his father.|He is not as tall as his dad.","as tall as","so tall like|as tall than","p1220"],
["Кофе слишком горячий, чтобы пить.","The coffee is too hot to drink.","too hot to drink","too hot for drink|so hot to drink","p1221"],
["Она достаточно взрослая, чтобы решать сама.","She's old enough to decide for herself.|She is old enough to decide by herself.","old enough to","enough old to|old enough for","p1222"],
["Сегодня не так холодно, как вчера.","It's not as cold today as yesterday.|Today it isn't as cold as yesterday.","as cold","as colder|so colder","p1223"],
["Здесь слишком много людей.","There are too many people here.","too many","too much|very many","p1224"],
["В чае слишком много сахара.","There's too much sugar in the tea.|There is too much sugar in this tea.","too much","too many|very much","p1225"],
["Этот город больше, чем я думал.","This city is bigger than I thought.","bigger than","more big than|biger than","p1226"],
["Мой телефон такой же, как твой.","My phone is the same as yours.","the same as","the same like|the same than","p1227"],
["Твоя сумка отличается от моей.","Your bag is different from mine.|Your bag is different to mine.|Your bag is different than mine.","different from","different of|different with","p1228"],
["Это слишком дорого для меня.","It's too expensive for me.","for me","to me|at me","p1229"],
["Он говорит по-английски лучше меня.","He speaks English better than me.|He speaks English better than I do.","better than","more good than|gooder than","p1230"],
["Книга почти такая же интересная, как фильм.","This book is almost as interesting as the film.|The book is nearly as interesting as the movie.","almost as interesting as","almost so interesting as|almost as interesting than","p1231"],
["Мой английский недостаточно хорош.","My English isn't good enough.","good enough","enough good|well enough","p1232"]
]));

add(X("x45","Просьбы и жалобы в отеле и кафе","A2",[
 "Вежливая просьба: <b>Could you…, please?</b>, <b>Can I have…?</b>, <b>Could I have another…?</b>",
 "Описать проблему: <b>The shower doesn't work</b>, <b>There are no towels</b>, <b>There's a problem with…</b>, <b>This isn't what I ordered</b>.",
 "<b>another</b> — ещё один / другой (один предмет): another room, another blanket."
],"«Другой номер» — another room (а не other room). «Не работает» — doesn't work / isn't working (а не don't work).",[
["Не могли бы вы открыть окно?","Could you open the window, please?|Could you please open the window?|Can you open the window, please?","Could you open","Could you to open|Could you opening","p1233"],
["Мой номер очень шумный.","My room is very noisy.","noisy","noise|noisly","p1234"],
["Душ не работает.","The shower doesn't work.|The shower isn't working.","doesn't work","don't work|isn't work","p1235"],
["В номере нет полотенец.","There are no towels in the room.|There aren't any towels in the room.","no towels","not towels|no towel","p1236"],
["Можно мне другой номер?","Can I have another room?|Could I have a different room?","another room","other room|an other room","p1237"],
["Суп холодный.","The soup is cold.","cold","colded|coldly","p1238"],
["Вы можете помочь мне с багажом?","Can you help me with my luggage?|Could you help me with my bags?","help me with","help me in|help to me with","p1239"],
["Извините, это не то, что я заказывал.","Sorry, this isn't what I ordered.|Excuse me, this is not what I ordered.","what I ordered","that I ordered|what I order","p1240"],
["Здесь очень грязно.","It's very dirty here.|It is very dirty in here.","dirty","dirt|dirtly","p1241"],
["Можно мне ещё одно одеяло?","Can I have another blanket?|Could I have an extra blanket?","another blanket","other blanket|one more of blanket","p1242"],
["Интернет очень медленный.","The internet is very slow.|The Wi-Fi is very slow.","slow","slowly|slowness","p1243"],
["Пожалуйста, говорите тише.","Please speak more quietly.|Please be quieter.|Could you speak more quietly, please?","more quietly","more quiet|quietlier","p1244"],
["У меня проблема с ключом.","I have a problem with my key.|There's a problem with my key.","problem with","problem in|problem of","p1245"],
["Мой заказ ещё не пришёл.","My order hasn't arrived yet.","hasn't arrived","didn't arrived|hasn't arrive","p1246"],
["Вы можете это исправить?","Can you fix it?|Could you fix it, please?","fix","fixing|fixed","p1247"],
["Спасибо, что помогли.","Thank you for your help.|Thanks for helping me.|Thank you for helping.","Thank you for","Thank you to|Thanks you for","p1248"]
]));

add(X("x46","Путешествия: вокзал, отель, дорога","A2",[
 "Транспорт: <b>check-in desk</b>, <b>window seat</b>, <b>return ticket</b>, <b>the next bus</b>, <b>nearest station</b>, <b>The train is 20 minutes late</b>.",
 "Отель: <b>I have a reservation</b>, <b>check-out</b>, <b>Can I leave my suitcase here?</b>",
 "Luggage — неисчисляемое: my luggage <b>is</b> lost (а не luggages)."
],"«Следующий автобус» — the next bus (а не the nearest bus). «Ближайшая станция» — the nearest station. Русское «ближайший» переводится по-разному.",[
["Где стойка регистрации?","Where is the check-in desk?","check-in desk","check desk|checking desk","p1249"],
["Мне место у окна, пожалуйста.","A window seat, please.|I'd like a window seat, please.","window seat","seat window|windows seat","p1250"],
["Когда отходит следующий автобус?","When does the next bus leave?|What time does the next bus leave?","next bus","nearest bus|next of bus","p1251"],
["Я хочу взять машину напрокат на три дня.","I'd like to rent a car for three days.|I want to hire a car for three days.","rent a car","lease car|rent car","p1252"],
["Сколько стоит билет туда и обратно?","How much is a return ticket?|How much is a round-trip ticket?","return ticket","back ticket|returning ticket","p1253"],
["Мой багаж потерялся.","My luggage is lost.|My luggage has been lost.|I've lost my luggage.","luggage","luggages|baggages","p1254"],
["Поезд опаздывает на двадцать минут.","The train is twenty minutes late.|The train is 20 minutes late.","twenty minutes late","late twenty minutes|late on twenty minutes","p1255"],
["Где ближайшая станция метро?","Where is the nearest metro station?|Where's the nearest underground station?|Where is the nearest subway station?","nearest","next|most near","p1256"],
["Это далеко отсюда?","Is it far from here?","far from here","far of here|far here","p1257"],
["Остановите здесь, пожалуйста.","Stop here, please.|Can you stop here, please?","Stop here","Stay here|Stand here","p1258"],
["У меня забронирован номер.","I have a reservation.|I have a booking.|I've booked a room.","reservation","reserve|preservation","p1259"],
["Можно оставить здесь чемодан?","Can I leave my suitcase here?","leave","live|let","p1260"],
["Во сколько нужно освободить номер?","What time is check-out?|When is check-out?","check-out","check-off|checking out","p1261"],
["Я ищу пункт обмена валюты.","I'm looking for a currency exchange.|I'm looking for an exchange office.","currency exchange","money change|currency change","p1262"],
["Можно посмотреть карту?","Can I see the map?|Could I have a look at the map?","see the map","look the map|watch the map","p1263"],
["Счастливого пути!","Have a safe trip!|Have a safe journey!","safe trip","safety trip|safe travel","p1264"]
]));

add(X("x47","Работа: повседневные фразы","A2",[
 "График: <b>from nine to five</b>, <b>full-time</b>, <b>part-time</b>, <b>on holiday</b>, <b>late for work</b>.",
 "Люди и задачи: <b>get on well with colleagues</b>, <b>responsible for</b>, <b>a lot of work</b> (work — неисчисляемое).",
 "Карьера: <b>looking for a job</b>, <b>quit a job</b>, <b>get fired</b>, <b>get a promotion</b>."
],"«Много работы» — a lot of work (а не many works). «Ищу работу» — looking for a job (а не searching a job).",[
["Я работаю с девяти до пяти.","I work from nine to five.|I work nine to five.","from nine to five","since nine to five|from nine at five","p1265"],
["Я работаю полный день.","I work full-time.|I have a full-time job.","full-time","full-day|all-time","p1266"],
["Моя сестра работает неполный день.","My sister works part-time.","part-time","half-time|part-day","p1267"],
["У меня встреча в два.","I have a meeting at two.|I've got a meeting at two.","a meeting","a meet|a meetings","p1268"],
["Он ищет работу.","He is looking for a job.|He's looking for work.","looking for a job","looking a job|searching a job","p1269"],
["Я устал от работы.","I'm tired of my job.|I am tired of work.","tired of","tired from|tired with","p1270"],
["Она хорошо ладит с коллегами.","She gets on well with her colleagues.|She gets along well with her colleagues.","gets on well with","gets well with|gets on good with","p1271"],
["Мой начальник в отпуске.","My boss is on holiday.|My boss is on vacation.","on holiday","in holiday|at holiday","p1272"],
["Я опоздал на работу.","I was late for work.","late for work","late on work|late at work","p1273"],
["Он уволился в прошлом месяце.","He quit his job last month.|He left his job last month.","quit his job","quitted his job|fired his job","p1274"],
["Его уволили.","He got fired.|He was fired.|He got sacked.","got fired","got fire|was fire","p1275"],
["Я работаю в маркетинге.","I work in marketing.","in marketing","on marketing|at marketing","p1276"],
["У меня сегодня много работы.","I have a lot of work today.|I've got lots of work today.","a lot of work","a lot of works|many works","p1277"],
["Я отправлю отчёт завтра.","I'll send the report tomorrow.","send the report","sent the report|send report the","p1278"],
["Он отвечает за продажи.","He is responsible for sales.|He's in charge of sales.","responsible for","responsible of|responsible about","p1279"],
["Я хочу получить повышение.","I want to get a promotion.|I'd like to get promoted.","get a promotion","get a promote|take a promotion","p1280"]
]));

add(X("x48","У врача","A2",[
 "Врач спрашивает: <b>What seems to be the problem?</b>, <b>How long have you had these symptoms?</b>, <b>Show me where it hurts.</b>",
 "Пациент: <b>I have an earache</b>, <b>I feel dizzy</b>, <b>I don't sleep well</b>, <b>I'm allergic to…</b>",
 "Лечение: <b>prescription</b> (рецепт), <b>three times a day</b>, <b>a blood test</b>, <b>make an appointment</b>."
],"«Рецепт» у врача — prescription (а recipe — кулинарный рецепт, receipt — чек). Три похожих слова, три разных значения.",[
["Что вас беспокоит?","What seems to be the problem?|What's the matter?|What's wrong?","seems to be","seems be|seem to be","p1281"],
["У меня болит ухо.","I have an earache.|My ear hurts.","earache","earpain|ear-hurt","p1282"],
["Как давно у вас эти симптомы?","How long have you had these symptoms?","How long have you had","How long do you have|How long you have had","p1283"],
["Мне нужен рецепт.","I need a prescription.","prescription","recipe|receipt","p1284"],
["Принимайте по одной таблетке три раза в день.","Take one tablet three times a day.|Take one pill three times a day.","three times a day","three times in day|three times on a day","p1285"],
["У меня аллергия на пенициллин.","I'm allergic to penicillin.","allergic to","allergic on|allergic for","p1286"],
["Вам нужно больше отдыхать.","You need to rest more.|You should rest more.|You need more rest.","rest more","rest much|resting more","p1287"],
["Я плохо сплю.","I don't sleep well.","sleep well","sleep good|sleep nice","p1288"],
["У меня кружится голова.","I feel dizzy.|I'm dizzy.","dizzy","busy|dizzily","p1289"],
["Покажите, где болит.","Show me where it hurts.","where it hurts","where does it hurt|where it hurt","p1290"],
["Мне нужно записаться к врачу.","I need to make an appointment.|I need to book an appointment with the doctor.","make an appointment","do an appointment|take an appointment","p1291"],
["Он сломал руку.","He broke his arm.","broke his arm","broke the arm of him|broken his arm","p1292"],
["Через пару дней вам станет лучше.","You'll feel better in a couple of days.|You will feel better in a few days.","feel better","feel more good|feel gooder","p1293"],
["Мне нужно сдать анализ крови.","I need to have a blood test.|I need a blood test.","blood test","bloody test|blood exam","p1294"],
["Пейте больше воды.","Drink more water.|You should drink more water.","more water","much water|more of water","p1295"],
["Я плохо себя чувствую.","I don't feel well.|I'm not feeling well.","feel well","feel goodly|fell well","p1296"]
]));

add(X("x49","Телефонный разговор","A2",[
 "Начать: <b>Hello, can I speak to…?</b>, <b>Who's calling?</b>. Подождать: <b>Hold on, please</b>.",
 "Если человека нет: <b>She's not here at the moment</b>, <b>Can I leave a message?</b>, <b>I'll call back later</b>.",
 "Проблемы со связью: <b>Could you speak up?</b>, <b>We got cut off</b>, <b>You have the wrong number</b>."
],"«Вы не туда попали» — You have the wrong number (а не bad number). «Говорите громче» — speak up.",[
["Алло, можно Анну?","Hello, can I speak to Anna, please?|Hello, could I speak to Anna?","speak to","talk Anna|speak Anna","p1297"],
["Кто звонит?","Who's calling?|Who is speaking?","Who's calling","Who's talking|Who calls","p1298"],
["Подождите, пожалуйста.","Hold on, please.|Hold the line, please.","Hold on","Hold in|Wait on","p1299"],
["Её сейчас нет.","She's not here at the moment.|She isn't in right now.","at the moment","in the moment|on the moment","p1300"],
["Можно оставить сообщение?","Can I leave a message?","leave a message","let a message|give a message","p1301"],
["Я перезвоню позже.","I'll call back later.|I will call you back later.","call back","call behind|call return","p1302"],
["Я вас плохо слышу.","I can't hear you very well.","hear you","listen you|hear to you","p1303"],
["Вы не туда попали.","You have the wrong number.|You've got the wrong number.","wrong number","bad number|false number","p1304"],
["Можете говорить громче?","Could you speak up, please?|Can you speak louder, please?","speak up","speak on|speak high","p1305"],
["Нас разъединили.","We got cut off.|The call dropped.|The line went dead.","got cut off","got cut out|got cutted off","p1306"],
["Я наберу тебя вечером.","I'll give you a call this evening.|I'll call you tonight.|I will ring you this evening.","give you a call","give you call|make you a call","p1307"],
["Передайте ему, что звонила Мария.","Please tell him that Maria called.|Could you tell him Maria called?","Maria called","Maria calls|Maria has call","p1308"],
["Какой у вас номер телефона?","What's your phone number?","phone number","phone's number|telephone num","p1309"],
["Я не могу до него дозвониться.","I can't get through to him.|I can't reach him.","get through to","get across to|get to through","p1310"],
["У меня садится батарея.","My battery is running low.|My phone is dying.","running low","running little|going low","p1311"],
["Спасибо за звонок.","Thanks for calling.|Thank you for calling.","for calling","for call|to calling","p1312"]
]));

add(X("x50","Сообщения и короткие письма","A2",[
 "Начало: <b>Hi! Thanks for your message.</b> Ответ: <b>Sorry I didn't reply sooner.</b>",
 "Договориться: <b>Let me know if…</b>, <b>Let's meet outside the café at six</b>, <b>See you on Saturday!</b>",
 "Концовки: <b>Love</b> (близким), <b>Best wishes / Best regards / Kind regards</b> (нейтрально)."
],"«Поздравляю с…» — Congratulations on (а не with). «Спасибо за…» — Thanks for (а не to).",[
["Привет! Спасибо за сообщение.","Hi! Thanks for your message.|Hi! Thank you for your message.","Thanks for","Thanks to|Thank for","p1313"],
["Как у тебя дела?","How are things?|How are you doing?","How are things","How is things|How are thing","p1314"],
["Увидимся в субботу!","See you on Saturday!|See you Saturday!","See you","Look you|Watch you","p1315"],
["Дай знать, сможешь ли прийти.","Let me know if you can come.","Let me know","Let me to know|Let know me","p1316"],
["Целую, Анна.","Love, Anna.|Lots of love, Anna.","Love","Loving|Lovely","p1317"],
["Извини, что не ответил раньше.","Sorry I didn't reply sooner.|Sorry for not replying sooner.","reply sooner","reply soonest|answer more soon","p1318"],
["Напиши, когда будешь свободен.","Text me when you are free.|Message me when you're free.","when you are free","when you will be free|when you free","p1319"],
["С днём рождения! Всего наилучшего!","Happy birthday! All the best!|Happy birthday! Best wishes!","All the best","All the good|All best","p1320"],
["Я прикрепил фото.","I've attached a photo.|I have attached a picture.","attached","attaching|attach","p1321"],
["Встречаемся у кафе в шесть.","Let's meet outside the café at six.|Let's meet outside the cafe at six.|Meet you outside the café at six.","outside the","at outside the|near of the","p1322"],
["Не опаздывай!","Don't be late!","be late","late|being late","p1323"],
["Отличные новости!","Great news!","news","new|newses","p1324"],
["Спасибо за приглашение.","Thanks for the invitation.|Thank you for inviting me.|Thanks for the invite.","invitation","invite of|inviting of","p1325"],
["К сожалению, я не смогу прийти.","Unfortunately, I can't come.|Unfortunately, I won't be able to come.","Unfortunately","Unfortunate|Infortunately","p1326"],
["С наилучшими пожеланиями, Иван.","Best regards, Ivan.|Kind regards, Ivan.|Best wishes, Ivan.","Best regards","Best regard|Good regards","p1327"],
["Поздравляю с новой работой!","Congratulations on your new job!","Congratulations on","Congratulations with|Congratulation on","p1328"]
]));

add(X("x51","Как делать: наречия образа действия","A2",[
 "Наречие обычно = прилагательное + <b>-ly</b>: slow → slowly, careful → carefully, easy → easily.",
 "Исключения: good → <b>well</b>, fast → <b>fast</b>, hard → <b>hard</b>, late → <b>late</b>, early → <b>early</b>.",
 "<b>hardly</b> — «едва», <b>lately</b> — «в последнее время»: это другие слова, не наречия от hard и late."
],"«Он много работает» — He works hard (а не hardly: это «почти не работает»). «Хорошо поёт» — sings well (а не good).",[
["Он водит машину очень быстро.","He drives very fast.","fast","fastly|quick","p1329"],
["Она хорошо поёт.","She sings well.","well","good|goodly","p1330"],
["Говорите медленно, пожалуйста.","Speak slowly, please.|Please speak slowly.","slowly","slow|slowlier","p1331"],
["Он много работает.","He works hard.|He works a lot.","hard","hardly|hardy","p1332"],
["Я с трудом его понимаю.","I can hardly understand him.|I can barely understand him.","hardly","hard|hardy","p1333"],
["Пожалуйста, закрой дверь тихо.","Please close the door quietly.","quietly","quiet|quite","p1334"],
["Она тщательно проверила работу.","She checked the work carefully.","carefully","careful|carefuly","p1335"],
["Он поздно пришёл.","He came late.|He arrived late.","late","lately|latly","p1336"],
["Ты отлично говоришь по-английски!","You speak English very well!|Your English is very good!","very well","very good|very goodly","p1337"],
["Я быстро позавтракал.","I had a quick breakfast.|I quickly had breakfast.|I had breakfast quickly.","quick","quickly|quicker","p1338"],
["Внимательно слушайте.","Listen carefully.","carefully","careful|carefull","p1339"],
["Он громко смеётся.","He laughs loudly.","loudly","loudness|loudy","p1340"],
["Она легко сдала экзамен.","She passed the exam easily.","easily","easy|easyly","p1341"],
["Мы рано встаём.","We get up early.","early","earlily|earliest","p1342"],
["Он плохо играет в теннис.","He plays tennis badly.|He's bad at tennis.","badly","bad|badily","p1343"],
["Ешь медленнее!","Eat more slowly!","more slowly","slowlier|more slow","p1344"]
]));

add(X("x52","Опыт и новости: Present Perfect в разговоре","A2",[
 "Опыт: <b>Have you ever been to…?</b>, <b>I've never tried…</b>, <b>How many times have you…?</b>",
 "Свежие новости: <b>Guess what! I've passed!</b>, <b>She has just come back</b>, <b>Prices have gone up</b>.",
 "<b>already</b> (уже), <b>yet</b> (ещё не / уже? в вопросе), <b>since</b> (с какого-то момента), <b>for</b> (в течение)."
],"«Ты когда-нибудь был в Японии?» — Have you ever been to Japan (с to, не in). Третьи формы неправильных глаголов учим: ridden, seen, gone.",[
["Ты когда-нибудь был в Японии?","Have you ever been to Japan?","ever been to","ever went to|ever be to","p1345"],
["Я никогда не пробовал суши.","I've never tried sushi.|I've never eaten sushi.","never tried","never try|didn't never try","p1346"],
["Угадай что! Я сдал экзамен!","Guess what! I've passed the exam!|Guess what! I passed my exam!","Guess what","Guess that|Guess which","p1347"],
["Она только что вернулась из отпуска.","She has just come back from holiday.|She's just got back from her holiday.|She just came back from vacation.","just come back","just come black|just comes back","p1348"],
["Мы уже купили билеты.","We've already bought the tickets.","already bought","already buyed|already buy","p1349"],
["Ты уже посмотрел новый фильм?","Have you seen the new film yet?|Have you already seen the new movie?","seen","saw|seed","p1350"],
["Я ещё не решил.","I haven't decided yet.","decided yet","decide yet|decided already","p1351"],
["Сколько раз ты был в Лондоне?","How many times have you been to London?","How many times","How much times|How many time","p1352"],
["Я знаю его с детства.","I've known him since childhood.|I have known him since I was a child.","since childhood","for childhood|since a childhood","p1353"],
["Цены выросли.","Prices have gone up.|Prices have risen.","have gone up","have went up|have go up","p1354"],
["Он уже ушёл домой.","He has already gone home.","already gone home","already went to home|already gone to home","p1355"],
["Я прочитал половину книги.","I've read half the book.|I have read half of the book.","half the book","half of book|the half book","p1356"],
["Мы дружим уже много лет.","We've been friends for years.|We have been friends for many years.","been friends for","been friends since|be friends for","p1357"],
["Ты когда-нибудь ездил верхом?","Have you ever ridden a horse?","ridden","rode|rided","p1358"],
["Я ни разу не опоздал.","I've never been late.","never been late","never been lately|never be late","p1359"],
["Что случилось?","What's happened?|What happened?","happened","happen|happend","p1360"]
]));

/* ============================ B1 ============================ */

add(X("x53","Как выразить мнение","B1",[
 "<b>I think / I believe</b>, <b>In my opinion / In my view</b>, <b>From my point of view</b>, <b>It seems to me that</b>, <b>Personally</b>.",
 "Уверенность: <b>I'm sure / I'm convinced</b>. Осторожность: <b>As far as I know</b>, <b>To be honest</b>.",
 "Отрицательное мнение: <b>I don't think it's…</b> (отрицание при think), а не «I think it's not…»."
],"«Что ты думаешь об этом?» — What do you think? (а не How do you think?). «По-моему» — In my opinion (а не On my opinion).",[
["По-моему, это отличная идея.","In my opinion, it's a great idea.|I think it's a great idea.","In my opinion","On my opinion|By my opinion","p1361"],
["Мне кажется, он прав.","It seems to me that he's right.|I think he is right.","It seems to me","It seems for me|It's seems to me","p1362"],
["Я считаю, что образование важно.","I believe that education is important.|I think education is important.","believe","believe in that|am believing","p1363"],
["С моей точки зрения, это ошибка.","From my point of view, it's a mistake.|From my point of view, this is a mistake.","From my point of view","From my point of view of|On my point of view","p1364"],
["Лично я предпочитаю чай.","Personally, I prefer tea.","Personally","Personal|Person","p1365"],
["Я уверен, что всё будет хорошо.","I'm sure everything will be fine.|I am sure that it will be OK.","I'm sure","I'm sured|I sure","p1366"],
["Насколько я знаю, он женат.","As far as I know, he's married.","As far as I know","As long as I know|As far I know","p1367"],
["Честно говоря, фильм мне не понравился.","To be honest, I didn't like the film.|Honestly, I didn't like the movie.","To be honest","To be honestly|For be honest","p1368"],
["Я не думаю, что это хорошая идея.","I don't think it's a good idea.|I do not think that it is a good idea.","don't think","think|not think","p1369"],
["Я убеждён, что он невиновен.","I'm convinced that he is innocent.|I am sure he is innocent.","convinced","convinced in|convincing","p1370"],
["Мне всё равно.","I don't mind.|It doesn't matter to me.|I don't care.","don't mind","don't mean|don't mine","p1371"],
["Что ты об этом думаешь?","What do you think about it?|What do you think of it?","What do you think","How do you think|What you think","p1372"],
["На мой взгляд, цена слишком высокая.","In my view, the price is too high.","In my view","On my view|In my look","p1373"],
["Я так не думаю.","I don't think so.","think so","think it|think this","p1374"],
["Мне кажется, ты устал.","You seem tired.|I think you're tired.","seem","seems|seeming","p1375"],
["Я в этом сомневаюсь.","I doubt it.","doubt it","doubt in it|doubt about it","p1376"]
]));

add(X("x54","Согласие и несогласие","B1",[
 "Согласие: <b>I agree with you</b>, <b>You're right</b>, <b>Absolutely!</b>, <b>Exactly!</b>, <b>I think so too</b>, <b>You have a point</b>.",
 "Частичное: <b>That's true, but…</b>, <b>I agree up to a point</b>, <b>I see what you mean, but…</b>",
 "Несогласие: <b>I don't agree</b>, <b>I totally disagree</b>, <b>Not exactly</b>, <b>No way!</b>"
],"«Я согласен» — I agree (это глагол!), а не I am agree. «Я не согласен» — I don't agree / I disagree.",[
["Я согласен с тобой.","I agree with you.","agree with you","am agree with you|agree to you","p1377"],
["Я не согласен.","I don't agree.","don't agree","am not agree|not agree","p1378"],
["Ты прав.","You're right.","right","true|rightly","p1379"],
["Это правда, но это дорого.","That's true, but it's expensive.","That's true","That's truth|That truly","p1380"],
["Абсолютно!","Absolutely!","Absolutely","Absolute|Absolutly","p1381"],
["Не уверен, что согласен.","I'm not sure I agree.|I am not sure that I agree.","not sure","not sured|no sure","p1382"],
["Я тоже так думаю.","I think so too.|I think the same.","think so too","think too so|think also so","p1383"],
["Ни за что!","No way!|Absolutely not!","No way","Not way|No road","p1384"],
["Возможно, но я сомневаюсь.","Maybe, but I doubt it.|Perhaps, but I doubt it.","doubt it","doubt in it|doubt to it","p1385"],
["В этом что-то есть.","You have a point.|You've got a point.","have a point","have a dot|have point","p1386"],
["Не совсем так.","Not exactly.|Not quite.","Not exactly","No exactly|Not exact","p1387"],
["Я категорически с этим не согласен.","I totally disagree with that.|I completely disagree with that.","totally disagree","totally not agree|total disagree","p1388"],
["Именно так!","Exactly!|That's exactly right!","Exactly","Exact|Exactness","p1389"],
["Согласен до определённой степени.","I agree up to a point.|I partly agree.","up to a point","up to point|until a point","p1390"],
["Это не так.","That's not true.","not true","no true|not truth","p1391"],
["Понимаю, что ты имеешь в виду, но не согласен.","I see what you mean, but I don't agree.|I understand what you mean, but I don't agree.","see what you mean","see what you mean it|see what do you mean","p1392"]
]));

add(X("x55","Рассказ о прошлом опыте","B1",[
 "Однократное событие — Past Simple: <b>I once got lost</b>, <b>It happened three years ago</b>.",
 "Фон и длительность — Past Continuous: <b>While we were walking, it started to rain</b>. Привычка в прошлом — <b>used to</b>.",
 "Оценка: <b>the best day of my life</b>, <b>an unforgettable experience</b>, <b>I'll never forget…</b>"
],"«Три года назад» — three years ago (а не before three years). «Провели время» — had a wonderful time (а не spent).",[
["Однажды я заблудился в Париже.","I once got lost in Paris.|Once I got lost in Paris.","got lost","got lose|lost myself","p1393"],
["Это был лучший день в моей жизни.","It was the best day of my life.|That was the best day of my life.","of my life","of mine life|for my life","p1394"],
["Я никогда не забуду ту поездку.","I'll never forget that trip.|I will never forget that journey.","never forget","never not forget|not never forget","p1395"],
["В детстве я жил у моря.","When I was a child, I lived by the sea.|When I was a kid, I lived near the sea.","When I was a child","When I was child|When I were a child","p1396"],
["Пока мы гуляли, начался дождь.","While we were walking, it started to rain.|While we were walking, it began raining.","were walking","walked|was walking","p1397"],
["Я впервые увидел снег в десять лет.","I saw snow for the first time when I was ten.|The first time I saw snow was when I was ten.","for the first time","for first time|by the first time","p1398"],
["Раньше я боялся собак.","I used to be afraid of dogs.","used to be","was used to be|use to be","p1399"],
["Это случилось три года назад.","It happened three years ago.","three years ago","before three years|three years before","p1400"],
["Мы чудесно провели время в Риме.","We had a wonderful time in Rome.|We had a great time in Rome.","had a wonderful time","spent a wonderful time|passed a wonderful time","p1401"],
["Тогда я не знал, что он врач.","At that time, I didn't know he was a doctor.|Back then, I didn't know that he was a doctor.","At that time","In that time|On that time","p1402"],
["Всё пошло не так.","Everything went wrong.","went wrong","went not right|gone wrong","p1403"],
["Я до сих пор помню его лицо.","I still remember his face.","still remember","yet remember|still am remembering","p1404"],
["Нам очень повезло.","We were very lucky.","lucky","luck|luckily","p1405"],
["Я чуть не опоздал на самолёт.","I almost missed the plane.|I nearly missed my flight.","almost missed","almost lost|almost late","p1406"],
["Это был незабываемый опыт.","It was an unforgettable experience.","experience","experiment|expirience","p1407"],
["В итоге всё закончилось хорошо.","In the end, everything turned out fine.|In the end, it all ended well.","turned out fine","turned out finely|turned fine out","p1408"]
]));

add(X("x56","Планы и условия","B1",[
 "Планы: <b>I'm planning to</b>, <b>I'm thinking of + -ing</b>, <b>I hope to</b>, <b>I'm going to</b>, <b>I haven't decided yet</b>.",
 "Условия: <b>If I have time, I'll…</b>, <b>If it doesn't rain…</b>, <b>as soon as you arrive</b> (без will после if / when / as soon as).",
 "Предложить: <b>Maybe we could…?</b>, <b>Shall we…?</b>, <b>If you like</b>. «Посмотрим» — <b>Let's see how it goes</b>."
],"После if / when / as soon as будущее не ставится: If it doesn't rain (а не won't rain). «Думаем переехать» — thinking of moving (а не thinking to move).",[
["Я планирую поехать в Испанию.","I'm planning to go to Spain.|I'm planning on going to Spain.","planning to go","planning go|planning to going","p1409"],
["Если будет время, я позвоню.","If I have time, I'll call you.|If I have time, I will call.","If I have time","If I will have time|If I had time","p1410"],
["Мы думаем переехать.","We're thinking of moving.|We are thinking about moving.","thinking of moving","thinking to move|thinking of move","p1411"],
["Надеюсь найти работу до лета.","I hope to find a job before summer.|I hope I'll find a job before the summer.","hope to find","hope finding|hope find","p1412"],
["Я ещё не решил, что буду делать.","I haven't decided what I'm going to do yet.|I haven't decided what to do yet.","haven't decided","didn't decided|haven't decide","p1413"],
["Если не будет дождя, мы пойдём на пляж.","If it doesn't rain, we'll go to the beach.","doesn't rain","won't rain|didn't rain","p1414"],
["Позвони мне, как только приедешь.","Call me as soon as you arrive.|Call me as soon as you get there.","as soon as you arrive","as soon as you will arrive|as soon as you arrived","p1415"],
["Я собираюсь начать бегать.","I'm going to start running.|I'm going to take up running.","going to start","going to starting|going start","p1416"],
["Может, встретимся на выходных?","Maybe we could meet at the weekend?|Shall we meet at the weekend?|Maybe we could meet on the weekend?","could meet","could to meet|can meeting","p1417"],
["У меня нет планов на вечер.","I don't have any plans for tonight.|I have no plans for this evening.","plans for","plans on|plans to","p1418"],
["В июле я беру отпуск.","I'm taking a holiday in July.|I'm going to take a vacation in July.","taking a holiday","making a holiday|taking holiday a","p1419"],
["Если хочешь, можем пойти вместе.","If you like, we can go together.|We can go together if you want.","If you like","If you liked|If you will like","p1420"],
["Если опоздаешь, позвони.","If you're late, call me.","If you're late","If you'll be late|If you were late","p1421"],
["Я буду дома к шести.","I'll be home by six.|I will be at home by six.","by six","until six|to six","p1422"],
["Мы обязательно приедем.","We'll definitely come.","definitely","definite|definitly","p1423"],
["Посмотрим, как пойдёт.","Let's see how it goes.|We'll see how it goes.","how it goes","how does it go|how it go","p1424"]
]));

add(X("x57","Как описать проблему","B1",[
 "Что происходит: <b>keeps + -ing</b> (постоянно), <b>has stopped working</b>, <b>won't turn on / won't load</b> (никак не), <b>is leaking</b>.",
 "Общие формулы: <b>The problem is that…</b>, <b>There's something wrong with…</b>, <b>It happens every time I…</b>",
 "Закончилось: <b>We've run out of…</b>. Раньше было иначе: <b>It used to work fine</b>."
],"«Перестал работать» — stopped working (а не stopped to work: это «остановился, чтобы поработать»). «Каждый раз, когда» — every time (без when).",[
["Ноутбук постоянно зависает.","My laptop keeps freezing.|My laptop freezes all the time.","keeps freezing","keeps to freeze|keeps freeze","p1425"],
["Принтер перестал работать.","The printer has stopped working.|The printer stopped working.","stopped working","stopped to work|stopped work","p1426"],
["Проблема в том, что у нас нет денег.","The problem is that we don't have any money.|The problem is we have no money.","The problem is","The problem it is|A problem is","p1427"],
["С машиной что-то не так.","There's something wrong with the car.|Something is wrong with the car.","something wrong with","something wrong in|anything wrong with","p1428"],
["Кран течёт.","The tap is leaking.|The tap leaks.|The faucet is leaking.","leaking","leaving|lacking","p1429"],
["Экран не включается.","The screen won't turn on.|The screen doesn't turn on.","won't turn on","won't turn in|won't turn up","p1430"],
["Я не могу войти в аккаунт.","I can't log in to my account.|I cannot log into my account.|I can't sign in to my account.","log in","log on in|log at","p1431"],
["Похоже, батарея села.","It looks like the battery is dead.|It seems the battery has died.","battery is dead","battery is died|battery is death","p1432"],
["У нас закончилось молоко.","We've run out of milk.|We're out of milk.","run out of","run off of|ran out from","p1433"],
["Двигатель издаёт странный звук.","The engine is making a strange noise.|The engine makes a strange noise.","making a strange noise","doing a strange noise|giving a strange noise","p1434"],
["Посылка пришла повреждённой.","The parcel arrived damaged.|The package arrived damaged.","arrived damaged","arrived damaging|arrived damage","p1435"],
["Сайт никак не загружается.","The website won't load.|The website isn't loading.","won't load","won't loaded|won't loading","p1436"],
["Я забыл пароль и не могу его сбросить.","I forgot my password and I can't reset it.|I've forgotten my password and can't reset it.","reset it","reset|resetting it","p1437"],
["Это происходит каждый раз, когда я открываю файл.","It happens every time I open the file.|It happens whenever I open the file.","every time I open","every time I will open|every time when I open","p1438"],
["Можете посмотреть, в чём дело?","Can you have a look at what's wrong?|Could you see what the problem is?","have a look","make a look|take look","p1439"],
["Раньше всё работало нормально.","It used to work fine.|It was working fine before.|Everything used to work fine.","used to work","use to work|was used to work","p1440"]
]));

add(X("x58","Рабочие письма","B1",[
 "Цель письма: <b>I'm writing to confirm / ask / inform…</b>. Просьба: <b>Could you send me…?</b>, <b>I would be grateful for…</b>",
 "Сроки и встречи: <b>by the end of the day</b>, <b>move the meeting to Thursday</b>, <b>Just a reminder that…</b>",
 "Вежливые концовки: <b>Let me know if you need anything</b>, <b>Feel free to contact me</b>, <b>Kind regards</b>."
],"«Присутствовать» — attend (без at): attend the meeting. «Пришлите мне отчёт» — send me the report (а не send to me the report).",[
["Пишу, чтобы подтвердить детали встречи.","I'm writing to confirm the details of the meeting.|I am writing to check the details of the meeting.","writing to confirm","writing for confirm|writing confirming","p1441"],
["Не могли бы вы прислать мне отчёт?","Could you send me the report, please?|Could you please send me the report?","send me the report","send to me the report|send me report","p1442"],
["Буду благодарен за быстрый ответ.","I would be grateful for a quick reply.|I'd appreciate a quick reply.","grateful for","grateful to|grateful of","p1443"],
["Презентация во вложении.","Please find the presentation attached.|I've attached the presentation.","attached","attaching|attach","p1444"],
["К сожалению, я не смогу присутствовать.","Unfortunately, I won't be able to attend.","attend","visit|attend at","p1445"],
["Напоминаю, что крайний срок — пятница.","Just a reminder that the deadline is Friday.|I'd like to remind you that the deadline is Friday.","reminder","remainder|remind","p1446"],
["Извините за поздний ответ.","Sorry for the late reply.|Apologies for the delay in replying.|Sorry for my late reply.","late reply","lately reply|later reply","p1447"],
["Дайте знать, если что-то понадобится.","Let me know if you need anything.|Please let me know if you need anything else.","need anything","need nothing|needs anything","p1448"],
["Можно перенести встречу на четверг?","Can we move the meeting to Thursday?|Could we reschedule the meeting for Thursday?","move the meeting to","move the meeting on|move the meeting at","p1449"],
["Получил ваше письмо, спасибо.","I've received your email, thank you.|Thanks, I got your email.","received your email","receipted your email|took your email","p1450"],
["Пересылаю письмо от клиента.","I'm forwarding the email from the client.|I'm forwarding you the client's email.","forwarding","forward|sending forward","p1451"],
["Ответьте, пожалуйста, до конца дня.","Please reply by the end of the day.|Please answer by the end of the day.","by the end of the day","until the end of the day|to the end of the day","p1452"],
["С уважением, Мария Иванова.","Best regards, Maria Ivanova.|Kind regards, Maria Ivanova.","Best regards","Best regard|Good regards","p1453"],
["По итогам нашего разговора отправляю договор.","Following our conversation, I'm sending the contract.|As discussed, I'm sending the contract.","Following our conversation","Following of our conversation|Follow our conversation","p1454"],
["Меня не будет в офисе до понедельника.","I'm out of the office until Monday.|I'm on holiday until Monday.","out of the office","out the office|out from the office","p1455"],
["Если есть вопросы, обращайтесь.","If you have any questions, feel free to contact me.|If you have any questions, please contact me.","feel free to","feel free|feel freely to","p1456"]
]));

add(X("x59","Фразовые глаголы B1","B1",[
 "Дом и быт: <b>turn down</b> (убавить), <b>switch off</b>, <b>pick up</b>, <b>put on / take off</b> (одежду), <b>throw away</b>.",
 "Учёба и дела: <b>look up</b> (в словаре), <b>fill in</b>, <b>find out</b>, <b>set up</b> (создать), <b>take up</b> (заняться хобби).",
 "Люди: <b>get on with</b> (ладить), <b>turn up</b> (появиться), <b>run out of</b> (закончиться)."
],"Частица меняет смысл: put on — надеть, take off — снять, look up — найти в словаре, look for — искать.",[
["Найди это слово в словаре.","Look up this word in the dictionary.|Look this word up in the dictionary.","Look up","Look for|Look at","p1457"],
["Мы открыли новую компанию.","We set up a new company.|We started a new company.","set up","set on|set in","p1458"],
["У нас закончился бензин.","We ran out of petrol.|We ran out of gas.","ran out of","ran off of|run out from","p1459"],
["Как ты ладишь с соседями?","How do you get on with your neighbours?|How do you get along with your neighbors?","get on with","get on to|get in with","p1460"],
["Он так и не появился.","He never turned up.|He never showed up.","turned up","turned on|turned in","p1461"],
["Сделай потише, пожалуйста.","Turn the volume down, please.|Please turn down the volume.","down","up|off","p1462"],
["Я забыл выключить плиту.","I forgot to switch off the cooker.|I forgot to turn off the stove.","switch off","switch out|switch down","p1463"],
["Вычеркни моё имя из списка.","Cross my name off the list.|Take my name off the list.","Cross my name off","Cross my name of|Cross off my name of","p1464"],
["Подними книгу с пола.","Pick up the book from the floor.|Pick the book up off the floor.","Pick up","Pick out|Pick on","p1465"],
["Можешь присмотреть за моей собакой?","Can you look after my dog?|Could you take care of my dog?","look after","look for|look at","p1466"],
["Я собираюсь заняться йогой.","I'm going to take up yoga.|I'm going to start doing yoga.","take up","take on|take off","p1467"],
["Надень куртку.","Put on your jacket.|Put your jacket on.","Put on","Put in|Put off","p1468"],
["Сними обувь.","Take off your shoes.|Take your shoes off.","Take off","Take out|Take away","p1469"],
["Заполни пропуски.","Fill in the gaps.|Fill in the blanks.","Fill in","Fill on|Fill up","p1470"],
["Я выбросил старые журналы.","I threw away the old magazines.|I threw out the old magazines.","threw away","threw off|threw on","p1471"],
["Узнай, когда открывается магазин.","Find out when the shop opens.|Find out what time the store opens.","Find out","Find up|Find off","p1472"]
]));

add(X("x60","Предлоги после глаголов и прилагательных","B1",[
 "Прилагательные: <b>interested in</b>, <b>good at</b>, <b>afraid of</b>, <b>married to</b>, <b>tired of</b>, <b>different from</b>, <b>good for</b>.",
 "Глаголы: <b>depend on</b>, <b>listen to</b>, <b>think about</b>, <b>laugh at</b>, <b>believe in</b>, <b>apologise to</b>, <b>remind about / of</b>.",
 "Прибытие: <b>arrive in</b> (город, страна), <b>arrive at</b> (здание, точка). Без предлога: <b>arrive home</b>."
],"Предлоги не переводятся с русского: «женат на» — married to, «зависит от» — depends on, «извиниться перед» — apologise to.",[
["Я интересуюсь историей.","I'm interested in history.","interested in","interested on|interesting in","p1473"],
["Она хорошо рисует.","She's good at drawing.|She is good at painting.","good at","good in|good on","p1474"],
["Он боится высоты.","He's afraid of heights.|He is scared of heights.","afraid of","afraid from|afraid by","p1475"],
["Это зависит от погоды.","It depends on the weather.","depends on","depends from|depends of","p1476"],
["Послушай эту песню.","Listen to this song.","Listen to","Listen|Hear to","p1477"],
["Подумай об этом.","Think about it.","Think about","Think on|Think over about","p1478"],
["Он женат на моей сестре.","He's married to my sister.","married to","married with|married on","p1479"],
["Она отвечает за проект.","She's in charge of the project.|She's responsible for the project.","in charge of","in charge for|on charge of","p1480"],
["Я устал ждать.","I'm tired of waiting.","tired of","tired from|tired to","p1481"],
["Он напомнил мне о встрече.","He reminded me about the meeting.|He reminded me of the meeting.","reminded me about","reminded me on|reminded about me","p1482"],
["Она смеялась над шуткой.","She laughed at the joke.","laughed at","laughed on|laughed over","p1483"],
["Мы прибыли в Лондон утром.","We arrived in London in the morning.","arrived in","arrived to|arrived at","p1484"],
["Я извинился перед ней.","I apologised to her.|I apologized to her.","apologised to","apologised before|apologised her","p1485"],
["Он отличается от брата.","He's different from his brother.","different from","different of|different with","p1486"],
["Я верю в тебя.","I believe in you.","believe in","believe at|believe to","p1487"],
["Это полезно для здоровья.","It's good for your health.|It is good for you.","good for","good to|good at","p1488"]
]));

add(X("x61","Уточнения в разговоре","B1",[
 "Не расслышал: <b>Sorry, I didn't catch that.</b>, <b>Sorry, what did you say?</b>, <b>Could you say that again more slowly?</b>",
 "Не понял: <b>What do you mean?</b>, <b>Could you explain that?</b>, <b>Could you give me an example?</b>, <b>What does this word mean?</b>",
 "Проверить понимание: <b>Are you saying that…?</b>, <b>So you're suggesting…?</b>, <b>Can I clarify one thing?</b>"
],"«Объясните мне» — explain to me / explain that (а не explain me). «Приведите пример» — give an example (а не bring an example).",[
["Что вы имеете в виду?","What do you mean?","What do you mean","What you mean|What do you means","p1489"],
["Простите, я не расслышал.","Sorry, I didn't catch that.|Sorry, I didn't hear that.","didn't catch that","didn't catch it up|didn't caught that","p1490"],
["Не могли бы вы это объяснить?","Could you explain that, please?|Could you explain it?","explain that","explain me that|explain to that","p1491"],
["Вы хотите сказать, что мы опоздали?","Are you saying that we're late?|Do you mean that we are late?","Are you saying","Are you telling|Do you saying","p1492"],
["Как это пишется?","How do you spell that?|How is that spelled?|How is it spelt?","spell that","letter that|spelling that","p1493"],
["Повторите, пожалуйста, медленнее.","Could you say that again more slowly?|Please repeat that more slowly.","more slowly","more slow|slowlier","p1494"],
["Правильно ли я понял, что встреча отменена?","Did I understand correctly that the meeting is cancelled?|So the meeting is cancelled, right?","understand correctly","understand correct|understood correctly","p1495"],
["Что значит это слово?","What does this word mean?","mean","means|meaning","p1496"],
["Можете привести пример?","Could you give me an example?|Can you give an example?","give me an example","bring me an example|lead me an example","p1497"],
["То есть вы предлагаете подождать?","So you're suggesting we wait?|So you suggest that we wait?","suggesting","suggest to|suggesting to","p1498"],
["Я не совсем понял последнюю часть.","I didn't quite understand the last part.|I didn't quite get the last part.","quite","quiet|quit","p1499"],
["Можно вас кое о чём спросить?","Can I ask you something?|Can I ask a question?","ask you something","ask to you something|ask you some","p1500"],
["Простите, что вы сказали?","Sorry, what did you say?|Pardon?","what did you say","what you said|what did you said","p1501"],
["Вы меня понимаете?","Do you understand me?|Do you see what I mean?","understand me","understand to me|understanding me","p1502"],
["Давайте я скажу по-другому.","Let me put it another way.|Let me rephrase that.","put it another way","put it other way|put another way","p1503"],
["Можно уточнить одну деталь?","Can I clarify one thing?|Could I check one detail?","clarify","clear|clarification","p1504"]
]));

add(X("x62","Насколько: quite, rather, a bit, at all","B1",[
 "Ослабить: <b>a bit / a little</b>, <b>fairly / quite</b>, <b>rather</b> (часто с оттенком «слишком»).",
 "Усилить: <b>really</b>, <b>extremely</b>, <b>completely</b>, <b>terribly</b>. Почти: <b>almost / nearly</b>, <b>hardly</b> (едва).",
 "<b>not … at all</b> — «совсем не». <b>Hardly anyone</b> — почти никто (а не hardly nobody)."
],"«Почти никто» — hardly anyone (hardly уже отрицание, второе не нужно). «Совсем не устал» — not tired at all.",[
["Довольно холодно.","It's quite cold.|It's rather cold.|It's fairly cold.","quite","quiet|quit","p1505"],
["Фильм немного скучный.","This film is a bit boring.|The movie is a little boring.","a bit","a bite|a little bit of","p1506"],
["Я совсем не устал.","I'm not tired at all.|I am not at all tired.","at all","in all|at whole","p1507"],
["Он почти закончил.","He has almost finished.|He's nearly finished.","almost","most|almostly","p1508"],
["Я едва его знаю.","I hardly know him.|I barely know him.","hardly","hard|hardy","p1509"],
["Это чрезвычайно важно.","It's extremely important.","extremely","extreme|extremly","p1510"],
["Она совершенно права.","She's completely right.|She's absolutely right.|She is quite right.","completely","complete|completly","p1511"],
["Он довольно хорошо говорит по-английски.","He speaks English fairly well.|He speaks English quite well.","fairly well","fair well|fairly good","p1512"],
["Я действительно устал.","I'm really tired.|I am very tired.","really","real|reallly","p1513"],
["Это немного дороже.","It's a little more expensive.|It's slightly more expensive.|It's a bit more expensive.","a little more expensive","a little expensiver|a few more expensive","p1514"],
["Почти никто не пришёл.","Hardly anyone came.|Almost nobody came.|Almost no one came.","Hardly anyone","Hardly nobody|Hard anyone","p1515"],
["Это слишком далеко, чтобы идти пешком.","It's too far to walk.","too far","too much far|so far","p1516"],
["Я ужасно голоден.","I'm terribly hungry.|I'm starving.|I am really hungry.","terribly","terrible|terribble","p1517"],
["Я весьма удивлён.","I'm rather surprised.|I'm quite surprised.","rather","rather a|rathers","p1518"],
["Совсем чуть-чуть.","Just a little.|Just a bit.","Just a little","Just a few|Just little","p1519"],
["Он вполне доволен.","He's quite satisfied.|He's quite happy.","satisfied","satisfying|satisfaction","p1520"]
]));

add(X("x63","Связки для рассказа","B1",[
 "Неожиданность: <b>Suddenly</b>, <b>All of a sudden</b>, <b>Out of the blue</b>. Время: <b>Meanwhile</b>, <b>At that moment</b>, <b>A few minutes later</b>.",
 "Оценка: <b>Luckily / Fortunately</b>, <b>Unfortunately</b>. Итог: <b>Eventually</b>, <b>In the end</b>, <b>All in all</b>, <b>It turned out that…</b>",
 "<b>ever since</b> — «с тех пор и до сих пор» (Present Perfect)."
],"«Опоздали на поезд» — missed the train (а не lost). Lose — потерять предмет, miss — не успеть.",[
["Вдруг погас свет.","Suddenly, the lights went out.|Suddenly the light went out.","Suddenly","Sudden|Suddently","p1521"],
["В конце концов мы нашли дорогу.","Eventually, we found the way.|In the end, we found our way.","Eventually","Eventual|Possibly","p1522"],
["Тем временем мама готовила ужин.","Meanwhile, Mum was cooking dinner.|Meanwhile, my mother was making dinner.","Meanwhile","Mean while|In meanwhile","p1523"],
["К счастью, никто не пострадал.","Luckily, nobody was hurt.|Fortunately, no one was injured.","Luckily","Lucky|Luckly","p1524"],
["К сожалению, мы опоздали на поезд.","Unfortunately, we missed the train.","missed","lost|lose","p1525"],
["Вдруг я понял, что забыл паспорт.","All of a sudden, I realised I'd forgotten my passport.|Suddenly I realized I had forgotten my passport.","All of a sudden","All of sudden|In all a sudden","p1526"],
["Поначалу всё шло хорошо.","At first, everything went well.","went well","went good|gone well","p1527"],
["Как только мы вышли, пошёл дождь.","As soon as we went out, it started raining.|As soon as we left, it started to rain.","As soon as","As far as|As long as","p1528"],
["Позже мы поняли свою ошибку.","Later we realised our mistake.|Then we realized our mistake.","realised","realising|real","p1529"],
["В этот момент зазвонил телефон.","At that moment, the phone rang.|At the same moment, the phone rang.","At that moment","On that moment|At that moments","p1530"],
["Наконец-то мы дома!","Finally, we're home!|At last we're home!","Finally","Final|Finaly","p1531"],
["Оказалось, что это был его брат.","It turned out that it was his brother.|It turned out to be his brother.","turned out","turned up|turned off","p1532"],
["Неожиданно он мне позвонил.","Out of the blue, he called me.|Unexpectedly, he phoned me.","Out of the blue","Out of the sky|Out of blue","p1533"],
["Через несколько минут он вернулся.","A few minutes later, he came back.|After a few minutes, he returned.","A few minutes later","Through a few minutes|A few minutes after","p1534"],
["С тех пор мы друзья.","We've been friends ever since.|Since then, we have been friends.","ever since","ever after|since ever","p1535"],
["В общем, это была отличная поездка.","All in all, it was a great trip.|Overall, it was a great trip.","All in all","All and all|In all all","p1536"]
]));
})();
