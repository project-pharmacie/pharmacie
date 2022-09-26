const Joi = require("joi");
const produitService = require("../services/produit.service");
const validateRequest = require("../middleware/validate-request");

function registerSchema(req, res, next) {
  const schema = Joi.object({
    nom: Joi.string().required(),
    etat: Joi.string().required(),
    photo: Joi.string().required(),
  });
  validateRequest(req, next, schema);
}

function register(req, res, next) {
  produitService
    .create(req.body)
    .then(() => res.json({ message: "Registration successful" }))
    .catch(next);
}

function getAll(req, res, next) {
  produitService
    .getAll()
    .then((produit) => res.json(produit))
    .catch(next);
}

function getById(req, res, next) {
  produitService
    .getById(req.params.id)
    .then((produit) => res.json(produit))
    .catch(next);
}

function getByNom(req, res, next) {
  console.log(req.params.name, "=>>>>>>>");
  produitService
    .getByNom(req.params.nom)
    .then((produit) => res.json([produit]))
    .catch(next);
}

function updateSchema(req, res, next) {
  const schema = Joi.object({
    nom: Joi.string().empty(""),
    etat: Joi.string().empty(""),
    photo: Joi.string().empty("")
  });
  validateRequest(req, next, schema);
}

function update(req, res, next) {
  produitService
    .update(req.params.id, req.body)
    .then((produit) => res.json(produit))
    .catch(next);
}

function _delete(req, res, next) {
  produitService
    .delete(req.params.id)
    .then(() => res.json({ message: "produit deleted successfully" }))
    .catch(next);
}

module.exports = {
  getAll,
  getByNom,
  register,
  registerSchema,
  getById,
  update,
  updateSchema,
  _delete,
};
