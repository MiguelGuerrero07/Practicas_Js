//Variables 
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];


//Fuction 

cargarEventListeners();
function cargarEventListeners(){
    //Cuando agregas un curso presionando agregar al Carrito
    listaCursos.addEventListener('click',agregarCurso);
}

//Funciones
function agregarCurso(e){
    e.preventDefault(); //Evita que entre a los enlaces

    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;

        leerDatosCurso(cursoSeleccionado);
    }
}

//Leer el contenido del Hrml al que dimos click y extre la informacion del curso
function leerDatosCurso(curso){
    console.log(curso);

    //Crear un objecto con el contenido del curso actual
    const infoCurso ={
        imagen : curso.querySelector('img').src,
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        id : curso.querySelector('a').getAttribute('data-id'),
        cantida:1
    }
    //Agrega elementos al arreglo del carrito

    articulosCarrito  = [...articulosCarrito,infoCurso];

    console.log(articulosCarrito);

    carritoHTML();
}


//Muestra el carrito de compras en html
function carritoHTML(){

    //Limpiar el HTML
    limpiarHTML();

    //Recorre el carrito y genera el Html
    articulosCarrito.forEach( curso =>{
        const row = document.createElement('tr')
        row.innerHTML =`
        <td> ${curso.titulo}</td>`;

        //Agrega el html del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
}


//Elimina los cursos del tbdody
function limpiarHTML(){
    
    //contenedorCarrito.innerHTML=''; //Forma lenta
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}