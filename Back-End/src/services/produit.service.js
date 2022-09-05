const db = require('../helpers/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


module.exports = {
    getAll,
    getByNom,
    getById,
    create,
    update,
    delete: _delete
};


async function getAll() {
    return await db.produit.findAll();
}

async function getById(id) {
    return await getproduit(id);
}

async function getByNom(nom) {
    return await getproduitNom([nom]);
}

async function create(params) {
    // validate
    if (await db.produit.findOne({ where: { nom: params.nom } })) {
        throw 'nom "' + params.nom + '" is already taken';
    }
    // save produit
    await db.produit.create(params);
}

async function update(id, params) {
    const produit = await getproduit(id);

    // validate
    const nomChanged = params.nom && user.nom !== params.nom;
    if (nomChanged && await db.produit.findOne({ where: { nom: params.nom } })) {
        throw 'nom "' + params.nom + '" is already taken';
    }

   
    // copy params to produit and save
    Object.assign(produit, params);
    await produit.save();

    return omitHash(produit.get());
}

async function _delete(id) {
    const produit = await getproduit(id);
    await produit.destroy();
}

async function getproduit(id) {
    const produit = await db.produit.findByPk(id);
    if (!produit) throw 'produit not found';
    return produit;
}
async function getproduitNom(nom) {
    const produit = await db.produit.findOne({ where: { nom: nom }} );
    if (!produit) throw 'produit not found';
    return produit;
}

function omitHash(produit) {
    const { hash, ...userWithoutHash } = produit;
    return produitWithoutHash;
}