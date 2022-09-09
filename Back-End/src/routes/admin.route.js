const express = require('express');
const router = express.Router();
const authorize = require('../middleware/authorise')
const AdminController = require("../controllers/admin.controller");

// routes

 router.post('/authenticate',
 AdminController.authenticateSchema,
 AdminController.authenticate
 );
 router.post('/register',
 AdminController.registerSchema,
 AdminController.register
 );
 router.get('/', AdminController.getAll);
 router.get('/current', AdminController.getCurrent);
 router.get('/:id', AdminController.getById);
 
 module.exports = router;