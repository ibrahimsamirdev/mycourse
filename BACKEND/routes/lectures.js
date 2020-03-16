const express = require('express');
const lecturesRouter = express.Router();
const lecturesController = require('../controllers/lectures');
const { videoUploader } = require('../middleware/videoUploader');


lecturesRouter.get('/', lecturesController.getAll);

lecturesRouter.get('/bycourse/:course_id', lecturesController.getByCourseId);

lecturesRouter.get('/:id', lecturesController.getById);

lecturesRouter.post('/add/:course_id', videoUploader.single('test_video'),
    lecturesController.add);

lecturesRouter.delete('/:id', lecturesController.del);

module.exports = lecturesRouter;
