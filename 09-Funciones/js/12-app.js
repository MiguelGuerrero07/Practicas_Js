const carrito =[ 
    { nombre: 'Monitor 32 Pulgadas',precio: 100},
    { nombre: 'Monitor 36 Pulgadas',precio: 200},
    { nombre: 'Monitor 40 Pulgadas',precio: 300},
    { nombre: 'Monitor 45 Pulgadas',precio: 400},
    { nombre: 'Monitor 50 Pulgadas',precio: 500},
    { nombre: 'Monitor 55 Pulgadas',precio: 600},
]

//Map con un Arrow Fuction
const nuevoArreglo = carrito.map(producto => `${producto.nombre} - precio: ${producto.precio} `
)

//
carrito.forEach(producto => console.log( `${producto.nombre} - precio: ${producto.precio} `));

console.log(nuevoArreglo);
