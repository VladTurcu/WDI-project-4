const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const Course     = require('../models/course');
const User     = require('../models/user');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI, { useMongoClient: true });

Course.collection.drop();
User.collection.drop();

User.create([{
  firstname: 'vlad',
  lastname: 'turcu',
  username: 'VladTurcu',
  email: 'turcuvlad_87@yahoo.com',
  image: 'https://scontent.xx.fbcdn.net/v/t1.0-1/s200x200/14322479_10206990009537311_739998228969557179_n.jpg?oh=95cf1376b53dfeb539165c51ce1d6f76&oe=5A6C2B0E',
  achievements: [],
  admin: true,
  coverImage: 'http://www.trendycovers.com/covers/color_your_life_facebook_cover_1345918363.jpg',
  courses: null,
  password: 'password',
  passwordConfirmation: 'password'
}, {
  firstname: 'Vlad',
  lastname: 'TheImpaler',
  username: 'Vlad TheImpaler',
  email: 'gicuferentari@yahoo.it',
  facebookId: '1945578189048579',
  image: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/23130570_1950268311912900_4044111797299733275_n.jpg?oh=2ea876f8549a6397085c3c077e357891&oe=5A9F7860',
  achievements: [],
  admin: false,
  coverImage: 'http://www.trendycovers.com/covers/color_your_life_facebook_cover_1345918363.jpg',
  imageSRC: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/23130570_1950268311912900_4044111797299733275_n.jpg?oh=2ea876f8549a6397085c3c077e357891&oe=5A9F7860',
  courses: null,
  password: 'password',
  passwordConfirmation: 'password'
}])



  .then((users) => {
    console.log(`${users.length} users created!`);
    return Course.create([
      {
        title: 'Somelier basics',
        image: 'https://images.unsplash.com/photo-1482275548304-a58859dc31b7?w=1955&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
        category: 'wine',
        description: 'A wine beginner might know the basic differences between a red and a white, but it s also important to learn all the wine types and varietals. ',
        published: true,
        createdBy: users[0],
        lessons: [{
          stage: 1,
          title: 'What is wine?',
          content: 'The standard answer to this question is that Wine is an alcoholic beverage made with the fermented juice of grapes. Which is true, true is also that wine can be made from basically any other fruits, but grapes are the standard in the wine production for two reasons. Firstly, the grapes have an acid that helps preserving the wine over a long period of time (will cover later in the course). Secondly the grapes contain more sugar among the other fruits which we will learn later that is essential for wine quality and preservation over decades.',
          image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
        }, {
          stage: 1,
          title: 'How is wine made?',
          content: 'Mosthly wine harvest includes these basic vine-to-wine steps: 1.	Pick the grapes  2.	Crush the grapes  3.	Ferment the grapes into wine Pick up the grapes  The grapes are either cut from the vine by human hands with shears or they are removed by a machine. It is important that they are properly ripe. Too ripe or not ripe enough the wine will suffer(you can make bad wine from good grapes, but not a good wine from bad grapes). The grapes are collected in bins or lugs and then transported to the winery where they will be sorted for quality(Removing rotten or raisined grapes). After sorting they go into a machine that removes the stem and crushes them.                                                                                                         Crush the grapes                                                                                                                  The crush literally gets the grape’s juices flowing and is the first step in the process that turns fresh, delicate fruit into delicious, shelf-stable wine. As grape skins are broken                                                                           Fermentation                                                                                                                         The fermentation process turns the sweet grape juice in the alcoholic beverage we call wine.  During this process the yeast turns the sugar into alcohol and carbon dioxide. When the alcohol level reaches 15% the yeast cells dies and all the sugar left remains into the wine. The fermentation process can be stopped by cooling down the tanks or thru a chemical process. Fermentation can be done in stainless steel vats, in a open Wooden vat, inside a wine barrel and inside the wine bottle itself.',
          image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
        }, {
          stage: 2,
          title: 'White wine',
          content: 'White wines can be made from either white or red grapes. The difference during the whole process is that after the crushing of the grapes in order to produce white wine, the skin is separated from the grape juice before the fermentation. White wine can differ in colour as well depending on the grape variety used, the container used for the fermentation or vintage. It can differ in taste and smell depending of where is coming from or the way it was made.',
          image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
        }, {
          stage: 2,
          title: 'Red wine',
          content: 'Red wine is red because the skin of the grapes are present during the fermentation process, being removed only after the fermentation has finished. (you can make white wine from red grapes but you cant make red wine from white grapes) Besides colour the wine get from the skin and seeds of the grapes the tannins. Tannin is a naturally occurring polyphenol found in plants, seeds, bark, wood, leaves, and fruit skins. About 50% of the dry weight of plant leaves are tannins. As a characteristic of wine, tannin adds both bitterness and astringency, as well as complexity. Wine tannins are most commonly found in red wine, although white wines have tannin from being aged in wooden barrels. Red wines age for anywhere from 4 months and 4 years before being bottled. After ageing the wines are filtered prior to bottling.',
          image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
        }, {
          stage: 2,
          title: 'Rosé wine',
          content: 'The rosé wine is a type of wine that incorporates some of the colour from the grape skin. During the fermentation process the skins are allowed to remain in contact with the juice for a short period, typically one to three days.',
          image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
        }, {
          stage: 3,
          title: 'Dry wine',
          content: 'Referring to a wine as “dry” is one of the first descriptors most of us learn as a way to talk about wine, but “dry” is also one of the words that is misused the most often by wine drinkers. The reason the term “dry” gets misused is because we commonly use it rationally, relating the word to sensory characteristics of wine, even though these sensory characteristics are not what we mean when we say a wine is dry. A dry wine is simply a wine that has no residual sugar, meaning it isn’t sweet. When grape juice converts to wine, alcohol is produced in the fermentation process because yeast eats the sugar present in the juice. In many wines, the winemaker stops the fermentation process before the yeast has time to eat all the sugar, leaving the wine a touch sweet. When a winemaker leaves a little sugar behind, we call this residual sugar. To make a dry wine, the winemaker will instead let the fermentation process finish completely, allowing the yeast to consume all the sugar present. No more sugar, so no sugary sweetness; the wine is therefore dry.',
          image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
        }, {
          stage: 3,
          title: 'Sparkling wine',
          content: 'Sparkling wine is a wine with significant levels of carbon dioxide in it, making it fizzy. The best known example of a   sparkling wine is champagne, which is exclusively produced in the Champagne region of France. Usually sparkling wine is white or rosé, but there are examples of red sparkling wines such as the Italian Brachetto, the Italian Bonarda, Australian sparkling Shiraz, and Azerbaijani "Pearl of Azerbaijan" made from Madrasa grapes. The sweetness of sparkling wine can range from very dry "brut" styles to sweeter "doux" varieties (from the French words for "raw" and "sweet", respectively).[1] The sparkling quality of these wines comes from its carbon dioxide content and may be the result of natural fermentation, either in a bottle, as with the traditional methode, in a large tank designed to withstand the pressures involved (as in the Charmat process), or as a result of simple carbon dioxide injection in some cheaper sparkling wines.',
          image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
        }],
        tests: [{
          stage: 1,
          question: 'From wich grape types is the white wine made?',
          answer: 'From both white and red',
          options: ['From only white grapes', 'From only red grapes', 'From both white and red']
        }, {
          stage: 2,
          question: 'If red wine can be made from red grapes and white wine can be made from white grapes how is the rosé wine made',
          answer: 'From only red grapes',
          options: ['From only white grapes', 'From only red grapes', 'From only pink grapes', 'From both white and red']
        }, {
          stage: 3,
          question: 'How would you describe a dry wine?',
          answer: 'A wine that has no traces of sweetness',
          options: ['A wine that leaves your muth dry', 'A wine that has high levelsof alcohol', 'A wine that is sweet', 'A wine that has no traces of sweetness']
        }]
      },
      ////  course start  ////////////////////////////////////////////////////////////
      {
        title: 'Grape varieties',
        image: 'https://i.ytimg.com/vi/To-YVDwHBZc/maxresdefault.jpg',
        category: 'wine',
        description: 'One of the most influential factors affecting the flavour of wine is the grape variety or varieties that go into its making. Understanding some of the key differences between those most commonly found in the wine-producing world, helps to provide a compass for enjoyable exploration. Our guides outline key characteristics and wine styles, common tasting terms and where in the world to head to for the grape of your choice.',
        published: true,
        createdBy: users[0],
        ////// lesson start ///////////////////////////////////////////////////////////////////////
        lessons: [{
          stage: 1,
          title: 'Cabernet sauvignon',
          content: 'World-renowned and exceptionally well-travelled, cabernet sauvignon is responsible for some of the worlds finest wines – working either on its own, or blended with other varieties. While many grape varieties exude friendly fruit aromas, cabernet s success in fine wine lies in it subtleties: secondary, nuanced flavours that have the potential to develop in bottle over a lengthy ageing period. For this reason, cabernet is synonymous with serious red wine designed for cellaring. On the vine, its berries are small and thick-skinned, with a high pip to pulp ratio. The skin and number of pips make a typical cabernet sauvignon wine tannic and deep, coloured, often appearing almost blue. The variety first established its reputation in the Médoc where it forms the backbone of Bordeauxs great clarets. The cabernet-dominant wines of this region allow the grape s brooding, tannic structure and blackcurrant fruit to shine through arguably better than anywhere. It is here that one of the greatest blending partnerships of the wine world was forged – the marriage of cabernet sauvignon, merlot and cabernet franc. It is a relationship that has travelled the globe. In California and the southern hemisphere (Chile, Argentina, South Africa, New Zealand and Australia), cabernets tend to develop a sense of fullness and weight. Rich in blackcurrant, mint and occasionally green bell pepper flavours along with firm tannins, the best wines here too can age for decades.',
          image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
        }, {
          stage: 1,
          title: 'Chardonnay',
          content: 'The success of chardonnay is so striking that it has almost become a brand name in itself, though in its homeland of Burgundy the name rarely appears on the label. Even today it continues to suffer from an image problem, with some still traumatised by the so-called oaky blokey styles of the 1990s. Yet such afflictions are rectified relatively easily by being introduced to the wonderful elegance and diversity the grape is capable of, across a remarkable range of countries and regions. In France, it can make wines as crisp and mineral as Chablis at one end of the scale, and full-bodied, buttery Meursault at the other. In warm New World climates chardonnay takes on attractive tropical fruit flavours and aromas. As winemakers seek out cooler sites for the grape, in Chile and New Zealand in particular, wines with a more linear structure and subtle nuances of flavour are emerging. The grape itself is relatively neutral in taste and its flavours can be rather elusive – reminiscent of green apples in its purest form. In bottle, the flavours are generally those gained from its terroir or oak, making it the perfect vehicle for producers to show the character of their vineyard and demonstrate the full art of winemaking techniques. Long, cool fermentations and early bottling are as suited to this variety as barrel fermentation and new oak ageing. Growing chardonnay does not seem to present any special problems except maybe in its native Burgundy where its early budding can make it vulnerable to spring frosts. Elsewhere though, chardonnay is a dream to grow, adapting to new environments with ease. Despite being an all-round crowd-pleaser, very few white grapes are capable of producing wines with such complexity and ageing ability as chardonnay. As such it is one of the world s true classics or noble grape varieties.',
          image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
        }, {
          stage: 2,
          title: 'Malbec',
          content: 'At one time, malbec was perhaps best-known as the grape responsible for Cahors, in south-west France (where it s known as cot) and for its blending role in clarets, with cabernet sauvignon, merlot, cabernet franc and petit verdot. Nowadays, it is more likely to be identified with Argentina. The focus of Argentine plantings is in Mendoza, where malbec yields a velvety, concentrated wine of high alcohol, fruit content and extract. Quality is soaring and the wines are enormously popular today. By contrast, French plantings are in decline, largely due to the grape s susceptibility to frost, mildew and rot. It requires such a degree of tender loving care that many producers have decided that it is not worth their while when merlot, for instance, is an easier proposition. But it is still found in the Loire Valley (where it is known as cot), the Bordeaux côtes, Bergerac and along the route of the Pilgrim s way throughout southwest France; though unfashionable, one of two growers are championing a renaissance and in Cahors it is still widely found. When grown on the right site however – namely, infertile, high, rugged terrain, ideally with limestone soil – it fashions a rustic, spicy wine, full of colour that sings when paired with beef and game. Cahors, in southwest France, provides just such conditions, and it is here where France s so-called black wines are produced, full of rustic, gamey flavours and leathery nuances.',
          image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
        }, {
          stage: 2,
          title: 'Merlot',
          content: 'Extremely popular though underappreciated by some, merlot is characterised by a softness of texture and fruit-forward character. It is capable of producing juicy and enjoyable single-varietal wines as well as playing an invaluable role in numerous blends. Merlot is the most widely planted variety in Bordeaux, and tends to be the dominant grape in the lauded reds of the right bank – most famously in the Clarets of Saint-Emilion and Pomerol. Though it undoubtedly shows its best in these hallowed appellations clay soils, the classic Bordeaux blend (merlot, cabernet sauvignon and sometimes cabernet franc) is responsible for many fine wines far beyond French borders. While its relatively early budding and flowering leaves it open to the dangers of spring frosts, it is a comparatively easy grape to grow, and is prolific in the South of France, Chile, Italy, Romania, South Africa, Australia and, to an extent, New Zealand. Depending on where it is planted, merlot wines tend to be medium-bodied with plum, red berry and currant flavours. These are particular hallmarks of the so-called international style of merlot; low in tannin and full of appealing fruit flavours, such wines are very popular in much of Europe and the New World. More traditional Bordelais examples can exhibit tertiary notes of spices, mint and pepper.',
          image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
        }, {
          stage: 3,
          title: 'Pinot Noir',
          content: 'Pinot noir is arguably the most charismatic of all grape varieties, and without doubt the hardest to get right. It s responsible for some of the world s best red wines – and some of the worst. Grow it in excessive heat and it will ripen too quickly, failing to achieve the bewitching flavour and complexity of which it is capable. In cooler climates, it often fails to ripen at all. The grapes, relatively thin-skinned and tightly bunched together, are prone to a host of vine diseases, not to mention rot.When it works, though, it s incomparable. No other grape has the same power of seduction, from it naturally pale and delicate hue to the charming raspberry and cherry notes it presents in its youth, the more gamey aromas that appear with age, the lacy texture on the palate of a fine, mature Burgundy, or the warmer, more velvety allure the grape takes on in the cooler corners of the New World, notably New Zealand, the Pacific north-west and, increasingly, Chile. Pinot noir is also a key Champagne grape, bringing depth, backbone and added complexity to blends with chardonnay and pinot meunier, to produce some of the world s finest sparkling wines.',
          image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
        }, {
          stage: 3,
          title: 'Sauvignon Blanc',
          content: 'An early-ripening, aromatic grape, sauvignon produces dry wines, with marked acidity that are distinctly aromatic and herbaceous. In cooler climates the wines often have a verdant, vegetal, nettley character (Loireand Bordeaux) moving to riper, more exotic fruits and gooseberry in warmer, New World climates (Chile, New Zealand and Australia). A particularly vigorous variety, it can develop overly vegetal aromas if not restrained. s a variety, it is happiest in cool vine-growing regions or warmer regions that have a cooling influence. If grown in too warm an environment, it has a tendency to lose its key aromatics and acidity resulting in a heavy, blousy wine. It is therefore found growing at its best in the northern vine-growing latitudes of the northern hemisphere as well as the southerly regions of the southern hemisphere.In its homeland of the Loire Valley, France, sauvignon blanc showcases its aromatic character and refreshing acidity at its best in the form of pure, zesty wines.The other key region in France for top quality sauvignon blanc is Bordeaux. It is here that the variety finds itself in bed with its most frequent blending partner, semillon, creating arguably the world s finest sweet wines in the form of Sauternes and Barsac, along with good quantities of dry, fresh, white wines. Outside of the old world, sauvignon blanc has found its second home in New Zealand, particularly Marlborough, whose vibrant, pungent wines helped put this country on the winemaking map in the 1980s. It is also found in the cooler, often maritime-influenced, regions of Australia, South Africa and Chile.',
          image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
        }, {
          stage: 4,
          title: 'Riesling',
          content: 'To many, the chameleonic riesling grape is the finest white wine variety in the world. No other white grape can produce such an astonishing range of delicate yet persistent aromas and flavours or keep its freshness over so many years with such modest alcohol levels. One of the hardiest grapes to grow, its high level of frost resistance allows riesling to thrive in the cool, continental climates of northern Europe, as well as parts of Australia and New Zealand. As the grapes are small, they form compact bunches on the vine, which makes riesling highly susceptible to noble rot, and the subsequent production of sweet wines. It can act as something of a lightning rod for expressing its terroir, with different regions producing often markedly varied wines.',
          image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
        }, {
          stage: 4,
          title: 'Grenache',
          content: 'Grenache is found all over southern France and Spain, thriving in hot, dry vineyards where less hardy grapes would struggle. It grows old very gracefully as the centenarians of the Roussillon s Côte Vermeille and Upper Agly Valley testify. It is a key player in the Rhône Villages and Châteauneuf-du-Pape, in northern Spain where it s known as garnacha, and in Australia, where it represents the G in the Rhône-inspired GSM blends. Naturally high in alcohol, it lends itself to the production not only of reds but excellent rosés and fortified wines too.',
          image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
        }
        ],


        //////  lesson end  //////////////////////////////////////////////////////////////////
        //////  test start  //////////////////////////////////////////////////////////////////

        tests: [{
          stage: 1,
          question: 'Which region is known to be Chardonnay s homeland',
          answer: 'Burgundy',
          options: ['Burgundy', 'Bordeaux', 'Chianti', 'Napa Valley']
        }, {
          stage: 2,
          question: 'Select the most widely planted variety in Bordeaux',
          answer: 'Merlot',
          options: ['Cabernet Sauvignon', 'Malbec', 'Sangiovese', 'Merlot']
        }, {
          stage: 3,
          question: 'Which of the following varieties is used in the produnction of Champagne?',
          answer: 'Pinot Noir',
          options: ['Pinot Noir', 'Caernet Sauvignon', 'Merlot', 'Sauvignon blanc']
        }, {
          stage: 4,
          question: 'Select a country where the grape variety Grenache is also know as Garnacha',
          answer: 'Spain',
          options: ['France', 'Spain', 'Italy', 'Australia']
        }]

      //test stop ///////////////////////////////////////////////////////////////////
      },    {
        title: 'Sparkling wines',
        image: 'http://www.italyrivieralps.com/fileadmin/archivio/montecarlonews/spumanti.jpg',
        category: 'wine',
        description: 'Sparkling wines are produced in just about every wine-producing region of the world with many winemakers admitting that they are unable to resist the temptation of making this, the most celebratory of drinks. These wines are not just fun to drink, but fun to make too; the almost alchemic process of getting bubbles into wine in the first place an almost irresistible draw for winemakers.',
        published: true,
        createdBy: users[0],
        ////// lesson start ///////////////////////////////////////////////////////////////////////
        lessons: [{
          stage: 1,
          title: 'The Basics',
          content: 'Winemaking more influential than grape or even origin The major game changer that influences the style of a sparkling wine is the way in which it is made bubbly. All sparkling wine starts out life as a still wine; it s the presence of CO2 that makes it bubbly and how this gets into the wine is all important. While this sounds simple, there are a number of different methods that winemakers can use to create a sparkling wine, and to my mind these methods often have an overarching effect on the style of the wine, trumping even that of grape variety and often place. Grape picking in Penedès, Catalonia, the centre of cava production. Though the production method determines style more than variety, it is important to have a base wine with good acidity Grape neutrality This is compounded by the fact that for the great majority of sparkling wines, grapes for the base wine are picked very early to retain a high acid level; this is a desired factor in sparkling wine. By picking early, however, the core flavours of the grapes used often haven t fully developed, and the character of the particular microclimate may also be more subdued. The three main production techniques at the winemaker s disposal are: The Traditional, Method The Transfer Method, The Tank Method. All three of these methods create a sparkling wine naturally. There is no simple addition of carbon dioxide (CO2) although this is used for very inexpensive and low-quality sparkling wines. Retaining CO2, naturally This means that the process of fermentation has been harnessed to retain some of the naturally produced CO2 (which is a by-product in the conversion of sugar to alcohol - the basic process of fermentation). Whereas in still wine production this CO2 is allowed to blow off naturally, in sparkling wine production the wine is pressurised so that the CO2 cannot escape and is instead forced to stay in the wine, creating bubbles.',
          image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
        }, {
          stage: 1,
          title: 'The Basics',
          content: 'Winemaking more influential than grape or even origin The major game changer that influences the style of a sparkling wine is the way in which it is made bubbly. All sparkling wine starts out life as a still wine; it s the presence of CO2 that makes it bubbly and how this gets into the wine is all important. While this sounds simple, there are a number of different methods that winemakers can use to create a sparkling wine, and to my mind these methods often have an overarching effect on the style of the wine, trumping even that of grape variety and often place. Grape picking in Penedès, Catalonia, the centre of cava production. Though the production method determines style more than variety, it is important to have a base wine with good acidity Grape neutrality This is compounded by the fact that for the great majority of sparkling wines, grapes for the base wine are picked very early to retain a high acid level; this is a desired factor in sparkling wine. By picking early, however, the core flavours of the grapes used often haven t fully developed, and the character of the particular microclimate may also be more subdued. The three main production techniques at the winemaker s disposal are: The Traditional, Method The Transfer Method, The Tank Method. All three of these methods create a sparkling wine naturally. There is no simple addition of carbon dioxide (CO2) although this is used for very inexpensive and low-quality sparkling wines. Retaining CO2, naturally This means that the process of fermentation has been harnessed to retain some of the naturally produced CO2 (which is a by-product in the conversion of sugar to alcohol - the basic process of fermentation). Whereas in still wine production this CO2 is allowed to blow off naturally, in sparkling wine production the wine is pressurised so that the CO2 cannot escape and is instead forced to stay in the wine, creating bubbles.'
        }, {
          stage: 2,
          title: 'Traditional Method',
          content: 'Traditional Method (or méthode traditionelle) is a wine word associated with the production of Champagne and other bottle-fermented sparkling wines. It is an official, technical term denoting a specific method and process. It is sometimes referred to as the Classic Method (méthode classique), while it used to be called the Champagne Method. Traditional Method means that the sparkling wine in question was bottle fermented. i.e. the wine went through its second fermentation (to produce the bubbles) in the bottle in which it is sold. Champagne is the most famous wine to use the traditional method. Cava (Spain) is also made using the traditional method, as is Franciacorta (Italy) and most quality Californian sparkling wines. Second Fermentation in Bottle Traditional method sparkling wines go through two fermentations. The first fermentation, which is usually carried out in tank (but could be in cask) creates the base still wine. After that the base still wines are blended ( a process known as the assemblage), according to the style and quality requirements of each producer, and the blended wine is put into bottle along with a mixture of yeast and sugar (called the liqueur de tirage) and then closed with a crown cap. The bottles are then placed on their side in a cellar environment (about 50-52 degrees Fahrenheit). The yeast and sugar kick-start a second fermentation inside the bottle, in which additional alcohol (circa 1-2%) and CO2 are created. As the CO2 cannot escape it is trapped as bubbles in the wine. Resting sur-lie - Autolysis After the second fermentation is complete the wines are left sur lie (i.e. resting on its lees - the dead yeast cells in each bottle) for anything from 9 months to several years. Champagne, Cava and many other old world traditional sparkling wine appellations have minimum sur-lie aging requirements. For example in Champagne it is 15 months for non-vintage Champagne, but in reality most Champagne producers leave their non-vintage wines resting sur lie for up to three years. During this time the proteins, amino acids and other compounds in the dead yeast cells are released and break down. This process is called autolysis and adds complexity to the wines such as the toasty/brioche/freshly baked bread aromas that one associates with Champagne and good sparkling wines. Riddling, Disgorging and Dosage As no Champagne or Sparkling wine consumer wants to drink a cloudy wine, the next steps are called remuage and disgorgement, i.e. getting the lees out of each bottle. The bottles are carefully riddled daily to slowly and homogeneously move the sediment toward the neck of the bottle (this is remuage / riddling). This process was traditionally carried out by hand but today is automated for efficiency. Once the sediment is neatly collected in the neck of the bottle, it has to be disgorged. This is done by freezing the neck of the bottle in a bath of freezing brine. Once frozen, the crown camp is removed and the frozen ball of lees sediment shoots out, after which the bottle is quickly topped up with a mixture called the liqueur dexpédition or dosage - i.e. a mixture of wine and sugar, based on the eventual style of the wine. For example Brut style contains between 6g and 15g/l of sugar. Once the liqueur d expédition is added the bottle is closed with the requisite Champagne cork, wire muzzle and foil and prepared for release. Though the wines usually rest and additional six or more months so that the dosage is fully integrated before being sold. EU ruling banning universal use of term Champagne Method This method of producing sparkling wine was originally called the Champagne Method, until a group of Champagne producers successfully lobbied the EU against its use by non-Champagne producers. As a result traditional method sparkling wines sold in the EU cannot use the term Champagne Method - instead they use Traditional Method or méthode traditionelle. This EU ruling has largely been accepted by sparkling wine producers globally, though you do occasionally still see Champagne Method on some sparkling wines made and sold in the United States',
          image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
        }, {
          stage: 2,
          title: 'Transfer Method',
          content: 'This method is identical to the Traditional method except that wines need not be riddled and disgorged in the same manner. Instead, the bottles are emptied into a pressurized tank and sent through pressurized filters to remove the dead yeast bits (lees). Then, the wines are bottled using pressurized fillers. You’ll find this method used most commonly for non-standard sized bottles (splits or jerobaum and above)',
          image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
        }, {
          stage: 2,
          title: 'Tank Method',
          content: 'The tank method came about during the industrial advancements made in the early 20th century and is the main process used for Prosecco and Lambrusco wines. The major difference between the tank method and the traditional method is the removal of the individual bottle as the vessel used to turn a still wine into a sparkling one. Instead, base wines are added together with the sugar and yeast mixture (Tirage) into a large tank. As the wine has a second fermentation, the CO2 released from the fermentation causes the tank to pressurize, whereafter wines are then filtered, dosed (with Expedition liqueur) and bottled without aging. Tank method sparkling wines have a much more freshly made character with stronger secondary (yeasty) flavors. Some may argue that the tank method is not as high-quality of a production method as the traditional method of sparkling wine. While the process is more affordable (and thus is popular with lower quality wines), it is still used for fine sparkling winemaking.',
          image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
        }, {
          stage: 3,
          title: 'A quick guide to major regions/styles of sparkling wine',
          content: 'Prosecco: This is a sparkling wine made in Veneto and Friuli, northern Italy. It is made using a grape variety called glera. It is made using the tank method to retain the floral, fruity notes, and reduce the influence the lees would otherwise have. Prosecco can only be white, not rosé. Prosecco can be made at various sweetness levels. Prosecco has become incredibly popular over the last decade, and has become a members firm favourite. As Prosecco gains worldwide acclaim there are interesting things happening at the top end of the market to maintain quality: new legislation has recognised particular areas as being of higher class, eg. Valdobbiadene DOCG, and the category is generally growing. Cava: Is a sparkling wine of recognised premium origin (DO - denominación de origen) made in Spain though unlike other DOs it is not restricted to a particular area. The majority is produced in Penedès in Catalonia but cavas are made in many other recognised regions in Spain - for example Bodegas Muga s Conde de Haro is from Rioja. The most popular and traditional grape varieties are macabeu, parellada, and xarel?lo, although increasingly cavas are being made from the traditional Champagne varieties, chardonnay and pinot noir. Cava is always made using the traditional method. Cava must be aged on the lees after secondary fermentation for a minimum of nine months. For it to be labelled as Reserva it must have 15 months, and Gran Reserva 30 months. Cava can be made in both white and rosé styles. Cava can be made at various sweetness levels. Cava has an important historical significance within Spanish celebrations and good cava can be excellent quality and can usually offer better value than alternative premium sparkling wines (including Champagne). Sadly over the past 20-30 years cava s reputation has been muddied by inexpensive, high-volume low quality examples being widely available in the UK. Rest assured, The Wine Society only selects the best traditional cavas for members which truly show great quality and character. Crémant:  This term refers to many sparkling wines made across France and translates as creamy, a reference to the texture of the bubbles in these wines. In France there are eight appellations that are designated as crémant regions - Alsace, Bordeaux, Burgundy, Jura, Limoux, Loire, Savoir and Rhône (known here as Crémant de Die). Under French appellation law there are many stipulations on the production of crémant including that the harvest must be by hand, it must be made using the traditional method and must be aged for a minimum of a year on the lees Crémants can be made using many different grapes relevant to the region of production. The Loire is the largest crémant producing region in France. Well-made crémants have always been popular at The Wine Society offering great value, quality and character.',
          image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
        }
        ],
        //////  lesson end  //////////////////////////////////////////////////////////////////
        //////  test start  //////////////////////////////////////////////////////////////////

        tests: [{
          stage: 1,
          question: 'The sparkling wine is bubly thnks to:',
          answer: 'CO2',
          options: ['Sugar', 'Yeast', 'CO2']
        }, {
          stage: 2,
          question: 'Which is the method champagne is made',
          answer: 'Traditional Method',
          options: ['Traditional Method', 'Transfer Method']
        }, {
          stage: 3,
          question: 'Where is Cava made',
          answer: 'Spain',
          options: ['Spain', 'Italy', 'Germany', 'New Zeeland']
        }]

      //test stop ///////////////////////////////////////////////////////////////////
      }])
      .then(courses => console.log(`${courses.length} courses created!`));
  })
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
