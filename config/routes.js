const router = require('express').Router();
const courses  = require('../controllers/courses');
const auth  = require('../controllers/auth');
const oauth  = require('../controllers/oauth');
const secureRoute = require('../lib/secureRoute');
const imageUpload = require('../lib/imageUpload');

router.route('/courses')
  .get(courses.courseIndex)
  .post(imageUpload, secureRoute, courses.courseCreate);

router.route('/courses/:id')
  .get(courses.courseShow)
  .put(imageUpload, secureRoute, courses.courseUpdate)
  .delete(secureRoute, courses.courseDelete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/users/:id')
  .get(secureRoute, auth.userShow)
  .put(secureRoute, auth.userUpdate)
  .put(secureRoute, auth.achievementUpdate);

router.route('/users')
  .get(auth.usersIndex);

router.route('/achievements')
  .post(secureRoute, auth.achievementCreate);


router.route('/oauth/facebook')
  .post(oauth.facebook);

router.all('/*', (req, res) => res.notFound());


module.exports = router;
