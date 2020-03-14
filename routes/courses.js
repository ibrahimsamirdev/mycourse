const express = require('express');
const coursersRouter = express.Router();
const coursesController = require('../controllers/courses');

coursersRouter.get('/', coursesController.getAll);

coursersRouter.get('/:id', coursesController.getById);

coursersRouter.post('/add',  coursesController.add);

coursersRouter.delete('/:id', coursesController.del);

module.exports = coursersRouter;
