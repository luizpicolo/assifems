const { Establishment } = require('../models');

exports.list = async function(req, res) {

  res.render('establishments')
};

// exports.create = async function(req, res) {
//   res.send("Aqui deve ser implementado")
// };

// exports.find = async function(req, res) {
//   res.send("Aqui deve ser implementado" + req.params.id)
// };

// exports.update = async function(req, res) {
//   res.send("Aqui deve ser implementado")
// };

// exports.delete = async function(req, res) {
//   res.send("Aqui deve ser implementado")
// };