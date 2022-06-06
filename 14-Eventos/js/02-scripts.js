//Events Mouse

const nav = document.querySelector('.navegacion');


// Registration of an event
//nav.addEventListener('click', ()=>{
//    console.log('clic en nav');
//})


nav.addEventListener('mouseenter', ()=>{
    console.log('Entrando a la navegacion');

    
    nav.style.backgroundColor = 'white';
})


nav.addEventListener('mouseout', ()=>{
    console.log('Saliendo de la navegación');

    nav.style.backgroundColor = 'transparent';
})


nav.addEventListener('mousedown', ()=>{ //Similar a click
    console.log('Saliendo de la navegación');

    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('mouseup', ()=>{  //Cuando Suleltas el mouse
    console.log('Saliendo de la navegación');

    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('dblclick', ()=>{ //Son 2 click
    console.log('Saliendo de la navegación');

    nav.style.backgroundColor = 'transparent';
})

