module.exports = function (app) {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var curso = Schema({
        codigo: { type: String, required: true },
        descricao: { type: String, required: true },
        ch: { type: String, required: true },
        categoria: { type: String, required: true }
    });
    return mongoose.model('cursos', curso);
};
