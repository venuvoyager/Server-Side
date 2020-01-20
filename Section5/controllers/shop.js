const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll((products) =>{
        res.render("shop/product-list", {
            pageTitle: 'Shop', 
            path: '/product-list', 
            prods: products
        });
    });
}

exports.getIndex = (req, res, next) => {
    const products = Product.fetchAll((products) =>{
        res.render('shop/index', {
            path: '/',
            pageTitle: 'Shop',
            prods: products
        })
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Cart'
    })
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'My Orders'
    })
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout',
    })
}

