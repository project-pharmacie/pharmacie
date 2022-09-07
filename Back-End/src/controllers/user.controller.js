const Joi = require('joi');
const validateRequest = require('../middleware/validate-request');
const userService = require('../services/user.service');
let alert = require('alert'); 


function authenticateSchema(req, res, next) {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
    });
    validateRequest(req, next, schema);
}

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => res.json(user))
        .catch(next);
}

function registerSchema(req, res, next) {
    const schema = Joi.object({
        username: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().min(1).required(),
        adress: Joi.string().required(),
        role: Joi.string().min(1).required(),
    });
    validateRequest(req, next, schema);
}

function register(req, res, next) {
    userService.create(req.body)
        .then(() => res.json({ status: 'success', message: 'Registration successful' }))
        .catch( ()=> res.json({ status: 'error', error: error}));
        
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(next);
}

function getCurrent(req, res, next) {
    res.json(req.users);
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => res.json(user))
        .catch(next);
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        username: Joi.string().empty(''),
        email: Joi.string().empty(''),
        password: Joi.string().min(1).empty(''),
        adress: Joi.string().empty(''),
        role: Joi.string().empty(''),
    });
    validateRequest(req, next, schema);
}

function update(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(user => res.json(user))
        .catch(next);
}

function _delete(req, res, next) {
    userService.delete(req.params.id)
        .then(() => res.json({ message: 'User deleted successfully' }))
        .catch(next);
}

module.exports = {authenticate,authenticateSchema,getAll,register,registerSchema,getCurrent,
                   getById,updateSchema,update,_delete};