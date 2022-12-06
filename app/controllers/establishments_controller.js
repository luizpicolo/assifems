const { Establishment, Category } = require("../models");

require("dotenv/config");
const jwt = require("jsonwebtoken");
var { expressjwt: expressJWT } = require("express-jwt");
// const session = require("express-session");

exports.list = async function (req, res) {
  const establishments = await Establishment.findAll({
    include: "category",
  });
  const categories = await Category.findAll();
  const user = req.session.user;

  jwt.verify(req.cookies.token, process.env.SECRET, function (err, decode) {
    if (err) {
      res.redirect("/");
    } else {
      res.render("establishments", {
        establishments,
        categories,
        user,
        error: false,
      });
    }
  });
};

exports.filter = async function (req, res) {
  const categories = await Category.findAll();
  const user = req.session.user;
  if (req.body.category != null || req.body.category != undefined) {
    const establishments = await Establishment.findAll({
      where: { categoryId: Object.values(req.body.category) },
      include: "category",
    });

    jwt.verify(req.cookies.token, process.env.SECRET, function (err, decode) {
      if (err) {
        res.redirect("/");
      } else {
        if (establishments.length > 0) {
          res.render("establishments", {
            establishments,
            categories,
            user,
            error: false,
          });
        }
        res.render("establishments", { categories, user, error: true });
      }
    });
  }
  res.render("establishments", { categories, user, error: true });
};
