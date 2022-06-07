//Variables 
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

//lISTENERS
cargarEventListeners();

function cargarEventListeners(){
    //Cuando agregas un curso presionando agregar al Carrito
    listaCursos.addEventListener('click',agregarCurso);
    
    //Elimina cursos del carrito
    carrito.addEventListener('click',eliminarCurso);

    //Vaciar  el carrito
    vaciarCarritoBtn.addEventListener('click',vaciarCarrito);

}




//Funciones
//Funcón que añade el curso al carrito
function agregarCurso(e){
    e.preventDefault(); //Evita que entre a los enlaces  
    // Delegation para agregar-carrito
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        //Enviamos el curso seleccionado para tomar sus datos
        leerDatosCurso(cursoSeleccionado);
    }
}

//Leer el contenido del Hrml al que dimos click y extre la informacion del curso
function leerDatosCurso(curso){
    //Crear un objecto con el contenido del curso actual
    const infoCurso ={
        imagen : curso.querySelector('img').src,
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        id : curso.querySelector('a').getAttribute('data-id'),
        cantidad:1
    }
//Revisa si un elemetnto ya existe en el carrito.
if(articulosCarrito.some( curso => curso.id === infoCurso.id)){
    //Actualizamos la cantidad.
    const cursos = articulosCarrito.map(curso =>{
        if(curso.id === infoCurso.id){
            curso.cantidad++;
            return curso; //Retorna el obejto actualizado
        }else{
            return curso; //Retorna los objetos que no son duplicados
        }
    })
    articulosCarrito = [...cursos];
}else{
    articulosCarrito= [...articulosCarrito ,infoCurso];
}

     // console.log(articulosCarrito)

     // console.log(articulosCarrito)

    carritoHTML();
}

///Elimianr curso del carrito
function eliminarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        //Elimiina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => cursoId !== cursoId);
        carritoHTML(); //Iterar sobre el carrito y mostrar su HTML
    }   
}



// Muestra el curso seleccionado en el Carrito
function carritoHTML() {

    vaciarCarrito();

    articulosCarrito.forEach(curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>  
                <img src="${curso.imagen}" width=100>
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad} </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
            </td>
        `;
        contenedorCarrito.appendChild(row);
    });

}

//Elimina los cursos del carrito en el DOm
function vaciarCarrito(){
    //Forma lenta
    //contenedorCarrito.innerHTML = ''


    //Forma Rapida
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}