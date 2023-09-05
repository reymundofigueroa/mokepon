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

//constantes del canva
const sectionVerMapa = document.getElementById("verMapa")
const mapa = document.getElementById("mapa")


let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodogue
let inputapipego
let inputRatigueya
let botonFuego 
let botonAgua 
let botonTierra 
let mascotaJugador
let mascotaJugadorObjeto
let ataquesMokepon
let ataquesMokeponEnemigo 
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let ataqueAleatorio = aleatorio(1,3)
let decicionCombate
let intentosJugador = 0
let intentosEnemigo = 0
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackgound = new Image()
mapaBackgound.src = "./imagenes/mapa.jpeg"
let ImagenDeFondo = new Image()
ImagenDeFondo.src = "./imagenes/fondo1.jpg"

class Mokepon {
    constructor(nombre, foto, vida, fotoMapa, x = 10, y = 10 ){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.x = x
        this.y = y
        this.ancho = 60
        this.alto = 60
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto )
    }
}


let hipodogue = new Mokepon("Hipodoge","./imagenes/hipodogue.jpeg", 5, "./imagenes/hipodogeCara.png")
let capipego = new Mokepon("Capipego", "./imagenes/capipeco.jpg", 5, "./imagenes/capipegoCara.png")
let ratigueya = new Mokepon("Ratigueya", "./imagenes/ratiguella.jpeg", 5, "./imagenes/ratigueyaCara.png")

let hipodogueEnemigo = new Mokepon("Hipodoge","./imagenes/hipodogue.jpeg", 5, "./imagenes/hipodogeCara.png", 195, 230)
let capipegoEnemigo = new Mokepon("Capipego", "./imagenes/capipeco.jpg", 5, "./imagenes/capipegoCara.png", 590, 100)
let ratigueyaEnemigo = new Mokepon("Ratigueya", "./imagenes/ratiguella.jpeg", 5, "./imagenes/ratigueyaCara.png",500, 280)

hipodogue.ataques.push(
    {nombre: "🌊", id: "botonAgua"},
    {nombre: "🌊", id: "botonAgua"},
    {nombre: "🌊", id: "botonAgua"},
    {nombre: "🔥", id: "botonFuego"},
    {nombre: "🌱", id: "botonTierra"}, 
)

hipodogueEnemigo.ataques.push(
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

capipegoEnemigo.ataques.push(
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

ratigueyaEnemigo.ataques.push(
    {nombre: "🌱", id: "botonTierra"},
    {nombre: "🌱", id: "botonTierra"},
    {nombre: "🌱", id: "botonTierra"},
    {nombre: "🌊", id: "botonAgua"},
    {nombre: "🔥", id: "botonFuego"},
     
)

mokepones.push(hipodogue, capipego, ratigueya)

function iniciarJuego(){
    sectionBotonReiniciar.style.display = "none"
    sectionVerMapa.style.display = "none"

   

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
    sectionSeleccionarMascota.style.display = "none"
    sectionSubEligeMascota.style.display = "none"
    sectionBotonContinuar.style.display = "none"
   
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
   sectionVerMapa.style.display = "flex"
   iniciarMapa()

  
 
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

function seleccionarMascotaEnemigo(enemigo){
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesMokeponEnemigo = enemigo.ataques
    secuenciaAtaque()
   
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesMokepon = `<button id=${ataque.id} class="botonAtaque BAtaque">${ataque.nombre}</button>
        `
        contenedorBotones.innerHTML += ataquesMokepon
})

    botonFuego = document.getElementById("botonFuego")
    botonAgua = document.getElementById("botonAgua")
    botonTierra = document.getElementById("botonTierra")
    botones = document.querySelectorAll(".BAtaque")

}

function secuenciaAtaque(){
    botones.forEach((boton) =>{
        boton.addEventListener("click", (e) => {
            if (e.target.textContent == "🔥"){
                ataqueJugador.push("FUEGO")
                boton.style.background = "#112f58"
                boton.disabled = true
            }else if (e.target.textContent == "🌱"){
                ataqueJugador.push("TIERRA")
                boton.style.background = "#112f58"
                boton.disabled = true
            }else if (e.target.textContent == "🌊"){
                ataqueJugador.push("AGUA")
                boton.style.background = "#112f58"
                boton.disabled = true
            }
        ataqueEnemigoAleatorio()
        })
    })
}



function ataqueEnemigoAleatorio(){
   let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1 )

    if(ataqueAleatorio == 0 || ataqueAleatorio == 1){
        ataqueEnemigo.push ("FUEGO")
    } else if(ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push ("AGUA")
    } else {
        ataqueEnemigo.push ("TIERRA")
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea(){
    if (ataqueJugador.length == 5) {
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo ){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate(){

    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] == ataqueEnemigo[index]){
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE")
        }else if(ataqueJugador[index] == "FUEGO" && ataqueEnemigo[index] == "TIERRA"){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            intentosJugador ++
            spanVidasJugador.innerHTML = intentosJugador
        }else if(ataqueJugador[index] == "AGUA" && ataqueEnemigo[index] == "FUEGO"){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            intentosJugador ++
            spanVidasJugador.innerHTML = intentosJugador
        }else if(ataqueJugador[index] == "TIERRA" && ataqueEnemigo[index] == "AGUA"){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            intentosJugador ++
            spanVidasJugador.innerHTML = intentosJugador
        }else {
            indexAmbosOponentes(index, index)
            crearMensaje("PERDISTE")
            intentosEnemigo ++
            spanVidasEnemigo.innerHTML = intentosEnemigo
        
    }    
}revisarVidas()}

function revisarVidas(){
    if(intentosEnemigo == intentosJugador){
        crearMensajeFinal("-EMAPATE-")
    }else if(intentosJugador > intentosEnemigo){
    crearMensajeFinal("✨✨GANASTE✨✨")
    }else {
    crearMensajeFinal("__LO SIENTO PERDISTE__")
}
}

function crearMensaje(){
    let nuevoAtaqueJugador = document.createElement("p")
    let nuevoAtaqueEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = decicionCombate
    nuevoAtaqueJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaqueJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    sectionMensajes.innerHTML = resultadoFinal
    sectionBotonReiniciar.style.display = "block"
}

function reiniciarJuego(){
    location.reload() 
}

function pintarCanvas(){
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0,0, mapa.width, mapa. height)
    lienzo.drawImage(
        mapaBackgound,
        0,
        0,
        mapa.width,
        mapa.height )
    mascotaJugadorObjeto.pintarMokepon()
    hipodogueEnemigo.pintarMokepon()
    capipegoEnemigo.pintarMokepon()
    ratigueyaEnemigo.pintarMokepon()
    if(mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0){
        revisarColision(hipodogueEnemigo)
        revisarColision(capipegoEnemigo)
        revisarColision(ratigueyaEnemigo)
    }
}

function moverDerecha(){
    mascotaJugadorObjeto.velocidadX =5
}

function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX  = -5
}

function moverArriba(){
    mascotaJugadorObjeto.velocidadY = -5
}

function moverAbajo(){
    mascotaJugadorObjeto.velocidadY = +5
}

function detenerMovimiento(){
    
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function sePresionaUnaTecla(event){
    switch (event.key) {
        case "ArrowUp":
            moverArriba()
            break
        case "ArrowDown":
            moverAbajo()
            break
        case "ArrowLeft":
            moverIzquierda()
            break
        case "ArrowRight":
            moverDerecha()
            break
        default:
            break
    }
}

function iniciarMapa(){
    mapa.width = 900
    mapa.height = 400
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)
    pintarCanvas()
    window.addEventListener("keydown", sePresionaUnaTecla)
    window.addEventListener("keyup",detenerMovimiento)
}

function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador == mokepones[i].nombre){
            return mokepones[i]
        }
    }
}

function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x
    if (
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ){
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)
    sectionSeleccionarAtaque.style.display = "flex"
    sectionVerMapa.style.display = "none"
    seleccionarMascotaEnemigo(enemigo)
    
    //alert("Hay colision con" + " " +  enemigo.nombre)
}

window.addEventListener("load", iniciarJuego)