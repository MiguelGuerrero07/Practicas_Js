//Seleccionar elementos por su clase.

const  header = document.getElementsByClassName('header');
console.log(header);


const hero = document.getElementsByClassName('hero');
console.log(hero);


//SI LAS CLASES EXISTEN MÁS DE UNA VEZ
const contenedores =document.getElementsByClassName('contenedor')
console.log(contenedores);


//Si una clase no existe
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);