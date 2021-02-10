
const imagenconcruz = document.getElementById("imagenconcruz")

function abrir(){ 
    imagenconcruz.style.display ="block" 


}
function cerrar(){ 
    imagenconcruz.style.display= "none"


}



function juego(eleccion) {

var elecciondecpu = Math.floor(Math.random()*(1 + 3))
console.log (elecciondecpu)
if (eleccion==elecciondecpu){
    console.log("empate")
} else if (1==eleccion){
    if(elecciondecpu==2) {
        console.log("You lose")
    } else {
        console.log("Win")
    }
}else if(2==eleccion){
    if(elecciondecpu==1){
        console.log("WIN")
    }else {
        console.log("You lose")
    }

}else if (3==eleccion){
    if(elecciondecpu==1){
        console.log("You lose")

    }else {
        console.log("Win")
    }
}


}