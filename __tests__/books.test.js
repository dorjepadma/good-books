const { getBook, getBooks, getComments } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');
// const Book = require('../lib/models/Books');
// const Comment = require('../lib/models/Comments');

describe('book routes', () => {
  it('creates a book', () => {
    return request(app)
      .post('/api/v1/books')
      .send({
        author: 'test',
        book: 'test 1234'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          author: 'test',
          book: 'test 1234',
          __v: 0
        });
      });
  });

  it('gets a book by id', async() => {
    const book = await getBook();
    const comments = await getComments({ bookId: book._id });

    return request(app)
      .get(`/api/v1/books/${book._id}`)
      .then(res => {
        expect(res.body).toEqual({
          ...book,
        });
      });
  });

  it('gets all books', async() => {
    const books = await getBooks();

    return request(app)
      .get('/api/v1/books')
      .then(res => {
        expect(res.body).toEqual(books);
      });
  });

  it('updates a book by id', async() => {
    const book = await getBook();

    return request(app)
      .patch(`/api/v1/books/${book._id}`)
      .send({ book: '1234 test' })
      .then(res => {
        expect(res.body).toEqual({
          ...book,
          book: '1234 test'
        });
      });
  });

  it('deletes a book by id', async() => {
    const book = await getBook();
    
    return request(app)
      .delete(`/api/v1/books/${book._id}`)
      .then(res => {
        expect(res.body).toEqual(book);
     
      });
  });
});
