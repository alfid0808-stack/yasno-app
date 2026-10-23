/* Тематические слова A1–C1: 17 тем по 16 предложений. */
(function(){
const V = (id, title, level, words, trap, items) => ({
  id, title, level,
  rule: ["Слова темы: " + words.map(w => `<b>${w[0]}</b> — ${w[1]}`).join("; ") + ".", "Учите слова в предложениях, а не списком: так запоминаются и артикль, и предлог, и форма."],
  examples: [[items[0][1].split("|")[0], items[0][0]], [items[1][1].split("|")[0], items[1][0]]],
  trap, items: items.map(a => ({ ru: a[0], en: a[1].split("|"), key: a[2], opts: a[3].split("|"), pid: a[4] }))
});
window.EXTRA = window.EXTRA || {};
const add = u => { window.EXTRA[u.id] = u; };

add(V("w1","Слова: цвета и формы","A1",[["red","красный"],["blue","синий, голубой"],["green","зелёный"],["yellow","жёлтый"],["black","чёрный"],["white","белый"],["orange","оранжевый"],["grey","серый"],["brown","коричневый"],["pink","розовый"],["purple","фиолетовый"],["round","круглый"],["square","квадратный"],["light / dark","светлый / тёмный"]],
"В русском «синий» и «голубой» — два слова, в английском оба blue (light blue, dark blue). Colour — британское написание, color — американское.",[
["У неё красное платье.","She has a red dress.|Her dress is red.|She is wearing a red dress.","red","blue|green","p0193"],
["Небо голубое.","The sky is blue.","blue","green|red","p0194"],
["Трава зелёная.","The grass is green.","green","yellow|brown","p0195"],
["Солнце жёлтое.","The sun is yellow.","yellow","black|white","p0196"],
["Моя кошка чёрная.","My cat is black.","black","white|brown","p0197"],
["Снег белый.","Snow is white.|The snow is white.","white","black|pink","p0198"],
["Морковь оранжевая.","Carrots are orange.|The carrot is orange.","orange","purple|pink","p0199"],
["У него серая машина.","He has a grey car.|He has got a grey car.","grey","green|brown","p0200"],
["Земля коричневая.","The soil is brown.|The ground is brown.|The earth is brown.","brown","blue|pink","p0201"],
["Она любит розовый цвет.","She likes pink.|She loves pink.|She likes the colour pink.","pink","grey|green","p0202"],
["Фиолетовые цветы очень красивые.","Purple flowers are very beautiful.|Purple flowers are very pretty.","Purple","Orange|Brown","p0203"],
["Это круглый стол.","It is a round table.|This is a round table.","round","square|rounded","p0204"],
["У меня квадратная коробка.","I have a square box.|I have got a square box.","square","round|squared","p0205"],
["Комната светлая.","The room is light.|The room is bright.","light","lighter|lite","p0206"],
["Ночь тёмная.","It is a dark night.|The night is dark.","dark","darkness|darken","p0207"],
["Мой любимый цвет — синий.","My favourite colour is blue.","colour","collar|colony","p0208"]
]));

add(V("w2","Слова: животные","A1",[["dog","собака"],["cat","кошка"],["bird","птица"],["horse","лошадь"],["cow","корова"],["pig","свинья"],["sheep","овца, овцы"],["rabbit","кролик"],["mouse / mice","мышь / мыши"],["elephant","слон"],["lion","лев"],["bear","медведь"],["monkey","обезьяна"],["snake","змея"],["duck","утка"],["hen","курица"]],
"Sheep, fish, deer — одна форма для единственного и множественного числа: one sheep, two sheep. Mouse → mice, как man → men.",[
["Собака лает ночью.","The dog barks at night.","dog","cat|horse","p0257"],
["Кошка спит на диване.","The cat is sleeping on the sofa.","cat","dog|bird","p0258"],
["Птица поёт.","The bird is singing.|A bird is singing.","bird","fish|mouse","p0259"],
["Лошадь бежит быстро.","The horse runs fast.|The horse is running fast.|The horse runs quickly.","horse","cow|pig","p0260"],
["Корова даёт молоко.","The cow gives milk.","cow","pig|sheep","p0261"],
["Свинья живёт на ферме.","The pig lives on a farm.|A pig lives on a farm.","pig","lion|bear","p0262"],
["Овцы едят траву.","Sheep eat grass.|The sheep eat grass.|Sheep are eating grass.","Sheep","Sheeps|Cow","p0263"],
["Кролик сидит в клетке.","The rabbit is sitting in a cage.|The rabbit sits in a cage.|The rabbit is in a cage.","rabbit","elephant|snake","p0264"],
["Мышь боится кошки.","The mouse is afraid of the cat.|A mouse is afraid of a cat.|Mice are afraid of cats.","mouse","mice|bear","p0265"],
["Слон очень большой.","The elephant is very big.|An elephant is very big.|The elephant is very large.","elephant","rabbit|monkey","p0266"],
["Лев — царь зверей.","The lion is the king of the animals.|The lion is the king of beasts.","lion","bear|snake","p0267"],
["Медведь любит мёд.","The bear likes honey.|Bears like honey.|The bear loves honey.","bear","rabbit|pig","p0268"],
["Обезьяна ест банан.","The monkey is eating a banana.|The monkey eats a banana.","monkey","cow|horse","p0269"],
["Я боюсь змей.","I am afraid of snakes.|I am scared of snakes.","snakes","snake|elephants","p0270"],
["Утка плавает в пруду.","The duck is swimming in the pond.|A duck is swimming in the pond.|The duck swims in the pond.","duck","horse|cow","p0271"],
["Курица несёт яйца.","The hen lays eggs.|A hen lays eggs.|The chicken lays eggs.|Hens lay eggs.|Chickens lay eggs.","hen","dog|rabbit","p0272"]
]));

add(V("w3","Слова: части тела","A1",[["head","голова"],["eyes","глаза"],["ears","уши"],["nose","нос"],["mouth","рот"],["hand / hands","рука (кисть)"],["arm","рука (до плеча)"],["leg","нога"],["foot / feet","ступня / ступни"],["finger","палец"],["face","лицо"],["hair","волосы"],["neck","шея"],["shoulder","плечо"],["knee","колено"],["heart","сердце"]],
"Hair — неисчисляемое: she has long hair (а не hairs). Foot → feet, tooth → teeth. Русское «рука» — два слова: hand (кисть) и arm (вся рука).",[
["Он покачал головой.","He shook his head.","head","hand|arm","p0321"],
["У неё голубые глаза.","She has blue eyes.|She has got blue eyes.|Her eyes are blue.","eyes","ears|hands","p0322"],
["Я не слышу: у меня заложило уши.","I can't hear: my ears are blocked.","ears","eyes|legs","p0323"],
["У него длинный нос.","He has a long nose.|He has got a long nose.","nose","mouth|ear","p0324"],
["Открой рот.","Open your mouth.","mouth","eye|hand","p0325"],
["Помой руки перед едой.","Wash your hands before eating.|Wash your hands before you eat.|Wash your hands before a meal.","hands","hand|feet","p0326"],
["У неё болит рука.","Her arm hurts.|She has a sore arm.","arm","leg|hand","p0327"],
["У него длинные ноги.","He has long legs.|He has got long legs.","legs","leg|arms","p0328"],
["У меня замёрзли ноги.","My feet are cold.","feet","foot|foots","p0329"],
["У неё длинные пальцы.","She has long fingers.|She has got long fingers.","fingers","finger|hands","p0330"],
["Умой лицо.","Wash your face.","face","hair|neck","p0331"],
["У неё длинные волосы.","She has long hair.|She has got long hair.","hair","hairs|head","p0332"],
["У меня болит шея.","My neck hurts.|I have a sore neck.","neck","back|knee","p0333"],
["Он часто пожимает плечами.","He often shrugs his shoulders.|He often shrugs.","shoulders","knees|arms","p0334"],
["Я ударился коленом.","I hit my knee.|I banged my knee.|I bumped my knee.","knee","elbow|foot","p0335"],
["Сердце бьётся быстро.","My heart is beating fast.|My heart is beating quickly.|My heart beats fast.","heart","head|hand","p0336"]
]));

add(V("w4","Слова: профессии","A1",[["driver","водитель"],["teacher","учитель"],["doctor","врач"],["nurse","медсестра"],["waiter","официант"],["cook","повар"],["pilot","пилот"],["farmer","фермер"],["programmer","программист"],["dentist","стоматолог"],["actor","актёр"],["singer","певец"],["lawyer","юрист"],["builder","строитель"],["journalist","журналист"]],
"Профессия называется с артиклем: She is <b>a</b> teacher (а не «She is teacher»). Перед гласным — an: an actor, an engineer.",[
["Мой отец — водитель.","My father is a driver.|My dad is a driver.","driver","teacher|doctor","p0337"],
["Она учитель.","She is a teacher.","teacher","doctor|nurse","p0338"],
["Он врач.","He is a doctor.","doctor","driver|waiter","p0339"],
["Моя сестра — медсестра.","My sister is a nurse.","nurse","waiter|cook","p0340"],
["Официант приносит меню.","The waiter brings the menu.","waiter","driver|pilot","p0341"],
["Повар готовит суп.","The cook is making soup.|The chef is making soup.|The cook is cooking soup.|The chef is cooking soup.","cook","pilot|farmer","p0342"],
["Пилот летит в Рим.","The pilot flies to Rome.|The pilot is flying to Rome.","pilot","farmer|actor","p0343"],
["Фермер встаёт рано.","The farmer gets up early.|Farmers get up early.","farmer","singer|lawyer","p0344"],
["Он программист.","He is a programmer.|He is a software developer.|He is a developer.","programmer","dentist|artist","p0345"],
["Моя тётя — стоматолог.","My aunt is a dentist.","dentist","driver|pilot","p0346"],
["Он актёр.","He is an actor.","actor","artist|waiter","p0347"],
["Она певица.","She is a singer.","singer","dancer|writer","p0348"],
["Мой друг — юрист.","My friend is a lawyer.","lawyer","builder|cook","p0349"],
["Строитель строит дом.","The builder is building a house.|A builder is building a house.","builder","pilot|nurse","p0350"],
["Продавец помогает покупателям.","The shop assistant helps the customers.|The seller helps the customers.|The salesperson helps the customers.|The shop assistant helps customers.","shop assistant","doctor|teacher","p0351"],
["Журналист пишет статьи.","A journalist writes articles.|The journalist writes articles.|Journalists write articles.","journalist","dentist|farmer","p0352"]
]));

add(V("w5","Слова: хобби и спорт","A2",[["hobby","хобби"],["play football / tennis / chess","играть в футбол / теннис / шахматы"],["go swimming / running / hiking","плавать / бегать / ходить в походы"],["do yoga","заниматься йогой"],["ride a bike","ездить на велосипеде"],["team / match","команда / матч"],["gym","спортзал"],["listen to music","слушать музыку"]],
"С играми и командными видами спорта — <b>play</b> (play football), с -ing активностями — <b>go</b> (go swimming), с индивидуальными занятиями — <b>do</b> (do yoga). Нельзя «do football».",[
["Моё хобби — фотография.","My hobby is photography.","hobby","habit|job","p0401"],
["По субботам мы играем в футбол.","We play football on Saturdays.|We play soccer on Saturdays.|We play football on Saturday.","play","do|go","p0402"],
["Он ходит плавать.","He goes swimming.|He swims.","goes","plays|does","p0403"],
["Я бегаю по утрам.","I go running in the morning.|I go jogging in the morning.|I run in the morning.|I go for a run in the morning.","go running","play running|do running","p0404"],
["Она ездит на велосипеде.","She rides a bike.|She rides a bicycle.|She goes cycling.|She cycles.|She is riding a bike.","rides","drives|goes","p0405"],
["Мой дедушка любит шахматы.","My grandfather likes chess.","chess","chest|check","p0406"],
["Он рисует картины.","He paints pictures.|He is painting pictures.|He paints paintings.","paints","painting|paint","p0407"],
["Мы любим танцевать.","We love dancing.|We like dancing.|We love to dance.|We like to dance.","dancing","dance|to dancing","p0408"],
["Она слушает музыку каждый день.","She listens to music every day.","listens to","hears|listens","p0409"],
["Вечером мы ходим в спортзал.","In the evening we go to the gym.|We go to the gym in the evening.","gym","jam|jim","p0410"],
["Наша команда выиграла матч.","Our team won the match.|Our team won the game.","match","mach|matches","p0411"],
["Кто выиграл?","Who won?","won","win|wins","p0412"],
["Я хочу научиться кататься на лыжах.","I want to learn to ski.|I want to learn how to ski.","ski","skiing|skis","p0413"],
["Мы часто ходим в походы.","We often go hiking.|We often go on hikes.","hiking","hiked|hike","p0414"],
["Она занимается йогой.","She does yoga.|She practises yoga.|She practices yoga.","does","plays|goes","p0415"],
["Он тренируется каждый день.","He trains every day.|He exercises every day.|He works out every day.|He is training every day.","trains","trainings|train","p0416"]
]));

add(V("w6","Слова: школа и учёба","A2",[["study","учиться, изучать"],["classes / lessons","занятия, уроки"],["homework","домашнее задание"],["exam","экзамен"],["pass / fail","сдать / провалить"],["lecture","лекция"],["essay","сочинение"],["by heart","наизусть"],["library","библиотека"],["classmate","одноклассник"],["subject","предмет"],["mark / grade","оценка"]],
"Homework, research, information — неисчисляемые: I have a lot of homework (а не homeworks). «Сдать экзамен» — pass an exam; take an exam — сдавать, то есть писать.",[
["Я учусь в университете.","I study at university.|I study at the university.|I am a university student.|I am at university.","study","learn|teach","p0513"],
["Занятия начинаются в девять.","Classes start at nine.|Lessons start at nine.|Classes begin at nine.|Lessons begin at nine.","Classes","Class|Teachers","p0514"],
["Учитель задал домашнее задание.","The teacher gave us homework.|The teacher set homework.|The teacher assigned homework.|The teacher gave us some homework.","homework","homeworks|housework","p0515"],
["Завтра у нас экзамен.","We have an exam tomorrow.|We have got an exam tomorrow.|We have an examination tomorrow.","exam","examen|examine","p0516"],
["Я сдал экзамен.","I passed the exam.|I passed the test.|I passed the examination.","passed","gave|made","p0517"],
["Она провалила тест.","She failed the test.|She failed the exam.|She did not pass the test.","failed","lost|missed","p0518"],
["У нас пять уроков в день.","We have five lessons a day.|We have five classes a day.|We have five lessons every day.|We have five classes every day.","lessons","lections|lessones","p0519"],
["Лекция была очень интересной.","The lecture was very interesting.","lecture","lection|lesson","p0520"],
["Студенты пишут сочинение.","The students are writing an essay.|Students are writing an essay.|The students write an essay.","essay","assay|esse","p0521"],
["Я выучил слова наизусть.","I learned the words by heart.|I learnt the words by heart.","by heart","from heart|on heart","p0522"],
["Библиотека закрывается в восемь.","The library closes at eight.|The library shuts at eight.","library","librarian|libary","p0523"],
["Мой одноклассник очень умный.","My classmate is very clever.|My classmate is very smart.","classmate","classmates|schoolmate","p0524"],
["Директор вызвал меня в кабинет.","The headteacher called me to the office.|The head teacher called me to the office.|The principal called me to the office.|The headmaster called me to his office.","office","officer|offices","p0525"],
["Что ты изучаешь?","What are you studying?|What do you study?|What subject are you studying?","studying","learning|study","p0526"],
["Мой любимый предмет — математика.","My favourite subject is maths.|My favorite subject is math.|My favourite subject is mathematics.","subject","object|theme","p0527"],
["Я получил хорошую оценку.","I got a good mark.|I got a good grade.|I received a good mark.|I received a good grade.","mark","note|sign","p0528"]
]));

add(V("w7","Слова: техника и гаджеты","A2",[["battery","батарея"],["computer / laptop","компьютер / ноутбук"],["password","пароль"],["message","сообщение"],["email","электронное письмо"],["download","скачать"],["screen","экран"],["button","кнопка"],["website","сайт"],["Wi-Fi","вай-фай"],["save","сохранить"],["update","обновить"],["data","данные"]],
"Take a photo (а не make a photo). Password — «пароль», а passport — «паспорт»: не путайте. Data в повседневной речи часто как неисчисляемое: the data is.",[
["У телефона села батарея.","My phone battery is dead.|My phone has run out of battery.|My phone's battery is dead.|My phone has died.|My phone battery has died.","battery","butter|batter","p0561"],
["Включи компьютер.","Turn on the computer.|Switch on the computer.|Turn the computer on.","computer","computing|compute","p0562"],
["Я забыл пароль.","I forgot my password.|I have forgotten my password.","password","passport|passage","p0563"],
["Отправь мне сообщение.","Send me a message.|Text me.|Send me a text.","message","massage|messenger","p0564"],
["Я отправлю тебе письмо по электронной почте.","I will send you an email.|I will email you.|I will send you an e-mail.","email","emails|e-male","p0565"],
["Скачай это приложение.","Download this app.|Download this application.|Download the app.","Download","Upload|Download to","p0566"],
["Интернет не работает.","The internet isn't working.|The internet does not work.","isn't working","doesn't working|not works","p0567"],
["Ты можешь помочь мне с ноутбуком?","Can you help me with my laptop?","laptop","desktop|tablet","p0568"],
["Сфотографируй на телефон.","Take a photo with your phone.|Take a picture with your phone.|Take a photo on your phone.","Take","Make|Do","p0569"],
["Я нажал не ту кнопку.","I pressed the wrong button.|I clicked the wrong button.|I pushed the wrong button.","button","buttons|bottom","p0570"],
["Экран треснул.","The screen is cracked.|The screen has cracked.|The screen cracked.","screen","scream|screw","p0571"],
["Сайт не открывается.","The website isn't opening.|The site is not opening.|The website will not open.|The website does not open.","website","web|webpage","p0572"],
["Подключись к Wi-Fi.","Connect to the Wi-Fi.|Connect to Wi-Fi.|Connect to the Wi-Fi network.","Connect","Connect for|Attach","p0573"],
["Сохрани файл.","Save the file.","Save","Safe|Saving","p0574"],
["Обнови программу.","Update the software.|Update the program.|Update the app.","Update","Updated|Updating","p0575"],
["Я потерял данные.","I lost the data.|I have lost the data.|I lost my data.|I have lost my data.","data","date|datas","p0576"]
]));

add(V("w8","Слова: медиа и интернет","B1",[["news","новости"],["article","статья"],["headline","заголовок"],["channel","канал"],["advert / ad","реклама"],["social media","соцсети"],["post","публиковать"],["follower","подписчик"],["subscribe","подписаться"],["comment","комментарий"],["go viral","стать вирусным"],["broadcast","вещать"],["information","информация"]],
"News и information — неисчисляемые: The news <b>is</b> good, a piece of news, а не «a news» и «informations». TV — on TV (на ТВ), online — онлайн.",[
["Я читаю новости каждое утро.","I read the news every morning.","news","new|newses","p0721"],
["Это интересная статья.","This is an interesting article.|It is an interesting article.","article","articles|artical","p0722"],
["Заголовок был шокирующим.","The headline was shocking.","headline","headlines|headband","p0723"],
["Что идёт по телевизору?","What is on TV?|What is on the TV?","on","in|at","p0724"],
["Мой любимый канал показывает фильмы.","My favourite channel shows films.|My favorite channel shows movies.","channel","chanel|canal","p0725"],
["Реклама прерывает фильм каждые десять минут.","Adverts interrupt the film every ten minutes.|Ads interrupt the movie every ten minutes.|Commercials interrupt the film every ten minutes.|Adverts interrupt the movie every ten minutes.|Ads interrupt the film every ten minutes.","interrupt","interrupts|interrupted","p0726"],
["Я не пользуюсь соцсетями.","I don't use social media.|I do not use social networks.","social media","social medias|society media","p0727"],
["Она выложила фото в сеть.","She posted a photo online.|She posted a picture online.|She uploaded a photo online.|She put a photo online.","posted","posted up|posting","p0728"],
["У него миллион подписчиков.","He has a million followers.|He has got a million followers.|He has one million followers.","followers","followings|followed","p0729"],
["Подпишись на канал.","Subscribe to the channel.|Subscribe to my channel.|Please subscribe to the channel.","Subscribe","Sign|Write","p0730"],
["Не читай комментарии.","Don't read the comments.","comments","comment|comets","p0731"],
["Это видео стало вирусным.","The video went viral.|This video went viral.|The video has gone viral.|This video has gone viral.","went viral","became virus|went virus","p0732"],
["Программу передают в прямом эфире.","The programme is broadcast live.|The program is broadcast live.|The programme is being broadcast live.|The program is being broadcast live.|The programme is live.|The program is live.","broadcast","broadcasted|broad cast","p0733"],
["Журналисты взяли интервью у министра.","The journalists interviewed the minister.|Journalists interviewed the minister.|The journalists were interviewing the minister.","interviewed","interviewing|interview","p0734"],
["Эта информация не подтверждена.","This information hasn't been confirmed.|That information has not been confirmed.|This information is not confirmed.","information","informations|an information","p0735"],
["Не верь всему, что читаешь в интернете.","Don't believe everything you read online.|Do not believe everything you read on the internet.","online","on line|in line","p0736"]
]));

add(V("w9","Слова: деньги и банки","B1",[["withdraw","снять деньги"],["account","счёт"],["loan","кредит"],["earn","зарабатывать"],["save","копить"],["spend","тратить"],["lend / borrow","одолжить / занять"],["owe","быть должным"],["tax","налог"],["inflation","инфляция"],["afford","позволить себе"],["worth","стоящий"],["percent","процент"]],
"Earn — зарабатывать (деньги), win — выигрывать. Lend — дать в долг, borrow — взять в долг. Spend — тратить (spent, не spended). Afford — «позволить себе»: I can't afford it.",[
["Мне нужно снять деньги в банкомате.","I need to withdraw some money from the ATM.|I need to take some money out of the ATM.|I need to get some money from the ATM.|I need to withdraw money from the cash machine.","withdraw","deposit|borrow","p0769"],
["Я открыл счёт в банке.","I opened a bank account.|I have opened a bank account.|I opened an account at the bank.","account","count|accent","p0770"],
["Мы взяли кредит на квартиру.","We took out a loan to buy a flat.|We took out a mortgage to buy a flat.|We took out a loan for a flat.|We took out a loan to buy an apartment.|We took out a mortgage to buy an apartment.","loan","lone|lawn","p0771"],
["Сколько ты зарабатываешь в месяц?","How much do you earn a month?|How much do you earn per month?|How much do you earn each month?|How much do you make a month?","earn","win|gain","p0772"],
["Я коплю на отпуск.","I am saving up for a holiday.|I am saving for a holiday.|I am saving up for a vacation.|I am saving for a vacation.","saving","keeping|collecting","p0773"],
["Он потратил все деньги на подарки.","He spent all his money on presents.|He spent all the money on presents.|He spent all his money on gifts.","spent","spended|spend","p0774"],
["Одолжишь мне пять фунтов?","Could you lend me five pounds?|Can you lend me five pounds?","lend","borrow|rent","p0775"],
["Я должен ему деньги.","I owe him money.|I owe him some money.","owe","own|have","p0776"],
["Налоги слишком высокие.","Taxes are too high.|The taxes are too high.","Taxes","Tax|Taxs","p0777"],
["Цены выросли из-за инфляции.","Prices have risen because of inflation.|Prices rose because of inflation.|Prices have gone up because of inflation.","inflation","infection|influence","p0778"],
["Это стоит каждой копейки.","It's worth every penny.|It is worth every cent.","worth","worthy|worse","p0779"],
["Мы не можем позволить себе машину.","We can't afford a car.|We cannot afford to buy a car.","afford","offer|effort","p0780"],
["Скидка составляет двадцать процентов.","The discount is twenty percent.|The discount is twenty per cent.|The discount is 20 percent.|The discount is 20%.","percent","percents|persent","p0781"],
["Он богат, но живёт скромно.","He is rich, but he lives modestly.|He is wealthy, but he lives modestly.|He is rich but lives simply.|He is rich, but he lives simply.","modestly","modest|modesty","p0782"],
["Деньги на деревьях не растут.","Money doesn't grow on trees.","grow","grows|growing","p0783"],
["Оплата производится в конце месяца.","Payment is made at the end of the month.|Payment is due at the end of the month.|You pay at the end of the month.|The payment is made at the end of the month.","Payment","Pay|Paying","p0784"]
]));

add(V("w10","Слова: природа и экология","B1",[["pollution","загрязнение"],["protect","защищать"],["climate","климат"],["forest","лес"],["recycle","перерабатывать"],["rubbish","мусор"],["energy","энергия"],["lake / sea / mountain","озеро / море / гора"],["hurricane","ураган"],["flood","наводнение"],["drought","засуха"]],
"Weather — погода сегодня, climate — климат в целом. Rubbish (брит.) / garbage, trash (амер.). Energy неисчисляемое: save energy, а не energies.",[
["Загрязнение воздуха — серьёзная проблема.","Air pollution is a serious problem.","pollution","polite|polish","p0817"],
["Мы должны беречь природу.","We must protect nature.|We have to protect nature.|We must protect the environment.|We have to protect the environment.","protect","protest|protection","p0818"],
["Климат меняется.","The climate is changing.","climate","climb|clime","p0819"],
["Леса исчезают.","Forests are disappearing.|The forests are disappearing.","disappearing","disappearance|disappear","p0820"],
["Давайте сортировать мусор.","Let's recycle our rubbish.|Let us recycle our waste.|Let us recycle our garbage.|Let's sort our rubbish.","recycle","cycle|regroup","p0821"],
["Не бросайте мусор на землю.","Do not throw rubbish on the ground.|Don't litter.","rubbish","rubber|rabbit","p0822"],
["Мы экономим энергию.","We save energy.|We are saving energy.","energy","energies|enemy","p0823"],
["Солнечная энергия экологична.","Solar energy is environmentally friendly.|Solar energy is eco-friendly.|Solar power is environmentally friendly.|Solar power is eco-friendly.","environmentally friendly","environment friendly|environmental friendly","p0824"],
["Река очень чистая.","The river is very clean.","clean","cleaned|cleanly","p0825"],
["На озере много уток.","There are many ducks on the lake.|There are a lot of ducks on the lake.","lake","lack|like","p0826"],
["Гора очень высокая.","The mountain is very high.|The mountain is very tall.","mountain","mount|mountains","p0827"],
["Мы гуляли по лесу.","We walked through the forest.|We walked in the forest.|We were walking through the forest.|We walked through the woods.","forest","forests|foreign","p0828"],
["Вода в море тёплая.","The water in the sea is warm.|The sea is warm.","sea","seas|see","p0829"],
["Ураган разрушил город.","The hurricane destroyed the city.|The storm destroyed the city.|The hurricane destroyed the town.","destroyed","destructed|destroy","p0830"],
["Во время наводнения река вышла из берегов.","During the flood, the river burst its banks.|During the flood the river overflowed.","flood","flow|floor","p0831"],
["Засуха уничтожила урожай.","The drought destroyed the harvest.|The drought ruined the crops.|The drought destroyed the crops.|The drought ruined the harvest.","drought","draught|dry","p0832"]
]));

add(V("w11","Слова: отношения и чувства","B1",[["meet","познакомиться"],["get married","пожениться"],["divorce","развод"],["argue","спорить, ссориться"],["miss","скучать по"],["fall in love","влюбиться"],["trust","доверять"],["jealous","ревнивый"],["lonely","одинокий"],["worried","обеспокоенный"],["close friends","близкие друзья"],["ashamed","пристыжённый"]],
"I miss you = я скучаю по тебе (не «I lack you»). She married a doctor (без with / to). Lonely — тоскливо одинокий, alone — просто один.",[
["Мы познакомились на работе.","We met at work.|We met through work.","met","knew|made","p0833"],
["Они поженились в прошлом году.","They got married last year.|They married last year.","got married","married with|were married","p0834"],
["Она вышла замуж за врача.","She married a doctor.|She got married to a doctor.","married","married with|married to","p0835"],
["Они развелись.","They got divorced.|They divorced.","divorced","divorce|divorces","p0836"],
["Мы поссорились из-за ерунды.","We argued about nothing.|We had an argument about nothing.|We quarrelled over nothing.|We quarreled over nothing.","argued","argue|arguing","p0837"],
["Я скучаю по тебе.","I miss you.","miss","lack|lose","p0838"],
["Она влюбилась в него.","She fell in love with him.","fell in love","fall in love|felt in love","p0839"],
["Я ей доверяю.","I trust her.","trust","trusts|trusting","p0840"],
["Он ревнует.","He's jealous.","jealous","envy|jealousy","p0841"],
["Мне одиноко.","I feel lonely.|I am lonely.","lonely","loneliness|lonelily","p0842"],
["Я переживаю за тебя.","I'm worried about you.|I worry about you.","worried","worrying|worry","p0843"],
["Мы близкие друзья.","We are close friends.|We are good friends.","close","near|closed","p0844"],
["Он мне очень дорог.","He means a lot to me.|He means so much to me.|He is very dear to me.","means","meaning|mean","p0845"],
["Мне стыдно.","I'm ashamed.|I feel ashamed.|I am embarrassed.|I feel embarrassed.","ashamed","shame|shameful","p0846"],
["Мне его жаль.","I feel sorry for him.|I sympathise with him.|I sympathize with him.","sorry","sorrow|sadly","p0847"],
["Мне нравится она как человек.","I like her as a person.","as","like|how","p0848"]
]));

add(V("w12","Слова: наука и медицина","B2",[["discover / invent","открыть / изобрести"],["research","исследование"],["diagnosis","диагноз"],["contagious","заразный"],["operation","операция"],["vaccine","вакцина"],["symptoms","симптомы"],["experiment","эксперимент"],["hypothesis","гипотеза"],["infection","инфекция"],["side effects","побочные эффекты"],["theory","теория"],["responsible","ответственный"]],
"Discover — открыть то, что уже существовало (America, a planet); invent — изобрести новое (telephone). Experiment — опыт в науке, experience — жизненный опыт. Research неисчисляемое.",[
["Учёные открыли новую планету.","Scientists have discovered a new planet.|Scientists discovered a new planet.|The scientists have discovered a new planet.|The scientists discovered a new planet.","discovered","invented|opened","p0881"],
["Телефон изобрёл Белл.","The telephone was invented by Bell.|The phone was invented by Bell.|Bell invented the telephone.|Bell invented the phone.","invented","discovered|found","p0882"],
["Исследование показало неожиданные результаты.","The research showed unexpected results.|The study showed unexpected results.|The research has shown unexpected results.|The study has shown unexpected results.","results","result|resulted","p0883"],
["Врач поставил диагноз.","The doctor made a diagnosis.|The doctor gave a diagnosis.|The doctor diagnosed him.|The doctor diagnosed her.","diagnosis","diagnose|diagnosing","p0884"],
["Эта болезнь заразна.","This disease is contagious.|The disease is contagious.|This illness is contagious.|This disease is infectious.","contagious","contagion|contageous","p0885"],
["Пациенту сделали операцию.","The patient had an operation.|The patient had surgery.|The patient was operated on.|The patient underwent surgery.","operation","operate|operator","p0886"],
["Вакцина защищает от гриппа.","The vaccine protects against flu.|The vaccine protects against the flu.|A vaccine protects against flu.","vaccine","vaccinate|vacation","p0887"],
["Симптомы появляются через два дня.","The symptoms appear after two days.|Symptoms appear after two days.|The symptoms appear in two days.|The symptoms appear two days later.","symptoms","symptom|systems","p0888"],
["Эксперимент провалился.","The experiment failed.|The experiment was a failure.|The experiment did not succeed.","experiment","experience|expert","p0889"],
["Гипотеза не подтвердилась.","The hypothesis wasn't confirmed.|The hypothesis has not been confirmed.","hypothesis","hypotheses|hypothesize","p0890"],
["Нужно провести дополнительные исследования.","Further research is needed.|More research is needed.|Additional research is needed.|We need to carry out further research.|We need to do more research.","research","researches|researching","p0891"],
["Организм борется с инфекцией.","The body is fighting the infection.|The body fights the infection.|The body is fighting off the infection.|The body fights off the infection.","infection","infect|infectious","p0892"],
["У лекарства есть побочные эффекты.","The medicine has side effects.|The drug has side effects.|The medication has side effects.","side effects","side affects|sides effects","p0893"],
["Рост населения замедляется.","Population growth is slowing down.|Population growth is slowing.|The population is growing more slowly.","Population","Populations|Populated","p0894"],
["Данные подтверждают теорию.","The data confirm the theory.|The data support the theory.|The data confirms the theory.|The data supports the theory.","theory","theories|theorem","p0895"],
["За цвет глаз отвечает этот ген.","This gene is responsible for eye colour.|This gene determines eye colour.","responsible","responsive|reasonable","p0896"]
]));

add(V("w13","Слова: бизнес и экономика","B2",[["revenue","выручка"],["profit / loss","прибыль / убыток"],["market","рынок"],["invest","вкладывать"],["shareholder","акционер"],["merger","слияние"],["startup","стартап"],["budget","бюджет"],["contract","контракт"],["supplier","поставщик"],["negotiate","вести переговоры"],["strategy","стратегия"],["competitor","конкурент"],["exceed","превышать"]],
"Contract (договор) и contact (контакт) — разные слова. Revenue — выручка, а не «ревеню». Company — компания, а не campaign. Profit — прибыль, prophet — пророк.",[
["Выручка компании выросла на пять процентов.","The company's revenue grew by five percent.|The company's revenue rose by five percent.|The company's revenue increased by five percent.|The company's revenue grew by five per cent.","revenue","revenge|revenues","p0945"],
["Прибыль упала в третьем квартале.","Profit fell in the third quarter.|Profits fell in the third quarter.|The profit fell in the third quarter.|Profit dropped in the third quarter.|Profits dropped in the third quarter.","Profit","Prophet|Profile","p0946"],
["Компания понесла убытки.","The company made a loss.|The company incurred losses.|The company suffered losses.|The company suffered a loss.","loss","lose|lost","p0947"],
["Рынок быстро растёт.","The market is growing fast.|The market is growing rapidly.|The market is growing quickly.","market","markets|marked","p0948"],
["Инвесторы вложили миллион.","The investors invested a million.|Investors invested a million.|The investors put in a million.|Investors put in a million.","invested","investigated|invest","p0949"],
["Акционеры одобрили слияние.","The shareholders approved the merger.|Shareholders approved the merger.","merger","marriage|merge","p0950"],
["В прошлом году мы запустили стартап.","We launched a startup last year.|We launched a start-up last year.|We started a startup last year.|We started a start-up last year.","launched","lunched|launch","p0951"],
["Бюджет на следующий год утверждён.","The budget for next year has been approved.|Next year's budget has been approved.|The budget for next year was approved.","budget","budged|bucket","p0952"],
["Стороны подписали контракт.","The parties signed the contract.|Both sides signed the contract.|The two sides signed the contract.","contract","contact|contrast","p0953"],
["Наш поставщик задерживает товар.","Our supplier is delaying the goods.|Our supplier is late with the goods.|Our supplier is delaying the delivery.","supplier","supply|supporter","p0954"],
["Мы ведём переговоры с клиентом.","We are negotiating with the client.|We are negotiating with the customer.|We are in negotiations with the client.|We are in talks with the client.","negotiating","negotiate|negotiation","p0955"],
["Какая у вас стратегия?","What is your strategy?","strategy","strategic|strategies","p0956"],
["Конкуренты снизили цены.","The competitors cut their prices.|Competitors have cut their prices.|The competitors have cut prices.|Competitors cut prices.","competitors","competition|competitive","p0957"],
["Мы превысили план продаж.","We exceeded the sales target.|We exceeded our sales target.|We beat the sales target.|We surpassed the sales target.","exceeded","excepted|exceeding","p0958"],
["Компания объявила о сокращениях.","The company announced redundancies.|The company announced layoffs.|The company announced job cuts.","announced","announce|announcing","p0959"],
["Нам нужно привлечь новых клиентов.","We need to attract new customers.|We need to attract new clients.|We have to attract new customers.|We have to attract new clients.","attract","attack|attach","p0960"]
]));

add(V("w14","Слова: общество и политика","B2",[["government","правительство"],["election","выборы"],["vote","голосовать"],["parliament","парламент"],["society","общество"],["unemployment","безработица"],["citizen","гражданин"],["demonstration","демонстрация"],["authorities","власти"],["majority","большинство"],["equality","равенство"],["freedom","свобода"],["crisis","кризис"],["mayor","мэр"]],
"Mayor (мэр) и major (майор, главный) звучат похоже. Society (общество) — неисчисляемое: society is changing. Crisis — во множественном числе crises.",[
["Правительство ввело новый закон.","The government introduced a new law.|The government has introduced a new law.","government","governor|govern","p1009"],
["Выборы пройдут в ноябре.","The elections will be held in November.|The election will be held in November.|The elections will take place in November.","elections","selections|elects","p1010"],
["Он голосует за эту партию.","He votes for the party.|He is voting for the party.","votes","voices|voted","p1011"],
["Парламент обсуждает бюджет.","Parliament is discussing the budget.|The parliament is discussing the budget.|Parliament is debating the budget.|The parliament is debating the budget.","Parliament","Parlament|Parliaments","p1012"],
["Общество меняется.","Society is changing.|Society changes.|The society is changing.","Society","Societies|Social","p1013"],
["Безработица растёт.","Unemployment is rising.|Unemployment is going up.|Unemployment is increasing.|Unemployment is growing.","Unemployment","Unemployed|Unemployments","p1014"],
["Граждане имеют право на защиту.","Citizens have the right to protection.|Citizens have a right to protection.|Citizens have the right to be protected.","Citizens","Citizen|Cities","p1015"],
["Миллион человек принял участие в демонстрации.","A million people took part in the demonstration.|A million people went out to demonstrate.|A million people attended the demonstration.|A million people took to the streets.","demonstration","demonstrate|demonstrator","p1016"],
["Власти приняли меры.","The authorities took measures.|The authorities took action.|The authorities have taken measures.|The authorities have taken action.","authorities","authors|authority","p1017"],
["Мнение большинства важно.","The opinion of the majority is important.|The majority's opinion is important.|The majority opinion is important.","majority","majesty|major","p1018"],
["Они борются за равенство.","They are fighting for equality.|They fight for equality.|They are struggling for equality.","equality","equal|equally","p1019"],
["В стране нет свободы слова.","There is no freedom of speech in the country.|There is no freedom of speech in that country.|There is no freedom of speech in this country.","freedom","free|freely","p1020"],
["Это вопрос национальной безопасности.","It is a matter of national security.|This is a matter of national security.","security","secure|securely","p1021"],
["Страна переживает кризис.","The country is going through a crisis.|The country is experiencing a crisis.|The country is in crisis.|The country is facing a crisis.","crisis","crises|crisp","p1022"],
["Реформа вызвала споры.","The reform caused controversy.|The reform has caused controversy.|The reform sparked controversy.|The reform has sparked controversy.","controversy","controversial|contrast","p1023"],
["Мэр объявил о новых мерах.","The mayor announced new measures.|The mayor has announced new measures.|The mayor announced new steps.","mayor","major|mare","p1024"]
]));

add(V("w15","Слова: искусство и культура","B2",[["exhibition","выставка"],["portrait","портрет"],["gallery","галерея"],["sculpture","скульптура"],["opera","опера"],["concert","концерт"],["orchestra","оркестр"],["director","режиссёр"],["novel","роман"],["poet","поэт"],["review","рецензия"],["classical","классический"],["monument","памятник"],["ancient","древний"],["generation","поколение"]],
"Director — это и «режиссёр», и «директор». «Памятник» — monument (архитектурный) или statue (скульптура), а не «monument». Classic — классический пример, classical — классический период.",[
["Я был на выставке современного искусства.","I went to an exhibition of modern art.|I went to a modern art exhibition.|I visited an exhibition of modern art.|I went to an exhibition of contemporary art.|I went to a contemporary art exhibition.","exhibition","exhibit|expedition","p1057"],
["Художник пишет портрет.","The artist is painting a portrait.|The painter is painting a portrait.|The artist paints a portrait.","portrait","port|portal","p1058"],
["Картина висит в галерее.","The painting is hanging in the gallery.|The picture is hanging in the gallery.|The painting hangs in the gallery.|The picture hangs in the gallery.","gallery","galley|garage","p1059"],
["Скульптура стоит на площади.","The sculpture stands in the square.|The sculpture is standing in the square.|The statue stands in the square.|The sculpture is in the square.","sculpture","sculptor|scripture","p1060"],
["Мы были в опере.","We went to the opera.|We were at the opera.","opera","operation|operate","p1061"],
["Концерт начинается в семь.","The concert starts at seven.|The concert begins at seven.","concert","consert|concept","p1062"],
["Оркестр играл прекрасно.","The orchestra played beautifully.|The orchestra played wonderfully.|The orchestra was playing beautifully.","orchestra","orchestre|orchard","p1063"],
["Режиссёр снял отличный фильм.","The director made an excellent film.|The director shot an excellent film.|The director made an excellent movie.|The director directed an excellent film.","director","directory|direction","p1064"],
["Автор написал роман.","The author wrote a novel.|The writer wrote a novel.|The author has written a novel.","novel","new|novelty","p1065"],
["Поэт читает стихи.","The poet is reading poems.|The poet reads poems.|The poet is reading poetry.|The poet reads poetry.","poet","poem|poetry","p1066"],
["Театр был полон.","The theatre was full.|The theatre was packed.","full","fool|filled","p1067"],
["Спектакль получил хорошие отзывы.","The play received good reviews.|The performance received good reviews.|The play got good reviews.|The show received good reviews.","reviews","reviewing|revenues","p1068"],
["Я люблю классическую музыку.","I like classical music.|I love classical music.","classical","classic|classy","p1069"],
["Этот памятник охраняется государством.","This monument is protected by the state.|This monument is protected by the government.|This monument is state protected.","monument","moment|monument's","p1070"],
["В музее много древних предметов.","There are many ancient objects in the museum.|There are many ancient items in the museum.|There are a lot of ancient objects in the museum.","ancient","ancestor|anxious","p1071"],
["Традиции передаются из поколения в поколение.","Traditions are passed down from generation to generation.|Traditions are handed down from generation to generation.|Traditions are passed on from generation to generation.","generation","generator|general","p1072"]
]));

add(V("w16","Слова: право и безопасность","C1",[["guilty","виновный"],["defend","защищать"],["verdict","приговор, вердикт"],["witness","свидетель"],["arrest","арестовать"],["accuse","обвинять"],["theft / thief","кража / вор"],["safety","безопасность"],["break the law","нарушить закон"],["agreement","соглашение"],["dismiss","отклонить"],["confidential","конфиденциальный"],["fine","штраф"],["complaint","жалоба"],["violation","нарушение"],["oblige","обязывать"]],
"Safety (безопасность людей) и security (охрана, защита от угроз) — не взаимозаменяемы. Confident — уверенный, confidential — секретный. Sentence — приговор и предложение; verdict — решение суда.",[
["Суд признал его виновным.","The court found him guilty.|The court convicted him.|The court has found him guilty.","guilty","guilt|guilty of","p1137"],
["Адвокат защищал клиента.","The lawyer defended his client.|The lawyer defended the client.|The lawyer was defending the client.|The attorney defended the client.","defended","defence|defend","p1138"],
["Судья объявил приговор.","The judge announced the verdict.|The judge passed sentence.|The judge delivered the verdict.|The judge gave the verdict.","verdict","version|verb","p1139"],
["Свидетель дал показания.","The witness gave evidence.|The witness testified.|The witness gave testimony.|The witness gave a statement.","witness","wittness|witches","p1140"],
["Полиция арестовала подозреваемого.","The police arrested the suspect.|The police have arrested the suspect.|Police arrested the suspect.|The police arrested a suspect.","arrested","arrest|arresting","p1141"],
["Его обвиняют в краже.","He is accused of theft.|He has been accused of theft.|He is charged with theft.|He has been charged with theft.","accused","blamed|accuse","p1142"],
["Вор украл мой кошелёк.","The thief stole my wallet.|A thief stole my wallet.|The thief has stolen my wallet.","stole","stolen|steal","p1143"],
["Нужно соблюдать правила безопасности.","We must follow the safety rules.|You must follow the safety rules.|We have to follow the safety rules.|You have to follow the safety rules.|Safety rules must be observed.","safety","safe|safely","p1144"],
["Он нарушил закон.","He broke the law.|He has broken the law.|He violated the law.","broke","broken|break","p1145"],
["Они достигли соглашения.","They reached an agreement.|They made an agreement.|They signed an agreement.|They have reached an agreement.","agreement","agree|agreeable","p1146"],
["Суд отклонил иск.","The court dismissed the claim.|The court rejected the claim.|The court threw out the claim.|The court dismissed the case.|The court rejected the lawsuit.","dismissed","dismiss|dismissing","p1147"],
["Эта информация конфиденциальна.","The information is confidential.|This information is confidential.","confidential","confident|confidently","p1148"],
["Он получил штраф за превышение скорости.","He got a fine for speeding.|He received a fine for speeding.|He was fined for speeding.|He got a speeding fine.","fine","finish|fined","p1149"],
["Мы подали жалобу.","We made a complaint.|We filed a complaint.|We lodged a complaint.|We have made a complaint.","complaint","complain|complaining","p1150"],
["Это нарушение прав человека.","It is a violation of human rights.|This is a violation of human rights.|It is a breach of human rights.|This is a breach of human rights.","violation","violence|violin","p1151"],
["Мы обязаны хранить тайну.","We are obliged to keep it secret.|We are obliged to maintain confidentiality.|We are obliged to keep this secret.|We are required to keep it secret.|We are required to maintain confidentiality.","obliged","oblige|obligation","p1152"]
]));

add(V("w17","Слова: оценки и абстрактные понятия","C1",[["significant","значительный"],["controversial","спорный"],["reliable","надёжный"],["enormous","огромный"],["subtle","тонкий, едва уловимый"],["reluctantly","неохотно"],["consistent","последовательный"],["sufficient","достаточный"],["comprehensive","всесторонний"],["alternative","альтернатива"],["essential","необходимый"],["inevitable","неизбежный"],["ambiguous","неоднозначный"],["coherent","связный"],["tolerate","терпеть"],["undermine","подрывать"]],
"Многие слова из этого списка похожи на русские, но значения расходятся: ambitious ≠ ambiguous, efficient ≠ sufficient, comprehensive ≠ comprehensible (понятный).",[
["Это значительное достижение.","It is a significant achievement.|This is a significant achievement.","significant","signify|significantly","p1185"],
["Тема очень спорная.","The topic is very controversial.|The subject is very controversial.","controversial","controversy|contradictory","p1186"],
["Это надёжный источник.","It is a reliable source.|This is a reliable source.","reliable","reliably|reliance","p1187"],
["Разница огромная.","The difference is enormous.|The difference is huge.|The difference is immense.","enormous","enormously|enormity","p1188"],
["Разница очень тонкая.","The difference is very subtle.","subtle","subtly|subtitle","p1189"],
["Он неохотно согласился.","He agreed reluctantly.|He reluctantly agreed.","reluctantly","reluctant|reluctance","p1190"],
["Её результаты стабильны.","Her results are consistent.|Her results are stable.","consistent","consist|consistency","p1191"],
["Этих доказательств недостаточно.","This evidence isn't sufficient.|This evidence is insufficient.|The evidence is not sufficient.","sufficient","efficient|suffice","p1192"],
["Мы провели всестороннее исследование.","We carried out a comprehensive study.|We conducted a comprehensive study.|We did a comprehensive study.|We carried out a comprehensive survey.|We conducted a comprehensive survey.","comprehensive","comprehensible|comprehension","p1193"],
["Есть ли альтернатива?","Is there an alternative?","alternative","alternate|alternatively","p1194"],
["Это необходимое условие.","It is an essential condition.|This is an essential condition.|It is a necessary condition.|This is a necessary condition.|It is a prerequisite.","essential","essence|essentially","p1195"],
["Конфликт был неизбежен.","The conflict was inevitable.|Conflict was inevitable.|The conflict was unavoidable.","inevitable","inevitably|invisible","p1196"],
["Его слова неоднозначны.","His words are ambiguous.|His words are unclear.|His statement is ambiguous.","ambiguous","ambitious|ambiguity","p1197"],
["Аргументы связны и логичны.","The arguments are coherent and logical.|The argument is coherent and logical.|His arguments are coherent and logical.","coherent","cohesion|coherence","p1198"],
["Я не потерплю такого поведения.","I will not tolerate such behaviour.|I will not tolerate this behaviour.|I will not tolerate such behavior.|I will not tolerate this behavior.","tolerate","tolerance|tolerant","p1199"],
["Это подрывает доверие.","This undermines trust.|It undermines trust.|This undermines confidence.|It undermines confidence.","undermines","underlines|undermine","p1200"]
]));
})();
