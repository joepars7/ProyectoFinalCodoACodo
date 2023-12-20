const express = require('express');
const router = express.Router();
const {
    login,
    loginAccount, 
    register, 
    registration, 
    logout
} = require('../controllers/authControllers');

router.get('/login', login);
router.post('/login', loginAccount);
router.get('/register', register);
router.post('/register', registration);
router.get('/logout', logout)

module.exports = router;