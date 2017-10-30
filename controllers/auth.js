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
      return res.json({ message: `Welcome back ${user.username}`, token });
    })
    .catch(next);
}


function userShow(req, res, next) {
  User
    .findById(req.currentUser.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();
      res.status(200).json(user);
      console.log('user back >>', user);
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


function achievementCreate(req, res, next) {
  const achievement = req.currentUser.achievements.create(req.body);
  req.currentUser.achievements.push(achievement);

  req.currentUser.save()
    .then(achievement => res.status(201).json(achievement))
    .catch(next);
}



module.exports = {
  register,
  login,
  usersIndex,
  userShow,
  achievementCreate
};
