//Recorrer el Dom (Traversing the DOM)

const navegacion = document.querySelector('.navegacion');

console.log(navegacion.firstElementChild); //Primer enlace de la navegación
console.log(navegacion.lastChild); //Ultimo elemnto de navegacion 
//console.log(navegacion.childNodes); //lOS ESPACIOS EN BLANCO SON CONSIDERADOS ELEMENTOS
//console.log(navegacion.children); //Elentos reaks

//console.log(navegacion.children[1].nodeName);
//console.log(navegacion.children[1].nodeType);

const card = document.querySelector('.card')
//card.children[1].children[1].textContent = 'Nuevo heading desde traversing the Dom'

//card.children[0].src = 'img/hacer3.jpg';
//console.log(card.children[0]);

//Traversing de Hijo a Padre

//console.log(card.parentNode);
//console.log(card.parentElement.parentElement.parentElement);

//Siguiente elemento
console.log(card)
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);

//Elemnto previo

const ultimocard = document.querySelector('.card:nth-child(4)');
console.log(ultimocard.previousElementSibling);
