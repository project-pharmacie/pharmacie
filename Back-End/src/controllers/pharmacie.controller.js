const Joi = require('joi');
const PharmacieService = require('../services/pharmacie.service');
const validateRequest = require('../middleware/validate-request');



function registerSchema(req, res, next) {
  const schema = Joi.object({
      username: Joi.string().required(),
      email: Joi.string().required(),
      telephone: Joi.string().required(),
      adress: Joi.string().required(),
      localisation: Joi.string().min(6).required(),
     
  });
  validateRequest(req, next, schema);
}

function register(req, res, next) {
  PharmacieService.create(req.body)
      .then(() => res.json({ message: 'Registration successful' }))
      .catch(next);
}



function getAll(req, res, next) {
  PharmacieService.getAll()
      .then(pharmacie => res.json(pharmacie))
      .catch(next);
}


function getById(req, res, next) {
  PharmacieService.getById(req.params.id)
      .then(pharmacie => res.json(pharmacie))
      .catch(next);
}

function updateSchema(req, res, next) {
  const schema = Joi.object({
    nom: Joi.string().required(),
    email: Joi.string().required(),
    telephone: Joi.string().required(),
    adress: Joi.string().required(),
    localisation: Joi.string().min(6).required(),
   
  });
  validateRequest(req, next, schema);
}


function update(req, res, next) {
  PharmacieService.update(req.params.id, req.body)
      .then(pharmacie => res.json(pharmacie))
      .catch(next);
}

function _delete(req, res, next) {
  PharmacieService.delete(req.params.id)
      .then(() => res.json({ message: 'pharmacie deleted successfully' }))
      .catch(next);
}

module.exports = { register,registerSchema,getAll,getById,update,updateSchema,_delete };