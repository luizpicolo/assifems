const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  
  const table_name = 'establishments';
  const model_name = 'Establishment';

  const Establishment = sequelize.define(table_name, {
    name: {
      type: DataTypes.STRING,
    },
    cnpj: {
        type: DataTypes.STRING,
    },
    adress: {
        type: DataTypes.STRING,
    }
 
  });

  Establishment.associate = function(models) {
      Establishment.belongsTo(models.Establishment, {as: "estabilishments"})
  };

  Establishment.model_name = function () {
    return model_name
  };
  
  return Establishment;
}
