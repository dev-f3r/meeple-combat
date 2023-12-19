/**
 * Guarda el estado de la lista de esbirros en el almacenamiento local.
 */
export function guardarEstadoListaEsbirros() {
    // Convierte la lista de esbirros a una cadena JSON.
    const esbirrosString = JSON.stringify(esbirros);

    // Almacena la cadena JSON en el almacenamiento local con la clave 'listaEsbirros'.
    localStorage.setItem('listaEsbirros', esbirrosString);
}

/**
 * Carga el estado previamente guardado de la lista de esbirros desde el almacenamiento local.
 * @returns {Array} - La lista de esbirros recuperada desde el almacenamiento local.
*/
export function cargarEstadoListaEsbirros() {
    // Obtiene la cadena JSON almacenada en el almacenamiento local con la clave 'listaEsbirros'.
    const esbirrosString = localStorage.getItem('listaEsbirros');

    // Parsea la cadena JSON y, si es nula, asigna un array vacío.
    const esbirrosData = JSON.parse(esbirrosString) || [];

    // Convierte los objetos simples de esbirro a instancias de la clase Esbirro.
    const lista = esbirrosData.map(data => new Esbirro(data));

    // Devuelve la lista de esbirros.
    return lista;
}


/**
 * Guarda el estado del personaje en el almacenamiento local.
 */
export function guardarEstadoPersonaje() {
    // Convierte el objeto del personaje a una cadena JSON.
    const personajeString = JSON.stringify(personaje);

    // Almacena la cadena JSON en el almacenamiento local con la clave 'personaje'.
    localStorage.setItem('personaje', personajeString);

    localStorage.setItem('arma1', JSON.stringify(arma1))
    localStorage.setItem('arma2', JSON.stringify(arma2))

    localStorage.setItem('equipo1', JSON.stringify(equipo1))
    localStorage.setItem('equipo2', JSON.stringify(equipo2))
    localStorage.setItem('equipo3', JSON.stringify(equipo3))

    localStorage.setItem('habilidad1', JSON.stringify(habilidad1))
    localStorage.setItem('habilidad2', JSON.stringify(habilidad2))
    localStorage.setItem('habilidad3', JSON.stringify(habilidad3))
}

/**
 * Carga el estado previamente guardado del personaje desde el almacenamiento local.
 * @returns {Object} - El objeto del personaje recuperado desde el almacenamiento local.
 */
export function cargarEstadoPersonaje() {
    let output = {}

    // Obtiene la cadena JSON almacenada en el almacenamiento local con la clave 'personaje'.
    output.personaje = JSON.parse(localStorage.getItem('personaje'))

    output.arma1 = JSON.parse(localStorage.getItem('arma1'))
    output.arma2 = JSON.parse(localStorage.getItem('arma2'))

    output.equipo1 = JSON.parse(localStorage.getItem('equipo1'))
    output.equipo2 = JSON.parse(localStorage.getItem('equipo2'))
    output.equipo3 = JSON.parse(localStorage.getItem('equipo3'))

    output.habilidad1 = JSON.parse(localStorage.getItem('habilidad1'))
    output.habilidad2 = JSON.parse(localStorage.getItem('habilidad2'))
    output.habilidad3 = JSON.parse(localStorage.getItem('habilidad3'))


    // Parsea la cadena JSON y devuelve el objeto del personaje.
    return output
}


/* 
    * @text: sring
*/
// ? Elimina los acentos de un string
export function quitarAcentos(text) {
    return text
        .normalize('NFD') // decompose accented characters into their base character and accent character
        .replace(/[\u0300-\u036f]/g, '') // remove the accent characters
        .toUpperCase()
}

// ? Limpia la consola si no esta en modo edición, caso contrario habre el promt de comandos
consolaBtn.addEventListener('click', () => {
    if (!edicion) {
        consolaBtn.innerHTML = ""
        ocultarControlesCambioEsbirro()
        ocultarBtnArrivaAbajo()
        flagControlesCambioEsbirro = false
    } else if (edicion) {
        tipoIngreso = "comando"
        mostrarInputComandos()
    }
})

// ? Oculta los botones de edición, y cambia la var edición a 0
export function cerrarEdicion() {
    edicion = 0
    editarImg.src = "img/editar.png"

    ocultarBtnArrivaAbajo()
    experienciaTxt.style.display = "none"

    tipoIngreso = "comando"
    ocultarInputExperiencia()
    ocultarInputComandos()

    guardarEstadoListaEsbirros()
    guardarEstadoPersonaje()
}
/* 
    * @estadistica: string
*/
// ? Muestra la estadistica
export function mostrarEstadistica(tipo, estadistica) {
    let data

    if (tipo === "personaje") data = `${capitalizarPrimeraLetra(estadistica)} ${personaje[estadistica]}`
    else data = `${capitalizarPrimeraLetra(estadistica)} ${esbirroSeleccionado[estadistica]}`

    // * Para la funcion accion()
    switch (estadistica) {
        case "ataque":
            slotEstadisticaSeleccionada = 1
            break
        case "esquiva":
            slotEstadisticaSeleccionada = 2
            break
        case "bloqueo":
            slotEstadisticaSeleccionada = 3
            break
        case "velocidad":
            slotEstadisticaSeleccionada = 4
            break
        default:
            break
    }
    objetoAccion = "estadistica"

    contenConsola(data)
}

/* 
    * @val: string
*/
// ? Modifica el contenido de la consola
export function contenConsola(val) {
    consolaBtn.innerHTML = val

    arribaBtn.style.display = "none"
    abajoBtn.style.display = "none"
    if (!esPersonaje) {
        izquierdaBtn.style.display = "none"
        derechaBtn.style.display = "none"
    }
}

/* 
    * @slot: number
*/
// ? Muestra descripcion de arma
export function mostrarDescripcionArma(slot) {
    let seleccion = slot == 1 ? arma1 : arma2
    contenConsola(seleccion.descripcion)
}

// ? Muestra los botones de incremento y decremento
export function mostrarBtnArribaAbajo() {
    arribaBtn.style.display = "block"
    abajoBtn.style.display = "block"
    ocultarControlesCambioEsbirro()
    flagControlesCambioEsbirro = false
}

// ? Oculta los botones de incremento y decremento
export function ocultarBtnArrivaAbajo() {
    arribaBtn.style.display = "none"
    abajoBtn.style.display = "none"
    if (esPersonaje) guardarEstadoPersonaje()
    else guardarEstadoListaEsbirros()
}

/**
 * ? Capitaliza la primera letra de un string.
 *
 * @param {string} texto - El string que se va a capitalizar.
 * @returns {string} - El string con la primera letra en mayúscula.
 */
export function capitalizarPrimeraLetra(texto) {
    // Verifica si el texto está vacío o es nulo y devuelve el mismo texto sin cambios
    if (!texto) {
        return texto;
    }

    // Capitaliza la primera letra del texto y la concatena con el resto del texto en minúsculas
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

/**
 * ? Elimina los espacios en blanco de un texto.
 * 
 * @param {string} texto - El texto del cual se eliminarán los espacios en blanco.
 * @returns {string} El texto sin espacios en blanco.
 */
export function quitarEspacios(texto) {
    return texto.split(" ").join("")
}