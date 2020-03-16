const express = require('express');
const lecturesRouter = express.Router();
const lecturesController = require('../controllers/lectures')

lecturesRouter.get('/', lecturesController.getAll);

lecturesRouter.get('/bycourse/:course_id', lecturesController.getByCourseId);

lecturesRouter.get('/:id', lecturesController.getById);

lecturesRouter.post('/add/:course_id', lecturesController.add);

lecturesRouter.delete('/:id', lecturesController.del);

module.exports = lecturesRouter;
