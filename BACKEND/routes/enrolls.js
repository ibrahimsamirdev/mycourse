const express = require('express');
const router = express.Router();
const enrolls = require('../controllers/enrolls')

router.get('/:uid', enrolls.getAll);

router.get('/:uid/:id', enrolls.getById);

router.post('/:uid', enrolls.validateInput, enrolls.add);

router.delete('/:uid/:id', enrolls.del);

router.patch('/:uid/:cid/:id', enrolls.updateEnrollLecture);

module.exports = router;
