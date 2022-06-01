const puntuaje = 1001;
const puntuaje2= "1000";

console.log(typeof puntuaje);
console.log(typeof puntuaje2);

//if(puntuaje != 1000){ //!= DIFERENTE == IGUAL A
//    console.log('Si es diferente');
//}

if(puntuaje !== "1000"){ //!= DIFERENTE == IGUAL  a
    console.log('Si es diferente');
}else{
    console.log('No es diferente');
}

// == Operador que no es estrictor
// === Operador Estricto