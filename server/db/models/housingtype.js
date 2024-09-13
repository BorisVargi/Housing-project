'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HousingType extends Model {
      static associate({ Advertis.ment }) {
        this.hasMany(Advertisment, { foreignKey: 'typeId' });
    }
  }
  HousingType.init({
    type: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'HousingType',
  });
  return HousingType;
};
