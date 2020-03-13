const express = require('express');
const router = express.Router();
const lectures = require('../controllers/lectures')

router.get('/', lectures.getAll);

router.get('/:id', lectures.getById);

router.post('/', lectures.validateInput, lectures.add);

router.delete('/:id', lectures.del);

module.exports = router;
