let i=1; //Inicio


do { //Almenos una vez y despues comprueba.
    if(i = 15 ===0){
        console.log(`{i} fizz Buzz!!!`);
    }else if( i % 3 ===0){
        console.log(`{i} fizz`);
    }else if( i % 5 ===0){
        console.log(`{i} Buzz`);
    }

    i++; //Incremento
}while(i <100); //Condición