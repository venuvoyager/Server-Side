const Product = require('../models/product');

exports.getAddProducts = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product'
    });
}

exports.getEditProduct = (req, res, next) => {
    const prodId = req.params.productId;
    const isEditing = req.query.edit;
    Product.findById(prodId, product => {
        res.render('admin/edit-product', {
            pageTitle: 'Edit Product', 
            path: '/admin/edit-product',
            product: product,
            isEditing: isEditing,
            price: 10.00
        });
    })
}

exports.postEditProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product', 
        path: '/admin/products'
    });
}

exports.postProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, price, description);
    product.save();
    console.log(res.body);
    res.redirect("/");
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) =>{
        res.render("admin/products", {
            pageTitle: 'Admin Products', 
            path: '/admin/products', 
            prods: products
        });
    });
}