//const primerEnlace = document.querySelector('a'); //Eliminar elemento por si mismo.
//primerEnlace.remove();



//Eliminar desde el padre
const navegacion = document.querySelector('.navegacion');
navegacion.removeChild(navegacion.children[2]);
console.log(navegacion.children);

