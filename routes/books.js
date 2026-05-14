const express = require('express');
const router = express.Router();
const { getAllBooks, getOneBook, createBook, updateBook, deleteBook } = require('../controllers/books');

router.get('/', getAllBooks);
router.get('/:id', getOneBook);
router.post('/', createBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;