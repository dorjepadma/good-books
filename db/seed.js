const Book = require('../lib/models/Books');
const Comment = require('../lib/models/Comments');
const chance = require('chance').Chance();

// specifying the number of Books to create with our seed function
module.exports = async({ booksToCreate = 10, commentsToCreate = 100 } = {}) => {
  // creating Books
  // creating an array of BooksToCreate length
  // map through the array
  // -> for each item in the array we create an object with { handle, text }
  // for each tweet in the mapped array we create a tweet in our mongodb
  const author = ['Johnny Walker', 'Fredrick Dinglehoff', 'Mary Ripe Lotus'];
  const books = await Book.create([...Array(booksToCreate)].map(() => ({
    author: chance.pickone(author),
    text: chance.paragraph()
  })));

  await Comment.create([...Array(commentsToCreate)].map(() => ({
    bookId: chance.pickone(books)._id,
    author: chance.pickone(author),
    text: chance.sentence()
  })));
};
