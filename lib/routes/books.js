const { Router } = require('express');
const Books = require('../models/Books');

// eslint-disable-next-line new-cap
module.exports = Router()
  .post('/', (req, res, next) => {
    Books
      .create(req.body)
      .then(book => res.send(book))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Books
      .find()
      .then(book => res.send(book))
      .catch(next);
  })
  .get('/top-authors', (req, res, next) => {
    Books
      .topAuthors()
      .then(topAuthors => res.send(topAuthors))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Books
      .findById(req.params.id)
      .then(book => res.send(book))
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
    Books
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(book => res.send(book))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Books
      .findByIdAndDelete(req.params.id)
      .then(books => res.send(books))
      .catch(next);
  });

