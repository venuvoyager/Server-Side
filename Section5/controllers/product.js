const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll((products) =>{
        res.render("shop", {pageTitle: 'Shop', path: '/', prods: products})
    });
}

exports.getAddProducts = (req, res, next) => {
    res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'})
}

exports.postProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    console.log(res.body);
    res.redirect("/");
}