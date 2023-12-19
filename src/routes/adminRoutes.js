const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminControllers');

router.get('/', adminControllers.admin);
router.get('/create', adminControllers.create);
router.post('/create', adminControllers.createAdmin);
router.get('/edit/:id', adminControllers.editIDView);
router.put('/edit/:id', adminControllers.editID);
router.delete('/delete/:id', adminControllers.delete);

module.exports = router;