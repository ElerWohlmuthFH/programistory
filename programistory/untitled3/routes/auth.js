const express = require('express');
//controller to deal with all data from form
const authController = require('../controllers/auth')
const router = express.Router();

router.post('/register', authController.register);

router.post('/login', authController.login);

router.delete('/delete', authController.delete);

module.exports = router;
