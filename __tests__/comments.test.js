const { getComment, getComments, getBook } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('comment routes', () => {
  it('creates a comment', async() => {
    const book = await getBook();

    return request(app)
      .post('/api/v1/comments')
      .send({
        bookId: book._id,
        author: 'test',
        text: 'test 1234'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          bookId: book._id,
          author: 'test',
          text: 'test 1234',
          __v: 0
        });
      });
  });

  it('gets a comment by id', async() => {
    // const book = await getBook();
    const comment = await getComment();

    return request(app)
      .get(`/api/v1/comments/${comment._id}`)
      .then(res => {
        expect(res.body).toEqual({
          ...comment,
          // bookId: book._id
        });
      });
  });

  it('updates a comment by id', async() => {
    const comment = await getComment();

    return request(app)
      .patch(`/api/v1/comments/${comment._id}`)
      .send({ text: 'bad!' })
      .then(res => {
        expect(res.body).toEqual({
          ...comment,
          text: 'bad!'
        });
      });
  });

  it('deletes a comment by id', async() => {
    const comment = await getComment();

    return request(app)
      .delete(`/api/v1/comments/${comment._id}`)
      .then(res => {
        expect(res.body).toEqual(comment);
      });
  });

});
