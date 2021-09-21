// Rutas para book
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// api/books
router.post('/', bookController.crearBook);
router.get('/', bookController.obtainBooks);
router.put('/:id', bookController.actualizarBook);
router.get('/:id', bookController.obtainBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;