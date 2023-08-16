//variables de la funcion "iniciarJuego"
const botonReiniciar = document.getElementById("botonReiniciar")
const botonMascotaJugador = document.getElementById("botonMascota")

//variables de la funcion "seleccionarMascotaJugador"
const sapnMAscotaJugador = document.getElementById("mascotaJugador")

//variables de la funcion "seleccionarMascotaEnemigo"
const sectionSeleccionarMascota = document.getElementById("seleccionarMascota")
const sectionSubEligeMascota = document.getElementById("subEligeMascota")
const sectionBotonContinuar = document.getElementById("botonContinuar")
const spanMascotaEnemigo = document.getElementById("mascotaEnemigo") 

//variables de la funcion "combate"
const spanVidasJugador = document.getElementById("vidasJugador")
const spanVidasEnemigo = document.getElementById("vidasEnemigo")

//variables de la funcion "crearMensaje"
const ataqueDelJugador = document.getElementById("ataque-del-jugador")
const ataqueDelEnemigo = document.getElementById("ataque-del-enemigo")

//variables que se usan en mas de una funcion
const sectionSeleccionarAtaque = document.getElementById("seleccionarAtaque")
const sectionMensajes = document.getElementById("resultado")

const sectionBotonReiniciar = document.getElementById("reiniciar")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorBotones = document.getElementById("contenedorBotones")

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones
let inputHipodogue
let inputapipego
let inputRatigueya
let botonFuego 
let botonAgua 
let botonTierra 
let mascotaJugador
let ataquesMokepon
let ataqueAleatorio = aleatorio(1,3)
let decicionCombate
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodogue = new Mokepon("Hipodoge","./imagenes/hipodogue.jpeg", 5)
let capipego = new Mokepon("Capipego", "./imagenes/capipeco.jpg", 5)
let ratigueya = new Mokepon("Ratigueya", "./imagenes/ratiguella.jpeg", 5)

hipodogue.ataques.push(
    {nombre: "🌊", id: "botonAgua"},
    {nombre: "🌊", id: "botonAgua"},
    {nombre: "🌊", id: "botonAgua"},
    {nombre: "🔥", id: "botonFuego"},
    {nombre: "🌱", id: "botonTierra"}, 
)

capipego.ataques.push(
    {nombre: "🔥", id: "botonFuego"},
    {nombre: "🔥", id: "botonFuego"},
    {nombre: "🔥", id: "botonFuego"},
    {nombre: "🌊", id: "botonAgua"},
    {nombre: "🌱", id: "botonTierra"}, 
)

ratigueya.ataques.push(
    {nombre: "🌱", id: "botonTierra"},
    {nombre: "🌱", id: "botonTierra"},
    {nombre: "🌱", id: "botonTierra"},
    {nombre: "🌊", id: "botonAgua"},
    {nombre: "🔥", id: "botonFuego"},
     
)

mokepones.push(hipodogue, capipego, ratigueya)

function iniciarJuego(){
    sectionBotonReiniciar.style.display = "none"

    mokepones.forEach((Mokepon) => {
        opcionDeMokepones = `<input type="radio" name="mascota" id=${Mokepon.nombre}>
        <label class="tarjetaMokepon" for=${Mokepon.nombre}>
            <p>${Mokepon.nombre}</p>
            <img src=${Mokepon.foto} alt="${Mokepon.nombre}">
        </label>`

        contenedorTarjetas.innerHTML += opcionDeMokepones
    })

    inputHipodogue = document.getElementById("Hipodoge")
    inputapipego = document.getElementById("Capipego")
    inputRatigueya = document.getElementById("Ratigueya")

    sectionSeleccionarAtaque.style.display = "none"
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function aleatorio (min, max){
    return Math.floor(Math.random() * (max - min + 1) + 1)
}

function seleccionarMascotaJugador(){ 
    sectionSeleccionarAtaque.style.display = "flex"
   
    if(inputHipodogue.checked){
    sapnMAscotaJugador.innerHTML = inputHipodogue.id
    mascotaJugador = inputHipodogue.id
   }
   else if(inputapipego.checked){
    sapnMAscotaJugador.innerHTML = inputapipego.id
    mascotaJugador = inputapipego.id
   }
   else if(inputRatigueya.checked){
    sapnMAscotaJugador.innerHTML = inputRatigueya.id 
    mascotaJugador = inputRatigueya.id 
  }
   else{
    alert("Tienes que escojer una mascota")
   }

   extraerAtaques(mascotaJugador)
   seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador == mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1, mokepones.length -1)

    sectionSubEligeMascota.style.display = "none"
    sectionSeleccionarMascota.style.display = "none"
    sectionBotonContinuar.style.display = "none"
    
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesMokepon = `<button id=${ataque.id} class="botonAtaque">${ataque.nombre}</button>
        `
        contenedorBotones.innerHTML += ataquesMokepon
})

    botonFuego = document.getElementById("botonFuego")
    botonAgua = document.getElementById("botonAgua")
    botonTierra = document.getElementById("botonTierra")

    botonFuego.addEventListener("click", ataqueAgua)
    botonAgua.addEventListener("click", ataqueTierra)
    botonTierra.addEventListener("click", ataqueFuego)
}

function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueEnemigoAleatorio()
}

function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueEnemigoAleatorio()
}

function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueEnemigoAleatorio()
}

function ataqueEnemigoAleatorio(){
    if(ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"
    } else if(ataqueAleatorio == 2){
        ataqueEnemigo = "AGUA"
    } else if(ataqueAleatorio == 3){
        ataqueEnemigo = "TIERRA"
    }
    combate()
}

function combate(){
    if(ataqueEnemigo == ataqueJugador){
        decicionCombate = "EMPATE 😑😑😑"
        crearMensaje()
    } else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA" ){
        decicionCombate = "GANASTE 🎉🎉🎉🔥"
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
        crearMensaje()
    } else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO"){
        decicionCombate = "GANASTE 🎉🎉🎉🌊"
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
        crearMensaje()
    } else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA"){
        decicionCombate = "GANASTE 🎉🎉🎉🌱"
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
        crearMensaje()
    } else {
        decicionCombate = "PERDISTE 😥😥😥"
        vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador
        crearMensaje()
    }

    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal("FELICITACIONES! GANASTE 😍🎉🎉👍")
    }else if(vidasJugador == 0)
    crearMensajeFinal("Lo siento, has perdido 😥😥")
}

function crearMensaje(){
    let nuevoAtaqueJugador = document.createElement("p")
    let nuevoAtaqueEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = decicionCombate
    nuevoAtaqueJugador.innerHTML = ataqueJugador 
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaqueJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    sectionMensajes.innerHTML = resultadoFinal
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    sectionBotonReiniciar.style.display = "block"
}

function reiniciarJuego(){
    location.reload() 
}

window.addEventListener("load", iniciarJuego)