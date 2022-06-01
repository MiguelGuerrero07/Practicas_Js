//Operador Mayor que y menor que

const dinero = 1000;
const totalAPagar = 500;
const tarjeta = true;
const cheque = true;

if(dinero >= totalAPagar){
    console.log('Si podemos pagar');
}else if(cheque){
    console.log('Si porque tengo cheque');
}else if(tarjeta){
    console.log('Si puedo pagar porque tengo la tarejta');
}else{
    console.log('Fondos insuficientes');
}