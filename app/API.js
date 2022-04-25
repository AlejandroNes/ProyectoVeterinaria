//APIs
const urlAPI = `http://localhost:4000/clientes`;

//agregar cita
export const agregarCita = async (objeto) => {
    await fetch(urlAPI, {
        method: "POST",
        body: JSON.stringify(objeto),
        headers: {
            "Content-Type": "application/json"
        }
    })

    //mandar a la pagina ver citas
    window.location.href = 'verCitas.html'
}

//mostrar citas
export const mostrarCitas = async() => {
    try {
        const respueta = await fetch(urlAPI);
        const data = await respueta.json();
        return data
    } catch (error) {
        console.log(error)
    }
}

//eliminar cita
export const eliminarCitaFetch = async (id) => {
    await fetch(`${urlAPI}/${id}`, {
        method: "DELETE"
    })
    window.location.href = 'verCitas.html'
}

//mostrar valores del objeto para EDITAR
export const mostrarValoresObj =  async (id) => {
    const respueta = await fetch(`${urlAPI}/${id}`);
    const data = respueta.json();
    return data;
}

//EDITAR la Cita
export const editarCitaFetch = async (objCita) => {
    await fetch( `${urlAPI}/${objCita.id}`, {
        method: "PUT",
        body: JSON.stringify(objCita),
        headers: {
            'Content-Type': 'application/json'
        }
    } )
    window.location.href = 'verCitas.html'
}