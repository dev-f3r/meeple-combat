
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
var tipoEdicion = 'personaje'

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

const habilidadesDict = {
  "habilidad 1": "Habildad 1 sin descripción",
  "habilidad 2": "Habildad 2 sin descripción",
  "habilidad 3": "Habildad 3 sin descripción",
  "machacar": "Impacta en el objetivo generando daño crítico y quitándole mitigación durante 1 turno <br> Poder min(6)",
  "ira ciega": "Al matar un enemigo, puedes atacar a cualquier criatura o personaje que esté a tu alcance, sin necesidad de acciones <br> Poder min(1)",
  "masestro de armas": "Eres competente con todas las armas, al matar un enemigo puedes hacerte con la suya <br> Habilidad Pasiva",
  "duelo": "En combate 1 vs 1 obtienes +3 a la esquiva y ataque <br> Habilidad Pasiva",
  "corte profundo": "Daña al objetivo y deja un sangrado que genera 3 puntos de daño por turno durante 3 turnos (no mitigables) <br> Poder min(6)",
  "ataque rapido": "Avanza hacia el objetivo y lo ataca en una acción combinada / distancia máx(velocidad x 2) <br> Poder min(3) / Acciones(Arma)",
  "cobertura": "Aumenta 300% la mitigación ante proyectiles físicos durante 3 turnos (al moverse se pierde la cobertura) <br> Poder(3) / Requiere Escudo",
  "embestida con escudo": "Golpeas al objetivo generándole 200% daño físico y derribándolo<br> Poder(3) / Requiere Escudo",
  "ataque poderoso": "Carga tu golpe con energía<br> Poder min(1) / Sin Requerimentos",
  "ataque multiple": "Una serie de golpes, los cuales suman todo su daño, generándolo de manera explosiva al finalizar la habilidad <br> Poder min(3)",
  "golpe de chi": "Un poderoso empujón cargado de energía, que genera daño físico, aturde al objetivo 1 turno y lo hace retroceder (ataque x casilleros)<br> Poder min(6)",
  "patada voladora": "Te lanzas hacia el objetivo a una distancia máxima de (velocidad x casilleros), al golpearlo generas 200% de daño físico + 1 punto de daño por metro recorrido.<br> Poder min(3) / Sin Requisitos",
  "desarmar": "Desarmas al objetivo, dejando caer su arma a 1 casillero de distancia a elección.<br> Poder(3)",
  "sigilo": "Si tu objetivo se encuentra en combate con otro personaje o criatura, obtienes + 3 al ataque.<br> Pasiva",
  "torbellino": "Giras tu con tu arma generando 50% de daño a todos los objetivos en tu rango de alcance, puedes caminar mientras la habilidad está activa.<br> Poder min(6)",
  "flechas multiples": "Lanzas 3 flechas juntas, las cuales harán 50% de daño de manera acumulativa si más de un proyectil impacta en el mismo objetivo.( se debe realizar una tirada por cada flecha)<br> Poder(3) / Requiere arco",
  "flecha energizada": "Cargas con energía tus flechas aumentando su daño.<br> Poder min(1) / Requiere arco",
  "flecha elemental": "Cambia el tipo de daño elemental que produce tu flecha.<br> Poder (3) / Requiere arco",
  "invocar": "Ahora puedes manifestar criaturas elementales.",
  "golpe vampirico": "Absorbes vida del objetivo para ti mismo. <br> Poder min(6).",
  "incansable": "Habilidad pasiva que brinda +1 acción.",
  "ataque doble": "Realiza dos ataques, con armas gemelas en la misma cantidad de acciones. <br> Poder min(3)",
  // Habilidades mágicas
  "exorcismo": "Genera daño sagrado y aturde al objetivo durante 1 turno <br> Poder min(3)",
  "bola de fuego": "Genera daño de fuego. Los golpes críticos incendian al objetivo, lo que le genera 3 puntos de daño no mitigable, durante 3 turnos. <br> Poder min(3)",
  "bola de hielo": "Genera daño de hielo. Los golpes críticos congelan al objetivo, quitándole mitad de velocidad y toda mitigación hacia este elemento, durante 3 turnos. <br> Poder min(3)",
  "sentencia": "El objetivo pierde toda mitigación durante 3 turno <br> Poder(3)",
  "sanar": "Restaura al objetivo 1 x 1 puntos de salud <br> Poder min(1)",
  "misil arcano": "Genera daño etéreo<br> Poder min(1)",
  "explosion de escarcha": "Una onda expansiva que congela a todos los enemigos en un radio de (ataque x casillero) / lo que les reduce a la mitad su velocidad y los deja sin mitigación hacia este elemento, durante 3 turnos.<br> Poder min(6)",
  "invisibilidad": "Te vuelves indetectable para los demás durante 3 turnos, al atacar pierdes el efecto.<br> Poder min(6)",
  "enraizar": "Unas poderosas raíces surgen del suelo sujetando al objetivo e impidiéndole moverse del lugar durante 3 turnos.<br> Poder min(3) / El objetivo aún puede atacar, e incluso atacar a las raíces, las cuales tienen 50 puntos de vida.",
  "envenenar": "Envenenas al objetivo generándole 100% de daño mágico durante 3 turnos.<br> Poder (6)",
  "licantropia": "Puedes tener garras y colmillos como armas naturales durante 3 turnos.<br> Poder o Poder(3) <br> Escribe el comando: /licántropo",
  "terremoto": "Vuelves inestable un área de (ataque x casilleros) durante 3 turnos que se renuevan con cada lanzamiento. Atravesar este terreno cuesta doble de movimiento, podrás lanzar el ataque nuevamente cada vez que alguien pase sobre el área, en caso de acertar este se caerá. Los golpes críticos de terremoto en áreas inestables inmovilizan al objetivo. <br> Poder(3)",
  "relampago": "Genera daño de electricidad y rebota en hasta 3 objetivos que no estén separados por más de (ataque x casilleros), los golpes críticos dejan al objetivo electrificado.<br> Poder min(3)",
  "sobrecarga": "Sobrecargas un objetivo que se encuentre electrificado generando 500% de daño mágico.<br> Poder min(3)",
  "control mental": "Controlas el personaje o npc durante 1 turno. <br> Poder min(9)",
  "confundir": "Confunde al objetivo, haciendo que cualquier ataque que este haga y falle, durante 3 turno, sea un golpe certero hacia el mismo o un aliado cercano. Una pifia se considera crítico para la víctima.<br> Poder min(6)",
  "miedo": "El objetivo gasta todas sus acciones corriendo en dirección aleatoria, siempre alejándose de quien lanzó el hechizo. En caso de un escenario cerrado, correrá y quedará en la esquina más lejana.<br> Poder min(6)",
  "tsunami": "Una poderosa ola en forma de cono que se expande hasta 1 casillero x ataque. Empuja todo a su paso a una distancia igual a la mitad del ataque y genera daño mágico de agua.<br> Poder min(9)",
  "drenar": "Transfiere vida, energía o maná del objetivo al conjurador, puedes apostar una de estas poders para aumentar el efecto, la cual solo se consumirá si fallas el ataque.<br> Poder min(0)",
  "transmutar": "Convierte vida energía o maná en cualquiera de ellas, puede usarse sobre si mismo o sobre otros personajes.<br> Poder min(1)",
  "derribo": "Derriba al objetivo.<br> Poder(3)",
  "desgarro": "Una herida que genera 3 puntos de daño no mitigable durante 3 turnos.<br> Poder(6)",
  "triturar": "Rompe los huesos de la víctima, causando daño físico y dejando a la víctima con -1 a la velocidad durante 3 turnos, este penalizador se puede acumular, el tiempo de efecto se reinicia al hacerlo.<br> Poder(6)",
  "petrificar": "Rompe los huesos de la víctima, causando daño físico y dejando a la víctima con -1 a la velocidad durante 3 turnos, este penalizador se puede acumular, el tiempo de efecto se reinicia al hacerlo, una vez sin velocidad el objetivo recibe doble de daño.<br> Poder(6)"
}

// * 1..2
let slotArmaSeleccionada = 1 // !
// * 1..4
let slotEstadisticaSeleccionada = 1 // !
let atributoSeleccionado = 'ataque'
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
function imprimirPersonaje() {

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
  habilidad1Txt.textContent = habilidad1.nombre.toUpperCase()
  habilidad2Txt.textContent = habilidad2.nombre.toUpperCase()
  habilidad3Txt.textContent = habilidad3.nombre.toUpperCase()

  experienciaTxt.textContent = personaje.experiencia
}
imprimirPersonaje()


editarBtn.addEventListener('click', function () {

  if (edicion == 0) {
    edicion = 1
    editarImg.src = "img/guardar.png"

    contenConsola("Seleccione nombre, slot de arma o habilidad")

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
      habilidad1.descripcion = habilidadesDict[habilidad1.nombre.toLowerCase()]
      habilidad2.nombre = "COBERTURA"
      habilidad2.descripcion = habilidadesDict[habilidad2.nombre.toLowerCase()]
      habilidad3.nombre = "ATAQUE PODEROSO"
      habilidad3.descripcion = habilidadesDict[habilidad3.nombre.toLowerCase()]



      // modalPersonaje.style.display = "none"
      cerrarModal("personajes")

      // edicion = 0
      // editarImg.src = "img/editar.png"
      cerrarEdicion()

      // armas("Una Mano", 1)
      cambiarArma("daga", 1)
      // armas("Escudo", 2)
      cambiarArma("escudo", 2)

      imprimirPersonaje()

      contenConsola(personaje.descripcion)
      descripcionHabilidad(1)
      descripcionHabilidad(2)
      descripcionHabilidad(3)
    }

    // TODO: Agregar los demas personajes

  } else {
    contenConsola(`${personaje.nombre}<br>${personaje.descripcion}`)
  }

  imprimirPersonaje()

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
    if (esPersonaje) {
      contenConsola(
        slotArmaSeleccionada == 1
          ? arma1.descripcion
          : arma2.descripcion
      )
    }
    else contenConsola(esbirroSeleccionado[`arma${slotArmaSeleccionada}`].descripcion)
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
      imprimirPersonaje()
      cerrarEdicion()
    }

    /**
     * ? Incrementa o disminuye la experiencia del personaje o esbirro según la acción y la estadística especificadas.
     * @param {string} tipo - El tipo de entidad a la que se aplica la experiencia: "personaje" o "esbirro".
     * @param {string} accion - La acción a realizar: "mas" para aumentar, "menos" para disminuir.
     * @param {string} estadistica - La estadística relacionada con la experiencia: "vidaMaxima", "poderMaximo", etc.
     */
    function aumentarDisminuirExperiencia(tipo, accion, estadistica) {
      let valor;

      // TODO: El valor a aumentar o disminuir sera de 1 cada 10 pts si el atributo es vidaMaxima o poderMaximo

      if (tipo === "personaje") {
        // Calcular el valor de experiencia según la acción y estadística
        valor =
          accion === "mas"
            ? (personaje[estadistica] === 0 ? 1 : personaje[estadistica] + 1) *
            valorExperiencia[estadistica]
            : personaje[estadistica] * valorExperiencia[estadistica];

        // Incrementar o disminuir la experiencia del personaje
        personaje.experiencia += accion === "mas" ? valor : valor * -1;
      } else {
        // Calcular el valor de experiencia según la acción y estadística
        valor =
          accion === "mas"
            ? (esbirroSeleccionado[estadistica] === 0
              ? 1
              : esbirroSeleccionado[estadistica] + 1) *
            valorExperiencia[estadistica]
            : esbirroSeleccionado[estadistica] * valorExperiencia[estadistica];

        // Incrementar o disminuir la experiencia del esbirro seleccionado
        esbirroSeleccionado.experiencia += accion === "mas" ? valor : valor * -1;
      }
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

    /**
     *  ? Muestra los botones de incremento y decremento SOLO EN MODO EDICIÓN, y modifica "estadisticaSeleccionada".
     * @param {string} atributo - El nombre del atributo a modificar.
     */
    function modificarEstadistica(atributo) {
      mostrarBtnArribaAbajo();

      estadisticaSeleccionada = atributo;

      let data;

      if (tipoEdicion === "personaje") {
        data = `${capitalizarPrimeraLetra(atributo)} ${personaje[atributo]}`;
      } else {
        data = `${capitalizarPrimeraLetra(atributo)} ${esbirroSeleccionado[atributo]}`;
      }

      contenConsola(data);
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
          aumentarDisminuirExperiencia("personaje", 'menos', estadistica)

          // * cambiar contenido mostrado
          consola.innerHTML = data
          imprimirPersonaje()
        } else {
          consola.innerHTML = "Experiencia insuficiente"
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
          aumentarDisminuirExperiencia('personaje', 'mas', estadistica)

          // * cambiar contenido mostrado
          data = `${estadistica
            .charAt(0)
            .toUpperCase()
            + estadistica
              .slice(1)} ${personaje[estadistica]}`
          consola.innerHTML = data
          imprimirPersonaje()
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
      imprimirPersonaje()
    }
  }

  { // * eventListeners de los atributos
    ataqueBtn.addEventListener('click', () => {
      if (edicion) {
        tipoEdicion = "personaje"
        modificarEstadistica('ataque')
      }
      else if (esPersonaje) mostrarEstadistica('personaje', 'ataque')
    })
    esquivaBtn.addEventListener('click', () => {
      if (edicion) {
        tipoEdicion = "personaje"
        modificarEstadistica('esquiva')
      }
      else if (esPersonaje) mostrarEstadistica('personaje', 'esquiva')
    })
    bloqueoBtn.addEventListener('click', () => {
      if (edicion) {
        tipoEdicion = "personaje"
        modificarEstadistica('bloqueo')
      }
      else if (esPersonaje) mostrarEstadistica('personaje', 'bloqueo')
    })
    velocidadBtn.addEventListener('click', () => {
      if (edicion) {
        tipoEdicion = "personaje"
        modificarEstadistica('velocidad')
      }
      else if (esPersonaje) mostrarEstadistica('personaje', 'velocidad')
    })

    vidaBtn.addEventListener('click', () => {
      if (edicion) {
        tipoEdicion = "personaje"
        modificarEstadistica('vidaMaxima')
      }
      else { // ? Muestra los boton de incremento y decremento
        mostrarBtnArribaAbajo()
        estadisticaSeleccionada = "vida"

        contenConsola(`Vida ${personaje.vida} / ${personaje.vidaMaxima}`)
      }
    })
    poderBtn.addEventListener('click', () => {
      if (edicion) {
        tipoEdicion = "personaje"
        modificarEstadistica('poderMaximo')
      }
      else { // ? Muestra los boton de incremento y decremento
        mostrarBtnArribaAbajo()
        estadisticaSeleccionada = "poder"

        contenConsola(`Poder ${personaje.poder} / ${personaje.poderMaximo}`)
      }
    })
  }

  { // * eventListeners de los botones arriba y abajo
    ['arriba', 'abajo'].forEach(key => {
      const boton = document.getElementById(`${key}Btn`)
      boton.addEventListener('click', () => {
        let accion = key === 'arriba'
          ? 'mas'
          : 'menos'
        if (edicion) {
          if (tipoEdicion === "personaje") modificarValores(accion, estadisticaSeleccionada)
          else modificarAtributosEsbirro(accion, estadisticaSeleccionada)
        }
        else {
          if (tipoEdicion === "personaje") masMenosVidaPoder(accion)
          else modificarVidaPoderActualEsbirro(accion)
        }
      })
    })
  }
}

{ // * Nombre de habilidades y nombre de personaje
  { //  * Descipción de habilidades
    /* 
        * @habilidad: Obj
    */
    function descripcionHabilidad(habilidad) {
      contenConsola(habilidad.descripcion)
      cerrarEdicion()
    }
  }
  { // * Funcion para cambio de habilidad
    /* 
        * @habilidad:  Obj
     */
    function cambiarHabilidad(habilidad) {
      let nuevoNombre = prompt("Ingrese habilidad")
      habilidad.nombre = quitarAcentos(nuevoNombre)


      habilidad.descripcion = habilidadesDict[habilidad.nombre.toLowerCase()]

      cerrarEdicion()
      imprimirPersonaje()
    }
  }
  { // * eventListeners de habilidades
    habilidad1Btn.addEventListener('click', () => {
      // ? Personalizar habilidad
      if (edicion && esPersonaje) {
        cambiarHabilidad(habilidad1)
      } else if (esPersonaje) {
        // ? Motrar descripción de habilidad 
        descripcionHabilidad(habilidad1)
      }
    })
    habilidad2Btn.addEventListener('click', () => {
      // ? Personalizar habilidad
      if (edicion && esPersonaje) {
        cambiarHabilidad(habilidad2)
      } else if (esPersonaje) {
        // ? Motrar descripción de habilidad 
        descripcionHabilidad(habilidad2)
      }
    })
    habilidad3Btn.addEventListener('click', () => {
      // ? Personalizar habilidad
      if (edicion && esPersonaje) {
        cambiarHabilidad(habilidad3)
      } else if (esPersonaje) {
        // ? Motrar descripción de habilidad 
        descripcionHabilidad(habilidad3)
      }
    })
  }
  { // * eventListener nombre personaje
    nombreBtn.addEventListener('click', () => {
      if (esPersonaje) {
        if (edicion) {
          let val = prompt("Nuevo nombre")
          personaje.nombre = val
          imprimirPersonaje()
        } else if (esPersonaje) {
          contenConsola(personaje.descripcion)
        }
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
      imprimirPersonaje()
      cerrarModal("armas")
      cerrarEdicion()
    }
  }
  { // * eventListeners de armas
    dagaBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('daga')
      else cambiarArmaEsbirro('daga')
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
        case 'armaduraLigera': // TODO: Arreglar estadisticas de Armadura Ligera
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

      imprimirPersonaje()
      cerrarEdicion()
      cerrarModal('equipamiento')
    }

  }
  { // * eventListeners de equipamiento
    armaduraligeraBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarEquipamiento('armaduraLigera')
      else cambiarEquipamientoEsbirro('armaduraLigera')
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

      imprimirPersonaje()
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
      if (!edicion && esPersonaje) {
        if (objetoAccion === 'arma') accion(slotArmaSeleccionada)
        else accion(slotEstadisticaSeleccionada)
      } else if (!edicion && !esPersonaje) {
        if (objetoAccion === 'arma') accionEsbirroArma(slotArmaSeleccionada)
        else accionEsbirroAtributo(slotEstadisticaSeleccionada)
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
  function mostrarEstadistica(tipo, estadistica) {
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
    atributoSeleccionado = estadistica

    contenConsola(data)
  }

  /* 
      * @val: string
  */
  // ? Modifica el contenido de la consola
  function contenConsola(val) {
    consolaTxt.innerHTML = val
  }

  /* 
      * @slot: number
  */
  // ? Muestra descripcion de arma
  function mostrarDescripcionArma(slot) {
    let seleccion = slot == 1 ? arma1 : arma2
    contenConsola(seleccion.descripcion)
  }

  // ? Muestra los botones de incremento y decremento
  function mostrarBtnArribaAbajo() {
    arribaBtn.style.display = "block"
    abajoBtn.style.display = "block"
  }

  // ? Oculta los botones de incremento y decremento
  function ocultarBtnArrivaAbajo() {
    arribaBtn.style.display = "none"
    abajoBtn.style.display = "none"
  }

  /**
   * ? Capitaliza la primera letra de un string.
   *
   * @param {string} texto - El string que se va a capitalizar.
   * @returns {string} - El string con la primera letra en mayúscula.
   */
  function capitalizarPrimeraLetra(texto) {
    // Verifica si el texto está vacío o es nulo y devuelve el mismo texto sin cambios
    if (!texto) {
      return texto;
    }

    // Capitaliza la primera letra del texto y la concatena con el resto del texto en minúsculas
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
  }

}


// * COMIENZO BLOQUE DE MASCOTAS
{ // * Variables
  /**
   * ? Clase que representa a un Esbirro.
   * Un Esbirro es una criatura con diversas propiedades y habilidades.
   */
  class Esbirro {
    /**
     * @param {Object} opciones - Objeto que contiene las propiedades del Esbirro.
     * @param {string} opciones.nombre - El nombre del Esbirro.
     * @param {string} opciones.imagen - La URL de la imagen del Esbirro.
     * @param {string} opciones.icono - El icono del Esbirro (sin uso).
     * @param {string} opciones.descripcion - La descripción del Esbirro.
     * @param {number} opciones.experiencia - La experiencia del Esbirro.
     * @param {number} opciones.ataque - El valor de ataque del Esbirro.
     * @param {number} opciones.esquiva - El valor de esquiva del Esbirro.
     * @param {number} opciones.bloqueo - El valor de bloqueo del Esbirro.
     * @param {number} opciones.velocidad - El valor de velocidad del Esbirro.
     * @param {number} opciones.vida - El valor de vida actual del Esbirro.
     * @param {number} opciones.vidaMaxima - El valor máximo de vida del Esbirro.
     * @param {number} opciones.poder - El poder actual del Esbirro.
     * @param {number} opciones.poderMaximo - El poder máximo del Esbirro.
     * @param {Object} opciones.arma1 - El arma en la ranura 1 del Esbirro.
     * @param {Object} opciones.arma2 - El arma en la ranura 2 del Esbirro.
     * @param {Object} opciones.equipo1 - El equipo en la ranura 1 del Esbirro.
     * @param {Object} opciones.equipo2 - El equipo en la ranura 2 del Esbirro.
     * @param {Object} opciones.equipo3 - El equipo en la ranura 3 del Esbirro.
     * @param {Object} opciones.habilidad1 - La habilidad en la ranura 1 del Esbirro.
     * @param {Object} opciones.habilidad2 - La habilidad en la ranura 2 del Esbirro.
     * @param {Object} opciones.habilidad3 - La habilidad en la ranura 3 del Esbirro.
     */
    constructor({
      // Propiedades generales de esbirro
      nombre = "",
      imagen = "img/nada.png",
      icono = "", // Sin Uso
      descripcion = "Selecciona editar y luego el ícono de esta criatura para invocar otra.",
      experiencia = 0,

      // Atributos de esbirro
      ataque = 0,
      esquiva = 0,
      bloqueo = 0,
      velocidad = 0,
      vida = 0,
      vidaMaxima = 0,
      poder = 0,
      poderMaximo = 0,

      // Armas de esbirro
      arma1 = { nombre: "wp 1", danno: 0, descripcion: "dc wp 1" },
      arma2 = { nombre: "wp 2", danno: 0, descripcion: "dc wp 2" },

      // Equipamiento de esbirro
      // equipo1 = { nombre: "eq 1", descripcion: "dc eq 1" },
      equipo1 = "eq 1",
      // equipo2 = { nombre: "eq 2", descripcion: "dc eq 2" },
      equipo2 = "eq 2",
      // equipo3 = { nombre: "eq 3", descripcion: "dc eq 3" },
      equipo3 = "eq 3",

      // Habilidades de esbirro
      habilidad1 = { nombre: "sk 1", descripcion: "dc sk 1" },
      habilidad2 = { nombre: "sk 2", descripcion: "dc sk 2" },
      habilidad3 = { nombre: "sk 3", descripcion: "dc sk 3" },
    }) {
      // * Propiedades generales de esbirro
      this.nombre = nombre;
      this.imagen = imagen;
      this.icono = icono;
      this.descripcion = descripcion;
      this.experiencia = experiencia;

      // * Atributos de esbirro
      this.ataque = ataque;
      this.esquiva = esquiva;
      this.bloqueo = bloqueo;
      this.velocidad = velocidad;
      this.vida = vida;
      this.vidaMaxima = vidaMaxima;
      this.poder = poder;
      this.poderMaximo = poderMaximo;

      // * Armas de esbirro
      this.arma1 = arma1;
      this.arma2 = arma2;

      // * Equipamiento de esbirro
      this.equipo1 = equipo1;
      this.equipo2 = equipo2;
      this.equipo3 = equipo3;

      // * Habilidades de esbirro
      this.habilidad1 = habilidad1;
      this.habilidad2 = habilidad2;
      this.habilidad3 = habilidad3;
    }

    /**
     * ? Actualiza las propiedades del esbirro con los valores proporcionados.
     * @param {Object} props - Un objeto con las propiedades a actualizar.
     */
    actualizarPropiedades(props) {
      Object.assign(this, props);
    }

    /**
     * ? Configura el arma en una ranura específica.
     * @param {number} ranura - El número de ranura del arma.
     * @param {string} nombre - El nombre del arma.
     */
    configurarArma(ranura, nombre) {
      if (nombre in armasDict) this[`arma${ranura}`] = { nombre, danno: armasDict[nombre].danno, descripcion: armasDict[nombre].descripcion }
      else this[`arma${ranura}`] = { nombre, descripcion: "Arma sin descripción" }
    }

    configurarEquipamiento(ranura, nombre) {
      this[`equipo${ranura}`] = nombre
    }

    /**
     * ? Configura la habilidad en una ranura específica.
     * @param {number} ranura - El número de ranura de la habilidad.
     * @param {string} nombre - El nombre de la habilidad.
     */
    configurarHabilidad(ranura, nombre) {
      if (nombre in habilidadesDict) this[`habilidad${ranura}`] = { nombre, descripcion: habilidadesDict[nombre.toLowerCase()] }
      else this[`habilidad${ranura}`] = { nombre, descripcion: "Habilidad sin descripción" }
    }
  }

  // ? Objeto para almacenar información de las armas
  // TODO: Cada arma debe contener una propiedad para el daño y su descripción
  // Definición de las armas faltantes
  var armasDict = {
    // * Armas de personaje
    "punno": {
      danno: 0.75,
      descripcion: "Arma natural <br> 1 Acción / 75% de ataque como daño físico"
    },
    "patadas": {
      danno: 1,
      descripcion: "Arma natural <br> 2 Acciones / 100% de ataque como daño físico"
    },
    "daga": {
      danno: 1,
      descripcion: "Arma a una mano <br> 1 Acción / 100% de ataque como daño físico"
    },
    "espada": {
      danno: 1.5,
      descripcion: "Arma a dos manos <br> 2 Acciones / 150% de ataque como daño físico"
    },
    "arco": {
      danno: 1.75,
      descripcion: "Arma a distancia <br> 3 casilleros x ataque / 3 Acciones / 175% de ataque como daño físico"
    },
    "arrojadiza": {
      danno: 0.75,
      descripcion: "Arma arrojadiza <br> 3 casillero x ataque / 2 Acciones / 75% de ataque como daño físico"
    },
    "escudo": {
      danno: 0.5,
      descripcion: "Escudo <br> Permite bloquear ataques fuera de turno / 1 Accion / 50% de ataque como daño físico"
    },
    "mano": {
      danno: 1,
      descripcion: "Arma a distancia <br> 1 casillero x ataque / 1 Acción / 100% de ataque como daño mágico"
    },
    "varita": {
      danno: 1,
      descripcion: "Arma a distancia <br> 3 casilleros x ataque / 1 Accion / 100% de ataque como daño mágico"
    },
    "baculo": {
      danno: 1.5,
      descripcion: "Arma a distancia <br> 2 casilleros x ataque / 2 Acciones / 150% de ataque como daño mágico"
    },
    "runa": {
      danno: 0.75,
      descripcion: "Arma a distancia <br> 3 casilleros x ataque / 2 Acciones / 75% de ataque como daño mágico"
    },
    "totem": {
      danno: 1,
      descripcion: "Arma a distancia <br> 2 casilleros x ataque / 2 Acciones / 100% de ataque como daño mágico"
    },
    "hoja runa": {
      danno: 1,
      descripcion: "Arma mixta <br> 1 casillero x ataque / 2 Acciones / 100% de ataque como daño físico o mágico"
    },
    // * Armas de esbirros
    "mordisco": {
      danno: 1.5,
      descripcion: "Mordisco Arma natural <br> / 2 Acciones / 150% de ataque como daño físico"
    },
    "garras": {
      danno: 1,
      descripcion: "Garras <br> / 1 Accion / 100% de ataque como daño físico"
    },
    "aliento": {
      danno: 2.5,
      descripcion: "ALIENTO <br> Arma a distancia / 3 Acciones <br> 250% de ataque como daño mágico <br> Distancia máxima de 1 casillero x punto de ataque"
    },
    "pinzas": {
      danno: 1.75,
      descripcion: "PINZAS <br> Arma cuerpo a cuerpo / 2 Acciones <br> 175% de ataque como daño físico"
    },
    "mente": {
      danno: 1,
      descripcion: "MENTE <br> Arma a distancia / 1 Accion <br> 100% de ataque como daño mágico. <br> Distancia máxima de 2 casillero x punto de ataque"
    },
    "ramas": {
      danno: 1.25,
      descripcion: "RAMAS <br> Arma cuerpo a cuerpo / 2 Acciones <br> 125% de ataque como daño físico"
    },
    "esporas": {
      danno: 1.25,
      descripcion: "ESPORAS <br> Arma a distancia / 2 Acciones <br> 125% de ataque como daño mágico. <br> Distancia máxima de 1 casillero x punto de ataque"
    },
    "alas": {
      danno: 1.25,
      descripcion: "ALAS <br> Arma a distancia / 2 Acciones <br> 125% de ataque como daño mágico. <br> Distancia máxima de 1 casillero x punto de ataque"
    },
    "mirada": {
      danno: 1.25,
      descripcion: "MIRADA <br> Arma a distancia / 2 Acciones <br> 125% de ataque como daño mágico. <br> Distancia máxima de 2 casilleros x punto de ataque"
    },
    "cuernos": {
      danno: 1.25,
      descripcion: "CUERNOS <br> Arma a distancia / 2 Acciones <br> 125% de ataque como daño mágico. <br> Distancia máxima de 1 casillero x punto de ataque"
    },
    "cascos": {
      danno: 1.25,
      descripcion: "CASCOS <br> Arma cuerpo a cuerpo / 2 Acciones <br> 125% de ataque como daño físico"
    },
    "tentaculos": {
      danno: 1.25,
      descripcion: "TENTACULOS <br> Arma mixta cuerpo a cuerpo / 2 Acciones <br> 125% de ataque como daño mágico o físico"
    }
  }

  // ? Objeto para almacenar información de los esbirros
  var esbirrosDict = {
    "lobo": {
      nombre: "LOBO",
      imagen: "img/lobo.png",
      icono: "",
      ataque: 3,
      esquiva: 2,
      bloqueo: 1,
      velocidad: 6,
      vida: 19,
      vidaMaxima: 19,
      poder: 22,
      poderMaximo: 22,
      arma1: {
        nombre: "mordisco",
        danno: armasDict["mordisco"].danno,
        descripcion: armasDict["mordisco"].descripcion
      },
      arma2: {
        nombre: "garras",
        danno: armasDict["garras"].danno,
        descripcion: armasDict["garras"].descripcion
      },
      habilidad1: { nombre: "derribo", descripcion: habilidadesDict["derribo"] },
      habilidad2: { nombre: "desgarro", descripcion: habilidadesDict["desgarro"] },
      habilidad3: { nombre: "habilidad 3", descripcion: habilidadesDict["habilidad 3"] },
      descripcion: "LOBO <br> Criatura de Sangre <br> Coste de invocación: 20"
    },
    "esqueleto": {
      nombre: "ESQUELETO",
      imagen: "img/esqueleto.png",
      icono: "",
      ataque: 4,
      esquiva: 2,
      bloqueo: 3,
      velocidad: 2,
      vida: 30,
      vidaMaxima: 30,
      poder: 27,
      poderMaximo: 27,
      arma1: {
        nombre: "mordisco",
        danno: armasDict["mordisco"].danno,
        descripcion: armasDict["mordisco"].descripcion
      },
      arma2: {
        nombre: "garras",
        danno: armasDict["garras"].danno,
        descripcion: armasDict["garras"].descripcion
      },
      habilidad1: { nombre: "derribo", descripcion: habilidadesDict["derribo"] },
      habilidad2: { nombre: "desgarro", descripcion: habilidadesDict["desgarro"] },
      habilidad3: { nombre: "habilidad 3", descripcion: habilidadesDict["habilidad 3"] },
      descripcion: "ESQUELETO <br> Criatura de Vida y Éter <br> Coste de invocación: 15"
    },
    "kardanto": {
      nombre: "KARDANTO",
      imagen: "img/kardanto.png",
      icono: "",
      ataque: 4,
      esquiva: 2,
      bloqueo: 4,
      velocidad: 3,
      vida: 31,
      vidaMaxima: 31,
      poder: 34,
      poderMaximo: 34,
      arma1: {
        nombre: "ramas",
        danno: armasDict["ramas"].danno,
        descripcion: armasDict["ramas"].descripcion
      },
      arma2: {
        nombre: "esporas",
        danno: armasDict["esporas"].danno,
        descripcion: armasDict["esporas"].descripcion
      },
      habilidad1: { nombre: "enraizar", descripcion: habilidadesDict["enraizar"] },
      habilidad2: { nombre: "envenenar", descripcion: habilidadesDict["envenenar"] },
      habilidad3: { nombre: "habilidad 3", descripcion: habilidadesDict["habilidad 3"] },
      descripcion: "KARDANTO <br> Elemental de Vida <br> Coste de invocación: 20"
    },
    "momontu": {
      nombre: "MOMONTU",
      imagen: "img/momontu.png",
      icono: "",
      ataque: 5,
      esquiva: 3,
      bloqueo: 1,
      velocidad: 4,
      vida: 20,
      vidaMaxima: 20,
      poder: 51,
      poderMaximo: 51,
      arma1: {
        nombre: "mano",
        danno: armasDict["mano"].danno,
        descripcion: armasDict["mano"].descripcion
      },
      arma2: {
        nombre: "garras",
        danno: armasDict["garras"].danno,
        descripcion: armasDict["garras"].descripcion
      },
      habilidad1: { nombre: "bola de fuego", descripcion: habilidadesDict["bola de fuego"] },
      habilidad2: { nombre: "desgarro", descripcion: habilidadesDict["desgarro"] },
      habilidad3: { nombre: "habilidad 3", descripcion: habilidadesDict["habilidad 3"] },
      descripcion: "MOMONTU <br> Elemental de Fuego <br> Coste de invocación: 20"
    },
    "tortakla": {
      nombre: "TORTAKLA",
      imagen: "img/tortakla.png",
      icono: "",
      ataque: 4,
      esquiva: 1,
      bloqueo: 5,
      velocidad: 2,
      vida: 40,
      vidaMaxima: 40,
      poder: 19,
      poderMaximo: 19,
      arma1: {
        nombre: "aliento",
        danno: armasDict["aliento"].danno,
        descripcion: armasDict["aliento"].descripcion
      },
      arma2: {
        nombre: "pinzas",
        danno: armasDict["pinzas"].danno,
        descripcion: armasDict["pinzas"].descripcion
      },
      habilidad1: { nombre: "tsunami", descripcion: habilidadesDict["tsunami"] },
      habilidad2: { nombre: "triturar", descripcion: habilidadesDict["triturar"] },
      habilidad3: { nombre: "habilidad 3", descripcion: habilidadesDict["habilidad 3"] },
      descripcion: "TORTAKLA <br> Elemental de Agua <br> Coste de invocación: 20"
    },
    "ghalidos": {
      nombre: "GHALIDOS",
      imagen: "img/ghalidos.png",
      icono: "",
      ataque: 4,
      esquiva: 4,
      bloqueo: 1,
      velocidad: 5,
      vida: 25,
      vidaMaxima: 25,
      poder: 19,
      poderMaximo: 19,
      arma1: {
        nombre: "garras",
        danno: armasDict["garras"].danno,
        descripcion: armasDict["garras"].descripcion
      },
      arma2: {
        nombre: "alas",
        danno: armasDict["alas"].danno,
        descripcion: armasDict["alas"].descripcion
      },
      habilidad1: { nombre: "tornado", descripcion: habilidadesDict["tornado"] },
      habilidad2: { nombre: "desgarro", descripcion: habilidadesDict["desgarro"] },
      habilidad3: { nombre: "habilidad 3", descripcion: habilidadesDict["habilidad 3"] },
      descripcion: "GHALIDOS <br> Elemental de Aire <br> Coste de invocación: 20"
    },
    "terronte": {
      nombre: "TERRONTE",
      imagen: "img/terronte.png",
      icono: "",
      ataque: 4,
      esquiva: 1,
      bloqueo: 4,
      velocidad: 3,
      vida: 40,
      vidaMaxima: 40,
      poder: 31,
      poderMaximo: 31,
      arma1: {
        nombre: "mirada",
        danno: armasDict["mirada"].danno,
        descripcion: armasDict["mirada"].descripcion
      },
      arma2: {
        nombre: "punno",
        danno: armasDict["punno"].danno,
        descripcion: armasDict["punno"].descripcion
      },
      habilidad1: { nombre: "ataque poderoso", descripcion: habilidadesDict["ataque poderoso"] },
      habilidad2: { nombre: "terremoto", descripcion: habilidadesDict["terremoto"] },
      habilidad3: { nombre: "habilidad 3", descripcion: habilidadesDict["habilidad 3"] },
      descripcion: "TERRONTE <br> Elemental de Tierra <br> Coste de invocación: 20"
    },
    "naigaran": {
      nombre: "NAIGARAN",
      imagen: "img/naigaran.png",
      icono: "",
      ataque: 5,
      esquiva: 3,
      bloqueo: 2,
      velocidad: 4,
      vida: 20,
      vidaMaxima: 20,
      poder: 39,
      poderMaximo: 39,
      arma1: {
        nombre: "mordisco",
        danno: armasDict["mordisco"].danno,
        descripcion: armasDict["mordisco"].descripcion
      },
      arma2: {
        nombre: "tentaculos",
        danno: armasDict["tentaculos"].danno,
        descripcion: armasDict["tentaculos"].descripcion
      },
      habilidad1: { nombre: "confundir", descripcion: habilidadesDict["confundir"] },
      habilidad2: { nombre: "desgarro", descripcion: habilidadesDict["desgarro"] },
      habilidad3: { nombre: "habilidad 3", descripcion: habilidadesDict["habilidad 3"] },
      descripcion: "NAIGARAN <br> Elemental Etereo <br> Coste de invocación: 20"
    },
    "sarcomos": {
      nombre: "SARCOMOS",
      imagen: "img/sarcomos.png",
      icono: "",
      ataque: 5,
      esquiva: 4,
      bloqueo: 2,
      velocidad: 4,
      vida: 23,
      vidaMaxima: 23,
      poder: 24,
      poderMaximo: 24,
      arma1: {
        nombre: "mente",
        danno: armasDict["mente"].danno,
        descripcion: armasDict["mente"].descripcion
      },
      arma2: {
        nombre: "garras",
        danno: armasDict["garras"].danno,
        descripcion: armasDict["garras"].descripcion
      },
      habilidad1: { nombre: "confundir", descripcion: habilidadesDict["confundir"] },
      habilidad2: { nombre: "desgarro", descripcion: habilidadesDict["desgarro"] },
      habilidad3: { nombre: "habilidad 3", descripcion: habilidadesDict["habilidad 3"] },
      descripcion: "SARCOMOS <br> Elemental Psíquico <br> Coste de invocación: 20"
    },
    "cinirus": {
      nombre: "CINIRUS",
      imagen: "img/cinirus.png",
      icono: "",
      ataque: 4,
      esquiva: 3,
      bloqueo: 4,
      velocidad: 3,
      vida: 25,
      vidaMaxima: 25,
      poder: 31,
      poderMaximo: 31,
      arma1: {
        nombre: "cuernos",
        danno: armasDict["cuernos"].danno,
        descripcion: armasDict["cuernos"].descripcion
      },
      arma2: {
        nombre: "cascos",
        danno: armasDict["cascos"].danno,
        descripcion: armasDict["cascos"].descripcion
      },
      habilidad1: { nombre: "sanar", descripcion: habilidadesDict["sanar"] },
      habilidad2: { nombre: "sentencia", descripcion: habilidadesDict["sentencia"] },
      habilidad3: { nombre: "habilidad 3", descripcion: habilidadesDict["habilidad 3"] },
      descripcion: "CINIRUS <br> Elemental de Luz <br> Coste de invocación: 20"
    },
    "raizor": {
      nombre: "RAIZOR",
      imagen: "img/raizor.png",
      icono: "",
      ataque: 4,
      esquiva: 4,
      bloqueo: 2,
      velocidad: 4,
      vida: 25,
      vidaMaxima: 25,
      poder: 37,
      poderMaximo: 37,
      arma1: {
        nombre: "garras",
        danno: armasDict["garras"].danno,
        descripcion: armasDict["garras"].descripcion
      },
      arma2: {
        nombre: "aliento",
        danno: armasDict["aliento"].danno,
        descripcion: armasDict["aliento"].descripcion
      },
      habilidad1: { nombre: "relampago", descripcion: habilidadesDict["relampago"] },
      habilidad2: { nombre: "sobrecarga", descripcion: habilidadesDict["sobrecarga"] },
      habilidad3: { nombre: "habilidad 3", descripcion: habilidadesDict["habilidad 3"] },
      descripcion: "RAIZOR <br> Elemental de Rayo <br> Coste de invocación: 20"
    }
  }


  // ! Lista de esbirros !
  // Crea un array vacío para almacenar instancias de la clase Esbirro
  var esbirros = [];

  // Crea cinco instancias de Esbirro y las agrega al array esbirros
  for (let i = 0; i < 5; i++) {
    esbirros.push(new Esbirro({ nombre: `Esbirro ${i + 1}` }));
  }

  // * El siguiente código se utiliza para actualizar la primera instancia de esbirro
  // * con la información del esbirro "lobo" de esbirrosDict. Esto es temporal y debe descartarse
  // * después de completar las pruebas necesarias.
  esbirros[0].actualizarPropiedades(esbirrosDict.lobo);
  // ! Lista de esbirros !
}

// ? Variable principal para guarda el esbirro que se esta mostrando
let esbirroSeleccionado = esbirros[0]

// ? Variable principal para determinar si se esta usando el personaje o un esbirro
let esPersonaje = true

// ? Elemento del botón para cambiar entre personaje y esbirros
esbirrosBtn.addEventListener('click', () => {
  if (esPersonaje) {
    // Si se estaba mostrando el personaje, cambia a mostrar el esbirro
    esPersonaje = false;

    // Muestra los boton de izquierda y derecha
    mostrarControlesCambioEsbirro()

    // Llama a la función para mostrar la información del esbirro seleccionado
    mostrarEsbirroSeleccionado();
    // TODO: Agregar lógica para mostrar los botones de cambio de esbirro
  } else {
    // Si se estaba mostrando un esbirro, cambia a mostrar el personaje
    esPersonaje = true;

    // Oculta los boton de izquierda y derecha
    ocultarControlesCambioEsbirro()

    // Llama a la función para mostrar la información del personaje
    imprimirPersonaje();

    // TODO: Agregar lógica para ocultar los botones
  }
});


/**
 * ? Muestra la información del esbirro seleccionado en la interfaz gráfica.
 */
function mostrarEsbirroSeleccionado() {
  nombreTxt.textContent = esbirroSeleccionado.nombre.toUpperCase()
  portadaImg.src = esbirroSeleccionado.imagen
  experienciaTxt.textContent = esbirroSeleccionado.experiencia


  { // * Dependientes de equipamiento
    let eq1 = {
      nombre: "",
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
    let eq2 = {
      nombre: "",
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
    let eq3 = {
      nombre: "",
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

    if (esbirroSeleccionado.equipo1 in equipamientoDic) eq1 = equipamientoDic[esbirroSeleccionado.equipo1]
    if (esbirroSeleccionado.equipo2 in equipamientoDic) eq2 = equipamientoDic[esbirroSeleccionado.equipo2]
    if (esbirroSeleccionado.equipo3 in equipamientoDic) eq3 = equipamientoDic[esbirroSeleccionado.equipo3]

    ataqueTxt.textContent = esbirroSeleccionado.ataque + eq1.ataque + eq2.ataque + eq3.ataque
    esquivaTxt.textContent = esbirroSeleccionado.esquiva + eq1.esquiva + eq2.esquiva + eq3.esquiva
    bloqueoTxt.textContent = esbirroSeleccionado.bloqueo + eq1.bloqueo + eq2.bloqueo + eq3.bloqueo
    velocidadTxt.textContent = esbirroSeleccionado.velocidad + eq1.velocidad + eq2.velocidad + eq3.velocidad
    vidaTxt.textContent = esbirroSeleccionado.vida
    poderTxt.textContent = esbirroSeleccionado.poder

    equipo1Txt.textContent = eq1.nivel
    equipo2Txt.textContent = eq2.nivel
    equipo3Txt.textContent = eq3.nivel

    equipo1Img.src = eq1.icono
    equipo2Img.src = eq2.icono
    equipo3Img.src = eq3.icono
  }
  arma1Txt.textContent = capitalizarPrimeraLetra(esbirroSeleccionado.arma1.nombre)
  arma1Img.src = `img/${esbirroSeleccionado.arma1.nombre}.png`

  arma2Txt.textContent = capitalizarPrimeraLetra(esbirroSeleccionado.arma2.nombre)
  arma2Img.src = `img/${esbirroSeleccionado.arma2.nombre}.png`

  habilidad1Txt.textContent = esbirroSeleccionado.habilidad1.nombre.toUpperCase()
  habilidad2Txt.textContent = esbirroSeleccionado.habilidad2.nombre.toUpperCase()
  habilidad3Txt.textContent = esbirroSeleccionado.habilidad3.nombre.toUpperCase()
}

{ // * Cambiar esbirro seleccionado
  /**
   * ? Función para cambiar el esbirro al de la izquierda o derecha
   */
  function cambiarEsbirro() {
    let val = prompt("Ingrese comando")

    if (val in esbirrosDict) {
      esbirroSeleccionado.actualizarPropiedades(esbirrosDict[val])
    } else {
      contenConsola("COMANDO INCORRECTO")
    }

    mostrarEsbirroSeleccionado()
    cerrarEdicion()
  }

  // ? Trigger de cambio de esbirro
  // TODO: Arreglar bug con cambio de nombre de personaje
  nombreBtn.addEventListener('click', () => {
    if (edicion && !esPersonaje) cambiarEsbirro()
    else if (!edicion && !esPersonaje) contenConsola(esbirroSeleccionado.descripcion)
  })
}

{ // * Edición de atributos de esbirro
  { // * Funciones
    /**
     * ? Modifica los atributos del esbirro seleccionado según la acción especificada.
     * @param {string} accion - La acción a realizar: "mas" para aumentar, "menos" para disminuir.
     * @param {string} atributo - El atributo a modificar: "vidaMaxima", "poderMaximo", etc.
     */
    function modificarAtributosEsbirro(accion, atributo) {
      let data = ""

      // Valor mínimo requerido para aumentar el atributo
      let valor = (esbirroSeleccionado[atributo] + 1) * valorExperiencia[atributo]

      if (accion === 'mas') {
        if (esbirroSeleccionado.experiencia >= valor) {
          // Incrementar el atributo
          esbirroSeleccionado[atributo]++
          data = `${capitalizarPrimeraLetra(atributo)} ${esbirroSeleccionado[atributo]}`

          // Decrementar experiencia
          aumentarDisminuirExperiencia("esbirroSeleccionado", 'menos', atributo)
          // Cambiar contenido mostrado en la consola
          contenConsola(data)
          // Actualizar la información del esbirro en la interfaz
          mostrarEsbirroSeleccionado()
        } else {

          contenConsola("Experiencia insuficiente")
        }
      } else {
        if (esbirroSeleccionado[atributo] > 0) {
          // Decrementar el atributo
          esbirroSeleccionado[atributo]--

          // Ajustar atributos de vida y poder si es necesario
          if (atributo === "vidaMaxima" && esbirroSeleccionado.vidaMaxima < esbirroSeleccionado.vida) {
            esbirroSeleccionado.vida = esbirroSeleccionado.vidaMaxima
          }
          if (atributo === "poderMaximo" && esbirroSeleccionado.poderMaximo < esbirroSeleccionado.poder) {
            esbirroSeleccionado.poder = esbirroSeleccionado.poderMaximo
          }

          // Incrementar experiencia
          aumentarDisminuirExperiencia('esbirroSeleccionado', 'mas', atributo)
          // Cambiar contenido mostrado en la consola
          data = `${capitalizarPrimeraLetra(atributo)} ${esbirroSeleccionado[atributo]}`
          contenConsola(data)
          // Actualizar la información del esbirro en la interfaz
          mostrarEsbirroSeleccionado()
        }
      }
    }

    function modificarVidaPoderActualEsbirro(accion) {
      if (estadisticaSeleccionada === 'vida') {
        if (accion === "mas") { // ? Incremento de vida
          if (esbirroSeleccionado.vida < esbirroSeleccionado.vidaMaxima) esbirroSeleccionado.vida++
        } else { // ? Decremento de vida
          if (esbirroSeleccionado.vida > 0) esbirroSeleccionado.vida--
        }
        contenConsola(`Vida ${esbirroSeleccionado.vida} / ${esbirroSeleccionado.vidaMaxima}`)
      } else if (estadisticaSeleccionada === "poder") {
        if (accion === "mas") { // ? Incremento de poder
          if (esbirroSeleccionado.poder < esbirroSeleccionado.poderMaximo) esbirroSeleccionado.poder++
        } else { // ? Decremento de poder
          if (esbirroSeleccionado.poder > 0) esbirroSeleccionado.poder--
        }
        contenConsola(`Poder ${esbirroSeleccionado.poder} / ${esbirroSeleccionado.poderMaximo}`)
      }

      mostrarEsbirroSeleccionado()
    }
  }
  { // * Triggers
    { // * Ataque, esquiva, bloqueo y velocidad
      // Arreglo que contiene los nombres de atributos a los que se les asignarán eventos de clic
      const dictAtributos = ['ataque', 'esquiva', 'bloqueo', 'velocidad']

      // Itera a través del arreglo de atributos y configura eventos de clic para los botones correspondientes
      dictAtributos.forEach((key) => {
        // Obtiene una referencia al botón por su ID, que está compuesto por el nombre del atributo y "Btn"
        let boton = document.getElementById(`${key}Btn`)

        // Agrega un evento de clic al botón
        boton.addEventListener('click', () => {
          // Verifica si estamos en modo de edición y no es el personaje principal
          if (edicion && !esPersonaje) {
            // Establece el tipo de edición como "esbirro"
            tipoEdicion = 'esbirro';
            // Llama a la función para modificar la estadística correspondiente
            modificarEstadistica(key);
          } else if (!esPersonaje) {
            // Si no estamos en modo de edición, muestra la estadística correspondiente
            mostrarEstadistica('esbirro', key);
          }
        })
      })
    }

    { // * Vida, vidaMaxima, poder y poderMaximo
      // Agregar un controlador de evento al botón "vidaBtn"
      vidaBtn.addEventListener('click', () => {
        if (edicion && !esPersonaje) {
          // Si estamos en modo edición y no es el personaje principal,
          // establecer el tipo de edición en "esbirro" y modificar la estadística de "vidaMaxima"
          tipoEdicion = "esbirro";
          modificarEstadistica('vidaMaxima');
        } else if (!edicion && !esPersonaje) {
          // Si no estamos en modo edición y no es el personaje principal,
          // establecer el tipo de edición en "esbirro", mostrar botones arriba/abajo
          // y establecer la estadística seleccionada en "vida"
          tipoEdicion = 'esbirro';
          mostrarBtnArribaAbajo();
          estadisticaSeleccionada = 'vida';

          // Mostrar información de la estadística de vida actual y máxima en la consola
          contenConsola(`Vida ${esbirroSeleccionado.vida} / ${esbirroSeleccionado.vidaMaxima}`);
        }
      });

      // Agregar un controlador de evento al botón "poderBtn"
      poderBtn.addEventListener('click', () => {
        if (edicion && !esPersonaje) {
          // Si estamos en modo edición y no es el personaje principal,
          // establecer el tipo de edición en "esbirro" y modificar la estadística de "poderMaximo"
          tipoEdicion = "esbirro";
          modificarEstadistica('poderMaximo');
        } else if (!edicion && !esPersonaje) {
          // Si no estamos en modo edición y no es el personaje principal,
          // establecer el tipo de edición en "esbirro", mostrar botones arriba/abajo
          // y establecer la estadística seleccionada en "poder"
          tipoEdicion = 'esbirro';
          mostrarBtnArribaAbajo();
          estadisticaSeleccionada = 'poder';

          // Mostrar información de la estadística de poder actual y máximo en la consola
          contenConsola(`Poder ${esbirroSeleccionado.poder} / ${esbirroSeleccionado.poderMaximo}`);
        }
      });
    }
  }
}

{ // * Modificación y descripción de habildades
  { // * Funciones
    function editarHabilidadEsbirro(ranura) {
      let nombre = prompt('Ingrese habilidad')
      esbirroSeleccionado.configurarHabilidad(ranura, quitarAcentos(nombre))

      mostrarEsbirroSeleccionado()
      cerrarEdicion()
    }

    function descripcionHabilidadEsbirro(ranura) {
      contenConsola(esbirroSeleccionado[`habilidad${ranura}`].descripcion)
    }
  }
  { // * Triggers
    for (let i = 1; i <= 3; i++) {
      const boton = document.getElementById(`habilidad${i}Btn`)
      boton.addEventListener('click', () => {
        if (edicion && !esPersonaje) editarHabilidadEsbirro(i)
        else if (!esPersonaje) descripcionHabilidadEsbirro(i)
      })
    }
  }
}
// TODO: Modificación y descripción de armas
{ // * Modificación y descripción de armas
  { // * Funciones
    /**
     * ? Cambia el arma equipada de un esbirro seleccionado.
     *
     * @param {string} nombre - El nombre del arma que se desea equipar.
     */
    function cambiarArmaEsbirro(nombre) {
      // Configura el arma en el slot de arma seleccionada del esbirro seleccionado.
      esbirroSeleccionado.configurarArma(slotArmaSeleccionada, nombre);

      // Muestra la información actualizada del esbirro seleccionado.
      mostrarEsbirroSeleccionado();

      // Cierra la interfaz de edición.
      cerrarEdicion();

      // Cierra el modal de selección de armas.
      cerrarModal('armas');
    }

  }
  { // * Triggers
    // for (const arma in armasDict) {
    //   debugger
    //   const boton = document.getElementById(`${arma}Btn`) danno: 0, 
    //   boton.addEventListener('click', () => {
    //     console.log(`Seleccionaste ${arma}`)
    //   })
    // }
  }
}
// TODO: Intercambio de esbirros
{ // * Intercambio de esbirro
  { // * Funciones
    function mostrarControlesCambioEsbirro() {
      izquierdaBtn.style.display = "block"
      derechaBtn.style.display = "block"
    }

    function ocultarControlesCambioEsbirro() {
      izquierdaBtn.style.display = "none"
      derechaBtn.style.display = "none"
    }
  }
  { // * Triggers
    let i = 0
    izquierdaBtn.addEventListener('click', () => {
      i--
      if (i < 0) i = esbirros.length - 1
      esbirroSeleccionado = esbirros[i]
      mostrarEsbirroSeleccionado()
    })
    derechaBtn.addEventListener('click', () => {
      i++
      if (i > esbirros.length - 1) i = 0
      esbirroSeleccionado = esbirros[i]
      mostrarEsbirroSeleccionado()
    })
  }
}

// TODO: Yo, adaptar acción para esbirros
{ // * Accion esbirro
  { // * Funciones
    function accionEsbirroArma(slot) {
      let dado = Math.ceil((Math.random() * 20) + 0)

      let arma = esbirroSeleccionado[`arma${slot}`]
      // TODO: Completar el funcionamiento de tirada
      if (dado == 20)
        contenConsola(`Ataque con ${arma.nombre}<br>¡CRITICO!<br>Daño base ${Math.floor(arma.danno * esbirroSeleccionado.ataque * 2)}`)
      else if (dado == 1)
        contenConsola(`Ataque con ${arma.nombre}<br>¡PIFIA!<br>Daño base 0`)
      else
        contenConsola(`Ataque con ${arma.nombre}<br>${dado + esbirroSeleccionado.ataque}<br>Daño base ${Math.floor(arma.danno * esbirroSeleccionado.ataque)}`)
    }

    function accionEsbirroAtributo(slot) {
      let dado = Math.ceil((Math.random() * 20) + 0)
      switch (slot) {
        case 1: // * Ataque
          // TODO: Retocar el ataque limpio
          if (dado == 20)
            contenConsola(`Ataque limpio<br>¡CRITICO!<br>Daño base ${Math.floor(esbirroSeleccionado.ataque * 2)}`)
          else if (dado == 1)
            contenConsola(`Ataque limpio<br>¡PIFIA!<br>Daño base 0`)
          else
            contenConsola(`Ataque limpio<br>${dado + esbirroSeleccionado.ataque}<br>Daño base ${Math.floor(esbirroSeleccionado.ataque)}`)
          break;
        case 2: // * Esquiva
          // TODO: Retocar esquiva
          if (dado == 20)
            contenConsola(`Esquiva<br>¡CRITICO!<br>${Math.floor(esbirroSeleccionado.velocidad * 2)}`)
          else if (dado == 1)
            contenConsola(`Esquiva<br>¡PIFIA!`)
          else
            contenConsola(`Esquiva<br>${dado + esbirroSeleccionado.esquiva}`)
          break;
        case 3: // * Bloquea
          // TODO: Retocar bloqueo
          if (dado == 20)
            contenConsola(`Bloquea<br>¡CRITICO!<br>${Math.floor(esbirroSeleccionado.velocidad * 2)}`)
          else if (dado == 1)
            contenConsola(`Bloquea<br>¡PIFIA!`)
          else
            contenConsola(`Bloquea<br>${dado + esbirroSeleccionado.esquiva}`)
          break;
        case 4: // * Huye
          // TODO: Retocar huye
          if (dado == 20)
            contenConsola(`Huye<br>¡CRITICO!<br>${Math.floor(esbirroSeleccionado.velocidad * 2)}`)
          else if (dado == 1)
            contenConsola(`Huye<br>¡PIFIA!`)
          else
            contenConsola(`Huye<br>${dado + esbirroSeleccionado.esquiva}`)
          break;
        default:
          break;
      }
    }
  }
}

// TODO: Yo, modificación de equipamiento de esbirros
{ // * Equipamiento de esbirros
  { // * Funciones
    var equipamientoDic = {
      'armaduraLigera': {
        // TODO: Arreglar armadura ligera
        nombre: "Armadura Ligera",
        icono: "img/armaduraligera.png",
        descripcion: "",
        nivel: 1,
        ataque: 1000,
        esquiva: 1000,
        bloqueo: 1000,
        velocidad: 1000,
        vidaMaxima: 1000,
        poderMaximo: 1000,
      }

      // TODO: Agregar el resto de equipamiento
    }

    function cambiarEquipamientoEsbirro(item) {
      esbirroSeleccionado.configurarEquipamiento(equipamientoSeleccionado, item)
      mostrarEsbirroSeleccionado()
      cerrarModal('equipamiento')
    }
  }
}