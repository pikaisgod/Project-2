const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Get all products
router.get('/', productController.getProducts);

// Show form to create a new product
router.get('/add', (req, res) => {
    res.render('products/addProduct', { title: 'Add Product' });
});

// Add a new product
router.post('/add', productController.addProduct);

// Get a single product by ID for editing
router.get('/:id/edit', productController.getProduct);

// Update a product
router.post('/:id/edit', productController.updateProduct);

// Delete a product
router.post('/:id/delete', productController.deleteProduct);

module.exports = router;
