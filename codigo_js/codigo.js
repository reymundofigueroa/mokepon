let ataqueJugador
let ataqueEnemigo
let decicionCombate
let vidasJugador = 3
let vidasEnemigo = 3


function iniciarJuego(){

    let sectionBotonReiniciar = document.getElementById("reiniciar")
    sectionBotonReiniciar.style.display = "none"

    let sectionSeleccionarAtaque = document.getElementById("seleccionarAtaque")
    sectionSeleccionarAtaque.style.display = "none"
    

    let botonMascotaJugador = document.getElementById("botonMascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("botonFuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("botonAgua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("botonTierra")
    botonTierra.addEventListener("click", ataqueTierra)
    
    let botonReiniciar = document.getElementById("botonReiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function aleatorio (min, max){
    return Math.floor(Math.random() * (max - min + 1) + 1)
}

function seleccionarMascotaJugador(){
    let sectionSeleccionarAtaque = document.getElementById("seleccionarAtaque")
    sectionSeleccionarAtaque.style.display = "block"
   
let inputHipodogue = document.getElementById("hipodogue")
   let inputapipego = document.getElementById("capipego")
   let inputRatigueya = document.getElementById("ratigueya")
   let sapnMAscotaJugador = document.getElementById("mascotaJugador") 


    if(inputHipodogue.checked){
    sapnMAscotaJugador.innerHTML = "Hipodogue"
   }
   else if(inputapipego.checked){
    sapnMAscotaJugador.innerHTML = "Capipego"
   }
   else if(inputRatigueya.checked){
    sapnMAscotaJugador.innerHTML = "Ratigueya"   }
   else{
    alert("Tienes que escojer una mascota")
   }

   seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let sectionSeleccionarMascota = document.getElementById("seleccionarMascota")
    let sectionSubEligeMascota = document.getElementById("subEligeMascota")
    let sectionBotonContinuar = document.getElementById("botonContinuar")

    sectionSubEligeMascota.style.display = "none"
    sectionSeleccionarMascota.style.display = "none"
    sectionBotonContinuar.style.display = "none"
    

    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascotaEnemigo") 
    
    if(mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = "Hipodogue"
    } else if(mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = "Capipego"
    } else if(mascotaAleatorio == 3){
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
}

function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueEnemigoAleatorio()
}

function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueEnemigoAleatorio()
}
function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueEnemigoAleatorio()
}

function ataqueEnemigoAleatorio(){
    let ataqueAleatorio = aleatorio(1,3)
    
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
   let spanVidasJugador = document.getElementById("vidasJugador")
   let spanVidasEnemigo = document.getElementById("vidasEnemigo")
   
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
    let sectionMensaje = document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    
    parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + "la mascota del enemigo ataco con " + ataqueEnemigo +" - " + decicionCombate
    sectionMensaje.appendChild(parrafo)
}


function crearMensajeFinal(resultadoFinal){
    let sectionMensaje = document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    
    parrafo.innerHTML = resultadoFinal
    sectionMensaje.appendChild(parrafo)

    let botonFuego = document.getElementById("botonFuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("botonAgua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("botonTierra")
    botonTierra.disabled = true

    let sectionBotonReiniciar = document.getElementById("reiniciar")
    sectionBotonReiniciar.style.display = "block"

}

function reiniciarJuego(){
    location.reload() 
}

window.addEventListener("load", iniciarJuego)