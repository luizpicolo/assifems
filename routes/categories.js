var express = require('express');
var router = express.Router();
const { Category } = require('../app/models');
router.get('/', async function(req, res) {

    const retorna = await Category.findAll();
    res.json(retorna);}); 
// router.post('/criar', EstablishmentController.create); 
// router.get('/buscar/:id', EstablishmentController.find); 
// router.put('/atualizar/:id', EstablishmentController.update); 
// router.delete('/deletar/:id', EstablishmentController.delete); 

module.exports = router;
