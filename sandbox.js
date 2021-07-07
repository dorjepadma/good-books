require('dotenv').config();
require('./lib/utils/connect')();
const Book = require('./lib/models/Books');

Book
  .topAuthors()
  .then(topAuthors => console.log(topAuthors));
