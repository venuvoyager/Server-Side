const fs = require('fs');
const path = require('path')
const rootDir = require('../util/path')
const p = path.join(rootDir,'data','cart.json');

const fetchCart = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb({products: [], totalPrice: 0})
        }
        cb(JSON.parse(fileContent));
    })
}

module.exports = class Cart {
    static addProduct(id, prodPrice) {
        //Fetch the previous Cart
        fetchCart(cart => {
            const existingProdIndex = cart.products.findIndex(cp => cp.id === id)
            const existingProd = cart.products[existingProdIndex]
            let updatedProd;
            if (existingProd) {
                updatedProd = { ...existingProd }
                updatedProd.qty = existingProd.qty + 1;
                cart.products[existingProdIndex] = updatedProd;
            } else {
                updatedProd = {id: id, qty: 1}
                cart.products.push(updatedProd);
            }
            console.log(cart.totalPrice)
            console.log(prodPrice)
            cart.totalPrice = cart.totalPrice + +prodPrice;
            fs.writeFile(p, JSON.stringify(cart), (err) => {
                console.log(err)
            })
        })
    }
}