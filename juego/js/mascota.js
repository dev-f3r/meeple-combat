class Mascota {
    constructor(
        nombre = "CRIATURA 1",
        imagen = "img/c1.png",
        icono = "img/portal.png",
        ataque = 0,
        esquiva = 0,
        mitigacion = 0,
        velocidad = 0,
        vida = 0,
        vidaMaxima = 0,
        poder = 0,
        poderMaximo = 0,
        arma1 = "",
        arma2 = "",
        habilidad1 = "",
        habilidad2 = "",
        descripcion = "Selecciona editar y luego el ícono de esta criatura para invocar otra."
    ) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.icono = icono;
        this.ataque = ataque;
        this.esquiva = esquiva;
        this.mitigacion = mitigacion;
        this.velocidad = velocidad;
        this.vida = vida;
        this.vidaMaxima = vidaMaxima;
        this.poder = poder;
        this.poderMaximo = poderMaximo;
        this.arma1 = arma1;
        this.arma2 = arma2;
        this.habilidad1 = habilidad1;
        this.habilidad2 = habilidad2;
        this.descripcion = descripcion;
    }

    // ? Metodo para cambiar las props por lotes
    setPropsMascota(props = {}) {
        for (let key in props) {
            if (key in this) {
                this[key] = props[key];
            }
        }
    }
}

export let listaMascotas = []

/* let myMascota = new Mascota();
console.log(myMascota.ataque);  // 0
console.log(myMascota.esquiva);  // 0
console.log(myMascota.icono);  // "img/portal.png"

myMascota.setPropsMascota({ataque: 100, esquiva: 100, icono: "img/another-icon.png"});

console.log(myMascota.ataque);  // 100
console.log(myMascota.esquiva);  // 100
console.log(myMascota.icono);  // "img/another-icon.png" */

let lobo = new Mascota(
    /* nombre */"LOBO",
    /* imagen */"img/lobo.png",

    /* ataque */3,
    /* esquiva */2,
    /* mitigacion */1,
    /* velocidad */6,
    /* vida */19,
    /* vidaMaxima */19,
    /* poder */22,
    /* poderMaximo */22,

    /* arma1 */"Mordisco",
    /* arma2 */"Garras",
    /* habilidad1 */"DERRIBO",
    /* habilidad2 */"DESGARRO",
    /* descripcion */"LOBO <br> Criatura de Sangre <br> Coste de invocación: 20"
)
listaMascotas.push(lobo)


