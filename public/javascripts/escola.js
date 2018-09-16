$(function(){

    $('#cadastroCurso').click(function() {
        window.location.href = '/cadCurso';
    });
    
    $('#listaCursos').click(function() {
        window.location.href = '/listaCursos';
    });

    $('#btnAdd').click(function() {
        if ($('#codigo').length === 0 ||
            $('#descricao').length === 0 ||
            $('#ch').length === 0 ||
            $('#categoria').length === 0) {
                $('#msg').addClass( "alert alert-warning" );
                $('#msg').attr( "role", "alert" );
                $('#msg').text("Favor preencher todos os campos corretamente.");
        }
    });
});