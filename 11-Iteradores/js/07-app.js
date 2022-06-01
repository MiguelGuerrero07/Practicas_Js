//For of
const pendientes = ['Tarea','Comer','Proyecto','Estudiar Js'];

const carrito =[ 
    { nombre: 'Monitor 32 Pulgadas',precio: 100},
    { nombre: 'Monitor 36 Pulgadas',precio: 200},
    { nombre: 'Monitor 40 Pulgadas',precio: 300},
    { nombre: 'Monitor 45 Pulgadas',precio: 400},
    { nombre: 'Monitor 50 Pulgadas',precio: 500},
    { nombre: 'Monitor 55 Pulgadas',precio: 600},
]

for(let pendiente of pendientes){
    console.log(pendiente);
}//Itera sobre arreglos


for(let producto of carrito){
    console.log(producto.nombre);
}