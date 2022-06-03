//Gnerar HTML CON JS

//Crear un nuevo enlace
const enlace = document.createElement('A');

// añadiendo el texto
enlace.textContent ='Nuevo Enlace';

//añadiendo href
enlace.href = '/nuevo-enlace';

console.log(enlace);

enlace.target = "_blank";

enlace.setAttribute('data-enlace', 'nuevo-enlace')

enlace.classList.add('alguna');

enlace.onclick = miFuncion;


//Seleccionar la nav
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
//navegacion.appendChild(enlace);  //Lo agrega al ultimo 
navegacion.insertBefore(enlace, navegacion.children[1]); //Para tener cierto control

function miFuncion(){
    alert('Diste Click');
}

//Ejercio 

//Crear un card de forma dinamica
const parrafo1= document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2= document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3= document.createElement('p');
parrafo3.textContent ='$800 por persona';
parrafo3.classList.add('precio');

//Crear div con la calse de info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

//crear el card
const card = document.createElement('div');
card.classList.add('card');

//Asignar la imagen
card.appendChild(imagen);

//Asiganr info
card.appendChild(info);

//Insertar en html

const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);