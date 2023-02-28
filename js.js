const ROCK = "piedra"
const PAPEL = "papel"
const TIJERA = "tijeras"

const EMP = 0
const WIN = 1
const LOSE = 2


const piedrabtn = document.getElementById("piedra")
const papelbtn = document.getElementById("papel")
const tijerabtn = document.getElementById("tijeras")
const resultado = document.getElementById("res")
const imgJugador = document.getElementById("jugador")
const imgMaquina = document.getElementById("maquina")

piedrabtn.addEventListener("click",()=>{
console.log("rock");
inicio(ROCK);
});

papelbtn.addEventListener("click",()=>{
    console.log("paper");
    inicio(PAPEL);

});

tijerabtn.addEventListener("click",()=>{
    console.log("scissors");
    inicio(TIJERA);

});

function inicio(eleccion){
    imgJugador.src = "img/"+eleccion+".jpg";
  resultado.innerHTML = "ESCOGIENDO...";

   const intervalo = setInterval(function(){

    const opcionMa = calMaquina();
    imgMaquina.src = "img/"+opcionMa+".jpg";

  },200)
    setTimeout(function(){
    
        clearInterval(intervalo);
        const opcionMa = calMaquina();
        console.log(opcionMa);
        const result = calResult(eleccion,opcionMa);
        imgMaquina.src = "img/"+opcionMa+".jpg";
    
         
     switch(result){
        case EMP:
            resultado.innerHTML = "HAS EMPATADO"
            break;
            case WIN:
                resultado.innerHTML = "HAS GANADO"
    
                break;
                case LOSE:
                    resultado.innerHTML = "HAS PERDIDO"
    
                    break;
     }
    },2000)
    
}

function calMaquina(){
    const  number = Math.floor(Math.random()*3)
    switch (number){
        case 0:
            return ROCK;
            case 1:
            return PAPEL;
            case 2:
            return TIJERA;
    }
}

function calResult(eleccion,opcionMa){
    if(eleccion === opcionMa){
    return EMP;
    }else if (eleccion === ROCK){
        if(opcionMa===PAPEL) return LOSE;
        if(opcionMa===TIJERA) return WIN;
    }else if (eleccion === PAPEL ){
        if(opcionMa===TIJERA) return LOSE;
        if(opcionMa===ROCK) return WIN;
    }else if (eleccion === TIJERA ){
        if(opcionMa===PAPEL) return WIN;
        if(opcionMa===ROCK) return LOSE;
    }
}