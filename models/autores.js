module.exports = (sequelize, Sequelize) => {

    var Autores = sequelize.define('Autores', {
        name: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
                isAlpha : true
            }
        },
        lastname: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
                isAlpha : true
            }
        }
    },{
        classMethods : {
            associate: function(models) {
                Autores.hasMany(models.Livros);
            }
        }
    });

    return Autores;
};