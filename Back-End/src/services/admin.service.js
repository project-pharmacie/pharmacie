const config = require('../../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../helpers/db');

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
};

async function authenticate({ username, password }) {
    const admin = await db.Admin.scope('withHash').findOne({ where: { username } });

    if (!admin || !(await bcrypt.compare(password, admin.hash)))
        throw 'Username or password is incorrect';

    // authentication successful
    const token = jwt.sign({ sub: admin.id }, config.secret, { expiresIn: '7d' });
    return { ...omitHash(admin.get()), token };
}

async function getAll() {
    return await db.Admin.findAll();
}

async function getById(id) {
    return await getAdmin(id);
}

async function create(params) {
    // validate
    if (await db.Admin.findOne({ where: { username: params.username } })) {
        throw 'Username "' + params.username + '" is already taken';
    }

    // hash password
    if (params.password) {
        params.hash = await bcrypt.hash(params.password, 10);
    }

    // save user
    await db.Admin.create(params);
}


// helper functions

async function getAdmin(id) {
    const admin = await db.Admin.findByPk(id);
    if (!admin) throw 'Admin not found';
    return admin;
}

function omitHash(admin) {
    const { hash, ...adminWithoutHash } = admin;
    return adminWithoutHash;
}