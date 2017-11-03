const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const s3 = require('../lib/s3');

const achievementSchema = new mongoose.Schema({
  course: { type: String, required: false },
  score: { type: String, required: false }
});


const userSchema = new mongoose.Schema({
  firstname: { type: String},
  lastname: { type: String},
  username: { type: String, required: true },
  image: { type: String, required: true },
  coverImage: { type: String, default: 'http://www.trendycovers.com/covers/color_your_life_facebook_cover_1345918363.jpg' },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  facebookId: {type: String },
  admin: {type: Boolean, default: false },
  achievements: [achievementSchema]
});


userSchema
  .path('image')
  .set(function getPreviousImage(image) {
    this._image = this.image;
    return image;
  });

userSchema
  .virtual('imageSRC')
  .get(function getImageSRC() {
    if(!this.image) return null;
    if(this.image.match(/^http/)) return this.image;
    return `https://s3-eu-west-1.amazonaws.com/${process.env.AWS_BUCKET_NAME}/${this.image}`;
  });

userSchema.pre('save', function checkPreviousImage(next) {
  if(this.isModified('image') && this._image && !this._image.match(/^http/)) {
    return s3.deleteObject({ Key: this._image }, next);
  }
  next();
});

userSchema.pre('remove', function removeImage(next) {
  if(this.image && !this.image.match(/^http/)) {
    return s3.deleteObject({ Key: this.image }, next);
  }
  next();
});





userSchema.virtual('courses', {
  ref: 'Course',
  localField: '_id', // use the _id field from this schema
  foreignField: 'createdBy' // to match up with the createdBy field in the Post schema
});

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function checkPassword(next) {
  if(this.isModified('password') && this._passwordConfirmation !== this.password) {
    this.invalidate('passwordConfirmation', 'Passwords do not match');
  }
  next();
});

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
