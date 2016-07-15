var Autores = require('./../models').Autores;

module.exports = {
    todosAutores : ( callback ) => {
        Autores.findAll()
               .then((result) => {
                    return callback(null, result);
                })
               .catch((err) => {
                    return callback(err, null);
                })
    }
}