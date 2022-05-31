
iniciarApp();


function iniciarApp(){
    console.log('Iniciando aoo..');

    segundaFuncion();
}


function segundaFuncion(){
    console.log('Desde la segunda funcion');

    usuarioAutenticado('Pedro');
}


function usuarioAutenticado(usuario){
    console.log('Autenticando usuario...espere..,');
    console.log(`Usuario autenticado exitosamente : ${usuario}`);
}