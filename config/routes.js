const router = require('express').Router();
const courses  = require('../controllers/courses');
const auth  = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/courses')
  .get(courses.courseIndex)
  .post(courses.courseCreate);

router.route('/courses/:id')
  .get(courses.courseShow)
  .put(courses.courseUpdate)
  .delete(courses.courseDelete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/users/:id')
//   .put(auth.userUpdate)
  .get(secureRoute, auth.userShow);

router.route('/users')
  .get(auth.usersIndex);

router.all('/*', (req, res) => res.notFound());


module.exports = router;
