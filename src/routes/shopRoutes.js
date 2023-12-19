const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopControllers');

router.get('/', shopControllers.shop);
router.get('/item/:id', shopControllers.itemID);
router.post('/item/:id/add', shopControllers.addItem);
router.get('/cart', shopControllers.cart);
router.post('/cart', shopControllers.addCart);


module.exports = router;