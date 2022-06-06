//Event scroll on mouse

window.addEventListener('scroll',() => {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect(); //Ubicacion de un elemento

    console.log(ubicacion);
    
    if(ubicacion.top <100){
        console.log('El elemento ya esta visible');
    }else{
        console.log('Aún no, da más scroll ');
    }
    
    

})