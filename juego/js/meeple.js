{//VARIABLES

    // En esta sección se establece las estructuras necesarias para establecer el contenido que se muestra
    var edicion = 0

    /*  Cada personaje consta de:
        1. Nombre (Barbaro, mago, etc)
        2. Atributos (Hasta 6)
        3. Equipamiento (Hasta 3 items)
        4. Armas (hasta 2)
        5. Habilidades (Hasta 3)
        6. EXP (Para edición de de atributos)
        7. Una descripción
     */
    var personaje = {

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


    /* 
        Cada arma tiene:
        1. Nombre
        2. Icono
        3. Danno
        4. Descripción
    */
    var arma1 = {

        nombre: "Arma 1",
        icono: "img/nada.png",
        danno: "",
        descripcion: "",

    }


    var arma2 = {

        nombre: "Arma 2",
        icono: "img/nada.png",
        danno: "",
        descripcion: "",

    }


    var arma3 = {

        nombre: "Arma 3",
        icono: "img/nada.png",
        danno: "",
        descripcion: "",

    }


    var arma4 = {

        nombre: "Arma 4",
        icono: "img/nada.png",
        danno: "",
        descripcion: "",

    }

    var armaSeleccionada = 0

    var nombreArma = ""
    var iconoArma = ""
    var dannoArma = ""
    var descripcionArma = ""


    /* 
        Cada habilidad tiene:
        1. Nombre
        2. Descripción
    */
    var habilidad1 = {

        nombre: "",
        descripcion: "",

    }

    var habilidad2 = {

        nombre: "",
        descripcion: "",

    }

    var habilidad3 = {

        nombre: "",
        descripcion: ""

    }

    var habilidad4 = {

        nombre: "",
        descripcion: ""

    }


    var habilidad5 = {

        nombre: "",
        descripcion: ""

    }






    // Texto por defecto de la consola
    var consolaData = "Un juego pensado para los amantes del PVP y como un primer contacto con el mundo del Rol.<br><br>Abre el menu y selecciona el personaje con el que deseas jugar.<br><br> Tambien puedes cambiar armas, hechizos y crear un nuevo personaje a tu gusto.<br><br> Conoce más acerca de la creación de personajes y de Battlerol en<br> www.battlerol.net <br><br> Versión 1.7.0a"

    var estadisticaSeleccionada = 0
    var nombreStatSelect = ""

    var edicionTotal = 0
    var aprender = 0
    var equipar = 0
    var editarNombre = 0

    var comando = ""


    var ventanMascota = 0


}// FIN VARIABLES







{//FUNCIONES

    // Refresca la dirección actual
    window.reload = function () { location.reload(); }

    // Al hacer click  limpia la consola
    consolaBtn.addEventListener('click', function () {

        armas("Dado D20", 0)
        consolaData = ""
    })


    guardarBtn.addEventListener('click', function () {

        edicionTotal = 0
        editarNombre = 0
        guardar.style.display = "none"
        arriba.style.display = "none"
        abajo.style.display = "none"
        consolaData = "Personaje guardado"
    })


    nombreBtn.addEventListener('click', function () {

        if (editarNombre == 1) {
            personaje.nombre = prompt("nuevo nombre")
            editarNombre = 0
        }
    })


    function armas(arma, slot) {



        {//ARMAS//



            if (arma == "Puños") {

                nombreArma = "Puños"
                iconoArma = "img/punno.png"
                dannoArma = 0.75
                descripcionArma = "Arma natural <br> 1 Acción / 75% de ataque como daño físico"
            }



            if (arma == "Patadas") {

                nombreArma = "Patadas"
                iconoArma = "img/patada.png"
                dannoArma = 1
                descripcionArma = "Arma natural <br> 2 Acciones / 100% de ataque como daño físico"

            }


            if (arma == "Una Mano") {

                nombreArma = "Una Mano"
                iconoArma = "img/daga.png"
                dannoArma = 1
                descripcionArma = "Arma a una mano <br> 1 Acción / 100% de ataque como daño físico"

            }

            if (arma == "Dos Manos") {

                nombreArma = "Dos Manos"
                iconoArma = "img/espada.png"
                dannoArma = 1.5
                descripcionArma = "Arma a dos manos <br> 2 Acciones / 150% de ataque como daño físico"

            }

            if (arma == "Arco") {

                nombreArma = "Arco"
                iconoArma = "img/arco.png"
                dannoArma = 1.75
                descripcionArma = "Arma a distancia <br>  3 casilleros x ataque / 3 Acciones / 175% de ataque como daño físico"

            }

            if (arma == "Arrojadiza") {

                nombreArma = "Arrojadiza"
                iconoArma = "img/arrojadiza.png"
                dannoArma = 0.75
                descripcionArma = "Arma arrojadiza <br> 3 casillero x ataque / 2 Acciones / 75% de ataque como daño físico"

            }

            if (arma == "Escudo") {

                nombreArma = "Escudo"
                iconoArma = "img/escudo.png"
                dannoArma = 0.5
                descripcionArma = "Escudo <br> Permite bloquear ataques fuera de turno / 1 Accion / 50% de ataque como daño físico"

            }





            if (arma == "Mano") {

                nombreArma = "Mano"
                iconoArma = "img/magia.png"
                dannoArma = 1
                descripcionArma = "Arma a distancia <br>  1 casillero x ataque / 1 Acción / 100% de ataque como daño mágico"

            }

            if (arma == "Varita") {

                nombreArma = "Varita"
                iconoArma = "img/varita.png"
                dannoArma = 1
                descripcionArma = "Arma a distancia <br>  3 casilleros x ataque / 1 Accion / 100% de ataque como daño mágico"

            }

            if (arma == "Baculo") {

                nombreArma = "Baculo"
                iconoArma = "img/baculo.png"
                dannoArma = 1.5
                descripcionArma = "Arma a distancia <br>  2 casilleros x ataque / 2 Acciones / 150% de ataque como daño mágico"

            }

            if (arma == "Runa") {

                nombreArma = "Runa"
                iconoArma = "img/runa.png"
                dannoArma = 0.75
                descripcionArma = "Arma a distancia <br> 3 casilleros x ataque / 2 Acciones / 75% de ataque como daño mágico"

            }

            if (arma == "Totem") {

                nombreArma = "Totem"
                iconoArma = "img/totem.png"
                dannoArma = 1
                descripcionArma = "Arma a distancia <br>  2 casilleros x ataque / 2 Acciones / 100% de ataque como daño mágico"

            }

            if (arma == "Hoja Runa") {

                nombreArma = "Hoja Runa"
                iconoArma = "img/hojaruna.png"
                dannoArma = 1
                descripcionArma = "Arma mixta <br>  1 casilleros x ataque / 2 Acciones / 100% de ataque como daño fíisico o mágico"

            }



            if (arma == "Arma 1") {

                nombreArma = "Arma 1"
                iconoArma = "img/nada.png"
                dannoArma = 2
                descripcionArma = "Arma principal del personaje"

            }

            if (arma == "Arma 2") {

                nombreArma = "Arma 2"
                iconoArma = "img/nada.png"
                dannoArma = 2
                descripcionArma = "Arma secundaria del personaje"

            }

            if (arma == "Dado D20") {

                nombreArma = "Dado D20"
                iconoArma = "img/nada.png"
                dannoArma = 0
                descripcionArma = "TIRADA LIMPIA"

            }











            if (arma == "Mordisco") {

                nombreArma = "Mordisco"
                iconoArma = "img/mordisco.png"
                dannoArma = 1.5
                descripcionArma = "Mordisco Arma natural <br> / 2 Acciones / 150% de ataque como daño fíisico"

            }

            if (arma == "Garras") {

                nombreArma = "Garras"
                iconoArma = "img/garras.png"
                dannoArma = 1
                descripcionArma = "Garras <br> / 1 Accion / 100% de ataque como daño fíisico"

            }


            if (arma == "Aliento") {

                nombreArma = "Aliento"
                iconoArma = "img/nada.png"
                dannoArma = 2.5
                descripcionArma = "ALIENTO <br> Arma a distancia / 3 Acciones <br> 250% de ataque como daño mágico <br> Distancia máxima de 1 casillero x punto de ataque"

            }






            if (arma == "Pinzas") {

                nombreArma = "Pinzas"
                iconoArma = "img/pinzas.png"
                dannoArma = 1.75
                descripcionArma = "PINZAS <br> Arma cuerpo a cuerpo / 2 Acciones <br> 175% de ataque como daño físico."

            }


            if (arma == "Mente") {

                nombreArma = "Mente"
                iconoArma = "img/mente.png"
                dannoArma = 1
                descripcionArma = "MENTE <br> Arma a distancia / 1 Accion <br> 100% de ataque como daño mágico. <br> Distancia máxima de 2 casillero x punto de ataque"

            }


            if (arma == "Ramas") {

                nombreArma = "Ramas"
                iconoArma = "img/ramas.png"
                dannoArma = 1.25
                descripcionArma = "RAMAS <br> Arma cuerpo a cuerpo / 2 Acciones <br> 125% de ataque como daño físico."

            }


            if (arma == "Esporas") {

                nombreArma = "Esporas"
                iconoArma = "img/ramas.png"
                dannoArma = 1.25
                descripcionArma = "ESPORAS <br> Arma a distancia / 2 Acciones <br> 125% de ataque como daño mágico. <br> Distancia máxima de 1 casillero x punto de ataque"

            }


            if (arma == "Alas") {

                nombreArma = "Alas"
                iconoArma = "img/alas.png"
                dannoArma = 1.25
                descripcionArma = "ALAS <br> Arma a distancia / 2 Acciones <br> 125% de ataque como daño mágico. <br> Distancia máxima de 1 casillero x punto de ataque"

            }


            if (arma == "Mirada") {

                nombreArma = "Mirada"
                iconoArma = "img/mirada.png"
                dannoArma = 1.25
                descripcionArma = "MIRADA <br> Arma a distancia / 2 Acciones <br> 125% de ataque como daño mágico. <br> Distancia máxima de 2 casilleros x punto de ataque"

            }


            if (arma == "Cuernos") {

                nombreArma = "Cuernos"
                iconoArma = "img/cuernos.png"
                dannoArma = 1.25
                descripcionArma = "CUERNOS <br> Arma a distancia / 2 Acciones <br> 125% de ataque como daño mágico. <br> Distancia máxima de 1 casillero x punto de ataque"

            }



            if (arma == "Cascos") {

                nombreArma = "Cascos"
                iconoArma = "img/cascos.png"
                dannoArma = 1.25
                descripcionArma = "CASCOS <br> Arma cuerpo a cuerpo / 2 Acciones <br> 125% de ataque como daño físico."

            }


            if (arma == "Tentaculos") {

                nombreArma = "Tentaculos"
                iconoArma = "img/tentaculos.png"
                dannoArma = 1.25
                descripcionArma = "TENTACULOS <br> Arma mixta cuerpo a cuerpo / 2 Acciones <br> 125% de ataque como daño mágico o mágico."

            }









        }//FIN ARMAS




        {//AL TOCARLO MANDA VALORES AL ARMA EQUIPADA

            if (equipar == 0) {


                if (slot == 1) {




                    armaSeleccionada = 1

                    arma1.nombre = nombreArma
                    arma1.icono = iconoArma
                    arma1.danno = dannoArma
                    arma1.descripcion = descripcionArma



                } else if (slot == 2) {



                    armaSeleccionada = 2

                    arma2.nombre = nombreArma
                    arma2.icono = iconoArma
                    arma2.danno = dannoArma
                    arma2.descripcion = descripcionArma

                } else if (slot == 3) {



                    armaSeleccionada = 3

                    arma3.nombre = nombreArma
                    arma3.icono = iconoArma
                    arma3.danno = dannoArma
                    arma3.descripcion = descripcionArma


                } else if (slot == 4) {



                    armaSeleccionada = 4

                    arma4.nombre = nombreArma
                    arma4.icono = iconoArma
                    arma4.danno = dannoArma
                    arma4.descripcion = descripcionArma

                }

                consolaData = descripcionArma + "<br>"


            } else if (equipar == 1) {

                if (slot == 1) {

                    modalArmas.style.display = "grid"
                    armaSeleccionada = 1




                }

                if (slot == 2) {


                    modalArmas.style.display = "grid"

                    armaSeleccionada = 2
                }




                unaMano.addEventListener('click', function () { armas("Una Mano", armaSeleccionada), modalArmas.style.display = "none" })
                dosManos.addEventListener('click', function () { armas("Dos Manos", armaSeleccionada), modalArmas.style.display = "none" })
                arco.addEventListener('click', function () { armas("Arco", armaSeleccionada), modalArmas.style.display = "none" })
                arrojadizas.addEventListener('click', function () { armas("Arrojadiza", armaSeleccionada), modalArmas.style.display = "none" })
                naturales.addEventListener('click', function () { armas("Puños", armaSeleccionada), modalArmas.style.display = "none" })
                escudo.addEventListener('click', function () { armas("Escudo", armaSeleccionada), modalArmas.style.display = "none" })
                magia.addEventListener('click', function () { armas("Mano", armaSeleccionada), modalArmas.style.display = "none" })
                varita.addEventListener('click', function () { armas("Varita", armaSeleccionada), modalArmas.style.display = "none" })
                baculo.addEventListener('click', function () { armas("Baculo", armaSeleccionada), modalArmas.style.display = "none" })
                totem.addEventListener('click', function () { armas("Totem", armaSeleccionada), modalArmas.style.display = "none" })
                hojaRuna.addEventListener('click', function () { armas("Hoja Runa", armaSeleccionada), modalArmas.style.display = "none" })
                runa.addEventListener('click', function () { armas("Runa", armaSeleccionada), modalArmas.style.display = "none" })






                equipar = 0
                aprender = 0

                guardar.style.display = "none"
                edicionTotal = 0
                editarNombre = 0


            }





        }// FIN MANDAR ARMA
        cerrarModales()

    }

    icoSlot1Btn.addEventListener('click', function () { armas(arma1.nombre, 1) })
    icoSlot2Btn.addEventListener('click', function () { armas(arma2.nombre, 2) })
    txtSlot1Btn.addEventListener('click', function () { armas(arma1.nombre, 1) })
    txtSlot2Btn.addEventListener('click', function () { armas(arma2.nombre, 2) })

    arma2MascotaBtn.addEventListener('click', function () { armas(mascota.arma1, 4) })
    arma1MascotaBtn.addEventListener('click', function () { armas(mascota.arma2, 3) })
    




    function habilidades(slot, poder) {

        if (aprender == 1) {

            if (slot == 1) {

                habilidad1.nombre = personaje.habilidad1 = prompt("ingrese habilidad",).toUpperCase()

                personaje.habilidad1 = removeAccents(habilidad1.nombre);




            }

            if (slot == 2) {

                habilidad2.nombre = personaje.habilidad2 = prompt("ingrese habilidad",).toUpperCase()

                personaje.habilidad2 = removeAccents(habilidad2.nombre)


            }

            if (slot == 3) {

                habilidad3.nombre = personaje.habilidad3 = prompt("ingrese habilidad",).toUpperCase()
                personaje.habilidad3 = removeAccents(habilidad3.nombre)


            }

            if (slot == 4) {

                habilidad4.nombre = mascota.habilidad1 = prompt("ingrese habilidad",).toUpperCase()
                mascota.habilidad1 = removeAccents(habilidad4.nombre)


            }


            if (slot == 5) {

                habilidad5.nombre = mascota.habilidad2 = prompt("ingrese habilidad",).toUpperCase()
                mascota.habilidad2 = removeAccents(habilidad5.nombre)


            }

            aprender = 0


        } else {

            var descripcionPoder = ""

            {//PODERES

                if (poder == "") {

                    edicion = 0
                    edicionTotal = 0
                    editarNombre = 0
                }

                //FISICOS 

                if (poder == "MACHACAR") {

                    descripcionPoder = "Impacta en el objetivo generando daño crítico y quitandole mitigación durante 1 turno <br> Poder min(6)"
                }

                if (poder == "IRA CIEGA") {

                    descripcionPoder = "Al matar un enemigo, puedes atacar a cualquier criatura o personaje que este a tu alcance, sin necesidad de acciones <br> Poder min(1)"
                }

                if (poder == "MASESTRO DE ARMAS") {

                    descripcionPoder = "Eres competente con todas las armas, al matar un enemigo puedes hacerte con la suya <br> Habilidad  Pasiva"
                }

                if (poder == "DUELO") {

                    descripcionPoder = "En combate 1 vs 1 obtiene +3 a la esquiva y ataque <br> Habilidad  Pasiva"
                }

                if (poder == "CORTE PROFUNDO") {

                    descripcionPoder = "Daña al obejtivo y deja un sangrado que genera 3 puntos de daño por turno durante 3 turnos (no mitigables) <br> Poder min(6)"
                }

                if (poder == "ATAQUE RAPIDO") {

                    descripcionPoder = "Avanza hacia el objetivo y lo ataca en una acción combinada / distancia max(velocidad x 2) <br> Poder min(3) / Acciones(Arma)"
                }

                if (poder == "COBERTURA") {

                    descripcionPoder = "Aumenta 300% la mitigacíon ante proyectiles físicos durante 3 turnos (al moverse se pierde la cobertura) <br> Poder(3) / Requiere Escudo"
                }

                if (poder == "EMBESTIDA CON ESCUDO") {

                    descripcionPoder = "Golpeas al objetivo generandole 200% daño físico y derribandolo<br> Poder(3) / Requiere Escudo"
                }

                if (poder == "ATAQUE PODEROSO") {

                    descripcionPoder = "Carga tu golpe con energía<br> Poder min(1) / Sin Requerimentos"
                }


                if (poder == "ATAQUE MULTIPLE") {

                    descripcionPoder = "Una serie de golpes, los cuales suman todo su daño, generandolo de manera explosiva al finalizar la habilidad <br> Poder min(3)"
                }

                if (poder == "GOLPE DE CHI") {

                    descripcionPoder = "Un poderoso empujon cargado de energía, que genera daño físico, aturde al objetivo 1 turno y lo hace retroceder (ataque x casilleros)<br> Poder min(6)"
                }


                if (poder == "PATADA VOLADORA") {

                    descripcionPoder = "Te lanzas hacia el objetivo a una distancia máxima de (velocidad x casilleros), al golpearlo generas 200% de daño físico + 1 punto de daño por metro recorrido.<br> Poder min(3) / Sin Requisitos"
                }


                if (poder == "DESARMAR") {

                    descripcionPoder = "Desarmas al objetivo, dejando caer su arma a 1 casillero de distancia a elección.<br> Poder(3)"
                }

                if (poder == "SIGILO") {

                    descripcionPoder = "Si tu objetivo se encuentra en combate con otro personaje o criatura, obtienes + 3 al ataque.<br> Pasiva"
                }

                if (poder == "TORBELLINO") {

                    descripcionPoder = "Giras tu con tu arma generando 50% de daño a todos los objetivos en tu rango de alcance, puedes caminar mientras la habilidad esta activa.<br> Poder min(6)"
                }


                if (poder == "FLECHAS MULTIPLES") {

                    descripcionPoder = "Lanzas 3 flechas juntas, las cuales haran 50% de daño de manera acumulativa si más de un proyectil impacta en el mismo objetivo.( se debe realizar una tirada por cada flecha)<br> Poder(3) / Requiere arco"
                }

                if (poder == "FLECHA ENERGIZADA") {

                    descripcionPoder = "Cargas con energía tus flechas aumentando su daño.<br> Poder min(1) / Requiere arco"
                }

                if (poder == "FLECHA ELEMENTAL") {

                    descripcionPoder = "Cambia el tipo de daño elemental que produce tu flecha.<br> Poder (3) / Requiere arco"
                }


                if (poder == "INVOCAR") {

                    descripcionPoder = "Ahora puedes manifestar criaturas elementales."

                }

                if (poder == "GOLPE VAMPIRICO") {

                    descripcionPoder = "Absorbes vida del objetivo para ti mismo. <br> Poder min(6)."

                }

                if (poder == "INCANSABLE") {

                    descripcionPoder = "Habilidad pasiva que brinda +1 acción."

                }

                if (poder == "ATAQUE DOBLE") {

                    descripcionPoder = "Realiza dos ataques, con armas gemelas en la misma cantidad de acciones. <br> Poder min(3)"

                }

                //FIN FISICOS


                //MAGICOS

                if (poder == "EXORCISMO") {

                    descripcionPoder = "Genera daño sagrado y aturde al objetivo durante 1 turno <br> Poder min(3)"
                }

                if (poder == "BOLA DE FUEGO") {

                    descripcionPoder = "Genera daño de fuego. Los golpes cíticos incendian al objetivo, lo que le genera 3 puntos de daño no mitigable, durante 3 turnos. <br> Poder min(3)"
                }

                if (poder == "BOLA DE HIELO") {

                    descripcionPoder = "Genera daño de hielo. Los golpes críticos congelan al objetivo, quitándole mitad de velocidad y toda mitigación hacia este elemento, durante 3 turnos. <br> Poder min(3)"
                }

                if (poder == "SENTENCIA") {

                    descripcionPoder = "El objetivo pierde toda mitigación durante 3 turno <br> Poder(3)"
                }

                if (poder == "SANAR") {

                    descripcionPoder = "Restaura al obejetivo 1 x 1 puntos de salud <br> Poder min(1)"
                }

                if (poder == "MISIL ARCANO") {

                    descripcionPoder = "Genera daño etereo<br> Poder min(1)"
                }

                if (poder == "EXPLOSION DE ESCARCHA") {

                    descripcionPoder = "Una onda expansiva que congela a todos los enemigos en un radio de (ataque x casillero) / lo que les reduce a la mitad su velocidad y los deja sin mitigación hacia este elemento, durante 3 turnos.<br> Poder min(6)"
                }

                if (poder == "INVISIVILIDAD") {

                    descripcionPoder = "Te vuelves indetectable para los demas durante 3 turnos, al atacar pierdes el efecto.<br> Poder min(6)"

                }

                if (poder == "ENRAIZAR") {

                    descripcionPoder = "Unas poderosas raices surgen del suelo sujetando al objetivo e impidiendole moverse del lugar durante 3 turnos.<br> Poder min(3) / El objetivo aun puede atacar, e incluso atacar a las raices, las cuales tienen 50 puntos de vida."

                }

                if (poder == "ENVENENAR") {

                    descripcionPoder = "Envenenas al objetivo generandole 100% de daño mágico durante 3 turnos.<br> Poder (6)"

                }

                if (poder == "LICANTROPIA") {

                    descripcionPoder = "Puedes tener garras y colmillos como armas naturales durante 3 turnos.<br> Poder o Poder(3) <br> Escribe el comando: /licántropo"

                }

                if (poder == "TERREMOTO") {

                    descripcionPoder = "Vuelves inestable un area de (ataque x casilleros) durante 3 turnos que se renuevan con cada lanzamiento. Atravezar este terreno cuesta doble de movimiento, podras lanzar el ataque nuevamente cada vez que alguien pase sobre el area, en caso de acertar este se caerá. Los golpes criticos de terremoto en areas inestables inmovilizan al objetivo. <br> Poder(3)"

                }

                if (poder == "RELAMPAGO") {

                    descripcionPoder = "Genera daño de electricidad y rebota en hasta 3 objetivos que no esten separados por mas de (ataque x casilleros), los golpes críticos dejan al objetivo electrificado.<br> Poder min(3)"

                }

                if (poder == "SOBRECARGA") {

                    descripcionPoder = "Sobrecargas un objetivo que se encuentre electrificado generando 500% de daño mágico.<br> Poder min(3)"

                }

                if (poder == "CONTROL MENTAL") {

                    descripcionPoder = "Controlas el personaje o npc durante 1 turno. <br> Poder min(9)"

                }

                if (poder == "CONFUNDIR") {

                    descripcionPoder = "Confunde al objetivo, haciendo que cualquier ataque que este haga y falle, durante 3 turno, sea un golpe certero hacia el mismo o un aliado cercano. Una pifia se considera crítico para la víctima.<br> Poder min(6)"

                }

                if (poder == "MIEDO") {

                    descripcionPoder = "El objetivo gasta todas sus acciones corriendo en dirección aleatoria, siempre alejandose de quien lanzó el hechizo. En caso de un escenario cerrado, correrá y quedara en la esquina mas lejana.<br> Poder min(6)"

                }

                if (poder == "TSUNAMI") {

                    descripcionPoder = "Una poderosa ola en forma de cono que se expande hasta 1 casillero x ataque. Empuja todo a su paso a una distancia igual a la mitad del ataque y genera daño mágico de agua.<br> Poder min(9)"

                }

                if (poder == "DRENAR") {

                    descripcionPoder = "Transfiere vida, energía o maná del objetivo al conjurador, puedes apostar una de estas poders para aumentar el efecto, la cual solo se consumira si fallas el ataque.<br> Poder min(0)"

                }

                if (poder == "TRANSMUTAR") {

                    descripcionPoder = "Convierte vida energía o maná en cualquiera de ellas, puede usarse sobre si mismo o sobre otros personajes.<br> Poder min(1)"

                }

                if (poder == "DERRIBO") {

                    descripcionPoder = "Derriba al objetivo.<br> Poder(3)"

                }

                if (poder == "DESGARRO") {

                    descripcionPoder = "Una herida que genera 3 puntos de daño no mitigable durante 3 turnos.<br> Poder(6)"

                }


                if (poder == "TRITURAR") {

                    descripcionPoder = "Rompe los huesos de la víctima, causando daño físico y dejando a la vícitima con -1 a la velocidad durante 3 turnos, este penalizador se puede acumular, el tiempo de efecto se reinicia al hacerlo.<br> Poder(6)"

                }


                if (poder == "PETRIFICAR") {

                    descripcionPoder = "Rompe los huesos de la víctima, causando daño físico y dejando a la vícitima con -1 a la velocidad durante 3 turnos, este penalizador se puede acumular, el tiempo de efecto se reinicia al hacerlo, una vez sin velocidad el objetivo recibe doble de daño.<br> Poder(6)"

                }

                //FIN MAGICOS


            }//FIN PODERES


            if (slot == 1) {

                habilidad1.nombre = personaje.habilidad1
                habilidad1.descripcion = descripcionPoder
                consolaData = personaje.habilidad1 + "<br>" + habilidad1.descripcion
            }

            if (slot == 2) {

                habilidad2.nombre = personaje.habilidad2
                habilidad2.descripcion = descripcionPoder
                consolaData = personaje.habilidad2 + "<br>" + habilidad2.descripcion
            }

            if (slot == 3) {

                habilidad3.nombre = personaje.habilidad3
                habilidad3.descripcion = descripcionPoder
                consolaData = personaje.habilidad3 + "<br>" + habilidad3.descripcion
            }

            if (slot == 4) {

                habilidad4.nombre = mascota.habilidad1
                habilidad4.descripcion = descripcionPoder
                consolaData = mascota.habilidad1 + "<br>" + habilidad4.descripcion
            }

            if (slot == 5) {

                habilidad5.nombre = mascota.habilidad2
                habilidad5.descripcion = descripcionPoder
                consolaData = mascota.habilidad2 + "<br>" + habilidad5.descripcion
            }




            cerrarModales()


        }
        equipar = 0
        aprender = 0

        edicionTotal = 0
        editarNombre = 0

        guardar.style.display = "none"
        arriba.style.display = "none"
        abajo.style.display = "none"

    }

    hechizo1Btn.addEventListener('click', function () { habilidades(1, personaje.habilidad1) })
    hechizo2Btn.addEventListener('click', function () { habilidades(2, personaje.habilidad2) })
    hechizo3Btn.addEventListener('click', function () { habilidades(3, personaje.habilidad3) })

    habilidadMascota1Btn.addEventListener('click', function () { habilidades(4, mascota.habilidad1) })
    habilidadMascota2Btn.addEventListener('click', function () { habilidades(5, mascota.habilidad2) })





    {//CONSOLA

        menuBtn.addEventListener('click', () => {


            if (edicion == 0) {

                modalPersonajes.style.display = "grid"


                {//PERSONAJES




                    guerrero.addEventListener('click', function () {

                        edicionTotal = 0

                        personaje.experiencia = 0

                        personaje.nombre = "GUERRERO"
                        personaje.icono = "img/guerrero.png"

                        personaje.ataque = 4
                        personaje.esquiva = 2
                        personaje.mitigacion = 5
                        personaje.velocidad = 3
                        personaje.vida = 40
                        personaje.vidaMaxima = 40
                        personaje.poder = 40
                        personaje.poderMaxima = 40

                        personaje.maestria1Nombre = ""
                        personaje.maestria1 = 0

                        personaje.maestria2Nombre = ""
                        personaje.maestria2 = 0

                        personaje.maestria3Nombre = ""
                        personaje.maestria3 = 0


                        arma1.nombre = "Una Mano"
                        arma2.nombre = "Escudo"

                        personaje.habilidad1 = "EMBESTIDA CON ESCUDO"
                        personaje.habilidad2 = "COBERTURA"
                        personaje.habilidad3 = "ATAQUE PODEROSO"

                        edicion = 0

                        armas(arma1.nombre, 1)
                        armas(arma2.nombre, 2)
                        consolaData = "<br>" + ""

                        modalPersonajes.style.display = "none"
                        modalArmas.style.display = "none"
                        guardar.style.display = "none"

                        modalMascotas.style.display = "none"

                        consolaData = "Combatiente cuerpo a cuerpo, con mucha resistencia pero muy poco daño base."
                    })


                    chaman.addEventListener('click', function () {

                        edicionTotal = 0

                        personaje.experiencia = 0

                        personaje.nombre = "CHAMAN"

                        personaje.icono = "img/chaman.png"

                        personaje.ataque = 5
                        personaje.esquiva = 3
                        personaje.mitigacion = 3
                        personaje.velocidad = 3

                        personaje.vida = 40
                        personaje.vidaMaxima = 40
                        personaje.poder = 43
                        personaje.poderMaxima = 43

                        personaje.maestria1Nombre = ""
                        personaje.maestria1 = 0

                        personaje.maestria2Nombre = ""
                        personaje.maestria2 = 0

                        personaje.maestria3Nombre = ""
                        personaje.maestria3 = 0

                        arma1.nombre = "Mano"
                        arma2.nombre = "Totem"

                        personaje.habilidad1 = "RELAMPAGO"
                        personaje.habilidad2 = "TERREMOTO"
                        personaje.habilidad3 = "SOBRECARGA"

                        edicion = 0

                        armas(arma1.nombre, 1)
                        armas(arma2.nombre, 2)
                        consolaData = "<br>" + ""

                        modalPersonajes.style.display = "none"
                        modalArmas.style.display = "none"
                        guardar.style.display = "none"

                        modalMascotas.style.display = "none"

                        consolaData = "Combatiente mágico elemental, utiliza totems para ampliar su area de efectos."
                    })


                    barbaro.addEventListener('click', function () {

                        edicionTotal = 0

                        personaje.experiencia = 0

                        personaje.nombre = "BARBARO"
                        personaje.icono = "img/barbaro.png"

                        personaje.ataque = 6
                        personaje.esquiva = 1
                        personaje.mitigacion = 1
                        personaje.velocidad = 4
                        personaje.vida = 33
                        personaje.vidaMaxima = 33
                        personaje.poder = 38
                        personaje.poderMaxima = 38

                        personaje.maestria1Nombre = ""
                        personaje.maestria1 = 0

                        personaje.maestria2Nombre = ""
                        personaje.maestria2 = 0

                        personaje.maestria3Nombre = ""
                        personaje.maestria3 = 0



                        arma1.nombre = "Dos Manos"
                        arma2.nombre = "Patadas"

                        personaje.habilidad1 = "TORBELLINO"
                        personaje.habilidad2 = "INCANSABLE"
                        personaje.habilidad3 = "ATAQUE PODEROSO"

                        edicion = 0

                        armas(arma1.nombre, 1)
                        armas(arma2.nombre, 2)
                        consolaData = "<br>" + ""

                        modalPersonajes.style.display = "none"
                        modalArmas.style.display = "none"
                        guardar.style.display = "none"

                        modalMascotas.style.display = "none"

                        consolaData = "Combatiente cuerpo a cuerpo que genera el mayor daño posible sin pensar mucho en su seguridad."
                    })


                    picaro.addEventListener('click', function () {

                        edicionTotal = 0

                        personaje.experiencia = 0

                        personaje.nombre = "PICARO"
                        personaje.icono = "img/picaro.png"

                        personaje.ataque = 4
                        personaje.esquiva = 4
                        personaje.mitigacion = 2
                        personaje.velocidad = 4

                        personaje.vida = 25
                        personaje.vidaMaxima = 25
                        personaje.poder = 46
                        personaje.poderMaxima = 46

                        personaje.maestria1Nombre = ""
                        personaje.maestria1 = 0

                        personaje.maestria2Nombre = ""
                        personaje.maestria2 = 0

                        personaje.maestria3Nombre = ""
                        personaje.maestria3 = 0

                        arma1.nombre = "Una Mano"
                        arma2.nombre = "Una Mano"

                        personaje.habilidad1 = "ATAQUE DOBLE"
                        personaje.habilidad2 = "SIGILO"
                        personaje.habilidad3 = "DESARMAR"

                        edicion = 0

                        armas(arma1.nombre, 1)
                        armas(arma2.nombre, 2)
                        consolaData = "<br>" + ""

                        modalPersonajes.style.display = "none"
                        modalArmas.style.display = "none"
                        guardar.style.display = "none"

                        modalMascotas.style.display = "none"

                        consolaData = "Combatiente sigiloso y rápido, siempre intenta inflingir daño sin quedar expuesto."
                    })


                    mago.addEventListener('click', function () {

                        edicionTotal = 0

                        personaje.experiencia = 0

                        personaje.nombre = "MAGO"
                        personaje.icono = "img/mago.png"

                        personaje.ataque = 5
                        personaje.esquiva = 3
                        personaje.mitigacion = 1
                        personaje.velocidad = 4

                        personaje.vida = 20
                        personaje.vidaMaxima = 20
                        personaje.poder = 54
                        personaje.poderMaxima = 54

                        personaje.maestria1Nombre = ""
                        personaje.maestria1 = 0

                        personaje.maestria2Nombre = ""
                        personaje.maestria2 = 0

                        personaje.maestria3Nombre = ""
                        personaje.maestria3 = 0

                        arma1.nombre = "Varita"
                        arma2.nombre = "Una Mano"

                        personaje.habilidad1 = "BOLA DE HIELO"
                        personaje.habilidad2 = "EXPLOSION DE ESCARCHA"
                        personaje.habilidad3 = "CONFUNDIR"

                        edicion = 0

                        armas(arma1.nombre, 1)
                        armas(arma2.nombre, 2)
                        consolaData = "<br>" + ""

                        modalPersonajes.style.display = "none"
                        modalArmas.style.display = "none"
                        guardar.style.display = "none"

                        modalMascotas.style.display = "none"

                        consolaData = "Experto en el manejo de armas y habilidades mágicas, mantiene distancia de sus enemigos."
                    })


                    paladin.addEventListener('click', function () {

                        edicionTotal = 0

                        personaje.experiencia = 0

                        personaje.nombre = "PALADIN"
                        personaje.icono = "img/paladin.png"

                        personaje.ataque = 5
                        personaje.esquiva = 3
                        personaje.mitigacion = 4
                        personaje.velocidad = 3

                        personaje.vida = 30
                        personaje.vidaMaxima = 30
                        personaje.poder = 41
                        personaje.poderMaxima = 41

                        personaje.maestria1Nombre = ""
                        personaje.maestria1 = 0

                        personaje.maestria2Nombre = ""
                        personaje.maestria2 = 0

                        personaje.maestria3Nombre = ""
                        personaje.maestria3 = 0

                        arma1.nombre = "Hoja Runa"
                        arma2.nombre = "Mano"

                        personaje.habilidad1 = "SANAR"
                        personaje.habilidad2 = "SENTENCIA"
                        personaje.habilidad3 = "EXORCISMO"

                        edicion = 0

                        armas(arma1.nombre, 1)
                        armas(arma2.nombre, 2)
                        consolaData = "<br>" + ""

                        modalPersonajes.style.display = "none"
                        modalArmas.style.display = "none"
                        guardar.style.display = "none"

                        modalMascotas.style.display = "none"

                        consolaData = "Combatiente mixto, con buen daño cuerpo a cuerpo y control de habilidades mágicas."


                    })

                    explorador.addEventListener('click', function () {

                        edicionTotal = 0

                        personaje.experiencia = 0

                        personaje.nombre = "EXPLORADOR"
                        personaje.icono = "img/explorador.png"

                        personaje.ataque = 4
                        personaje.esquiva = 3
                        personaje.mitigacion = 1
                        personaje.velocidad = 5

                        personaje.vida = 20
                        personaje.vidaMaxima = 20
                        personaje.poder = 39
                        personaje.poderMaxima = 39


                        personaje.maestria1Nombre = ""
                        personaje.maestria1 = 0

                        personaje.maestria2Nombre = ""
                        personaje.maestria2 = 0

                        personaje.maestria3Nombre = ""
                        personaje.maestria3 = 0

                        arma1.nombre = "Arco"
                        arma2.nombre = "Una Mano"

                        personaje.habilidad1 = "FLECHAS MULTIPLES"
                        personaje.habilidad2 = "FLECHA ENERGIZADA"
                        personaje.habilidad3 = "INVOCAR"

                        edicion = 0

                        armas(arma1.nombre, 1)
                        armas(arma2.nombre, 2)
                        consolaData = "<br>" + ""







                        mascota.nombre = "LOBO"
                        mascota.imagen = "img/lobo.png"
            
            
                        mascota.ataque = 3
                        mascota.esquiva = 2
                        mascota.mitigacion = 1
                        mascota.velocidad = 6
                        mascota.vida = 19
                        mascota.vidaMaxima = 19
                        mascota.poder = 22
                        mascota.poderMaximo = 22
            
                        mascota.arma1 = "Mordisco"
                        mascota.arma2 = "Garras"
            
                        mascota.habilidad1 = "DERRIBO"
                        mascota.habilidad2 = "DESGARRO"
            
                        mascota.descripcion = "LOBO <br> Criatura de Sangre <br> Coste de invocación: 20"







                        modalPersonajes.style.display = "none"
                        modalArmas.style.display = "none"
                        guardar.style.display = "none"

                        modalMascotas.style.display = "none"


                        consolaData = "Combatiente de larga distancia, utiliza invocaciones a modo de mascotas."
                    })


                    monje.addEventListener('click', function () {

                        edicionTotal = 0

                        personaje.experiencia = 0

                        personaje.nombre = "MONJE"
                        personaje.icono = "img/monje.png"

                        personaje.ataque = 4
                        personaje.esquiva = 4
                        personaje.mitigacion = 3
                        personaje.velocidad = 4

                        personaje.vida = 23
                        personaje.vidaMaxima = 23
                        personaje.poder = 39
                        personaje.poderMaxima = 39

                        personaje.maestria1Nombre = ""
                        personaje.maestria1 = 0

                        personaje.maestria2Nombre = ""
                        personaje.maestria2 = 0

                        personaje.maestria3Nombre = ""
                        personaje.maestria3 = 0

                        arma1.nombre = "Puños"
                        arma2.nombre = "Patadas"

                        personaje.habilidad1 = "ATAQUE MULTIPLE"
                        personaje.habilidad2 = "GOLPE DE CHI"
                        personaje.habilidad3 = "DESARMAR"

                        edicion = 0

                        armas(arma1.nombre, 1)
                        armas(arma2.nombre, 2)
                        consolaData = "<br>" + ""

                        modalPersonajes.style.display = "none"
                        modalArmas.style.display = "none"
                        guardar.style.display = "none"

                        modalMascotas.style.display = "none"

                        consolaData = "Combatiente cuerpo a cuerpo con armas naturales, aumenta el daño utilizando mucha energía."
                    })

                    druida.addEventListener('click', function () {

                        edicionTotal = 0

                        personaje.experiencia = 0

                        personaje.nombre = "DRUIDA"
                        personaje.icono = "img/druida.png"

                        personaje.ataque = 5
                        personaje.esquiva = 2
                        personaje.mitigacion = 5
                        personaje.velocidad = 3

                        personaje.vida = 25
                        personaje.vidaMaxima = 25
                        personaje.poder = 40
                        personaje.poderMaxima = 40

                        personaje.maestria1Nombre = ""
                        personaje.maestria1 = 0

                        personaje.maestria2Nombre = ""
                        personaje.maestria2 = 0

                        personaje.maestria3Nombre = ""
                        personaje.maestria3 = 0

                        arma1.nombre = "Baculo"
                        arma2.nombre = "Runa"

                        personaje.habilidad1 = "ENRAIZAR"
                        personaje.habilidad2 = "ENVENENAR"
                        personaje.habilidad3 = "SANAR"

                        edicion = 0

                        armas(arma1.nombre, 1)
                        armas(arma2.nombre, 2)
                        consolaData = "<br>" + ""

                        modalPersonajes.style.display = "none"
                        modalArmas.style.display = "none"
                        guardar.style.display = "none"

                        modalMascotas.style.display = "none"

                        consolaData = "Combatiente mágico con habilidades del Reino Vida, prefiere sanar antes que dañar."
                    })



                    editarBtn.addEventListener('click', function () {

                        aprender = 1
                        equipar = 1
                        editarNombre = 1
                        edicionTotal = 1
                        consolaData = "Seleccione nombre, slot de arma o habilidad"
                        modalPersonajes.style.display = "none"
                        modalArmas.style.display = "none"
                        guardar.style.display = "grid"


                    })








                }//FIN PERSONAJES




            } else if (edicion > 0) {

                edicion = 0

            }

            cerrarModales()
            nombreStatSelect = ""




        })





        // Funcion para remover los caracteres diacríticos
        function removeAccents(text) {
            const sustitutions = {
                àáâãäå: "a",
                ÀÁÂÃÄÅ: "A",
                èéêë: "e",
                ÈÉÊË: "E",
                ìíîï: "i",
                ÌÍÎÏ: "I",
                òóôõö: "o",
                ÒÓÔÕÖ: "O",
                ùúûü: "u",
                ÙÚÛÜ: "U",
                ýÿ: "y",
                ÝŸ: "Y",
                ß: "ss",
                ñ: "n",
                Ñ: "N"
            };
            // Devuelve un valor si 'letter' esta incluido en la clave
            function getLetterReplacement(letter, replacements) {
                const findKey = Object.keys(replacements).reduce(
                    (origin, item, index) => (item.includes(letter) ? item : origin),
                    false
                );
                return findKey !== false ? replacements[findKey] : letter;
            }
            // Recorre letra por letra en busca de una sustitución
            return text
                .split("")
                .map((letter) => getLetterReplacement(letter, sustitutions))
                .join("");
        }





        {//COMANDOS

            comandoBtn.addEventListener('click', function () {

                comando = prompt("INGRESE COMANDO",).toUpperCase()

                comando = removeAccents(comando);


                if (comando == "PJ") {

                    pji.src = "img/new.png"
                    consolaData = "cambio"
                }


                if (comando == "NUEVO") {

                    edicionTotal = 1

                    personaje.experiencia = 200

                    personaje.nombre = "";
                    personaje.icono = "img/new.png"

                    personaje.ataque = 0
                    personaje.esquiva = 0
                    personaje.mitigacion = 0
                    personaje.velocidad = 0
                    personaje.vida = 0
                    personaje.vidaMaxima = 0
                    personaje.poder = 0
                    personaje.poderMaxima = 0

                    personaje.maestria1Nombre = ""
                    personaje.maestria1 = 0

                    personaje.maestria2Nombre = ""
                    personaje.maestria2 = 0

                    personaje.maestria3Nombre = ""
                    personaje.maestria3 = 0


                    arma1.nombre = "Arma 1"
                    arma2.nombre = "Arma 2"

                    personaje.habilidad1 = ""
                    personaje.habilidad2 = ""
                    personaje.habilidad3 = ""

                    edicion = 0
                    edicionTotal = 1

                    armas(arma1.nombre, 1)
                    armas(arma2.nombre, 2)
                    consolaData = "<br>" + ""

                    guardar.style.display = "grid"


                }



                if (comando == "ACTUALIZAR") {
                    localStorage.clear();
                    location.reload();
                }

                if (comando == "guardar") {

                    edicionTotal = 0
                    editarNombre = 0

                    consolaData = "Personaje Guardado"
                    guardar.style.display = "none"
                }

                if (comando == "editar") {

                    edicionTotal = 1

                    consolaData = "Modo edición activo"
                    personaje.vida = personaje.vidaMaxima
                    personaje.poder = personaje.poderMaxima
                    personaje.mana = personaje.manamaximo

                    guardar.style.display = "grid"
                }

                if (comando == "EQUIPAR") {

                    equipar = 1

                    consolaData = "Nueva Arma"
                }


                if (comando == "APRENDER") {

                    aprender = 1

                    consolaData = "Ingresa Hechizo o Habilidad"
                }


                if (comando == "/VERSION") {

                    aprender = 1

                    consolaData = "Versión 1.7.0a"
                }



                if (comando == "KRUK") {

                    edicionTotal = 1

                    personaje.nombre = "KRUK";
                    personaje.icono = "img/kruk.png"

                    personaje.ataque = 7
                    personaje.esquiva = 5
                    personaje.mitigacion = 4
                    personaje.velocidad = 4
                    personaje.vida = 70
                    personaje.vidaMaxima = 70
                    personaje.poder = 100
                    personaje.poderMaxima = 100

                    personaje.maestria1Nombre = ""
                    personaje.maestria1 = 0

                    personaje.maestria2Nombre = ""
                    personaje.maestria2 = 0

                    personaje.maestria3Nombre = ""
                    personaje.maestria3 = 0


                    arma1.nombre = "Dos Manos"
                    arma2.nombre = "Patadas"

                    personaje.habilidad1 = "INCANSABLE"
                    personaje.habilidad2 = "ATAQUE PODEROSO"
                    personaje.habilidad3 = "MACHACAR"

                    edicion = 0

                    armas(arma1.nombre, 1)
                    armas(arma2.nombre, 2)
                    consolaData = "<br>" + ""


                }

                if (comando == "PALADIN OSCURO") {

                    edicionTotal = 0

                    personaje.nombre = "PALADIN OSCURO"
                    personaje.icono = "img/paladinoscuro.png"

                    personaje.ataque = 5
                    personaje.esquiva = 3
                    personaje.mitigacion = 3
                    personaje.velocidad = 3
                    personaje.vida = 30
                    personaje.vidaMaxima = 30
                    personaje.poder = 53
                    personaje.poderMaxima = 53

                    personaje.maestria1Nombre = ""
                    personaje.maestria1 = 0

                    personaje.maestria2Nombre = ""
                    personaje.maestria2 = 0

                    personaje.maestria3Nombre = ""
                    personaje.maestria3 = 0


                    arma1.nombre = "Hoja Runa"
                    arma2.nombre = "Mano"

                    personaje.habilidad1 = "GOLPE VAMPIRICO"
                    personaje.habilidad2 = "TRANSMUTAR"
                    personaje.habilidad3 = "DRENAR"

                    edicion = 0

                    armas(arma1.nombre, 1)
                    armas(arma2.nombre, 2)
                    consolaData = "<br>" + ""

                    modalPersonajes.style.display = "none"
                    modalArmas.style.display = "none"


                }


                if (comando == "/LICANTROPO") {


                    arma1.nombre = "Garras"
                    arma2.nombre = "Mordisco"


                    edicion = 0

                    armas(arma1.nombre, 1)
                    armas(arma2.nombre, 2)
                    consolaData = "<br>" + ""


                }




                if (comando == "NOMBRE") {

                    personaje.nombre = prompt("INGRESA EL NOMBRE DEL PERSONAJE",)

                }

                if (comando == "+EXP") {

                    masExp = prompt("CANTIDAD",)
                    personaje.experiencia = personaje.experiencia + Number(masExp)

                }

                if (comando == "-EXP") {

                    menosExp = prompt("CANTIDAD",)
                    personaje.experiencia = personaje.experiencia - Number(menosExp)

                }











                modalPersonajes.style.display = "none"
                modalArmas.style.display = "none"
            })





        }//FIN COMANDOS

        // Logica para creación de un nuevo personaje
        nuevoBtn.addEventListener('click', function () {

            edicionTotal = 1

            personaje.nombre = "";
            personaje.icono = "img/new.png"

            personaje.experiencia = 200

            personaje.ataque = 0
            personaje.esquiva = 0
            personaje.mitigacion = 0
            personaje.velocidad = 0
            personaje.vida = 0
            personaje.vidaMaxima = 0
            personaje.poder = 0
            personaje.poderMaxima = 0

            personaje.maestria1Nombre = ""
            personaje.maestria1 = 0

            personaje.maestria2Nombre = ""
            personaje.maestria2 = 0

            personaje.maestria3Nombre = ""
            personaje.maestria3 = 0


            arma1.nombre = "Arma 1"
            arma2.nombre = "Arma 2"

            personaje.habilidad1 = ""
            personaje.habilidad2 = ""
            personaje.habilidad3 = ""

            edicion = 1
            edicionTotal = 1

            armas(arma1.nombre, 1)
            armas(arma2.nombre, 2)
            consolaData = "<br>" + ""


            modalPersonajes.style.display = "none"
            modalArmas.style.display = "none"

            guardar.style.display = "grid"

        })

    }//FIN CONSOLA


    {//TIRADA
        // Función que contiene la logica de los ataques
        function tirada() {



            var dado = Math.ceil((Math.random() * 20) + 0)





            if (armaSeleccionada == 1 || armaSeleccionada == 2) {


                if (dado == 20) {

                    consolaData = "Ataque con " + nombreArma + "<br>" + "¡CRITICO!" + "<br>" + "Daño Base " + ((Math.floor(dannoArma * personaje.ataque)) * 2)

                } else if (dado == 1) {

                    consolaData = "Ataque con " + nombreArma + "<br>" + "¡PIFIA!" + "<br>" + "Daño Base " + 0


                } else {

                    consolaData = "Ataque con " + nombreArma + "<br>" + (dado + mascota.ataque) + "<br>" + "Daño Base " + Math.floor(dannoArma * personaje.ataque)

                }
            }




            if (armaSeleccionada == 3 || armaSeleccionada == 4) {


                if (dado == 20) {

                    consolaData = "Ataque con " + nombreArma + "<br>" + "¡CRITICO!" + "<br>" + "Daño Base " + ((Math.floor(dannoArma * mascota.ataque)) * 2)

                } else if (dado == 1) {

                    consolaData = "Ataque con " + nombreArma + "<br>" + "¡PIFIA!" + "<br>" + "Daño Base " + 0


                } else {

                    consolaData = "Ataque con " + nombreArma + "<br>" + (dado + mascota.ataque) + "<br>" + "Daño Base " + (Math.floor(dannoArma * mascota.ataque))

                }
            }



            if (armaSeleccionada == 5) {


                if (dado == 20) {

                    consolaData = "Esquiva con" + "<br>" + "¡CRITICO!" + "<br>" + "" + ((Math.floor(dannoArma * personaje.esquiva)) * 2)

                } else if (dado == 1) {

                    consolaData = "Esquiva con" + "<br>" + "¡PIFIA!"


                } else {

                    consolaData = "Esquiva con" + "<br>" + (dado + personaje.esquiva)

                }
            }


            if (armaSeleccionada == 6) {


                if (dado == 20) {

                    consolaData = "Mascota esquiva con" + "<br>" + "¡CRITICO!" + "<br>" + "" + ((Math.floor(dannoArma * personaje.esquiva)) * 2)

                } else if (dado == 1) {

                    consolaData = "Mascota esquiva con" + "<br>" + "¡PIFIA!"


                } else {

                    consolaData = "Mascota esquiva con" + "<br>" + (dado + mascota.esquiva)

                }
            }








            cerrarModales()
        }

        atacarBtn.addEventListener('click', function () { tirada() })

    }//FIN TIRADA



    {//MODIFICAR ESTADISTICAS



        function modificarEstadistica(estadistica) {


            if (edicionTotal == 0) {

                if (estadistica == "vida" || estadistica == "poder" || estadistica == "mana" || estadistica == "poderMascota" || estadistica == "vidaMascota") {


                    arriba.style.display = "grid"
                    abajo.style.display = "grid"

                } else {


                    arriba.style.display = "none"
                    abajo.style.display = "none"

                }

            } else {

                arriba.style.display = "grid"
                abajo.style.display = "grid"

            }




            if (estadistica == "ataque") {

                consolaData = "<br>" + "Ataque " + personaje.ataque
                estadisticaSeleccionada = personaje.ataque
                nombreStatSelect = "Ataque"


            }

            if (estadistica == "esquiva") {

                consolaData = "<br>" + "Esquiva " + personaje.esquiva + "<br> Media Total " + (personaje.esquiva + 10) 
                estadisticaSeleccionada = personaje.esquiva
                nombreStatSelect = "Esquiva"
                armaSeleccionada = 5

            }


            if (estadistica == "mitigacion") {

                consolaData = "<br>" + "Mitigación " + personaje.mitigacion
                estadisticaSeleccionada = personaje.mitigacion
                nombreStatSelect = "Mitigacion"

            }



            if (estadistica == "velocidad") {

                consolaData = "<br>" + "Velocidad " + personaje.velocidad
                estadisticaSeleccionada = personaje.velocidad
                nombreStatSelect = "Velocidad"

            }

            if (estadistica == "maestria3") {

                consolaData = "<br>" + "Equipo "
                estadisticaSeleccionada = personaje.maestria3
                nombreStatSelect = "maestria3"



            }


            if (estadistica == "maestria2") {

                consolaData = "<br>" + "Equipo "
                estadisticaSeleccionada = personaje.maestria2
                nombreStatSelect = "maestria2"



            }



            if (estadistica == "vida") {

                consolaData = "<br>" + "Vida " + personaje.vida
                estadisticaSeleccionada = personaje.vida
                nombreStatSelect = "Vida"

            }

            if (estadistica == "poder") {

                consolaData = "<br>" + "Poder " + personaje.poder
                estadisticaSeleccionada = personaje.poder
                nombreStatSelect = "Poder"

            }


            if (estadistica == "maestria1") {

                consolaData = "<br>" + "Equipo "
                estadisticaSeleccionada = personaje.maestria1
                nombreStatSelect = "maestria1"



            }




            if (estadistica == "ataqueMascota") {

                consolaData = "<br>" + "Ataque Mascota " + mascota.ataque
                estadisticaSeleccionada = mascota.ataque
                nombreStatSelect = "AtaqueMascota"

            }

            if (estadistica == "esquivaMascota") {

                consolaData = "<br>" + "Esquiva Mascota " + mascota.esquiva
                estadisticaSeleccionada = mascota.esquiva
                nombreStatSelect = "EsquivaMascota"
                armaSeleccionada = 6

            }

            if (estadistica == "mitigacionMascota") {

                consolaData = "<br>" + "Mitigacion Mascota " + mascota.mitigacion
                estadisticaSeleccionada = mascota.mitigacion
                nombreStatSelect = "MitigacionMascota"

            }

            if (estadistica == "velocidadMascota") {

                consolaData = "<br>" + "Velocidad Mascota " + mascota.velocidad
                estadisticaSeleccionada = mascota.velocidad
                nombreStatSelect = "VelocidadMascota"

            }

            if (estadistica == "vidaMascota") {

                consolaData = "<br>" + "Vida Mascota " + mascota.vida
                estadisticaSeleccionada = mascota.vida
                nombreStatSelect = "VidaMascota"

            }

            if (estadistica == "poderMascota") {

                consolaData = "<br>" + "Poder Mascota " + mascota.poder
                estadisticaSeleccionada = mascota.poder
                nombreStatSelect = "PoderMascota"

            }




        }

        ataqueBtn.addEventListener('click', function () { modificarEstadistica("ataque") })
        esquivaBtn.addEventListener('click', function () { modificarEstadistica("esquiva") })
        mitigacionBtn.addEventListener('click', function () { modificarEstadistica("mitigacion") })

        velocidadBtn.addEventListener('click', function () { modificarEstadistica("velocidad") })
        maestria3Btn.addEventListener('click', function () { modificarEstadistica("maestria3") })
        maestria2Btn.addEventListener('click', function () { modificarEstadistica("maestria2") })

        vidaBtn.addEventListener('click', function () { modificarEstadistica("vida") })
        poderBtn.addEventListener('click', function () { modificarEstadistica("poder") })
        maestria1Btn.addEventListener('click', function () { modificarEstadistica("maestria1") })


        ataqueMascotaBtn.addEventListener('click', function () { modificarEstadistica("ataqueMascota") })
        esquivaMascotaBtn.addEventListener('click', function () { modificarEstadistica("esquivaMascota") })
        mitigacionMascotaBtn.addEventListener('click', function () { modificarEstadistica("mitigacionMascota") })
        velocidadMascotaBtn.addEventListener('click', function () { modificarEstadistica("velocidadMascota") })
        vidaMascotaBtn.addEventListener('click', function () { modificarEstadistica("vidaMascota") })
        poderMascotaBtn.addEventListener('click', function () { modificarEstadistica("poderMascota") })



        function masMenos(boton) {

            if (personaje.experiencia > 0) {

                if (boton == "arriba") {

                    //if(nombreStatSelect = "Vida"){

                    //}

                    var suma = 1

                    if (isNaN(suma)) {
                        suma = 0
                    }

                    if (nombreStatSelect == "Ataque" || nombreStatSelect == "Esquiva" || nombreStatSelect == "Mitigacion" || nombreStatSelect == "AtaqueMascota" || nombreStatSelect == "EsquivaMascota") {

                        if ((personaje.experiencia) >= (estadisticaSeleccionada + 1 * 3)) {
                            estadisticaSeleccionada = estadisticaSeleccionada + Number(suma)
                            consolaData = "<br>" + estadisticaSeleccionada + " " + nombreStatSelect


                            if (estadisticaSeleccionada == 0) {
                                personaje.experiencia = personaje.experiencia - parseInt(estadisticaSeleccionada + 3)
                            } else {
                                personaje.experiencia = personaje.experiencia - parseInt((estadisticaSeleccionada) * 3)
                            }



                        } else {
                            consolaData = "Exp insuficiente"
                        }
                    }

                    if (nombreStatSelect == "Velocidad" || nombreStatSelect == "VelocidadMascota" || nombreStatSelect == "MitigacionMascota") {


                        if ((personaje.experiencia) >= ((estadisticaSeleccionada + 1) * 6)) {
                            estadisticaSeleccionada = estadisticaSeleccionada + Number(suma)
                            consolaData = "<br>" + estadisticaSeleccionada + " " + nombreStatSelect

                            if (estadisticaSeleccionada == 0) {
                                personaje.experiencia = personaje.experiencia - parseInt(estadisticaSeleccionada + 6)
                            } else {
                                personaje.experiencia = personaje.experiencia - parseInt((estadisticaSeleccionada) * 6)
                            }

                        } else {
                            consolaData = "Exp insuficiente"
                        }
                    }

                    if ((nombreStatSelect == "Vida" || nombreStatSelect == "Poder" || nombreStatSelect == "PoderMascota" || nombreStatSelect == "VidaMascota") && edicionTotal == 1) {

                        if (personaje.experiencia > 0) {
                            estadisticaSeleccionada = estadisticaSeleccionada + Number(suma)
                            consolaData = "<br>" + estadisticaSeleccionada + " " + nombreStatSelect
                            personaje.experiencia = personaje.experiencia - 1


                        } else {
                            consolaData = "Exp insuficiente"
                        }

                    } else if (edicionTotal == 0) {
                        estadisticaSeleccionada = estadisticaSeleccionada + Number(suma)
                        consolaData = "<br>" + estadisticaSeleccionada + " " + nombreStatSelect

                    }



                    if (nombreStatSelect == "Maestria1" || nombreStatSelect == "Maestria2" || nombreStatSelect == "Maestria3") {


                            consolaData = "Pronto"
                        

                    }






                }


            } else if (personaje.experiencia == 0) {

                if (boton == "arriba") {

                    //if(nombreStatSelect = "Vida"){

                    //}

                    var suma = 1

                    if (isNaN(suma)) {
                        suma = 0
                    }

                    if ((nombreStatSelect == "Vida" || nombreStatSelect == "Poder" || nombreStatSelect == "Poder" || nombreStatSelect == "PoderMascota" || nombreStatSelect == "VidaMascota") && edicionTotal == 0) {


                        estadisticaSeleccionada = estadisticaSeleccionada + Number(suma)
                        consolaData = "<br>" + estadisticaSeleccionada + " " + nombreStatSelect


                    } else {
                        consolaData = "Exp insuficiente"
                    }
                }

            }






            if (boton == "abajo") {

                var resta = 1

                if (isNaN(resta)) {
                    resta = 0
                }


                if (nombreStatSelect == "Ataque" || nombreStatSelect == "Esquiva" || nombreStatSelect == "Mitigacion" || nombreStatSelect == "AtaqueMascota" || nombreStatSelect == "EsquivaMascota") {

                    if (estadisticaSeleccionada >= 1) {
                        estadisticaSeleccionada = estadisticaSeleccionada - resta
                        consolaData = "<br>" + estadisticaSeleccionada + " " + nombreStatSelect


                        if (estadisticaSeleccionada == 0) {
                            personaje.experiencia = personaje.experiencia + parseInt(estadisticaSeleccionada + 3)
                        } else {
                            personaje.experiencia = personaje.experiencia + parseInt((estadisticaSeleccionada + 1) * 3)
                        }


                    } else {
                        consolaData = "Exp insuficiente"
                    }
                }


                if (nombreStatSelect == "Velocidad" || nombreStatSelect == "VelocidadMascota" || nombreStatSelect == "MitigacionMascota") {

                    if (estadisticaSeleccionada > 0) {
                        estadisticaSeleccionada = estadisticaSeleccionada - resta
                        consolaData = "<br>" + estadisticaSeleccionada + " " + nombreStatSelect


                        if (estadisticaSeleccionada == 0) {
                            personaje.experiencia = personaje.experiencia + parseInt(estadisticaSeleccionada + 6)
                        } else {
                            personaje.experiencia = personaje.experiencia + parseInt((estadisticaSeleccionada + 1) * 6)
                        }

                    } else {
                        consolaData = "Exp insuficiente"
                    }
                }


                if ((nombreStatSelect == "Vida" || nombreStatSelect == "Poder" || nombreStatSelect == "Poder" || nombreStatSelect == "PoderMascota" || nombreStatSelect == "VidaMascota") && edicionTotal == 1) {

                    if (estadisticaSeleccionada >= 1) {
                        estadisticaSeleccionada = estadisticaSeleccionada - resta
                        consolaData = "<br>" + estadisticaSeleccionada + " " + nombreStatSelect
                        personaje.experiencia = personaje.experiencia + 1


                    } else {
                        consolaData = "Exp insuficiente"

                    }

                } else if (edicionTotal == 0) {
                    estadisticaSeleccionada = estadisticaSeleccionada - resta
                    consolaData = "<br>" + estadisticaSeleccionada + " " + nombreStatSelect

                }


                if (nombreStatSelect == "Maestria1" || nombreStatSelect == "Maestria2" || nombreStatSelect == "Maestria3") {

                    if (estadisticaSeleccionada > 0) {
                        estadisticaSeleccionada = estadisticaSeleccionada - resta
                        consolaData = "<br>" + estadisticaSeleccionada + " "


                        if (estadisticaSeleccionada == 0) {
                            personaje.experiencia = personaje.experiencia + parseInt(estadisticaSeleccionada + 6)
                        } else {
                            personaje.experiencia = personaje.experiencia + parseInt((estadisticaSeleccionada + 1) * 6)
                        }

                    } else {
                        consolaData = "Exp insuficiente"
                    }
                }



            }


            guardarMascota()

        }


        abajoBtn.addEventListener('click', function () { masMenos("abajo") })
        arribaBtn.addEventListener('click', function () { masMenos("arriba") })


    }// FIN MODIFICAR ESTADISTICAS





    // Función para cerrar menu emergentes
    function cerrarModales() {

        arriba.style.display = "none"
        abajo.style.display = "none"
        derecha.style.display = "none"
        izquierda.style.display = "none"

    }

    // Intervalo que ejecuta imprimir() cada 50 ms
    setInterval(() => {
        imprimir()

    }, 50);

    // Función para imprimir los cambios realizados a los personajes
    function imprimir() {

        icono.src = personaje.icono
        nombreTxt.textContent = personaje.nombre

        ataqueTxt.textContent = personaje.ataque
        esquivaTxt.textContent = personaje.esquiva
        mitigacionTxt.textContent = personaje.mitigacion

        velocidadTxt.textContent = personaje.velocidad
        maestria3Txt.textContent = personaje.maestria3
        maestria2Txt.textContent = personaje.maestria2

        vidaTxt.textContent = personaje.vida
        poderTxt.textContent = personaje.poder
        maestria1Txt.textContent = personaje.maestria1


        txtSlot1.textContent = arma1.nombre
        icoSlot1.src = arma1.icono

        txtSlot2.textContent = arma2.nombre
        icoSlot2.src = arma2.icono

        hechizo1Txt.textContent = personaje.habilidad1
        hechizo2Txt.textContent = personaje.habilidad2
        hechizo3Txt.textContent = personaje.habilidad3

        expTxt.textContent = personaje.experiencia

        consola.innerHTML = "<br>" + consolaData

        {//REFRESCA ESTADISTICAS DEL PERSONAJE
            if (nombreStatSelect == "Ataque") {
                personaje.ataque = estadisticaSeleccionada
            } else if (nombreStatSelect == "Esquiva") {
                personaje.esquiva = estadisticaSeleccionada
            } else if (nombreStatSelect == "Mitigacion") {
                personaje.mitigacion = estadisticaSeleccionada
            } else if (nombreStatSelect == "Velocidad") {
                personaje.velocidad = estadisticaSeleccionada
            } else if (nombreStatSelect == "Maestria3") {
                personaje.maestria3 = estadisticaSeleccionada
            } else if (nombreStatSelect == "Maestria2") {
                personaje.maestria2 = estadisticaSeleccionada
            } else if (nombreStatSelect == "Vida") {
                personaje.vida = estadisticaSeleccionada
            } else if (nombreStatSelect == "Poder") {
                personaje.poder = estadisticaSeleccionada
            } else if (nombreStatSelect == "Maestria1") {
                personaje.maestria1 = estadisticaSeleccionada
            }
        }//FIN REFRESCO ESTADISTICAS


        {//REFRESCO MASCOTA

            nombreMascotaTxt.textContent = mascota.nombre

            mascotaPortadaImg.src = mascota.imagen

            ataqueMascotaTxt.textContent = mascota.ataque
            esquivaMascotaTxt.textContent = mascota.esquiva
            mitigacionMascotaTxt.textContent = mascota.mitigacion
            velocidadMascotaTxt.textContent = mascota.velocidad
            vidaMascotaTxt.textContent = mascota.vida
            poderMascotaTxt.textContent = mascota.poder

            arma1MascotaTxt.textContent = mascota.arma1
            arma2MascotaTxt.textContent = mascota.arma2


            habilidadMascota1Txt.textContent = mascota.habilidad1
            habilidadMascota2Txt.textContent = mascota.habilidad2







            if (nombreStatSelect == "AtaqueMascota") {
                mascota.ataque = estadisticaSeleccionada
            } else if (nombreStatSelect == "EsquivaMascota") {
                mascota.esquiva = estadisticaSeleccionada
            } else if (nombreStatSelect == "MitigacionMascota") {
                mascota.mitigacion = estadisticaSeleccionada
            } else if (nombreStatSelect == "VelocidadMascota") {
                mascota.velocidad = estadisticaSeleccionada
            } else if (nombreStatSelect == "VidaMascota") {
                mascota.vida = estadisticaSeleccionada
            } else if (nombreStatSelect == "PoderMascota") {
                mascota.poder = estadisticaSeleccionada
            }











            if (mascota.arma1 == "Garras") {
                arma1MascotaImg.src = "img/garras.png"
            }

            if (mascota.arma1 == "Mordisco") {
                arma1MascotaImg.src = "img/mordisco.png"
            }

            if (mascota.arma1 == "Aliento") {
                arma1MascotaImg.src = "img/aliento.png"
            }

            if (mascota.arma1 == "Pinzas") {
                arma1MascotaImg.src = "img/pinzas.png"
            }

            if (mascota.arma1 == "Mente") {
                arma1MascotaImg.src = "img/mente.png"
            }

            if (mascota.arma1 == "Ramas") {
                arma1MascotaImg.src = "img/ramas.png"
            }

            if (mascota.arma1 == "Esporas") {
                arma1MascotaImg.src = "img/esporas.png"
            }

            if (mascota.arma1 == "Alas") {
                arma1MascotaImg.src = "img/alas.png"
            }

            if (mascota.arma1 == "Mirada") {
                arma1MascotaImg.src = "img/mirada.png"
            }

            if (mascota.arma1 == "Mano") {
                arma1MascotaImg.src = "img/magia.png"
            }

            if (mascota.arma1 == "Puños") {
                arma1MascotaImg.src = "img/punno.png"
            }


            if (mascota.arma1 == "Cuernos") {
                arma1MascotaImg.src = "img/cuernos.png"
            }

            if (mascota.arma1 == "Cascos") {
                arma1MascotaImg.src = "img/cascos.png"
            }

            if (mascota.arma1 == "Tentaculos") {
                arma1MascotaImg.src = "img/tentaculos.png"
            }


            if (mascota.arma1 == "") {
                arma1MascotaImg.src = "img/nada.png"
            }







            if (mascota.arma2 == "Garras") {
                arma2MascotaImg.src = "img/garras.png"
            }

            if (mascota.arma2 == "Mordisco") {
                arma2MascotaImg.src = "img/mordisco.png"
            }

            if (mascota.arma2 == "Aliento") {
                arma2MascotaImg.src = "img/aliento.png"
            }

            if (mascota.arma2 == "Pinzas") {
                arma2MascotaImg.src = "img/pinzas.png"
            }

            if (mascota.arma2 == "Mente") {
                arma2MascotaImg.src = "img/mente.png"
            }


            if (mascota.arma2 == "Ramas") {
                arma2MascotaImg.src = "img/ramas.png"
            }

            if (mascota.arma2 == "Esporas") {
                arma2MascotaImg.src = "img/esporas.png"
            }

            if (mascota.arma2 == "Alas") {
                arma2MascotaImg.src = "img/alas.png"
            }

            if (mascota.arma2 == "Mirada") {
                arma2MascotaImg.src = "img/mirada.png"
            }


            if (mascota.arma2 == "Mano") {
                arma2MascotaImg.src = "img/magia.png"
            }

            if (mascota.arma2 == "Puños") {
                arma2MascotaImg.src = "img/punno.png"
            }

            if (mascota.arma2 == "Cuernos") {
                arma2MascotaImg.src = "img/cuernos.png"
            }

            if (mascota.arma2 == "Cascos") {
                arma2MascotaImg.src = "img/cascos.png"
            }

            if (mascota.arma2 == "Tentaculos") {
                arma2MascotaImg.src = "img/tentaculos.png"
            }

            if (mascota.arma2 == "") {
                arma2MascotaImg.src = "img/nada.png"

            }


        }//FIN REFRESCO MASCOTA



        if (personaje.habilidad1 == "INVOCAR" || personaje.habilidad2 == "INVOCAR" || personaje.habilidad3 == "INVOCAR") {

            mascotaImg.src = "img/portal.png"

        } else {

            mascotaImg.src = "img/nada.png"
        }


    }








    cerrarModalArmasBtn.addEventListener('click', function () { modalArmas.style.display = "none" })
    cerrarModalPersonajesBtn.addEventListener('click', function () { modalPersonajes.style.display = "none" })









}//FIN FUNCIONES



















expImg.addEventListener('click', function () {

    if (edicionTotal == 1) {

        masExp = prompt("CANTIDAD",)
        personaje.experiencia = personaje.experiencia + Number(masExp)

    }

})

expTxt.addEventListener('click', function () {

    if (edicionTotal == 1) {

        masExp = prompt("CANTIDAD",)
        personaje.experiencia = personaje.experiencia + Number(masExp)

    }

})












var maestrias = function maestrias(maestriaSeleccionada) {

    modalArmas.style.display = "grid"
}











































































































































{//VARIABLES MASCOTAS

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

}//FIN VARIABLES MASCOTAS


var mascotaSeleccionada = 1



mascotaBtn.addEventListener('click', function botonMascota() {

    if (personaje.habilidad1 == "INVOCAR" || personaje.habilidad2 == "INVOCAR" || personaje.habilidad3 == "INVOCAR") {



        if (ventanMascota == 0) {
            modalMascotas.style.display = "grid"
            ventanMascota = 1

        } else {
            modalMascotas.style.display = "none"
            ventanMascota = 0
        }
    } else {

        modalMascotas.style.display = "none"
        ventanMascota = 0
        consolaData = ""

    }


})
















derechaBtn.addEventListener('click', function () {

    guardarMascota()
    nombreStatSelect = ""


    if (mascotaSeleccionada == 1) {

        mascotaSeleccionada = 2

        mascota.nombre = mascota2.nombre
        mascota.imagen = mascota2.imagen


        mascota.ataque = mascota2.ataque
        mascota.esquiva = mascota2.esquiva
        mascota.mitigacion = mascota2.mitigacion
        mascota.velocidad = mascota2.velocidad
        mascota.vida = mascota2.vida
        mascota.poder = mascota2.poder

        mascota.arma1 = mascota2.arma1
        mascota.arma2 = mascota2.arma2

        mascota.habilidad1 = mascota2.habilidad1
        mascota.habilidad2 = mascota2.habilidad2

        mascota.descripcion = mascota2.descripcion



    } else if (mascotaSeleccionada == 2) {

        mascotaSeleccionada = 3
        mascota.nombre = mascota3.nombre
        mascota.imagen = mascota3.imagen


        mascota.ataque = mascota3.ataque
        mascota.esquiva = mascota3.esquiva
        mascota.mitigacion = mascota3.mitigacion
        mascota.velocidad = mascota3.velocidad
        mascota.vida = mascota3.vida
        mascota.poder = mascota3.poder

        mascota.arma1 = mascota3.arma1
        mascota.arma2 = mascota3.arma2

        mascota.habilidad1 = mascota3.habilidad1
        mascota.habilidad2 = mascota3.habilidad2

        mascota.descripcion = mascota3.descripcion



    } else if (mascotaSeleccionada == 3) {

        mascotaSeleccionada = 1
        mascota.nombre = mascota1.nombre
        mascota.imagen = mascota1.imagen


        mascota.ataque = mascota1.ataque
        mascota.esquiva = mascota1.esquiva
        mascota.mitigacion = mascota1.mitigacion
        mascota.velocidad = mascota1.velocidad
        mascota.vida = mascota1.vida
        mascota.poder = mascota1.poder

        mascota.arma1 = mascota1.arma1
        mascota.arma2 = mascota1.arma2

        mascota.habilidad1 = mascota1.habilidad1
        mascota.habilidad2 = mascota1.habilidad2

        mascota.descripcion = mascota1.descripcion



    }






    edicionTotal = 0
    cerrarModales()
    consolaData = ""


})



izquierdaBtn.addEventListener('click', function () {

    guardarMascota()
    nombreStatSelect = ""


    if (mascotaSeleccionada == 3) {

        mascotaSeleccionada = 2

        mascota.nombre = mascota2.nombre
        mascota.imagen = mascota2.imagen


        mascota.ataque = mascota2.ataque
        mascota.esquiva = mascota2.esquiva
        mascota.mitigacion = mascota2.mitigacion
        mascota.velocidad = mascota2.velocidad
        mascota.vida = mascota2.vida
        mascota.poder = mascota2.poder

        mascota.arma1 = mascota2.arma1
        mascota.arma2 = mascota2.arma2

        mascota.habilidad1 = mascota2.habilidad1
        mascota.habilidad2 = mascota2.habilidad2

        mascota.descripcion = mascota2.descripcion




    } else if (mascotaSeleccionada == 2) {

        mascotaSeleccionada = 1
        mascota.nombre = mascota1.nombre
        mascota.imagen = mascota1.imagen


        mascota.ataque = mascota1.ataque
        mascota.esquiva = mascota1.esquiva
        mascota.mitigacion = mascota1.mitigacion
        mascota.velocidad = mascota1.velocidad
        mascota.vida = mascota1.vida
        mascota.poder = mascota1.poder

        mascota.arma1 = mascota1.arma1
        mascota.arma2 = mascota1.arma2

        mascota.habilidad1 = mascota1.habilidad1
        mascota.habilidad2 = mascota1.habilidad2

        mascota.descripcion = mascota1.descripcion


    } else if (mascotaSeleccionada == 1) {

        mascotaSeleccionada = 3
        mascota.nombre = mascota3.nombre
        mascota.imagen = mascota3.imagen


        mascota.ataque = mascota3.ataque
        mascota.esquiva = mascota3.esquiva
        mascota.mitigacion = mascota3.mitigacion
        mascota.velocidad = mascota3.velocidad
        mascota.vida = mascota3.vida
        mascota.poder = mascota3.poder

        mascota.arma1 = mascota3.arma1
        mascota.arma2 = mascota3.arma2

        mascota.habilidad1 = mascota3.habilidad1
        mascota.habilidad2 = mascota3.habilidad2

        mascota.descripcion = mascota3.descripcion


    }

    edicionTotal = 0
    cerrarModales()
    consolaData = ""


})


















function guardarMascota() {



    if (mascotaSeleccionada == 1) {


        mascota1.nombre = mascota.nombre
        mascota1.imagen = mascota.imagen


        mascota1.ataque = mascota.ataque
        mascota1.esquiva = mascota.esquiva
        mascota1.mitigacion = mascota.mitigacion
        mascota1.velocidad = mascota.velocidad
        mascota1.vida = mascota.vida
        mascota1.poder = mascota.poder

        mascota1.arma1 = mascota.arma1
        mascota1.arma2 = mascota.arma2

        mascota1.habilidad1 = mascota.habilidad1
        mascota1.habilidad2 = mascota.habilidad2

        mascota1.descripcion = mascota.descripcion



    } else if (mascotaSeleccionada == 2) {

        mascota2.nombre = mascota.nombre
        mascota2.imagen = mascota.imagen


        mascota2.ataque = mascota.ataque
        mascota2.esquiva = mascota.esquiva
        mascota2.mitigacion = mascota.mitigacion
        mascota2.velocidad = mascota.velocidad
        mascota2.vida = mascota.vida
        mascota2.poder = mascota.poder

        mascota2.arma1 = mascota.arma1
        mascota2.arma2 = mascota.arma2

        mascota2.habilidad1 = mascota.habilidad1
        mascota2.habilidad2 = mascota.habilidad2

        mascota2.descripcion = mascota.descripcion



    } else if (mascotaSeleccionada == 3) {

        mascota3.nombre = mascota.nombre
        mascota3.imagen = mascota.imagen


        mascota3.ataque = mascota.ataque
        mascota3.esquiva = mascota.esquiva
        mascota3.mitigacion = mascota.mitigacion
        mascota3.velocidad = mascota.velocidad
        mascota3.vida = mascota.vida
        mascota3.poder = mascota.poder

        mascota3.arma1 = mascota.arma1
        mascota3.arma2 = mascota.arma2

        mascota3.habilidad1 = mascota.habilidad1
        mascota3.habilidad2 = mascota.habilidad2

        mascota3.descripcion = mascota.descripcion



    }







}












































































portadaMascotaBtn.addEventListener('click', function () {



    if (edicionTotal == 0) {

        consolaData = mascota.descripcion
        derecha.style.display = "grid"
        izquierda.style.display = "grid"

    } else if (edicionTotal == 1) {

        comando = prompt("INGRESE COMANDO",).toUpperCase()

        comando = removeAccents(comando);

        if (comando == "RAPTOR") {

            mascota.nombre = "RAPTOR"
            mascota.imagen = "img/raptor.png"


            mascota.ataque = 4
            mascota.esquiva = 3
            mascota.mitigacion = 4
            mascota.velocidad = 3
            mascota.vida = 31
            mascota.vidaMaxima = 31
            mascota.poder = 25
            mascota.poderMaximo = 25

            mascota.arma1 = "Mordisco"
            mascota.arma2 = "Garras"

            mascota.habilidad1 = "DERRIBO"
            mascota.habilidad2 = "DESGARRO"

            mascota.descripcion = "RAPTOR <br> Criatura de Sangre <br> Coste de invocación: 20"

        }


        if (comando == "LOBO") {

            mascota.nombre = "LOBO"
            mascota.imagen = "img/lobo.png"


            mascota.ataque = 3
            mascota.esquiva = 2
            mascota.mitigacion = 1
            mascota.velocidad = 6
            mascota.vida = 19
            mascota.vidaMaxima = 19
            mascota.poder = 22
            mascota.poderMaximo = 22

            mascota.arma1 = "Mordisco"
            mascota.arma2 = "Garras"

            mascota.habilidad1 = "DERRIBO"
            mascota.habilidad2 = "DESGARRO"

            mascota.descripcion = "LOBO <br> Criatura de Sangre <br> Coste de invocación: 20"

        }




        if (comando == "ESQUELETO") {

            mascota.nombre = "ESQUELETO"
            mascota.imagen = "img/esqueleto.png"


            mascota.ataque = 4
            mascota.esquiva = 2
            mascota.mitigacion = 3
            mascota.velocidad = 2
            mascota.vida = 30
            mascota.vidaMaxima = 30
            mascota.poder = 27
            mascota.poderMaximo = 27

            mascota.arma1 = "Mordisco"
            mascota.arma2 = "Garras"

            mascota.habilidad1 = "DERRIBO"
            mascota.habilidad2 = "DESGARRO"

            mascota.descripcion = "ESQUELETO <br> Criatura de Vida y Éter <br> Coste de invocación: 15"

        }


        if (comando == "KARDANTO") {

            mascota.nombre = "KARDANTO"
            mascota.imagen = "img/kardanto.png"


            mascota.ataque = 4
            mascota.esquiva = 2
            mascota.mitigacion = 4
            mascota.velocidad = 3
            mascota.vida = 31
            mascota.vidaMaxima = 31
            mascota.poder = 34
            mascota.poderMaximo = 34

            mascota.arma1 = "Ramas"
            mascota.arma2 = "Esporas"

            mascota.habilidad1 = "ENRAIZAR"
            mascota.habilidad2 = "ENVENENAR"

            mascota.descripcion = "KARDANTO <br> Elemental de Vida <br> Coste de invocación: 20"

        }


        if (comando == "MOMONTU") {

            mascota.nombre = "MOMONTU"
            mascota.imagen = "img/momontu.png"


            mascota.ataque = 5
            mascota.esquiva = 3
            mascota.mitigacion = 1
            mascota.velocidad = 4
            mascota.vida = 20
            mascota.vidaMaxima = 20
            mascota.poder = 51
            mascota.poderMaximo = 51

            mascota.arma1 = "Mano"
            mascota.arma2 = "Garras"

            mascota.habilidad1 = "BOLA DE FUEGO"
            mascota.habilidad2 = "DESGARRO"

            mascota.descripcion = "MOMONTU <br>Elemental de Fuego <br> Coste de invocación: 20"

        }





        if (comando == "TORTAKLA") {

            mascota.nombre = "TORTAKLA"
            mascota.imagen = "img/tortakla.png"


            mascota.ataque = 4
            mascota.esquiva = 1
            mascota.mitigacion = 5
            mascota.velocidad = 2
            mascota.vida = 40
            mascota.vidaMaxima = 40
            mascota.poder = 19
            mascota.poderMaximo = 19

            mascota.arma1 = "Aliento"
            mascota.arma2 = "Pinzas"

            mascota.habilidad1 = "TSUNAMI"
            mascota.habilidad2 = "TRITURAR"

            mascota.descripcion = "TORTAKLA <br> Elemental de Agua <br> Coste de invocación: 20";

        }


        if (comando == "GHALIDOS") {

            mascota.nombre = "GHALIDOS"
            mascota.imagen = "img/ghalidos.png"


            mascota.ataque = 4
            mascota.esquiva = 4
            mascota.mitigacion = 1
            mascota.velocidad = 5
            mascota.vida = 25
            mascota.vidaMaxima = 25
            mascota.poder = 19
            mascota.poderMaximo = 19

            mascota.arma1 = "Garras"
            mascota.arma2 = "Alas"

            mascota.habilidad1 = "TORNADO"
            mascota.habilidad2 = "DESGARRO"

            mascota.descripcion = "GHALIDOS <br> Elemental de Aire <br> Coste de invocación: 20"

        }


        if (comando == "TERRONTE") {

            mascota.nombre = "TERRONTE"
            mascota.imagen = "img/terronte.png"


            mascota.ataque = 4
            mascota.esquiva = 1
            mascota.mitigacion = 4
            mascota.velocidad = 3
            mascota.vida = 40
            mascota.vidaMaxima = 40
            mascota.poder = 31
            mascota.poderMaximo = 31

            mascota.arma1 = "Mirada"
            mascota.arma2 = "Puños"

            mascota.habilidad1 = "ATAQUE PODEROSO"
            mascota.habilidad2 = "TERREMOTO"

            mascota.descripcion = "TERRONTE <br> Elemental de Tierra <br> Coste de invocación: 20"

        }


        if (comando == "NAIGARAN") {

            mascota.nombre = "NAIGARAN"
            mascota.imagen = "img/naigaran.png"


            mascota.ataque = 5
            mascota.esquiva = 3
            mascota.mitigacion = 2
            mascota.velocidad = 4
            mascota.vida = 20
            mascota.vidaMaxima = 20
            mascota.poder = 39
            mascota.poderMaximo = 39

            mascota.arma1 = "Mordisco"
            mascota.arma2 = "Tentaculos"

            mascota.habilidad1 = "CONFUNDIR"
            mascota.habilidad2 = "DESGARRO"

            mascota.descripcion = "NAIGARAN <br> Elemental Etereo <br> Coste de invocación: 20"

        }


        if (comando == "SARCOMOS") {

            mascota.nombre = "SARCOMOS"
            mascota.imagen = "img/sarcomos.png"


            mascota.ataque = 5
            mascota.esquiva = 4
            mascota.mitigacion = 2
            mascota.velocidad = 4
            mascota.vida = 23
            mascota.vidaMaxima = 23
            mascota.poder = 24
            mascota.poderMaximo = 24

            mascota.arma1 = "Mente"
            mascota.arma2 = "Garras"

            mascota.habilidad1 = "CONFUNDIR"
            mascota.habilidad2 = "DESGARRO"

            mascota.descripcion = "SARCOMOS <br> Elemental Psiquico <br> Coste de invocacón: 20"

        }


        if (comando == "CINIRUS") {

            mascota.nombre = "CINIRUS"
            mascota.imagen = "img/cinirus.png"


            mascota.ataque = 4
            mascota.esquiva = 3
            mascota.mitigacion = 4
            mascota.velocidad = 3
            mascota.vida = 25
            mascota.vidaMaxima = 25
            mascota.poder = 31
            mascota.poderMaximo = 31

            mascota.arma1 = "Cuernos"
            mascota.arma2 = "Cascos"

            mascota.habilidad1 = "SANAR"
            mascota.habilidad2 = "SENTENCIA"

            mascota.descripcion = "CINIRUS <br> Elemental de Luz <br> Coste de invocación: 20"

        }


        if (comando == "RAIZOR") {

            mascota.nombre = "RAIZOR"
            mascota.imagen = "img/raizor.png"


            mascota.ataque = 4
            mascota.esquiva = 4
            mascota.mitigacion = 2
            mascota.velocidad = 4
            mascota.vida = 25
            mascota.vidaMaxima = 25
            mascota.poder = 37
            mascota.poderMaximo = 37

            mascota.arma1 = "Garras"
            mascota.arma2 = "Aliento"

            mascota.habilidad1 = "RELAMPAGO"
            mascota.habilidad2 = "SOBRECARGA"

            mascota.descripcion = "RAIZOR <br> Elemental de Rayo <br> Coste de invocación: 20 <br>"

        }


        if (comando == "NUEVO") {

            mascota.nombre = "NUEVO"
            mascota.imagen = "img/lobo.png"


            mascota.ataque = 0
            mascota.esquiva = 0
            mascota.mitigacion = 0
            mascota.velocidad = 0
            mascota.vida = 0
            mascota.vidaMaxima = 0
            mascota.poder = 0
            mascota.poderMaximo = 0

            mascota.arma1 = "Garras"
            mascota.arma2 = "Aliento"

            mascota.habilidad1 = "RELAMPAGO"
            mascota.habilidad2 = "SOBRECARGA"

            mascota.descripcion = "NUEVO."

        }









        guardarMascota()
        cerrarModales()
        edicionTotal = 0
        guardarBtn.style.display = "none"
        equipar = 0
        aprender = 0



    }



})