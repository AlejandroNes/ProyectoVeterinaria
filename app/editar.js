import { mostrarValoresObj, editarCitaFetch } from './API.js';
import {validarCampos, mostrarAlerta} from './funciones.js';
(()=>{

    //variables
    const formulario = document.querySelector("#formulario");
    const nombreInput = document.querySelector("#nombre");
    const mascotaInput = document.querySelector("#mascota");
    const tipoInput = document.querySelector("#tipo");
    const descripcionInput = document.querySelector("#descripcion");
    const idInput = document.querySelector("#id");

    //eventos
    formulario.addEventListener("submit", validarFormulario);
    document.addEventListener('DOMContentLoaded', async ()=> {

        //Saber el ID del objeto
        let objetoID = new URLSearchParams(window.location.search);
        objetoID = parseInt(objetoID.get('id'));
        
        //traer valores de la API
        const objCita = await mostrarValoresObj(objetoID);
        const { nombre,mascota,tipo,descripcion,id } = objCita

        //insertamos en el formulario
        nombreInput.value = nombre;
        mascotaInput.value = mascota;
        tipoInput.value = tipo;
        descripcionInput.value = descripcion;
        idInput.value = id;

        
    })

    function validarFormulario(e){
        e.preventDefault();
        //creamos el objeto
        const nuevoObj = {
            nombre: nombreInput.value,
            mascota: mascotaInput.value,
            tipo: tipoInput.value,
            descripcion: descripcionInput.value,
            id: idInput.value
        }

        if(!validarCampos(nuevoObj)){
            mostrarAlerta("Complete el formulario");
            return
        }
        editarCitaFetch(nuevoObj);
    }
})()