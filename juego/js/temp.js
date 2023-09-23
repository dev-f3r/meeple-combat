
{ // * Variables
  class Mascota {
    constructor(
      nombre = "",
      imagen = "",
      icono = "",

      ataque = 0,
      esquiva = 0,
      bloqueo = 0,
      velocidad = 0,
      vida = 0,
      vidaMaxima = 0,
      poder = 0,
      poderMaximo = 0,

      arma1 = { nombre: "wp 1", descripcion: "dc wp 1" },
      arma2 = { nombre: "wp 2", descripcion: "dc wp 2" },

      habilidad1 = { nombre: "sk 1", descripcion: "dc sk 1" },
      habilidad2 = { nombre: "sk 2", descripcion: "dc sk 2" },

      descripcion = "Selecciona editar y luego el ícono de esta criatura para invocar otra."
    ) {
      this.nombre = nombre
      this.imagen = imagen
      this.icono = icono

      this.ataque = ataque
      this.esquiva = esquiva
      this.bloqueo = bloqueo
      this.velocidad = velocidad
      this.vida = vida
      this.vidaMaxima = vidaMaxima
      this.poder = poder
      this.poderMaximo = poderMaximo

      this.arma1 = arma1
      this.arma2 = arma2

      this.habilidad1 = habilidad1
      this.habilidad2 = habilidad2

      this.descripcion = descripcion
    }

    /* 
        * @props: Obj
     */
    // ? Actualiza los props de esta clase por lotes
    actualizarMascota(props) {
      for (let key in props) {
        if (this.hasOwnProperty(key)) {
          this[key] = props[key];
        }
      }
    }

    settArma1(nombre) {
      this.arma1 = { nombre, descripcion: dictArmasMascota[nombre] }
    }
    settArma2(nombre) {
      this.arma2 = { nombre, descripcion: dictArmasMascota[nombre] }
    }

    settHabilidad1(nombre) {
      this.habilidad1 = { nombre, descripcion: dictHabilidades[nombre] }
    }

    settHabilidad2(nombre) {
      this.habilidad2 = { nombre, descripcion: dictHabilidades[nombre] }
    }
  }

  var dictArmasMascota = {
    "nada": "arma nada sin descripción",
    "garras": "Garras <br> / 1 Accion / 100% de ataque como daño fíisico",
    "mordisco": "Mordisco Arma natural <br> / 2 Acciones / 150% de ataque como daño fíisico",
    "aliento": "ALIENTO <br> Arma a distancia / 3 Acciones <br> 250% de ataque como daño mágico <br> Distancia máxima de 1 casillero x punto de ataque"
    // TODO: Agregar armas restantes
  }

  var dictMascotas = {
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

      arma1: { nombre: "mordisco", descripcion: dictArmasMascota["mordisco"] },
      arma2: { nombre: "garras", descripcion: dictArmasMascota["garras"] },

      habilidad1: { nombre: "DERRIBO", descripcion: dictHabilidades["DERRIBO"] },
      habilidad2: { nombre: "DESGARRO", descripcion: dictHabilidades["DESGARRO"] },

      descripcion: "LOBO <br> Criatura de Sangre <br> Coste de invocación: 20"
    },
    "esqueleto": {
      "nombre": "cosa"
    }
    // TODO: Agregar las demas mascotas
  }

  var listaMascotas = []

  listaMascotas.push(new Mascota()) // Mascota 1
  listaMascotas[0].actualizarMascota({
    nombre: "Test pet 1",
    imagen: "img/c1.png",
    arma1: { nombre: "nada", descripcion: dictArmasMascota["nada"] },
    arma2: { nombre: "nada", descripcion: dictArmasMascota["nada"] }
  })
  listaMascotas.push(new Mascota()) // Mascota 2
  listaMascotas[1].actualizarMascota({
    nombre: "Test pet 2",
    imagen: "img/c2.png",
    arma1: { nombre: "nada", descripcion: dictArmasMascota["nada"] },
    arma2: { nombre: "nada", descripcion: dictArmasMascota["nada"] }
  })
  listaMascotas.push(new Mascota()) // Mascota 3
  listaMascotas[2].actualizarMascota({
    nombre: "Test pet 3",
    imagen: "img/c3.png",
    arma1: { nombre: "nada", descripcion: dictArmasMascota["nada"] },
    arma2: { nombre: "nada", descripcion: dictArmasMascota["nada"] }
  })
}

let mascotaSeleccionada = listaMascotas[0]

let estadoModalMascota = false

// ? EvenListener para mostrar y ocultar el modal de mascotas
esbirrosBtn.addEventListener('click', () => {
  if (!estadoModalMascota) {
    estadoModalMascota = true
    // modalMascota.style.display = "grid"
    mostrarBtnCambioEsbirro()
    imprimirEsbirros()
  }
  else {
    estadoModalMascota = false
    // modalMascota.style.display = "none"
    ocultarBtnArrivaAbajo()
    imprimirPersonaje()
    ocultarBtnCambioEsbirro()
  }
})

function mostrarBtnCambioEsbirro() {
  izquierdaBtn.style.display = "block"
  derechaBtn.style.display = "block"
}

function ocultarBtnCambioEsbirro() {
  izquierdaBtn.style.display = "none"
  derechaBtn.style.display = "none"
}


// ? Función para actualizar los datos mostrados sobre la mascota seleccionada
function imprimirMascota() {
  nombreMascotaTxt.textContent = mascotaSeleccionada.nombre.toUpperCase()
  mascotaPortadaImg.src = mascotaSeleccionada.imagen

  ataqueMascotaTxt.textContent = mascotaSeleccionada.ataque
  esquivaMascotaTxt.textContent = mascotaSeleccionada.esquiva
  bloqueoMascotaTxt.textContent = mascotaSeleccionada.bloqueo
  velocidadMascotaTxt.textContent = mascotaSeleccionada.velocidad
  vidaMascotaTxt.textContent = mascotaSeleccionada.vida
  poderMascotaTxt.textContent = mascotaSeleccionada.poder

  arma1MascotaTxt.textContent = mascotaSeleccionada.arma1.nombre[0].toUpperCase() + mascotaSeleccionada.arma1.nombre.slice(1)
  arma1MascotaImg.src = `img/${mascotaSeleccionada.arma1.nombre}.png`

  arma2MascotaTxt.textContent = mascotaSeleccionada.arma2.nombre[0].toUpperCase() + mascotaSeleccionada.arma2.nombre.slice(1)
  arma2MascotaImg.src = `img/${mascotaSeleccionada.arma2.nombre}.png`

  habilidadMascota1Txt.textContent = mascotaSeleccionada.habilidad1.nombre
  habilidadMascota2Txt.textContent = mascotaSeleccionada.habilidad2.nombre
}
imprimirMascota()

function imprimirEsbirros() {
  portadaImg.src = mascotaSeleccionada.imagen

  nombreTxt.textContent = mascotaSeleccionada.nombre

  ataqueTxt.textContent = mascotaSeleccionada.ataque + equipo1.ataque + equipo2.ataque + equipo3.ataque
  esquivaTxt.textContent = mascotaSeleccionada.esquiva + equipo1.esquiva + equipo2.esquiva + equipo3.esquiva
  bloqueoTxt.textContent = mascotaSeleccionada.bloqueo + equipo1.bloqueo + equipo2.bloqueo + equipo3.bloqueo
  velocidadTxt.textContent = mascotaSeleccionada.velocidad + equipo1.velocidad + equipo2.velocidad + equipo3.velocidad

  vidaTxt.textContent = mascotaSeleccionada.vida

  poderTxt.textContent = mascotaSeleccionada.poder

  equipo1Txt.textContent = personaje.equipo1
  equipo2Txt.textContent = personaje.equipo2
  equipo3Txt.textContent = personaje.equipo3

  equipo1Img.src = equipo1.icono
  equipo2Img.src = equipo2.icono
  equipo3Img.src = equipo3.icono

  arma1Txt.textContent = mascotaSeleccionada.arma1.nombre
  arma2Txt.textContent = mascotaSeleccionada.arma2.nombre
  arma1Img.src = `img/${mascotaSeleccionada.arma1.nombre}.png`
  arma2Img.src = `img/${mascotaSeleccionada.arma2.nombre}.png`

  habilidad1Txt.textContent = mascotaSeleccionada.habilidad1.nombre
  habilidad2Txt.textContent = mascotaSeleccionada.habilidad2.nombre
  habilidad3Txt.textContent = habilidad3.nombre

  experienciaTxt.textContent = personaje.experiencia
}


{ // * Atributos
  // * Funcion para mostrar atributos
  function mostrarAtributoMascota(atributo) {
    contenConsola(`${atributo[0].toUpperCase() + atributo.slice(1)} ${mascotaSeleccionada[atributo]}`)
  }

  { // * Funciones para modificación de los atributos
    /* 
        * @accion: string
        * @estadistica: string
     */
    // ? Modifica los atributos generales de la mascota seleccionada
    function modificarAtributosMascota(accion, estadistica) {
      let data = ""

      // ? valor de experiencia minimo requerido
      let valor = (mascotaSeleccionada[estadistica] + 1) * valorExperiencia[estadistica]

      if (accion === 'mas') {
        if (personaje.experiencia >= valor) {
          mascotaSeleccionada[estadistica]++
          data = `${estadistica
            .charAt(0)
            .toUpperCase()
            + estadistica
              .slice(1)} ${mascotaSeleccionada[estadistica]}`

          // * decrementar exp
          aumentarDisminuirExperiencia('mascota', 'menos', estadistica)

          // * cambiar contenido mostrado
          contenConsola(data)
          imprimirPersonaje()
          imprimirMascota()
        } else {
          contenConsola("Experiencia insuficiente")
        }
      } else {
        if (mascotaSeleccionada[estadistica] > 0) {
          mascotaSeleccionada[estadistica]--

          // ? Si la vida actual es mayor a la vida maxima iguala los atributos
          if (estadistica === "vidaMaxima" && mascotaSeleccionada.vidaMaxima < mascotaSeleccionada.vida) {
            mascotaSeleccionada.vida = mascotaSeleccionada.vidaMaxima
          }
          // ? Si la poder actual es mayor a la poder maximo iguala los atributos
          if (estadistica === "poderMaximo" && mascotaSeleccionada.poderMaximo < mascotaSeleccionada.poder) {
            mascotaSeleccionada.poder = mascotaSeleccionada.poderMaximo
          }

          // * Incrementar exp
          aumentarDisminuirExperiencia('mascota', 'mas', estadistica)

          // * cambiar contenido mostrado
          data = `${estadistica
            .charAt(0)
            .toUpperCase()
            + estadistica
              .slice(1)} ${mascotaSeleccionada[estadistica]}`
          contenConsola(data)
          imprimirPersonaje()
          imprimirMascota()
        }
      }
    }

    /* 
        * @accion: string
     */
    // ? Modifica los atributos vida y poder actual de la mascota seleccionada
    function cambiarVidaPoderActualMascota(accion) {
      if (estadisticaSeleccionada === "vida") {
        if (accion === "mas") { // ? Incremento de vida
          if (mascotaSeleccionada.vida < mascotaSeleccionada.vidaMaxima) mascotaSeleccionada.vida++
        } else { // ? Decremento de vida
          if (mascotaSeleccionada.vida > 0) mascotaSeleccionada.vida--
        }
        contenConsola(`Vida ${mascotaSeleccionada.vida} / ${mascotaSeleccionada.vidaMaxima}`)
      } else if (estadisticaSeleccionada === "poder") {
        if (accion === "mas") { // ? Incremento de poder
          if (mascotaSeleccionada.poder < mascotaSeleccionada.poderMaximo) mascotaSeleccionada.poder++
        } else { // ? Decremento de poder
          if (mascotaSeleccionada.poder > 0) mascotaSeleccionada.poder--
        }
        contenConsola(`Poder ${mascotaSeleccionada.poder} / ${mascotaSeleccionada.poderMaximo}`)
      }
      imprimirMascota()
    }

  }

  { // * EventLister de los atributos
    ataqueMascotaBtn.addEventListener('click', () => {
      if (edicion) {
        tipoEdicion = "mascota"
        estadisticaSeleccionada = "ataque"
        mostrarBtnArrivaAbajo()
      } else mostrarAtributoMascota("ataque")
    })
    esquivaMascotaBtn.addEventListener('click', () => {
      if (edicion) {
        tipoEdicion = "mascota"
        estadisticaSeleccionada = "esquiva"
        mostrarBtnArrivaAbajo()
      } else mostrarAtributoMascota("esquiva")
    })
    bloqueoMascotaBtn.addEventListener('click', () => {
      if (edicion) {
        tipoEdicion = "mascota"
        estadisticaSeleccionada = "bloqueo"
        mostrarBtnArrivaAbajo()
      } else mostrarAtributoMascota("bloqueo")
    })
    velocidadMascotaBtn.addEventListener('click', () => {
      if (edicion) {
        tipoEdicion = "mascota"
        estadisticaSeleccionada = "velocidad"
        mostrarBtnArrivaAbajo()
      } else mostrarAtributoMascota("velocidad")
    })
    vidaMascotaBtn.addEventListener('click', () => {
      // ? Inicia edicion de vida general
      if (edicion) {
        tipoEdicion = "mascota"
        estadisticaSeleccionada = "vidaMaxima"
        mostrarBtnArrivaAbajo()
      } else {
        // ? Inicia edicion de vida actual
        mostrarBtnArrivaAbajo()
        estadisticaSeleccionada = "vida"
        tipoEdicion = "mascota"
        contenConsola(`Vida ${mascotaSeleccionada.vida} / ${mascotaSeleccionada.vidaMaxima}`)
      }
    })
    poderMascotaBtn.addEventListener('click', () => {
      // ? Inicia edicion de poder general
      if (edicion) {
        tipoEdicion = "mascota"
        estadisticaSeleccionada = "poderMaximo"
        mostrarBtnArrivaAbajo()
      } else {
        // ? Inicia edicion de poder actual
        mostrarBtnArrivaAbajo()
        estadisticaSeleccionada = "poder"
        tipoEdicion = "mascota"
        contenConsola(`Poder ${mascotaSeleccionada.poder} / ${mascotaSeleccionada.poderMaximo}`)
      }
    })
  }
}

{ // * Cambiar mascota actual

  // * Función para cambiar de mascota
  function cambiarMascota() {
    let val = prompt("Ingrese comando")

    if (val in dictMascotas) {
      mascotaSeleccionada.actualizarMascota({ ...dictMascotas[val] })
    } else {
      contenConsola("COMANDO INCORRECTO")
    }

    cerrarEdicion()
    // imprimirPersonaje()
    // imprimirMascota()
    imprimirEsbirros()
  }

  // * Trigger
  portadaMascotaBtn.addEventListener('click', () => {
    if (edicion) cambiarMascota()
  })
}

{ // * Pasar a otra mascota
  let i = 0
  { // * Triggers
    cambioIzquierdaBtn.addEventListener('click', () => {
      i--
      if (i < 0) i = listaMascotas.length - 1
      mascotaSeleccionada = listaMascotas[i]
      imprimirMascota()
    })
    cambioDerechaBtn.addEventListener('click', () => {
      i++
      if (i > listaMascotas.length - 1) i = 0
      mascotaSeleccionada = listaMascotas[i]
      imprimirMascota()
    })
  }
}

{ // * Habilidades
  { // * EvenListeners de habilidades
    habilidadMascota1Btn.addEventListener('click', () => {
      // ? Personalizar habilidad
      if (edicion) {
        cambiarHabilidad(mascotaSeleccionada.habilidad1)
      } else {
        // ? Motrar descripción de habilidad 
        descripcionHabilidad(mascotaSeleccionada.habilidad1)
      }
    })
    habilidadMascota2Btn.addEventListener('click', () => {
      // ? Personalizar habilidad
      if (edicion) {
        cambiarHabilidad(mascotaSeleccionada.habilidad2)
      } else {
        // ? Motrar descripción de habilidad 
        descripcionHabilidad(mascotaSeleccionada.habilidad2)
      }
    })
  }
}

{ // * Armas
  { // * Triggers
    arma1MascotaBtn.addEventListener('click', () => {
      contenConsola(mascotaSeleccionada.arma1.descripcion)
    })
    arma2MascotaBtn.addEventListener('click', () => {
      contenConsola(mascotaSeleccionada.arma2.descripcion)
    })
  }
}


// ! DESCARTADA POR COMPLEJA
function mostrarEsbirroSeleccionado() {
  // Obtiene una referencia al esbirro seleccionado
  const esbirro = esbirroSeleccionado;

  // Muestra el nombre del esbirro en mayúsculas en el elemento de texto
  nombreTxt.textContent = esbirro.nombre.toUpperCase();

  // Establece la fuente de la imagen de portada del esbirro
  portadaImg.src = esbirro.imagen;

  // Define un array de objetos que contienen información sobre los atributos a mostrar
  const atributos = [
    { elemento: ataqueTxt, propiedad: 'ataque' },
    { elemento: esquivaTxt, propiedad: 'esquiva' },
    { elemento: bloqueoTxt, propiedad: 'bloqueo' },
    { elemento: velocidadTxt, propiedad: 'velocidad' },
    { elemento: vidaTxt, propiedad: 'vida' },
    { elemento: poderTxt, propiedad: 'poder' }
  ];

  // Itera sobre el array de atributos y muestra los valores en los elementos de texto correspondientes
  atributos.forEach(({ elemento, propiedad }) => {
    elemento.textContent = esbirro[propiedad];
  });

  // Función para mostrar el nombre del arma capitalizado y establecer la fuente de la imagen del arma
  const mostrarArma = (arma, elementoTxt, elementoImg) => {
    elementoTxt.textContent = capitalizarPrimeraLetra(arma.nombre);
    elementoImg.src = `img/${arma.nombre}.png`;
  };

  // Muestra información sobre las dos armas del esbirro
  mostrarArma(esbirro.arma1, arma1Txt, arma1Img);
  mostrarArma(esbirro.arma2, arma2Txt, arma2Img);

  // Muestra los nombres de las habilidades del esbirro
  habilidad1Txt.textContent = esbirro.habilidad1.nombre;
  habilidad2Txt.textContent = esbirro.habilidad2.nombre;
  habilidad3Txt.textContent = esbirro.habilidad3.nombre;
}