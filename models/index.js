'use strict';

var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql://root:admin@localhost:3306/livros');
var path = require('path');
var fs = require('fs');
var db = {};

fs.readdirSync(__dirname)
    .filter((file) => {
        return file !== 'index.js'
    })
    .forEach((file, key) => {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db)
    .forEach((models) => {
        if(!db[models].hasOwnProperty('associate')){
            return;
        }
        return db[models].associate(db);
    })

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;

