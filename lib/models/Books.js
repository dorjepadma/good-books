const mongoose = require ('mongoose');


const bookSchema = new mongoose.Schema({
  Book: {
    type: String,
    required: true
  },
  Author: {
    type: String,
    required: true
  }
});

// bookSchema.pre('save', function(next) {
//   if(this.text) return next();
//   getbook()
//     .then (randombook => this.text = randombook)
//     .then(() => next());  
// });

module.exports = mongoose.model('books', bookSchema);
