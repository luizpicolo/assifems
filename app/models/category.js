const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  
  const table_name = 'categories';
  const model_name = 'Category';

  const Category = sequelize.define(table_name, {
    name: {
      type: DataTypes.STRING,
    }
 
  });

  Category.associate = function(models) {
      Category.hasMany(models.Establishment, {as: "establishments"})
  };

  Category.model_name = function () {
    return model_name
  };
  
  return Category;
}
