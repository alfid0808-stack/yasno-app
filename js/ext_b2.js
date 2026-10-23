/* Расширение курса, уровень B2: 16 тем по 16 фраз. Не вычитано носителем языка: только автоматический QA. */
(function(){
const X = (id, title, level, rule, trap, items) => ({ id, title, level, rule, trap, draft: true,
  examples: items.slice(0, 2).map(a => [a[1].split("|")[0], a[0]]),
  items: items.map(a => ({ ru: a[0], en: a[1].split("|"), key: a[2], opts: a[3].split("|"), pid: a[4] })) });
window.EXTRA = window.EXTRA || {};
const add = u => { window.EXTRA[u.id] = u; };

add(X("x27","Аргументация: за и против","B2",[
 "Структура: <b>On the one hand… On the other hand…</b>, <b>Firstly… In addition…</b>, <b>The main advantage / drawback is…</b>",
 "Вывод: <b>The pros outweigh the cons</b>, <b>On the whole</b>, <b>It all depends</b>.",
 "Позиция: <b>I'm in favour of</b> / <b>I'm against</b>. «Имеет смысл» — <b>makes sense</b> (не has sense)."
],"«Имеет смысл» — It makes sense (а не It has sense). «Во-первых» — Firstly / First of all (а не At first: это «поначалу»).",[
["С одной стороны, это дёшево.","On the one hand, it's cheap.|On one hand, it is cheap.","On the one hand","In the one hand|At one hand","p1537"],
["С другой стороны, это ненадёжно.","On the other hand, it's unreliable.","On the other hand","On another hand|In the other hand","p1538"],
["Главное преимущество — цена.","The main advantage is the price.","advantage","advantages|advance","p1539"],
["Существенный недостаток — шум.","A major drawback is the noise.|A significant disadvantage is the noise.|The main drawback is the noise.","drawback","draw back|withdraw","p1540"],
["Плюсы перевешивают минусы.","The pros outweigh the cons.|The advantages outweigh the disadvantages.","outweigh","overweigh|outweight","p1541"],
["Есть аргументы за и против.","There are arguments for and against.|There are arguments for and against it.","for and against","for or against|pro and against","p1542"],
["С этим трудно спорить.","It's hard to argue with that.|It is difficult to argue with that.","argue with","argue against with|argue to","p1543"],
["Однако есть риски.","However, there are risks.|Nevertheless, there are risks.","However","Whatever|Moreover","p1544"],
["Во-первых, это безопасно.","Firstly, it's safe.|First of all, it is safe.|First, it's safe.","Firstly","Firsty|At first","p1545"],
["Кроме того, это быстро.","In addition, it's fast.|Besides, it is quick.|What's more, it's fast.","In addition","In addition to|By addition","p1546"],
["Это имеет смысл.","That makes sense.|It makes sense.","makes sense","has sense|does sense","p1547"],
["Оно того не стоит.","It's not worth it.","worth it","worth|worthy it","p1548"],
["Всё зависит от обстоятельств.","It all depends on the circumstances.|It all depends.","It all depends","It all depend|All it depends","p1549"],
["Стоит отметить, что цены снизились.","It's worth noting that prices have fallen.|It is worth mentioning that prices have fallen.","worth noting","worth to note|worthy noting","p1550"],
["В целом я за.","On the whole, I'm in favour.|On the whole, I'm in favor.|Overall, I am for it.","in favour","in favourite|for favour","p1551"],
["Я против этой идеи.","I'm against this idea.|I am opposed to this idea.|I'm against the idea.","against","contra|versus","p1552"]
]));

add(X("x28","Гипотезы и предположения","B2",[
 "Предположения разной уверенности: <b>I suppose</b>, <b>presumably</b>, <b>chances are</b>, <b>I bet</b>, <b>I suspect</b>, <b>I doubt</b>.",
 "Безличные: <b>It's possible that…</b>, <b>It may turn out to be…</b>, <b>The cause is believed to be…</b>",
 "<b>Let's say…</b> — «допустим». <b>I have a feeling…</b> — «мне кажется (интуиция)»."
],"«Я сомневаюсь, что…» — I doubt (that)… без in. «Мне кажется» — I have a feeling / It seems to me, а не It seems me.",[
["Полагаю, ты прав.","I suppose you're right.|I guess you're right.","suppose","supposed|supposing","p1553"],
["Видимо, он забыл.","Presumably, he forgot.|He presumably forgot.|He must have forgotten.","Presumably","Presume|Presumable","p1554"],
["Возможно, поезд задержится.","It's possible that the train will be delayed.|The train may be delayed.|The train might be delayed.","possible","possibly|possibility","p1555"],
["Скорее всего, она дома.","Chances are she's at home.|She's most likely at home.|She is probably at home.","Chances are","Chance is|Chances is","p1556"],
["Допустим, мы опоздаем. Что тогда?","Let's say we're late. What then?|Let's say we are late. What happens then?","Let's say","Let's tell|Let say","p1557"],
["Я подозреваю, что он лжёт.","I suspect he's lying.|I suspect that he is lying.","suspect","suspicion|suspects","p1558"],
["У меня такое чувство, что что-то не так.","I have a feeling something is wrong.|I feel something's wrong.","have a feeling","have feeling|have a feel","p1559"],
["Это наводит на мысль, что он знал.","This suggests that he knew.|This implies that he knew.","suggests","suggests to|suggesting","p1560"],
["Не удивлюсь, если он откажется.","I wouldn't be surprised if he refused.|It wouldn't surprise me if he refused.","wouldn't be surprised","wouldn't surprised|didn't be surprised","p1561"],
["Должно быть, это какое-то недоразумение.","There must be some misunderstanding.|It must be a misunderstanding.","misunderstanding","misunderstand|misunderstood","p1562"],
["Спорим, он опоздает.","I bet he'll be late.","I bet","I bets|I'm bet","p1563"],
["Может оказаться, что это правда.","It may turn out to be true.|It might turn out to be true.|It may turn out that it is true.","turn out","turn up|turn off","p1564"],
["Я сомневаюсь, что это сработает.","I doubt it will work.|I doubt that it will work.|I doubt whether it will work.","doubt","doubt in|doubting","p1565"],
["Похоже, они поссорились.","It looks like they've had an argument.|It seems they've had a fight.|Apparently, they had an argument.","looks like","looks as|looks likes","p1566"],
["Предположительно, причина в погоде.","The cause is believed to be the weather.|The weather is thought to be the cause.","believed to be","believed being|believe to be","p1567"],
["Может быть, ты ошибаешься.","Maybe you're wrong.|Perhaps you are mistaken.|You may be wrong.","Maybe","May be|Might","p1568"]
]));

add(X("x29","Безличные конструкции","B2",[
 "<b>There seems to have been…</b>, <b>It's worth + -ing</b>, <b>There's no point (in) + -ing</b>, <b>It's no use + -ing</b>.",
 "Пассив с безличным смыслом: <b>are expected to</b>, <b>is said to be</b>, <b>is thought to be</b>, <b>are reported to</b>.",
 "Устойчивые: <b>It goes without saying</b>, <b>There's no denying</b>, <b>It turned out that…</b>, <b>It must be said that…</b>"
],"«Стоит попробовать» — It's worth trying (а не worth to try). «Нет смысла спорить» — There's no point arguing (а не no sense to argue).",[
["Кажется, произошла ошибка.","There seems to have been a mistake.|There appears to have been a mistake.|It seems there has been a mistake.","seems to have been","seems to be been|seem to have been","p1569"],
["Стоит попробовать.","It's worth trying.|It is worth a try.","worth trying","worth to try|worthy trying","p1570"],
["Нет смысла спорить.","There's no point arguing.|There is no point in arguing.","no point","not point|no points","p1571"],
["Ожидается, что цены вырастут.","Prices are expected to rise.|It is expected that prices will rise.","are expected to","are expecting to|expect to","p1572"],
["Говорят, этот ресторан лучший.","This restaurant is said to be the best.|They say this restaurant is the best.|It's said that this restaurant is the best.","is said to be","says to be|is saying to be","p1573"],
["Сообщается, что пострадавших нет.","There are reported to be no casualties.|It is reported that there are no casualties.|No casualties have been reported.","reported","reporting|report","p1574"],
["Нельзя отрицать, что он талантлив.","There's no denying that he is talented.|It cannot be denied that he is talented.","no denying","no deny|not denying","p1575"],
["Надо сказать, результат хороший.","It must be said that the result is good.|It has to be said that the result is good.","must be said","must say|must be say","p1576"],
["Не стоит беспокоиться.","There's no need to worry.|You needn't worry.","no need","not need|no needs","p1577"],
["Похоже, собирается дождь.","It looks like it's going to rain.|It looks as if it's going to rain.","going to rain","going to raining|go to rain","p1578"],
["Считается, что эта картина — подделка.","This painting is thought to be a fake.|This painting is believed to be a fake.|It is thought that this painting is a fake.","is thought to be","is thinking to be|thinks to be","p1579"],
["Остаётся только ждать.","It only remains to wait.|All we can do is wait.","remains","remain|remaining","p1580"],
["Трудно сказать, кто прав.","It's hard to say who is right.|It is difficult to say who's right.","hard to say","hard say|hard for say","p1581"],
["Само собой разумеется, мы поможем.","It goes without saying that we will help.|Needless to say, we'll help.","goes without saying","goes without say|goes without to say","p1582"],
["Бесполезно ему звонить.","It's no use calling him.|There's no point calling him.","no use","not use|no using","p1583"],
["Оказалось, что он прав.","It turned out that he was right.|He turned out to be right.|It turned out he was right.","turned out","turned up|turns out","p1584"]
]));

add(X("x30","Связность текста","B2",[
 "Следствие: <b>As a result</b>, <b>Therefore</b>, <b>Thus</b>. Добавление: <b>Furthermore</b>, <b>Moreover</b>, <b>Above all</b>.",
 "Контраст и уступка: <b>Unlike</b>, <b>Even though</b>, <b>Instead</b>, <b>At the same time</b>. Пример и уточнение: <b>For example</b>, <b>In particular</b>.",
 "Структура: <b>In conclusion</b>, <b>As for me</b>, <b>By the way</b>, <b>In doing so</b>."
],"«В отличие от» — unlike (а не not like). «Вместо этого» — instead (в конце или начале), а «вместо чего-то» — instead of + существительное.",[
["В результате компания обанкротилась.","As a result, the company went bankrupt.|Consequently, the company went bankrupt.","As a result","As result|In a result","p1585"],
["В отличие от брата, он спокоен.","Unlike his brother, he is calm.|In contrast to his brother, he's calm.","Unlike","Dislike|Not like","p1586"],
["Более того, это незаконно.","Furthermore, it's illegal.|Moreover, it is illegal.|What's more, it's illegal.","Furthermore","Further|Farther more","p1587"],
["Точно так же ведут себя кошки.","Likewise, cats behave in the same way.|Similarly, cats behave in the same way.","Likewise","Alike|Likely","p1588"],
["Например, можно ездить на велосипеде.","For example, you could cycle.|For instance, you can ride a bike.","For example","For examples|By example","p1589"],
["В заключение: план работает.","In conclusion, the plan works.|To conclude, the plan works.|To sum up, the plan works.","In conclusion","In conclusions|At conclusion","p1590"],
["В частности, это касается детей.","In particular, this applies to children.|Particularly, this concerns children.","In particular","In particularly|On particular","p1591"],
["Поэтому мы решили остаться.","Therefore, we decided to stay.|That's why we decided to stay.|So we decided to stay.","Therefore","Therefor|Thereby","p1592"],
["Хотя было поздно, он продолжал работать.","Even though it was late, he kept working.|Although it was late, he kept working.","Even though","Even if|Despite","p1593"],
["Вместо этого мы пошли в кино.","Instead, we went to the cinema.|We went to the cinema instead.","Instead","Instead of|Inside","p1594"],
["Тем самым он спас проект.","In doing so, he saved the project.|By doing this, he saved the project.","In doing so","In doing this so|In do so","p1595"],
["Прежде всего, нужно отдохнуть.","Above all, you need to rest.|First and foremost, you need to rest.","Above all","Above everything|Over all","p1596"],
["Что касается меня, я согласен.","As for me, I agree.","As for me","As to me|As for I","p1597"],
["Кстати, ты видел Анну?","By the way, have you seen Anna?|Incidentally, have you seen Anna?","By the way","On the way|By way","p1598"],
["Таким образом, задача решена.","Thus, the problem is solved.|In this way, the problem has been solved.|So the problem is solved.","Thus","This|Thus way","p1599"],
["В то же время нужно быть осторожным.","At the same time, you need to be careful.|At the same time, we have to be careful.","At the same time","In the same time|On the same time","p1600"]
]));

add(X("x31","Коллокации B2","B2",[
 "<b>make</b> progress, <b>take</b> advantage of, <b>pay</b> a visit / a compliment, <b>catch</b> a cold, <b>keep</b> one's word, <b>lose</b> patience, <b>commit</b> a crime.",
 "<b>have</b> a great time, <b>take</b> part in, <b>tell</b> lies, <b>low</b> prices, <b>strong</b> wind.",
 "Глагол в коллокации не переводится с русского: «сделать комплимент» — pay (а не make) a compliment."
],"«Провести время» — have a good time (а не spend a good time). «Низкие цены» — low prices (а не cheap prices).",[
["Он делает успехи.","He is making progress.|He's making good progress.","making progress","doing progress|making a progress","p1601"],
["Воспользуйся скидкой.","Take advantage of the discount.","Take advantage of","Take advantages of|Make advantage of","p1602"],
["Мы навестили бабушку.","We paid a visit to our grandmother.|We visited our grandmother.|We paid our grandmother a visit.","paid a visit","made a visit|did a visit","p1603"],
["Я подхватил простуду.","I caught a cold.|I've caught a cold.","caught a cold","took a cold|got cold","p1604"],
["Он сдержал слово.","He kept his word.|He kept his promise.","kept his word","held his word|saved his word","p1605"],
["Не теряй терпения.","Don't lose patience.|Don't lose your patience.","lose patience","loose patience|lose the patient","p1606"],
["Она приняла решение.","She made a decision.|She made up her mind.","made a decision","did a decision|took decision","p1607"],
["Обращай внимание на детали.","Pay attention to details.|Pay attention to the details.","to details","on details|for details","p1608"],
["Он сделал мне комплимент.","He paid me a compliment.|He gave me a compliment.","paid me a compliment","made me a compliment|did me a compliment","p1609"],
["Можно задать вопрос?","Can I ask a question?","ask a question","give a question|make a question","p1610"],
["Он совершил преступление.","He committed a crime.","committed","made|did","p1611"],
["Мы отлично провели время.","We had a great time.|We had a good time.","had a great time","spent a great time|passed a great time","p1612"],
["Я участвовал в соревновании.","I took part in the competition.|I participated in the competition.","took part in","took part on|took a part in","p1613"],
["Не говори неправду.","Don't tell lies.|Don't lie.","tell lies","say lies|speak lies","p1614"],
["Здесь очень низкие цены.","The prices are very low here.|Prices here are very low.","low","cheap|small","p1615"],
["Сегодня сильный ветер.","There's a strong wind today.|It's very windy today.","strong wind","big wind|heavy wind","p1616"]
]));

add(X("x32","Идиомы B2","B2",[
 "Самочувствие и настроение: <b>under the weather</b>, <b>fit as a fiddle</b>, <b>chin up</b>.",
 "Общение: <b>break the ice</b>, <b>keep me in the loop</b>, <b>pull my leg</b>, <b>put my foot in it</b>, <b>speak of the devil</b>.",
 "Оценки: <b>cost an arm and a leg</b>, <b>the last straw</b>, <b>when pigs fly</b>, <b>better late than never</b>."
],"«Последняя капля» — the last straw (соломинка), а не the last drop. Идиомы переводятся образом, а не словами.",[
["Мне нездоровится.","I'm feeling under the weather.|I feel under the weather.","under the weather","under the rain|below the weather","p1617"],
["Это стоит бешеных денег.","It costs an arm and a leg.","an arm and a leg","a hand and a leg|an arm and a foot","p1618"],
["Он здоров как бык.","He's as fit as a fiddle.","fit as a fiddle","fit as a horse|fat as a fiddle","p1619"],
["Давай растопим лёд.","Let's break the ice.","break the ice","break the glass|crack the ice","p1620"],
["Держи меня в курсе.","Keep me in the loop.|Keep me posted.|Keep me informed.","in the loop","in the circle|on the loop","p1621"],
["Это не моё дело.","It's none of my business.","none of my business","not of my business|no my business","p1622"],
["Не вешай нос!","Keep your chin up.|Chin up!","chin up","nose up|chin high","p1623"],
["Я сел в лужу.","I really put my foot in it.|I put my foot in my mouth.","put my foot in it","put my leg in it|put my foot on it","p1624"],
["Учиться никогда не поздно.","It's never too late to learn.","never too late","never so late|never late","p1625"],
["Время летит.","Time flies.","flies","runs|goes","p1626"],
["Лёгок на помине!","Speak of the devil!","Speak of the devil","Speak about the devil|Speak of the demon","p1627"],
["Ты меня разыгрываешь.","You're pulling my leg.","pulling my leg","pulling my hand|pulling my head","p1628"],
["Когда рак на горе свистнет.","When pigs fly.","pigs fly","cows fly|fish fly","p1629"],
["Лучше поздно, чем никогда.","Better late than never.","late than never","later than never|late then never","p1630"],
["Это последняя капля.","That's the last straw.|That's the final straw.","last straw","last drop|last stick","p1631"],
["Не суди о книге по обложке.","Don't judge a book by its cover.","by its cover","by it's cover|on its cover","p1632"]
]));

add(X("x33","Деловые переговоры","B2",[
 "Предложения: <b>make an offer</b>, <b>final offer</b>, <b>counteroffer</b>, <b>The price is negotiable</b>, <b>volume discount</b>.",
 "Компромисс: <b>reach a compromise</b>, <b>meet you halfway</b>, <b>agree to the terms</b>, <b>put it in writing</b>.",
 "Условия: <b>payment terms</b>, <b>delivery terms</b>, <b>long-term cooperation</b>. «Договорились!» — <b>It's a deal!</b>"
],"«Согласиться на условия» — agree to the terms (с to), «согласиться с человеком» — agree with someone.",[
["Мы готовы сделать предложение.","We are ready to make an offer.","make an offer","do an offer|give an offer","p1633"],
["Это наше окончательное предложение.","This is our final offer.|That's our final offer.","final offer","finally offer|final offering","p1634"],
["Давайте найдём компромисс.","Let's reach a compromise.|Let's find a compromise.","reach a compromise","reach compromise|arrive a compromise","p1635"],
["Мы не можем согласиться на эти условия.","We cannot agree to these terms.|We can't accept these terms.","agree to","agree these|agree at","p1636"],
["Цена обсуждается.","The price is negotiable.","negotiable","negotiating|negotiate","p1637"],
["Можно получить скидку за объём?","Can we get a volume discount?|Could we get a discount for bulk orders?","volume discount","volume sale|size discount","p1638"],
["Я хотел бы сделать встречное предложение.","I'd like to make a counteroffer.|I would like to make a counter-offer.","counteroffer","contra offer|counter offering","p1639"],
["Давайте закрепим это письменно.","Let's put it in writing.|Let's put this in the contract.","put it in writing","put it in writings|put it on writing","p1640"],
["Срок оплаты — 30 дней.","The payment terms are 30 days.|Payment terms are thirty days.","payment terms","pay terms|payment term","p1641"],
["Это для нас неприемлемо.","That's unacceptable for us.|That is unacceptable to us.","unacceptable","inacceptable|non-acceptable","p1642"],
["Мы готовы пойти вам навстречу.","We are willing to meet you halfway.","meet you halfway","meet you half|go you halfway","p1643"],
["Давайте подведём итоги того, о чём договорились.","Let's sum up what we've agreed.|Let's recap what we have agreed.","sum up","sum off|summary up","p1644"],
["Договорились!","It's a deal!|Deal!","deal","dial|deals","p1645"],
["Нам нужно время, чтобы всё обдумать.","We need more time to think it over.|We need more time to consider it.","think it over","think it on|think it up","p1646"],
["Мы ценим долгосрочное сотрудничество.","We value long-term cooperation.|We value a long-term partnership.","long-term","long-time|longer-term","p1647"],
["Каковы условия доставки?","What are the delivery terms?|What are the terms of delivery?","delivery terms","deliver terms|delivery termes","p1648"]
]));

add(X("x34","Медиа и общество","B2",[
 "Медиа: <b>fake news</b>, <b>coverage</b>, <b>biased</b>, <b>make the headlines</b>, <b>clickbait</b>, <b>trending</b>, <b>censorship</b>, <b>freedom of the press</b>.",
 "Общество: <b>public opinion</b>, <b>public outcry</b>, <b>survey / poll</b>, <b>misinformation</b>.",
 "News — неисчисляемое и в единственном числе: the news <b>is</b> bad."
],"«Влиять на» — influence / affect без предлога (influences our choices), а не influences on.",[
["Это фейковая новость.","This is fake news.|It's fake news.","fake news","false new|fake new","p1649"],
["СМИ широко освещали событие.","The media covered the event widely.|The event received wide media coverage.","covered","covering|discovered","p1650"],
["Статья предвзятая.","The article is biased.|The article is one-sided.","biased","bias|biassing","p1651"],
["Новость попала в заголовки.","The news made the headlines.|The story hit the headlines.","made the headlines","did the headlines|made the titles","p1652"],
["Общественное мнение разделилось.","Public opinion is divided.|Public opinion was split.","Public opinion","Publicity opinion|Social opinion","p1653"],
["Источники сообщают о забастовке.","Sources report a strike.|Sources are reporting a strike.","Sources","Resources|Source","p1654"],
["Это вызвало общественное возмущение.","It caused a public outcry.|It sparked a public outcry.","outcry","outcome|cry out","p1655"],
["Цензура — серьёзная проблема.","Censorship is a serious problem.|Censorship is a serious issue.","Censorship","Censure|Censoring","p1656"],
["Не доверяй заголовкам-приманкам.","Don't trust clickbait headlines.|Don't trust click bait headlines.","clickbait","clickbite|click-back","p1657"],
["Свобода прессы важна.","Freedom of the press is important.|Press freedom is important.","Freedom of the press","Freedom from the press|Free of the press","p1658"],
["Эта тема сейчас в тренде.","This topic is trending.|This subject is trending.","trending","trendy|trended","p1659"],
["Нужно проверять факты.","You need to check the facts.|We need to fact-check.|Facts need to be checked.","check the facts","control the facts|check facts the","p1660"],
["Опрос показал, что большинство против.","The survey showed that most people are against it.|The poll showed that the majority are against it.","survey","surface|surveil","p1661"],
["Реклама влияет на наш выбор.","Advertising influences our choices.|Advertising affects our choices.","influences","influences on|influence on","p1662"],
["Он стал интернет-знаменитостью.","He became an internet celebrity.|He became famous online.","celebrity","celebration|celebrate","p1663"],
["Распространение дезинформации опасно.","Spreading misinformation is dangerous.|The spread of misinformation is dangerous.|Spreading disinformation is dangerous.","misinformation","misinformations|bad information","p1664"]
]));

add(X("x35","-ing или инфинитив: смена смысла","B2",[
 "<b>stop + -ing</b> — перестать; <b>stop + to</b> — остановиться, чтобы. <b>remember / forget + to</b> — не забыть сделать; <b>+ -ing</b> — помнить, что делал.",
 "<b>try + -ing</b> — попробовать (как вариант); <b>try + to</b> — постараться. <b>regret + -ing</b> — жалеть о сделанном; <b>regret to inform</b> — с сожалением сообщить.",
 "<b>go on + -ing</b> — продолжать то же; <b>go on + to</b> — перейти к другому. <b>suggest + -ing</b>, <b>offer + to</b>, <b>want sb to do</b>."
],"«Он предложил пойти» — He suggested going (а не suggested to go). «Я хочу, чтобы ты пришёл» — I want you to come (а не want that you come).",[
["Он перестал курить.","He stopped smoking.","stopped smoking","stopped to smoke|stop smoking","p1665"],
["Он остановился, чтобы закурить.","He stopped to smoke.|He stopped to have a cigarette.","stopped to smoke","stopped smoking|stopped for smoke","p1666"],
["Не забудь закрыть окно.","Remember to close the window.|Don't forget to close the window.","Remember to close","Remember closing|Remember close","p1667"],
["Я помню, как закрывал окно.","I remember closing the window.","remember closing","remember to close|remember close","p1668"],
["Попробуй перезагрузить компьютер.","Try restarting the computer.|Try rebooting the computer.|Try to restart the computer.","Try restarting","Try restart|Try to restarting","p1669"],
["Я пытался открыть дверь, но не смог.","I tried to open the door, but I couldn't.|I tried to open the door but couldn't.","tried to open","tried open|tried for open","p1670"],
["Жалею, что сказал тебе.","I regret telling you.|I regret having told you.","regret telling","regret to tell|regret tell","p1671"],
["С сожалением сообщаем, что рейс отменён.","We regret to inform you that the flight has been cancelled.|We regret to inform you that the flight has been canceled.","regret to inform","regret informing|regret inform","p1672"],
["После паузы он перешёл к бюджету.","After a pause, he went on to talk about the budget.","went on to talk","went on talking|went on talk","p1673"],
["Он продолжал говорить, не замечая нас.","He went on talking without noticing us.","went on talking","went on to talk|went on talk","p1674"],
["Мне пора постричься.","My hair needs cutting.|I need a haircut.|My hair needs to be cut.","needs cutting","needs cut|needs to cutting","p1675"],
["Я хочу, чтобы ты пришёл.","I want you to come.","want you to come","want that you come|want you come","p1676"],
["Я люблю плавать по утрам.","I like swimming in the morning.|I like to swim in the morning.","like swimming","like swim|like to swimming","p1677"],
["Он сам предложил мне помочь.","He offered to help me.","offered to help","offered helping|offered help me","p1678"],
["Он предложил пойти в кафе.","He suggested going to a café.|He suggested going to a cafe.|He suggested that we go to a café.","suggested going","suggested to go|suggested go","p1679"],
["Мне жаль это слышать.","I'm sorry to hear that.","sorry to hear","sorry hearing|sorry for hear","p1680"]
]));

add(X("x36","Make, let, get: заставить и разрешить","B2",[
 "<b>make sb do</b> — заставить (без to!), <b>let sb do</b> — разрешить (без to), <b>get sb to do</b> — уговорить (с to).",
 "В пассиве у make появляется to: I <b>was made to sign</b>. Let в пассиве заменяют на <b>be allowed to</b>.",
 "<b>have / get sth done</b> — «мне сделали» (услуга): I had my watch repaired."
],"«Заставил меня ждать» — made me wait (а не made me to wait). Зато в пассиве: I was made to wait.",[
["Он заставил меня ждать.","He made me wait.","made me wait","made me to wait|made me waiting","p1681"],
["Мама разрешила мне пойти.","Mum let me go.|My mother let me go.","let me go","let me to go|let me going","p1682"],
["Я уговорил его помочь.","I got him to help.|I persuaded him to help.","got him to help","got him help|got him helping","p1683"],
["Мне починили часы.","I had my watch repaired.|I got my watch repaired.|I had my watch fixed.","had my watch repaired","had repaired my watch|had my watch repair","p1684"],
["Не смеши меня.","Don't make me laugh.","make me laugh","make me to laugh|make me laughing","p1685"],
["Позволь мне объяснить.","Let me explain.","Let me explain","Let me to explain|Let me explaining","p1686"],
["Учитель заставил нас переписать текст.","The teacher made us rewrite the text.|The teacher had us rewrite the text.","made us rewrite","made us to rewrite|made us rewriting","p1687"],
["Меня заставили подписать.","I was made to sign.|They made me sign.","was made to sign","was made sign|was made signing","p1688"],
["Мне разрешили остаться.","I was allowed to stay.|They let me stay.","was allowed to stay","was let to stay|was allowed stay","p1689"],
["Я попросил его перезвонить мне.","I asked him to call me back.","asked him to call","asked him call|asked to him call","p1690"],
["Нам нужно отремонтировать крышу.","We need to get the roof repaired.|We need to have the roof repaired.|We need to have the roof fixed.","get the roof repaired","get repaired the roof|get the roof repair","p1691"],
["Этот фильм заставил меня задуматься.","This film made me think.|This movie made me think.","made me think","made me to think|made me thinking","p1692"],
["Она дала мне понять, что недовольна.","She let me know that she was unhappy.|She made it clear that she was unhappy.","let me know","let me to know|let me knowing","p1693"],
["Я заставлю его извиниться.","I'll make him apologise.|I will make him apologize.|I'll get him to apologise.","make him apologise","make him to apologise|make him apologising","p1694"],
["Не дай ему уйти.","Don't let him leave.|Don't let him go.","let him leave","let him to leave|let him leaving","p1695"],
["Мы заказали уборку квартиры.","We had the flat cleaned.|We had the apartment cleaned.|We got the flat cleaned.","had the flat cleaned","had cleaned the flat|had the flat clean","p1696"]
]));

add(X("x37","Будущее в прошлом","B2",[
 "<b>was / were going to</b> — собирался (но, возможно, не сделал). <b>would</b> — будущее с точки зрения прошлого: I knew you <b>would</b> understand.",
 "<b>was about to</b> — как раз собирался. <b>was supposed to</b> — должен был (по плану).",
 "После прошедшего глагола (said, knew, thought, promised) will превращается в would."
],"«Я знал, что ты поймёшь» — I knew you would understand (а не will). «Должно было стать сюрпризом» — was supposed to be (а не was suppose).",[
["Я собирался позвонить, но забыл.","I was going to call, but I forgot.|I was going to phone, but I forgot.","was going to call","was going call|am going to call","p1697"],
["Он сказал, что приедет в пятницу.","He said he would come on Friday.|He said that he would arrive on Friday.","would come","will come|comes","p1698"],
["Я знал, что ты поймёшь.","I knew you would understand.|I knew that you'd understand.","would understand","will understand|understood","p1699"],
["Мы как раз собирались уходить.","We were just about to leave.|We were about to leave.","about to leave","about leaving|about to leaving","p1700"],
["Это должно было стать сюрпризом.","It was supposed to be a surprise.|It was meant to be a surprise.","supposed to be","supposed being|suppose to be","p1701"],
["Мы должны были встретиться в шесть.","We were supposed to meet at six.|We were meant to meet at six.","were supposed to meet","were supposed meet|were suppose to meet","p1702"],
["Я и подумать не мог, что выиграю.","I never thought I would win.|I never imagined I would win.","would win","will win|won","p1703"],
["Она обещала, что перезвонит.","She promised she would call back.|She promised to call back.","would call back","will call back|called back","p1704"],
["Он собирался уволиться, но передумал.","He was going to quit, but he changed his mind.|He was going to resign, but changed his mind.","was going to quit","is going to quit|was going quit","p1705"],
["Я надеялся, что ты придёшь.","I was hoping you would come.|I hoped that you would come.","would come","will come|comes","p1706"],
["Казалось, дождь никогда не закончится.","It seemed the rain would never stop.|It seemed that the rain would never end.","would never stop","will never stop|never would stop","p1707"],
["Мы думали, что поезд опоздает.","We thought the train would be late.|We thought that the train would be delayed.","would be late","will be late|was late","p1708"],
["Я был уверен, что всё получится.","I was sure everything would work out.|I was sure that it would all work out.","would work out","will work out|would worked out","p1709"],
["Это оказалась наша последняя встреча, хотя тогда мы этого не знали.","It would be our last meeting, though we didn't know it then.|It was to be our last meeting, though we didn't know it then.","would be","will be|is","p1710"],
["Он сказал, что будет ждать у входа.","He said he would be waiting at the entrance.|He said that he'd be waiting by the entrance.","would be waiting","will be waiting|would waiting","p1711"],
["Я хотел было возразить, но промолчал.","I was going to object, but I kept quiet.","was going to object","was going object|am going to object","p1712"]
]));

add(X("x38","Вежливые косвенные вопросы","B2",[
 "Вместо прямого вопроса — вступление: <b>Could you tell me…</b>, <b>Do you know…</b>, <b>I wonder…</b>, <b>May I ask…</b>",
 "После вступления порядок слов прямой, без do / does: Could you tell me <b>where the station is</b>?",
 "Вопрос «да / нет» — через <b>if / whether</b>: Do you know <b>if the shop is open</b>?"
],"«Не подскажете, где вокзал?» — Could you tell me where the station is? (а не where is the station). Самая частая ошибка вежливых вопросов.",[
["Не подскажете, где вокзал?","Could you tell me where the station is?","where the station is","where is the station|where the station does","p1713"],
["Не знаете, открыт ли магазин?","Do you know if the shop is open?|Do you know whether the store is open?|Do you know if the store is open?","if the shop is open","if is the shop open|is the shop open","p1714"],
["Интересно, сколько это стоит.","I wonder how much it costs.|I wonder how much this costs.","how much it costs","how much does it cost|how much costs it","p1715"],
["Не скажете, во сколько начало?","Could you tell me what time it starts?|Could you tell me when it begins?","what time it starts","what time does it start|what time starts it","p1716"],
["Можно узнать, как вас зовут?","May I ask what your name is?|Could I ask your name?","what your name is","what is your name|what your name","p1717"],
["Не против, если я спрошу, сколько вам лет?","Do you mind if I ask how old you are?|Would you mind if I asked how old you are?","how old you are","how old are you|how you are old","p1718"],
["Я не уверен, правильно ли это.","I'm not sure whether this is right.|I'm not sure if this is correct.","whether this is right","whether is this right|is this right whether","p1719"],
["Не подскажете, как пройти к музею?","Could you tell me how to get to the museum?|Can you tell me how to get to the museum?","how to get","how get|how to getting","p1720"],
["Не знаю, где он живёт.","I don't know where he lives.","where he lives","where does he live|where he live","p1721"],
["Скажите, пожалуйста, почему задерживается поезд.","Could you tell me why the train is delayed?|Can you tell me why the train is late?","why the train is delayed","why is the train delayed|why the train delayed","p1722"],
["Не помните, кто это сказал?","Do you remember who said that?|Can you remember who said it?","who said that","who did say that|who said did","p1723"],
["Интересно, придёт ли он.","I wonder whether he'll come.|I wonder if he will come.","whether he'll come","will he come|whether will he come","p1724"],
["Не подскажете, есть ли тут аптека?","Do you know if there is a pharmacy near here?|Do you know if there's a chemist's nearby?","if there is","if is there|is there if","p1725"],
["Можно спросить, чем вы занимаетесь?","Can I ask what you do?|May I ask what you do for a living?","what you do","what do you do|what you are do","p1726"],
["Не знаю, что сказать.","I don't know what to say.","what to say","what say|what saying","p1727"],
["Не подскажете, который час?","Could you tell me what time it is?|Do you know what time it is?","what time it is","what time is it|what is time","p1728"]
]));

add(X("x39","Сравнения B2","B2",[
 "Усиление сравнения: <b>much / far / a lot</b> better, <b>slightly / a bit</b> taller, <b>by far the best</b>.",
 "Равенство и разница: <b>as clever as</b>, <b>nowhere near as easy</b>, <b>twice as expensive</b>, <b>the more…, the more…</b>",
 "Динамика: <b>higher and higher</b>, <b>worse and worse</b>. <b>like a child</b> (похоже на) ≠ <b>as a doctor</b> (в роли)."
],"«Гораздо лучше» — much better (а не more better или very better). «Как врач» (в роли) — as a doctor; «как ребёнок» (похоже) — like a child.",[
["Чем больше я учусь, тем больше понимаю.","The more I study, the more I understand.|The more I learn, the more I understand.","The more I study","More I study|The most I study","p1729"],
["Этот вариант гораздо лучше.","This option is much better.|This option is far better.|This one is much better.","much better","more better|very better","p1730"],
["Это далеко не так просто.","It's nowhere near as easy.|It's not nearly as easy.","nowhere near as easy","nowhere near easy|nowhere near as easier","p1731"],
["Это безусловно лучший ресторан.","It's by far the best restaurant.","by far the best","by far best|far by the best","p1732"],
["Цены всё выше и выше.","Prices are getting higher and higher.","higher and higher","more and more high|high and higher","p1733"],
["Он чуть выше меня.","He is slightly taller than me.|He's a bit taller than me.|He is a little taller than I am.","slightly taller","slight taller|slightly more tall","p1734"],
["Она такая же умная, как сестра.","She's as clever as her sister.|She is just as smart as her sister.","as clever as","so clever as|as clever like","p1735"],
["Это вдвое дороже.","It's twice as expensive.|It costs twice as much.","twice as expensive","two times expensive|twice more expensive","p1736"],
["Он работает усерднее всех.","He works harder than anyone.|He works the hardest of all.|He works harder than anybody else.","harder than anyone","more hard than anyone|hardlier than anyone","p1737"],
["Фильм не такой интересный, как книга.","The film isn't as interesting as the book.|The movie is not as interesting as the book.","as interesting as","so interesting like|as interesting than","p1738"],
["Это всё равно что говорить со стеной.","It's like talking to a brick wall.|It's like talking to a wall.","like talking","as talking|like talk","p1739"],
["Он ведёт себя как ребёнок.","He behaves like a child.|He's acting like a child.","like a child","as a child|like child","p1740"],
["Как врач, я советую вам отдохнуть.","As a doctor, I advise you to rest.|As a doctor, I recommend that you rest.","As a doctor","Like a doctor|As doctor","p1741"],
["Сегодня гораздо холоднее.","It's a lot colder today.|It's much colder today.|It is far colder today.","a lot colder","a lot more cold|lots colder","p1742"],
["Это худшее, что могло случиться.","That's the worst thing that could have happened.|It's the worst thing that could happen.","the worst","the baddest|the most bad","p1743"],
["Чем дальше, тем хуже.","It's getting worse and worse.|Things are going from bad to worse.","worse and worse","more and more bad|badder and badder","p1744"]
]));

add(X("x40","Причина и следствие","B2",[
 "Причина: <b>due to / owing to / because of</b> + существительное; <b>as / since / because</b> + предложение.",
 "Следствие: <b>so … that</b> (с прилагательным), <b>such (a) … that</b> (с существительным), <b>led to</b>, <b>hence</b>, <b>as a result</b>.",
 "Цель «чтобы не»: <b>so as not to / in order not to</b>."
],"«Так устал, что…» — so tired that; «такой шум, что…» — such a noise that. «Owing to» (из-за) не путать с «owning» (владение).",[
["Рейс отменили из-за тумана.","The flight was cancelled due to fog.|The flight was cancelled because of the fog.|The flight was canceled due to fog.","due to","due|due for","p1745"],
["Он так устал, что сразу уснул.","He was so tired that he fell asleep immediately.|He was so tired he fell asleep at once.","so tired that","such tired that|so tired than","p1746"],
["Был такой шум, что я ничего не слышал.","There was such a noise that I couldn't hear anything.|It was so noisy that I couldn't hear anything.","such a noise","so a noise|so much a noise","p1747"],
["В связи с ремонтом магазин закрыт.","Owing to repairs, the shop is closed.|Due to repairs, the shop is closed.|The shop is closed for repairs.","Owing to","Owning to|Owe to","p1748"],
["Вот почему я опоздал.","That's why I was late.|That is the reason I was late.","That's why","That's because|That's what","p1749"],
["Из-за этого мы потеряли клиента.","Because of this, we lost a client.|As a result of this, we lost a customer.","Because of this","Because this|Because for this","p1750"],
["Это привело к серьёзным проблемам.","This led to serious problems.|It resulted in serious problems.","led to","leaded to|lead for","p1751"],
["Аварию вызвало превышение скорости.","The accident was caused by speeding.|Speeding caused the accident.","caused by","caused from|cause by","p1752"],
["Так как было поздно, мы ушли.","As it was late, we left.|Since it was late, we left.|Because it was late, we left.","As it was late","Like it was late|As it late","p1753"],
["В результате эксперимент провалился.","As a result, the experiment failed.","As a result","As result|In a result","p1754"],
["Он заболел, поэтому не пришёл.","He was ill, so he didn't come.|He fell ill, so he did not come.","so he didn't come","so he not came|so didn't he come","p1755"],
["Это объясняется плохой погодой.","This is explained by the bad weather.|This is due to the bad weather.","explained by","explained with|explained from","p1756"],
["Чтобы не опоздать, мы вышли рано.","So as not to be late, we left early.|In order not to be late, we left early.","So as not to","So as no to|So not as to","p1757"],
["Это результат упорного труда.","It's the result of hard work.|This is the result of hard work.","result of","result from|result in","p1758"],
["Отсюда и проблема.","Hence the problem.|That's where the problem comes from.","Hence","Hense|Since","p1759"],
["Все волновались, потому что он ничего не говорил.","Everyone was worried because he said nothing.|Everyone was worried because he didn't say anything.","said nothing","said anything|didn't say nothing","p1760"]
]));

add(X("x41","Сожаление и критика","B2",[
 "Сожаление: <b>It's a shame / a pity (that)…</b>, <b>I regret…</b>, <b>If only I had known!</b>, <b>Sorry to bother you</b>.",
 "Критика мягко: <b>You should have been more careful</b>, <b>That was unwise of you</b>, <b>I'd rather you hadn't done that</b>.",
 "Эмоции: <b>disappointed with</b>, <b>ashamed of</b>, <b>let me down</b>, <b>take it personally</b>."
],"«Жаль» — It's a pity / It's a shame (с артиклем). «Мне стыдно за…» — ashamed of (а не for).",[
["Мне жаль, что так вышло.","I'm sorry it turned out this way.|I'm sorry about what happened.","turned out","turned off|turned in","p1761"],
["Жаль, что ты не пришёл.","It's a shame you didn't come.|It's a pity you didn't come.|What a shame you didn't come.","It's a shame","It's a shy|It's shame","p1762"],
["Я сожалею о своих словах.","I regret what I said.|I regret my words.","regret what I said","regret about what I said|regret for what I said","p1763"],
["Лучше бы ты этого не делал.","I'd rather you hadn't done that.|I wish you hadn't done that.","rather you hadn't done","rather you didn't done|rather you not done","p1764"],
["Тебе следовало быть внимательнее.","You should have been more careful.|You ought to have been more careful.","should have been","should be been|should have be","p1765"],
["Это было неразумно с твоей стороны.","That was unwise of you.","unwise of you","unwise from you|unwise for you","p1766"],
["Как можно было так ошибиться?","How could you make such a mistake?","such a mistake","so a mistake|such mistake","p1767"],
["Я разочарован результатом.","I'm disappointed with the result.|I am disappointed by the result.|I'm disappointed in the result.","disappointed with","disappointed from|disappointing with","p1768"],
["Мне не следовало кричать.","I shouldn't have shouted.","shouldn't have shouted","shouldn't shouted|shouldn't have shout","p1769"],
["Если бы я только знал!","If only I had known!","had known","have known|would know","p1770"],
["Обидно, что мы проиграли.","It's a pity that we lost.|It's a shame that we lost.","a pity","a pit|pity","p1771"],
["Это непростительно.","That's unforgivable.","unforgivable","unforgiven|not forgivable","p1772"],
["Простите за беспокойство.","Sorry to bother you.|Sorry for bothering you.","to bother","for bother|to bothering","p1773"],
["Мне стыдно за своё поведение.","I'm ashamed of my behaviour.|I am ashamed of my behavior.","ashamed of","ashamed for|ashamed with","p1774"],
["Ты меня подвёл.","You let me down.","let me down","let me under|let down me","p1775"],
["Не принимай близко к сердцу.","Don't take it personally.|Don't take it to heart.","take it personally","take it personal|take it close to heart","p1776"]
]));

add(X("x42","Жалобы и претензии","B2",[
 "Начать: <b>I'd like to make a complaint</b>, <b>I demand to speak to the manager</b>. Описать: <b>faulty</b>, <b>overcharged</b>, <b>never arrived</b>, <b>isn't working</b>.",
 "Потребовать: <b>a refund</b>, <b>replace / exchange</b>, <b>compensate for</b>. Время ожидания: <b>for two hours</b> (не since).",
 "Feedback — неисчисляемое: leave feedback / a review (не a feedback)."
],"«Жду уже два часа» — I've been waiting for two hours (а не since two hours). «Мне выставили лишнее» — I was overcharged (а не overpaid: это «переплатил»).",[
["Я хотел бы подать жалобу.","I'd like to make a complaint.|I would like to complain.","make a complaint","do a complaint|give a complaint","p1777"],
["Товар оказался бракованным.","The product turned out to be faulty.|The item was faulty.|The product turned out to be defective.","faulty","false|fault","p1778"],
["Я хочу вернуть деньги.","I'd like a refund.|I want my money back.","refund","refunding|return money","p1779"],
["Обслуживание было ужасным.","The service was terrible.|The service was awful.","service","servant|serve","p1780"],
["С меня взяли лишнее.","I was overcharged.|I've been overcharged.|They charged me too much.","overcharged","overpaid|overcharging","p1781"],
["Заказ так и не пришёл.","The order never arrived.|My order never arrived.","never arrived","didn't never arrive|never didn't arrive","p1782"],
["Кондиционер не работает.","The air conditioning isn't working.|The air conditioner doesn't work.","isn't working","doesn't working|isn't work","p1783"],
["Это совершенно неприемлемо.","This is completely unacceptable.|This is totally unacceptable.","unacceptable","inacceptable|non-acceptable","p1784"],
["Я требую поговорить с менеджером.","I demand to speak to the manager.|I insist on speaking to the manager.","demand to speak","demand speaking|demand that speak","p1785"],
["Вы можете заменить товар?","Could you replace the item?|Can you exchange the product?","replace","replay|place","p1786"],
["Мне обещали доставку вчера.","I was promised delivery yesterday.|They promised me delivery yesterday.","was promised","promised|was promise","p1787"],
["Я жду уже два часа.","I've been waiting for two hours.","for two hours","since two hours|during two hours","p1788"],
["Это ваша ошибка, а не моя.","It's your mistake, not mine.|It is your fault, not mine.","not mine","not my|not me","p1789"],
["Надеюсь, вы решите проблему как можно скорее.","I hope you'll solve the problem as soon as possible.|I hope you will resolve the issue as soon as possible.","as soon as possible","as soon as possibly|so soon as possible","p1790"],
["Я оставлю отзыв.","I'll leave a review.|I will write a review.","leave a review","leave a feedback|let a review","p1791"],
["Вы компенсируете неудобства?","Will you compensate for the inconvenience?|Will you compensate me for the inconvenience?","compensate for","compensate on|compensate to","p1792"]
]));
})();
