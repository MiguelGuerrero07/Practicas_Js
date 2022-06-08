//Varibales
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');

//Varibales para campso
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        

eventListeners();
function eventListeners() {
    //Cuando la app arranca
    document.addEventListener('DOMContentLoaded',iniciarApp);

    //Campos del formulario
    email.addEventListener('blur',validarFormulario);
    asunto.addEventListener('blur',validarFormulario);
    mensaje.addEventListener('blur',validarFormulario);

    //Reinicia el form
    btnReset.addEventListener('button',resetearFormulario);

    //ENVIAR EMAIL 
    formulario.addEventListener('submit',enviarEmail);





}


//fUNCIONES
function iniciarApp(){
    btnEnviar.disable = true;
    btnEnviar.classList.remove('cursor-not-all-allowed','opacity-50')
}

//Valdar formulario
function validarFormulario(e){

    if(e.target.value > 0){
        
        const error = document.querySelector('p.error');
        if(error){
            error.remove();
        }

        e.target.classList.remove('border','border-red-500');
        e.target.classList.add('border','border-green-500');

    }else{
        e.target.classList.remove('border','border-green-500');
        e.target.classList.add('border','border-red-500');
        mostrarError('Todos los campos son obligatorios');
    }

    if(e.target.type === 'email'){

        
        if(er.test(e.target.value))  {
            //Elimina los errores
            const error = document.querySelector('p.error');
            if(error){
                error.remove();
            }
    
            e.target.classList.remove('border','border-red-500');
            e.target.classList.add('border','border-green-500');
    
        }else{
            e.target.classList.remove('border','border-green-500');
            e.target.classList.add('border','border-red-500');
            mostrarError('EMAIL NO VALIDO');
        }   
    }

    if(er.test(email.value)  && asunto.value !=='' && mensaje.value !==''){
        btnEnviar.disable = false;
        btnEnviar.classList.remove('cursor-not-all-allowed','opacity-50')
    }
}

function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border','border-red-500','background-red-30','text-red-500','p-3','mt-5','text-center','error');

    const errores = document.querySelectorAll('.error');
    if(errores.length === 0){
        formulario.appendChild(mensajeError);
    }

}


//Enviar el email
function enviarEmail(e){
    e.preventDefault();

    //Mostrar Spiner
    const spinner = document.querySelector('#spinner');
    spinner.style.display= 'flex';

    //Despues de 3 segundos ocultar el spinner y mostrar el mensaje
    setTimeout(() => {
        spinner.style.display = 'none'


        //Mensaje que dice que se envio correctamente
        const parrafo = document.createElement('p');
        parrafo.textContent = 'El mensaje se envio correctamente';
        parrafo.classList.add('text-center','my-10','p-2','bg-green-500', 'text-white','font-bold','uppercase')

        //Inserta el parrafo antes del spiner
        formulario.insertBefore(parrafo,spinner);
        
        setTimeout(()=>{
            parrafo.remove(); //Elimina el mensaje de enviado
            resetearFormulario();
        },5000);
    } ,3000);
    
}

//Fuction de resear el formulario

function resetearFormulario(){
    formulario.reset();
    iniciarApp();
}