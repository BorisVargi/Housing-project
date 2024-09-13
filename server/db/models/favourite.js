'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favourite extends Model {
    static associate({ User, Advertisment }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Advertisment, { foreignKey: 'advertismentId' });
    }
  }
  Favourite.init({
    userId: DataTypes.INTEGER,
    advertismentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favourite',
  });
  return Favourite;
};
