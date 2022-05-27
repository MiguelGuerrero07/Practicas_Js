"use strict"

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible : true 
}

//Ni agregar ni eliminar propieedades pero si modificarlas las existentes 
Object.seal(producto); 

producto.disponible = false;
//producto.imagen = "Imagen.jpg";
//delete producto.precio;
console.log(producto);

console.log(Object.isSealed(producto));