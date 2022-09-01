const express = require('express');
const router = express.Router();
const authorize = require('../middleware/authorise')
const UserController = require("../controllers/user.controller");

// routes

 router.post('/authenticate',
 UserController.authenticateSchema,
 UserController.authenticate
 );
 router.post('/register',
 UserController.registerSchema,
 UserController.register
 );
 router.get('/', UserController.getAll);
 router.get('/current', UserController.getCurrent);
 router.get('/:id', UserController.getById);
 router.put('/:id', UserController.updateSchema,UserController.update);
 router.delete('/:id', UserController._delete);

 module.exports = router;