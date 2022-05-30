const carrito =[ 
    { nombre: 'Monitor 32 Pulgadas',precio: 100},
    { nombre: 'Monitor 36 Pulgadas',precio: 200},
    { nombre: 'Monitor 40 Pulgadas',precio: 300},
    { nombre: 'Monitor 45 Pulgadas',precio: 400},
    { nombre: 'Monitor 50 Pulgadas',precio: 500},
    { nombre: 'Monitor 55 Pulgadas',precio: 600},
]
//Crea un nuevo arreglo
const nuevoArreglo = carrito.map( function (producto){
    return `${producto.nombre} - precio: ${producto.precio} `;
})

//No crea nada
const nuevoArreglo2 = carrito.forEach( function (producto){
    return `${producto.nombre} - precio: ${producto.precio} `;
})

console.log(nuevoArreglo);
console.log(nuevoArreglo2);
