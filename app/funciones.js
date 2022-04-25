//FUNCIONES

export const validarCampos = (objeto) => {
    return Object.values(objeto).every( item => item !== ''  );
}


export const mostrarAlerta = (mensaje) => {
    const error = document.querySelector(".error");
    if(!error){
        const alerta = document.querySelector(".alerta");
        const alert = document.createElement('div');
        alert.textContent = mensaje;
        alert.classList.add("alert", "alert-danger", "text-center", "error");
        alerta.appendChild(alert)

        //tiempo de desaparecer
        setTimeout( () => {
            alert.remove();
        },2000 )
    }
}