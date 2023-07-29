
/*const inputNacimiento = document.querySelector("#birth");

inputNacimiento.addEventListener("blur",(evento) => {
    validarNacimiento(evento.target);//recordemos que el punto target sirve para acceder a los atributos de ese elemento y despues al codigo html del objeto en el DOM
});*/

//se exporta para poder utilizarla en otros archivos
export function valida(input) {
    //required data-tipo="nacimento
    const tipoDeInput = input.dataset.tipo;//data set = es la coleccion de todos los datas, y el punto tipo es para tomar el dato de "data-tipo"
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input); // vicnulado con el otro archivo app.js
    }
    //console.log(input.parentElement);

    //si es valido o si es true la priopiedad, quiero que quite la clase
    if(input.validity.valid){ //esto para colocar en rojo los campos requeridos que no han sido llenados 
        input.parentElement.classList.remove("input-container--invalid"); 
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
]

const mensajeDeError = {
    nombre: {
        valueMissing: "Este campo no puede estar vacio."
    },
    email: {
        valueMissing: "Este campo no puede estar vacio.",
        typeMismatch: "El correo no es valido."
    },
    password: {
        valueMissing: "Este campo no puede estar vacio.",
        patternMismatch: "Escribir de 6 a 12 caracteres maximo, debe contener al menos 1 letra mayuscula y minuscula, un numero y sin caracteres especiales."
    },
    nacimiento: {
        valueMissing: "Este campo no puede estar vacio",
        customError:  "Debes tener al menos 18 años de edad."
    },
    numero: {
        valueMissing: "Este campo no puede estar vacio.",
        patternMismatch: "El formato requerido es xxxxxxxxxx de 10 numeros."
    },
    direccion: {
        valueMissing: "Este campo no puede estar vacio.",
        patternMismatch: "La direccion debe de contener entre 10 a 40 caracteres."
    },
    ciudad: {
        valueMissing: "Este campo no puede estar vacio.",
        patternMismatch: "La ciudad debe de contener entre 10 a 40 caracteres."
    },
    estado: {
        valueMissing: "Este campo no puede estar vacio.",
        patternMismatch: "El estado debe de contener entre 10 a 40 caracteres."
    },


}


const validadores = {
    // en registro usamos la palabra nacimiento ( required data-tipo="nacimento")
    nacimiento: input => validarNacimiento(input),
};

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = ""
    tipoDeErrores.forEach( error => {
            if(input.validity[error]){
                console.log(tipoDeInput, error);
                console.log(input.validity[error]);
                console.log(mensajeDeError[tipoDeInput][error]);
                mensaje = mensajeDeError[tipoDeInput][error];
            }
        }  
    );
    
    return mensaje;
}


//lo que queremos es acceder a ese valor del input, no al input como tal, ya que ese nos traera el codigo html
function validarNacimiento(input) {
    let mensaje = ""
     //acceder al valor de fecha, formato año, mes y dia
     const fechaUsuario = new Date(input.value);//nueva instancia
     if (!mayorDeEdad(fechaUsuario)) {
         mensaje = "Debes tener al menos 18 años de edad";
     }
     input.setCustomValidity(mensaje);//esta es una funcion que va a recibir un mensaje
 }

 function mayorDeEdad(fecha) {
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18, 
        fecha.getUTCMonth(), 
        fecha.getUTCDate());
    return diferenciaFechas <= fechaActual ;
}


