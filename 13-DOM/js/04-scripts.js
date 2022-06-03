//QuerySelector , macximo un elemento y clases

const card = document.querySelector('.card');
console.log('card');

//Podemos tener selectores especificos como en css
const info = document.querySelector('.premium .info');
console.log(info);

//Seleccionar el segundo cars de hospedaje
const segundocard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundocard);


//Seleccionar formulario
const formulario = document.querySelector('#formulario');
console.log(formulario);


//Seleccionar elemento html
const navegacion = document.querySelector('nav');
console.log(navegacion);
