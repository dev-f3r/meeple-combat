
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

  // ? Limpia la consola si no esta en modo edición, caso contrario habre el promt de comandos
  consolaBtn.addEventListener('click', () => {
    if (!edicion) {
      console.log("Clear")
      consolaBtn.innerHTML = ""
      ocultarControlesCambioEsbirro()
      ocultarBtnArrivaAbajo()
      flagControlesCambioEsbirro = false
    } else if (edicion) {
      mostrarInputComandos()
      esIngresarComando = true
    }
  })

  // ? Oculta los botones de edición, y cambia la var edición a 0
  function cerrarEdicion() {
    edicion = 0
    editarImg.src = "img/editar.png"

    ocultarBtnArrivaAbajo()
    experienciaTxt.style.display = "none"
    ocultarInputExperiencia()
    ocultarInputComandos()
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

    contenConsola(data)
  }

  /* 
      * @val: string
  */
  // ? Modifica el contenido de la consola
  function contenConsola(val) {
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
  function mostrarDescripcionArma(slot) {
    let seleccion = slot == 1 ? arma1 : arma2
    contenConsola(seleccion.descripcion)
  }

  // ? Muestra los botones de incremento y decremento
  function mostrarBtnArribaAbajo() {
    arribaBtn.style.display = "block"
    abajoBtn.style.display = "block"
    ocultarControlesCambioEsbirro()
    flagControlesCambioEsbirro = false
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

  function quitarEspacios(texto) {
    return texto.split(" ").join("")
  }
}


{ // * Ingreso de comandos
  // ? Flag que indica si el input se esta usando para ingresar un comando o el nombre de una habilidad
  var esIngresarComando = true
  function mostrarInputComandos() {
    ocultarInputExperiencia()
    contenedorInputComandos.style.display = "flex"
    if (esIngresarComando) inputLabelComandos.textContent = "Ingrese comando"
    else inputLabelComandos.textContent = "Ingrese nombre de habilidad"
  }

  function ocultarInputComandos() {
    contenedorInputComandos.style.display = "none"
  }

  comandosValor.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      if (esIngresarComando) ingresarComando(comandosValor.value)
      else if (!esIngresarComando && esPersonaje) cambiarHabilidad(comandosValor.value)
      else if (!esIngresarComando && !esPersonaje) editarHabilidadEsbirro(comandosValor.value)
      ocultarInputComandos()
    }
  })
  ingresarComandos.addEventListener("click", function () {
    if (esIngresarComando) ingresarComando(comandosValor.value)
    else if (!esIngresarComando && esPersonaje) cambiarHabilidad(comandosValor.value)
    else if (!esIngresarComando && !esPersonaje) editarHabilidadEsbirro(comandosValor.value)
    ocultarInputComandos()
  })

  function ingresarComando(comando) {
    comando = comando.toLowerCase()
    // ? Cambio de personaje con '/' + nombre
    // if (/^\//.test(comando)) {
    //   if (esPersonaje) { // ? Cambio de personaje principal
    //     let nombrePersonaje = comando.match(/^\/(.*)/)[1]

    //     if (nombrePersonaje in personajesDict) avatar(nombrePersonaje)

    //     else contenConsola("Personaje incorrecto")
    //   } else { // ? Cambio de esbirro
    //     let nombreEsbirro = comando.match(/^\/(.*)/)[1]

    //     if (nombreEsbirro in personajesDict) cambiarEsbirro(nombreEsbirro)
    //     else if (nombreEsbirro in esbirrosDict) cambiarEsbirro(nombreEsbirro)

    //     else contenConsola("Personaje incorrecto")
    //   }
    // }
    if (comando === '/barbaro') {
      if (esPersonaje) { // ? Cambio de personaje principal
        avatar('barbaro')
      } else { // ? Cambio de esbirro
        cambiarEsbirro('barbaro')
      }
    }
    // TODO: Agregar los demas comandos
  }
}

// ? Objeto para almacenar información de las habilidades
// TODO: Agregar habilidades restantes, y revisar existentes
const habilidadesDict = {
  "habilidad 1": {
    nombre: "habilidad 1",
    coste: 1,
    descripcion: "Habildad 1 sin descripción"
  },
  "habilidad 2": {
    nombre: "habilidad 2",
    coste: 1,
    descripcion: "Habildad 2 sin descripción"
  },
  "habilidad 3": {
    nombre: "habilidad 3",
    coste: 1,
    descripcion: "Habildad 3 sin descripción"
  },
  "machacar": {
    nombre: "machacar",
    coste: 1,
    descripcion: "Impacta en el objetivo generando daño crítico y quitándole mitigación durante 1 turno <br> Poder min(6)"
  },
  "ira ciega": {
    nombre: "ira ciega",
    coste: 1,
    descripcion: "Al matar un enemigo, puedes atacar a cualquier criatura o personaje que esté a tu alcance, sin necesidad de acciones <br> Poder min(1)"
  },
  "masestro de armas": {
    nombre: "masestro de armas",
    coste: 1,
    descripcion: "Eres competente con todas las armas, al matar un enemigo puedes hacerte con la suya <br> Habilidad Pasiva"
  },
  "duelo": {
    nombre: "duelo",
    coste: 1,
    descripcion: "En combate 1 vs 1 obtienes +3 a la esquiva y ataque <br> Habilidad Pasiva"
  },
  "corte profundo": {
    nombre: "corte profundo",
    coste: 1,
    descripcion: "Daña al objetivo y deja un sangrado que genera 3 puntos de daño por turno durante 3 turnos (no mitigables) <br> Poder min(6)"
  },
  "ataque rapido": {
    nombre: "ataque rapido",
    coste: 1,
    descripcion: "Avanza hacia el objetivo y lo ataca en una acción combinada / distancia máx(velocidad x 2) <br> Poder min(3) / Acciones(Arma)"
  },
  "cobertura": {
    nombre: "cobertura",
    coste: 1,
    descripcion: "Aumenta 300% la mitigación ante proyectiles físicos durante 3 turnos (al moverse se pierde la cobertura) <br> Poder(3) / Requiere Escudo"
  },
  "embestida con escudo": {
    nombre: "embestida con escudo",
    coste: 1,
    descripcion: "Golpeas al objetivo generándole 200% daño físico y derribándolo <br> Poder(3) / Requiere Escudo"
  },
  "ataque poderoso": {
    nombre: "ataque poderoso",
    coste: 1,
    descripcion: "Carga tu golpe con energía <br> Poder min(1) / Sin Requerimentos"
  },
  "ataque multiple": {
    nombre: "ataque multiple",
    coste: 1,
    descripcion: "Una serie de golpes, los cuales suman todo su daño, generándolo de manera explosiva al finalizar la habilidad <br> Poder min(3)"
  },
  "golpe de chi": {
    nombre: "golpe de chi",
    coste: 1,
    descripcion: "Un poderoso empujón cargado de energía, que genera daño físico, aturde al objetivo 1 turno y lo hace retroceder (ataque x casilleros) <br> Poder min(6)"
  },
  "patada voladora": {
    nombre: "patada voladora",
    coste: 1,
    descripcion: "Te lanzas hacia el objetivo a una distancia máxima de (velocidad x casilleros), al golpearlo generas 200% de daño físico + 1 punto de daño por metro recorrido <br> Poder min(3) / Sin Requisitos"
  },
  "desarmar": {
    nombre: "desarmar",
    coste: 1,
    descripcion: "Desarmas al objetivo, dejando caer su arma a 1 casillero de distancia a elección <br> Poder(3)"
  },
  "sigilo": {
    nombre: "sigilo",
    coste: 1,
    descripcion: "Si tu objetivo se encuentra en combate con otro personaje o criatura, obtienes + 3 al ataque <br> Pasiva"
  },
  "torbellino": {
    nombre: "torbellino",
    coste: 1,
    descripcion: "Giras tu con tu arma generando 50% de daño a todos los objetivos en tu rango de alcance, puedes caminar mientras la habilidad está activa <br> Poder min(6)"
  },
  "flechas multiples": {
    nombre: "flechas multiples",
    coste: 1,
    descripcion: "Lanzas 3 flechas juntas, las cuales harán 50% de daño de manera acumulativa si más de un proyectil impacta en el mismo objetivo (se debe realizar una tirada por cada flecha) <br> Poder(3) / Requiere arco"
  },
  "flecha energizada": {
    nombre: "flecha energizada",
    coste: 1,
    descripcion: "Cargas con energía tus flechas aumentando su daño <br> Poder min(1) / Requiere arco"
  },
  "flecha elemental": {
    nombre: "flecha elemental",
    coste: 1,
    descripcion: "Cambia el tipo de daño elemental que produce tu flecha <br> Poder(3) / Requiere arco"
  },
  "invocar": {
    nombre: "invocar",
    coste: 1,
    descripcion: "Ahora puedes manifestar criaturas elementales"
  },
  "golpe vampirico": {
    nombre: "golpe vampirico",
    coste: 1,
    descripcion: "Absorbes vida del objetivo para ti mismo <br> Poder min(6)"
  },
  "incansable": {
    nombre: "incansable",
    coste: 1,
    descripcion: "Habilidad pasiva que brinda +1 acción"
  },
  "ataque doble": {
    nombre: "ataque doble",
    coste: 1,
    descripcion: "Realiza dos ataques, con armas gemelas en la misma cantidad de acciones <br> Poder min(3)"
  },
  "exorcismo": {
    nombre: "exorcismo",
    coste: 1,
    descripcion: "Genera daño sagrado y aturde al objetivo durante 1 turno <br> Poder min(3)"
  },
  "bola de fuego": {
    nombre: "bola de fuego",
    coste: 1,
    descripcion: "Genera daño de fuego. Los golpes críticos incendian al objetivo, lo que le genera 3 puntos de daño no mitigable, durante 3 turnos <br> Poder min(3)"
  },
  "bola de hielo": {
    nombre: "bola de hielo",
    coste: 1,
    descripcion: "Genera daño de hielo. Los golpes críticos congelan al objetivo, quitándole mitad de velocidad y toda mitigación hacia este elemento, durante 3 turnos <br> Poder min(3)"
  },
  "sentencia": {
    nombre: "sentencia",
    coste: 1,
    descripcion: "El objetivo pierde toda mitigación durante 3 turno <br> Poder(3)"
  },
  "sanar": {
    nombre: "sanar",
    coste: 1,
    descripcion: "Restaura al objetivo 1 x 1 puntos de salud <br> Poder min(1)"
  },
  "misil arcano": {
    nombre: "misil arcano",
    coste: 1,
    descripcion: "Genera daño etéreo <br> Poder min(1)"
  },
  "explosion de escarcha": {
    nombre: "explosion de escarcha",
    coste: 1,
    descripcion: "Una onda expansiva que congela a todos los enemigos en un radio de (ataque x casillero) / lo que les reduce a la mitad su velocidad y los deja sin mitigación hacia este elemento, durante 3 turnos <br> Poder min(6)"
  },
  "invisibilidad": {
    nombre: "invisibilidad",
    coste: 1,
    descripcion: "Te vuelves indetectable para los demás durante 3 turnos, al atacar pierdes el efecto <br> Poder min(6)"
  },
  "enraizar": {
    nombre: "enraizar",
    coste: 1,
    descripcion: "Unas poderosas raíces surgen del suelo sujetando al objetivo e impidiéndole moverse del lugar durante 3 turnos <br> Poder min(3) / El objetivo aún puede atacar, e incluso atacar a las raíces, las cuales tienen 50 puntos de vida"
  },
  "envenenar": {
    nombre: "envenenar",
    coste: 1,
    descripcion: "Envenenas al objetivo generándole 100% de daño mágico durante 3 turnos <br> Poder (6)"
  },
  "licantropia": {
    nombre: "licantropia",
    coste: 1,
    descripcion: "Puedes tener garras y colmillos como armas naturales durante 3 turnos <br> Poder o Poder(3) <br> Escribe el comando: /licántropo"
  },
  "terremoto": {
    nombre: "terremoto",
    coste: 1,
    descripcion: "Vuelves inestable un área de (ataque x casilleros) durante 3 turnos que se renuevan con cada lanzamiento. Atravesar este terreno cuesta doble de movimiento, podrás lanzar el ataque nuevamente cada vez que alguien pase sobre el área, en caso de acertar este se caerá. Los golpes críticos de terremoto en áreas inestables inmovilizan al objetivo <br> Poder(3)"
  },
  "relampago": {
    nombre: "relampago",
    coste: 1,
    descripcion: "Genera daño de electricidad y rebota en hasta 3 objetivos que no estén separados por más de (ataque x casilleros), los golpes críticos dejan al objetivo electrificado <br> Poder min(3)"
  },
  "sobrecarga": {
    nombre: "sobrecarga",
    coste: 1,
    descripcion: "Sobrecargas un objetivo que se encuentre electrificado generando 500% de daño mágico <br> Poder min(3)"
  },
  "control mental": {
    nombre: "control mental",
    coste: 1,
    descripcion: "Controlas el personaje o npc durante 1 turno <br> Poder min(9)"
  },
  "confundir": {
    nombre: "confundir",
    coste: 1,
    descripcion: "Confunde al objetivo, haciendo que cualquier ataque que este haga y falle, durante 3 turno, sea un golpe certero hacia el mismo o un aliado cercano. Una pifia se considera crítico para la víctima <br> Poder min(6)"
  },
  "miedo": {
    nombre: "miedo",
    coste: 1,
    descripcion: "El objetivo gasta todas sus acciones corriendo en dirección aleatoria, siempre alejándose de quien lanzó el hechizo. En caso de un escenario cerrado, correrá y quedará en la esquina más lejana <br> Poder min(6)"
  },
  "tsunami": {
    nombre: "tsunami",
    coste: 1,
    descripcion: "Una poderosa ola en forma de cono que se expande hasta 1 casillero x ataque. Empuja todo a su paso a una distancia igual a la mitad del ataque y genera daño mágico de agua <br> Poder min(9)"
  },
  "drenar": {
    nombre: "drenar",
    coste: 1,
    descripcion: "Transfiere vida, energía o maná del objetivo al conjurador, puedes apostar una de estas poders para aumentar el efecto, la cual solo se consumirá si fallas el ataque <br> Poder min(0)"
  },
  "transmutar": {
    nombre: "transmutar",
    coste: 1,
    descripcion: "Convierte vida energía o maná en cualquiera de ellas, puede usarse sobre si mismo o sobre otros personajes <br> Poder min(1)"
  },
  "derribo": {
    nombre: "derribo",
    coste: 1,
    descripcion: "Derriba al objetivo <br> Poder(3)"
  },
  "desgarro": {
    nombre: "desgarro",
    coste: 1,
    descripcion: "Una herida que genera 3 puntos de daño no mitigable durante 3 turnos <br> Poder(6)"
  },
  "triturar": {
    nombre: "triturar",
    coste: 1,
    descripcion: "Rompe los huesos de la víctima, causando daño físico y dejando a la víctima con -1 a la velocidad durante 3 turnos, este penalizador se puede acumular, el tiempo de efecto se reinicia al hacerlo <br> Poder(6)"
  },
  "petrificar": {
    nombre: "petrificar",
    coste: 1,
    descripcion: "Rompe los huesos de la víctima, causando daño físico y dejando a la víctima con -1 a la velocidad durante 3 turnos, este penalizador se puede acumular, el tiempo de efecto se reinicia al hacerlo, una vez sin velocidad el objetivo recibe doble de daño <br> Poder(6)"
  }
}

// ? Objeto para almacenar información de las armas
// TODO: Agregar las demas armas
const armasDict = {
  "nada": {
    nombre: "nada",
    icono: "img/nada.png",
    danno: 0,
    descripcion: "Arma sin descripción"
  },
  "punno": {
    nombre: "puño",
    icono: "img/punno.png",
    danno: 0.75,
    descripcion: "Arma natural <br> 1 Acción / 75% de ataque como daño físico"
  },
  "patada": {
    nombre: "patada",
    icono: "img/patada.png",
    danno: 1,
    descripcion: "Arma natural <br> 2 Acciones / 100% de ataque como daño físico"
  },
  "daga": {
    nombre: "daga",
    icono: "img/daga.png",
    danno: 1,
    descripcion: "Arma a una mano <br> 1 Acción / 100% de ataque como daño físico"
  },
  "espada": {
    nombre: "espada",
    icono: "img/espada.png",
    danno: 1.5,
    descripcion: "Arma a dos manos <br> 2 Acciones / 150% de ataque como daño físico"
  },
  "arco": {
    nombre: "arco",
    icono: "img/arco.png",
    danno: 1.75,
    descripcion: "Arma a distancia <br> 3 casilleros x ataque / 3 Acciones / 175% de ataque como daño físico"
  },
  "arrojadiza": {
    nombre: "arrojadiza",
    icono: "img/arrojadiza.png",
    danno: 0.75,
    descripcion: "Arma arrojadiza <br> 3 casillero x ataque / 2 Acciones / 75% de ataque como daño físico"
  },
  "escudo": {
    nombre: "escudo",
    icono: "img/escudo.png",
    danno: 0.5,
    descripcion: "Escudo <br> Permite bloquear ataques fuera de turno / 1 Accion / 50% de ataque como daño físico"
  },
  "palma": {
    nombre: "palma",
    icono: "img/magia.png",
    danno: 1,
    descripcion: "Arma a distancia <br> 1 casillero x ataque / 1 Acción / 100% de ataque como daño mágico"
  },
  "varita": {
    nombre: "varita",
    icono: "img/varita.png",
    danno: 1,
    descripcion: "Arma a distancia <br> 3 casilleros x ataque / 1 Accion / 100% de ataque como daño mágico"
  },
  "baculo": {
    nombre: "baculo",
    icono: "img/baculo.png",
    danno: 1.5,
    descripcion: "Arma a distancia <br> 2 casilleros x ataque / 2 Acciones / 150% de ataque como daño mágico"
  },
  "runa": {
    nombre: "runa",
    icono: "img/runa.png",
    danno: 0.75,
    descripcion: "Arma a distancia <br> 3 casilleros x ataque / 2 Acciones / 75% de ataque como daño mágico"
  },
  "totem": {
    nombre: "totem",
    icono: "img/totem.png",
    danno: 1,
    descripcion: "Arma a distancia <br> 2 casilleros x ataque / 2 Acciones / 100% de ataque como daño mágico"
  },
  "hojaruna": {
    nombre: "hoja runa",
    icono: "img/hojaruna.png",
    danno: 1,
    descripcion: "Arma mixta <br> 1 casillero x ataque / 2 Acciones / 100% de ataque como daño físico o mágico"
  },
  "mordisco": {
    nombre: "mordisco",
    icono: "img/mordisco.png",
    danno: 1.5,
    descripcion: "Mordisco Arma natural <br> / 2 Acciones / 150% de ataque como daño físico"
  },
  "garras": {
    nombre: "garras",
    icono: "img/garras.png",
    danno: 1,
    descripcion: "Garras <br> / 1 Accion / 100% de ataque como daño físico"
  },
  "aliento": {
    nombre: "aliento",
    icono: "img/aliento.png",
    danno: 2.5,
    descripcion: "ALIENTO <br> Arma a distancia / 3 Acciones <br> 250% de ataque como daño mágico <br> Distancia máxima of 1 casillero x punto de ataque"
  },
  "pinzas": {
    nombre: "pinzas",
    icono: "img/pinzas.png",
    danno: 1.75,
    descripcion: "PINZAS <br> Arma cuerpo a cuerpo / 2 Acciones <br> 175% de ataque como daño físico"
  },
  "mente": {
    nombre: "mente",
    icono: "img/mente.png",
    danno: 1,
    descripcion: "MENTE <br> Arma a distancia / 1 Accion <br> 100% de ataque como daño mágico. <br> Distancia máxima of 2 casillero x punto de ataque"
  },
  "ramas": {
    nombre: "ramas",
    icono: "img/ramas.png",
    danno: 1.25,
    descripcion: "RAMAS <br> Arma cuerpo a cuerpo / 2 Acciones <br> 125% de ataque como daño físico"
  },
  "esporas": {
    nombre: "esporas",
    icono: "img/esporas.png",
    danno: 1.25,
    descripcion: "ESPORAS <br> Arma a distancia / 2 Acciones <br> 125% de ataque como daño mágico. <br> Distancia máxima of 1 casillero x punto de ataque"
  },
  "alas": {
    nombre: "alas",
    icono: "img/alas.png",
    danno: 1.25,
    descripcion: "ALAS <br> Arma a distancia / 2 Acciones <br> 125% de ataque como daño mágico. <br> Distancia máxima de 1 casillero x punto de ataque"
  },
  "mirada": {
    nombre: "mirada",
    icono: "img/mirada.png",
    danno: 1.25,
    descripcion: "MIRADA <br> Arma a distancia / 2 Acciones <br> 125% de ataque como daño mágico. <br> Distancia máxima de 2 casilleros x punto de ataque"
  },
  "cuernos": {
    nombre: "cuernos",
    icono: "img/cuernos.png",
    danno: 1.25,
    descripcion: "CUERNOS <br> Arma a distancia / 2 Acciones <br> 125% de ataque como daño mágico. <br> Distancia máxima de 1 casillero x punto de ataque"
  },
  "cascos": {
    nombre: "cascos",
    icono: "img/cascos.png",
    danno: 1.25,
    descripcion: "CASCOS <br> Arma cuerpo a cuerpo / 2 Acciones <br> 125% de ataque como daño físico"
  },
  "tentaculos": {
    nombre: "tentaculos",
    icono: "img/tentaculos.png",
    danno: 1.25,
    descripcion: "TENTACULOS <br> Arma mixta cuerpo a cuerpo / 2 Acciones <br> 125% de ataque como daño mágico o físico"
  }
}

// ? Objeto para almacenar información de los esbirros
// TODO: Agregar los demas esbirros
const esbirrosDict = {
  "lobo": {
    nombre: "lobo",
    portada: "img/lobo.png",
    icono: "",

    ataque: 3,
    esquiva: 2,
    bloqueo: 1,
    velocidad: 6,
    vida: 19,
    vidaMaxima: 19,
    poder: 22,
    poderMaximo: 22,

    arma1: "mordisco",
    arma2: "garras",

    habilidad1: "derribo",
    habilidad2: "desgarro",
    habilidad3: "habilidad 3",

    descripcion: "LOBO <br> Criatura de Sangre <br> Coste de invocación: 20",

    equipo1: "nada",
    equipo2: "nada",
    equipo3: "nada"
  },
  "esqueleto": {
    nombre: "esqueleto",
    portada: "img/esqueleto.png",
    icono: "",
    ataque: 4,
    esquiva: 2,
    bloqueo: 3,
    velocidad: 2,
    vida: 30,
    vidaMaxima: 30,
    poder: 27,
    poderMaximo: 27,
    arma1: "mordisco",
    arma2: "garras",
    habilidad1: "derribo",
    habilidad2: "desgarro",
    habilidad3: "habilidad 3",
    descripcion: "ESQUELETO <br> Criatura de Vida y Éter <br> Coste de invocación: 15",
    equipo1: "nada",
    equipo2: "nada",
    equipo3: "nada"
  },
  "kardanto": {
    nombre: "kardanto",
    portada: "img/kardanto.png",
    icono: "",
    ataque: 4,
    esquiva: 2,
    bloqueo: 4,
    velocidad: 3,
    vida: 31,
    vidaMaxima: 31,
    poder: 34,
    poderMaximo: 34,
    arma1: "ramas",
    arma2: "esporas",
    habilidad1: "enraizar",
    habilidad2: "envenenar",
    habilidad3: "habilidad 3",
    descripcion: "KARDANTO <br> Elemental de Vida <br> Coste de invocación: 20",
    equipo1: "nada",
    equipo2: "nada",
    equipo3: "nada"
  },
  "momontu": {
    nombre: "momontu",
    portada: "img/momontu.png",
    icono: "",
    ataque: 5,
    esquiva: 3,
    bloqueo: 1,
    velocidad: 4,
    vida: 20,
    vidaMaxima: 20,
    poder: 51,
    poderMaximo: 51,
    arma1: "palma",
    arma2: "garras",
    habilidad1: "bola de fuego",
    habilidad2: "desgarro",
    habilidad3: "habilidad 3",
    descripcion: "MOMONTU <br> Elemental de Fuego <br> Coste de invocación: 20",
    equipo1: "nada",
    equipo2: "nada",
    equipo3: "nada"
  },
  "tortakla": {
    nombre: "tortakla",
    portada: "img/tortakla.png",
    icono: "",
    ataque: 4,
    esquiva: 1,
    bloqueo: 5,
    velocidad: 2,
    vida: 40,
    vidaMaxima: 40,
    poder: 19,
    poderMaximo: 19,
    arma1: "aliento",
    arma2: "pinzas",
    habilidad1: "tsunami",
    habilidad2: "triturar",
    habilidad3: "habilidad 3",
    descripcion: "TORTAKLA <br> Elemental de Agua <br> Coste de invocación: 20",
    equipo1: "nada",
    equipo2: "nada",
    equipo3: "nada"
  },
  "ghalidos": {
    nombre: "ghalidos",
    portada: "img/ghalidos.png",
    icono: "",
    ataque: 4,
    esquiva: 4,
    bloqueo: 1,
    velocidad: 5,
    vida: 25,
    vidaMaxima: 25,
    poder: 19,
    poderMaximo: 19,
    arma1: "garras",
    arma2: "alas",
    habilidad1: "tornado",
    habilidad2: "desgarro",
    habilidad3: "habilidad 3",
    descripcion: "GHALIDOS <br> Elemental de Aire <br> Coste de invocación: 20",
    equipo1: "nada",
    equipo2: "nada",
    equipo3: "nada"
  },
  "terronte": {
    nombre: "terronte",
    portada: "img/terronte.png",
    icono: "",
    ataque: 4,
    esquiva: 1,
    bloqueo: 4,
    velocidad: 3,
    vida: 40,
    vidaMaxima: 40,
    poder: 31,
    poderMaximo: 31,
    arma1: "mirada",
    arma2: "punno",
    habilidad1: "ataque poderoso",
    habilidad2: "terremoto",
    habilidad3: "habilidad 3",
    descripcion: "TERRONTE <br> Elemental de Tierra <br> Coste de invocación: 20",
    equipo1: "nada",
    equipo2: "nada",
    equipo3: "nada"
  },
  "naigaran": {
    nombre: "naigaran",
    portada: "img/naigaran.png",
    icono: "",
    ataque: 5,
    esquiva: 3,
    bloqueo: 2,
    velocidad: 4,
    vida: 20,
    vidaMaxima: 20,
    poder: 39,
    poderMaximo: 39,
    arma1: "mordisco",
    arma2: "tentaculos",
    habilidad1: "confundir",
    habilidad2: "desgarro",
    habilidad3: "habilidad 3",
    descripcion: "NAIGARAN <br> Elemental Etereo <br> Coste de invocación: 20",
    equipo1: "nada",
    equipo2: "nada",
    equipo3: "nada"
  },
  "sarcomos": {
    nombre: "sarcomos",
    portada: "img/sarcomos.png",
    icono: "",
    ataque: 5,
    esquiva: 4,
    bloqueo: 2,
    velocidad: 4,
    vida: 23,
    vidaMaxima: 23,
    poder: 24,
    poderMaximo: 24,
    arma1: "mente",
    arma2: "garras",
    habilidad1: "confundir",
    habilidad2: "desgarro",
    habilidad3: "habilidad 3",
    descripcion: "SARCOMOS <br> Elemental Psíquico <br> Coste de invocación: 20",
    equipo1: "nada",
    equipo2: "nada",
    equipo3: "nada"
  },
  "cinirus": {
    nombre: "cinirus",
    portada: "img/cinirus.png",
    icono: "",
    ataque: 4,
    esquiva: 3,
    bloqueo: 4,
    velocidad: 3,
    vida: 25,
    vidaMaxima: 25,
    poder: 31,
    poderMaximo: 31,
    arma1: "cuernos",
    arma2: "cascos",
    habilidad1: "sanar",
    habilidad2: "sentencia",
    habilidad3: "habilidad 3",
    descripcion: "CINIRUS <br> Elemental de Luz <br> Coste de invocación: 20",
    equipo1: "nada",
    equipo2: "nada",
    equipo3: "nada"
  },
  "raizor": {
    nombre: "raizor",
    portada: "img/raizor.png",
    icono: "",
    ataque: 4,
    esquiva: 4,
    bloqueo: 2,
    velocidad: 4,
    vida: 25,
    vidaMaxima: 25,
    poder: 37,
    poderMaximo: 37,
    arma1: "garras",
    arma2: "aliento",
    habilidad1: "relampago",
    habilidad2: "sobrecarga",
    habilidad3: "habilidad 3",
    descripcion: "RAIZOR <br> Elemental de Rayo <br> Coste de invocación: 20",
    equipo1: "nada",
    equipo2: "nada",
    equipo3: "nada"
  }
}

// ? Objeto para almecenar información de los esbirros
// TODO: Agregar los demas personajes
const personajesDict = {
  "nuevopj": {
    nombre: "nuevo",
    portada: "img/nuevopj.png",
    icono: "",
    descripcion: "Sin descripción.",

    ataque: 0,
    esquiva: 0,
    bloqueo: 0,
    velocidad: 0,
    vida: 0,
    vidaMaxima: 0,
    poder: 0,
    poderMaximo: 0,

    arma1: "nada",
    arma2: "nada",

    equipo1: "nada",
    equipo2: "nada",
    equipo3: "nada",

    habilidad1: "habilidad 1",
    habilidad2: "habilidad 2",
    habilidad3: "habilidad 3",
  },
  "guerrero": {
    nombre: "guerrero",
    portada: "img/guerrero.png",
    icono: "",
    descripcion: "combatiente cuerpo a cuerpo, con mucha resistencia pero muy poco daño base.",

    ataque: 4,
    esquiva: 2,
    bloqueo: 5,
    velocidad: 3,
    vida: 40,
    vidaMaxima: 40,
    poder: 40,
    poderMaximo: 40,

    arma1: "espada",
    arma2: "escudo",

    equipo1: "armaduraPesada",
    equipo2: "nada",
    equipo3: "nada",

    habilidad1: "embestida con escudo",
    habilidad2: "cobertura",
    habilidad3: "ataque poderoso",
  },
  "chaman": {
    nombre: "chaman",
    portada: "img/chaman.png",
    icono: "",
    descripcion: "combatiente mágico elemental, utiliza totems para ampliar su área de efectos.",

    ataque: 5,
    esquiva: 3,
    bloqueo: 3,
    velocidad: 3,
    vida: 40,
    vidaMaxima: 40,
    poder: 43,
    poderMaximo: 43,

    arma1: "palma",
    arma2: "totem",

    equipo1: "nada",
    equipo2: "nada",
    equipo3: "nada",

    habilidad1: "relámpago",
    habilidad2: "terremoto",
    habilidad3: "sobrecarga",
  },
  "barbaro": {
    nombre: "barbaro",
    portada: "img/barbaro.png",
    icono: "",
    descripcion: "combatiente cuerpo a cuerpo que genera el mayor daño posible sin pensar mucho en su seguridad.",

    ataque: 6,
    esquiva: 1,
    bloqueo: 1,
    velocidad: 4,
    vida: 33,
    vidaMaxima: 33,
    poder: 38,
    poderMaximo: 38,

    arma1: "espada",
    arma2: "patada",

    equipo1: "armaduraPesada",
    equipo2: "nada",
    equipo3: "nada",

    habilidad1: "torbellino",
    habilidad2: "incansable",
    habilidad3: "ataque poderoso",
  },
  "picaro": {
    nombre: "picaro",
    portada: "img/picaro.png",
    icono: "",
    descripcion: "combatiente sigiloso y rápido, siempre intenta infligir daño sin quedar expuesto.",

    ataque: 4,
    esquiva: 4,
    bloqueo: 2,
    velocidad: 4,
    vida: 25,
    vidaMaxima: 25,
    poder: 46,
    poderMaximo: 46,

    arma1: "daga",
    arma2: "daga",

    equipo1: "nada",
    equipo2: "nada",
    equipo3: "nada",

    habilidad1: "ataque doble",
    habilidad2: "sigilo",
    habilidad3: "desarmar",
  },
  "mago": {
    nombre: "mago",
    portada: "img/mago.png",
    icono: "",
    descripcion: "experto en el manejo de armas y habilidades mágicas, mantiene distancia de sus enemigos.",

    ataque: 5,
    esquiva: 3,
    bloqueo: 1,
    velocidad: 4,
    vida: 20,
    vidaMaxima: 20,
    poder: 54,
    poderMaximo: 54,

    arma1: "varita",
    arma2: "daga",

    equipo1: "nada",
    equipo2: "nada",
    equipo3: "nada",

    habilidad1: "boladehielo",
    habilidad2: "explosiondeescarcha",
    habilidad3: "confundir",
  },
  "paladin": {
    nombre: "paladin",
    portada: "img/paladin.png",
    icono: "",
    descripcion: "combatiente mixto, con buen daño cuerpo a cuerpo y control de habilidades mágicas.",

    ataque: 5,
    esquiva: 3,
    bloqueo: 4,
    velocidad: 3,
    vida: 30,
    vidaMaxima: 30,
    poder: 41,
    poderMaximo: 41,

    arma1: "hojaruna",
    arma2: "daga",

    equipo1: "nada",
    equipo2: "nada",
    equipo3: "nada",

    habilidad1: "sanar",
    habilidad2: "sentencia",
    habilidad3: "exorcismo",
  },
  "cazador": {
    nombre: "cazador",
    portada: "img/cazador.png",
    icono: "",
    descripcion: "combatiente de larga distancia, utiliza invocaciones a modo de mascotas.",

    ataque: 4,
    esquiva: 3,
    bloqueo: 1,
    velocidad: 5,
    vida: 20,
    vidaMaxima: 20,
    poder: 39,
    poderMaximo: 39,

    arma1: "arco",
    arma2: "daga",

    equipo1: "nada",
    equipo2: "nada",
    equipo3: "nada",

    habilidad1: "flechasmultiples",
    habilidad2: "flechaenergizada",
    habilidad3: "invocar",
  },
  "monje": {
    nombre: "monje",
    portada: "img/monje.png",
    icono: "",
    descripcion: "combatiente cuerpo a cuerpo con armas naturales, aumenta el daño utilizando mucha energía.",

    ataque: 4,
    esquiva: 4,
    bloqueo: 3,
    velocidad: 4,
    vida: 23,
    vidaMaxima: 23,
    poder: 39,
    poderMaximo: 39,

    arma1: "punno",
    arma2: "patada",

    equipo1: "nada",
    equipo2: "nada",
    equipo3: "nada",

    habilidad1: "ataquemultiple",
    habilidad2: "golpedechi",
    habilidad3: "desarmar",
  },
  "druida": {
    nombre: "druida",
    portada: "img/druida.png",
    icono: "",
    descripcion: "combatiente mágico con habilidades del Reino Vida, prefiere sanar antes que dañar.",

    ataque: 5,
    esquiva: 2,
    bloqueo: 5,
    velocidad: 3,
    vida: 25,
    vidaMaxima: 25,
    poder: 40,
    poderMaximo: 40,

    arma1: "baculo",
    arma2: "runa",

    equipo1: "nada",
    equipo2: "nada",
    equipo3: "nada",

    habilidad1: "enraizar",
    habilidad2: "envenenar",
    habilidad3: "sanar",
  },
}

// ? Objeto para almacenar información de los distintos equipamientos
// TODO: Revisar atributos de cada item
const equiposDict = {
  'nada': {
    nombre: "Nada",
    icono: "img/nada.png",
    descripcion: "Descripción de nada",
    nivel: 0,
    ataque: 0,
    esquiva: 0,
    bloqueo: 0,
    velocidad: 0,
    vidaMaxima: 0,
    poderMaximo: 0,
  },
  'armaduraLigera': {
    nombre: "Armadura Ligera",
    icono: "img/armaduraligera.png",
    descripcion: "Descripción de Armadura Ligera",
    nivel: 1,
    ataque: 1,
    esquiva: 1,
    bloqueo: 1,
    velocidad: 1,
    vidaMaxima: 1,
    poderMaximo: 1,
  },
  'armaduraMedia': {
    nombre: "Armadura Media",
    icono: "img/armaduramedia.png",
    descripcion: "Descripción de Armadura Media",
    nivel: 1,
    ataque: 1,
    esquiva: 1,
    bloqueo: 1,
    velocidad: 1,
    vidaMaxima: 1,
    poderMaximo: 1,
  },
  'armaduraPesada': {
    nombre: "Armadura Pesada",
    icono: "img/armadurapesada.png",
    descripcion: "Una resistente armadura que proporciona una gran protección.",
    nivel: 1,
    ataque: 0,
    esquiva: 1,
    bloqueo: 5,
    velocidad: 0,
    vidaMaxima: 20,
    poderMaximo: 0,
  },
  'anillo': {
    nombre: "Anillo",
    icono: "img/anillo.png",
    descripcion: "Descripción del Anillo",
    nivel: 1,
    ataque: 5,
    esquiva: 3,
    bloqueo: 2,
    velocidad: 4,
    vidaMaxima: 10,
    poderMaximo: 12,
  },
  'collar': {
    nombre: "Collar",
    icono: "img/collar.png",
    descripcion: "Descripción del Collar",
    nivel: 1,
    ataque: 3,
    esquiva: 5,
    bloqueo: 2,
    velocidad: 4,
    vidaMaxima: 8,
    poderMaximo: 15,
  },
  'brazal': {
    nombre: "Brazal",
    icono: "img/brazal.png",
    descripcion: "Descripción del Brazal",
    nivel: 1,
    ataque: 4,
    esquiva: 2,
    bloqueo: 4,
    velocidad: 3,
    vidaMaxima: 12,
    poderMaximo: 10,
  },
}

// ? Bandera que indica si el juego esta en modo edicion o no, valores posibles 0 o 1
var edicion = 0
// ? Bandera que indica si se esta editanto el personaje principal o el esbirro, valores posibles 'personaje' o 'esbirro'
var tipoEdicion = 'personaje'
// ? Indicador de experiencia general
var experiencia = 0
// ? Indica el arma seleccionada para ejecutar la función acción(), rango 1..2
var slotArmaSeleccionada = 1
// ? Indica el atributo seleccionado para ejecutar la función acción(), rango 1..6
var slotEstadisticaSeleccionada = 1
// ? Indica si selecciono un arma o un atributo para ejecutar la función acción(), valor "arma" || "estadistica"
var objetoAccion = "arma"
// ? Indica si los botones de izquierda y derecha de cambio de esbirro estan activados
var flagControlesCambioEsbirro = false
// ? Indica que ranura de equipamiento se esta editando, rango 1..3
var equipamientoSeleccionado = 1
// ? Guarda la estadistica que se esta modificando
var estadisticaSeleccionada
// ? Indica si se esta usando el personaje o un esbirro
var esPersonaje = true
// ? Contiene el costo de experiencia de cada atributo
const valorExperiencia = {
  ataque: 3,
  esquiva: 3,
  bloqueo: 3,
  velocidad: 6,
  vidaMaxima: 1,
  poderMaximo: 1
}


//!! //////////////////// COMIENZO BLOQUE DE PERSONAJE //!! ////////////////////
{ // * Variables personaje
  var personaje = {

    nombre: "BIENVENIDO",
    // meeple: "img/logo-meeple-combat.png",
    portada: "img/logo-meeple-combat.png",
    descripcion: "Descripcion personaje default",



    ataque: 0,
    esquiva: 0,
    bloqueo: 0,
    velocidad: 0,

    vida: 0,
    vidaMaxima: 0,

    poder: 0,
    poderMaximo: 0,

    // * nivel del equipamiento
    // equipo1: "",
    // equipo2: "",
    // equipo3: "",

    // * nombre de arma
    arma1: "Una Mano",
    arma2: "Dos Manos",

    // * nombre de habilidades
    habilidad1: "HABILIDAD 1",
    habilidad2: "HABILIDAD 2",
    habilidad3: "HABILIDAD 3",
  }

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

    nivel: 0,

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

    nivel: 0,

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

    nivel: 0,

    ataque: 0,
    esquiva: 0,
    bloqueo: 0,
    velocidad: 0,
    vidaMaxima: 0,
    poderMaximo: 0,

  }

  var habilidad1 = {
    nombre: "Nombre habilidad 1",
    coste: 0,
    descripcion: "Descripción de habilidad 1"
  }

  var habilidad2 = {
    nombre: "Nombre habilidad 2",
    coste: 0,
    descripcion: "Descripción de habilidad 2"
  }

  var habilidad3 = {
    nombre: "Nombre habilidad 3",
    coste: 0,
    descripcion: "Descripción de habilidad 3"
  }
}

/* 
    ? Refresca el texto y la imagen de los siguientes componentes:
        portada, nombre, estadisticas (ataque, esquiva, etc), equipamiento, arma slot 1, arma slot 2, habilidades
*/
function imprimirPersonaje() {
  let atributosPersonaje = {
    ataque: personaje.ataque,
    esquiva: personaje.esquiva,
    bloqueo: personaje.bloqueo,
    velocidad: personaje.velocidad,
    vidaMaxima: personaje.vidaMaxima,
    poderMaximo: personaje.poderMaximo
  }

  for (const key in atributosPersonaje) {
    if (equipo1[key]) atributosPersonaje[key] += equipo1[key]
    if (equipo2[key]) atributosPersonaje[key] += equipo2[key]
    if (equipo3[key]) atributosPersonaje[key] += equipo3[key]
  }

  portadaImg.src = personaje.portada
  // portadaImg.src = `img/${quitarEspacios(personaje.nombre)}.png`

  nombreTxt.textContent = personaje.nombre.toUpperCase()

  ataqueTxt.textContent = atributosPersonaje.ataque
  esquivaTxt.textContent = atributosPersonaje.esquiva
  bloqueoTxt.textContent = atributosPersonaje.bloqueo
  velocidadTxt.textContent = atributosPersonaje.velocidad

  vidaTxt.textContent = personaje.vida

  poderTxt.textContent = personaje.poder

  equipo1Txt.textContent = equipo1.nivel
  equipo2Txt.textContent = equipo2.nivel
  equipo3Txt.textContent = equipo3.nivel

  equipo1Img.src = equipo1.icono
  equipo2Img.src = equipo2.icono
  equipo3Img.src = equipo3.icono

  arma1Txt.textContent = capitalizarPrimeraLetra(arma1.nombre)
  arma2Txt.textContent = capitalizarPrimeraLetra(arma2.nombre)
  arma1Img.src = arma1.icono
  arma2Img.src = arma2.icono

  // habilidad1Txt.textContent = personaje.habilidad1
  // habilidad2Txt.textContent = personaje.habilidad2
  // habilidad3Txt.textContent = personaje.habilidad3
  habilidad1Txt.textContent = habilidad1.nombre.toUpperCase()
  habilidad2Txt.textContent = habilidad2.nombre.toUpperCase()
  habilidad3Txt.textContent = habilidad3.nombre.toUpperCase()

  experienciaTxt.textContent = experiencia
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
  }

  // ? Si esta en modo juego y el personaje es un esbirro muestra los botones para intercambiar entre esbirros
  if (!edicion && !esPersonaje && !flagControlesCambioEsbirro) {
    flagControlesCambioEsbirro = true
    mostrarControlesCambioEsbirro()

    ocultarBtnArrivaAbajo()
    consolaBtn.innerHTML = esbirroSeleccionado.descripcion
  } else if (!edicion && !esPersonaje && flagControlesCambioEsbirro) {
    flagControlesCambioEsbirro = false
    ocultarControlesCambioEsbirro()

    ocultarBtnArrivaAbajo()
    consolaBtn.innerHTML = esbirroSeleccionado.descripcion
  }

})

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

cerrarModalPersonaje.addEventListener('click', function () {
  cerrarModal("personajes")
})
cerrarModalArmas.addEventListener('click', function () {
  cerrarModal("armas")
})
cerrarModalEquipo.addEventListener('click', function () {
  cerrarModal("equipamiento")
})


arma1ImgBtn.addEventListener('click', function () {
  armas(personaje.arma1, 1)
  accionTxt.textContent = "ATACAR"
})
arma1TxtBtn.addEventListener('click', function () {
  armas(personaje.arma1, 1)
  accionTxt.textContent = "ATACAR"
})
arma2ImgBtn.addEventListener('click', function () {
  armas(personaje.arma2, 2)
  accionTxt.textContent = "ATACAR"
})
arma2TxtBtn.addEventListener('click', function () {
  armas(personaje.arma2, 2)
  accionTxt.textContent = "ATACAR"
})



/* 
    * @meeple: string
*/
// ? Funcion para cambio de personaje
function avatar(meeple) {
  if (!(meeple in personajesDict)) {
    console.error(`Personaje: ${meeple} no esta en personajesDict`)
    return
  }

  esPersonaje = true

  Object.assign(personaje, personajesDict[meeple])
  personaje.meeple = `img/${quitarEspacios(personaje.nombre)}.png`

  Object.assign(arma1, armasDict[personaje.arma1])

  Object.assign(arma2, armasDict[personaje.arma2])

  Object.assign(habilidad1, habilidadesDict[personaje.habilidad1])
  Object.assign(habilidad2, habilidadesDict[personaje.habilidad2])
  Object.assign(habilidad3, habilidadesDict[personaje.habilidad3])

  equipo1 = reiniciarEquipamiento(1)
  equipo2 = reiniciarEquipamiento(2)
  equipo3 = reiniciarEquipamiento(3)

  Object.assign(equipo1, equiposDict[personajesDict[meeple].equipo1])
  Object.assign(equipo2, equiposDict[personajesDict[meeple].equipo2])
  Object.assign(equipo3, equiposDict[personajesDict[meeple].equipo3])

  if (meeple === 'nuevopj') experiencia += 200

  imprimirPersonaje()
  cerrarModal("personajes")
  cerrarEdicion()
  contenConsola(personaje.descripcion)
}

// * EventListener de los personajes del modal personaje
// TODO: Agregar el nombre de los personajes restantes
[
  "barbaro", "guerrero", "paladin",
  "picaro", "monje", "cazador",
  "druida", "chaman", "mago",
  "paladinoscuro", "nigromante", "guardiarunico",
  "nuevopj"
].forEach(key => {
  const boton = document.getElementById(`${key}Btn`)
  boton.addEventListener('click', () => {
    if (esPersonaje) avatar(key)
    else if (!esPersonaje) cambiarEsbirro(key)
  })
})

/**
 * ? Funcion para mostrar el modal de equipamiento
 * @param {number} slot - numero de ranura en equipamiento seleccionada
 */
function equipo(slot) {
  equipamientoSeleccionado = slot
  if (edicion == 1) {

    modalEquipo.style.display = "grid"

  } else {
    if (slot === 1) {
      if (esPersonaje) contenConsola(`${equipo1.descripcion}`)
      else contenConsola(`${esbirroSeleccionado.equipo1.descripcion}`)
    }
    if (slot === 2) {
      if (esPersonaje) contenConsola(`${equipo2.descripcion}`)
      else contenConsola(`${esbirroSeleccionado.equipo2.descripcion}`)
    }
    if (slot === 3) {
      if (esPersonaje) contenConsola(`${equipo3.descripcion}`)
      else contenConsola(`${esbirroSeleccionado.equipo3.descripcion}`)
    }
  }
}

equipo1Btn.addEventListener('click', function () { equipo(1) })
equipo2Btn.addEventListener('click', function () { equipo(2) })
equipo3Btn.addEventListener('click', function () { equipo(3) })

function armas(armaSeleccionada, slot) {
  slotArmaSeleccionada = slot
  objetoAccion = "arma"
  if (edicion == 1) {

    modalArmas.style.display = "grid"

  } else {
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

{ // * Cambio en las estadisticas del personaje
  { // * Funciones para manipulación de la experiencia
    function mostrarInputExperiencia() {
      ocultarInputComandos()
      contenedorInputExperiencia.style.display = "flex"
      experienciaValor.autofocus = true
    }
    function ocultarInputExperiencia() {
      contenedorInputExperiencia.style.display = "none"
    }
    experienciaValor.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        establecerExperiencia(Number(experienciaValor.value))
        ocultarInputExperiencia()
      }
    })
    cerrarExperienciaInput.addEventListener("click", function () {
      establecerExperiencia(Number(experienciaValor.value))
      ocultarInputExperiencia()
    })

    function establecerExperiencia(valor) {
      if (!valor) valor = 0

      if (esPersonaje) {
        experiencia += valor
        imprimirPersonaje()
      } else {
        experiencia += valor
        mostrarEsbirroSeleccionado()
      }

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
        if (estadistica === 'vidaMaxima' || estadistica === 'poderMaximo') {
          valor = 1
        }
        else {
          valor =
            accion === "mas"
              ? (personaje[estadistica] === 0 ? 1 : personaje[estadistica] + 1) *
              valorExperiencia[estadistica]
              : personaje[estadistica] * valorExperiencia[estadistica]
        }
        // Incrementar o disminuir la experiencia del personaje
        experiencia += accion === "mas" ? valor : valor * -1
      } else {
        if (estadistica === 'vidaMaxima' || estadistica === 'poderMaximo') {
          valor = 1
        } else {
          // Calcular el valor de experiencia según la acción y estadística
          valor =
            accion === "mas"
              ? (esbirroSeleccionado[estadistica] === 0
                ? 1
                : esbirroSeleccionado[estadistica] + 1) *
              valorExperiencia[estadistica]
              : esbirroSeleccionado[estadistica] * valorExperiencia[estadistica]
        }
        // Incrementar o disminuir la experiencia del esbirro seleccionado
        experiencia += accion === "mas" ? valor : valor * -1
      }
    }

  }

  { // * eventListeners del boton de experiencia
    experienciaBtn.addEventListener('click', () => {
      if (edicion) {
        mostrarInputExperiencia()
      } else {
        ocultarBtnArrivaAbajo()
        if (esPersonaje) contenConsola(`Experiencia: ${experiencia}`)
        else contenConsola(`Experiencia: ${experiencia}`)
      }
    })
  }

  { // * Funciones para modificar las estadisticas de los personajes

    /**
     *  ? Muestra los botones de incremento y decremento SOLO EN MODO EDICIÓN, y modifica "estadisticaSeleccionada".
     * @param {string} atributo - El nombre del atributo a modificar.
     */
    function modificarEstadistica(atributo) {

      mostrarBtnArribaAbajo()

      estadisticaSeleccionada = atributo;

      let data;

      if (tipoEdicion === "personaje") {
        if (atributo === 'vidaMaxima') {
          // data = `Vida ${personaje['vida']} / ${personaje['vidaMaxima']}`
          data = `Vida maxima ${personaje['vidaMaxima']}`
        } else if (atributo === 'poderMaximo') {
          // data = `Poder ${personaje['poder']} / ${personaje['poderMaximo']}`
          data = `Poder maximo ${personaje['poderMaximo']}`
        } else data = `${capitalizarPrimeraLetra(atributo)} ${personaje[atributo]}`;
      } else {
        if (atributo === 'vidaMaxima') {
          // data = `Vida ${esbirroSeleccionado['vida']} / ${esbirroSeleccionado['vidaMaxima']}`
          data = `Vida maxima ${esbirroSeleccionado['vidaMaxima']}`
        } else if (atributo === 'poderMaximo') {
          // data = `Vida ${esbirroSeleccionado['poder']} / ${esbirroSeleccionado['poderMaximo']}`
          data = `Poder maximo ${esbirroSeleccionado['poderMaximo']}`
        } else data = `${capitalizarPrimeraLetra(atributo)} ${esbirroSeleccionado[atributo]}`;
      }

      consolaBtn.innerHTML = data
    }


    /* 
        * @accion: string
        * @estadistica: string
     */
    // ? modifica los valores dependiendo de la estadistica
    function modificarValores(accion, estadistica) {
      let data = ""

      // * componenetes
      let consola = consolaBtn

      // ? valor de experiencia minimo requerido
      let valor
      if (estadistica === 'vidaMaxima' || estadistica === 'poderMaximo') {
        valor = 1
      }
      else valor = (personaje[estadistica] + 1) * valorExperiencia[estadistica]

      if (accion === 'mas') {
        if (experiencia >= valor) {
          personaje[estadistica]++

          if (estadistica === 'vidaMaxima') {
            // data = `Vida ${personaje['vida']} / ${personaje['vidaMaxima']}`
            data = `Vida maxima ${personaje.vidaMaxima}`
          } else if (estadistica === 'poderMaximo') {
            // data = `Poder ${personaje['poder']} / ${personaje['poderMaximo']}`
            data = `Poder ${personaje.poderMaximo}`
          } else {
            data = `${capitalizarPrimeraLetra(estadistica)} ${personaje[estadistica]}`
          }

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

          // if (estadistica === "vidaMaxima" && personaje.vidaMaxima < personaje.vida) {
          //   personaje.vida = personaje.vidaMaxima
          // }

          // if (estadistica === "poderMaximo" && personaje.poderMaximo < personaje.poder) {
          //   personaje.poder = personaje.poderMaximo
          // }

          // * Incrementar exp
          aumentarDisminuirExperiencia('personaje', 'mas', estadistica)

          // * cambiar contenido mostrado
          if (estadistica === 'vidaMaxima') {
            // data = `Vida ${personaje['vida']} / ${personaje['vidaMaxima']}`
            personaje.vida--
            data = `Vida maxima ${personaje.vidaMaxima}`
          } else if (estadistica === 'poderMaximo') {
            // data = `Poder ${personaje['poder']} / ${personaje['poderMaximo']}`
            personaje.poder--
            data = `Poder ${personaje.poderMaximo}`
          } else {
            data = `${capitalizarPrimeraLetra(estadistica)} ${personaje[estadistica]}`
          }

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
      let vidaMaxima = personaje.vidaMaxima + equipo1.vidaMaxima + equipo2.vidaMaxima + equipo3.vidaMaxima
      let poderMaximo = personaje.poderMaximo + equipo1.poderMaximo + equipo2.poderMaximo + equipo3.poderMaximo

      if (estadisticaSeleccionada === "vida") {
        if (accion === "mas") { // ? Incremento de vida
          // if (personaje.vida < personaje.vidaMaxima) personaje.vida++
          if (personaje.vida < vidaMaxima) personaje.vida++
        } else { // ? Decremento de vida
          if (personaje.vida > 0) personaje.vida--
        }
        // contenConsola(`Vida ${personaje.vida} / ${personaje.vidaMaxima}`)
        // consolaBtn.innerHTML = `Vida ${personaje.vida} / ${personaje.vidaMaxima}`
        consolaBtn.innerHTML = `Vida ${personaje.vida} / ${vidaMaxima}`
      } else if (estadisticaSeleccionada === "poder") {
        if (accion === "mas") { // ? Incremento de poder
          // if (personaje.poder < personaje.poderMaximo) personaje.poder++
          if (personaje.poder < poderMaximo) personaje.poder++
        } else { // ? Decremento de poder
          if (personaje.poder > 0) personaje.poder--
        }
        // contenConsola(`Poder ${personaje.poder} / ${personaje.poderMaximo}`)
        // consolaBtn.innerHTML = `Poder ${personaje.poder} / ${personaje.poderMaximo}`
        consolaBtn.innerHTML = `Poder ${personaje.poder} / ${poderMaximo}`
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

      accionTxt.textContent = "ATACAR"
    })
    esquivaBtn.addEventListener('click', () => {
      if (edicion) {
        tipoEdicion = "personaje"
        modificarEstadistica('esquiva')
      }
      else if (esPersonaje) mostrarEstadistica('personaje', 'esquiva')

      accionTxt.textContent = "ESQUIVAR"
    })
    bloqueoBtn.addEventListener('click', () => {
      if (edicion) {
        tipoEdicion = "personaje"
        modificarEstadistica('bloqueo')
      }
      else if (esPersonaje) mostrarEstadistica('personaje', 'bloqueo')

      accionTxt.textContent = "BLOQUEAR"
    })
    velocidadBtn.addEventListener('click', () => {
      if (edicion) {
        tipoEdicion = "personaje"
        modificarEstadistica('velocidad')
      }
      else if (esPersonaje) mostrarEstadistica('personaje', 'velocidad')

      accionTxt.textContent = "CORRER"
    })

    vidaBtn.addEventListener('click', () => {
      if (edicion) {
        tipoEdicion = "personaje"
        modificarEstadistica('vidaMaxima')
      }
      else { // ? Muestra los boton de incremento y decremento
        mostrarBtnArribaAbajo()
        estadisticaSeleccionada = "vida"

        slotEstadisticaSeleccionada = 5
        objetoAccion = "estadistica"

        let vidaMaxima = personaje.vidaMaxima + equipo1.vidaMaxima + equipo2.vidaMaxima + equipo3.vidaMaxima
        consolaBtn.innerHTML = `Vida ${personaje.vida} / ${vidaMaxima}`

        accionTxt.textContent = "ACCION"
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

        slotEstadisticaSeleccionada = 6
        objetoAccion = "estadistica"

        let poderMaximo = personaje.poderMaximo + equipo1.poderMaximo + equipo2.poderMaximo + equipo3.poderMaximo
        consolaBtn.innerHTML = `Poder ${personaje.poder} / ${poderMaximo}`

        accionTxt.textContent = "ACCION"
      }
    })
  }

  { // * eventListeners de los botones arriba y abajo
    ['arriba', 'abajo'].forEach(key => {
      const boton = document.getElementById(`${key}Btn`)
      boton.addEventListener('click', () => {
        let accionBtn = key === 'arriba'
          ? 'mas'
          : 'menos'
        if (edicion) {
          if (tipoEdicion === "personaje") modificarValores(accionBtn, estadisticaSeleccionada)
          else modificarAtributosEsbirro(accionBtn, estadisticaSeleccionada)
        }
        else {
          if (tipoEdicion === "personaje") masMenosVidaPoder(accionBtn)
          else modificarVidaPoderActualEsbirro(accionBtn)
        }
        // console.log(accionBtn, edicion, tipoEdicion)
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
    var habilidadSeleccionada = {}
    /* 
        * @habilidad:  Obj
     */
    function cambiarHabilidad(nombre) {
      console.log(nombre)
      nombre = quitarAcentos(nombre).toLowerCase()
      // habilidadSeleccionada.nombre = nombre
      // habilidadSeleccionada = habilidadesDict[nombre]
      Object.assign(habilidadSeleccionada, habilidadesDict[nombre])

      cerrarEdicion()
      imprimirPersonaje()
    }
  }
  { // * eventListeners de habilidades
    habilidad1Btn.addEventListener('click', () => {
      // ? Personalizar habilidad
      if (edicion && esPersonaje) {
        // cambiarHabilidad(habilidad1)
        habilidadSeleccionada = habilidad1
        esIngresarComando = false
        mostrarInputComandos()
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
          cerrarEdicion()
        } else if (esPersonaje) {
          contenConsola(personaje.descripcion)
        }
      } else {
        if (edicion) {
          let val = prompt("Nuevo nombre")
          esbirroSeleccionado.nombre = val
          mostrarEsbirroSeleccionado()
          cerrarEdicion()
        } else if (!esPersonaje) {
          contenConsola(esbirroSeleccionado.descripcion)
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

      // switch (arma) {
      //   case 'daga':
      //     // cambiar objeto arma1 o arma2
      //     seleccion.nombre = "Daga"
      //     seleccion.icono = "img/daga.png"
      //     seleccion.danno = 1
      //     seleccion.descripcion = "Arma a una mano <br> 1 Acción / 100% de ataque como daño físico"

      //     break;
      //   case 'espada':
      //     seleccion.nombre = "Espada"
      //     seleccion.icono = "img/espada.png"
      //     seleccion.danno = 1.5
      //     seleccion.descripcion = "Arma a dos manos <br> 2 Acciones / 150% de ataque como daño físico"
      //     break;
      //   case 'arco':
      //     seleccion.nombre = "Arco"
      //     seleccion.icono = "img/arco.png"
      //     seleccion.danno = 1.75
      //     seleccion.descripcion = "Arma a distancia <br>  3 casilleros x ataque / 3 Acciones / 175% de ataque como daño físico"
      //     break;
      //   case 'arrojadiza':
      //     seleccion.nombre = "Arrojadiza"
      //     seleccion.icono = "img/arrojadiza.png"
      //     seleccion.danno = 0.75
      //     seleccion.descripcion = "Arma arrojadiza <br> 3 casillero x ataque / 2 Acciones / 75% de ataque como daño físico"
      //     break;
      //   case 'punno':
      //     seleccion.nombre = "Puños"
      //     seleccion.icono = "img/punno.png"
      //     seleccion.danno = 0.75
      //     seleccion.descripcion = "Arma natural <br> 1 Acción / 75% de ataque como daño físico"
      //     break;
      //   case 'escudo':
      //     seleccion.nombre = "Escudo"
      //     seleccion.icono = "img/escudo.png"
      //     seleccion.danno = 0.5
      //     seleccion.descripcion = "Escudo <br> Permite bloquear ataques fuera de turno / 1 Accion / 50% de ataque como daño físico"
      //     break;
      //   case 'magia':
      //     seleccion.nombre = "Mano"
      //     seleccion.icono = "img/magia.png"
      //     seleccion.danno = 1
      //     seleccion.descripcion = "Arma a una mano <br> 1 Acción / 100% de ataque como daño físico"
      //     break;
      //   case 'varita':
      //     seleccion.nombre = "Varita"
      //     seleccion.icono = "img/varita.png"
      //     seleccion.danno = 1
      //     seleccion.descripcion = "Arma a distancia <br>  3 casilleros x ataque / 1 Accion / 100% de ataque como daño mágico"
      //     break;
      //   case 'baculo':
      //     seleccion.nombre = "Baculo"
      //     seleccion.icono = "img/baculo.png"
      //     seleccion.danno = 1.5
      //     seleccion.descripcion = "Arma a distancia <br>  2 casilleros x ataque / 2 Acciones / 150% de ataque como daño mágico"
      //     break;
      //   case 'totem':
      //     seleccion.nombre = "Totem"
      //     seleccion.icono = "img/totem.png"
      //     seleccion.danno = 1
      //     seleccion.descripcion = "Arma a distancia <br>  2 casilleros x ataque / 2 Acciones / 100% de ataque como daño mágico"
      //     break;
      //   case 'runa':
      //     seleccion.nombre = "Runa"
      //     seleccion.icono = "img/runa.png"
      //     seleccion.danno = 0.75
      //     seleccion.descripcion = "Arma a distancia <br> 3 casilleros x ataque / 2 Acciones / 75% de ataque como daño mágico"
      //     break;
      //   case 'hojaruna':
      //     seleccion.nombre = "Hoja Runa"
      //     seleccion.icono = "img/hojaruna.png"
      //     seleccion.danno = 1
      //     seleccion.descripcion = "Arma mixta <br>  1 casilleros x ataque / 2 Acciones / 100% de ataque como daño fíisico o mágico"
      //     break;

      //   default:
      //     break;
      // }

      Object.assign(seleccion, armasDict[arma])

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
      if (esPersonaje) cambiarArma('espada')
      else cambiarArmaEsbirro('espada')
    })

    arcoBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('arco')
      else cambiarArmaEsbirro('arco')
    })

    arrojadizaBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('arrojadiza')
      else cambiarArmaEsbirro('arrojadiza')
    })

    punnoBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('punno')
      else cambiarArmaEsbirro('punno')
    })

    escudoBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('escudo')
      else cambiarArmaEsbirro('escudo')
    })

    magiaBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('magia')
      else cambiarArmaEsbirro('magia')
    })

    varitaBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('varita')
      else cambiarArmaEsbirro('varita')
    })

    baculoBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('baculo')
      else cambiarArmaEsbirro('baculo')
    })

    totemBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('totem')
      else cambiarArmaEsbirro('totem')
    })

    runaBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('runa')
      else cambiarArmaEsbirro('runa')
    })

    hojarunaBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('hojaruna')
      else cambiarArmaEsbirro('hojaruna')
    })
  }
}

{ // * Cambio de equipamiento
  { // * Funciones para cambiar el equipamiento
    function reiniciarEquipamiento(slot) {
      return {
        nombre: `Equipo ${slot}`,
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
    }

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

      personaje.vida -= equipo.vidaMaxima
      personaje.poder -= equipo.poderMaximo

      if (item in equiposDict) Object.assign(equipo, equiposDict[item])
      else console.error(`Personaje: ${item} no esta en equiposDict`)

      personaje.vida += equipo.vidaMaxima
      personaje.poder += equipo.poderMaximo

      imprimirPersonaje()
      cerrarEdicion()
      cerrarModal('equipamiento')
    }

  }
  { // * eventListeners de equipamiento
    armaduraligeraBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarEquipamiento('armaduraLigera')
      else cambiarEquipamientoEsbirro('armaduraLigera')
    })
    // TODO: Agregar los demas listeners para los items restantes
    armaduramediaBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarEquipamiento('armaduraMedia')
      else cambiarEquipamientoEsbirro('armaduraMedia')
    })
    armadurapesadaBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarEquipamiento('armaduraPesada')
      else cambiarEquipamientoEsbirro('armaduraPesada')
    })
    anilloBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarEquipamiento('anillo')
      else cambiarEquipamientoEsbirro('anillo')
    })
    collarBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarEquipamiento('collar')
      else cambiarEquipamientoEsbirro('collar')
    })
    brazalBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarEquipamiento('brazal')
      else cambiarEquipamientoEsbirro('brazal')
    })
  }
}

{ // * Cambio de personaje
  { // * Funciones para cambio de personajes
    // ! Revisar avatar()
  }

}

{ // * Accion Personaje

  { // * Funciones para tirada
    /* 
        * @slot: number
    */
    function accion(slot) {
      let ataque = personaje.ataque,
        esquiva = personaje.esquiva,
        bloqueo = personaje.bloqueo,
        velocidad = personaje.velocidad,
        vidaMaxima = personaje.vidaMaxima,
        poderMaximo = personaje.poderMaximo


      let dado = Math.ceil((Math.random() * 20) + 0)

      if (objetoAccion == "arma") {
        // ? Crea una referencia a arma1 o arma2 dependiendo del valor de slot
        let arma = slot == 1 ? arma1 : arma2

        // TODO: Completar el funcionamiento de tirada con arma
        if (dado == 20)
          contenConsola(`Ataque con ${arma.nombre}<br>¡CRITICO!<br>Daño base ${Math.floor(arma.danno * ataque * 2)}`)
        else if (dado == 1)
          contenConsola(`Ataque con ${arma.nombre}<br>¡PIFIA!<br>Daño base 0`)
        else
          contenConsola(`Ataque con ${arma.nombre}<br>${dado + ataque}<br>Daño base ${Math.floor(arma.danno * ataque)}`)
      } else {
        // ? Tirada con atributo
        switch (slot) {
          case 1: // * Ataque
            // TODO: Retocar el ataque limpio
            if (dado == 20)
              contenConsola(`Ataque limpio<br>¡CRITICO!<br>Daño base ${Math.floor(ataque * 2)}`)
            else if (dado == 1)
              contenConsola(`Ataque limpio<br>¡PIFIA!<br>Daño base 0`)
            else
              contenConsola(`Ataque limpio<br>${dado + ataque}<br>Daño base ${Math.floor(ataque)}`)
            break;
          case 2: // * Esquiva
            // TODO: Retocar esquiva
            if (dado == 20)
              contenConsola(`Esquiva<br>¡CRITICO!<br>${Math.floor(velocidad * 2)}`)
            else if (dado == 1)
              contenConsola(`Esquiva<br>¡PIFIA!`)
            else
              contenConsola(`Esquiva<br>${dado + esquiva}`)
            break;
          case 3: // * Bloquea
            // TODO: Retocar bloqueo
            if (dado == 20)
              contenConsola(`Bloquea<br>¡CRITICO!<br>${Math.floor(bloqueo * 2)}`)
            else if (dado == 1)
              contenConsola(`Bloquea<br>¡PIFIA!`)
            else
              contenConsola(`Bloquea<br>${dado + bloqueo}`)
            break;
          case 4: // * Huye
            // TODO: Retocar huye
            if (dado == 20)
              contenConsola(`Corre<br>¡CRITICO!<br>${Math.floor(velocidad * 2)}`)
            else if (dado == 1)
              contenConsola(`Corre<br>¡PIFIA!`)
            else
              contenConsola(`Corre<br>${dado + velocidad}`)
            break;
          case 5: // * Tirada limpia vida
          case 6: // * Tirada limpia poder
            // TODO: Retocar tirada limpia
            if (dado == 20)
              contenConsola(`Tirada limpia<br>¡CRITICO!<br>${dado}`)
            else if (dado == 1)
              contenConsola(`Tirada limpia<br>¡PIFIA!`)
            else
              contenConsola(`Tirada limpia<br>${dado}`)
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
//!! //////////////////// FIN BLOQUE DE PERSONAJE //!! ////////////////////


//!! //////////////////// COMIENZO BLOQUE DE MASCOTAS //!! ////////////////////
{ // * Variables esbirro
  /**
   * ? Clase que representa a un Esbirro.
   * Un Esbirro es una criatura con diversas propiedades y habilidades.
   */
  class Esbirro {
    /**
     * @param {Object} opciones - Objeto que contiene las propiedades del Esbirro.
     * @param {string} opciones.nombre - El nombre del Esbirro.
     * @param {string} opciones.portada - La URL de la imagen del Esbirro.
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
      portada = "img/nada.png",
      icono = "", // Sin Uso
      descripcion = "Selecciona editar y luego el ícono de esta criatura para invocar otra.",

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
      arma1 = { nombre: "wp 1", icono: "img/nada.png", danno: 0, descripcion: "dc wp 1" },
      arma2 = { nombre: "wp 2", icono: "img/nada.png", danno: 0, descripcion: "dc wp 2" },

      // Equipamiento de esbirro
      equipo1 = {
        nombre: "Nada",
        icono: "img/nada.png",
        descripcion: "Sin descripcion",
        nivel: 0,
        ataque: 0,
        esquiva: 0,
        bloqueo: 0,
        velocidad: 0,
        vidaMaxima: 0,
        poderMaximo: 0
      },
      equipo2 = {
        nombre: "Nada",
        icono: "img/nada.png",
        descripcion: "Sin descripcion",
        nivel: 0,
        ataque: 0,
        esquiva: 0,
        bloqueo: 0,
        velocidad: 0,
        vidaMaxima: 0,
        poderMaximo: 0
      },
      equipo3 = {
        nombre: "Nada",
        icono: "img/nada.png",
        descripcion: "Sin descripcion",
        nivel: 0,
        ataque: 0,
        esquiva: 0,
        bloqueo: 0,
        velocidad: 0,
        vidaMaxima: 0,
        poderMaximo: 0
      },

      // Habilidades de esbirro
      habilidad1 = { nombre: "sk 1", coste: 0, descripcion: "dc sk 1" },
      habilidad2 = { nombre: "sk 2", coste: 0, descripcion: "dc sk 2" },
      habilidad3 = { nombre: "sk 3", coste: 0, descripcion: "dc sk 3" },
    }) {
      // * Propiedades generales de esbirro
      this.nombre = nombre;
      this.portada = portada;
      this.icono = icono;
      this.descripcion = descripcion;

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
      this.equipo1 = equipo1
      this.equipo2 = equipo2
      this.equipo3 = equipo3

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
      console.log(props)
      Object.assign(this, props);
      this.configurarArma(1, this.arma1)
      this.configurarArma(2, this.arma2)

      this.configurarHabilidad(1, this.habilidad1)
      this.configurarHabilidad(2, this.habilidad2)
      this.configurarHabilidad(3, this.habilidad3)

      this.configurarEquipamiento(1, this.equipo1)
      this.configurarEquipamiento(2, this.equipo2)
      this.configurarEquipamiento(3, this.equipo3)
      // let nombre = this.nombre.toLowerCase()
      // if (nombre in equipPersonaje) {
      //   this.configurarEquipamiento(1, equipPersonaje[nombre][0])
      //   this.configurarEquipamiento(2, equipPersonaje[nombre][1])
      //   this.configurarEquipamiento(3, equipPersonaje[nombre][2])
      // } else console.error(`Esbirro: ${nombre} no esta en equipPersonaje`)
    }

    /**
     * ? Configura el arma en una ranura específica.
     * @param {number} ranura - El número de ranura del arma.
     * @param {string} nombre - El nombre del arma.
     */
    configurarArma(ranura, nombre) {
      if (nombre in armasDict) {
        if (!armasDict[nombre].icono) console.error(`Esbirro: Agregar propiedad icono de ${nombre} en armasDict`)
        this[`arma${ranura}`] = armasDict[nombre]
      }
      else
        this[`arma${ranura}`] = { nombre, descripcion: "Arma sin descripción" }
    }

    configurarEquipamiento(ranura, nombre) {
      if (nombre in equiposDict) {
        if (typeof this[`equipo${ranura}`] !== 'string') {
          this.vida -= this[`equipo${ranura}`].vidaMaxima
          this.poder -= this[`equipo${ranura}`].poderMaximo
        }

        this[`equipo${ranura}`] = equiposDict[nombre]

        this.vida += this[`equipo${ranura}`].vidaMaxima
        this.poder += this[`equipo${ranura}`].poderMaximo

      } else console.error(`Esbirro: ${nombre} no esta en equiposDict`)

    }

    /**
     * ? Configura la habilidad en una ranura específica.
     * @param {number} ranura - El número de ranura de la habilidad.
     * @param {string} nombre - El nombre de la habilidad.
     */
    configurarHabilidad(ranura, nombre) {
      this[`habilidad${ranura}`] = {}
      if (nombre in habilidadesDict) {
        // this[`habilidad${ranura}`] = { nombre, descripcion: habilidadesDict[nombre.toLowerCase()] }
        Object.assign(this[`habilidad${ranura}`], habilidadesDict[nombre])
      }
      else {
        Object.assign(this[`habilidad${ranura}`], { nombre, descripcion: "Habilidad sin descripción" })

        console.error(`Esbirro: Agregar habilidad ${nombre} a habilidadesDict`)
      }
    }
  }

  // ! Lista de esbirros !
  // Crea un array vacío para almacenar instancias de la clase Esbirro
  var esbirros = []

  // Crea cinco instancias de Esbirro y las agrega al array esbirros
  for (let i = 0; i < 5; i++) {
    esbirros.push(new Esbirro({ nombre: `Esbirro ${i + 1}` }))
  }

  // * El siguiente código se utiliza para actualizar la primera instancia de esbirro
  // * con la información del esbirro "lobo" de esbirrosDict. Esto es temporal y debe descartarse
  // * después de completar las pruebas necesarias.
  esbirros[0].actualizarPropiedades(esbirrosDict.lobo)
  esbirros[1].actualizarPropiedades(esbirrosDict.lobo)
  esbirros[2].actualizarPropiedades(esbirrosDict.lobo)
  esbirros[3].actualizarPropiedades(esbirrosDict.lobo)
  esbirros[4].actualizarPropiedades(esbirrosDict.lobo)
  // ! Lista de esbirros !

  // ? Contiene el esbirro que se esta mostrando
  var esbirroSeleccionado = esbirros[0]
}

// ? Elemento del botón para cambiar entre personaje y esbirros
esbirrosBtn.addEventListener('click', () => {
  if (esPersonaje) {
    // Si se estaba mostrando el personaje, cambia a mostrar el esbirro
    esPersonaje = false;

    tipoEdicion = 'esbirro'

    cerrarEdicion()
    ocultarInputExperiencia()
    ocultarInputComandos()

    // Llama a la función para mostrar la información del esbirro seleccionado
    mostrarEsbirroSeleccionado();

    contenConsola(esbirroSeleccionado.descripcion)

    mostrarControlesCambioEsbirro()

    esbirrosImg.src = "img/team.png"
  } else {
    // Si se estaba mostrando un esbirro, cambia a mostrar el personaje
    esPersonaje = true;

    tipoEdicion = 'personaje'

    cerrarEdicion()
    ocultarInputExperiencia()
    ocultarInputComandos()

    // Oculta los boton de izquierda y derecha
    ocultarControlesCambioEsbirro()
    flagControlesCambioEsbirro = false

    // Llama a la función para mostrar la información del personaje
    imprimirPersonaje()
    contenConsola(personaje.descripcion)

    esbirrosImg.src = "img/nada.png"
  }
})

/**
 * ? Muestra la información del esbirro seleccionado en la interfaz gráfica.
 */
function mostrarEsbirroSeleccionado() {
  let atributosEsbirroSeleccionado = {
    ataque: esbirroSeleccionado.ataque,
    esquiva: esbirroSeleccionado.esquiva,
    bloqueo: esbirroSeleccionado.bloqueo,
    velocidad: esbirroSeleccionado.velocidad,
    vidaMaxima: esbirroSeleccionado.vidaMaxima,
    poderMaximo: esbirroSeleccionado.poderMaximo
  }

  for (const key in atributosEsbirroSeleccionado) {
    if (esbirroSeleccionado.equipo1[key]) atributosEsbirroSeleccionado[key] += esbirroSeleccionado.equipo1[key]
    if (esbirroSeleccionado.equipo2[key]) atributosEsbirroSeleccionado[key] += esbirroSeleccionado.equipo2[key]
    if (esbirroSeleccionado.equipo3[key]) atributosEsbirroSeleccionado[key] += esbirroSeleccionado.equipo3[key]
  }

  nombreTxt.textContent = esbirroSeleccionado.nombre.toUpperCase()
  portadaImg.src = esbirroSeleccionado.portada
  experienciaTxt.textContent = experiencia

  ataqueTxt.textContent = atributosEsbirroSeleccionado.ataque
  // esquivaTxt.textContent = esbirroSeleccionado.esquiva + eq1.esquiva + eq2.esquiva + eq3.esquiva
  esquivaTxt.textContent = atributosEsbirroSeleccionado.esquiva
  // bloqueoTxt.textContent = esbirroSeleccionado.bloqueo + eq1.bloqueo + eq2.bloqueo + eq3.bloqueo
  bloqueoTxt.textContent = atributosEsbirroSeleccionado.bloqueo
  // velocidadTxt.textContent = esbirroSeleccionado.velocidad + eq1.velocidad + eq2.velocidad + eq3.velocidad
  velocidadTxt.textContent = atributosEsbirroSeleccionado.velocidad
  vidaTxt.textContent = esbirroSeleccionado.vida
  poderTxt.textContent = esbirroSeleccionado.poder

  equipo1Txt.textContent = esbirroSeleccionado.equipo1.nivel
  equipo2Txt.textContent = esbirroSeleccionado.equipo2.nivel
  equipo3Txt.textContent = esbirroSeleccionado.equipo3.nivel

  equipo1Img.src = esbirroSeleccionado.equipo1.icono
  equipo2Img.src = esbirroSeleccionado.equipo2.icono
  equipo3Img.src = esbirroSeleccionado.equipo3.icono

  arma1Txt.textContent = capitalizarPrimeraLetra(esbirroSeleccionado.arma1.nombre)
  arma1Img.src = esbirroSeleccionado.arma1.icono

  arma2Txt.textContent = capitalizarPrimeraLetra(esbirroSeleccionado.arma2.nombre)
  arma2Img.src = esbirroSeleccionado.arma2.icono

  habilidad1Txt.textContent = esbirroSeleccionado.habilidad1.nombre.toUpperCase()
  habilidad2Txt.textContent = esbirroSeleccionado.habilidad2.nombre.toUpperCase()
  habilidad3Txt.textContent = esbirroSeleccionado.habilidad3.nombre.toUpperCase()
}

{ // * Cambiar esbirro seleccionado
  /**
   * ? Función para cambiar el esbirro al de la izquierda o derecha
   */
  function cambiarEsbirro(nombre) {
    if (nombre in personajesDict) {
      esbirroSeleccionado.actualizarPropiedades(personajesDict[nombre])
    }
    if (nombre in esbirrosDict) esbirroSeleccionado.actualizarPropiedades(esbirrosDict[nombre])

    mostrarEsbirroSeleccionado()
    cerrarEdicion()
    cerrarModal('personajes')
  }
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
      let valor
      if (atributo === 'vidaMaxima' || atributo === 'poderMaximo') {
        valor = 1
      } else valor = (esbirroSeleccionado[atributo] + 1) * valorExperiencia[atributo]

      if (accion === 'mas') {
        if (experiencia >= valor) {
          // Incrementar el atributo
          esbirroSeleccionado[atributo]++

          if (atributo === 'vidaMaxima') {
            data = `Vida maxima ${esbirroSeleccionado['vidaMaxima']}`
          } else if (atributo === 'poderMaximo') {
            data = `Poder maximo ${esbirroSeleccionado['poderMaximo']}`
          } else {
            data = `${capitalizarPrimeraLetra(atributo)} ${esbirroSeleccionado[atributo]}`
          }

          // Decrementar experiencia
          aumentarDisminuirExperiencia("esbirroSeleccionado", 'menos', atributo)

          // Cambiar contenido mostrado en la consola
          consolaBtn.innerHTML = data
        } else {
          // contenConsola("Experiencia insuficiente")
          consolaBtn.innerHTML = "Experiencia insuficiente"
        }
      } else {
        if (esbirroSeleccionado[atributo] > 0) {
          // Decrementar el atributo
          esbirroSeleccionado[atributo]--

          // Incrementar experiencia
          aumentarDisminuirExperiencia('esbirroSeleccionado', 'mas', atributo)

          // Cambiar contenido mostrado en la consola
          if (atributo === 'vidaMaxima') {
            esbirroSeleccionado.vida--
            data = `Vida maxima ${esbirroSeleccionado['vidaMaxima']}`
          } else if (atributo === 'poderMaximo') {
            esbirroSeleccionado.poder--
            data = `Poder maximo ${esbirroSeleccionado['poderMaximo']}`
          } else {
            data = `${capitalizarPrimeraLetra(atributo)} ${esbirroSeleccionado[atributo]}`
          }

          consolaBtn.innerHTML = data
        }
      }
      // Actualizar la información del esbirro en la interfaz
      mostrarEsbirroSeleccionado()
    }

    function modificarVidaPoderActualEsbirro(accion) {
      let vidaMaxima = esbirroSeleccionado.vidaMaxima
      if (esbirroSeleccionado.equipo1.vidaMaxima) vidaMaxima += esbirroSeleccionado.equipo1.vidaMaxima
      if (esbirroSeleccionado.equipo2.vidaMaxima) vidaMaxima += esbirroSeleccionado.equipo2.vidaMaxima
      if (esbirroSeleccionado.equipo3.vidaMaxima) vidaMaxima += esbirroSeleccionado.equipo3.vidaMaxima

      let poderMaximo = esbirroSeleccionado.poderMaximo
      if (esbirroSeleccionado.equipo1.poderMaximo) poderMaximo += esbirroSeleccionado.equipo1.poderMaximo
      if (esbirroSeleccionado.equipo2.poderMaximo) poderMaximo += esbirroSeleccionado.equipo2.poderMaximo
      if (esbirroSeleccionado.equipo3.poderMaximo) poderMaximo += esbirroSeleccionado.equipo3.poderMaximo

      if (estadisticaSeleccionada === 'vida') {
        if (accion === "mas") { // ? Incremento de vida
          if (esbirroSeleccionado.vida < vidaMaxima) esbirroSeleccionado.vida++
        } else { // ? Decremento de vida
          if (esbirroSeleccionado.vida > 0) esbirroSeleccionado.vida--
        }

        consolaBtn.innerHTML = `Vida ${esbirroSeleccionado.vida} / ${vidaMaxima}`
      } else if (estadisticaSeleccionada === "poder") {
        if (accion === "mas") { // ? Incremento de poder
          if (esbirroSeleccionado.poder < poderMaximo) esbirroSeleccionado.poder++
        } else { // ? Decremento de poder
          if (esbirroSeleccionado.poder > 0) esbirroSeleccionado.poder--
        }

        consolaBtn.innerHTML = `Poder ${esbirroSeleccionado.poder} / ${poderMaximo}`
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

          slotEstadisticaSeleccionada = 5
          objetoAccion = "estadistica"

          // Mostrar información de la estadística de vida actual y máxima en la consola
          let vidaMaxima = esbirroSeleccionado.vidaMaxima
          if (esbirroSeleccionado.equipo1.vidaMaxima) vidaMaxima += esbirroSeleccionado.equipo1.vidaMaxima
          if (esbirroSeleccionado.equipo2.vidaMaxima) vidaMaxima += esbirroSeleccionado.equipo2.vidaMaxima
          if (esbirroSeleccionado.equipo3.vidaMaxima) vidaMaxima += esbirroSeleccionado.equipo3.vidaMaxima

          consolaBtn.innerHTML = `Vida ${esbirroSeleccionado.vida} / ${vidaMaxima}`
        }
      })

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

          slotEstadisticaSeleccionada = 6
          objetoAccion = "estadistica"

          // Mostrar información de la estadística de poder actual y máximo en la consola
          let poderMaximo = esbirroSeleccionado.poderMaximo
          if (esbirroSeleccionado.equipo1.poderMaximo) poderMaximo += esbirroSeleccionado.equipo1.poderMaximo
          if (esbirroSeleccionado.equipo2.poderMaximo) poderMaximo += esbirroSeleccionado.equipo2.poderMaximo
          if (esbirroSeleccionado.equipo3.poderMaximo) poderMaximo += esbirroSeleccionado.equipo3.poderMaximo

          consolaBtn.innerHTML = `Poder ${esbirroSeleccionado.poder} / ${poderMaximo}`
        }
      })
    }
  }
}

{ // * Modificación y descripción de habildades
  { // * Funciones
    function editarHabilidadEsbirro(nombre) {
      nombre = quitarAcentos(nombre).toLowerCase()
      // habilidadSeleccionada.nombre = nombre

      // habilidadSeleccionada.descripcion = habilidadesDict[nombre]
      Object.assign(habilidadSeleccionada, habilidadesDict[nombre])

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
        if (edicion && !esPersonaje) {
          esIngresarComando = false
          habilidadSeleccionada = esbirroSeleccionado[`habilidad${i}`]
          mostrarInputComandos()
        }
        else if (!esPersonaje) descripcionHabilidadEsbirro(i)
      })
    }
  }
}

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
}

{ // * Intercambio de esbirro
  { // * Funciones
    function mostrarControlesCambioEsbirro() {
      izquierdaBtn.style.display = "block"
      derechaBtn.style.display = "block"

      ocultarBtnArrivaAbajo()
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

      consolaBtn.innerHTML = esbirroSeleccionado.descripcion
    })
    derechaBtn.addEventListener('click', () => {
      i++
      if (i > esbirros.length - 1) i = 0
      esbirroSeleccionado = esbirros[i]
      mostrarEsbirroSeleccionado()

      consolaBtn.innerHTML = esbirroSeleccionado.descripcion
    })
  }
}

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
            contenConsola(`Corre<br>¡CRITICO!<br>${Math.floor(esbirroSeleccionado.velocidad * 2)}`)
          else if (dado == 1)
            contenConsola(`Corre<br>¡PIFIA!`)
          else
            contenConsola(`Corre<br>${dado + esbirroSeleccionado.esquiva}`)
          break;
        case 5:
        case 6: // * Tirada limpia
          // TODO: Retocar tirada limpia
          if (dado == 20)
            contenConsola(`Tirada limpia<br>¡CRITICO!<br>${dado}`)
          else if (dado == 1)
            contenConsola(`Tirada limpia<br>¡PIFIA!`)
          else
            contenConsola(`Tirada limpia<br>${dado}`)
          break;
        default:
          break;
      }
    }
  }
}

{ // * Equipamiento de esbirros
  { // * Funciones
    function cambiarEquipamientoEsbirro(item) {
      console.log(equipamientoSeleccionado, item)
      esbirroSeleccionado.configurarEquipamiento(equipamientoSeleccionado, item)
      mostrarEsbirroSeleccionado()
      cerrarModal('equipamiento')
      cerrarEdicion()
    }
  }
}
//!! //////////////////// FIN BLOQUE DE MASCOTAS //!! ////////////////////