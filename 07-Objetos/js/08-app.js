"use strict"

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible : true 
}

Object.freeze(producto); //Permite no modificar el objecto

//producto.disponible = false;
//producto.imagen = "Imagen.jpg";
//delete producto.precio;

console.log(producto);

console.log(Object.isFrozen(producto));