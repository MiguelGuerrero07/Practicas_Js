const producto ='Monitor 20 pulgadas';

//.replace para remplazar
console.log(producto);
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

//.slice para cortar una cadena

console.log(producto.slice(0,10));
console.log(producto.slice(8));
console.log(producto.slice(2,1)); //No va a cortar nada

//Alternativa a .slice
console.log(producto.substring(0,10));
console.log(producto.substring(2,1));

const usuario = "Miguel";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));  //Muestra una letra

