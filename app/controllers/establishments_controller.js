const { Establishment } = require("../models");
const { Category } = require("../models");

exports.list = async function (req, res) {
  const establishments = await Establishment.findAll({
    include: "category",
  });
  const categories = await Category.findAll();
  const user = req.session.user;
  res.render("establishments", { establishments, categories, user });
};

exports.filter = async function (req, res) {
  const establishments = await Establishment.findAll({
    where: { categoryId: Object.values(req.body.category) },
    include: "category",
  });
  const categories = await Category.findAll();
  res.render("establishments", { establishments, categories });
};

// exports.find = async function(req, res) {
//   res.send("Aqui deve ser implementado" + req.params.id)
// };

// exports.update = async function(req, res) {
//   res.send("Aqui deve ser implementado")
// };

// exports.delete = async function(req, res) {
//   res.send("Aqui deve ser implementado")
// };
