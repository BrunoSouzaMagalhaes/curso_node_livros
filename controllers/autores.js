var db = require('./../models');
var autores_service = require("./../services/autores_service");

module.exports = {
    index :(req, res, doNext) => {
            autores_service.todosAutores((err, result) => {
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
        return res.render("autores/novo", {autor: {name:'', lastname:''}});
    },
    alterarForm: (req, res, doNext) => {
        if(req.params.id){
            db.Autores
                .findOne({
                    where : {
                        id : req.params.id
                    }
                })
                .then((result) => {
                    return res.render("autores/alterar", {autor: result.dataValues});
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        return;
    },
    salvar : (req, res, doNext) => {

        db.Autores
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
        db.Autores
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
        db.Autores
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