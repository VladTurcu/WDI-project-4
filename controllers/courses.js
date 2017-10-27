const Course = require('../models/course');

function courseIndex(req, res, next) {
  Course
    .find()
    .exec()
    .then(shops => res.json(shops))
    .catch(next);
}

function courseShow(req, res, next) {
  Course
    .findById(req.params.id)
    .exec()
    .then((course) => {
      if(!course) return res.notFound();
      res.json(course);
    })
    .catch(next);
}

function courseCreate(req, res, next) {
  Course
    .create(req.body)
    .then(course => res.status(201).json(course))
    .catch(next);
}

function courseUpdate(req, res, next) {
  Course
    .findById(req.params.id)
    .exec()
    .then((course) => {
      if(!course) return res.notFound();
      course = Object.assign(course, req.body);
      return course.save();
    })
    .then(course => res.json(course))
    .catch(next);
}

function courseDelete(req, res, next) {
  Course
    .findById(req.params.id)
    .exec()
    .then((course) => {
      if(!course) return res.notFound();
      return course.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  courseIndex: courseIndex,
  courseShow: courseShow,
  courseCreate: courseCreate,
  courseUpdate: courseUpdate,
  courseDelete: courseDelete
};
