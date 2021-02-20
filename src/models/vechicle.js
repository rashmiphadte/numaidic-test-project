'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vechicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Vechicle.init({
    latitude: DataTypes.DECIMAL,
    longitude: DataTypes.DECIMAL,
    time: DataTypes.DATE,
    license: DataTypes.STRING,
    model: DataTypes.STRING,
    engine: DataTypes.STRING,
    chasis: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vechicle',
  });
  return Vechicle;
};