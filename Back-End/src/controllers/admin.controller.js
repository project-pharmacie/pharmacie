const Joi = require('joi');
const validateRequest = require('../middleware/validate-request');
const AdminService = require('../services/admin.service');
let alert = require('alert'); 


function authenticateSchema(req, res, next) {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
    });
    validateRequest(req, next, schema);
}

function authenticate(req, res, next) {
    AdminService.authenticate(req.body)
        .then(admin => res.json(admin))
        .catch(next);
}

function registerSchema(req, res, next) {
    const schema = Joi.object({
        username: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().min(1).required(),
       
    });
    validateRequest(req, next, schema);
}

function register(req, res, next) {
    AdminService.create(req.body)
        .then(() => res.json({ status: 'success', message: 'Registration successful' }))
        .catch( ()=> res.json({ status: 'error', error: error}));
        
}

function getAll(req, res, next) {
    AdminService.getAll()
        .then(admins => res.json(admins))
        .catch(next);
}

function getCurrent(req, res, next) {
    res.json(req.admins);
}

function getById(req, res, next) {
    AdminService.getById(req.params.id)
        .then(admin => res.json(admin))
        .catch(next);
}




module.exports = {authenticate,authenticateSchema,getAll,register,registerSchema,getCurrent,
                   getById};