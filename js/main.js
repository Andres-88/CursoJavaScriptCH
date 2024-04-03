//Clases
class Jugador{
    constructor(nombre){
        this.nombre = nombre;
        this.puntaje = 0;
        this.intentos = 3;
    }
}
//---------------------------FUNCIONES---------------------------
//Selector de Juego
function selector(){
    // seleccionado = document.querySelector(".games:checked");
    // console.log(seleccionado.value);
    let juegoSeleccionado = parseInt(seleccionado);
    
    if (seleccionado) {
        // seleccionado = parseInt(seleccionado.value);
        switch(seleccionado){
            case 1:
        
                juego1();
        
            break;
                
            case 2:
        
                juego2();    
        
            break;
        
            case 3:
        
                let jugador = prompt("Ingresá tu nombre:");
                juego3(jugador);
        
            break;
        
            case 4:
        
                juego4();
        
        }
    }else{
        alert("Por favor, selecciona un juego antes de empezar.");
    }    
}

//Carga Jugadores
const cargaPlayers = (cantPlayers) => {

    for(let i = 0; i < cantPlayers; i++){
        let carga = prompt("Ingrese el nombre del jugador " + (i+1));
        carga = carga.toUpperCase();
        let player = new Jugador(carga);
        players.push(player);
    }
}

// Juego Tablas
function juego1(){
    const cantAsaltos = 10;
    let cantJugadores = parseInt(prompt("Ingrese cantidad de jugadores:"));

    cargaPlayers(cantJugadores);

    if(cantJugadores > 1){
        alert("Tienen que resolver " + cantAsaltos + " productos");
    }else{
        alert("Tenés que resolver " + cantAsaltos + " productos\nQuien acierte más, ganará");
    }

    for(let i = 0; i < cantJugadores; i++){
        let asalto = 0;
        let factor1;
        let factor2;
        let resultado;
        // let puntaje = 0;
        alert("Es el turno de " + players[i].nombre + "\n¡Buena suerte!")
        while(asalto < 10){
            factor1 = Math.floor(Math.random() * 11);
            factor2 = Math.floor(Math.random() * 11);
            resultado = parseInt(prompt( factor1 + " x " + factor2 + " = "));
            
            if(resultado == factor1 * factor2){

                players[i].puntaje = players[i].puntaje + 1;
                // puntaje = puntaje + 1;
            }

            asalto = asalto + 1;
        }

        alert("¡Felicidades jugador " + players[i].nombre + "! \nTu puntaje es:\n " + players[i].puntaje);
    }

    for(let j = 0; j < players.length; j++){
        let ganador = new Jugador("Nadie");
        console.log("Los puntajes son los siguientes:\n" + players[j].nombre + ": " + players[j].puntaje);
        alert("Los puntajes son los siguientes:\n" + players[j].nombre + ": " + players[j].puntaje);
        if(players[j].puntaje > ganador){
            ganador.nombre = players[j].nombre;
            ganador.puntaje = players[j].puntaje;
        }
        console.log("¡El/la ganador/a es: "+ ganador.nombre + "!");
        alert("¡El/la ganador/a es: "+ ganador.nombre + "!");
    }


}

// Juego Ruleta Rusa
function juego2(){
    const hasta = 10;
    let intento = -1;              
    let cantParticipantes = parseInt(prompt("Ingrese cantidad de jugadores:"));

    cargaPlayers(cantParticipantes);        

    let nro = Math.floor(Math.random() * 11);

    alert("Pienso un número de 0 a " + hasta + " gana quien acierte");


    while(intento != nro){
        for (let i = 0; i < cantParticipantes; i++) {
            intento = parseInt(prompt(players[i].nombre + "\n¿Cuál es el número?"));
            
            if (intento == nro){
                console.log("¡Felicitaciones "+ players[i].nombre + "!\n¡Acertaste! El número es: " + nro + "\nHas ganado");
                alert ("¡Felicitaciones "+ players[i].nombre + "!\n¡Acertaste! El número es: " + nro + "\nHas ganado");
                break;
            }else{
                alert ("Fallaste\n¡Siguiente!")
            }
        }
    }
}

// Piedra, Papel o Tijera
function juego3(nombre){
    let ppt;    //ppt: piedra papel tijera
    let cpu;    //jugada de la cpu
    let pptEsp; //pptEsp: piedra papel tijera traducido de número a palabras
    let cpuEsp; //cpuEsp: piedra papel tijera traducido de número a palabras de la cpu   
    // let puntajeUsuario = 0;
    // let puntajeCPU = 0;
    const jugador = new Jugador(nombre);
    const jugadorCPU = new Jugador("CPU");

    for (let i = 0; i < 3; i++) {   

        cpu = Math.floor((Math.random() * 3) + 1);
        ppt = parseInt(prompt("¡Piedra, papel o tijera 1 2 3!\n1: Piedra\n2: Papel\n3: Tijera"));

        if(cpu == 1){
            cpuEsp = "Piedra";
        } else if (cpu == 2) {
            cpuEsp = "Papel";
        } else {
            cpuEsp = "Tijera";
        }

        if(ppt == 1){
            pptEsp = "Piedra";
        } else if (ppt == 2) {
            pptEsp = "Papel";
        } else {
            pptEsp = "Tijera";
        }

        alert(jugador.nombre + ": " + pptEsp + "\n"+ jugadorCPU.nombre + ": " + cpuEsp);

        if((jugadorCPU.puntaje == 0 && jugador.puntaje == 0) && ((cpu == 1 && ppt == 2) || (cpu == 2 && ppt == 3) || (cpu == 3 && ppt == 1))){
            jugador.puntaje = jugador.puntaje + 1;
            console.log("¡Punto para vos!\n" + jugador.nombre + ": " + jugador.puntaje +"\nCPU: " + jugadorCPU.puntaje + "\n...¿Dos de tres?");
            alert("¡Punto para vos!\n" + jugador.nombre + ": " + jugador.puntaje +"\nCPU: " + jugadorCPU.puntaje + "\n...¿Dos de tres?");

        }
        console.log(jugador.puntaje);

        if(!(i == 0) && (jugadorCPU.puntaje == 0 && !(jugador.puntaje == 0))  &&  ((cpu == 1 && ppt == 2) || (cpu == 2 && ppt == 3) || (cpu == 3 && ppt == 1))){
            jugador.puntaje = jugador.puntaje + 1;
            alert(jugador.nombre + ": " + jugador.puntaje + "\nCPU: " + jugadorCPU.puntaje);
            break;
        }

        if((ppt == 1 && cpu == 2) || (ppt == 2 && cpu == 3) || (ppt == 3 && cpu == 1)){
            jugadorCPU.puntaje = jugadorCPU.puntaje + 1;
            alert(jugador.nombre + ": " + jugador.puntaje + "\nCPU: " + jugadorCPU.puntaje);
        }

        if((ppt == cpu)){
            alert("¡Otra vez!");

            while (ppt == cpu){
                cpu = Math.floor((Math.random() * 3) + 1);
                ppt = parseInt(prompt("¡Piedra, papel o tijera 1 2 3!\n1: Piedra\n2: Papel\n3: Tijera"));

                if(cpu == 1){
                    cpuEsp = "Piedra";
                } else if (cpu ==2) {
                    cpuEsp = "Papel";
                } else {
                    cpuEsp = "Tijera";
                }
        
                if(ppt == 1){
                    pptEsp = "Piedra";
                } else if (ppt == 2) {
                    pptEsp = "Papel";
                } else {
                    pptEsp = "Tijera";
                }
                console.log(jugador.nombre + ": " + pptEsp + "\n" + jugadorCPU.nombre + ": "+ cpuEsp);
                alert(jugador.nombre + ": " + pptEsp + "\n" + jugadorCPU.nombre + ": "+ cpuEsp);

                if (ppt == cpu){
                    alert("¡Otra vez!");
                }
            }

            if((cpu == 1 && ppt == 2)|| (cpu == 2 && ppt == 3) || (cpu == 3 && ppt == 1)){
                jugador.puntaje = jugador.puntaje + 1;
            }else{
                jugadorCPU.puntaje = jugadorCPU.puntaje + 1;
            }
            
            alert(jugador.nombre + ": " + jugador.puntaje + "\nCPU: " + jugadorCPU.puntaje);         
        }
     
        if(jugador.puntaje == 2 || jugadorCPU.puntaje == 2){
            i = 9; //Valor aleatorio para salir del for. No se Si break hubiese servido.
        }
    }

    if(jugador.puntaje > jugadorCPU.puntaje){
        alert("Tuviste suerte...\n¡Ganaste!");
    } else {
        alert ("Gané\n¡Soy el mejor!");
    }
}

//Traga Monedas

function juego4(){
    const tragaMonedas = [0, 0, 0];
    let nombreJugador = prompt("Ingrese nombre del jugador");
    const jugadorTraga = new Jugador(nombreJugador);
    let level = parseInt(prompt("Ingrese el nivel de dificultad (iniciando por 2)")); //Cantidad de diferentes símbolos

    if(level < 2){  //Control que se coloque un número igual o mayor a 2
        while(level < 2){
            level = parseInt(prompt("Ese valor no está permitido.\Ingrese un número igual o mayor a 2:"));
        }
    }

    jugadorTraga.intentos = parseInt(prompt("¿Cuántos intentos desea realizar?\n(1 intento = 1 usd)"));

    let dineroInicial = jugadorTraga.intentos;

    for(let i = jugadorTraga.intentos; i > 0; i--){
        for(let j = 0; j < tragaMonedas.length; j++){  //Se carga el array
         tragaMonedas[j] = Math.floor(Math.random() * level);
     }
        console.log(tragaMonedas.join("|"));
        alert(tragaMonedas.join("|"));

        if((tragaMonedas[0] == tragaMonedas [1]) && (tragaMonedas[1] == tragaMonedas[2]) ){
         jugadorTraga.puntaje = jugadorTraga.puntaje + 1;
         console.log("¡Excelente!\nGanaste 1 usd");
         alert("¡Excelente!\nGanaste 1 usd");
        } else {
            jugadorTraga.puntaje = jugadorTraga.puntaje -1;
            console.log("¡Lástima!\nSigue intentando");
            alert("¡Lástima!\nSigue intentando");
        }
        console.log("Te quedan: " + (i-1) + " intentos");
        alert("Te quedan: " + (i-1) + " intentos");
    }

    if(jugadorTraga.puntaje > dineroInicial){
        let ganancia = jugadorTraga.puntaje - dineroInicial;
        console.log("¡Felicitaciones " + jugadorTraga.nombre + "!\nHas ganado un total de: " + jugadorTraga.puntaje + "\nTuviste una ganancia de: " + ganancia);
        alert("¡Felicitaciones " + jugadorTraga.nombre + "!\nHas ganado un total de: " + jugadorTraga.puntaje + "\nTuviste una ganancia de: " + ganancia);
    }else{
        if(jugadorTraga.puntaje < dineroInicial){
            console.log("¡Opps!\nIntenta nuevamente.");
            alert("¡Opps!\nIntenta nuevamente.");
        }else{
            console.log("No ganaste :(\n¡Pero no perdiste! :)\n ¡Sigue intentando!");
            alert("No ganaste :(\n¡Pero no perdiste! :)\n ¡Sigue intentando!");
        }
    }
}










// ---------------------------MAIN---------------------------

const players = [];
// let opcion = parseInt(prompt("Ingrese tipo de juego: \n 1- Tablas\n 2- Ruleta Rusa\n 3- Piedra, papel o tijera\n 4- Traga Monedas"));
let seleccionado = null;
let radio1 = document.querySelector("#tablas");
let radio2 = document.querySelector("#ruletaRusa");
let radio3 = document.querySelector("#ppt");
let radio4 = document.querySelector("#tm");

radio1.addEventListener("click", cambiarSelector);
radio2.addEventListener("click", cambiarSelector);
radio3.addEventListener("click", cambiarSelector);
radio4.addEventListener("click", cambiarSelector);


let btnEmpezar = document.getElementById("empezar");
btnEmpezar = addEventListener("click", btnPrueba);

function btnPrueba(){
    selector();
}

function cambiarSelector(){
    seleccionado = document.querySelector(".games:checked").value;
}


