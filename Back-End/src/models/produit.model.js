const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
    
        nom: { type: DataTypes.STRING, allowNull: false },
        etat: { type: DataTypes.STRING, allowNull: false },
    };

    const options = {
        defaultScope: {
            // exclude hash by default
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };
   
    return sequelize.define('produit', attributes, options);
}