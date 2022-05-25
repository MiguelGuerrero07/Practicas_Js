//Metodos para String

const producto ='               Monitor 20 pulgadas                ';

console.log(producto);
console.log(producto.length);

//Eliminar del inicio...
console.log(producto.trimStart());
console.log(producto.trimEnd());

console.log(producto.trimStart().trimEnd()); //Elimina el espacio al inicio y final


console.log(producto.trim()); //Elimina el espacio ambos lados