const express = require('express');
const productController = require('../controllers/product');

const router = express.Router();

router.get('/add-product', productController.getAddProducts);

router.post('/add-product', productController.postProduct)

module.exports = router;