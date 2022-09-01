const express = require('express');
const router = express.Router();
const authorize = require('../middleware/authorise')
const PharmacieController = require("../controllers/pharmacie.controller");

// routes
router.post('/register',
PharmacieController.registerSchema, 
PharmacieController.register
);
router.get('/',PharmacieController.getAll);
router.get('/:id',PharmacieController.getById);
router.put('/:id',PharmacieController.updateSchema, PharmacieController.update);
router.delete('/:id', PharmacieController._delete);

module.exports = router;