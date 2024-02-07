const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('temperament', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id: {
        type: DataTypes.UUID,
        defautValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      }
    });
  };