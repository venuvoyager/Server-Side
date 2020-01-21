const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll((products) =>{
        res.render("shop/product-list", {
            pageTitle: 'Shop', 
            path: '/product-list', 
            prods: products
        });
    });
}

exports.getProduct = (req, res, next) => {
    const productId = req.params.productId;
    Product.findById(productId, product => {
        res.render("shop/product-detail", {
            pageTitle: product.title,
            path: '/product-list',
            product: product
        });
    })
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

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, prod => {
        const price = req.body.price;
        Cart.addProduct(prodId, price);
        res.render('shop/cart', {
            path: '/cart',
            pageTitle: 'Cart',
        })
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

