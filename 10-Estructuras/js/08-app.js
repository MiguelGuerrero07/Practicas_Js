const autenticado = true;

if(autenticado){
    console.log('El usuario esta autenticado');
}
const puntuaje = 450;

function revisarPuntuaje(){
    if(puntuaje > 400){
        console.log('Excelente!!!');
        return;
    }
    
    if(puntuaje > 300){
        console.log('Buen puntuaje... felicidades');
        return;
    }
}

revisarPuntuaje();