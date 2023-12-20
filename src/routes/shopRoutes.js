const express = require('express');
const router = express.Router();
const {
    shop, 
    itemID, 
    addItem, 
    cart, 
    addCart
} = require('../controllers/shopControllers');

router.get('/', shop);
router.get('/item/:id', itemID);
router.post('/item/:id/add', addItem);
router.get('/cart', cart);
router.post('/cart', addCart);


module.exports = router;