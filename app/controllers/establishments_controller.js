const { Establishment } = require("../models");
const { Category } = require("../models");
// const session = require("express-session");

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
  const user = req.session.user;
  const categories = await Category.findAll();
  res.render("establishments", { establishments, categories, user });
};
