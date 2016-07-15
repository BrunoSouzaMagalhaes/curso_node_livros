var express = require('express');
var router = express.Router();
var autoresController = require("./../controllers/autores");

/* GET users listing. */
router.post('/:id', autoresController.alterar );
router.get('/', autoresController.index );
router.get('/alterar/:id', autoresController.alterarForm );
router.get('/novo', autoresController.novoForm );
router.post('/', autoresController.salvar );
router.get('/deletar/:id', autoresController.deletar );


module.exports = router;
