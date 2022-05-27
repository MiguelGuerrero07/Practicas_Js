const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible : true 
}

//Un objecto se puede reasignar 

producto.disponible = false;

delete producto.precio;

console.log(producto);