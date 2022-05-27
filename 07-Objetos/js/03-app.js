const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible : true 
}

//Agregar nuevas propiedades al objecto
producto.imagen = "Imagen.jpg";

//Eliminar propiedades del objeto
delete producto.disponible;


console.log(producto);