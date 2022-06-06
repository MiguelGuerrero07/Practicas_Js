//Events keyboard

const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keydown', ()=>{
    console.log('escribiendo....');
})

busqueda.addEventListener('keyup', ()=>{
    console.log('escribiendo....');
})

busqueda.addEventListener('blur', ()=>{
    console.log('escribiendo....');
})

busqueda.addEventListener('copy', ()=>{
    console.log('copiando');
})

busqueda.addEventListener('paste', ()=>{
    console.log('pegando');
})

busqueda.addEventListener('cut', ()=>{
    console.log('cortando');
})

busqueda.addEventListener('input', (e)=>{ //No cumbre el blur ,pero es todo en uno
    console.log('e.type');
})

busqueda.addEventListener('input', (e)=>{ 
    console.log('e.target'); //Input especifico
})

busqueda.addEventListener('input', (e)=>{ 
    console.log('e.target.value'); //The user has writing
})

busqueda.addEventListener('input', (e)=>{ 
    console.log('e.target.value'); //The user has writing
})