var db = require('./../models');
var livros_service = require("./../services/livros_service");
var autores_service = require("./../services/autores_service");

module.exports = {
    index :(req, res, doNext) => {
            livros_service.todosLivros((err, result) => {
                if(err){
                    return  res.status(500)
                               .json({
                                    status: false,
                                    data: err
                                });
                }

                return  res.status(200)
                           .json({
                                status: true,
                                data: result
                           });
            });
    },
    novoForm: (req, res, doNext) => {
        autores_service.todosAutores((err, result) => {
            if(err){
                console.log(err);
            }
            return res.render("livros/novo", {autores: result});
        });
    },
    alterarForm: (req, res, doNext) => {
        if(req.params.id){
            db.Livros
                .findOne({
                    where : {
                        id : req.params.id
                    }
                })
                .then((result) => {
                    return res.render("livros/alterar", {autor: result.dataValues});
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        return;
    },
    salvar : (req, res, doNext) => {

        db.Livros
          .create(req.body)
          .then((result) => {
                return  res.status(201)
                    .json({
                        status: true,
                        data: result
                    });
            })
          .catch((err) => {
                return  res.status(500)
                    .json({
                        status: false,
                        data: err
                    });
            });

    },
    deletar : (req, res, doNext) => {
        db.Livros
          .destroy({
                where : {
                    id : req.params.id
                }
            })
          .then((result) => {
                return  res.status(204)
                    .json({
                        status: true,
                        data: {}
                    });
            })
          .catch((err) => {
                return  res.status(500)
                    .json({
                        status: false,
                        data: err
                    });
            });
    },
    alterar : (req, res, doNext) => {
        console.log(req.body);
        db.Livros
          .update({
                name : req.body.name,
                lastname: req.body.lastname
            },
            {where : {
                id : req.params.id
                }
            })
            .then((result) => {
                return  res.status(201)
                    .json({
                        status: true,
                        data: result
                    });
            })
            .catch((err) => {
                return  res.status(500)
                    .json({
                        status: false,
                        data: err
                    });
            });
    }
}