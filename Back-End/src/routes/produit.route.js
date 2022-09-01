const express = require("express");
const router = express.Router();
const authorize = require("../middleware/authorise");
const ProduitController = require("../controllers/produit.controller");

// routes
router.post(
  "/register",
  ProduitController.registerSchema,
  ProduitController.register
);
router.get('/:id', ProduitController.getById);
router.get("/", ProduitController.getAll);
router.get('/:nom', ProduitController.getByNom);
router.put('/:id', ProduitController.updateSchema,ProduitController.update);
router.delete('/:id',ProduitController._delete);

module.exports = router;
