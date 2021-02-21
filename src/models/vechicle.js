// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Vechicle extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Vechicle.init({
//     latitude: DataTypes.DECIMAL,
//     longitude: DataTypes.DECIMAL,
//     time: DataTypes.DATE,
//     license: DataTypes.STRING,
//     model: DataTypes.STRING,
//     engine: DataTypes.STRING,
//     chasis: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Vechicle',
//   });
//   return Vechicle;
// };

module.exports = (sequelize, DataTypes) => {
  const Vehicles = sequelize.define('Vehicles', {
    latitude: {
      type: DataTypes.DECIMAL,
    },
    longitude: {
      type: DataTypes.DECIMAL,
    },
    time: {
      type: DataTypes.DATE,
    },
    license: {
      type: DataTypes.STRING,

    },
    model: {
      type: DataTypes.STRING,
    },
    engine: {
      type: DataTypes.STRING,
    },
    chasis: {
      type: DataTypes.STRING,
    },

  });

  return Vehicles;
};