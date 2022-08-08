var express = require('express');
var router = express.Router();
var UsersController = require('../app/controllers/users_controller');

router.get('/', UsersController.list); 
router.post('/criar', UsersController.create); 
router.get('/buscar/:id', UsersController.find); 
router.put('/atualizar/:id', UsersController.update); 
router.delete('/deletar/:id', UsersController.delete); 

module.exports = router;
