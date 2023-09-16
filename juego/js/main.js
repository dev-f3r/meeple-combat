
document.body.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
});
// TODO: Descomentar el siguiente bloque
// document.body.addEventListener('keydown', (e) => {
//     e.preventDefault();
//     return false;
// });
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

    // * nivel del equipamiento
    /* equipo1: 0,
    equipo2: 0,
    equipo3: 0, */

    // * nombre de arma
    /* arma1: "Una Mano",
    arma2: "Dos Manos", */

    // * nombre de habilidades
    /* habilidad1: "HABILIDAD 1",
    habilidad2: "HABILIDAD 2",
    habilidad3: "HABILIDAD 3",
     */
}



// ! CODIGO FER
let valorExperiencia = {
    ataque: 3,
    esquiva: 3,
    bloqueo: 3,
    velocidad: 6,
    vidaMaxima: 1,
    poderMaximo: 1
}

const dictHabilidades = {

    "COBERTURA": "Aumenta 300% la mitigacíon ante proyectiles físicos durante 3 turnos (al moverse se pierde la cobertura) <br> Poder(3) / Requiere Escudo",

    "EMBESTIDA CON ESCUDO": "Golpeas al objetivo generandole 200% daño físico y derribandolo<br> Poder(3) / Requiere Escudo",

    "ATAQUE PODEROSO": "Carga tu golpe con energía<br> Poder min(1) / Sin Requerimentos",

    "SANAR": "Sanas al objetivo<br> Poder min(1) / Sin Requerimentos"

}

// * 1..2
let slotArmaSeleccionada = 1 // !
// * 1..4
let slotEstadisticaSeleccionada = 1 // !
// * arma || estadistica
let objetoAccion = "arma" // !
// ! CODIGO FER

var arma1 = {

    nombre: "Arma 1",
    icono: "img/nada.png",
    descripcion: "Espacio de arma 1",
    danno: 0,

}

var arma2 = {

    nombre: "Arma 2",
    icono: "img/nada.png",
    descripcion: "Espacio de arma 2",
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

var habilidad1 = {
    nombre: "Nombre habilidad 1",
    descripcion: "Descripción de habilidad 1"
}

var habilidad2 = {
    nombre: "Nombre habilidad 2",
    descripcion: "Descripción de habilidad 2"
}

var habilidad3 = {
    nombre: "Nombre habilidad 3",
    descripcion: "Descripción de habilidad 3"

}
/* 
    ? Refresca el texto y la imagen de los siguientes componentes:
        portada, nombre, estadisticas (ataque, esquiva, etc), equipamiento, arma slot 1, arma slot 2, habilidades
*/
function imprimir() {

    portadaImg.src = personaje.meeple

    nombreTxt.textContent = personaje.nombre

    ataqueTxt.textContent = personaje.ataque + equipo1.ataque + equipo2.ataque + equipo3.ataque
    esquivaTxt.textContent = personaje.esquiva + equipo1.esquiva + equipo2.esquiva + equipo3.esquiva
    bloqueoTxt.textContent = personaje.bloqueo + equipo1.bloqueo + equipo2.bloqueo + equipo3.bloqueo
    velocidadTxt.textContent = personaje.velocidad + equipo1.velocidad + equipo2.velocidad + equipo3.velocidad

    vidaTxt.textContent = personaje.vida

    poderTxt.textContent = personaje.poder

    equipo1Txt.textContent = personaje.equipo1
    equipo2Txt.textContent = personaje.equipo2
    equipo3Txt.textContent = personaje.equipo3

    equipo1Img.src = equipo1.icono
    equipo2Img.src = equipo2.icono
    equipo3Img.src = equipo3.icono

    arma1Txt.textContent = arma1.nombre
    arma2Txt.textContent = arma2.nombre
    arma1Img.src = arma1.icono
    arma2Img.src = arma2.icono

    // habilidad1Txt.textContent = personaje.habilidad1
    // habilidad2Txt.textContent = personaje.habilidad2
    // habilidad3Txt.textContent = personaje.habilidad3
    habilidad1Txt.textContent = habilidad1.nombre
    habilidad2Txt.textContent = habilidad2.nombre
    habilidad3Txt.textContent = habilidad3.nombre

    experienciaTxt.textContent = personaje.experiencia
}
imprimir()

// portadaImg.src = personaje.meeple

// nombreTxt.textContent = personaje.nombre

// ataqueTxt.textContent = personaje.ataque
// esquivaTxt.textContent = personaje.esquiva
// bloqueoTxt.textContent = personaje.bloqueo
// velocidadTxt.textContent = personaje.velocidad


// vidaTxt.textContent = personaje.vida
// poderTxt.textContent = personaje.poder

// equipo1Txt.textContent = personaje.equipo1
// equipo2Txt.textContent = personaje.equipo2
// equipo3Txt.textContent = personaje.equipo3


// habilidad1Txt.textContent = personaje.habilidad1
// habilidad2Txt.textContent = personaje.habilidad2
// habilidad3Txt.textContent = personaje.habilidad3








editarBtn.addEventListener('click', function () {

    if (edicion == 0) {
        edicion = 1
        editarImg.src = "img/guardar.png"
        
        contenConsola("Seleccione nombre, slot de arma o habilidad")
        ocultarBtnArrivaAbajo()

        experienciaTxt.style.display = "flex"
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
    * @opcion: string
*/
// ? cierra modal de armas, de personajes o de equipamiento
function cerrarModal(opcion) {
    switch (opcion) {
        case "armas":
            modalArmas.style.display = "none"
            edicion = 0
            editarImg.src = "img/editar.png"
            break;

        case "personajes":
            modalPersonaje.style.display = "none"
            edicion = 0
            editarImg.src = "img/editar.png"
            break;

        case "equipamiento":
            modalEquipo.style.display = "none"
            edicion = 0
            editarImg.src = "img/editar.png"
            break;

        default:
            break;
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

cerrarModalEquipo.addEventListener('click', function () {

    // modalEquipo.style.display = "none"
    // edicion = 0
    // editarImg.src = "img/editar.png"

    cerrarModal("equipamiento")
})

arma1ImgBtn.addEventListener('click', function () { armas(personaje.arma1, 1) })
arma1TxtBtn.addEventListener('click', function () { armas(personaje.arma1, 1) })

arma2ImgBtn.addEventListener('click', function () { armas(personaje.arma2, 2) })
arma2TxtBtn.addEventListener('click', function () { armas(personaje.arma2, 2) })








/* 
    * @meeple: string
*/
// ? Funcion para cambio de personaje
function avatar(meeple) {

    if (edicion == 1) {

        modalPersonaje.style.display = "grid"


        if (meeple == "GUERRERO") {

            edicionTotal = 0

            personaje.experiencia = 0

            personaje.nombre = "GUERRERO"
            personaje.meeple = "img/guerrero.png"
            personaje.descripcion = "Descripción gerrero"

            personaje.ataque = 4
            personaje.esquiva = 2
            personaje.bloqueo = 5
            personaje.velocidad = 3
            personaje.vida = 40
            personaje.vidaMaxima = 40
            personaje.poder = 40
            personaje.poderMaximo = 40

            personaje.equipo1 = ""
            personaje.equipo2 = ""
            personaje.equipo3 = ""

            personaje.arma1 = "Una Mano"
            personaje.arma2 = "Escudo"

            // personaje.habilidad1 = "EMBESTIDA CON ESCUDO"
            // personaje.habilidad2 = "COBERTURA"
            // personaje.habilidad3 = "ATAQUE PODEROSO"
            habilidad1.nombre = "EMBESTIDA CON ESCUDO"
            habilidad1.descripcion = dictHabilidades[habilidad1.nombre]
            habilidad2.nombre = "COBERTURA"
            habilidad2.descripcion = dictHabilidades[habilidad2.nombre]
            habilidad3.nombre = "ATAQUE PODEROSO"
            habilidad3.descripcion = dictHabilidades[habilidad3.nombre]



            // modalPersonaje.style.display = "none"
            cerrarModal("personajes")

            // edicion = 0
            // editarImg.src = "img/editar.png"
            cerrarEdicion()

            // armas("Una Mano", 1)
            cambiarArma("daga", 1)
            // armas("Escudo", 2)
            cambiarArma("escudo", 2)

            imprimir()

            contenConsola(personaje.descripcion)
            descripcionHabilidad(1)
            descripcionHabilidad(2)
            descripcionHabilidad(3)
        }

        // TODO: Agregar los demas personajes

    } else {
        contenConsola(`${personaje.nombre}<br>${personaje.descripcion}`)
    }

    imprimir()

}
portadaBtn.addEventListener('click', function () { avatar() })
guerreroBtn.addEventListener('click', function () { avatar("GUERRERO") })
// TODO: Agregar los demas evenListener de los personajes faltantes


function atributos() { }



let equipamientoSeleccionado // !

/* 
    * @slot: number
*/
// ? Funcion para mostrar el modal de equipamiento
function equipo(slot) {
    equipamientoSeleccionado = slot // !
    if (edicion == 1) {

        modalEquipo.style.display = "grid"

    } else {
        contenConsola(`Slot de equipamiento ${slot}`)
    }

}

equipo1Btn.addEventListener('click', function () { equipo(1) })
equipo2Btn.addEventListener('click', function () { equipo(2) })
equipo3Btn.addEventListener('click', function () { equipo(3) })

function armas(armaSeleccionada, slot) {
    slotArmaSeleccionada = slot // !
    objetoAccion = "arma" // !
    if (edicion == 1) {

        modalArmas.style.display = "grid"

    } else {
        // !
        contenConsola(
            slotArmaSeleccionada == 1
                ? arma1.descripcion
                : arma2.descripcion
        )
    }

}

// function accion() { }

function habilidades() { }


// !!!!!!! CODIGO FERNANDO !!!!!!!
// ! Instalar Better Comments !

// * variable global para guardar estadistica que se esta modificando
let estadisticaSeleccionada

{ // * Cambio en las estadisticas del personaje
    { // * Funciones para manipulación de la experiencia
        function establecerExperiencia() {
            let valor = prompt("CANTIDAD")

            personaje.experiencia = Number(valor)
            imprimir()
            cerrarEdicion()
        }

        function aumentarDisminuirExperiencia(accion, estadistica) {

            let valor

            if (accion == 'mas') { // ? Incrementa exp
                valor = (personaje[estadistica] === 0 ? 1 : personaje[estadistica] + 1) * valorExperiencia[estadistica]
            } else { // ? Decrementa exp
                valor = personaje[estadistica] * valorExperiencia[estadistica]
            }


            personaje.experiencia += accion == 'mas' ? valor : valor * -1
        }
    }

    { // * eventListeners del boton de experiencia
        experienciaBtn.addEventListener('click', () => {
            if (edicion) {
                establecerExperiencia()
            } else {
                ocultarBtnArrivaAbajo()
                contenConsola(`Experiencia: ${personaje.experiencia}`)
            }
        })
    }

    { // * Funciones para modificar las estadisticas de los personajes

        /* 
            * @estadistica: string
        */
        // ? Mustra los botones de incremento y decremento SOLO EN MODO EDICION, y modifica "estadisticaSeleccionada"
        function modificarEstadistica(estadistica) {
            mostrarBtnArrivaAbajo()

            estadisticaSeleccionada = estadistica

            // "ataque 0"
            let data = `${estadistica
                .charAt(0)
                .toUpperCase()
                + estadistica
                    .slice(1)} ${personaje[estadistica]}`
            contenConsola(data)

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

            // ? valor de experiencia minimo requerido
            let valor = (personaje[estadistica] + 1) * valorExperiencia[estadistica]

            if (accion === 'mas') {
                if (personaje.experiencia >= valor) {
                    personaje[estadistica]++
                    data = `${estadistica
                        .charAt(0)
                        .toUpperCase()
                        + estadistica
                            .slice(1)} ${personaje[estadistica]}`

                    // * decrementar exp
                    aumentarDisminuirExperiencia('menos', estadistica)

                    // * cambiar contenido mostrado
                    consola.innerHTML = data
                    imprimir()
                } else {
                    consola.innerHTML = "Experiencia ins]uficiente"
                }
            } else {
                if (personaje[estadistica] > 0) {
                    personaje[estadistica]--

                    if (estadistica === "vidaMaxima" && personaje.vidaMaxima < personaje.vida) {
                        personaje.vida = personaje.vidaMaxima
                    }

                    if (estadistica === "poderMaximo" && personaje.poderMaximo < personaje.poder) {
                        personaje.poder = personaje.poderMaximo
                    }

                    // * Incrementar exp
                    aumentarDisminuirExperiencia('mas', estadistica)

                    // * cambiar contenido mostrado
                    data = `${estadistica
                        .charAt(0)
                        .toUpperCase()
                        + estadistica
                            .slice(1)} ${personaje[estadistica]}`
                    consola.innerHTML = data
                    imprimir()
                }
            }
        }

        /* 
            * @accion: string
        */
        // ? Modifica la vida o el poder actual de personaje
        function masMenosVidaPoder(accion) {

            if (estadisticaSeleccionada === "vida") {
                if (accion === "mas") { // ? Incremento de vida
                    if (personaje.vida < personaje.vidaMaxima) personaje.vida++
                } else { // ? Decremento de vida
                    if (personaje.vida > 0) personaje.vida--
                }
                contenConsola(`Vida ${personaje.vida} / ${personaje.vidaMaxima}`)
            } else if (estadisticaSeleccionada === "poder") {
                if (accion === "mas") { // ? Incremento de poder
                    if (personaje.poder < personaje.poderMaximo) personaje.poder++
                } else { // ? Decremento de poder
                    if (personaje.poder > 0) personaje.poder--
                }
                contenConsola(`Poder ${personaje.poder} / ${personaje.poderMaximo}`)
            }
            imprimir()
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
            if (edicion) modificarEstadistica('vidaMaxima')
            else { // ? Muestra los boton de incremento y decremento
                mostrarBtnArrivaAbajo()
                estadisticaSeleccionada = "vida"

                contenConsola(`Vida ${personaje.vida} / ${personaje.vidaMaxima}`)
            }
        })
        poderBtn.addEventListener('click', () => {
            if (edicion) modificarEstadistica('poderMaximo')
            else { // ? Muestra los boton de incremento y decremento
                mostrarBtnArrivaAbajo()
                estadisticaSeleccionada = "poder"

                contenConsola(`Poder ${personaje.poder} / ${personaje.poderMaximo}`)
            }
        })
    }

    { // * eventListeners de los botones arriba y abajo
        arribaBtn.addEventListener('click', () => {
            if (edicion) modificarValores('mas', estadisticaSeleccionada)
            // ? Solo vida y poder se cambian en modo normal
            else masMenosVidaPoder('mas')
        })

        abajoBtn.addEventListener('click', () => {
            if (edicion) modificarValores('menos', estadisticaSeleccionada)
            // ? Solo vida y poder se cambian en modo normal
            else masMenosVidaPoder('menos')
        })
    }
}

{ // * Nombre de habilidades y nombre de personaje
    { //  * Descipción de habilidades
        /* 
            * @slot: number
        */
        function descripcionHabilidad(slot) {
            let habilidad = slot == 1
                ? habilidad1
                : slot == 2
                    ? habilidad2
                    : habilidad3

            contenConsola(habilidad.descripcion)
            cerrarEdicion()
        }
    }
    { // * Funcion para cambio de habilidad
        /* 
            * @slot: number
         */
        function cambiarHabilidad(slot) {
            let habilidad = slot == 1
                ? habilidad1
                : slot == 2
                    ? habilidad2
                    : habilidad3

            let nuevoNombre = prompt("Ingrese habilidad")
            habilidad.nombre = quitarAcentos(nuevoNombre)


            habilidad.descripcion = dictHabilidades[habilidad.nombre]

            cerrarEdicion()
            imprimir()
        }
    }
    { // * eventListeners de habilidades
        habilidad1Btn.addEventListener('click', () => {
            // ? Personalizar habilidad
            if (edicion) {
                cambiarHabilidad(1)
            } else {
                // ? Motrar descripción de habilidad 
                descripcionHabilidad(1)
            }
        })

        habilidad2Btn.addEventListener('click', () => {
            // ? Personalizar habilidad
            if (edicion) {
                cambiarHabilidad(2)
            } else {
                // ? Motrar descripción de habilidad 
                descripcionHabilidad(2)
            }
        })

        habilidad3Btn.addEventListener('click', () => {
            // ? Personalizar habilidad
            if (edicion) {
                cambiarHabilidad(3)
            } else {
                // ? Motrar descripción de habilidad 
                descripcionHabilidad(3)
            }
        })
    }
    { // * eventListener nombre personaje
        nombreBtn.addEventListener('click', () => {
            if (edicion) {
                let val = prompt("Nuevo nombre")
                personaje.nombre = val
                cerrarEdicion()
                imprimir()
            } else {
                contenConsola(personaje.descripcion)
                cerrarEdicion()
            }
        })

    }
}

{ // * Cambio de armas
    { // * Funciones para cambiar armas
        /* 
            * @arma: string
         */
        // ? cambia de arma
        function cambiarArma(arma, slot) {
            let seleccion
            if (slot) {
                seleccion = slot == 1 ? arma1 : arma2
            }
            // ? crea una referencia al objeto arma1 o arma2, se basa en slotArmaSeleccionada, revisar función armas()
            else seleccion = slotArmaSeleccionada === 1 ? arma1 : arma2

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
            // mostrarCambioArma()
            imprimir()
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
}

{ // * Cambio de equipamiento
    { // * Funciones para cambiar el equipamiento
        function cambiarEquipamiento(item) {
            let equipo

            switch (equipamientoSeleccionado) {
                case 1:
                    equipo = equipo1
                    personaje.equipo1 = 1
                    break
                case 2:
                    equipo = equipo2
                    personaje.equipo2 = 1
                    break
                case 3:
                    equipo = equipo3
                    personaje.equipo3 = 1
                    break
                default:
                    break
            }

            switch (item) {
                case 'armaduraligera': // TODO: Arreglar estadisticas de Armadura Ligera
                    equipo.nombre = "Armadura Ligera"
                    equipo.icono = "img/armaduraligera.png"
                    equipo.descripcion = ""
                    equipo.nivel = 1
                    equipo.ataque = 0
                    equipo.esquiva = 1
                    equipo.bloqueo = 0
                    equipo.velocidad = 0
                    equipo.vidaMaxima = 0
                    equipo.poderMaximo = 0

                    break;

                // TODO: Agregar los demas items

                default:
                    break;
            }

            imprimir()
            cerrarEdicion()
            cerrarModal('equipamiento')
        }

    }
    { // * eventListeners de equipamiento
        armaduraligeraBtn.addEventListener('click', () => {
            cambiarEquipamiento('armaduraligera')
        }
        )
        // TODO: Agregar los demas listeners para los items restantes
    }
}

{ // * Cambio de personaje
    { // * Funciones para cambio de personajes
        // ! Revisar avatar()
    }

}

{ // * Creación de personaje nuevo
    { // * Funciones para creación de un nuevo personaje
        function nuevoPersonaje() {
            personaje.nombre = "Nuevo Personaje"
            personaje.meeple = "img/new.png"
            personaje.descripcion = ""
            personaje.experiencia = 200
            personaje.ataque = 0
            personaje.esquiva = 0
            personaje.bloqueo = 0
            personaje.velocidad = 0
            personaje.vida = 0
            personaje.vidaMaxima = 0
            personaje.poder = 0
            personaje.poderMaximo = 0
            personaje.equipo1 = ""
            personaje.equipo2 = ""
            personaje.equipo3 = ""
            personaje.arma1 = "Una Mano"
            personaje.arma2 = "Dos Manos"
            personaje.habilidad1 = "NUEVA HABILIDAD 1"
            personaje.habilidad2 = "NUEVA HABILIDAD 2"
            personaje.habilidad3 = "NUEVA HABILIDAD 3"


            arma1 = {

                nombre: "Arma1",
                icono: "img/nada.png",
                descripcion: "",
                danno: 0,

            }

            arma2 = {

                nombre: "Arma2",
                icono: "img/nada.png",
                descripcion: "",
                danno: 0,

            }

            imprimir()
            cerrarModal('personajes')
        }
    }
    { // * eventListener de personaje nuevo
        nuevopjBtn.addEventListener('click', () => {
            nuevoPersonaje()
        })
    }
}

{ // * Accion

    { // * Funciones para tirada
        /* 
            * @slot: number
        */
        function accion(slot) {
            let dado = Math.ceil((Math.random() * 20) + 0)

            if (objetoAccion == "arma") {
                // ? Crea una referencia a arma1 o arma2 dependiendo del valor de slot
                let arma = slot == 1 ? arma1 : arma2

                // TODO: Completar el funcionamiento de tirada
                if (dado == 20)
                    contenConsola(`Ataque con ${arma.nombre}<br>¡CRITICO!<br>Daño base ${Math.floor(arma.danno * personaje.ataque * 2)}`)
                else if (dado == 1)
                    contenConsola(`Ataque con ${arma.nombre}<br>¡PIFIA!<br>Daño base 0`)
                else
                    contenConsola(`Ataque con ${arma.nombre}<br>${dado + personaje.ataque}<br>Daño base ${Math.floor(arma.danno * personaje.ataque)}`)
            } else {
                // let estadistica
                switch (slot) {
                    case 1: // * Ataque
                        // TODO: Retocar el ataque limpio
                        if (dado == 20)
                            contenConsola(`Ataque limpio<br>¡CRITICO!<br>Daño base ${Math.floor(personaje.ataque * 2)}`)
                        else if (dado == 1)
                            contenConsola(`Ataque limpio<br>¡PIFIA!<br>Daño base 0`)
                        else
                            contenConsola(`Ataque limpio<br>${dado + personaje.ataque}<br>Daño base ${Math.floor(personaje.ataque)}`)
                        break;
                    case 2: // * Esquiva
                        // TODO: Retocar esquiva
                        if (dado == 20)
                            contenConsola(`Esquiva<br>¡CRITICO!<br>${Math.floor(personaje.velocidad * 2)}`)
                        else if (dado == 1)
                            contenConsola(`Esquiva<br>¡PIFIA!`)
                        else
                            contenConsola(`Esquiva<br>${dado + personaje.esquiva}`)
                        break;
                    case 3: // * Bloquea
                        // TODO: Retocar bloqueo
                        if (dado == 20)
                            contenConsola(`Bloquea<br>¡CRITICO!<br>${Math.floor(personaje.velocidad * 2)}`)
                        else if (dado == 1)
                            contenConsola(`Bloquea<br>¡PIFIA!`)
                        else
                            contenConsola(`Bloquea<br>${dado + personaje.esquiva}`)
                        break;
                    case 4: // * Huye
                        // TODO: Retocar huye
                        if (dado == 20)
                            contenConsola(`Huye<br>¡CRITICO!<br>${Math.floor(personaje.velocidad * 2)}`)
                        else if (dado == 1)
                            contenConsola(`Huye<br>¡PIFIA!`)
                        else
                            contenConsola(`Huye<br>${dado + personaje.esquiva}`)
                        break;
                    default:
                        break;
                }
            }
        }
    }

    { // * evenListener accion
        accionBtn.addEventListener('click', () => {
            if (!edicion) {
                accion(
                    objetoAccion == "arma"
                        ? slotArmaSeleccionada
                        : slotEstadisticaSeleccionada
                )
            }
        })
    }
}

{ // * helpers, funciones varias
    /* 
        * @text: sring
    */
    // ? Elimina los acentos de un string
    function quitarAcentos(text) {
        return text
            .normalize('NFD') // decompose accented characters into their base character and accent character
            .replace(/[\u0300-\u036f]/g, '') // remove the accent characters
            .toUpperCase()
    }
    // ? Limpia la consola
    consolaBtn.addEventListener('click', () => {
        if (edicion == 0 && (estadisticaSeleccionada !== "vida" && estadisticaSeleccionada !== "poder")) {
            console.log("clear")
            contenConsola("")
        }
    })

    // ? Oculta los botones de edición, y cambia la var edición a 0
    function cerrarEdicion() {
        edicion = 0
        editarImg.src = "img/editar.png"

        ocultarBtnArrivaAbajo()
        experienciaTxt.style.display = "none"

    }
    /* 
        * @estadistica: string
    */
    // ? Muestra la estadistica
    function mostrarEstadistica(estadistica) {
        // estadistica = estadistica.charAt(0).toUpperCase() + estadistica.slice(1)
        let data = `${estadistica.charAt(0).toUpperCase() + estadistica.slice(1)} ${personaje[estadistica]}`

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
        cerrarEdicion()
    }

    /* 
        * @val: string
    */
    // ? Modifica el contenido de la consola
    function contenConsola(val) {
        consolaTxt.innerHTML = val
    }

    // ? Muestra el cambio de arma
    // function mostrarCambioArma() {
    //     arma1Img.src = arma1.icono
    //     arma1Txt.textContent = arma1.nombre

    //     arma2Img.src = arma2.icono
    //     arma2Txt.textContent = arma2.nombre
    // }

    /* 
        * @slot: number
    */
    // ? Muestra descripcion de arma
    function mostrarDescripcionArma(slot) {
        let seleccion = slot == 1 ? arma1 : arma2
        contenConsola(seleccion.descripcion)
        cerrarEdicion()
    }

    // ? Muestra los botones de incremento y decremento
    function mostrarBtnArrivaAbajo() {
        arribaBtn.style.display = "block"
        abajoBtn.style.display = "block"
    }

    // ? Oculta los botones de incremento y decremento
    function ocultarBtnArrivaAbajo() {
        arribaBtn.style.display = "none"
        abajoBtn.style.display = "none"
    }
}


// * COMIENZO BLOQUE DE MASCOTAS
{ // * Variables
    var mascota = {
        nombre: "CRIATURA 1",
        imagen: "img/c1.png",
        icono: "img/portal.png",

        ataque: 0,
        esquiva: 0,
        mitigacion: 0,
        velocidad: 0,
        vida: 0,
        vidaMaxima: 0,

        poder: 0,
        poderMaximo: 0,

        arma1: "",
        arma2: "",

        habilidad1: "",
        habilidad2: "",

        descripcion: "Selecciona editar y luego el ícono de esta criatura para invocar otra."
    }

    var mascota1 = {
        nombre: "Criatura 1",
        imagen: "img/c1.png",
        icono: "img/portal.png",

        ataque: 0,
        esquiva: 0,
        mitigacion: 0,
        velocidad: 0,
        vida: 0,
        vidaMaxima: 0,

        poder: 0,
        poderMaximo: 0,

        arma1: "nada",
        arma2: "nada",

        habilidad1: "DERRIBO",
        habilidad2: "DESGARRO",

        descripcion: "Selecciona editar y luego el ícono de esta criatura para invocar otra."
    }


    var mascota2 = {
        nombre: "CRIATURA 2",
        imagen: "img/c2.png",
        icono: "img/portal.png",

        ataque: 0,
        esquiva: 0,
        mitigacion: 0,
        velocidad: 0,
        vida: 0,
        vidaMaxima: 0,

        poder: 0,
        poderMaximo: 0,

        arma1: "",
        arma2: "",

        habilidad1: "",
        habilidad2: "",

        descripcion: "Selecciona editar y luego el ícono de esta criatura para invocar otra."
    }


    var mascota3 = {
        nombre: "CRIATURA 3",
        imagen: "img/c3.png",
        icono: "img/portal.png",

        ataque: 0,
        esquiva: 0,
        mitigacion: 0,
        velocidad: 0,
        vida: 0,
        vidaMaxima: 0,

        poder: 0,
        poderMaximo: 0,

        arma1: "",
        arma2: "",

        habilidad1: "",
        habilidad2: "",

        descripcion: "Selecciona editar y luego el ícono de esta criatura para invocar otra."
    }
}

let mascotaSeleccionada = 1