// JWT
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const router = express.Router();
const { Associate } = require("../app/models");

require("dotenv/config");
const jwt = require("jsonwebtoken");
var { expressjwt: expressJWT } = require("express-jwt");

// GLOBAL VARS
const session = require("express-session");

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
    const id = 1;
    const token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 60 * 60 * 1, // expires in 1 hour
    });
    res.cookie("token", token, { httpOnly: true });
    req.session.user = findAssociate;
    console.log(req.session.user)
    res.render("index", { user: req.session.user });
  } else {
    res.render("login", { error: true });
  }
});

router.post("/deslogar", async function (req, res, next) {
  res.cookie("token", null, { httpOnly: true });
  req.session.user = null;
  res.render("login", { error: false });
});

module.exports = router;
