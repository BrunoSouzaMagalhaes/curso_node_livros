var db = require('./../models');

module.exports = {
    todosLivros : ( callback ) => {
        db.Livros.findAll({
            include : [db.Autores]
           })
           .then((result) => {
                return callback(null, result);
            })
           .catch((err) => {
                return callback(err, null);
            })
    }
}