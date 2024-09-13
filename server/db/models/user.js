'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Favourite, Advertisment }) {
      this.hasMany(Favourite, { foreignKey: 'userId' });
      this.belongsToMany(Advertisment, {
        through: Favourite,
        foreignKey: 'userId',
    })
  }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
