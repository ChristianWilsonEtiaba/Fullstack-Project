// Routes for author
const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

// api/authors
router.post('/', authorController.crearAuthor);
router.get('/', authorController.obtainAuthors);
router.put('/:id', authorController.actualizarAuthor);
router.get('/:id', authorController.obtainAuthor);

module.exports = router;