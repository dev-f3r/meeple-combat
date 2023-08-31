
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

    nivel:1,

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

    nivel:1,

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

    nivel:1,

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

    } else {

        edicion = 0
        editarImg.src = "img/editar.png"

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











function avatar(){}



function atributos(){}

function equipo(){}

function armas(armaSeleccionada, slot){

    if (edicion == 1) {

        modalArmas.style.display = "grid"

    } else {

        consolaTxt.innerHTML = "<br>" + armaSeleccionada

    }

    

}

function accion(){}

function habilidades(){}