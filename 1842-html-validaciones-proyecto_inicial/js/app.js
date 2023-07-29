//para le autoacompletado podemos colocar solo el nombre de la funcion a importar
/*import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input"); //all = para que seleccione todos nuestros inputs y este nos regresarà un arreglo y los arreglos se pueden iterar
inputs.forEach(input => {
    input.addEventListener( "blur", (input) => {
        valida(input.target);
    });
});*/
//primero seleccionan todos los inputs que tenemos en el html, despues, se va a agregar a cada uno de esos inputs le va a agregar el addeventlistener de blur (salir de foco) y cuando haga eso, llamarà a la funcion, la cual es valida

import { valida } from "../js/validaciones.js";

const inputs = document.querySelectorAll("input"); // todos los elementos de tipo input
inputs.forEach(input => {
    input.addEventListener("blur", (input) => {
        valida(input.target);    
    });
});