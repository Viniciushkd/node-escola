module.exports = function (app) {
    var Curso = app.models.cursos;

    var EscolaController = {
        menu: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('escola/menu', params);
        },
        cadastroCurso: function (request, response) {
            var categoria = ['Astrologia', 'Arquitetura e Urbanismo',
             'Culinária', 'Desenvolvimento Social', 'Design', 'Educação', 'Fotografia',
              'Hotelaria e Turismo', 'Idiomas e Linguagem', 'Tecnologia da Informação'];
            var usuario = request.session.usuario,
                params = { usuario: usuario, categorias: categoria };
            response.render('escola/cadCurso', params);
        },
        listaCursos: function (request, response) {
            Curso.find(function (erro, cursos) {
                if (erro) {
                    response.render('/menu');
                }
                else {
                    var usuario = request.session.usuario,
                        params = { usuario: usuario, cursos: cursos };
                    response.render('escola/listaCursos', params);
                }
            });
        },
        //cadastro de cursos
        novoCurso: function (request, response) {
            var codigo = request.body.cursos.codigo;
            var descricao = request.body.cursos.descricao;
            var ch = request.body.cursos.ch;
            var categoria = request.body.cursos.categoria;
            var msg = "";

            if (codigo.trim().length == 0 ||
                descricao.trim().length == 0 ||
                ch.trim().length == 0 ||
                categoria.trim().length == 0) {
                    //msg = "Favor preencher todos os campos corretamente.";
                    //var usuario = request.session.usuario,
                    //    params = { usuario: usuario, msg: msg };
                //response.redirect('/cadCurso', params);
            }
            else {
                var curso ={
                    codigo: codigo,
                    descricao: descricao,
                    ch: ch,
                    categoria: categoria
                };
                Curso.create(curso, function (erro, curso) {
                    if (erro) {
                        response.redirect('/cadCurso');
                    }
                    else {
                        response.redirect('/menu');
                    }
                });
            }

            //response.redirect('/menu');
        }
    };
    return EscolaController;
};
