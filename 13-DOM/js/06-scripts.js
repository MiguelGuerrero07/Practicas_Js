const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);


// console.log(encabezado.innerText);   //Si en CSS - visibility: hidden; no lo va encontar
// console.log(encabezado.textContent); //Si lo va encontrar
// console.log(encabezado.innerHTML); // Se trae el html

// const nuevoHeading = 'Nuevo Heading'
// document.querySelector('.contenido-hero h1').textContent = nuevoHeading;


const imagen = document.querySelector('.card img');
imagen.src='img/hacer2.jpg';