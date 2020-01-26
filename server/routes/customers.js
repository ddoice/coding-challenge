const express = require('express');
const router = express.Router();
const CustomerController = require("../controllers/customer");
const customerController = new CustomerController();

router.get('/all', (...args) => customerController.getAllCustomers(...args));

router.get('/:id', (...args) => customerController.getCustomer(...args));

router.post('/', (...args) => customerController.addNewCustomer(...args));

router.put('/:id', (...args) => customerController.updateCustomer(...args));

router.delete('/:id', (...args) => customerController.deleteCustomer(...args));

module.exports = router;