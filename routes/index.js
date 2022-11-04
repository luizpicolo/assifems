// JWT
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');

const router = express.Router();
const { Associate } = require("../app/models");

require("dotenv/config");
const jwt = require('jsonwebtoken');
var { expressjwt: expressJWT } = require("express-jwt");

// GLOBAL VARS
var isLogged = false;
var associate = null;


/* GET home page. */
router.get("/", function (req, res, next) {
  if (isLogged) {
    res.render("index", { associate });
  } else {
    res.render("login", {error: false});
  }
});

router.post("/", async function (req, res, next) {
  const findAssociate = await Associate.findOne({
    where: { cpf: req.body.cpf },
  });

  if (findAssociate != null) {
    const id = 1;
    const token = jwt.sign({ id }, process.env.SECRET, {
    expiresIn: 3600, // expires in 1 hour
    });
    res.cookie("token", token, { httpOnly: true });
    isLogged = true;
    associate = findAssociate;
    res.render("index", { associate });
  } else {
    res.render("login", { error: true });
  }
});

router.post("/deslogar", async function (req, res, next) {
  isLogged = false;
  res.cookie("token", null, { httpOnly: true });
  res.render("login", {error: false});
});

module.exports = router;
