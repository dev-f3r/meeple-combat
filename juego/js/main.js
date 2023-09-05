
document.body.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
});
document.body.addEventListener('keydown', (e) => {
    e.preventDefault();
    return false;
});
document.body.addEventListener('selectstart', (e) => {
    e.preventDefault();
    return false;
});
document.body.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
});




var edicion = 0

var personaje = {

    nombre: "BIENVENIDO",
    meeple: "img/logo-meeple-combat.png",
    descripcion: "",

    experiencia: 0,

    ataque: 0,
    esquiva: 0,
    bloqueo: 0,
    velocidad: 0,

    vida: 0,
    vidaMaxima: 0,

    poder: 0,
    poderMaximo: 0,

    equipo1: "",
    equipo2: "",
    equipo3: "",

    arma1: "Una Mano",
    arma2: "Dos Manos",

    habilidad1: "HABILIDAD 1",
    habilidad2: "HABILIDAD 2",
    habilidad3: "HABILIDAD 3",

}

// ! CODIGO FER
let valorExperiencia = {
    ataque: 3,
    esquiva: 6,
    bloqueo: 9,
    velocidad: 12,
    vida: 15,
    poder: 18
}
// ! CODIGO FER

var arma1 = {

    nombre: "Arma1",
    icono: "img/nada.png",
    descripcion: "",
    danno: 0,

}

var arma2 = {

    nombre: "Arma2",
    icono: "img/nada.png",
    descripcion: "",
    danno: 0,

}

var equipo1 = {

    nombre: "Equipo1",
    icono: "img/nada.png",
    descripcion: "",

    nivel: 1,

    ataque: 0,
    esquiva: 0,
    bloqueo: 0,
    velocidad: 0,
    vidaMaxima: 0,
    poderMaximo: 0,

}

var equipo2 = {

    nombre: "Equipo1",
    icono: "img/nada.png",
    descripcion: "",

    nivel: 1,

    ataque: 0,
    esquiva: 0,
    bloqueo: 0,
    velocidad: 0,
    vidaMaxima: 0,
    poderMaximo: 0,

}

var equipo3 = {

    nombre: "Equipo1",
    icono: "img/nada.png",
    descripcion: "",

    nivel: 1,

    ataque: 0,
    esquiva: 0,
    bloqueo: 0,
    velocidad: 0,
    vidaMaxima: 0,
    poderMaximo: 0,

}







portadaImg.src = personaje.meeple

nombreTxt.textContent = personaje.nombre

ataqueTxt.textContent = personaje.ataque
esquivaTxt.textContent = personaje.esquiva
bloqueoTxt.textContent = personaje.bloqueo
velocidadTxt.textContent = personaje.velocidad


vidaTxt.textContent = personaje.vida
poderTxt.textContent = personaje.poder

equipo1Txt.textContent = personaje.equipo1
equipo2Txt.textContent = personaje.equipo2
equipo3Txt.textContent = personaje.equipo3


habilidad1Txt.textContent = personaje.habilidad1
habilidad2Txt.textContent = personaje.habilidad2
habilidad3Txt.textContent = personaje.habilidad3








editarBtn.addEventListener('click', function () {

    if (edicion == 0) {

        edicion = 1
        editarImg.src = "img/guardar.png"
        contenConsola("Seleccione nombre, slot de arma o habilidad")
    } else {

        edicion = 0
        editarImg.src = "img/editar.png"
        cerrarEdicion()
    }

})

portadaBtn.addEventListener('click', function () {

    if (edicion == 1) {

        modalPersonaje.style.display = "grid"

    } else {


    }

})

cerrarModalPersonaje.addEventListener('click', function () {

    modalPersonaje.style.display = "none"
    edicion = 0
    editarImg.src = "img/editar.png"

})

cerrarModalArmas.addEventListener('click', function () {

    modalArmas.style.display = "none"
    edicion = 0
    editarImg.src = "img/editar.png"

})



arma1ImgBtn.addEventListener('click', function () { armas(personaje.arma1, 1) })
arma1TxtBtn.addEventListener('click', function () { armas(personaje.arma1, 1) })

arma2ImgBtn.addEventListener('click', function () { armas(personaje.arma2, 2) })
arma2TxtBtn.addEventListener('click', function () { armas(personaje.arma2, 2) })











function avatar() { }



function atributos() { }

function equipo() { }

function armas(armaSeleccionada, slot) {

    if (edicion == 1) {

        modalArmas.style.display = "grid"

    } else {

        consolaTxt.innerHTML = "<br>" + armaSeleccionada

    }



}

function accion() { }

function habilidades() { }


// !!!!!!! CODIGO FERNANDO !!!!!!!
// ! Instalar Better Comments !

// * variable global para guardar estadistica que se esta modificando
let estadisticaSeleccionada

{ // * Funciones para manipulación de la experiencia
    function establecerExperiencia() {
        let valor = prompt("CANTIDAD")

        personaje.experiencia = Number(valor)
        experienciaBtn.innerHTML = `EXP <br> ${valor}`
        experienciaBtn.style.cssText = "border: solid #fff;    border-width: calc(45.781px - 41.203px) calc(50.828px - 45.734px) calc(45.781px - 41.203px) calc(50.828px - 45.734px);         background: #000; color: #fff;"
    }

    function aumentarDisminuirExperiencia(accion, estadistica) {
        let valor = valorExperiencia[estadistica]
        // console.log('mas', valor)

        /* switch (estadistica) {
            case 'ataque':
                valor = 3
                break;
            case 'esquiva':
                valor = 6
                break;
            case 'bloqueo':
                valor = 9
                break;
            case 'velocidad':
                valor = 12
                break;
            case 'vida':
                valor = 15
                break;
            case 'poder':
                valor = 18
                break;
            default:
                break;
        } */

        // personaje.experiencia += accion == "mas" ? 1 : -1
        personaje.experiencia += accion == 'mas' ? valor : valor * -1
        experienciaBtn.innerHTML = `EXP <br> ${personaje.experiencia}`
    }
}

{ // * eventListeners de los botones para aceptar promts
    experienciaBtn.addEventListener('click', () => {
        if (edicion) {
            establecerExperiencia()
        }
    })
}

{ // * Funciones para modificar las estadisticas de los personajes
    // ? oculta los botones de edición
    function cerrarEdicion() {
        arribaBtn.style.display = "none"
        abajoBtn.style.display = "none"
    }

    /* 
        * estadistica: string
        * sin retorno
    */
    // ? muestra los botones de edición, y modifica "estadisticaSeleccionada"
    function modificarEstadistica(estadistica) {
        arribaBtn.style.display = "block"
        abajoBtn.style.display = "block"

        estadisticaSeleccionada = estadistica

        // "ataque 0"
        let data = `${estadistica} ${personaje[estadistica]}`
        contenConsola(data)

        // switch (estadistica) {
        //     case 'ataque':
        //         data = `${estadistica} ${personaje[estadistica]}`
        //         consolaTxt.innerHTML = data

        //         break

        //     case 'esquiva':
        //         data = `${estadistica} ${personaje[estadistica]}`
        //         consolaTxt.innerHTML = data
        //         break

        //     case 'mitigacion':
        //         data = `${estadistica} ${personaje[estadistica]}`
        //         consolaTxt.innerHTML = data
        //         break

        //     case 'velocidad':
        //         data = `${estadistica} ${personaje[estadistica]}`
        //         consolaTxt.innerHTML = data
        //         break

        //     default:
        //         console.error('Estadistica no encontrada')
        //         break
        // }
    }

    /* 
        * accion: string
        * estadistica: string
        * sin retorno
     */
    // ? modifica los valores dependiendo de la estadistica
    function modificarValores(accion, estadistica) {
        console.log('mas')
        let data = ""

        // * componenetes
        let consola = consolaTxt
        let estadisticaTxt = document.getElementById(`${estadistica}Txt`)

        switch (accion) {
            case 'mas':
                if (personaje.experiencia >= valorExperiencia[estadistica]) {
                    ///// TODO: verificar EXP
                    ///// TODO: decrementar EXP
                    personaje[estadistica]++
                    data = `${estadistica} ${personaje[estadistica]}`
                    
                    // * decrementar exp
                    aumentarDisminuirExperiencia('menos', estadistica)

                    // * cambiar contenido mostrado
                    consola.innerHTML = data
                    estadisticaTxt.innerHTML = personaje[estadistica]
                } else {
                    consola.innerHTML = "Experiencia insuficiente"
                }
                break

            case 'menos':
                ///// TODO: incrementar EXP
                if (personaje[estadistica] > 0) {
                    personaje[estadistica]--

                    // decrementar exp
                    aumentarDisminuirExperiencia('mas', estadistica)

                    // * cambiar contenido mostrado
                    data = `${estadistica} ${personaje[estadistica]}`
                    consola.innerHTML = data
                    estadisticaTxt.innerHTML = personaje[estadistica]
                }
                break

            default:
                break
        }
    }
}

{ // * eventListener de los atributos
    ataqueBtn.addEventListener('click', () => {
        if (edicion) modificarEstadistica('ataque')
        else mostrarEstadistica('ataque')
    })
    esquivaBtn.addEventListener('click', () => {
        if (edicion) modificarEstadistica('esquiva')
        else mostrarEstadistica('esquiva')
    })
    bloqueoBtn.addEventListener('click', () => {
        if (edicion) modificarEstadistica('bloqueo')
        else mostrarEstadistica('bloqueo')
    })
    velocidadBtn.addEventListener('click', () => {
        if (edicion) modificarEstadistica('velocidad')
        else mostrarEstadistica('velocidad')
    })
    vidaBtn.addEventListener('click', () => {
        if (edicion) modificarEstadistica('vida')
        else mostrarEstadistica('vida')
    })
    poderBtn.addEventListener('click', () => {
        if (edicion) modificarEstadistica('poder')
        else mostrarEstadistica('poder')
    })
}

{ // * eventListeners de los botones arriba y abajo
    arribaBtn.addEventListener('click', () => {
        modificarValores('mas', estadisticaSeleccionada)
    })

    abajoBtn.addEventListener('click', () => {
        modificarValores('menos', estadisticaSeleccionada)
    })
}

{ // * helpers
    /* 
    * estadistica: string
    * sin retorno
*/
    // ? muestra la estadistica
    function mostrarEstadistica(estadistica) {
        // TODO: modificar leyenda de cada atributo
        let data = `${estadistica} ${personaje[estadistica]}`
        contenConsola(data)
    }

    /* 
        * val: string
        * sin retorno
    */
    // ? modifica el contenido de la consola
    function contenConsola(val) {
        consolaTxt.innerHTML = val
    }
}