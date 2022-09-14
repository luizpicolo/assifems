module.exports = (sequelize, DataTypes) => {
  const table_name = "associates";
  const model_name = "Associate";

  const Associate = sequelize.define(table_name, {
    name: {
      type: DataTypes.STRING,
    },
    birth_date: {
      type: DataTypes.DATE,
    },
    role: {
      type: DataTypes.STRING,
    },
    cpf: {
      type: DataTypes.STRING,
    },
    rg: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    validity: {
      type: DataTypes.DATE,
    },
    siape: {
      type: DataTypes.STRING,
    },
  });

  Associate.model_name = function () {
    return model_name;
  };

  return Associate;
};
