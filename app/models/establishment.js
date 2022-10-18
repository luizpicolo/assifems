module.exports = (sequelize, DataTypes) => {
  const table_name = "establishments";
  const model_name = "Establishment";

  const Establishment = sequelize.define(table_name, {
    name: {
      type: DataTypes.STRING,
    },
    cnpj: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "categories",
        key: "id",
      },
    },
  });

  Establishment.associate = function (models) {
    Establishment.belongsTo(models.Category, { as: "category" });
  };

  Establishment.model_name = function () {
    return model_name;
  };

  return Establishment;
};
