const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authControllers');

router.get('/login', authControllers.login);
router.post('/login', authControllers.loginAccount);
router.get('/register', authControllers.register);
router.post('/register', authControllers.registration);

module.exports = router;