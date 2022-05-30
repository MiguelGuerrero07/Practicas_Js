const carrito =[ 
    { nombre: 'Monitor 32 Pulgadas',precio: 100},
    { nombre: 'Monitor 36 Pulgadas',precio: 200},
    { nombre: 'Monitor 40 Pulgadas',precio: 300},
    { nombre: 'Monitor 45 Pulgadas',precio: 400},
    { nombre: 'Monitor 50 Pulgadas',precio: 500},
    { nombre: 'Monitor 55 Pulgadas',precio: 600},

]



for(let i=0 ; i < carrito.length; i++){
    console.log(`${carrito[i].nombre} - precio: $(carrito [i].precio) `);
}

carrito.forEach( function (producto){
    console.log(`${producto.nombre} - precio: ${producto.precio} `);
})