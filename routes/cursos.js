module.exports = function (app) {
    var valida = require('./../middlewares/valida');
    var escola = app.controllers.nescola;

    app.get('/menu', valida, escola.menu);
    app.get('/cadCurso', escola.cadastroCurso);
    app.get('/listaCursos', escola.listaCursos);

    app.post('/novoCurso', escola.novoCurso); 

}; 