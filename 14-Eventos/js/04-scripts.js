//Event Submit 

const  formmulario = document.querySelector('#formulario');

formmulario.addEventListener('submit', validarFormulario )

function validarFormulario(e){
    e.preventDefault(); 

    console.log('Buscando');

    console.log(e.target.action);
}