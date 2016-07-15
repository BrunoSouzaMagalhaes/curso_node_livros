module.exports = (sequelize, Sequelize) => {

    var Livros = sequelize.define('Livros', {
        name: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true
            }
        },
        pgs: {
            type: Sequelize.INTEGER,
            validate: {
                isInteger: true,
            }
        }
    },{
        classMethods : {
            associate: function(models) {
                Livros.belongsTo(models.Autores);
            }
        }
    });

    return Livros;
};