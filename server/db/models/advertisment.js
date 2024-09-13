'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Advertisment extends Model {
    static associate({ HousingType, Favourite, User }) {
      this.belongsTo(HousingType, { foreignKey: 'typeId' });
      this.belongsToMany(User, {
        through: Favourite,
        foreignKey: 'advertismentId',
      });
      this.hasMany(Favourite, { foreignKey: 'advertismentId' });
    }
  }
  Advertisment.init(
    {
      typeId: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      photo: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Advertisment',
    },
  );
  return Advertisment;
};
