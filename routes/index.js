const express = require("express");
const router = express.Router();
const { Associate } = require("../app/models");
const session = require("express-session");
var associate = null;

/* GET home page. */
router.get("/", function (req, res, next) {
  if (req.session.user != null) {
    const user = req.session.user;
    res.render("index", { user });
  } else {
    res.render("login", { error: false });
  }
});

router.post("/", async function (req, res, next) {
  const findAssociate = await Associate.findOne({
    where: { cpf: req.body.cpf },
  });

  if (findAssociate != null) {
    req.session.user = findAssociate;
    console.log(req.session.user)
    res.render("index", { user: req.session.user });
  } else {
    res.render("login", { error: true });
  }
});

router.post("/deslogar", async function (req, res, next) {
  req.session.user = null;
  res.render("login", { error: false });
});

module.exports = router;
