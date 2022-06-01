//forEach

const pendientes = ['Tarea','Comer','Proyecto','Estudiar Js'];

pendientes.forEach( pendiente => console.log(pendiente)) //Cuando es una sola linea

pendientes.forEach(pendiente ,indice => {
    console.log(`${indice}: ${pendiente}`)
})

const carrito =[ 
    { nombre: 'Monitor 32 Pulgadas',precio: 100},
    { nombre: 'Monitor 36 Pulgadas',precio: 200},
    { nombre: 'Monitor 40 Pulgadas',precio: 300},
    { nombre: 'Monitor 45 Pulgadas',precio: 400},
    { nombre: 'Monitor 50 Pulgadas',precio: 500},
    { nombre: 'Monitor 55 Pulgadas',precio: 600},
]

carrito.forEach((producto) =>{ 
    console.log(producto.nombre);
})

const nuevoArreglo =carrito.forEach(producto => producto.nombre); // No crea un arreglo

const nuevoArreglo2 =carrito.map(carrito => producto.precio); //Crea un nuevo arreglo  ,lo llena

console.log(nuevoArreglo);
console.log(nuevoArreglo2);