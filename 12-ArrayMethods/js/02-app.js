//findIndex para encontrar la posicion
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach((mes ,i) =>{
    if(mes ==='Diciembre'){
        console.log(``)
    }  
})

//Encontrar el indice de Abril
const indice = meses.findIndex(mes => mes ==='Abril');
console,log(indice);

//Encontrat el indice de un arreglo de objectos
const indice2= carrito.findIndex(producto => producto.precio ===100);
console.log(indice2);