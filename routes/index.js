const express = require("express");
const router = express.Router();
const { Associate } = require("../app/models");
var isLogged = false;
var associate = null;

/* GET home page. */
router.get("/", function (req, res, next) {
  if (isLogged) {
    res.render("index", { associate });
  } else {
    res.render("login");
  }
});

router.post("/", async function (req, res, next) {
  const findAssociate = await Associate.findOne({
    where: { cpf: req.body.cpf },
  });

  if (findAssociate != null) {
    isLogged = true;
    associate = findAssociate;
    res.render("index", { associate });
  } else {
    res.render("login");
  }
});

router.post("/deslogar", async function (req, res, next) {
  isLogged = false;
  res.json("deslogado");
});

module.exports = router;
