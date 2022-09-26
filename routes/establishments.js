var express = require('express');
var router = express.Router();
var EstablishmentController = require('../app/controllers/establishments_controller');

router.get('/', EstablishmentController.list); 
// router.post('/criar', EstablishmentController.create); 
// router.get('/buscar/:id', EstablishmentController.find); 
// router.put('/atualizar/:id', EstablishmentController.update); 
// router.delete('/deletar/:id', EstablishmentController.delete); 

module.exports = router;
