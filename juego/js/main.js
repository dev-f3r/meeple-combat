
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

// !
/* 
    * @val: string
*/
// ? cierra modal de armas o de personajes
function cerrarModal(val) {
    if (val == "armas") {
        modalArmas.style.display = "none"
        edicion = 0
        editarImg.src = "img/editar.png"
    }
    if (val == "personajes") {
        modalPersonaje.style.display = "none"
        edicion = 0
        editarImg.src = "img/editar.png"
    }
}
// !

cerrarModalPersonaje.addEventListener('click', function () {

    // modalPersonaje.style.display = "none"
    // edicion = 0
    // editarImg.src = "img/editar.png"
    cerrarModal("personajes") // !
})


cerrarModalArmas.addEventListener('click', function () {

    // modalArmas.style.display = "none"
    // edicion = 0
    // editarImg.src = "img/editar.png"
    cerrarModal("armas") // !
})



arma1ImgBtn.addEventListener('click', function () { armas(personaje.arma1, 1) })
arma1TxtBtn.addEventListener('click', function () { armas(personaje.arma1, 1) })

arma2ImgBtn.addEventListener('click', function () { armas(personaje.arma2, 2) })
arma2TxtBtn.addEventListener('click', function () { armas(personaje.arma2, 2) })











function avatar() { }



function atributos() { }

function equipo() { }

let slotSeleccionado // !

function armas(armaSeleccionada, slot) {
    slotSeleccionado = slot // !
    if (edicion == 1) {

        modalArmas.style.display = "grid"

    } else {

        // consolaTxt.innerHTML = "<br>" + armaSeleccionada
        // !
        contenConsola(
            slotSeleccionado == 1
                ? arma1.descripcion
                : arma2.descripcion
        )
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
        * @estadistica: string
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
        * @accion: string
        * @estadistica: string
     */
    // ? modifica los valores dependiendo de la estadistica
    function modificarValores(accion, estadistica) {
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

{ // * eventListeners de los atributos
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

{ // * eventListeners de habilidades
    habilidad1Btn.addEventListener('click', () => {
        if (edicion) {
            let val = prompt("Ingrese habilidad")
            habilidad1Txt.textContent = val
        }
    })

    habilidad2Btn.addEventListener('click', () => {
        if (edicion) {
            let val = prompt("Ingrese habilidad")
            habilidad2Txt.textContent = val
        }
    })

    habilidad3Btn.addEventListener('click', () => {
        if (edicion) {
            let val = prompt("Ingrese habilidad")
            habilidad3Txt.textContent = val
        }
    })
}

{ // * Funciones para cambiar armas
    /* 
        * @arma: string
     */
    // ? cambia de arma
    function cambiarArma(arma) {
        // ? crea una referencia al objeto arma1 o arma2, se basa en slotSeleccionado, revisar función armas()
        let seleccion = slotSeleccionado === 1 ? arma1 : arma2

        switch (arma) {
            case 'daga':
                // cambiar objeto arma1 o arma2
                seleccion.nombre = "Daga"
                seleccion.icono = "img/daga.png"
                seleccion.danno = 1
                seleccion.descripcion = "Arma a una mano <br> 1 Acción / 100% de ataque como daño físico"

                break;
            case 'espada':
                seleccion.nombre = "Espada"
                seleccion.icono = "img/espada.png"
                seleccion.danno = 1.5
                seleccion.descripcion = "Arma a dos manos <br> 2 Acciones / 150% de ataque como daño físico"
                break;
            case 'arco':
                seleccion.nombre = "Arco"
                seleccion.icono = "img/arco.png"
                seleccion.danno = 1.75
                seleccion.descripcion = "Arma a distancia <br>  3 casilleros x ataque / 3 Acciones / 175% de ataque como daño físico"
                break;
            case 'arrojadiza':
                seleccion.nombre = "Arrojadiza"
                seleccion.icono = "img/arrojadiza.png"
                seleccion.danno = 0.75
                seleccion.descripcion = "Arma arrojadiza <br> 3 casillero x ataque / 2 Acciones / 75% de ataque como daño físico"
                break;
            case 'punno':
                seleccion.nombre = "Puños"
                seleccion.icono = "img/punno.png"
                seleccion.danno = 0.75
                seleccion.descripcion = "Arma natural <br> 1 Acción / 75% de ataque como daño físico"
                break;
            case 'escudo':
                seleccion.nombre = "Escudo"
                seleccion.icono = "img/escudo.png"
                seleccion.danno = 0.5
                seleccion.descripcion = "Escudo <br> Permite bloquear ataques fuera de turno / 1 Accion / 50% de ataque como daño físico"
                break;
            case 'magia':
                seleccion.nombre = "Mano"
                seleccion.icono = "img/magia.png"
                seleccion.danno = 1
                seleccion.descripcion = "Arma a una mano <br> 1 Acción / 100% de ataque como daño físico"
                break;
            case 'varita':
                seleccion.nombre = "Varita"
                seleccion.icono = "img/varita.png"
                seleccion.danno = 1
                seleccion.descripcion = "Arma a distancia <br>  3 casilleros x ataque / 1 Accion / 100% de ataque como daño mágico"
                break;
            case 'baculo':
                seleccion.nombre = "Baculo"
                seleccion.icono = "img/baculo.png"
                seleccion.danno = 1.5
                seleccion.descripcion = "Arma a distancia <br>  2 casilleros x ataque / 2 Acciones / 150% de ataque como daño mágico"
                break;
            case 'totem':
                seleccion.nombre = "Totem"
                seleccion.icono = "img/totem.png"
                seleccion.danno = 1
                seleccion.descripcion = "Arma a distancia <br>  2 casilleros x ataque / 2 Acciones / 100% de ataque como daño mágico"
                break;
            case 'runa':
                seleccion.nombre = "Runa"
                seleccion.icono = "img/runa.png"
                seleccion.danno = 0.75
                seleccion.descripcion = "Arma a distancia <br> 3 casilleros x ataque / 2 Acciones / 75% de ataque como daño mágico"
                break;
            case 'hojaruna':
                seleccion.nombre = "Hoja Runa"
                seleccion.icono = "img/hojaruna.png"
                seleccion.danno = 1
                seleccion.descripcion = "Arma mixta <br>  1 casilleros x ataque / 2 Acciones / 100% de ataque como daño fíisico o mágico"
                break;

            default:
                break;
        }

        // reflejar cambios
        modalArmas.style.display = "none"
        mostrarCambioArma()
        cerrarModal("armas")
        cerrarEdicion()
    }
}
{ // * eventListeners de armas
    dagaBtn.addEventListener('click', () => {
        cambiarArma('daga')
    })

    espadaBtn.addEventListener('click', () => {
        cambiarArma('espada')
    })

    arcoBtn.addEventListener('click', () => {
        cambiarArma('arco')
    })

    arrojadizaBtn.addEventListener('click', () => {
        cambiarArma('arrojadiza')
    })

    punnoBtn.addEventListener('click', () => {
        cambiarArma('punno')
    })

    escudoBtn.addEventListener('click', () => {
        cambiarArma('escudo')
    })

    magiaBtn.addEventListener('click', () => {
        cambiarArma('magia')
    })

    varitaBtn.addEventListener('click', () => {
        cambiarArma('varita')
    })

    baculoBtn.addEventListener('click', () => {
        cambiarArma('baculo')
    })

    totemBtn.addEventListener('click', () => {
        cambiarArma('totem')
    })

    runaBtn.addEventListener('click', () => {
        cambiarArma('runa')
    })

    hojarunaBtn.addEventListener('click', () => {
        cambiarArma('hojaruna')
    })
}

{ // * helpers
    /* 
        * @estadistica: string
    */
    // ? muestra la estadistica
    function mostrarEstadistica(estadistica) {
        // TODO: modificar leyenda de cada atributo
        let data = `${estadistica} ${personaje[estadistica]}`
        contenConsola(data)
    }

    /* 
        * @val: string
    */
    // ? modifica el contenido de la consola
    function contenConsola(val) {
        consolaTxt.innerHTML = val
    }

    // ? muestra el cambio de arma
    function mostrarCambioArma() {
        arma1Img.src = arma1.icono
        arma1Txt.textContent = arma1.nombre

        arma2Img.src = arma2.icono
        arma2Txt.textContent = arma2.nombre
    }

    /* 
        * @slot: number
    */
    // ? muestra descripcion de arma
    function mostrarDescripcionArma(slot) {
        let seleccion = slot == 1 ? arma1 : arma2
        contenConsola(seleccion.descripcion)
    }
}