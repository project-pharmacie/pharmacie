const bcrypt = require('bcryptjs');
const db = require('../helpers/db');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};


async function getAll() {
    return await db.pharmacie.findAll();
}

async function getById(id) {
    return await getpharmacie(id);
}

async function create(params) {
    // validate
    if (await db.pharmacie.findOne({ where: { username: params.username } })) {
        throw 'Username "' + params.username + '" is already taken';
    }

    // hash password
    if (params.password) {
        params.hash = await bcrypt.hash(params.password, 10);
    }

    // save pharmacie
    await db.pharmacie.create(params);
}

async function update(id, params) {
    const pharmacie = await getpharmacie(id);

    // validate
    const usernameChanged = params.username && pharmacie.username !== params.username;
    if (usernameChanged && await db.pharmacie.findOne({ where: { username: params.username } })) {
        throw 'Username "' + params.username + '" is already taken';
    }

    // hash password if it was entered
    if (params.password) {
        params.hash = await bcrypt.hash(params.password, 10);
    }

    // copy params to pharamcie and save
    Object.assign(pharmacie, params);
    await pharmacie.save();

    return omitHash(pharmacie.get());
}

async function _delete(id) {
    const pharmacie = await getpharmacie(id);
    await pharmacie.destroy();
}

// helper functions

async function getpharmacie(id) {
    const pharmacie = await db.pharmacie.findByPk(id);
    if (!pharmacie) throw 'pharmacie not found';
    return pharmacie;
}

 function omitHash(pharamcie) {
     const { hash, ...pharamcieWithoutHash } = pharamcie;
     return pharmacieWithoutHash;
 }