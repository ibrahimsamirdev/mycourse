const express = require('express');
const coursersRouter = express.Router();
const coursesController = require('../controllers/courses');

coursersRouter.get('/', coursesController.getAll);

coursersRouter.get('/byuser/:user_id', coursesController.getByUserId);

coursersRouter.get('/findOne/:course_id', coursesController.getById);

coursersRouter.post('/add/:user_id', coursesController.add);

coursersRouter.delete('/:id', coursesController.del);

module.exports = coursersRouter;
