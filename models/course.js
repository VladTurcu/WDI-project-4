const mongoose = require('mongoose');
const s3 = require('../lib/s3');

const lessonSchema = new mongoose.Schema({
  stage: { type: Number, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: false }
});

const testSchema = new mongoose.Schema({
  stage: { type: Number, required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true },
  options: [{ type: String, required: true }]
});

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true},
  category: { type: String, required: false },
  description: { type: String, required: false },
  lessons: [ lessonSchema ],
  tests: [ testSchema ]
});

courseSchema
  .path('image')
  .set(function getPreviousImage(image) {
    this._image = this.image;
    return image;
  });

courseSchema
  .virtual('imageSRC')
  .get(function getImageSRC() {
    if(!this.image) return null;
    if(this.image.match(/^http/)) return this.image;
    return `https://s3-eu-west-1.amazonaws.com/${process.env.AWS_BUCKET_NAME}/${this.image}`;
  });

courseSchema.pre('save', function checkPreviousImage(next) {
  if(this.isModified('image') && this._image && !this._image.match(/^http/)) {
    return s3.deleteObject({ Key: this._image }, next);
  }
  next();
});

courseSchema.pre('remove', function removeImage(next) {
  if(this.image && !this.image.match(/^http/)) {
    return s3.deleteObject({ Key: this.image }, next);
  }
  next();
});

module.exports = mongoose.model('Course',courseSchema);
