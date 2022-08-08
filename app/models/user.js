const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  
  const table_name = 'users';
  const model_name = 'User';

  const User = sequelize.define(table_name, {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  });

  User.associate = function(models) {
    
  };

  User.model_name = function () {
    return model_name
  };
  
  return User;
}
