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
  "magia": {
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
  "hojas": {
    nombre: "hojas",
    icono: "img/hojas.png",
    danno: 1.25,
    descripcion: "HOJAS <br> Arma cuerpo a cuerpo / 2 Acciones <br> 125% de ataque como daño físico"
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
  },
  "cola": {
    nombre: "cola",
    icono: "img/cola.png",
    danno: 1.25,
    descripcion: "COLA <br> Arma mixta cuerpo a cuerpo / 2 Acciones <br> 125% de ataque como daño mágico o físico"
  },
  "pico": {
    nombre: "pico",
    icono: "img/pico.png",
    danno: 1.25,
    descripcion: "PICO <br> Arma mixta cuerpo a cuerpo / 2 Acciones <br> 125% de ataque como daño mágico o físico"
  },
  "espinas": {
    nombre: "espinas",
    icono: "img/espinas.png",
    danno: 1.25,
    descripcion: "ESPINAS <br> Arma mixta cuerpo a cuerpo / 2 Acciones <br> 125% de ataque como daño mágico o físico"
  },
  "lengua": {
    nombre: "lengua",
    icono: "img/lengua.png",
    danno: 1.25,
    descripcion: "LENGUA <br> Arma mixta cuerpo a cuerpo / 2 Acciones <br> 125% de ataque como daño mágico o físico"
  },
  "aguijon": {
    nombre: "aguijon",
    icono: "img/aguijon.png",
    danno: 1.25,
    descripcion: "AGUIJON <br> Arma mixta cuerpo a cuerpo / 2 Acciones <br> 125% de ataque como daño mágico o físico"
  },
  "aleta": {
    nombre: "aleta",
    icono: "img/aleta.png",
    danno: 1.25,
    descripcion: "ALETA <br> Arma mixta cuerpo a cuerpo / 2 Acciones <br> 125% de ataque como daño mágico o físico"
  },
  "antenas": {
    nombre: "antenas",
    icono: "img/antenas.png",
    danno: 1.25,
    descripcion: "ANTENAS <br> Arma mixta cuerpo a cuerpo / 2 Acciones <br> 125% de ataque como daño mágico o físico"
  }
  ,
  "glandula": {
    nombre: "glandula",
    icono: "img/glandula.png",
    danno: 1.25,
    descripcion: "GLANDULA <br> Arma mixta cuerpo a cuerpo / 2 Acciones <br> 125% de ataque como daño mágico o físico"
  },
  "raices": {
    nombre: "raices",
    icono: "img/raices.png",
    danno: 1.25,
    descripcion: "RAICES <br> Arma mixta cuerpo a cuerpo / 2 Acciones <br> 125% de ataque como daño mágico o físico"
  },
  "flores": {
    nombre: "flores",
    icono: "img/flores.png",
    danno: 1.25,
    descripcion: "FLORES <br> Arma mixta cuerpo a cuerpo / 2 Acciones <br> 125% de ataque como daño mágico o físico"
  },
  "frutos": {
    nombre: "frutos",
    icono: "img/frutos.png",
    danno: 1.25,
    descripcion: "FRUTOS <br> Arma mixta cuerpo a cuerpo / 2 Acciones <br> 125% de ataque como daño mágico o físico"
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

// ? Objeto para almecenar información de los personajes
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
}

// ? Contiene el costo de experiencia de cada atributo
const valorExperiencia = {
  ataque: 3,
  esquiva: 3,
  bloqueo: 3,
  velocidad: 6,
  vidaMaxima: 1,
  poderMaximo: 1
}

// ? Clase principal
class Personaje {
  /**
   * @param {Object} opciones - Objeto que contiene las propiedades del Personaje.
   * @param {string} opciones.nombre - El nombre del Personaje.
   * @param {string} opciones.imagen - La URL de la imagen del Personaje.
   * @param {string} opciones.icono - El icono del Personaje (sin uso).
   * @param {string} opciones.descripcion - La descripción del Personaje.
   * @param {number} opciones.experiencia - La experiencia del Personaje.
   * @param {number} opciones.ataque - El valor de ataque del Personaje.
   * @param {number} opciones.esquiva - El valor de esquiva del Personaje.
   * @param {number} opciones.bloqueo - El valor de bloqueo del Personaje.
   * @param {number} opciones.velocidad - El valor de velocidad del Personaje.
   * @param {number} opciones.vida - El valor de vida actual del Personaje.
   * @param {number} opciones.vidaMaxima - El valor máximo de vida del Personaje.
   * @param {number} opciones.poder - El poder actual del Personaje.
   * @param {number} opciones.poderMaximo - El poder máximo del Personaje.
   * @param {Object} opciones.arma1 - El arma en la ranura 1 del Personaje.
   * @param {Object} opciones.arma2 - El arma en la ranura 2 del Personaje.
   * @param {Object} opciones.equipo1 - El equipo en la ranura 1 del Personaje.
   * @param {Object} opciones.equipo2 - El equipo en la ranura 2 del Personaje.
   * @param {Object} opciones.equipo3 - El equipo en la ranura 3 del Personaje.
   * @param {Object} opciones.habilidad1 - La habilidad en la ranura 1 del Personaje.
   * @param {Object} opciones.habilidad2 - La habilidad en la ranura 2 del Personaje.
   * @param {Object} opciones.habilidad3 - La habilidad en la ranura 3 del Personaje.
   */
  constructor({
    // Propiedades generales de personaje
    nombre = "bienvenido",
    imagen = "img/logo-meeple-combat.png",
    descripcion = "Selecciona editar y luego el ícono de esta criatura para invocar otra.",

    // Atributos de personaje
    ataque = 0,
    esquiva = 0,
    bloqueo = 0,
    velocidad = 0,
    vida = 0,
    vidaMaxima = 0,
    poder = 0,
    poderMaximo = 0,

    // Armas de personaje
    arma1 = {
      nombre: "Arma 1",
      icono: "img/nada.png",
      danno: 0,
      descripcion: "Descripcion Arma 1"
    },
    arma2 = {
      nombre: "Arma 2",
      icono: "img/nada.png",
      danno: 0,
      descripcion: "Descripcion Arma 2"
    },

    // Equipamiento de personaje
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

    // Habilidades de personaje
    habilidad1 = {
      nombre: "Habilidad 1",
      coste: 0,
      descripcion: "Descripcion Habilidad 1"
    },
    habilidad2 = {
      nombre: "Habilidad 2",
      coste: 0,
      descripcion: "Descripcion Habilidad 2"
    },
    habilidad3 = {
      nombre: "Habilidad 3",
      coste: 0,
      descripcion: "Descripcion Habilidad 3"
    },
  }) {
    // * Propiedades generales de personaje
    this.nombre = nombre
    this.imagen = imagen
    this.descripcion = descripcion

    // * Atributos de personaje
    this.ataque = ataque
    this.esquiva = esquiva
    this.bloqueo = bloqueo
    this.velocidad = velocidad
    this.vida = vida
    this.vidaMaxima = vidaMaxima
    this.poder = poder
    this.poderMaximo = poderMaximo

    // * Armas de personaje
    this.arma1 = arma1
    this.arma2 = arma2

    // * Equipamiento de personaje
    this.equipo1 = equipo1
    this.equipo2 = equipo2
    this.equipo3 = equipo3

    // * Habilidades de personaje
    this.habilidad1 = habilidad1
    this.habilidad2 = habilidad2
    this.habilidad3 = habilidad3
  }

  /**
   * ? Actualiza las propiedades del personaje con los valores proporcionados.
   * @param {Object} props - Un objeto con las propiedades a actualizar.
   */
  actualizarPropiedades(props) {
    Object.assign(this, props)

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
      if (!armasDict[nombre].icono) console.error(`Personaje: Agregar propiedad icono de ${nombre} en armasDict`)
      this[`arma${ranura}`] = armasDict[nombre]
    }
    else
      this[`arma${ranura}`] = { nombre, descripcion: "Arma sin descripción" }
  }

  /**
   * ? Configura el equipamiento en una ranura específica.
   * @param {number} ranura - El número de ranura del equipamiento.
   * @param {string} nombre - El nombre del equipamiento.
   */
  configurarEquipamiento(ranura, nombre) {
    if (nombre in equiposDict) {
      if (typeof this[`equipo${ranura}`] !== 'string') {
        this.vida -= this[`equipo${ranura}`].vidaMaxima
        this.poder -= this[`equipo${ranura}`].poderMaximo
      }

      this[`equipo${ranura}`] = equiposDict[nombre]

      this.vida += this[`equipo${ranura}`].vidaMaxima
      this.poder += this[`equipo${ranura}`].poderMaximo

    } else console.error(`Personaje: ${nombre} no esta en equiposDict`)
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

      console.error(`Personaje: Agregar habilidad ${nombre} a habilidadesDict`)
    }
  }
}

// ? Contiene los personajes que se pueden utilizar
let listaPersonajes = []
for (let i = 0; i < 6; i++) {
  let nombre = ""

  if (i == 0) {
    // El primer personaje se llama "bienvenidos"
    nombre = "bienvenidos"
  } else {
    // Los demás personajes se llaman "Esbirro 1", "Esbirro 2", ...
    nombre = `Esbirro ${i}`
  }

  // Agrega un nuevo personaje a la lista de personajes.
  listaPersonajes.push(new Personaje({ nombre }))
}


// ! Variables de uso global
const GLOBALES = {
  // ? Indica si el juego esta en modo edición
  modoEdicion: false,
  // ? Indica el indice del personaje en uso
  indexPersonaje: 0,
  // ? Indica el indice del esbirro en uso
  indexEsbirro: 1,
}


{ // ! Funciones generales
  /**
   * ? Muestra los atributos y detalles del personaje actual en la aplicación.
   */
  function mostrarPersonaje() {
    // Obtiene el personaje seleccionado desde la lista de personajes usando el índice global.
    let personajeSeleccionado = listaPersonajes[GLOBALES.indexPersonaje];

    // Crea un objeto para almacenar los atributos del personaje.
    let atributosPersonaje = {
      ataque: personajeSeleccionado.ataque,
      esquiva: personajeSeleccionado.esquiva,
      bloqueo: personajeSeleccionado.bloqueo,
      velocidad: personajeSeleccionado.velocidad,
      vidaMaxima: personajeSeleccionado.vidaMaxima,
      poderMaximo: personajeSeleccionado.poderMaximo,
    };

    // Suma los atributos de los equipos del personaje al objeto atributosPersonaje.
    for (const key in atributosPersonaje) {
      if (personajeSeleccionado.equipo1[key]) atributosPersonaje[key] += personajeSeleccionado.equipo1[key];
      if (personajeSeleccionado.equipo2[key]) atributosPersonaje[key] += personajeSeleccionado.equipo2[key];
      if (personajeSeleccionado.equipo3[key]) atributosPersonaje[key] += personajeSeleccionado.equipo3[key];
    }

    // Actualiza la información en la interfaz de usuario con los atributos del personaje.
    nombreTxt.textContent = personajeSeleccionado.nombre.toUpperCase();
    portadaImg.src = personajeSeleccionado.imagen;

    ataqueTxt.textContent = atributosPersonaje.ataque;
    esquivaTxt.textContent = atributosPersonaje.esquiva;
    bloqueoTxt.textContent = atributosPersonaje.bloqueo;
    velocidadTxt.textContent = atributosPersonaje.velocidad;
    vidaTxt.textContent = personajeSeleccionado.vida;
    poderTxt.textContent = personajeSeleccionado.poder;

    equipo1Txt.textContent = personajeSeleccionado.equipo1.nivel;
    equipo2Txt.textContent = personajeSeleccionado.equipo2.nivel;
    equipo3Txt.textContent = personajeSeleccionado.equipo3.nivel;

    equipo1Img.src = personajeSeleccionado.equipo1.icono;
    equipo2Img.src = personajeSeleccionado.equipo2.icono;
    equipo3Img.src = personajeSeleccionado.equipo3.icono;

    arma1Txt.textContent = capitalizarPrimeraLetra(personajeSeleccionado.arma1.nombre);
    arma1Img.src = personajeSeleccionado.arma1.icono;

    arma2Txt.textContent = capitalizarPrimeraLetra(personajeSeleccionado.arma2.nombre);
    arma2Img.src = personajeSeleccionado.arma2.icono;

    habilidad1Txt.textContent = personajeSeleccionado.habilidad1.nombre.toUpperCase();
    habilidad2Txt.textContent = personajeSeleccionado.habilidad2.nombre.toUpperCase();
    habilidad3Txt.textContent = personajeSeleccionado.habilidad3.nombre.toUpperCase();
  }



  /**
   * ? Cambia entre el personaje principal y el esbirro actual en la aplicación.
   * ? Si el personaje principal está activo, se cambia al esbirro actual y viceversa.
   * ? Además, se actualiza el logo del botón de cambio y se muestra el personaje actual.
   */
  function cambioPersonajeEsbirro() {
    if (GLOBALES.indexPersonaje == 0) {
      // Si el personaje principal está activo, cambia al esbirro actual.
      GLOBALES.indexPersonaje = GLOBALES.indexEsbirro;

      // Cambia el logo del botón de cambio a "personajeico.png".
      esbirrosImg.src = "img/personajeico.png";
    } else {
      // Si el esbirro actual está activo, cambia al personaje principal.
      GLOBALES.indexPersonaje = 0;

      // Cambia el logo del botón de cambio a "esbirrosico.png".
      esbirrosImg.src = "img/esbirrosico.png";
    }

    // Muestra el personaje actual en algún lugar de la aplicación.
    mostrarPersonaje();
  }


  /**
   * ? Navega entre los esbirros en la lista de personajes en una dirección específica.
   * @param {string} direccion - La dirección en la que se navegará ("izquierda" o "derecha").
   */
  function navegarEsbirros(direccion) {
    // Obtiene el índice del esbirro actual desde las variables globales.
    let i = GLOBALES.indexEsbirro

    // Si la dirección es "izquierda", retrocede en la lista de personajes.
    if (direccion == "izquierda") {
      i--
      // Si i se vuelve 0, establece i en el último índice de la lista.
      if (i == 0) i = listaPersonajes.length - 1
    } else {
      // Si la dirección no es "izquierda", avanza en la lista de personajes.
      i++
      // Si i supera el último índice de la lista, establece i en 1.
      if (i > listaPersonajes.length - 1) i = 1
    }

    // Actualiza los índices de esbirro y personaje en las variables globales.
    GLOBALES.indexEsbirro = i
    GLOBALES.indexPersonaje = i
    // Muestra el personaje actual en algún lugar de la aplicación.
    mostrarPersonaje()
  }


  /**
   * ? Muestra la descripción del arma seleccionada
   * @param {number} slot - El slot del arma cuya dirección se va a mostrar
   */
  function mostrarDescripcionArma(slot) {
    let personajeSeleccionado = listaPersonajes[GLOBALES.indexPersonaje]
    contenidoConsola(personajeSeleccionado[`arma${slot}`].descripcion)
  }

  // TODO: función para mostrar descripción de la habilidad
  function mostrarDescripcionHabilidad(slot) {
    let personajeSeleccionado = listaPersonajes[GLOBALES.indexPersonaje]
    contenidoConsola(personajeSeleccionado[`habilidad${slot}`].descripcion)
  }

  // TODO: función para mostrar descripción de equipamiento
  function mostrarDescripcionEquipamiento(slot) {
    let personajeSeleccionado = listaPersonajes[GLOBALES.indexPersonaje]
    contenidoConsola(personajeSeleccionado[`equipo${slot}`].descripcion)
  }

  /**
   * ? Cambia el contenido de la consola del juego
   * @param {string} data - El texto que se va a mostrar por la consola
   */
  function contenidoConsola(data) {
    consolaBtn.textContent = data
  }
}

{ // ! Funciones de personajes
  // TODO: función para reemplazar el personaje actual
  // TODO: función para cambiar la habilidad
  // TODO: función para cambiar el arma
  // TODO: función para cambiar el nombre
  // TODO: función para editar los atributos
}

{ // ! Helpers
  /**
   * ? Capitaliza la primera letra de un string.
   *
   * @param {string} texto - El string que se va a capitalizar.
   * @returns {string} - El string con la primera letra en mayúscula.
   */
  function capitalizarPrimeraLetra(texto) {
    // Verifica si el texto está vacío o es nulo y devuelve el mismo texto sin cambios
    if (!texto) {
      return texto
    }
    // Capitaliza la primera letra del texto y la concatena con el resto del texto en minúsculas
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase()
  }
}

{ // ! Funcionalidad de botones
  // * Boton para cambiar de personaje principal a esbirros y vicebersa
  esbirrosBtn.addEventListener('click', () => cambioPersonajeEsbirro())


  { // * Botonos para navegar entre personajes
    izquierdaBtn.addEventListener('click', () => navegarEsbirros('izquierda'))
    derechaBtn.addEventListener('click', () => navegarEsbirros('derecha'))
  }


  { // * Boton de arma1 y arma2
    // Array que contiene los identificadores de los botones de armas
    const idsBotonesArmas = ['arma1ImgBtn', 'arma1TxtBtn', 'arma2ImgBtn', 'arma2TxtBtn']
    // Itera a través de los identificadores de los botones de armas
    idsBotonesArmas.forEach((idBoton) => {
      // Agrega un evento 'click' a cada botón de arma
      document.getElementById(idBoton).addEventListener('click', () => {
        let ranuraArma = 1

        // Verifica si el identificador incluye '2' para determinar la ranura del arma
        if (idBoton.includes('2')) {
          ranuraArma = 2
        }

        // Comprueba si el modo de edición está activado
        if (GLOBALES.modoEdicion) {
          // TODO: Modificar arma
        } else {
          // Llama a la función 'mostrarDescripcionArma' con la ranura del arma correspondiente
          mostrarDescripcionArma(ranuraArma)
        }
      })
    })
  }

  // TODO: Botones de habilidades
  { // * Boton de habilidad 1, 2 y 3
    // Array que contiene los identificadores de los botones de habilidades
    const idsBotonesHabilidades = ['habilidad1Btn', 'habilidad2Btn', 'habilidad3Btn']
    // Itera a través de los identificadores de los botones de habilidades
    idsBotonesHabilidades.forEach((idBoton, i) => {
      // Agrega un evento 'click' a cada botón de habilidad
      document.getElementById(idBoton).addEventListener('click', () => {
        // Comprueba si el modo de edición está activado
        if (GLOBALES.modoEdicion) {
          // TODO: Modificar habilidades
        } else {
          // Llama a la función 'mostrarDescripcionHablidad' con la ranura de la habilidad correspondiente
          mostrarDescripcionHabilidad(i + 1)
        }
      })
    })
  }

  // TODO: Botones de equipos
  { // * Boton equipo 1, 2 y 3
    // Array que contiene los identificadores de los botones del equipamiento
    const idsBotonesEquipamiento = ['equipo1Btn', 'equipo2Btn', 'equipo3Btn']
    // Itera a través de los identificadores de los botones del equipamiento
    idsBotonesEquipamiento.forEach((idBoton, i) => {
      // Agrega un evento 'click' a cada botón de equipo
      document.getElementById(idBoton).addEventListener('click', () => {
        // Comprueba si el modo de edición está activado
        if (GLOBALES.modoEdicion) {
          // TODO: Modificar equipamiento
        } else {
          // Llama a la función 'mostrarDescripcionEquipamiento' con la ranura del equipamiento correspondiente
          mostrarDescripcionEquipamiento(i + 1)
        }
      })
    })

  }

  // TODO: Boton de accion

  // TODO: Botones de atributos

  // TODO: Boton de experiencia

  // TODO: Boton de portada
}