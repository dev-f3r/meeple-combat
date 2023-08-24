export let edicion = 0

class Personaje {
  constructor(
    icono,
    nombre,
    descripcion,
    experiencia,
    ataque,
    esquiva,
    mitigacion,
    velocidad,
    vida,
    vidaMaxima,
    poder,
    poderMaxima,
    maestrias,
    habilidades
  ) {
    this.icono = icono
    this.nombre = nombre
    this.descripcion = descripcion
    this.experiencia = experiencia
    this.ataque = ataque
    this.esquiva = esquiva
    this.mitigacion = mitigacion
    this.velocidad = velocidad
    this.vida = vida
    this.vidaMaxima = vidaMaxima
    this.poder = poder
    this.poderMaxima = poderMaxima
    this.maestrias = maestrias
    this.habilidades = habilidades

  }
}

let personaje = {

  icono: "img/portada.png",
  nombre: "BIENVENIDOS",
  descripcion: "",

  experiencia: 0,

  ataque: 0,
  esquiva: 0,
  mitigacion: 0,
  velocidad: 0,

  vida: 0,
  vidaMaxima: 0,

  poder: 0,
  poderMaxima: 0,

  maestria1Nombre: "",
  maestria1Icono: "",
  maestria1: 0,

  maestria2Nombre: "",
  maestria2Icono: "",
  maestria2: 0,

  maestria3Nombre: "",
  maestria3Icono: "",
  maestria3: 0,





  habilidad1: "",
  habilidad2: "",
  habilidad3: "",

}


export class Arma {
  constructor(
    nombre,
    danno = "",
    descripcion = ""
  ) {
    this.nombre = nombre
    this.icono = "img/nada.png"
    this.danno = danno
    this.descripcion = descripcion
  }

  setIcono(val) {
    this.icono = val
  }

  setDanno(val) {
    this.danno = val
  }

  setDescription(val) {
    this.descripcion = val
  }
}

// let arma1 = {

//   nombre: "Arma 1",
//   icono: "img/nada.png",
//   danno: "",
//   descripcion: "",

// }


// let arma2 = {

//   nombre: "Arma 2",
//   icono: "img/nada.png",
//   danno: "",
//   descripcion: "",

// }


// let arma3 = {

//   nombre: "Arma 3",
//   icono: "img/nada.png",
//   danno: "",
//   descripcion: "",

// }


// let arma4 = {

//   nombre: "Arma 4",
//   icono: "img/nada.png",
//   danno: "",
//   descripcion: "",

// }

export let armaSeleccionada = 0

export let nombreArma = ""
export let iconoArma = ""
export let dannoArma = ""
export let descripcionArma = ""



export class Habilidad {
  constructor(
    nombre = "",
    descripcion = ""
    ) {
    this.nombre = nombre
    this.descripcion = descripcion
  }

  setNombre(val) {
    this.nombre = val
  }

  setDescripcion(val) {
    this.descripcion = val
  }
}

// let habilidad1 = {

//   nombre: "",
//   descripcion: "",

// }

// let habilidad2 = {

//   nombre: "",
//   descripcion: "",

// }

// let habilidad3 = {

//   nombre: "",
//   descripcion: ""

// }

// let habilidad4 = {

//   nombre: "",
//   descripcion: ""

// }


// let habilidad5 = {

//   nombre: "",
//   descripcion: ""

// }







export let consolaData = "Un juego pensado para los amantes del PVP y como un primer contacto con el mundo del Rol.<br><br>Abre el menu y selecciona el personaje con el que deseas jugar.<br><br> Tambien puedes cambiar armas, hechizos y crear un nuevo personaje a tu gusto.<br><br> Conoce más acerca de la creación de personajes y de Battlerol en<br> www.battlerol.net <br><br> Versión 1.7.0a"

let estadisticaSeleccionada = 0
let nombreStatSelect = ""

let edicionTotal = 0
let aprender = 0
let equipar = 0
let editarNombre = 0

let comando = ""


let ventanMascota = 0