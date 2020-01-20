const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.render('add-product', {pageTitle: 'Add Product', path: 'admin/add-product'})
});

router.post('/add-product', (req, res, next) => {
    console.log(res.body);
    res.redirect("/");
})

module.exports = router;