const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.post('/login', userController.validateInput, userController.login);

router.post('/signup', userController.validateInput, userController.signup);

router.post('/update', userController.validateInput, userController.update);

module.exports = router;
