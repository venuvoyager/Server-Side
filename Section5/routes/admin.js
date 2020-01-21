const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/products', adminController.getProducts);

router.get('/add-product', adminController.getAddProducts);
router.post('/add-product', adminController.postProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);
router.post('/edit-product/:productId', adminController.postEditProduct);

module.exports = router;