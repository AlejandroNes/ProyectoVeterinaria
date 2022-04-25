//IMPORTACIONES
import {validarCampos, mostrarAlerta} from './funciones.js';
import {agregarCita} from './API.js';
(()=>{
    console.log("agregar cita")
    //variables
    const formulario = document.querySelector("#formulario");

    //eventos
        formulario.addEventListener( "submit", validarForm );
    

    //funciones
    function validarForm(e){
        e.preventDefault();
        const nombre = document.querySelector("#nombre").value;
        const mascota = document.querySelector("#mascota").value;
        const tipo = document.querySelector("#tipo").value;
        const descripcion = document.querySelector("#descripcion").value;

        //validar que no aya campos vacios
        const objCita={nombre, mascota, tipo, descripcion};
       
        //mostrar alerta
        if(!validarCampos(objCita)){
            //mostrar alerta
            mostrarAlerta('Complete los campos');
            return
        }
            //consultar API
            console.log('validando');
            agregarCita(objCita);
    }

})()

