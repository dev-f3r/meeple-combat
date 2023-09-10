
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

    // * nivel del equipamiento
    equipo1: 0,
    equipo2: 0,
    equipo3: 0,

    // * nombre de arma
    arma1: "Una Mano",
    arma2: "Dos Manos",

    // * nombre de habilidades
    habilidad1: "HABILIDAD 1",
    habilidad2: "HABILIDAD 2",
    habilidad3: "HABILIDAD 3",

}

// ! CODIGO FER
let valorExperiencia = {
    ataque: 3,
    esquiva: 3,
    bloqueo: 3,
    velocidad: 6,
    vida: 1,
    poder: 1
}
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


/* 
    ? Refresca el texto y la imagen de los siguientes componentes:
        portada, nombre, estadisticas (ataque, esquiva, etc), equipamiento, arma slot 1, arma slot 2, habilidades
*/
function imprimir() {

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

    equipo1Img.src = equipo1.icono
    equipo2Img.src = equipo2.icono
    equipo3Img.src = equipo3.icono

    arma1Txt.textContent = arma1.nombre
    arma2Txt.textContent = arma2.nombre
    arma1Img.src = arma1.icono
    arma2Img.src = arma2.icono

    habilidad1Txt.textContent = personaje.habilidad1
    habilidad2Txt.textContent = personaje.habilidad2
    habilidad3Txt.textContent = personaje.habilidad3


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

            personaje.habilidad1 = "EMBESTIDA CON ESCUDO"
            personaje.habilidad2 = "COBERTURA"
            personaje.habilidad3 = "ATAQUE PODEROSO"



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
        }

        // TODO: Agregar los demas personajes

    } else {

        consolaTxt.innerHTML = "<br>" + personaje.nombre + "<br>" + personaje.descripcion
    }

    imprimir()

}
portadaBtn.addEventListener('click', function () { avatar() })
guerreroBtn.addEventListener('click', function () { avatar("GUERRERO") })



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

        consolaTxt.innerHTML = "<br>" + slot

    }

}

equipo1Btn.addEventListener('click', function () { equipo(1) })
equipo2Btn.addEventListener('click', function () { equipo(2) })
equipo3Btn.addEventListener('click', function () { equipo(3) })

let slotSeleccionado = 1 // !

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
            // imprimir()
            cerrarEdicion()
        }

        function aumentarDisminuirExperiencia(accion, estadistica) {
            // let valor = personaje[estadistica] * valorExperiencia[estadistica]
            // console.log(valor)
            // console.log(personaje.experiencia, personaje[estadistica])

            switch (estadistica) {
                case 'ataque':
                case 'esquiva':
                case 'bloqueo':
                    if (accion == 'mas') {
                        personaje.experiencia += (personaje[estadistica] * 3)
                    } else {
                        personaje.experiencia -= (personaje[estadistica] * 3)
                    }
                    break;

                case 'velocidad':
                    if (accion == 'mas') {
                        personaje.experiencia += (personaje[estadistica] * 6)
                    } else {
                        personaje.experiencia -= (personaje[estadistica] * 6)
                    }
                    break;

                case 'vida':
                case 'poder':
                    if (accion == 'mas') personaje.experiencia += 1
                    else personaje.experiencia -= 1
                    break;

                default:
                    break;
            }

            // personaje.experiencia += accion == 'mas' ? valor : valor * -1
        }
    }

    { // * eventListeners del boton de experiencia
        experienciaBtn.addEventListener('click', () => {
            if (edicion) {
                establecerExperiencia()
            } else {
                contenConsola(`Experiencia: ${personaje.experiencia}`)
            }
        })
    }

    { // * Funciones para modificar las estadisticas de los personajes

        /* 
            * @estadistica: string
        */
        // ? muestra los botones de edición, y modifica "estadisticaSeleccionada"
        function modificarEstadistica(estadistica) {
            arribaBtn.style.display = "block"
            abajoBtn.style.display = "block"

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
                    consola.innerHTML = "Experiencia insuficiente"
                }
            } else {

                if (personaje[estadistica] > 0) {
                    personaje[estadistica]--

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
}

{ // * Nombre de habilidades y nombre de personaje
    { //  * Descipción de habilidades
        /* 
            * @slot: number
        */
        function descripcionHabilidad(slot) {
            let habilidad = slot == 1
                ? personaje.habilidad1
                : slot == 2
                    ? personaje.habilidad2
                    : personaje.habilidad3

            // TODO: Agregar descripciones de habilidades
            contenConsola(`Descipción habilidad ${slot}: ${habilidad}`)
        }
    }
    { // * eventListeners de habilidades
        habilidad1Btn.addEventListener('click', () => {
            // ? Personalizar habilidad
            if (edicion) {
                let val = prompt("Ingrese habilidad")
                personaje.habilidad1 = val
                cerrarEdicion()
                imprimir()
            } else {
                // ? Motrar descripción de habilidad 
                descripcionHabilidad(1)
            }
        })

        habilidad2Btn.addEventListener('click', () => {
            // ? Personalizar habilidad
            if (edicion) {
                let val = prompt("Ingrese habilidad")
                personaje.habilidad2 = val
                cerrarEdicion()
                imprimir()
            } else {
                // ? Motrar descripción de habilidad 
                descripcionHabilidad(2)
            }
        })

        habilidad3Btn.addEventListener('click', () => {
            // ? Personalizar habilidad
            if (edicion) {
                let val = prompt("Ingrese habilidad")
                personaje.habilidad3 = val
                cerrarEdicion()
                imprimir()
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
            // console.log(...arguments)
            let seleccion
            if (slot) {
                seleccion = slot == 1 ? arma1 : arma2
            }
            // ? crea una referencia al objeto arma1 o arma2, se basa en slotSeleccionado, revisar función armas()
            else seleccion = slotSeleccionado === 1 ? arma1 : arma2

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
                case 'armaduraligera':
                    equipo.nombre = "Armadura Ligera"
                    equipo.icono = "img/armaduraligera.png"
                    equipo.descripcion = ""
                    equipo.nivel = 1
                    equipo.ataque = 0
                    equipo.esquiva = 0
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
        // ! Agregar los demas listeners para los items restantes
    }
}

{ // * Cambio de personaje
    { // * Funciones para cambio de personajes

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

            // ? Crea una referencia a arma1 o arma2 dependiendo del valor de slot
            let arma = slot == 1 ? arma1 : arma2

            // TODO: Completar el funcionamiento de tirada
            if (dado == 20)
                contenConsola(`Ataque con ${arma.nombre}<br>¡CRITICO!<br>Daño base ${Math.floor(arma.danno * personaje.ataque * 2)}`)
            else if (dado == 1)
                contenConsola(`Ataque con ${arma.nombre}<br>¡PIFIA!<br>Daño base 0`)
            else
                contenConsola(`Ataque con ${arma.nombre}<br>Daño base ${Math.floor(arma.danno * personaje.ataque)}`)
        }
    }

    { // * evenListener accion
        accionBtn.addEventListener('click', () => {
            if (!edicion) {
                accion(slotSeleccionado)
            }
        })
    }
}

{ // * helpers, funciones varias

    // ? Limpia la consola
    consolaBtn.addEventListener('click', () => {
        if (edicion == 0) contenConsola("")
    })

    // ? Oculta los botones de edición, y cambia la var edición a 0
    function cerrarEdicion() {
        edicion = 0
        editarImg.src = "img/editar.png"

        arribaBtn.style.display = "none"
        abajoBtn.style.display = "none"
    }
    /* 
        * @estadistica: string
    */
    // ? Muestra la estadistica
    function mostrarEstadistica(estadistica) {
        // estadistica = estadistica.charAt(0).toUpperCase() + estadistica.slice(1)
        let data = `${estadistica.charAt(0).toUpperCase() + estadistica.slice(1)} ${personaje[estadistica]}`
        contenConsola(data)
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
    }
}