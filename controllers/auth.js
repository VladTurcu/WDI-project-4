const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');
const User = require('../models/user');

function register(req, res, next) {
  User
    .create(req.body)
    .then(() => res.json({ message: 'Registration successful' }))
    .catch(next);
}

function login(req, res, next) {
  User
    .findOne({ email: req.body.email })
    .then((user) => {
      if(!user || !user.validatePassword(req.body.password)) return res.status(401).json({ message: 'Unauthorized' });
      const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1hr' });
      return res.json({ message: `Welcome back ${user.username}`, token, user });
    })
    .catch(next);
}


function userShow(req, res, next) {
  User
    .findById(req.currentUser.id)
    .populate('courses')
    .exec()
    .then((user) => {
      console.log('controller user >>>', user);
      if(!user) return res.notFound();
      res.status(200).json(user);
    })
    .catch(next);
}

function usersIndex(req, res, next) {
  User
    .find()
    .exec()
    .then(users => res.json(users))
    .catch(next);
}

function userUpdate(req, res, next) {
  if(req.file) req.body.image = req.file.filename;
  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();
      user = Object.assign(user, req.body);
      return user.save();
    })
    .then(user => res.json(user))
    .catch(next);
}



function userDelete(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();
      return user.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}



function achievementCreate(req, res, next) {
  const achievement = req.currentUser.achievements.create(req.body);
  req.currentUser.achievements.push(achievement);

  req.currentUser.save()
    .then(achievement => res.status(201).json(achievement))
    .catch(next);
}




function achievementUpdate(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then((achievement) => {
      if(!achievement) return res.notFound();
      achievement = Object.assign(achievement, req.body);
      return achievement.save();
    })
    .then(achievement => res.json(achievement))
    .catch(next);
}





module.exports = {
  register,
  login,
  usersIndex,
  userShow,
  userUpdate,
  userDelete,
  achievementCreate,
  achievementUpdate
};
