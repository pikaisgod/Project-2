const express = require('express');
const router = express.Router();
const restockController = require('../controllers/restockController');

router.get('/', restockController.showRestockPage);
router.post('/restock', restockController.restockProduct);

module.exports = router;
