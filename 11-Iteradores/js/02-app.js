//for(let i=0;i <= 10; i++){
//    if(i ===5){
//        console.log('Cinco');
//        continue; 
//    }
//    console.log(`Numero: ${i}`);
//}


const carrito =[ 
    { nombre: 'Monitor 32 Pulgadas',precio: 100},
    { nombre: 'Television 36 Pulgadas',precio: 200},
    { nombre: 'Tablet',precio: 300, descuento: true},
    { nombre: 'Audifonos',precio: 400},
    { nombre: 'Teclado',precio: 500},
    { nombre: 'Celular',precio: 600},
]
for(i =0; i<carrito.length; i++){
    if(carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} Tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
}