const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto' , 'Septiembre'];
const meses3 = ['Octubre' , 'Noviembre','Diciembre'];

//.concat
const resultado = meses.concat(meses2,meses3,'Otro Mes');

console.log(resultado);

//Spred Operator , verificar el orden de como se coloquen los arreglos.
const resultado2 = [...meses,...meses2,...meses3];
console.log(resultado2);