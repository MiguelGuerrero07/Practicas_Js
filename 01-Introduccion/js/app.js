//Mi primer hola mundo
alert("Hola Mundo");

//Ejemplo de manipulación de HTML , Toma el nombre y lo muestra
const name =prompt("¿cual es tu nombre");
document.querySelector('.contenido').innerHTML= `${name} esta aprendiendo js Moderno`;

//Comentar una linea de codigo.

/* 
Comentar varias 
lineas 
de 
codigo
*/

console.log("Impre un mensaje en la consola del navegador");
console.error("Mensaje para errores");
console.warn("Mensajes de alerta");
console.timeEnd('Tiempo de ejecución del codigo');


//Consideraciones

//Insturcciones linea por linea
console.log("Hola");
console.log("Mundo");

//Sintaxis : Funciones usar adecuada space - tab

function hola(){
        console.log("oj");
        console.log("ayuda")
}

//EsLint
