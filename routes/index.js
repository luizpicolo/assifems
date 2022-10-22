const express = require("express");
const router = express.Router();
const { Associate } = require("../app/models");
var isLogged = false;

/* GET home page. */
router.get("/", function (req, res, next) {
  if (isLogged) {
    res.render("index");
  } else {
    res.render("login");
  }
});

router.post("/", async function (req, res, next) {
  const associate = await Associate.findOne({ where: { cpf: req.body.cpf } });

  if (associate != null) {
    isLogged = true;
    res.render("index", { associate });
  } else {
    res.render("login");
  }
});

router.post("/deslogar", async function (req, res, next) {
  isLogged = false;
});

module.exports = router;
