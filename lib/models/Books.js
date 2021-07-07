const mongoose = require ('mongoose');


const bookSchema = new mongoose.Schema({
  book: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
});

bookSchema.statics.topAuthors = function() {
  return this
    .aggregate([
      {
        '$group': {
          '_id': '$author', 
          'count': {
            '$sum': 1
          }, 
          'allBooks': {
            '$push': '$text'
          }
        }
      }, {
        '$sort': {
          'count': -1
        }
      }
    ]);
};

module.exports = mongoose.model('Book', bookSchema);
