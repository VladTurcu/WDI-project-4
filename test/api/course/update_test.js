/* global api, describe, it, before, after, beforeEach, afterEach */
require('../helper');
const jwt = require('jsonwebtoken');
const { secret } = require('../../../config/environment');

const Course = require('../../../models/course');
const User = require('../../../models/user');

const courseData = [
  {
    '_id': '59f8af1e68de04e5ff6e0592',
    'title': 'Somelier basics',
    'image': 'https://images.unsplash.com/photo-1482275548304-a58859dc31b7?w=1955&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
    'category': 'wine',
    'description': 'Learn the basics of wine',
    'tests': [
      {
        'stage': 1,
        'question': 'From wich grape types is the white wine made?',
        'answer': 'From both white and red',
        '_id': '59f8af1e68de04e5ff6e0595',
        'options': [
          'From only white grapes',
          'From only red grapes',
          'From both white and red'
        ],
        'id': '59f8af1e68de04e5ff6e0595'
      },
      {
        'stage': 2,
        'question': 'If red wine can be made from red grapes and white wine can be made from white grapes how is the rosé wine made',
        'answer': 'From only red grapes',
        '_id': '59f8af1e68de04e5ff6e0594',
        'options': [
          'From only white grapes',
          'From only red grapes',
          'From only pink grapes',
          'From both white and red'
        ],
        'id': '59f8af1e68de04e5ff6e0594'
      },
      {
        'stage': 3,
        'question': 'How would you describe a dry wine?',
        'answer': 'A wine that has no traces of sweetnes',
        '_id': '59f8af1e68de04e5ff6e0593',
        'options': [
          'A wine that leaves your muth dry',
          'A wine that has high levelsof alcohol',
          'A wine that is sweet',
          'A wine that has no traces of sweetnes'
        ],
        'id': '59f8af1e68de04e5ff6e0593'
      }
    ],
    'lessons': [
      {
        'stage': 1,
        'title': 'What is wine?',
        'content': 'The standard answer to this question is that Wine is an alcoholic beverage made with the fermented juice of grapes. Which is true, true is also that wine can be made from basically any other fruits, but grapes are the standard in the wine production for two reasons. Firstly, the grapes have an acid that helps preserving the wine over a long period of time (will cover later in the course). Secondly the grapes contain more sugar among the other fruits which we will learn later that is essential for wine quality and preservation over decades.',
        'image': 'https://images.unsplash.com/photo-1474722883778-792e7990302f?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
        '_id': '59f8af1e68de04e5ff6e059c',
        'id': '59f8af1e68de04e5ff6e059c'
      },
      {
        'stage': 1,
        'title': 'How is wine made?',
        'content': 'Mosthly wine harvest includes these basic vine-to-wine steps: 1.\tPick the grapes  2.\tCrush the grapes  3.\tFerment the grapes into wine Pick up the grapes  The grapes are either cut from the vine by human hands with shears or they are removed by a machine. It is important that they are properly ripe. Too ripe or not ripe enough the wine will suffer(you can make bad wine from good grapes, but not a good wine from bad grapes). The grapes are collected in bins or lugs and then transported to the winery where they will be sorted for quality(Removing rotten or raisined grapes). After sorting they go into a machine that removes the stem and crushes them.                                                                                                         Crush the grapes                                                                                                                  The crush literally gets the grape’s juices flowing and is the first step in the process that turns fresh, delicate fruit into delicious, shelf-stable wine. As grape skins are broken                                                                           Fermentation                                                                                                                         The fermentation process turns the sweet grape juice in the alcoholic beverage we call wine.  During this process the yeast turns the sugar into alcohol and carbon dioxide. When the alcohol level reaches 15% the yeast cells dies and all the sugar left remains into the wine. The fermentation process can be stopped by cooling down the tanks or thru a chemical process. Fermentation can be done in stainless steel vats, in a open Wooden vat, inside a wine barrel and inside the wine bottle itself.',
        'image': 'https://images.unsplash.com/photo-1474722883778-792e7990302f?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
        '_id': '59f8af1e68de04e5ff6e059b',
        'id': '59f8af1e68de04e5ff6e059b'
      },
      {
        'stage': 2,
        'title': 'White wine',
        'content': 'White wines can be made from either white or red grapes. The difference during the whole process is that after the crushing of the grapes in order to produce white wine, the skin is separated from the grape juice before the fermentation. White wine can differ in colour as well depending on the grape variety used, the container used for the fermentation or vintage. It can differ in taste and smell depending of where is coming from or the way it was made.',
        'image': 'https://images.unsplash.com/photo-1474722883778-792e7990302f?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
        '_id': '59f8af1e68de04e5ff6e059a',
        'id': '59f8af1e68de04e5ff6e059a'
      },
      {
        'stage': 2,
        'title': 'Red wine',
        'content': 'Red wine is red because the skin of the grapes are present during the fermentation process, being removed only after the fermentation has finished. (you can make white wine from red grapes but you cant make red wine from white grapes) Besides colour the wine get from the skin and seeds of the grapes the tannins. Tannin is a naturally occurring polyphenol found in plants, seeds, bark, wood, leaves, and fruit skins. About 50% of the dry weight of plant leaves are tannins. As a characteristic of wine, tannin adds both bitterness and astringency, as well as complexity. Wine tannins are most commonly found in red wine, although white wines have tannin from being aged in wooden barrels. Red wines age for anywhere from 4 months and 4 years before being bottled. After ageing the wines are filtered prior to bottling.',
        'image': 'https://images.unsplash.com/photo-1474722883778-792e7990302f?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
        '_id': '59f8af1e68de04e5ff6e0599',
        'id': '59f8af1e68de04e5ff6e0599'
      },
      {
        'stage': 2,
        'title': 'Rosé wine',
        'content': 'The rosé wine is a type of wine that incorporates some of the colour from the grape skin. During the fermentation process the skins are allowed to remain in contact with the juice for a short period, typically one to three days.',
        'image': 'https://images.unsplash.com/photo-1474722883778-792e7990302f?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
        '_id': '59f8af1e68de04e5ff6e0598',
        'id': '59f8af1e68de04e5ff6e0598'
      },
      {
        'stage': 3,
        'title': 'Dry wine',
        'content': 'Referring to a wine as “dry” is one of the first descriptors most of us learn as a way to talk about wine, but “dry” is also one of the words that is misused the most often by wine drinkers. The reason the term “dry” gets misused is because we commonly use it rationally, relating the word to sensory characteristics of wine, even though these sensory characteristics are not what we mean when we say a wine is dry. A dry wine is simply a wine that has no residual sugar, meaning it isn’t sweet. When grape juice converts to wine, alcohol is produced in the fermentation process because yeast eats the sugar present in the juice. In many wines, the winemaker stops the fermentation process before the yeast has time to eat all the sugar, leaving the wine a touch sweet. When a winemaker leaves a little sugar behind, we call this residual sugar. To make a dry wine, the winemaker will instead let the fermentation process finish completely, allowing the yeast to consume all the sugar present. No more sugar, so no sugary sweetness; the wine is therefore dry.',
        'image': 'https://images.unsplash.com/photo-1474722883778-792e7990302f?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
        '_id': '59f8af1e68de04e5ff6e0597',
        'id': '59f8af1e68de04e5ff6e0597'
      },
      {
        'stage': 3,
        'title': 'Sparkling wine',
        'content': 'Sparkling wine is a wine with significant levels of carbon dioxide in it, making it fizzy. The best known example of a sparkling wine is champagne, which is exclusively produced in the Champagne region of France. Usually sparkling wine is white or rosé, but there are examples of red sparkling wines such as the Italian Brachetto, the Italian Bonarda, Australian sparkling Shiraz, and Azerbaijani \'Pearl of Azerbaijan\' made from Madrasa grapes. The sweetness of sparkling wine can range from very dry \'brut\' styles to sweeter \'doux\' varieties (from the French words for \'raw\' and \'sweet\', respectively).[1] The sparkling quality of these wines comes from its carbon dioxide content and may be the result of natural fermentation, either in a bottle, as with the traditional methode, in a large tank designed to withstand the pressures involved (as in the Charmat process), or as a result of simple carbon dioxide injection in some cheaper sparkling wines.',
        'image': 'https://images.unsplash.com/photo-1474722883778-792e7990302f?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
        '_id': '59f8af1e68de04e5ff6e0596',
        'id': '59f8af1e68de04e5ff6e0596'
      }
    ],
    'id': '59f8af1e68de04e5ff6e0592'
  }
];

describe('PUT /api/courses/:id', ()=> {

  let course = null;
  let token = null;

  before(done =>{
    User.create({
      firstname: 'vlad',
      lastname: 'turcu',
      username: 'vladislav',
      email: 'email@email.com',
      password: 'test',
      passwordConfirmation: 'test'
    }, (err, user) => {
      token = jwt.sign({ userId: user.id}, secret, {expiresIn: '1hr'});
      done(err);
    });
  });

  after(done => {
    User.collection.remove();
    done();
  });

  beforeEach(done =>{
    Course.create(courseData, (err, courses) => {
      course = courses[0];
      done(err);
    });
  });

  afterEach(done => {
    Course.collection.remove();
    done();
  });

  it('should return a 401 response', done => {
    api
      .put(`/api/courses/${course.id}`)
      .set('Accept', 'application/json')
      .send(courseData[1])
      .expect(401, done);
  });

  it('should return a 200 response with a token', done => {
    api
      .put(`/api/courses/${course.id}`)
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send(courseData[1])
      .expect(200, done);
  });


});
