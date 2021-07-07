const Book = require('../lib/models/Books');
const Comment = require('../lib/models/Comments');
const chance = require('chance').Chance();

module.exports = async({ booksToCreate = 10, commentsToCreate = 100 } = {}) => {
  
  const author = ['Johnny Walker', 'Fredrick Dinglehoff', 'Mary Ripe Lotus'];
  const books = await Book.create([...Array(booksToCreate)].map(() => ({
    author: chance.pickone(author),
    book: chance.paragraph()
  })));

  await Comment.create([...Array(commentsToCreate)].map(() => ({
    bookId: chance.pickone(books)._id,
    author: chance.pickone(author),
    text: chance.sentence()
  })));
};
