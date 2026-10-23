/* Курс «Ясно»: грамматика, лексика и речевые конструкции A1–C1, по 16 фраз на тему (2 урока по 8).
   Каждая фраза имеет постоянный ID (5-й элемент, pNNNN): он никогда не меняется и не переиспользуется,
   даже если фраза перенесена в другую тему. Новые фразы получают следующий свободный номер.
   Формат фразы: [русский, "англ. эталон|допустимый вариант|...", "ключ для пропуска", "ложный1|ложный2"]
   Сокращения (I'm / I am, isn't / is not) система считает равными сама, их перечислять не нужно. */
(function(){
const U = (id, title, level, rule, examples, trap, items) => ({ id, title, level, rule, examples, trap, items });
const I = a => ({ ru: a[0], en: a[1].split("|"), key: a[2], opts: a[3].split("|"), pid: a[4] });

window.UNITS_RAW = [

U("u1","Быть: am, is, are","A1",[
 "В русском «быть» в настоящем времени обычно пропускают: «Я студент». В английском глагол-связка обязателен: <b>I am</b> a student.",
 "Формы: I <b>am</b>; he / she / it <b>is</b>; you / we / they <b>are</b>. В речи сокращают: I’m, she’s, they’re.",
 "Вопрос — связка идёт вперёд: <b>Are</b> you ready? Отрицание — добавляем not: He <b>is not</b> (isn’t) busy.",
 "Возраст и состояние тоже с «быть»: I <b>am</b> cold (а не «I have cold»), He <b>is</b> twenty."
],[["She is a doctor.","Она врач."],["Are you at home?","Ты дома?"]],
"Главная ошибка: «I student», «She doctor». Если в русской фразе «есть» не слышно — в английской почти всегда нужен am / is / are.",
[
["Я студент.","I am a student.","am","is|are","p0001"],
["Она врач.","She is a doctor.","is","are|am","p0002"],
["Мы дома.","We are at home.|We are home.","are","is|am","p0003"],
["Он не занят.","He is not busy.","is not","not|does not","p0004"],
["Ты готов?","Are you ready?","Are","Is|Do","p0005"],
["Это моя сестра.","This is my sister.|It is my sister.","is","are|am","p0006"],
["Они из Москвы.","They are from Moscow.","are","is|am","p0007"],
["Где твой телефон?","Where is your phone?","is","are|am","p0008"],
["Мне холодно.","I am cold.","am","have|is","p0009"],
["Ему двадцать лет.","He is twenty years old.|He is twenty.","is","has|have","p0010"],
["Я не голоден.","I am not hungry.","am not","do not|not","p0011"],
["Вы учитель?","Are you a teacher?","Are","Do|Is","p0012"],
["Мои родители на работе.","My parents are at work.","are","is|am","p0013"],
["Сегодня жарко.","It is hot today.|Today it is hot.","is","are|has","p0014"],
["Мы не готовы.","We are not ready.","are not","do not|is not","p0015"],
["Кто это?","Who is this?|Who is it?","is","are|does","p0016"]
].map(I)),

U("u2","Артикли a, an, the","A1",[
 "В русском артиклей нет, поэтому их легко забыть. Правило-минимум: перед исчисляемым существительным в единственном числе что-то должно стоять — артикль, my, this и т. п.",
 "<b>a / an</b> — «один из, какой-то»: называем впервые или профессию. <b>an</b> — перед гласным звуком: an apple, an engineer, an hour.",
 "<b>the</b> — «тот самый», понятно какой: единственный в мире (the sun), уже упоминали, видно из ситуации (close the door). Также the best, the first.",
 "Без артикля — абстрактное и неисчисляемое «вообще»: I love music. Water is important."
],[["I need a car.","Мне нужна (какая-то) машина."],["Where are the keys?","Где ключи? (наши, известные)"]],
"Спросите себя: собеседник понимает, о каком именно предмете речь? Да → the. Нет, один из многих → a / an.",
[
["У меня есть собака.","I have a dog.|I have got a dog.","a","the|an","p0017"],
["Это яблоко.","This is an apple.|It is an apple.","an","a|the","p0018"],
["Солнце яркое.","The sun is bright.","The","A|An","p0019"],
["Закрой дверь, пожалуйста.","Close the door, please.|Please close the door.","the","a|an","p0020"],
["Она инженер.","She is an engineer.","an","a|the","p0021"],
["Я люблю музыку.","I love music.|I like music.","music","the music|a music","p0022"],
["Мне нужна машина.","I need a car.","a","the|an","p0023"],
["Где ключи?","Where are the keys?","the","a|an","p0024"],
["Я ем яйцо на завтрак.","I eat an egg for breakfast.|I have an egg for breakfast.","an","a|the","p0025"],
["Вода важна.","Water is important.","Water","The water|A water","p0026"],
["Он играет на гитаре.","He plays the guitar.","the","a|an","p0027"],
["Мой брат врач.","My brother is a doctor.","a","the|an","p0028"],
["Мы едим рыбу на ужин.","We have fish for dinner.|We eat fish for dinner.","fish","the fish|a fish","p0029"],
["Это первый урок.","This is the first lesson.|It is the first lesson.","the first","a first|first","p0030"],
["Перерыв длится час.","The break is an hour long.|The break is an hour.|The break is one hour long.","an","a|the","p0031"],
["У меня есть кот. Кот чёрный.","I have a cat. The cat is black.|I have got a cat. The cat is black.","The cat","A cat|Cat","p0032"]
].map(I)),

U("u3","Местоимения: I, me, my, mine","A1",[
 "Русскому «я — меня — мне — мой» в английском соответствуют четыре формы: <b>I</b> (кто делает), <b>me</b> (кого / кому), <b>my</b> (чей) и <b>mine</b> (чей, без существительного).",
 "Ряд: I – me – my – mine; you – you – your – yours; he – him – his – his; she – her – her – hers; we – us – our – ours; they – them – their – theirs.",
 "После глагола стоит форма «me / him / her / us / them»: Call <b>me</b>, I see <b>her</b>. Перед существительным — my / your / his / her / our / their.",
 "Русское «свой» в английском передаётся по лицу: He loves <b>his</b> wife, She loves <b>her</b> husband."
],[["Give me the key.","Дай мне ключ."],["This bag is mine.","Эта сумка моя."]],
"Ошибка «Me like tea» и «I see she»: после глагола — me / him / her, перед глаголом — I / he / she. А her — это и «её», и «ей / её»: смысл подскажет порядок слов.",
[
["Это моя книга.","This is my book.|It is my book.","my","me|I","p0049"],
["Он любит свою жену.","He loves his wife.","his","him|he","p0050"],
["Дай мне ключ.","Give me the key.|Give me a key.","me","I|my","p0051"],
["Я вижу её.","I see her.","her","she|hers","p0052"],
["Это их дом.","This is their house.|It is their house.","their","they|them","p0053"],
["Эта сумка моя.","This bag is mine.","mine","my|me","p0054"],
["Позвони нам завтра.","Call us tomorrow.|Phone us tomorrow.","us","we|our","p0055"],
["Мы любим наш город.","We love our city.|We like our city.","our","us|we","p0056"],
["Она показывает мне свои фотографии.","She shows me her photos.|She shows me her pictures.","her","she|hers","p0057"],
["Ты знаешь его?","Do you know him?","him","he|his","p0058"],
["Это твой телефон?","Is this your phone?|Is it your phone?","your","you|yours","p0059"],
["Я вижу их каждый день.","I see them every day.","them","they|their","p0060"],
["Её брат живёт в Париже.","Her brother lives in Paris.","Her","She|Hers","p0061"],
["Эта ручка твоя?","Is this pen yours?","yours","your|you","p0062"],
["Мы делаем это сами.","We do it ourselves.|We do it by ourselves.","ourselves","us|our","p0063"],
["Я порезался.","I cut myself.","myself","me|my","p0064"]
].map(I)),

U("u4","Present Simple: обычно и всегда","A1",[
 "Present Simple — то, что происходит регулярно или верно всегда: I <b>work</b> in an office.",
 "С he / she / it к глаголу добавляем <b>-s</b>: she work<b>s</b>, he read<b>s</b>. После -s, -sh, -ch, -x, -o — <b>-es</b>: she wash<b>es</b>; согласная + y → <b>-ies</b>: he stud<b>ies</b>.",
 "Вопросы и отрицания — через помощник <b>do / does</b>: <b>Do</b> you like tea? She <b>does not</b> (doesn’t) speak French. После does глагол уже без -s: does she <b>work</b>?"
],[["She lives in London.","Она живёт в Лондоне."],["Where does she work?","Где она работает?"]],
"Две частые ошибки: потерянное -s (she live) и вопрос без do / does (Where she works?). В русском вопрос строится интонацией — в английском нужен помощник.",
[
["Я работаю в офисе.","I work in an office.","work","works|working","p0065"],
["Она живёт в Лондоне.","She lives in London.","lives","live|living","p0066"],
["Мы не пьём кофе.","We do not drink coffee.","do not","does not|not","p0067"],
["Он не говорит по-французски.","He does not speak French.","does not","do not|not","p0068"],
["Ты любишь чай?","Do you like tea?|Do you love tea?","Do","Does|Are","p0069"],
["Где она работает?","Where does she work?","does","do|is","p0070"],
["Мой брат часто читает.","My brother often reads.|My brother reads often.","reads","read|reading","p0071"],
["Магазин открывается в девять.","The shop opens at nine.|The store opens at nine.","opens","open|is opening","p0072"],
["Он изучает английский каждый день.","He studies English every day.","studies","studys|study","p0073"],
["Она моет посуду после ужина.","She washes the dishes after dinner.|She does the dishes after dinner.","washes","washs|wash","p0074"],
["Дети ходят в школу пешком.","The children walk to school.|Children walk to school.|The kids walk to school.","walk","walks|are walk","p0075"],
["Поезд отправляется в шесть.","The train leaves at six.","leaves","leave|is leave","p0076"],
["Кем ты работаешь?","What do you do?|What do you do for a living?","do","are|does","p0077"],
["Сколько это стоит?","How much does it cost?","does","do|is","p0078"],
["Она не любит рано вставать.","She does not like getting up early.|She does not like to get up early.","does not","do not|not","p0079"],
["Я не понимаю.","I do not understand.","do not","does not|am not","p0080"]
].map(I)),

U("u5","Вопросительные слова","A1",[
 "Основные слова: <b>What</b> — что / какой, <b>Who</b> — кто, <b>Where</b> — где / куда, <b>When</b> — когда, <b>Why</b> — почему, <b>How</b> — как, <b>Whose</b> — чей, <b>Which</b> — какой из.",
 "Порядок слов: вопросительное слово + связка / do / does + подлежащее: <b>Where do you live?</b> <b>What is</b> your name?",
 "С прилагательными и наречиями: <b>How old</b>, <b>How much</b> (неисчисляемое, цена), <b>How many</b> (исчисляемое), <b>How long</b>, <b>How far</b>, <b>How often</b>.",
 "<b>Which</b> — выбор из известного набора: Which one is yours? <b>What</b> — выбор вообще."
],[["Where do you live?","Где ты живёшь?"],["How many brothers do you have?","Сколько у тебя братьев?"]],
"«Как тебя зовут?» — это не «How are you called», а What is your name? А «Как дела?» — How are you? Дословный перевод «как» здесь подводит.",
[
["Что это?","What is this?|What is it?","What","Who|Where","p0097"],
["Кто он?","Who is he?","Who","What|Where","p0098"],
["Где ты живёшь?","Where do you live?","Where","When|Who","p0099"],
["Когда начинается фильм?","When does the film start?|When does the movie start?|When does the film begin?|When does the movie begin?","When","Where|What","p0100"],
["Почему ты грустный?","Why are you sad?","Why","How|Who","p0101"],
["Как тебя зовут?","What is your name?","What","How|Who","p0102"],
["Как дела?","How are you?","How","What|Who","p0103"],
["Сколько тебе лет?","How old are you?","How old","How many|How long","p0104"],
["Чей это телефон?","Whose phone is this?|Whose phone is it?","Whose","Who|Which","p0105"],
["Какой твой любимый цвет?","What is your favourite colour?","What","Which|How","p0106"],
["Сколько стоит билет?","How much is the ticket?|How much does the ticket cost?","How much","How many|How long","p0107"],
["Сколько у тебя братьев?","How many brothers do you have?|How many brothers have you got?","How many","How much|How long","p0108"],
["Как далеко до вокзала?","How far is it to the station?|How far is the station?|How far is the station from here?","How far","How long|How much","p0109"],
["Сколько длится фильм?","How long is the film?|How long is the movie?|How long does the film last?|How long does the movie last?","How long","How far|How many","p0110"],
["Какой из них твой?","Which one is yours?|Which is yours?","Which","What|Who","p0111"],
["Куда ты идёшь?","Where are you going?","Where","Which|When","p0112"]
].map(I)),

U("u6","Множественное число, this / that","A1",[
 "Обычно к существительному добавляют <b>-s</b>: cat → cats. После -s, -sh, -ch, -x — <b>-es</b>: box → boxes. Согласная + y → <b>-ies</b>: family → families.",
 "Частые исключения: man → <b>men</b>, woman → <b>women</b>, child → <b>children</b>, foot → <b>feet</b>, tooth → <b>teeth</b>, person → <b>people</b>.",
 "<b>this / these</b> — близко (этот / эти), <b>that / those</b> — далеко (тот / те). This <b>is</b> a book, these <b>are</b> books.",
 "Есть слова только во множественном числе: glasses (очки), trousers (брюки), scissors (ножницы)."
],[["These are my friends.","Это мои друзья."],["Those houses are old.","Те дома старые."]],
"Ошибки «childs», «mans», «peoples»: это нужно просто запомнить. А «очки», «брюки» в английском — всегда множественное число: my glasses are new.",
[
["У меня две кошки.","I have two cats.|I have got two cats.","cats","cat|cates","p0113"],
["Это мои друзья.","These are my friends.|They are my friends.","These","This|That","p0114"],
["Что это там?","What is that?|What is that over there?","that","this|those","p0115"],
["Эти ключи мои.","These keys are mine.","These","This|That","p0116"],
["Те дома старые.","Those houses are old.|Those buildings are old.","Those","That|These","p0117"],
["Мои дети любят яблоки.","My children like apples.|My children love apples.","children","childs|childrens","p0118"],
["Я вижу двух мужчин.","I see two men.","men","man|mans","p0119"],
["У него болят ноги.","His feet hurt.|His legs hurt.","feet","foots|foot","p0120"],
["Этот стул удобный.","This chair is comfortable.|This chair is comfy.","This","These|Those","p0121"],
["Та девушка — моя сестра.","That girl is my sister.","That","Those|These","p0122"],
["Посмотри на этих птиц.","Look at these birds.","these","this|that","p0123"],
["Эти женщины — врачи.","These women are doctors.","women","woman|womans","p0124"],
["У меня две коробки.","I have two boxes.|I have got two boxes.","boxes","boxs|box","p0125"],
["Мне нужны новые очки.","I need new glasses.","glasses","glass|a glasses","p0126"],
["Здесь живут две семьи.","Two families live here.","families","familys|family","p0127"],
["Кто эти люди?","Who are these people?|Who are those people?","people","peoples|persons","p0128"]
].map(I)),

U("u7","There is / There are","A1",[
 "Когда говорим, что где-то что-то есть, начинаем с <b>There is</b> (один предмет, неисчисляемое) или <b>There are</b> (несколько): There <b>is</b> a table in the room. There <b>are</b> two chairs.",
 "Вопрос: <b>Is there</b> a bank here? <b>Are there</b> any shops? Отрицание: There <b>is no</b> milk. = There <b>isn’t any</b> milk.",
 "В прошлом — <b>there was / there were</b>, в будущем — <b>there will be</b>.",
 "Не путайте с «have»: «У нас в городе есть парк» — <b>There is</b> a park in our city."
],[["There is a cat on the sofa.","На диване кошка."],["Are there any shops here?","Здесь есть магазины?"]],
"Русский начинает с места («В комнате стол»), английский — с there is: There is a table in the room. Нельзя: «In the room is a table» без there и «It has a table».",
[
["В комнате есть стол.","There is a table in the room.|There is a desk in the room.","is","are|has","p0145"],
["В парке есть дети.","There are children in the park.|There are kids in the park.","are","is|have","p0146"],
["В холодильнике нет молока.","There is no milk in the fridge.|There is not any milk in the fridge.","is no","are no|has no","p0147"],
["Здесь есть банк?","Is there a bank here?|Is there a bank near here?","Is there","Are there|Has","p0148"],
["В городе есть музеи?","Are there any museums in the city?|Are there museums in the city?|Are there any museums in the town?|Are there museums in the town?","Are there","Is there|Have there","p0149"],
["На столе три книги.","There are three books on the table.","are","is|have","p0150"],
["Рядом есть кафе.","There is a cafe nearby.|There is a cafe near here.|There is a café nearby.|There is a café near here.","There is","It is|Is there","p0151"],
["В моей семье пять человек.","There are five people in my family.|There are five of us in my family.","There are","It is|They are","p0152"],
["В этом городе нет метро.","There is no metro in this city.|There is no subway in this city.|There is not a metro in this city.|There is no underground in this city.","no","not|none","p0153"],
["Сколько яблок в корзине?","How many apples are there in the basket?|How many apples are in the basket?","are there","there are|is there","p0154"],
["На улице много людей.","There are a lot of people in the street.|There are many people in the street.|There are lots of people in the street.|There are a lot of people on the street.","are","is|be","p0155"],
["Здесь есть кинотеатр?","Is there a cinema here?|Is there a cinema near here?|Is there a movie theater here?","Is there","Are there|Has","p0156"],
["В этой комнате нет окон.","There are no windows in this room.|There are not any windows in this room.","are no","is no|are not","p0157"],
["В моём городе два парка.","There are two parks in my town.|There are two parks in my city.","parks","park|parkes","p0158"],
["В озере есть рыба?","Is there any fish in the lake?|Is there fish in the lake?","any","a|some","p0159"],
["Есть что-нибудь поесть?","Is there anything to eat?|Is there anything to eat here?","anything","something|everything","p0160"]
].map(I)),

U("u8","Can / can’t: уметь и мочь","A1",[
 "<b>can</b> — «могу, умею»: I <b>can swim</b>. После can глагол стоит без to и без -s: she <b>can play</b> (а не cans, can plays, can to play).",
 "Отрицание: <b>cannot</b> (can’t). Вопрос: <b>Can</b> you help me? Просьба вежливее: <b>Could</b> you help me?",
 "Прошедшее время — <b>could / could not</b>: I <b>could</b> swim when I was five. Предположение — <b>may / might</b>: He <b>may be</b> at home."
],[["I can swim.","Я умею плавать."],["Can you help me?","Ты можешь мне помочь?"]],
"Нельзя «do you can» и «can to»: can — сам себе помощник. Вопрос — Can you…? Отрицание — cannot.",
[
["Я умею плавать.","I can swim.","can","am|do","p0161"],
["Она не умеет водить.","She cannot drive.","cannot","not can|does not can","p0162"],
["Ты можешь мне помочь?","Can you help me?|Could you help me?","Can","Do|Are","p0163"],
["Он умеет говорить по-английски.","He can speak English.","can speak","can speaks|cans speak","p0164"],
["Мы не можем прийти сегодня.","We cannot come today.","cannot come","cannot to come|do not can come","p0165"],
["Она умеет играть на пианино.","She can play the piano.","can play","can plays|cans play","p0166"],
["Можно мне войти?","Can I come in?|May I come in?|Could I come in?","Can","Do|Am","p0167"],
["Ты умел плавать в пять лет?","Could you swim at the age of five?|Could you swim at five?","Could","Can|Did","p0168"],
["Я не мог открыть дверь.","I could not open the door.","could not","can not|did not can","p0169"],
["Он, возможно, дома.","He may be at home.|He might be at home.|He could be at home.|He may be home.|He might be home.","may","is|does","p0170"],
["Я не могу найти ключи.","I cannot find my keys.|I cannot find the keys.","cannot find","not can find|do not can find","p0171"],
["Вы умеете готовить?","Can you cook?","Can","Do|Are","p0172"],
["Мы можем начать сейчас.","We can start now.|We can begin now.","can","are|do","p0173"],
["Она не может сейчас говорить.","She cannot talk now.|She cannot speak now.","cannot","does not can|not","p0174"],
["Ты можешь говорить медленнее?","Can you speak more slowly?|Could you speak more slowly?|Can you speak slower?|Could you speak slower?","Can","Do|Are","p0175"],
["Я умею играть в шахматы.","I can play chess.","can play","can to play|play can","p0176"]
].map(I)),

U("u9","Present Continuous: сейчас","A1",[
 "Present Continuous (am / is / are + глагол с <b>-ing</b>) — действие идёт прямо сейчас или в этот период: I <b>am reading</b> now. It <b>is raining</b>.",
 "Present Simple — привычка, регулярность: He usually <b>walks</b> to work. Сравните: He <b>walks</b> (вообще) и He <b>is walking</b> (сейчас).",
 "Глаголы состояния (know, understand, like, want, need, love) в Continuous почти не ставят: I <b>understand</b> you, а не I’m understanding.",
 "Правописание -ing: run → ru<b>nn</b>ing, make → mak<b>ing</b>, lie → l<b>y</b>ing."
],[["What are you doing?","Что ты (сейчас) делаешь?"],["What do you do?","Кем ты работаешь?"]],
"Русское «я читаю» — это и «сейчас», и «вообще». Перед переводом спросите себя: речь о моменте или о привычке?",
[
["Я сейчас читаю.","I am reading now.|I am reading right now.","am reading","read|reads","p0209"],
["Она сейчас готовит ужин.","She is cooking dinner now.|She is making dinner now.|She is cooking dinner right now.|She is making dinner right now.","is cooking","cooks|cook","p0210"],
["Что ты делаешь?","What are you doing?","are you doing","do you do|you doing","p0211"],
["Он обычно ходит пешком.","He usually walks.|He usually goes on foot.","walks","is walking|walk","p0212"],
["Идёт дождь.","It is raining.","is raining","rains|is rain","p0213"],
["Они сейчас не смотрят телевизор.","They are not watching TV now.|They are not watching TV right now.","are not watching","do not watch|not watching","p0214"],
["Я понимаю тебя.","I understand you.","understand","am understanding|understands","p0215"],
["Мы ждём автобус.","We are waiting for the bus.","waiting for","waiting|waiting to","p0216"],
["Она сейчас спит.","She is sleeping now.|She is sleeping right now.","is sleeping","sleeps|is sleep","p0217"],
["Дети играют в саду.","The children are playing in the garden.|The kids are playing in the garden.","are playing","play|is playing","p0218"],
["Я хочу чаю.","I want some tea.|I want tea.","want","am wanting|wanting","p0219"],
["Он сейчас бежит в парке.","He is running in the park now.|He is running in the park right now.","is running","is runing|runs","p0220"],
["Мы сейчас строим дом.","We are building a house now.|We are building a house right now.|We are building a house.","are building","build|building","p0221"],
["Ты меня слушаешь?","Are you listening to me?","Are you listening","Do you listen|Are you listen","p0222"],
["Она сегодня не работает.","She is not working today.","is not working","does not working|not working","p0223"],
["Почему ты смеёшься?","Why are you laughing?","are you laughing","do you laugh|you laughing","p0224"]
].map(I)),

U("u10","Предлоги in, on, at","A1",[
 "<b>Время.</b> at — точный момент (at 8 o’clock, at night, at the weekend); on — день и дата (on Monday, on 5 May); in — месяц, год, сезон, часть дня (in 1990, in summer, in the morning).",
 "<b>Готовый оборот:</b> «я родился» — <b>I was born</b> (in 1990, in Moscow). Запомните его целиком: прошедшее время будет позже.",
 "<b>Место.</b> at — точка, пункт (at work, at the bus stop); on — поверхность (on the table, on the wall, on the third floor); in — внутри (in Moscow, in the room, in the bag).",
 "Русские «в» и «на» не совпадают с английскими: «на работе» — at work, «в понедельник» — on Monday."
],[["I was born in 1990.","Я родился в 1990 году."],["He is at work.","Он на работе."]],
"Переводить предлог дословно — главная ловушка. Учите блоками вместе с существительным: on Monday, at home, in summer, at night.",
[
["Встретимся в понедельник.","See you on Monday.|Let us meet on Monday.","on","in|at","p0225"],
["Я родился в 1990 году.","I was born in 1990.","in","on|at","p0226"],
["Урок начинается в 8 часов.","The lesson starts at 8 o'clock.|The class starts at 8 o'clock.|The lesson begins at 8 o'clock.","at","in|on","p0227"],
["Книга на столе.","The book is on the table.","on","at|in","p0228"],
["Он на работе.","He is at work.","at","on|in","p0229"],
["Мы живём в Москве.","We live in Moscow.","in","at|on","p0230"],
["Летом мы ездим на море.","In summer we go to the sea.|We go to the sea in summer.|In the summer we go to the sea.|We go to the sea in the summer.|In summer we go to the seaside.|We go to the seaside in summer.","In","On|At","p0231"],
["Я на автобусной остановке.","I am at the bus stop.","at","on|in","p0232"],
["Мой день рождения в мае.","My birthday is in May.","in","on|at","p0233"],
["Мы встречаемся в пятницу вечером.","We meet on Friday evening.|We are meeting on Friday evening.","on","in|at","p0234"],
["Я не сплю ночью.","I do not sleep at night.","at","in|on","p0235"],
["Она живёт на третьем этаже.","She lives on the third floor.","on","in|at","p0236"],
["Мы на концерте.","We are at a concert.|We are at the concert.","at","on|in","p0237"],
["Ключи в сумке.","The keys are in the bag.","in","on|at","p0238"],
["На стене висит картина.","There is a picture on the wall.|A picture is hanging on the wall.","on","in|at","p0239"],
["Я работаю в субботу утром.","I work on Saturday morning.|I work on Saturday mornings.","on","in|at","p0240"]
].map(I)),

U("u11","Some, any, much, many","A1",[
 "<b>some</b> — в утверждениях и предложениях: I have <b>some</b> money. Would you like <b>some</b> tea? <b>any</b> — в вопросах и отрицаниях: Do you have <b>any</b> brothers? I don’t have <b>any</b> money.",
 "Исчисляемые (apples, friends): <b>many</b>, <b>a few</b> (несколько), <b>few</b> (мало). Неисчисляемые (water, time, money): <b>much</b>, <b>a little</b> (немного), <b>little</b> (мало).",
 "В утверждениях вместо much / many чаще <b>a lot of</b>: She has a lot of friends. Much и many — в вопросах и отрицаниях: How much? I don’t drink much."
],[["Do you have any brothers?","У тебя есть братья?"],["How much time do you have?","Сколько у тебя времени?"]],
"Вопрос «сколько» зависит от слова: How many apples? (можно посчитать), How much water? (нельзя). Русский «сколько» один на всё, английскому нужно два слова.",
[
["У меня есть немного денег.","I have some money.","some","any|many","p0273"],
["У тебя есть братья?","Do you have any brothers?|Have you got any brothers?","any","some|many","p0274"],
["Мне не нужно сахара.","I do not need any sugar.|I do not need sugar.","any","some|no","p0275"],
["Сколько у тебя времени?","How much time do you have?|How much time have you got?","much","many|some","p0276"],
["Сколько здесь людей?","How many people are here?|How many people are there here?","many","much|some","p0277"],
["Мне нужно немного молока.","I need some milk.","some","any|many","p0278"],
["У нас мало времени.","We have little time.|We do not have much time.","little","few|a few","p0279"],
["У меня мало друзей.","I have few friends.|I do not have many friends.","few","little|much","p0280"],
["У неё много друзей.","She has a lot of friends.|She has many friends.|She has lots of friends.","a lot of","much|a many","p0281"],
["Я не пью много кофе.","I do not drink much coffee.|I do not drink a lot of coffee.","much","many|a lot","p0282"],
["В холодильнике есть немного сыра.","There is some cheese in the fridge.","some","any|many","p0283"],
["Здесь нет проблем.","There are no problems here.|There are not any problems here.","no","any|not","p0284"],
["Можно мне немного воды?","Can I have some water?|Could I have some water?|May I have some water?","some","any|many","p0285"],
["Сколько стоят эти яблоки?","How much are these apples?|How much do these apples cost?","How much","How many|How some","p0286"],
["У неё есть несколько яиц.","She has a few eggs.|She has got a few eggs.","a few","a little|few","p0287"],
["Мне нужно немного помощи.","I need a little help.|I need some help.","a little","a few|few","p0288"]
].map(I)),

U("u12","Как часто: always, never и порядок слов","A1",[
 "Наречия частоты: <b>always</b> (всегда), <b>usually</b> (обычно), <b>often</b> (часто), <b>sometimes</b> (иногда), <b>rarely</b> (редко), <b>never</b> (никогда).",
 "Обычно они стоят <b>перед</b> смысловым глаголом: I <b>always drink</b> coffee. Но <b>после</b> be: He <b>is never</b> late.",
 "Never уже содержит отрицание, второго not не нужно: I <b>never</b> eat fish (а не I don’t never eat).",
 "Вопрос о частоте — <b>How often</b> do you go to the gym? Ответ: twice a week, every day, once a month."
],[["I always drink coffee in the morning.","Я всегда пью кофе утром."],["He is never late.","Он никогда не опаздывает."]],
"В русском порядок слов свободный, в английском — нет: «Я пью всегда кофе» нельзя. Наречие стоит перед глаголом, но после am / is / are.",
[
["Я всегда пью кофе утром.","I always drink coffee in the morning.","always drink","drink always|am always drink","p0289"],
["Он никогда не опаздывает.","He is never late.","is never","never is|does never","p0290"],
["Мы иногда ходим в кино.","We sometimes go to the cinema.|Sometimes we go to the cinema.|We sometimes go to the movies.|Sometimes we go to the movies.","sometimes go","do sometimes go|sometimes goes","p0291"],
["Она обычно встаёт в семь.","She usually gets up at seven.","usually gets","gets usually|usually get","p0292"],
["Они редко едят мясо.","They rarely eat meat.|They seldom eat meat.","rarely eat","rarely eats|are rarely eat","p0293"],
["Я часто забываю пароли.","I often forget passwords.|I often forget my passwords.","often forget","often forgets|am often forget","p0294"],
["Ты когда-нибудь опаздываешь?","Are you ever late?","ever","never|always","p0295"],
["Я никогда не ем рыбу.","I never eat fish.","never","do not never|not","p0296"],
["Как часто ты ходишь в спортзал?","How often do you go to the gym?","How often","How many|How long","p0297"],
["Она почти всегда дома по вечерам.","She is almost always at home in the evenings.|She is almost always at home in the evening.|She is almost always home in the evening.","is almost always","almost always is|does almost always","p0298"],
["Мы играем в теннис дважды в неделю.","We play tennis twice a week.|We play tennis two times a week.","twice","two|second","p0299"],
["Он ходит туда каждый день.","He goes there every day.","every day","all day|each days","p0300"],
["Иногда я работаю по выходным.","Sometimes I work at weekends.|Sometimes I work on weekends.|I sometimes work on weekends.|I sometimes work at weekends.|Sometimes I work on the weekend.","Sometimes","Sometime|Some times","p0301"],
["Она обычно не завтракает.","She usually does not have breakfast.|She does not usually have breakfast.|She usually does not eat breakfast.|She does not usually eat breakfast.","does not","do not|is not","p0302"],
["Я редко бываю дома.","I am rarely at home.|I am rarely home.","am rarely","rarely am|am rare","p0303"],
["Мы почти никогда не ссоримся.","We hardly ever argue.|We almost never argue.|We rarely argue.|We hardly ever quarrel.","hardly ever","hard ever|hardly never","p0304"]
].map(I)),

U("u13","Past Simple: правильные глаголы и was / were","A2",[
 "Past Simple — законченное действие в прошлом (часто со словами yesterday, last week, in 2020). Правильные глаголы получают <b>-ed</b>: work → work<b>ed</b>, live → live<b>d</b>, study → stud<b>ied</b>, stop → sto<b>pp</b>ed.",
 "«Был / была / были»: <b>was</b> (I, he, she, it), <b>were</b> (you, we, they). Вопрос и отрицание у них без did: <b>Was</b> he at home? He <b>was not</b> ready.",
 "Вопрос и отрицание обычных глаголов — через <b>did</b>, глагол возвращается в начальную форму: <b>Did</b> you open it? She <b>did not answer</b> (а не did not answered)."
],[["I worked late yesterday.","Вчера я работал допоздна."],["Did you open the window?","Ты открыл окно?"]],
"После did — только начальная форма: did you arrive, а не did you arrived. -ed ставим только в утверждении.",
[
["Вчера я работал допоздна.","I worked late yesterday.|Yesterday I worked late.","worked","work|was work","p0353"],
["Мы жили в Риге пять лет.","We lived in Riga for five years.","lived","live|were live","p0354"],
["Я был дома.","I was at home.|I was home.","was","were|am","p0355"],
["Они были счастливы.","They were happy.","were","was|are","p0356"],
["Она позвонила мне вечером.","She called me in the evening.|She phoned me in the evening.","called","calls|calling","p0357"],
["Он не ответил на письмо.","He did not answer the letter.|He did not reply to the letter.","did not answer","not answered|did not answered","p0358"],
["Вы открыли окно?","Did you open the window?","Did","Do|Were","p0359"],
["Вчера мы гуляли в парке.","We walked in the park yesterday.|Yesterday we walked in the park.","walked","walk|were walk","p0360"],
["Она училась в университете.","She studied at university.|She studied at the university.","studied","studyed|studies","p0361"],
["Кто открыл дверь?","Who opened the door?","opened","open|did open","p0362"],
["Фильм начался в восемь.","The film started at eight.|The movie started at eight.|The film began at eight.|The movie began at eight.","started","start|was start","p0363"],
["Он остановился и посмотрел на меня.","He stopped and looked at me.","stopped","stoped|stopt","p0364"],
["Было холодно.","It was cold.","was","were|is","p0365"],
["Вы были вчера на работе?","Were you at work yesterday?","Were","Was|Did","p0366"],
["Она не была готова.","She was not ready.","was not","did not|were not","p0367"],
["Когда ты приехал?","When did you arrive?|When did you come?|When did you get here?","did you arrive","you arrived|did you arrived","p0368"]
].map(I)),

U("u14","Past Simple: неправильные глаголы","A2",[
 "Самые частые глаголы неправильные, их формы просто запоминают: go → <b>went</b>, buy → <b>bought</b>, see → <b>saw</b>, eat → <b>ate</b>, take → <b>took</b>, give → <b>gave</b>.",
 "Ещё: write → wrote, tell → told, meet → met, come → came, sleep → slept, lose → lost, know → knew, think → thought, do → did.",
 "В вопросе и отрицании снова <b>did</b> + начальная форма: <b>Did</b> you see it? I <b>did not sleep</b> (а не did not slept)."
],[["We went to the cinema.","Мы ходили в кино."],["What did you do yesterday?","Что ты вчера делал?"]],
"Нельзя добавлять -ed к неправильным: «goed», «buyed», «eated». Выучите 15–20 самых частых, остальное придёт с практикой.",
[
["Она купила новое платье.","She bought a new dress.","bought","buyed|buy","p0369"],
["Мы ходили в кино.","We went to the cinema.|We went to the movies.","went","goed|go","p0370"],
["Ты видел этот фильм?","Did you see this film?|Did you see this movie?","Did","Do|Were","p0371"],
["Он не позвонил мне.","He did not call me.|He did not phone me.","did not call","did not called|not called","p0372"],
["Я съел весь торт.","I ate the whole cake.|I ate all the cake.|I ate the entire cake.","ate","eated|eaten","p0373"],
["Она написала мне письмо.","She wrote me a letter.|She wrote a letter to me.","wrote","writed|written","p0374"],
["Мы взяли такси.","We took a taxi.|We got a taxi.","took","taked|taken","p0375"],
["Он сказал правду.","He told the truth.","told","telled|tolled","p0376"],
["Вчера я встретил друга.","Yesterday I met a friend.|I met a friend yesterday.","met","meeted|meet","p0377"],
["Они пришли поздно.","They came late.|They arrived late.","came","comed|come","p0378"],
["Я не спал всю ночь.","I did not sleep all night.|I did not sleep the whole night.","did not sleep","did not slept|not slept","p0379"],
["Он потерял телефон.","He lost his phone.","lost","losed|loosed","p0380"],
["Я дал ей книгу.","I gave her a book.|I gave a book to her.","gave","gived|given","p0381"],
["Что ты сделал вчера?","What did you do yesterday?","did you do","you did|did you did","p0382"],
["Она знала ответ.","She knew the answer.","knew","knowed|known","p0383"],
["Он думал, что это шутка.","He thought it was a joke.|He thought that it was a joke.","thought","thinked|thoughted","p0384"]
].map(I)),

U("u15","Будущее: will и going to","A2",[
 "<b>will</b> — решение в момент речи, обещание, мнение о будущем: I’<b>ll help</b> you. I think he <b>will win</b>.",
 "<b>be going to</b> — план, который уже есть, или вывод по видимым признакам: We <b>are going to buy</b> a house. Look, he <b>is going to fall</b>!",
 "<b>be + -ing</b> (Present Continuous) — договорённость на ближайшее будущее: We <b>are moving</b> next month.",
 "После when, if, before, after, as soon as о будущем говорят в Present Simple: I’ll call <b>when I arrive</b>, а не when I will arrive."
],[["Will you call me?","Ты позвонишь мне?"],["It is going to rain.","Сейчас пойдёт дождь (уже видно по тучам)."]],
"Русское «когда приеду» хочется перевести как when I will arrive. В придаточных времени и условия will не ставят.",
[
["Я помогу тебе.","I will help you.","will help","help|am help","p0417"],
["Завтра будет дождь.","It will rain tomorrow.|It is going to rain tomorrow.|Tomorrow it will rain.","will rain","rains|will raining","p0418"],
["Мы собираемся купить дом.","We are going to buy a house.","going to buy","going buy|go to buy","p0419"],
["Она не придёт.","She will not come.|She is not coming.","will not","does not|not will","p0420"],
["Ты позвонишь мне?","Will you call me?|Are you going to call me?","Will","Do|Are","p0421"],
["Что ты будешь делать завтра?","What are you going to do tomorrow?|What will you do tomorrow?|What are you doing tomorrow?","are you going to do","you will do|will you doing","p0422"],
["Думаю, он победит.","I think he will win.","will win","wins|will wins","p0423"],
["Я позвоню, когда приеду.","I will call when I arrive.|I will call you when I arrive.|I will call when I get there.|I will call you when I get there.","when I arrive","when I will arrive|when I arrived","p0424"],
["Я, наверное, останусь дома.","I will probably stay at home.|I will probably stay home.","will","do|am","p0425"],
["Не волнуйся, я всё сделаю.","Do not worry, I will do everything.|Do not worry, I will do it all.|Do not worry, I will do it.","will do","do|am do","p0426"],
["В субботу у нас вечеринка.","We are having a party on Saturday.|We are going to have a party on Saturday.","are having","have having|are have","p0427"],
["Смотри, он сейчас упадёт!","Look, he is going to fall!","is going to","will|is go to","p0428"],
["Я не знаю, что я буду делать.","I do not know what I will do.|I do not know what I am going to do.","I will do","I do|I would do","p0429"],
["Если пойдёт дождь, мы останемся дома.","If it rains, we will stay at home.|If it rains, we will stay home.","rains","will rain|rained","p0430"],
["Давай я помогу тебе с сумкой.","I will help you with the bag.|Let me help you with the bag.|I will help you with your bag.","I will help","I help|I am help","p0431"],
["Они переезжают в следующем месяце.","They are moving next month.|They are going to move next month.","are moving","move|will moving","p0432"]
].map(I)),

U("u16","Сравнение: bigger, the biggest","A2",[
 "Короткие прилагательные: <b>-er</b> и <b>the -est</b>: tall → taller → the tallest. Удвоение согласной: big → bigger; на -y: easy → easier.",
 "Длинные (2+ слога): <b>more</b> и <b>the most</b>: more expensive, the most interesting. Не смешивайте: нельзя «more taller».",
 "Исключения: good → <b>better</b> → <b>the best</b>; bad → <b>worse</b> → <b>the worst</b>. Сравниваем через <b>than</b>: taller than me. Равенство: <b>as … as</b>.",
 "Наречия: more carefully, faster, better. «Чем … тем»: <b>The sooner, the better</b>."
],[["He is taller than me.","Он выше меня."],["This is the most expensive hotel.","Это самый дорогой отель."]],
"Превосходная степень почти всегда с the: the best, the most interesting. В русском такого слова нет — отсюда пропуски.",
[
["Он выше меня.","He is taller than me.|He is taller than I am.|He is taller than I.","taller than","more tall than|tall than","p0433"],
["Этот дом больше, чем тот.","This house is bigger than that one.|This house is bigger than that.","bigger than","more big than|biger than","p0434"],
["Это самый дорогой отель.","This is the most expensive hotel.|It is the most expensive hotel.","the most expensive","the expensivest|most expensive","p0435"],
["Она старше моего брата.","She is older than my brother.","older than","more old than|oldest than","p0436"],
["Сегодня теплее, чем вчера.","It is warmer today than yesterday.|Today it is warmer than yesterday.","warmer","more warm|warm","p0437"],
["Это лучший фильм года.","This is the best film of the year.|This is the best movie of the year.|It is the best film of the year.|It is the best movie of the year.","the best","the most good|the better","p0438"],
["Сегодня погода хуже, чем вчера.","The weather is worse today than yesterday.|The weather today is worse than yesterday.|Today the weather is worse than yesterday.","worse","more bad|badder","p0439"],
["Он такой же высокий, как я.","He is as tall as me.|He is as tall as I am.|He is as tall as I.","as tall as","so tall as|tall as","p0440"],
["Чем больше, тем лучше.","The more, the better.","The more","More|The most","p0441"],
["Это легче, чем кажется.","It is easier than it seems.|It is easier than it looks.|It is easier than it sounds.","easier","more easy|easyer","p0442"],
["Она самая умная в классе.","She is the smartest in the class.|She is the smartest girl in the class.|She is the cleverest in the class.|She is the most intelligent in the class.","the smartest","the most smart|smartest","p0443"],
["Мой кофе горячее твоего.","My coffee is hotter than yours.","hotter","more hot|hoter","p0444"],
["Поезд быстрее автобуса.","The train is faster than the bus.","faster","more fast|fastest","p0445"],
["Это самая интересная книга в библиотеке.","This is the most interesting book in the library.|It is the most interesting book in the library.","the most interesting","the interestingest|most interesting","p0446"],
["Он водит осторожнее, чем я.","He drives more carefully than me.|He drives more carefully than I do.","more carefully","carefullier|more careful","p0447"],
["Чем раньше, тем лучше.","The sooner, the better.|The earlier, the better.","The sooner","Sooner|The soon","p0448"]
].map(I)),

U("u17","Вежливость: просьбы и повседневные фразы","A2",[
 "Просьба: <b>Can I have…?</b> (обычно), <b>Could I have…?</b> (вежливее), <b>Could you help me?</b> Предложение: <b>Would you like…?</b> Желание: <b>I would like…</b> (= I’d like).",
 "Нейтральное «пожалуйста» в просьбе — <b>please</b>; в ответ на «спасибо» — <b>You’re welcome</b> / No problem.",
 "Дорога: <b>How do I get to…?</b> Цена: <b>How much is it?</b> Не поняли: <b>Could you repeat that?</b>",
 "Вежливость в английском — это форма вопроса, а не интонация: «Дай воды» звучит грубо, Could I have some water? — нормально."
],[["Could you help me, please?","Не могли бы вы мне помочь?"],["I would like to book a table.","Я бы хотел заказать стол."]],
"Не говорите «I want» в магазине или кафе — звучит резко. Используйте I’d like… или Can I have…?",
[
["Можно мне чашку кофе, пожалуйста?","Can I have a cup of coffee, please?|Could I have a cup of coffee, please?|May I have a cup of coffee, please?","Can I have","Can I has|Do I have","p0465"],
["Не могли бы вы мне помочь?","Could you help me, please?|Could you please help me?|Can you help me, please?|Can you please help me?","Could you","Could you to|Did you","p0466"],
["Я бы хотел заказать столик.","I would like to book a table.|I would like to reserve a table.","would like","want like|would to like","p0467"],
["Хотите ещё чаю?","Would you like some more tea?|Would you like more tea?|Would you like another cup of tea?|Do you want some more tea?","Would you like","Do you like|Would you liking","p0468"],
["Простите, как пройти на вокзал?","Excuse me, how do I get to the station?|Excuse me, how can I get to the station?|Excuse me, where is the station?","how do I get","how I get|how do I to get","p0469"],
["Сколько с меня?","How much is it?|How much do I owe you?|How much does it cost?","How much","How many|What much","p0470"],
["Извините, я опоздал.","Sorry, I am late.|I am sorry I am late.","I am late","I late|I have late","p0471"],
["Не за что.","You are welcome.|No problem.|Not at all.","welcome","welcomed|well come","p0472"],
["Подождите минуту, пожалуйста.","Wait a minute, please.|Just a minute, please.|Please wait a minute.|Hold on a minute, please.|One moment, please.","a minute","the minute|minute","p0473"],
["Вы не против, если я открою окно?","Do you mind if I open the window?|Would you mind if I opened the window?","Do you mind","Are you mind|Do you against","p0474"],
["Мне то же самое, пожалуйста.","The same for me, please.|I will have the same, please.|I would like the same, please.","The same","Same the|Equal","p0475"],
["Я просто смотрю, спасибо.","I am just looking, thank you.|I am just looking, thanks.|I am only looking, thank you.|I am only looking, thanks.","just looking","only look|just look","p0476"],
["Можно вас на минутку?","Can I have a word with you?|Could I have a word with you?|Can I talk to you for a minute?|Do you have a minute?","have a word","say a word|have word","p0477"],
["Приятно познакомиться.","Nice to meet you.|Pleased to meet you.|It is nice to meet you.|Glad to meet you.","to meet","meeting|to met","p0478"],
["Не могли бы вы повторить?","Could you repeat that, please?|Could you say that again, please?|Could you repeat it, please?|Can you repeat that, please?","repeat","repeating|to repeat","p0479"],
["Счёт, пожалуйста.","Can I have the bill, please?|The bill, please.|Could I have the bill, please?|Can we have the bill, please?|Could we have the bill, please?|Can I have the check, please?|Can we have the check, please?|Could I have the check, please?|Could we have the check, please?","the bill","a bill|bill","p0480"]
].map(I)),

U("u18","Must, have to, should","A2",[
 "<b>have to</b> — внешняя необходимость, «приходится»: I <b>have to</b> go. She <b>has to</b> get up early. В прошлом: I <b>had to</b> wait.",
 "<b>must</b> — сильная обязанность или запрет: You <b>must not</b> smoke here. <b>should</b> — совет: You <b>should</b> rest.",
 "Важная разница: <b>must not</b> = «нельзя», <b>do not have to</b> = «не обязательно». He <b>does not have to</b> come — приходить не обязан.",
 "После must / should — глагол без to: she <b>should call</b>, он <b>must go</b>. Прошедший упрёк: You <b>should have called</b> me (надо было позвонить)."
],[["I have to go.","Мне нужно идти."],["You must not smoke here.","Здесь нельзя курить."]],
"Русское «не должен» бывает двумя разными: «нельзя» (must not) и «не обязан» (don’t have to). Перепутать — значит сказать противоположное.",
[
["Мне нужно идти.","I have to go.|I must go.|I need to go.|I have got to go.","have to","must to|has to","p0481"],
["Тебе стоит отдохнуть.","You should rest.|You should take a rest.|You should have a rest.","should","must to|should to","p0482"],
["Ему не нужно приходить.","He does not have to come.|He does not need to come.","does not have to","must not|has not to","p0483"],
["Здесь нельзя курить.","You must not smoke here.|Smoking is not allowed here.|You cannot smoke here.|You are not allowed to smoke here.","must not","do not have to|should to not","p0484"],
["Мне пришлось ждать.","I had to wait.","had to","must|have to","p0485"],
["Тебе нужно позвонить врачу.","You should call a doctor.|You should call the doctor.|You must call a doctor.|You need to call a doctor.","should call","should to call|must to call","p0486"],
["Ей надо рано вставать.","She has to get up early.|She must get up early.","has to","have to|must to","p0487"],
["Тебе не стоит так много работать.","You should not work so much.|You should not work that much.|You should not work too much.","should not","do not should|not should","p0488"],
["Мне нужно взять паспорт?","Do I have to take a passport?|Do I need to take my passport?|Do I have to take my passport?|Do I need to take a passport?","Do I have to","Must I to|Have I to","p0489"],
["Мы должны быть там в девять.","We must be there at nine.|We have to be there at nine.","must","must to|musts","p0490"],
["Тебе лучше не опаздывать.","You had better not be late.|You should not be late.","had better not","had not better|better not had","p0491"],
["Тебе не обязательно отвечать сейчас.","You do not have to answer now.|You do not need to answer now.","do not have to","must not|do not must","p0492"],
["Мне пришлось уйти рано.","I had to leave early.","had to","must|have to","p0493"],
["Я думаю, тебе стоит попробовать.","I think you should try.|I think you should give it a try.","should","must to|would to","p0494"],
["Ученики должны носить форму.","Students must wear a uniform.|Students have to wear a uniform.|The students must wear a uniform.","must wear","must to wear|must wears","p0495"],
["Ты должен был позвонить мне.","You should have called me.|You should have phoned me.","should have called","should called|must called","p0496"]
].map(I)),

U("u19","Present Perfect: результат к настоящему","A2",[
 "Present Perfect (have / has + третья форма) связывает прошлое с настоящим: важен результат или опыт, а не момент: I’<b>ve lost</b> my keys (и сейчас их нет).",
 "Типичные спутники: <b>already, just, yet, ever, never, for, since</b>. <b>for</b> — период (for five years), <b>since</b> — начало (since 2015).",
 "«Я живу здесь пять лет» — действие началось в прошлом и длится: I <b>have lived</b> here for five years. Русское настоящее время здесь не работает.",
 "Третья форма: правильные — как Past Simple (worked); неправильные запоминаем: eaten, seen, gone, been, written, known."
],[["Have you ever been to London?","Ты когда-нибудь был в Лондоне?"],["She has just left.","Она только что ушла."]],
"Если есть точный момент в прошлом (yesterday, in 2020, last week) — нужен Past Simple, а не Perfect. В американском английском Past Simple часто звучит и с just / already.",
[
["Я уже поел.","I have already eaten.|I already ate.","have already eaten","have already ate|am already eaten","p0529"],
["Ты когда-нибудь был в Лондоне?","Have you ever been to London?|Have you ever been in London?","Have you ever been","Did you ever be|Were you ever","p0530"],
["Она только что ушла.","She has just left.|She just left.","has just left","just has left|have just left","p0531"],
["Я потерял ключи.","I have lost my keys.|I lost my keys.|I have lost the keys.","have lost","has lost|lost have","p0532"],
["Мы знаем друг друга десять лет.","We have known each other for ten years.","have known","know|are knowing","p0533"],
["Он ещё не закончил.","He has not finished yet.|He has not finished it yet.","has not finished","did not finished|has not finish","p0534"],
["Я видел этот фильм.","I have seen this film.|I have seen this movie.|I saw this film.|I saw this movie.","have seen","have saw|has seen","p0535"],
["Сколько лет ты здесь живёшь?","How long have you lived here?|How long have you been living here?","have you lived","do you live|are you living","p0536"],
["Я никогда не был в Париже.","I have never been to Paris.|I have never been in Paris.","have never been","did never be|am never been","p0537"],
["Ты уже сделал домашнее задание?","Have you done your homework yet?|Have you already done your homework?|Did you do your homework yet?","Have you done","Did you done|Are you done","p0538"],
["Она живёт здесь с 2015 года.","She has lived here since 2015.","since","for|from","p0539"],
["Он работает здесь три года.","He has worked here for three years.|He has been working here for three years.","for","since|from","p0540"],
["Мы только что пообедали.","We have just had lunch.|We just had lunch.|We have just eaten lunch.","have just had","has just had|just have had","p0541"],
["Он ещё не пришёл.","He has not come yet.|He has not arrived yet.","has not come","did not came|has not came","p0542"],
["Это лучшая книга, которую я когда-либо читал.","This is the best book I have ever read.|This is the best book that I have ever read.","have ever read","ever read|did ever read","p0543"],
["Ты звонил маме сегодня?","Have you called your mother today?|Have you phoned your mother today?|Have you called your mom today?","Have you called","Did you called|Are you called","p0544"]
].map(I)),

U("u20","Условные предложения: if и when","B1",[
 "<b>Нулевое</b> — общие истины: If you heat water, it <b>boils</b>. <b>Первое</b> — реальное будущее: If it <b>rains</b> tomorrow, I <b>will stay</b> at home.",
 "После <b>if, when, until, before, as soon as</b> будущее выражаем Present Simple, а will остаётся только в главной части: I’ll call you <b>when I arrive</b>.",
 "Запятая ставится, если условие стоит первым: If you hurry, you’ll make it. / You’ll make it if you hurry.",
 "<b>unless</b> = if … not: I won’t go <b>unless</b> you go."
],[["If it rains, I will stay at home.","Если пойдёт дождь, я останусь дома."],["I will call you when I arrive.","Я позвоню тебе, когда приеду."]],
"Русское «если он придёт» хочется сделать «if he will come». В английском в части с if / when / until после них будущего времени нет.",
[
["Если нагреть воду, она закипает.","If you heat water, it boils.|When you heat water, it boils.","boils","will boil|boiling","p0577"],
["Если завтра будет дождь, я останусь дома.","If it rains tomorrow, I will stay at home.|If it rains tomorrow, I will stay home.|If it rains tomorrow, I will stay in.","rains","will rain|rained","p0578"],
["Если ты не поторопишься, ты опоздаешь.","If you do not hurry, you will be late.|If you do not hurry up, you will be late.","will be","are|be","p0579"],
["Я напишу тебе, когда доберусь домой.","I will text you when I get home.|I will message you when I get home.","when I get home","when I will get home|when I got home","p0580"],
["Если он придёт, скажи мне.","If he comes, tell me.|Tell me if he comes.|If he comes, let me know.","comes","will come|come","p0581"],
["Мы пойдём гулять, если погода будет хорошей.","We will go for a walk if the weather is good.|We will go for a walk if the weather is nice.|We will go for a walk if the weather is fine.","is good","will be good|would be good","p0582"],
["Если хочешь, я помогу.","If you want, I will help you.|If you want, I will help.|I will help you if you want.","want","will want|wants","p0583"],
["Что ты будешь делать, если не найдёшь работу?","What will you do if you do not find a job?|What will you do if you cannot find a job?","do not find","will not find|did not find","p0584"],
["Не уходи, пока я не вернусь.","Do not leave until I come back.|Do not leave until I return.|Do not go until I come back.|Do not go until I return.","until I come back","until I will come back|until I came back","p0585"],
["Как только я получу деньги, я заплачу тебе.","As soon as I get the money, I will pay you.|As soon as I receive the money, I will pay you.|When I get the money, I will pay you.","get","will get|got","p0586"],
["Если ты не выучишь слова, ты забудешь их.","If you do not learn the words, you will forget them.","will forget","forget|would forget","p0587"],
["Если она спросит, я отвечу.","If she asks, I will answer.|If she asks me, I will answer.","asks","will ask|asked","p0588"],
["Лёд тает, если его нагреть.","Ice melts if you heat it.|Ice melts when you heat it.|If you heat ice, it melts.","melts","will melt|melting","p0589"],
["Если мы выйдем сейчас, мы успеем.","If we leave now, we will make it.|If we leave now, we will be on time.|If we go now, we will make it.|If we go now, we will be on time.|If we go now, we will be in time.","leave","will leave|left","p0590"],
["Если у тебя будет время, зайди ко мне.","If you have time, come and see me.|If you have time, come to see me.|If you have time, visit me.|If you have time, drop in.","have","will have|had","p0591"],
["Я не пойду, если ты не пойдёшь.","I will not go if you do not go.|I will not go if you are not going.|I will not go unless you go.","do not go","will not go|did not go","p0592"]
].map(I)),

U("u21","Инфинитив или -ing после глагола","B1",[
 "После одних глаголов идёт <b>to + глагол</b>: want, decide, hope, plan, refuse, try, forget: I want <b>to learn</b>, we decided <b>to stay</b>.",
 "После других — форма <b>-ing</b>: enjoy, finish, mind, avoid, suggest, stop: I enjoy <b>cooking</b>, she finished <b>writing</b>.",
 "like / love / hate допускают оба варианта: I like <b>reading</b> = I like <b>to read</b>.",
 "Цель — всегда to: I came <b>to help</b> you (а не «for help»). После предлога — -ing: good at <b>swimming</b>, thinking <b>about</b> it."
],[["I enjoy cooking.","Мне нравится готовить."],["We decided to stay.","Мы решили остаться."]],
"В русском после любого глагола — инфинитив («хочу изучать», «перестал курить»). В английском за глаголом закреплена своя форма — её нужно выучить вместе с глаголом.",
[
["Я люблю читать.","I like reading.|I like to read.|I love reading.|I love to read.","reading","read|to reading","p0593"],
["Я хочу изучать английский.","I want to learn English.|I want to study English.","to learn","learn|learning","p0594"],
["Она закончила писать письмо.","She finished writing the letter.","writing","to write|write","p0595"],
["Мы решили остаться.","We decided to stay.","to stay","staying|stay","p0596"],
["Он любит плавать.","He likes swimming.|He likes to swim.|He loves swimming.|He loves to swim.","swimming","swim|to swimming","p0597"],
["Я надеюсь скоро тебя увидеть.","I hope to see you soon.","to see","seeing|see","p0598"],
["Ты не против подождать?","Do you mind waiting?","waiting","to wait|wait","p0599"],
["Она отказалась помочь.","She refused to help.","to help","helping|help","p0600"],
["Я не могу перестать думать об этом.","I cannot stop thinking about it.","thinking","to think|think","p0601"],
["Он забыл закрыть дверь.","He forgot to close the door.|He forgot to shut the door.","to close","closing|close","p0602"],
["Я пришёл, чтобы помочь тебе.","I came to help you.|I came here to help you.|I have come to help you.","to help","for help|for helping","p0603"],
["Мне нравится готовить.","I enjoy cooking.|I like cooking.|I like to cook.","cooking","to cooking|cook","p0604"],
["Она предложила пойти в кино.","She suggested going to the cinema.|She suggested going to the movies.","going","to go|go","p0605"],
["Я пытаюсь понять.","I am trying to understand.|I try to understand.","to understand","understanding|understand","p0606"],
["Не забудь позвонить мне.","Do not forget to call me.|Remember to call me.|Do not forget to phone me.","to call","calling|call","p0607"],
["Он избегает говорить об этом.","He avoids talking about it.|He avoids talking about that.","talking","to talk|talk","p0608"]
].map(I)),

U("u22","Past Continuous: «был в процессе»","B1",[
 "Past Continuous (<b>was / were + -ing</b>) — действие шло в какой-то момент прошлого: I <b>was watching</b> TV at eight.",
 "Часто на его фоне что-то произошло (Past Simple): I <b>was watching</b> TV when he <b>called</b>. Длинное действие — Continuous, короткое событие — Simple.",
 "Два длящихся действия одновременно: While I <b>was cooking</b>, she <b>was reading</b>. Слова-подсказки: while, when, at 8 o’clock yesterday.",
 "Глаголы состояния здесь тоже не любят Continuous: I <b>knew</b> the answer, а не I was knowing."
],[["I was watching TV when he called.","Я смотрел телевизор, когда он позвонил."],["What were you doing at eight?","Что ты делал в восемь?"]],
"Русский глагол «смотрел» не показывает, шло ли действие в момент события. Английский показывает: was watching — «был в процессе», watched — «посмотрел и закончил».",
[
["Я смотрел телевизор, когда он позвонил.","I was watching TV when he called.|I was watching TV when he phoned.","was watching","watched|were watching","p0625"],
["Что ты делал вчера в восемь?","What were you doing at eight yesterday?|What were you doing yesterday at eight?","were you doing","did you do|was you doing","p0626"],
["Шёл дождь, когда мы вышли.","It was raining when we went out.|It was raining when we left.|It was raining when we came out.","was raining","rained|were raining","p0627"],
["Они ужинали, когда я пришёл.","They were having dinner when I came.|They were having dinner when I arrived.|They were eating dinner when I came.|They were eating dinner when I arrived.","were having","had|was having","p0628"],
["Она не спала.","She was not sleeping.|She was not asleep.","was not sleeping","did not sleep|were not sleeping","p0629"],
["Пока я готовил, она читала.","While I was cooking, she was reading.|While I cooked, she was reading.","was reading","read|were reading","p0630"],
["Я упал, когда бежал.","I fell when I was running.|I fell while I was running.","was running","ran|were running","p0631"],
["Мы разговаривали, когда погас свет.","We were talking when the lights went out.|We were talking when the light went out.|We were talking when the power went out.","were talking","talked|was talking","p0632"],
["Он ехал слишком быстро.","He was driving too fast.|He was driving too quickly.","was driving","drove|were driving","p0633"],
["Дети играли, пока мама готовила.","The children were playing while Mum was cooking.|The kids were playing while Mum was cooking.|The children were playing while their mother was cooking.","were playing","played|was playing","p0634"],
["Ты спал, когда я звонил?","Were you sleeping when I called?|Were you asleep when I called?|Were you sleeping when I phoned?","Were you sleeping","Did you sleep|Was you sleeping","p0635"],
["Весь день шёл снег.","It was snowing all day.|It was snowing all day long.","was snowing","snowed|were snowing","p0636"],
["Я не слушал, что он говорил.","I was not listening to what he was saying.|I was not listening to what he said.","was not listening","did not listen|were not listening","p0637"],
["Что она делала, когда ты вошёл?","What was she doing when you came in?|What was she doing when you walked in?|What was she doing when you entered?","was she doing","did she do|she was doing","p0638"],
["Когда я проснулся, светило солнце.","When I woke up, the sun was shining.","was shining","shone|were shining","p0639"],
["Я думал о тебе.","I was thinking about you.|I was thinking of you.","was thinking","thought|were thinking","p0640"]
].map(I)),

U("u23","Пассив: что сделали с предметом","B1",[
 "Страдательный залог (<b>be + третья форма</b>) нужен, когда важно, что произошло с предметом, а кто сделал — неважно или неизвестно: The house <b>was built</b> in 1900.",
 "Настоящее: <b>is / are + V3</b> (English <b>is spoken</b>); прошедшее: <b>was / were + V3</b>; будущее: <b>will be + V3</b>; перфект: <b>has / have been + V3</b>.",
 "Исполнитель, если нужен, вводится через <b>by</b>: The book was written <b>by</b> a famous author.",
 "Русское «говорят, делают» без подлежащего — типичный пассив: «Здесь делают сыр» → Cheese <b>is made</b> here."
],[["English is spoken in many countries.","На английском говорят во многих странах."],["The letter has been sent.","Письмо отправлено."]],
"Русские безличные «построили, сделали, украли» не переводятся активом с they: чаще это пассив (was built, was made, was stolen).",
[
["Этот дом построили в 1900 году.","This house was built in 1900.","was built","built|is built","p0641"],
["Английский говорят во многих странах.","English is spoken in many countries.","is spoken","speaks|are spoken","p0642"],
["Вчера окно разбили.","The window was broken yesterday.","was broken","were broken|broke","p0643"],
["Здесь делают хороший сыр.","Good cheese is made here.|Good cheese is produced here.","is made","makes|are made","p0644"],
["Письмо уже отправлено.","The letter has already been sent.|The letter has been sent already.|The letter has been sent.","been sent","be sent|sent","p0645"],
["Меня пригласили на вечеринку.","I was invited to the party.|I was invited to a party.","was invited","invited|am invited","p0646"],
["Эти машины производят в Японии.","These cars are made in Japan.|These cars are produced in Japan.|These cars are manufactured in Japan.","are made","is made|make","p0647"],
["Музей посещают тысячи людей каждый год.","The museum is visited by thousands of people every year.|The museum is visited by thousands of people a year.","is visited","visits|are visited","p0648"],
["Когда был изобретён телефон?","When was the telephone invented?|When was the phone invented?","was","did|is","p0649"],
["Работа будет закончена завтра.","The work will be finished tomorrow.|The work will be done tomorrow.","will be finished","will finished|will be finish","p0650"],
["Книгу написал известный автор.","The book was written by a famous author.","was written","wrote|is written","p0651"],
["Нас не предупредили.","We were not warned.|We were not told.","were not warned","did not warn|are not warned","p0652"],
["Дверь заперта.","The door is locked.","is locked","locks|is lock","p0653"],
["Мои ключи украли.","My keys were stolen.|My keys have been stolen.","were stolen","stole|was stolen","p0654"],
["Где был сделан этот снимок?","Where was this photo taken?|Where was this picture taken?","was","did|were","p0655"],
["Её выбрали президентом.","She was elected president.|She was elected as president.|She was chosen president.","was elected","elected|has elect","p0656"]
].map(I)),

U("u24","Нереальное: would, wish и who / which / that","B1",[
 "<b>Второе условное</b> — нереальное или маловероятное настоящее: If I <b>had</b> more time, I <b>would read</b> more. После if — Past Simple, в главной части — would + глагол. С I / he / she допустимо и <b>If I were you</b>.",
 "<b>I wish + Past Simple</b> — сожаление о настоящем: I wish I <b>had</b> a car (жаль, что у меня нет машины).",
 "<b>Относительные слова</b>: <b>who</b> — о людях (the man <b>who</b> lives next door), <b>which</b> — о предметах (a book <b>which</b> …), <b>that</b> — и о тех, и о других; <b>whose</b> — чей; <b>where</b> — где.",
 "<b>what</b> = «то, что»: This is exactly <b>what</b> I need."
],[["If I had more time, I would read more.","Если бы у меня было больше времени, я бы читал больше."],["The man who lives next door is a doctor.","Человек, который живёт рядом, врач."]],
"«Бы» в русском — одна частица. В английском её роль выполняют: would в главной части и Past Simple в части с if. Не ставьте would после if.",
[
["Если бы у меня было больше времени, я бы читал больше.","If I had more time, I would read more.","would read","will read|read","p0673"],
["На твоём месте я бы согласился.","If I were you, I would agree.|If I was you, I would agree.|If I were you, I would accept.","were","am|will be","p0674"],
["Что бы ты сделал, если бы выиграл миллион?","What would you do if you won a million?|What would you do if you won a million dollars?|What would you do if you won a million pounds?","won","win|would win","p0675"],
["Человек, который живёт рядом, врач.","The man who lives next door is a doctor.|The man that lives next door is a doctor.","who","which|whose","p0676"],
["Книга, которую я читаю, интересная.","The book that I am reading is interesting.|The book which I am reading is interesting.|The book I am reading is interesting.","that","who|what","p0677"],
["Это девушка, у которой пропала сумка.","This is the girl whose bag is missing.|This is the girl whose bag was lost.|This is the girl whose bag has disappeared.","whose","who's|which","p0678"],
["Если бы я знал, я бы сказал тебе.","If I knew, I would tell you.","knew","know|would know","p0679"],
["Жаль, что я не живу у моря.","I wish I lived by the sea.|I wish I lived near the sea.|I wish I lived on the coast.","lived","live|would live","p0680"],
["Жаль, что у меня нет машины.","I wish I had a car.","had","have|would have","p0681"],
["Дом, в котором мы живём, старый.","The house where we live is old.|The house in which we live is old.|The house that we live in is old.|The house we live in is old.","where","which|who","p0682"],
["Она работает в компании, которая производит игрушки.","She works for a company that makes toys.|She works for a company which makes toys.|She works at a company that makes toys.|She works at a company which makes toys.","that makes","who makes|which make","p0683"],
["Если бы у меня была машина, я бы ездил на ней на работу.","If I had a car, I would drive to work.|If I had a car, I would go to work by car.","had","have|would have","p0684"],
["Я не знаю, кто это.","I do not know who this is.|I do not know who it is.|I do not know who that is.","who","what|which","p0685"],
["Я бы помог, если бы мог.","I would help if I could.|I would help you if I could.","could","can|would","p0686"],
["Это именно то, что мне нужно.","This is exactly what I need.|It is exactly what I need.|That is exactly what I need.","what","that|which","p0687"],
["Мне нравится город, в котором я родился.","I like the city where I was born.|I like the city in which I was born.|I like the town where I was born.","where I was born","which I was born|who I was born","p0688"]
].map(I))

];
})();
