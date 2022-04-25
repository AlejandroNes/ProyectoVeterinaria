import { mostrarCitas, eliminarCitaFetch } from './API.js';

(() => {
    //variables
    const caja = document.querySelector("#caja");

    caja.addEventListener("click", eliminarCita);
    document.addEventListener("DOMContentLoaded", async () => {
        while(caja.firstChild){
            caja.removeChild(caja.firstChild);
        }
        const arrayCitas = await mostrarCitas()
        arrayCitas.forEach(item => {
            //desestructuramos
            const { nombre, mascota, tipo, descripcion, id } = item
            //creamos el script
            const objeto = document.createElement("div");
            objeto.className = "col-12 col-sm-6 col-md-4 p-4";
            objeto.innerHTML = `
            <div class="alert alert-white border shadow-sm mb-0" role="alert">
            <h4 class="alert-heading">${mascota}</h4>
             <p>${descripcion} <br /> <span> Tipo: ${tipo}<span/> <br /> <span> Dueño -${nombre}<span/></p>
             <div class="mb-0 border-top pt-3">
                <a id="eliminar" href="#" data-id="${id}" class="btn btn-sm btn-danger eliminar">
                     <i class="bi bi-trash"></i>
                </a>
                <a id="editar" href="editarCita.html?id=${id}" class="btn btn-sm btn-warning">
                    <i class="bi bi-pencil-square"></i>
               </a>
            </div>
           </div>
            `
            caja.append(objeto)
        });
    })

    //eliminar cita
    function eliminarCita(e){
        if(e.target.classList.contains("eliminar")){
            let confirmar = confirm("are you sure?")
            if(confirmar){
                const citaID = parseInt(e.target.getAttribute("data-id"));
                eliminarCitaFetch(citaID);
            }else{
                console.log('cancelado')
            }
            //consultar API
        }
    }

})()