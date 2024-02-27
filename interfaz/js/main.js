
document.body.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  return false;
});

//document.body.addEventListener('keydown', (e) => {
//  e.preventDefault();
//  return false;
//});

document.body.addEventListener('selectstart', (e) => {
  e.preventDefault();
  return false;
});

document.body.addEventListener('dragstart', (e) => {
  e.preventDefault();
  return false;
});

{ // * helpers, funciones varias
  /**
   * ? Cambia la portada del personaje o del esbirro seleccionado
   */
  function cambioImagen(event) {
    var input = event.target;

    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {

        if (esPersonaje) {
          personaje.portada = e.target.result
          guardarEstadoPersonaje()
          imprimirPersonaje()
        } else {
          esbirroSeleccionado.portada = e.target.result
          guardarEstadoListaEsbirros()
          mostrarEsbirroSeleccionado()
        }
      };

      // Read the selected image as a data URL
      reader.readAsDataURL(input.files[0]);
    }
  }

  function guardarEstadoMochila() {
    const mochilaString = JSON.stringify({ capital, itemMochila })

    localStorage.setItem('mochila', mochilaString)
  }

  function cargarEstadoMochila() {
    const mochilaString = localStorage.getItem('mochila')

    const mochilaData = JSON.parse(mochilaString)

    return mochilaData
  }

  /**
   * Guarda el estado de la lista de esbirros en el almacenamiento local.
   */
  function guardarEstadoListaEsbirros() {
    // Convierte la lista de esbirros a una cadena JSON.
    const esbirrosString = JSON.stringify(esbirros);

    // Almacena la cadena JSON en el almacenamiento local con la clave 'listaEsbirros'.
    localStorage.setItem('listaEsbirros', esbirrosString);
  }

  /**
 * Carga el estado previamente guardado de la lista de esbirros desde el almacenamiento local.
 * @returns {Array} - La lista de esbirros recuperada desde el almacenamiento local.
 */
  function cargarEstadoListaEsbirros() {
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
  function guardarEstadoPersonaje() {
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

    localStorage.setItem('exp', experiencia)
  }

  /**
   * Carga el estado previamente guardado del personaje desde el almacenamiento local.
   * @returns {Object} - El objeto del personaje recuperado desde el almacenamiento local.
   */
  function cargarEstadoPersonaje() {
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

    if(localStorage.getItem('exp')) experiencia = Number(localStorage.getItem('exp'))
    // Parsea la cadena JSON y devuelve el objeto del personaje.
    return output
  }


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
  function cerrarEdicion() {
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

    btnMasMenos.style.display = "none"
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
    btnMasMenos.style.display = "flex"
    ocultarControlesCambioEsbirro()
    flagControlesCambioEsbirro = false
  }

  // ? Oculta los botones de incremento y decremento
  function ocultarBtnArrivaAbajo() {
    btnMasMenos.style.display = "none"
    if (esPersonaje) guardarEstadoPersonaje()
    else guardarEstadoListaEsbirros()
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
  // ? Indica si el input se quiere usar para ingresar comandos, cambiar nombre de habilidades o nombre de personaje
  var tipoIngreso = "comando"

  function mostrarInputComandos() {
    ocultarInputExperiencia()
    contenedorInputComandos.style.display = "flex"

    let data = ""
    switch (tipoIngreso) {
      case "comando":
        data = "Ingrese comando"
        break
      case "habilidad":
        data = "Ingrese nombre de habilidad"
        break
      case "nombre":
        data = "Ingrese nombre"
        break
      case "mochila-item":
        data = "Ingrese nombre del item"
      default:
        break
    }

    inputLabelComandos.textContent = data
  }

  function ocultarInputComandos() {
    contenedorInputComandos.style.display = "none"
  }

  comandosValor.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      switch (tipoIngreso) {
        case "comando":
          ingresarComando(comandosValor.value)
          break
        case "nombre":
          if (esPersonaje) {
            personaje.nombre = comandosValor.value
            imprimirPersonaje()
          } else {
            esbirroSeleccionado.nombre = comandosValor.value
            mostrarEsbirroSeleccionado()
          }
          break
        case "habilidad":
          if (esPersonaje) {
            cambiarHabilidad(comandosValor.value)
          } else {
            editarHabilidadEsbirro(comandosValor.value)
          }
        case "mochila-item":
          cambiarItemMochila(comandosValor.value)
          actualizarMochila()
        default:
          break
      }
      ocultarInputComandos()
      cerrarEdicion()
    }
  })
  ingresarComandos.addEventListener("click", function () {
    switch (tipoIngreso) {
      case "comando":
        ingresarComando(comandosValor.value)
        break
      case "nombre":
        if (esPersonaje) {
          personaje.nombre = comandosValor.value
          imprimirPersonaje()
        } else {
          esbirroSeleccionado.nombre = comandosValor.value
          mostrarEsbirroSeleccionado()
        }
        break
      case "habilidad":
        if (esPersonaje) {
          cambiarHabilidad(comandosValor.value)
        } else {
          editarHabilidadEsbirro(comandosValor.value)
        }
      case "mochila-item":
        cambiarItemMochila(comandosValor.value)
        actualizarMochila()
      default:
        break
    }
    ocultarInputComandos()
    cerrarEdicion()
  })

  /**
   * Función que procesa un comando ingresado y realiza las acciones correspondientes.
   * @param {string} comando - El comando ingresado por el usuario.
   */
  function ingresarComando(comando) {
    comando = comando.toLowerCase()
    // ? Cambio de personaje con '/' + nombre

    if (comando === '/barbaro') {
      if (esPersonaje) { // ? Cambio de personaje principal
        avatar('barbaro')
      } else { // ? Cambio de esbirro
        cambiarEsbirro('barbaro')
      }
    }


    if (comando === '/guerrero') {
      if (esPersonaje) { // ? Cambio de personaje principal
        avatar('guerrero')
      } else { // ? Cambio de esbirro
        cambiarEsbirro('guerrero')
      }
    }


    if (comando === '/paladin') {
      if (esPersonaje) { // ? Cambio de personaje principal
        avatar('paladin')
      } else { // ? Cambio de esbirro
        cambiarEsbirro('paladin')
      }
    }

    if (comando === '/chaman') {
      if (esPersonaje) { // ? Cambio de personaje principal
        avatar('chaman')
      } else { // ? Cambio de esbirro
        cambiarEsbirro('chaman')
      }
    }

    if (comando === '/mago') {
      if (esPersonaje) { // ? Cambio de personaje principal
        avatar('mago')
      } else { // ? Cambio de esbirro
        cambiarEsbirro('mago')
      }
    }

    if (comando === '/druida') {
      if (esPersonaje) { // ? Cambio de personaje principal
        avatar('druida')
      } else { // ? Cambio de esbirro
        cambiarEsbirro('druida')
      }
    }


    if (comando === '/monje') {
      if (esPersonaje) { // ? Cambio de personaje principal
        avatar('monje')
      } else { // ? Cambio de esbirro
        cambiarEsbirro('monje')
      }
    }


    if (comando === '/picaro') {
      if (esPersonaje) { // ? Cambio de personaje principal
        avatar('picaro')
      } else { // ? Cambio de esbirro
        cambiarEsbirro('picaro')
      }
    }

    if (comando === '/cazador') {
      if (esPersonaje) { // ? Cambio de personaje principal
        avatar('cazador')
      } else { // ? Cambio de esbirro
        cambiarEsbirro('cazador')
      }
    }

    if (comando === '/nigromante') {
      if (esPersonaje) { // ? Cambio de personaje principal
        avatar('nigromante')
      } else { // ? Cambio de esbirro
        cambiarEsbirro('nigromante')
      }
    }

    if (comando === '/paladinoscuro') {
      if (esPersonaje) { // ? Cambio de personaje principal
        avatar('paladinoscuro')
      } else { // ? Cambio de esbirro
        cambiarEsbirro('paladinoscuro')
      }
    }

    if (comando === '/guardiarunico') {
      if (esPersonaje) { // ? Cambio de personaje principal
        avatar('guardiarunico')
      } else { // ? Cambio de esbirro
        cambiarEsbirro('guardiarunico')
      }
    }

    if (comando === '/cinirus') {
      if (esPersonaje) { // ? Cambio de personaje principal
        avatar('cinirus')
      } else { // ? Cambio de esbirro
        cambiarEsbirro('cinirus')
      }
    }

    if (comando === '/naigaran') {
      if (esPersonaje) { // ? Cambio de personaje principal
        avatar('naigaran')
      } else { // ? Cambio de esbirro
        cambiarEsbirro('naigaran')
      }
    }

    if (comando === '/terronte') {
      if (esPersonaje) { // ? Cambio de personaje principal
        avatar('terronte')
      } else { // ? Cambio de esbirro
        cambiarEsbirro('terronte')
      }
    }

    if (comando === '/tortakla') {
      if (esPersonaje) { // ? Cambio de personaje principal
        avatar('tortakla')
      } else { // ? Cambio de esbirro
        cambiarEsbirro('tortakla')
      }
    }

    if (comando === '/kardanto') {
      if (esPersonaje) { // ? Cambio de personaje principal
        avatar('kardanto')
      } else { // ? Cambio de esbirro
        cambiarEsbirro('kardanto')
      }
    }

    if (comando === '/ghalidos') {
      if (esPersonaje) { // ? Cambio de personaje principal
        avatar('ghalidos')
      } else { // ? Cambio de esbirro
        cambiarEsbirro('ghalidos')
      }
    }

    if (comando === '/sarcomos') {
      if (esPersonaje) { // ? Cambio de personaje principal
        avatar('sarcomos')
      } else { // ? Cambio de esbirro
        cambiarEsbirro('sarcomos')
      }
    }

    if (comando === '/raizor') {
      if (esPersonaje) { // ? Cambio de personaje principal
        avatar('raizor')
      } else { // ? Cambio de esbirro
        cambiarEsbirro('raizor')
      }
    }

    if (comando === '/momontu') {
      if (esPersonaje) { // ? Cambio de personaje principal
        avatar('momontu')
      } else { // ? Cambio de esbirro
        cambiarEsbirro('momontu')
      }
    }

    if (comando === '/lobo') {
      if (esPersonaje) { // ? Cambio de personaje principal
        avatar('lobo')
      } else { // ? Cambio de esbirro
        cambiarEsbirro('lobo')
      }
    }


    if (comando === '/raptor') {
      if (esPersonaje) { // ? Cambio de personaje principal
        avatar('raptor')
      } else { // ? Cambio de esbirro
        cambiarEsbirro('raptor')
      }
    }

    if (comando === '/esqueleto') {
      if (esPersonaje) { // ? Cambio de personaje principal
        avatar('esqueleto')
      } else { // ? Cambio de esbirro
        cambiarEsbirro('esqueleto')
      }
    }





    if (comando === '/full') {
      if (esPersonaje) {
        personaje.vida = personaje.vidaMaxima
        personaje.poder = personaje.poderMaximo
        contenConsola("VIDA Y PODER REESTABLECIDOS")

        imprimirPersonaje()
      } else {
        esbirroSeleccionado.vida = esbirroSeleccionado.vidaMaxima
        esbirroSeleccionado.poder = esbirroSeleccionado.poderMaximo

        mostrarEsbirroSeleccionado()
      }
    }

    if (comando === '/reload') {
      localStorage.clear()
      arma1 = armasDict.nada
      arma2 = armasDict.nada

      equipo1 = equiposDict.nada
      equipo2 = equiposDict.nada
      equipo3 = equiposDict.nada

      habilidad1 = habilidadesDict['habilidad 1']
      habilidad2 = habilidadesDict['habilidad 2']
      habilidad3 = habilidadesDict['habilidad 3']

      avatar('bienvenida')

      for (let i = 0; i < esbirros.length; i++) {
        console.log(i)
        console.log(esbirros[i])
        esbirros[i].actualizarPropiedades(esbirrosDict[`esbirro${i + 1}`])
      }



      if (esPersonaje) imprimirPersonaje()
      else mostrarEsbirroSeleccionado()

      window.location.reload()
    }

    if (comando === '/reencarnar') {
      console.log(esPersonaje)
      if (esPersonaje) {
        let index = Math.floor(Math.random() * listaPersonajes.length)
        let nombre = listaPersonajes[index]

        avatar(nombre)
      } else {
        let index = Math.floor(Math.random() * listaEsbirros.length)
        let nombre = listaEsbirros[index]

        cambiarEsbirro(nombre)
      }
    }

    if (comando === '.imagen') {
      cambioImagenBtn.click()
    }

    if (comando === '.loot') {
      const lista = ['Armadura Ligera', 'daga', 'anillo', 'espada', 'escudo', 'varita', 'baculo', 'pergamino']
      const index = Math.floor(Math.random() * lista.length)

      const elemento = lista[index]



      contenConsola("Loot = " + elemento)
    }

    if (comando === '/licantropo') {
      if (esPersonaje) {
        cambiarArma('mordisco', 1)
        cambiarArma('garras', 2)
      } else {
        slotArmaSeleccionada = 1
        cambiarArmaEsbirro('mordisco')
        slotArmaSeleccionada = 2
        cambiarArmaEsbirro('garras')
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
    descripcion: "Avanza hacia el objetivo y lo ataca en una acción combinada (solo ataques cuerpo a cuepro) / distancia máx(velocidad x 2) <br> Poder min(3) / Acciones(Arma)"
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
    descripcion: "Cambia el tipo de daño elemental que produce tu flecha <br> Poder(6) / Requiere arco"
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
    descripcion: "Puedes tener garras y colmillos como armas naturales durante 3 turnos (puedes usar el comando /licantropo) <br> Poderr(3)<br>"
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
    descripcion: "Transfiere vida o energía del objetivo al conjurador, puedes apostar una de estos para aumentar el efecto, el cual se consumirá aún si fallas el ataque <br> Poder min(0)"
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
    descripcion: "Vuelve roca al objetivo indefinidamente<br> Poder(vida actual del objetivo +)"
  },
  "disparo en movimiento": {
    nombre: "disparo en movimiento",
    coste: 1,
    descripcion: "Habilida pasiva que permite disparar con cualquier arma a distancia mientras se esta en movimiento, combinando ambas acciones. La velocidad de movimiento no puede superar tu velocidad por acción.<br> Consume solo las acciones de ataque(arma)."
  },
  "reanimar": {
    nombre: "reanimar",
    coste: 1,
    descripcion: "Levanta un cadaver con atributos de zombie básico, durante 6 turnos para que te ayude<br> Poder(10)."
  },
  "resucitar": {
    nombre: "resucitar",
    coste: 1,
    descripcion: "Devuelve el objetivo a la vida.<br> Poder(vida máxima del objetivo)."
  },
  "reencarnar": {
    nombre: "reencarnar",
    coste: 1,
    descripcion: "Vuelve a la vida a un objetivo o a ti mismo, pero en un personaje o criatura al azar (puedes usar el comando /reencarnar), debes estar vivo aun para lanzarlo.<br> Poder(el nuevo personaje pierde todo su poder inicial)."
  },
  "karma": {
    nombre: "karma",
    coste: 1,
    descripcion: "El proximo daño que haga el objetivo, ya sea a ti o cualquiera, se le aplicara a el también.<br> Poder(9)."
  },
  "esfera de luz": {
    nombre: "esfera de luz",
    coste: 1,
    descripcion: "Una poderosa luz que puedes dirigir por todas partes, iluminando a una ditancia de 9 casilleros, durante 3 turnos.<br> Poder(6)."
  },
  "dagas etereas": {
    nombre: "dagas etereas",
    coste: 1,
    descripcion: "Materializa dos dagas gemelas durante 3 turnos.<br> Poder(6)."
  },
  "provocar": {
    nombre: "provocar",
    coste: 1,
    descripcion: "Provoca al objetivo para que te ataque y le restas 3 puntos a su primer ataque contra ti, impidiendo que puede hacerte daño círitico.<br> Poder(6)."
  },
  "combo marcial": {
    nombre: "combo marcial",
    coste: 1,
    descripcion: "Ataca con un combo de un dos puñetazos y una patada final, en solo 2 acciones, generando todo el daño al final de la habilidad.<br> Poder(6)."
  },
  "golpe bajo": {
    nombre: "golpe bajo",
    coste: 1,
    descripcion: "Daña e inhabilita al objetivo, quitandole 2 acciones de su proximo turno.<br> Poder(6)."
  }
}

// ? Objeto para almacenar información de las armas
// TODO: Agregar las demas armas / tipo: mecanomagica para consumir poder automaticamente.
const armasDict = {
  "nada": {
    nombre: "nada",
    icono: "img/nada.png",
    danno: 0,
    coste: 0,
    tipo: "",
    descripcion: "Arma sin descripción"
  },
  "punno": {
    nombre: "puño",
    icono: "img/punno.png",
    danno: 0.75,
    coste: 1,
    tipo: "",
    descripcion: "Arma natural <br> 1 Acción / 75% de ataque como daño físico"
  },
  "patada": {
    nombre: "patada",
    icono: "img/patada.png",
    danno: 1,
    coste: 1,
    tipo: "",
    descripcion: "Arma natural <br> 2 Acciones / 100% de ataque como daño físico"
  },
  "daga": {
    nombre: "daga",
    icono: "img/daga.png",
    danno: 1,
    coste: 1,
    tipo: "",
    descripcion: "Arma a una mano <br> 1 Acción / 100% de ataque como daño físico"
  },
  "espada": {
    nombre: "espada",
    icono: "img/espada.png",
    danno: 1.5,
    coste: 1,
    tipo: "",
    descripcion: "Arma a dos manos <br> 2 Acciones / 150% de ataque como daño físico"
  },
  "arco": {
    nombre: "arco",
    icono: "img/arco.png",
    danno: 1.75,
    coste: 1,
    tipo: "",
    descripcion: "Arma a distancia <br> 3 casilleros x ataque / 3 Acciones / 175% de ataque como daño físico"
  },
  "arrojadiza": {
    nombre: "arrojadiza",
    icono: "img/arrojadiza.png",
    danno: 0.75,
    coste: 1,
    tipo: "",
    descripcion: "Arma arrojadiza <br> 3 casillero x ataque / 2 Acciones / 75% de ataque como daño físico"
  },
  "escudo": {
    nombre: "escudo",
    icono: "img/escudo.png",
    danno: 0.5,
    coste: 1,
    tipo: "",
    descripcion: "Escudo <br> Permite bloquear ataques fuera de turno / 1 Accion / 50% de ataque como daño físico"
  },
  "magia": {
    nombre: "palma",
    icono: "img/magia.png",
    danno: 1,
    coste: 1,
    tipo: "",
    descripcion: "Arma a distancia <br> 1 casillero x ataque / 1 Acción / 100% de ataque como daño mágico"
  },
  "varita": {
    nombre: "varita",
    icono: "img/varita.png",
    danno: 1,
    coste: 1,
    tipo: "",
    descripcion: "Arma a distancia <br> 3 casilleros x ataque / 1 Accion / 100% de ataque como daño mágico"
  },
  "baculo": {
    nombre: "baculo",
    icono: "img/baculo.png",
    danno: 1.5,
    coste: 1,
    tipo: "",
    descripcion: "Arma a distancia <br> 2 casilleros x ataque / 2 Acciones / 150% de ataque como daño mágico"
  },
  "runa": {
    nombre: "runa",
    icono: "img/runa.png",
    danno: 0.75,
    coste: 1,
    tipo: "",
    descripcion: "Arma a distancia <br> 3 casilleros x ataque / 2 Acciones / 75% de ataque como daño mágico"
  },
  "totem": {
    nombre: "totem",
    icono: "img/totem.png",
    danno: 1,
    coste: 1,
    tipo: "",
    descripcion: "Arma a distancia <br> 2 casilleros x ataque / 2 Acciones / 100% de ataque como daño mágico"
  },
  "hojaruna": {
    nombre: "hoja runa",
    icono: "img/hojaruna.png",
    danno: 1,
    coste: 1,
    tipo: "",
    descripcion: "Arma mixta <br> 1 casillero x ataque / 2 Acciones / 100% de ataque como daño físico o mágico"
  },
  "mordisco": {
    nombre: "mordisco",
    icono: "img/mordisco.png",
    danno: 1.5,
    coste: 1,
    tipo: "",
    descripcion: "Mordisco <br> / 2 Acciones / 150% de ataque como daño físico"
  },
  "garras": {
    nombre: "garras",
    icono: "img/garras.png",
    danno: 1,
    coste: 1,
    tipo: "",
    descripcion: "Garras <br> / 1 Accion / 100% de ataque como daño físico"
  },
  "aliento": {
    nombre: "aliento",
    icono: "img/aliento.png",
    danno: 2.5,
    coste: 1,
    tipo: "",
    descripcion: "ALIENTO <br> Arma a distancia / 3 Acciones <br> 250% de ataque como daño mágico <br> Disperción máxima 1 casillero x punto de ataque"
  },
  "pinzas": {
    nombre: "pinzas",
    icono: "img/pinzas.png",
    danno: 1.75,
    coste: 1,
    tipo: "",
    descripcion: "PINZAS <br> Arma cuerpo a cuerpo / 2 Acciones <br> 175% de ataque como daño físico"
  },
  "mente": {
    nombre: "mente",
    icono: "img/mente.png",
    danno: 1,
    coste: 1,
    tipo: "",
    descripcion: "MENTE <br> Arma a distancia / 2 Acciones <br> 100% de ataque como daño mágico. <br> Distancia máxima 2 casillero x punto de ataque"
  },
  "ramas": {
    nombre: "ramas",
    icono: "img/ramas.png",
    danno: 1.25,
    coste: 1,
    tipo: "",
    descripcion: "RAMAS <br> Arma cuerpo a cuerpo / 2 Acciones <br> 125% de ataque como daño físico"
  },
  "hojas": {
    nombre: "hojas",
    icono: "img/hojas.png",
    danno: 1.25,
    coste: 1,
    tipo: "",
    descripcion: "HOJAS <br> Arma mixta / 2 Acciones <br> 125% de ataque como daño físico o mágico. <br> Distancia máxima 2 casillero x punto de ataque "
  },
  "esporas": {
    nombre: "esporas",
    icono: "img/esporas.png",
    danno: 1.75,
    coste: 1,
    tipo: "",
    descripcion: "ESPORAS <br> Arma a distancia / 2 Acciones <br> 175% de ataque como daño mágico. <br> Distancia máxima 1 casillero x punto de ataque"
  },
  "alas": {
    nombre: "alas",
    icono: "img/alas.png",
    danno: 2,
    coste: 1,
    tipo: "",
    descripcion: "ALAS <br> Arma a distancia / 3 Acciones <br> 200% de ataque como daño mágico. <br> Distancia máxima de 2 casillero x punto de ataque"
  },
  "mirada": {
    nombre: "mirada",
    icono: "img/mirada.png",
    danno: 1.5,
    coste: 1,
    tipo: "",
    descripcion: "MIRADA <br> Arma a distancia / 2 Acciones <br> 150% de ataque como daño mágico. <br> Distancia máxima de 1 casilleros x punto de ataque"
  },
  "cuernos": {
    nombre: "cuernos",
    icono: "img/cuernos.png",
    danno: 2.5,
    coste: 1,
    tipo: "",
    descripcion: "CUERNOS <br> Arma mixta / 3 Acciones <br> 250% de ataque como daño físco o mágico. <br> Distancia máxima de hechizos 1 casillero x punto de ataque"
  },
  "cascos": {
    nombre: "cascos",
    icono: "img/cascos.png",
    danno: 1.25,
    coste: 1,
    tipo: "",
    descripcion: "CASCOS <br> Arma cuerpo a cuerpo / 2 Acciones <br> 125% de ataque como daño físico"
  },
  "tentaculos": {
    nombre: "tentaculos",
    icono: "img/tentaculos.png",
    danno: 1.25,
    coste: 1,
    tipo: "",
    descripcion: "TENTACULOS <br> Arma mixta cuerpo a cuerpo / 2 Acciones <br> 125% de ataque como daño mágico o físico"
  },
  "cola": {
    nombre: "cola",
    icono: "img/cola.png",
    danno: 1.25,
    coste: 1,
    tipo: "",
    descripcion: "COLA <br> Arma mixta cuerpo a cuerpo / 2 Acciones <br> 125% de ataque como daño mágico o físico"
  },
  "pico": {
    nombre: "pico",
    icono: "img/pico.png",
    danno: 1.25,
    coste: 1,
    tipo: "",
    descripcion: "PICO <br> Arma cuerpo a cuerpo / 2 Acciones <br> 125% de ataque como daño físico"
  },
  "espinas": {
    nombre: "espinas",
    icono: "img/espinas.png",
    danno: 0.75,
    coste: 1,
    tipo: "",
    descripcion: "ESPINAS <br> Arma mixta cuerpo a cuerpo / 1 Acciones <br> 75% de ataque como daño mágico o físico"
  },
  "lengua": {
    nombre: "lengua",
    icono: "img/lengua.png",
    danno: 1.5,
    coste: 1,
    tipo: "",
    descripcion: "LENGUA <br> Arma mixta cuerpo a cuerpo / 2 Acciones <br> 150% de ataque como daño mágico o físico"
  },
  "aguijon": {
    nombre: "aguijon",
    icono: "img/aguijon.png",
    danno: 2.75,
    coste: 1,
    tipo: "",
    descripcion: "AGUIJON <br> Arma mixta cuerpo a cuerpo / 3 Acciones <br> 275% de ataque como daño mágico o físico"
  },
  "aleta": {
    nombre: "aleta",
    icono: "img/aleta.png",
    danno: 2,
    coste: 1,
    tipo: "",
    descripcion: "ALETA <br> Arma mixta cuerpo a cuerpo / 2 Acciones <br> 200% de ataque como daño mágico o físico"
  },
  "antenas": {
    nombre: "antenas",
    icono: "img/antenas.png",
    danno: 1.25,
    coste: 1,
    tipo: "",
    descripcion: "ANTENAS <br> Arma a distancia / 2 Acciones <br> 125% de ataque como daño mágico o físico <br> distancia máxima 1 casillero x punto de ataque"
  }
  ,
  "glandula": {
    nombre: "glandula",
    icono: "img/glandula.png",
    danno: 1.25,
    coste: 1,
    tipo: "",
    descripcion: "GLANDULA <br> Arma mixta cuerpo a cuerpo / 2 Acciones <br> 125% de ataque como daño mágico o físico"
  },
  "raices": {
    nombre: "raices",
    icono: "img/raices.png",
    danno: 1.25,
    coste: 1,
    tipo: "",
    descripcion: "RAICES <br> Arma mixta cuerpo a cuerpo / 2 Acciones <br> 125% de ataque como daño mágico o físico"
  },
  "flores": {
    nombre: "flores",
    icono: "img/flores.png",
    danno: 1.25,
    coste: 1,
    tipo: "",
    descripcion: "FLORES <br> Arma mixta / 2 Acciones <br> 125% de ataque como daño mágico o físico <br> distancia máxima 1 casillero x punto de ataque"
  },
  "frutos": {
    nombre: "frutos",
    icono: "img/frutos.png",
    danno: 1.75,
    coste: 1,
    tipo: "",
    descripcion: "FRUTOS <br> Arma mixta cuerpo a cuerpo / 2 Acciones <br> 175% de ataque como daño mágico o físico <br> distancia máxima 1 casillero x punto de ataque"
  }
}
const listaArmas = Object.keys(armasDict)

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
  "esbirro1": {
    nombre: "Esbirro 1",
    portada: "img/e1.png",
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
  "esbirro2": {
    nombre: "Esbirro 2",
    portada: "img/e2.png",
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
  "esbirro3": {
    nombre: "Esbirro 3",
    portada: "img/e3.png",
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
  "esbirro4": {
    nombre: "Esbirro 4",
    portada: "img/e4.png",
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
  "esbirro5": {
    nombre: "Esbirro 5",
    portada: "img/e5.png",
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
    arma1: "hojas",
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
    arma1: "magia",
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
const listaEsbirros = Object.keys(esbirrosDict).filter(name => {
  if (["esbirro1", "esbirro2", "esbirro3", "esbirro4", "esbirro5"].indexOf(name) === -1) {
    return true
  } else return false
})

// ? Objeto para almecenar información de los esbirros
// TODO: Agregar los demas personajes
const personajesDict = {

  "bienvenida": {
    nombre: "BEINVENIDO",
    portada: "img/logo-meeple-combat.png",
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
  "nuevoesbirro": {
    nombre: "nuevo",
    portada: "img/nuevoesbirro.png",
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

    equipo1: "nada",
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

    arma1: "magia",
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

    equipo1: "nada",
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

    habilidad1: "bola de hielo",
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
    arma2: "magia",

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

    habilidad1: "flechas multiples",
    habilidad2: "flecha energizada",
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

    habilidad1: "ataque multiple",
    habilidad2: "golpe de chi",
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



  "nigromante": {
    nombre: "nigromante",
    portada: "img/nigromante.png",
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

  "paladinoscuro": {
    nombre: "paladin oscuro",
    portada: "img/paladinoscuro.png",
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

    arma1: "hojaruna",
    arma2: "magia",

    equipo1: "nada",
    equipo2: "nada",
    equipo3: "nada",

    habilidad1: "enraizar",
    habilidad2: "envenenar",
    habilidad3: "sanar",
  },

  "guardiarunico": {
    nombre: "guardia runico",
    portada: "img/guardiarunico.png",
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

    arma1: "hojaruna",
    arma2: "escudo",

    equipo1: "nada",
    equipo2: "nada",
    equipo3: "nada",

    habilidad1: "embestida con escudo",
    habilidad2: "enraizar",
    habilidad3: "sanar",
  },



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
    arma1: "hojas",
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
    arma1: "magia",
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
  },
  "raptor": {
    nombre: "raptor",
    portada: "img/raptor.png",
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
    arma2: "mordisco",
    habilidad1: "desgarro",
    habilidad2: "triturar",
    habilidad3: "ira ciega",
    descripcion: "RAPTOR <br> Criatura de sangre <br> Coste de invocación: 20",
    equipo1: "nada",
    equipo2: "nada",
    equipo3: "nada"
  }

}
const listaPersonajes = Object.keys(personajesDict).filter(name => {
  if (
    name !== 'bienvenida'
    && name !== 'nuevopj'
    && name !== 'nuevoesbirro'
  ) {
    return true
  } else return false
})

// ? Objeto para almacenar información de los distintos equipamientos
// TODO: Revisar atributos de cada item
const equiposDict = {
  'nada': {
    nombre: "Nada",
    icono: "img/nada.png",
    descripcion: "",
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
    descripcion: "Armadura ligera <br> +1 al bloqueo / +10 a la vida máxima",
    nivel: 1,
    ataque: 0,
    esquiva: 0,
    bloqueo: 1,
    velocidad: 0,
    vidaMaxima: 10,
    poderMaximo: 0,
  },
  'armaduraMedia': {
    nombre: "Armadura Media",
    icono: "img/armaduramedia.png",
    descripcion: "Armadura Media <br> +2 al bloqueo / +15 de vida máxima <br> -1 a esquiva y velocidad",
    nivel: 1,
    ataque: 0,
    esquiva: -1,
    bloqueo: 2,
    velocidad: -1,
    vidaMaxima: 15,
    poderMaximo: 0,
  },
  'armaduraPesada': {
    nombre: "Armadura Pesada",
    icono: "img/armadurapesada.png",
    descripcion: "Armadura Pesada <br> +3 de bloqueo / +20 de vida máxima <br> -1 al ataque / -2 a esquiva y velocidad.",
    nivel: 1,
    ataque: -1,
    esquiva: -2,
    bloqueo: 3,
    velocidad: -2,
    vidaMaxima: 20,
    poderMaximo: 0,
  },
  'anillo': {
    nombre: "Anillo",
    icono: "img/anillo.png",
    descripcion: "Anillo <br> +3 al ataque <br> -10 de poder máximo",
    nivel: 1,
    ataque: 3,
    esquiva: 0,
    bloqueo: 0,
    velocidad: 0,
    vidaMaxima: 0,
    poderMaximo: -10,
  },
  'collar': {
    nombre: "Collar",
    icono: "img/collar.png",
    descripcion: "Collar <br> +3 a la esquiva <br> -10 de poder máximo",
    nivel: 1,
    ataque: 0,
    esquiva: 3,
    bloqueo: 0,
    velocidad: 0,
    vidaMaxima: 0,
    poderMaximo: -10,
  },
  'brazal': {
    nombre: "Brazal",
    icono: "img/brazal.png",
    descripcion: "Brazal <br> +3 de velocidad <br> -10 de poder máximo",
    nivel: 1,
    ataque: 0,
    esquiva: 0,
    bloqueo: 0,
    velocidad: 3,
    vidaMaxima: 0,
    poderMaximo: -10,
  },
}
const listaEquipos = Object.keys(equiposDict).filter(name => {
  if (name !== 'nada') {
    return true
  } else return false
})

// ? Bandera que indica si el juego esta en modo edicion o no, valores posibles 0 o 1
var edicion = 0
// ? Bandera que indica si se esta editanto el personaje principal o el esbirro, valores posibles 'personaje' o 'esbirro'
var tipoEdicion = 'personaje'
// ? Contiene informacion sobre la cantidad de monedas en la mochila
var capital = {
  oro: 1,
  plata: 0,
  bronce: 0,
}
var itemMochila = {
  1: "",
  2: "",
  3: ""
}

if (localStorage.getItem('mochila')) {
  const mochila = cargarEstadoMochila()
  Object.assign(capital, mochila.capital)
  Object.assign(itemMochila, mochila.itemMochila)

  actualizarMochila()
}

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
// ? Contiene el esbirro que se esta mostrando

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
  var personaje = {}
  var arma1 = {}
  var arma2 = {}
  var equipo1 = {}
  var equipo2 = {}
  var equipo3 = {}
  var habilidad1 = {}
  var habilidad2 = {}
  var habilidad3 = {}

  if (localStorage.getItem('personaje')) {
    personaje = cargarEstadoPersonaje().personaje

    arma1 = cargarEstadoPersonaje().arma1
    arma2 = cargarEstadoPersonaje().arma2
    equipo1 = cargarEstadoPersonaje().equipo1
    equipo2 = cargarEstadoPersonaje().equipo2
    equipo3 = cargarEstadoPersonaje().equipo3
    habilidad1 = cargarEstadoPersonaje().habilidad1
    habilidad2 = cargarEstadoPersonaje().habilidad2
    habilidad3 = cargarEstadoPersonaje().habilidad3
  } else {
    personaje = {

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

    arma1 = {

      nombre: "Arma 1",
      icono: "img/nada.png",
      descripcion: "Espacio de arma 1",
      danno: 0,

    }

    arma2 = {

      nombre: "Arma 2",
      icono: "img/nada.png",
      descripcion: "Espacio de arma 2",
      danno: 0,

    }

    equipo1 = {

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

    equipo2 = {

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

    equipo3 = {

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

    habilidad1 = {
      nombre: "habilidad 1",
      coste: 0,
      descripcion: "Descripción de habilidad 1"
    }

    habilidad2 = {
      nombre: "habilidad 2",
      coste: 0,
      descripcion: "Descripción de habilidad 2"
    }

    habilidad3 = {
      nombre: "habilidad 3",
      coste: 0,
      descripcion: "Descripción de habilidad 3"
    }
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
    vida: personaje.vida,
    poder: personaje.poder,
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
  if (edicion == 1 && tipoEdicion == "personaje") {
    modalPersonaje.style.display = "grid"
  } else if (edicion == 1 && tipoEdicion == "esbirro") {
    modalEsbirros.style.display = "grid"
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
// ? cierra modal de armas, de personajes, de equipamiento o de la mochila
function cerrarModal(opcion) {
  switch (opcion) {
    case "armas":
      modalArmas.style.display = "none"
      edicion = 0
      editarImg.src = "img/editar.png"
      break;

    case "armasNaturales":
      modalArmasNaturales.style.display = "none"
      edicion = 0
      editarImg.src = "img/editar.png"
      tipoArma = "marciales"
      break;

    case "armasNaturales2":
      modalArmasNaturales2.style.display = "none"
      edicion = 0
      editarImg.src = "img/editar.png"
      tipoArma = "marciales"
      break;

    case "personajes":
      modalPersonaje.style.display = "none"
      edicion = 0
      editarImg.src = "img/editar.png"
      break;

    case "esbirros":
      modalEsbirros.style.display = "none"
      edicion = 0
      editarImg.src = "img/editar.png"
      break;

    case "equipamiento":
      modalEquipo.style.display = "none"
      edicion = 0
      editarImg.src = "img/editar.png"
      break;

    case "mochila":
      // TODO: Completar
      modalMochila.style.display = "none"


    default:
      break;
  }
  cerrarEdicion()
}

cerrarModalPersonaje.addEventListener('click', function () {
  cerrarModal("personajes")
})
cerrarModalEsbirros.addEventListener('click', function () {
  cerrarModal("esbirros")
})
cerrarModalArmas.addEventListener('click', function () {
  cerrarModal("armas")
})
cerrarModalArmasNaturales.addEventListener('click', function () {
  cerrarModal("armasNaturales")
})
cerrarModalArmasNaturales2.addEventListener('click', function () {
  cerrarModal("armasNaturales2")
})
cerrarModalEquipo.addEventListener('click', function () {
  cerrarModal("equipamiento")
})
cerrarModalMochila.addEventListener('click', function () {
  cerrarModal("mochila")
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


// ! Mochila
mochilaBtn.addEventListener('click', function () {
  modalMochila.style.display = "grid"
})
function actualizarMochila() {
  oroTxt.textContent = capital.oro
  plataTxt.textContent = capital.plata
  bronceTxt.textContent = capital.bronce
  for (let i = 1; i <= 3; i++) {
    document.getElementById(`item-mochila${i}`).textContent = itemMochila[i]
  }
}
actualizarMochila()

function restarMonedas(tipo) {
  switch (tipo) {
    case "oro":
      if (capital.oro > 0) capital.oro--
      break
    case "plata":
      if (capital.plata === 0 && capital.oro > 0) {
        capital.oro--
        capital.plata += 99
      } else if (capital.plata > 0) {
        capital.plata--
      }
      break
    case "bronce":
      if (capital.bronce === 0 && capital.plata > 0) {
        capital.plata--
        capital.bronce += 99
      } else if (capital.bronce > 0) {
        capital.bronce--
      }
      break
    default:
      break
  }

  guardarEstadoMochila()
  actualizarMochila()
}

function sumarMonedas(tipo) {
  switch (tipo) {
    case "oro":
      capital.oro++
      break
    case "plata":
      capital.plata++
      break
    case "bronce":
      capital.bronce++
      break
    default:
      break
  }

  // Evalua el capital
  if (capital.plata / 100 >= 1) {
    capital.plata %= 100
    capital.oro++
  }
  if (capital.bronce / 100 >= 1) {
    capital.bronce %= 100
    capital.plata++
  }

  guardarEstadoMochila()
  actualizarMochila()
}

function cambiarItemMochila(txt) {
  itemMochila[idxitemMochila] = txt
  guardarEstadoMochila()
}

{ // Triggers de monedas
  const monedas = ['oro', 'plata', 'bronce']
  monedas.forEach(nombre => {
    const boton = document.getElementById(`${nombre}Btn`)
    boton.addEventListener('click', function () {
      const handler = edicion == 1 ?
        sumarMonedas : restarMonedas
      handler(nombre)
    })

    let timer
    function iniciarTimer() {
      timer = setInterval(() => {
        const handler = edicion == 1 ?
          sumarMonedas : restarMonedas
        handler(nombre)
      }, 100)
    }

    function detenerTimer() {
      clearInterval(timer)
    }

    boton.addEventListener('mousedown', () => {
      iniciarTimer()
    })
    boton.addEventListener('touchstart', () => {
      iniciarTimer()
    })

    // Manejar el evento de soltar el botón
    document.addEventListener('mouseup', () => {
      detenerTimer()
    })
    document.addEventListener('touchend', () => {
      detenerTimer()
    })

  })
}

let idxitemMochila = 1
{ // Items mochila
  for (let i = 1; i <= 3; i++) {
    const item = document.getElementById(`item-mochila${i}`)
    item.addEventListener('click', () => {
      if (edicion) {
        tipoIngreso = "mochila-item"
        idxitemMochila = i
        mostrarInputComandos()
      }
    })
  }
}

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

  if (meeple === 'nuevopj' || meeple === 'nuevoesbirro') experiencia += 200

  imprimirPersonaje()
  cerrarModal("personajes")
  cerrarModal("esbirros")
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
  "nuevopj",

  "nuevoesbirro", "cinirus", "naigaran",
  "sarcomos", "raizor", "momontu", "ghalidos", "tortakla",
  "kardanto", "terronte", 'lobo'


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
          data = `Vida ${personaje['vida']} / ${personaje['vidaMaxima']}`

        } else if (atributo === 'poderMaximo') {
          data = `Poder ${personaje['poder']} / ${personaje['poderMaximo']}`

        } else data = `${capitalizarPrimeraLetra(atributo)} ${personaje[atributo]}`;
      } else {
        if (atributo === 'vidaMaxima') {
          data = `Vida ${esbirroSeleccionado['vida']} / ${esbirroSeleccionado['vidaMaxima']}`

        } else if (atributo === 'poderMaximo') {
          data = `Poder ${esbirroSeleccionado['poder']} / ${esbirroSeleccionado['poderMaximo']}`

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
            data = `Vida ${personaje['vida']} / ${personaje['vidaMaxima']}`

          } else if (estadistica === 'poderMaximo') {
            data = `Poder ${personaje['poder']} / ${personaje['poderMaximo']}`

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

          // * Incrementar exp
          aumentarDisminuirExperiencia('personaje', 'mas', estadistica)

          // * cambiar contenido mostrado
          if (estadistica === 'vidaMaxima') {
            if (personaje.vidaMaxima < personaje.vida) personaje.vida--
            data = `Vida ${personaje.vida} / ${personaje.vidaMaxima}`
          } else if (estadistica === 'poderMaximo') {
            if (personaje.poderMaximo < personaje.poder) personaje.poder--
            data = `Poder ${personaje.poder} / ${personaje.poderMaximo}`
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
      // muestra el personaje actualizado
      imprimirPersonaje()
      // guarda los cambios en el navegador
      guardarEstadoPersonaje()
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

    // Seleccionar los botones de arriba y abajo
    ['arriba', 'abajo'].forEach(key => {
      const boton = document.getElementById(`${key}Btn`)
      let accionBtn = key === 'arriba'
        ? 'mas'
        : 'menos'

      // Prevenir el menú contextual al hacer clic derecho en el botón
      boton.addEventListener('contextmenu', (event) => {
        event.preventDefault()
      })

      // Manejar el evento de clic en el botón
      boton.addEventListener('click', () => {
        if (edicion) {
          if (tipoEdicion === "personaje") modificarValores(accionBtn, estadisticaSeleccionada)
          else modificarAtributosEsbirro(accionBtn, estadisticaSeleccionada)
        }
        else {
          if (tipoEdicion === "personaje") masMenosVidaPoder(accionBtn)
          else modificarVidaPoderActualEsbirro(accionBtn)
        }
      })

      let timer

      // Iniciar un temporizador cuando se mantiene presionado el botón
      function iniciarTimer() {
        timer = setInterval(() => {
          if (edicion) {
            if (tipoEdicion === "personaje") modificarValores(accionBtn, estadisticaSeleccionada)
            else modificarAtributosEsbirro(accionBtn, estadisticaSeleccionada)
          }
          else {
            if (tipoEdicion === "personaje") masMenosVidaPoder(accionBtn)
            else modificarVidaPoderActualEsbirro(accionBtn)
          }
        }, 100)
      }

      // Detener el temporizador cuando se deja de presionar el botón
      function detenerTimer() {
        clearTimeout(timer)
      }

      // Manejar el evento de presionar el botón
      boton.addEventListener('mousedown', () => {
        iniciarTimer()
      })
      boton.addEventListener('touchstart', () => {
        iniciarTimer()
      })

      // Manejar el evento de soltar el botón
      document.addEventListener('mouseup', () => {
        detenerTimer()
      })
      document.addEventListener('touchend', () => {
        detenerTimer()
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
      nombre = quitarAcentos(nombre).toLowerCase()
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
        tipoIngreso = "habilidad"
        mostrarInputComandos()
      } else if (esPersonaje) {
        // ? Motrar descripción de habilidad 
        descripcionHabilidad(habilidad1)
      }
    })
    habilidad2Btn.addEventListener('click', () => {
      // ? Personalizar habilidad
      if (edicion && esPersonaje) {
        habilidadSeleccionada = habilidad2
        tipoIngreso = "habilidad"
        mostrarInputComandos()
      } else if (esPersonaje) {
        // ? Motrar descripción de habilidad 
        descripcionHabilidad(habilidad2)
      }
    })
    habilidad3Btn.addEventListener('click', () => {
      // ? Personalizar habilidad
      if (edicion && esPersonaje) {
        habilidadSeleccionada = habilidad3
        tipoIngreso = "habilidad"
        mostrarInputComandos()
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
          // let val = prompt("Nuevo nombre")
          // personaje.nombre = val
          tipoIngreso = "nombre"
          mostrarInputComandos()
          // imprimirPersonaje()
          // cerrarEdicion()
        } else if (esPersonaje) {
          contenConsola(personaje.descripcion)
        }
      } else {
        if (edicion) {
          // let val = prompt("Nuevo nombre")
          // esbirroSeleccionado.nombre = val
          tipoIngreso = "nombre"
          mostrarInputComandos()
          // imprimirPersonaje()
          // cerrarEdicion()
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

      // Si se cambiar nuevamente al arma 'puño' carga el arma 'patada'
      if (seleccion.nombre === 'puño' && arma === 'punno') {
        Object.assign(seleccion, armasDict.patada)
      }
      // Caso contrario carga el arma seleccionada
      else Object.assign(seleccion, armasDict[arma])

      // reflejar cambios
      modalArmas.style.display = "none"
      modalArmasNaturales.style.display = "none"
      modalArmasNaturales2.style.display = "none"
      // mostrarCambioArma()
      imprimirPersonaje()
      cerrarModal("armas")
      cerrarModal("armasNaturales")
      cerrarModal("armasNaturales2")
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




    mordiscoBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('mordisco')
      else cambiarArmaEsbirro('mordisco')
    })

    garrasBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('garras')
      else cambiarArmaEsbirro('garras')
    })

    colaBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('cola')
      else cambiarArmaEsbirro('cola')
    })

    cuernosBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('cuernos')
      else cambiarArmaEsbirro('cuernos')
    })

    pinzasBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('pinzas')
      else cambiarArmaEsbirro('pinzas')
    })

    picoBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('pico')
      else cambiarArmaEsbirro('pico')
    })

    lenguaBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('lengua')
      else cambiarArmaEsbirro('lengua')
    })

    aguijonBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('aguijon')
      else cambiarArmaEsbirro('aguijon')
    })

    espinasBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('espinas')
      else cambiarArmaEsbirro('espinas')
    })

    cascosBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('cascos')
      else cambiarArmaEsbirro('cascos')
    })

    alientoBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('aliento')
      else cambiarArmaEsbirro('aliento')
    })

    alasBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('alas')
      else cambiarArmaEsbirro('alas')
    })

    aletaBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('aleta')
      else cambiarArmaEsbirro('aleta')
    })


    tentaculosBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('tentaculos')
      else cambiarArmaEsbirro('tentaculos')
    })

    antenasBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('antenas')
      else cambiarArmaEsbirro('antenas')
    })


    menteBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('mente')
      else cambiarArmaEsbirro('mente')
    })


    miradaBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('mirada')
      else cambiarArmaEsbirro('mirada')
    })


    glandulaBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('glandula')
      else cambiarArmaEsbirro('glandula')
    })

    raicesBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('raices')
      else cambiarArmaEsbirro('raices')
    })


    ramasBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('ramas')
      else cambiarArmaEsbirro('ramas')
    })

    hojasBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('hojas')
      else cambiarArmaEsbirro('hojas')
    })


    frutosBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('frutos')
      else cambiarArmaEsbirro('frutos')
    })


    floresBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('flores')
      else cambiarArmaEsbirro('flores')
    })


    esporasBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarArma('esporas')
      else cambiarArmaEsbirro('esporas')
    })






  }


}


var tipoArma = "marciales"

salvajesBtn.addEventListener('click', () => {



  if (tipoArma == "marciales") {

    modalArmas.style.display = "none"
    modalArmasNaturales.style.display = "grid"
    modalArmasNaturales2.style.display = "none"

    tipoArma = "salvajes"

  } else if (tipoArma == "salvajes") {

    modalArmas.style.display = "grid"
    modalArmasNaturales.style.display = "none"
    modalArmasNaturales2.style.display = "none"

    tipoArma = "marciales"

  }

})

marcialesBtn.addEventListener('click', () => {


  if (tipoArma == "marciales") {

    modalArmas.style.display = "none"
    modalArmasNaturales.style.display = "grid"
    modalArmasNaturales2.style.display = "none"

    tipoArma = "salvajes"

  } else if (tipoArma == "salvajes") {

    modalArmas.style.display = "grid"
    modalArmasNaturales.style.display = "none"
    modalArmasNaturales2.style.display = "none"

    tipoArma = "marciales"

  }

})



marciales2Btn.addEventListener('click', () => {


  if (tipoArma == "marciales") {

    modalArmas.style.display = "none"
    modalArmasNaturales2.style.display = "none"
    modalArmasNaturales.style.display = "grid"

    tipoArma = "salvajes"

  } else if (tipoArma == "salvajes") {

    modalArmas.style.display = "grid"
    modalArmasNaturales2.style.display = "none"
    modalArmasNaturales.style.display = "none"

    tipoArma = "marciales"

  }

})


adelanteBtn.addEventListener('click', () => {




  modalArmas.style.display = "none"
  modalArmasNaturales.style.display = "none"
  modalArmasNaturales2.style.display = "grid"

  tipoArma = "salvajes"



})

atras2Btn.addEventListener('click', () => {




  modalArmas.style.display = "none"
  modalArmasNaturales.style.display = "grid"
  modalArmasNaturales2.style.display = "none"

  tipoArma = "salvajes"



})











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
    sinEquipoBtn.addEventListener('click', () => {
      if (esPersonaje) cambiarEquipamiento('nada')
      else cambiarEquipamientoEsbirro('nada')
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

        if (arma.tipo == "mecanomagica") {
          personaje.poder -= arma.coste
          guardarEstadoPersonaje()
          imprimirPersonaje()
        }
      } else {
        // ? Tirada con atributo
        switch (slot) {
          case 1: // * Ataque
            // TODO: Retocar el ataque limpio
            if (dado == 20)
              contenConsola(`Ataque limpio<br>¡CRITICO!<br>Daño base ${Math.floor(ataque * 1)}`)
            else if (dado == 1)
              contenConsola(`Ataque limpio<br>¡PIFIA!<br>Daño base 0`)
            else
              contenConsola(`Ataque limpio<br>${dado + ataque}<br>Daño base ${Math.floor(ataque)}`)
            break;
          case 2: // * Esquiva
            // TODO: Retocar esquiva
            if (dado == 20)
              contenConsola(`Esquiva<br>¡CRITICO!`)
            else if (dado == 1)
              contenConsola(`Esquiva<br>¡PIFIA!`)
            else
              contenConsola(`Esquiva<br>${dado + esquiva}`)
            break;
          case 3: // * Bloquea
            // TODO: Retocar bloqueo
            if (dado == 20)
              contenConsola(`Bloquea<br>¡CRITICO!`)
            else if (dado == 1)
              contenConsola(`Bloquea<br>¡PIFIA!`)
            else
              contenConsola(`Bloquea<br>${dado + bloqueo}`)
            break;
          case 4: // * Huye
            // TODO: Retocar huye
            if (dado == 20)
              contenConsola(`Corre<br>¡CRITICO!`)
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
    Object.assign(this, props);
    this.configurarArma(1, this.arma1)
    this.configurarArma(2, this.arma2)

    this.configurarHabilidad(1, this.habilidad1)
    this.configurarHabilidad(2, this.habilidad2)
    this.configurarHabilidad(3, this.habilidad3)

    this.configurarEquipamiento(1, this.equipo1)
    this.configurarEquipamiento(2, this.equipo2)
    this.configurarEquipamiento(3, this.equipo3)
  }

  /**
   * ? Configura el arma en una ranura específica.
   * @param {number} ranura - El número de ranura del arma.
   * @param {string} nombre - El nombre del arma.
   */
  configurarArma(ranura, nombre) {
    if (nombre in armasDict) {
      if (!armasDict[nombre].icono) console.error(`Esbirro: Agregar propiedad icono de ${nombre} en armasDict`)

      if (this[`arma${ranura}`].nombre === 'puño' && nombre === 'punno') {
        this[`arma${ranura}`] = armasDict.patada
      } else this[`arma${ranura}`] = armasDict[nombre]
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
{ // * Variables esbirro

  // ! Lista de esbirros !
  // Crea un array vacío para almacenar instancias de la clase Esbirro
  var esbirros = []

  if (localStorage.getItem('listaEsbirros')) {
    esbirros = cargarEstadoListaEsbirros()
  } else {
    // Crea cinco instancias de Esbirro y las agrega al array esbirros
    for (let i = 0; i < 5; i++) {
      esbirros.push(new Esbirro({ nombre: `Esbirro ${i + 1}` }))
    }

    // * El siguiente código se utiliza para actualizar la primera instancia de esbirro
    // * con la información del esbirro "lobo" de esbirrosDict. Esto es temporal y debe descartarse
    // * después de completar las pruebas necesarias.
    esbirros[0].actualizarPropiedades(esbirrosDict.esbirro1)
    esbirros[1].actualizarPropiedades(esbirrosDict.esbirro2)
    esbirros[2].actualizarPropiedades(esbirrosDict.esbirro3)
    esbirros[3].actualizarPropiedades(esbirrosDict.esbirro4)
    esbirros[4].actualizarPropiedades(esbirrosDict.esbirro5)
  }
  // ! Lista de esbirros !
  var esbirroSeleccionado = esbirros[0]
  // ? Indica si se esta usando el personaje o un esbirro
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

    esbirrosImg.src = "img/personajeico.png"
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

    esbirrosImg.src = "img/esbirrosico.png"
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
    cerrarModal('esbirros')
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
            data = `Vida ${personaje.vida} / ${esbirroSeleccionado['vidaMaxima']}`
          } else if (atributo === 'poderMaximo') {
            data = `Poder ${esbirroSeleccionado['poder']} / ${esbirroSeleccionado['poderMaximo']}`
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
            if (esbirroSeleccionado.vidaMaxima < esbirroSeleccionado.vida) esbirroSeleccionado.vida--
            data = `Vida ${personaje.vida} / ${esbirroSeleccionado['vidaMaxima']}`
          } else if (atributo === 'poderMaximo') {
            if (esbirroSeleccionado.poderMaximo < esbirroSeleccionado.poder) esbirroSeleccionado.poder--
            data = `Poder ${esbirroSeleccionado['poder']} / ${esbirroSeleccionado['poderMaximo']}`
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
          tipoIngreso = "habilidad"
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
      cerrarModal('armasNaturales');
      cerrarModal('armasNaturales2');
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

      if (arma.tipo == "mecanomagica") {
        esbirroSeleccionado.poder -= arma.coste
        guardarEstadoListaEsbirros()
        mostrarEsbirroSeleccionado()
      }
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
            contenConsola(`Esquiva<br>¡CRITICO!`)
          else if (dado == 1)
            contenConsola(`Esquiva<br>¡PIFIA!`)
          else
            contenConsola(`Esquiva<br>${dado + esbirroSeleccionado.esquiva}`)
          break;
        case 3: // * Bloquea
          // TODO: Retocar bloqueo
          if (dado == 20)
            contenConsola(`Bloquea<br>¡CRITICO!`)
          else if (dado == 1)
            contenConsola(`Bloquea<br>¡PIFIA!`)
          else
            contenConsola(`Bloquea<br>${dado + esbirroSeleccionado.esquiva}`)
          break;
        case 4: // * Huye
          // TODO: Retocar huye
          if (dado == 20)
            contenConsola(`Corre<br>¡CRITICO!`)
          else if (dado == 1)
            contenConsola(`Corre<br>¡PIFIA!`)
          else
            contenConsola(`Corre<br>${dado + esbirroSeleccionado.velocidad}`)
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
      esbirroSeleccionado.configurarEquipamiento(equipamientoSeleccionado, item)
      mostrarEsbirroSeleccionado()
      cerrarModal('equipamiento')
      cerrarEdicion()
    }
  }
}
//!! //////////////////// FIN BLOQUE DE MASCOTAS //!! ////////////////////