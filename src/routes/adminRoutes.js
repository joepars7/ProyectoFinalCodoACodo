const express = require('express');
const router = express.Router();
const {
    admin, 
    create, 
    createAdmin, 
    editIDView, 
    editID, 
    deleteID
}= require('../controllers/adminControllers');

router.get('/', admin);
router.get('/create', create);
router.post('/create', createAdmin);
router.get('/edit/:id', editIDView);
router.put('/edit/:id', editID);
router.delete('/delete/:id', deleteID);

module.exports = router;