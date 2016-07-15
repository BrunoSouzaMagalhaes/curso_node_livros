var express = require('express');
var router = express.Router();
var livrosController = require("./../controllers/livros");

/* GET users listing. */
router.post('/:id', livrosController.alterar );
router.get('/', livrosController.index );
router.get('/alterar/:id', livrosController.alterarForm );
router.get('/novo', livrosController.novoForm );
router.post('/', livrosController.salvar );
router.get('/deletar/:id', livrosController.deletar );


module.exports = router;
