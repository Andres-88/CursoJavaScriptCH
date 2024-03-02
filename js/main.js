//---------------------------FUNCIONES---------------------------
// Juego Tablas
function juego1(){
    const cantAsaltos = 10;
    let cantJugadores = parseInt(prompt("Ingrese cantidad de jugadores:"));
    alert("Tenés que resolver " + cantAsaltos + " productos")

    for(let i = 1; i <= cantJugadores; i++){
        let asalto = 0;
        let factor1;
        let factor2;
        let resultado;
        let puntaje = 0;
        alert("Es el turno del jugador " + i + "\n¡Buena suerte!")
        while(asalto < 10){
            factor1 = Math.floor(Math.random() * 11);
            factor2 = Math.floor(Math.random() * 11);
            resultado = parseInt(prompt( factor1 + " x " + factor2 + " = "));
            
            if(resultado == factor1 * factor2){
                puntaje = puntaje + 1;
            }

            asalto = asalto + 1;
        }

        alert("¡Felicidades jugador " + i + "! \nTu puntaje es:\n " + puntaje);
        puntaje = 0;
    }
}

// Juego Sorteo
function juego2(){
    const hasta = 10;
            let intento = -1;              
            let cantParticipantes = parseInt(prompt("Ingrese cantidad de jugadores:"));
            let nro = Math.floor(Math.random() * 11);

            alert("Pienso un número de 0 a " + hasta + " gana quien acierte");


            while(intento != nro){
                for (let i = 1; i <= cantParticipantes; i++) {
                    intento = parseInt(prompt("Jugador " + i + "\n¿Cuál es el número?"));
                    
                    if (intento == nro){
                        alert ("¡Felicitaciones jugador " + i + "!\nEl número es: " + nro + "\nHas ganado");
                        break;
                    }else{
                        alert ("Fallaste\n¡Siguiente!")
                    }
                }
            }
}



// ---------------------------MAIN---------------------------

let opcion = parseInt(prompt("Ingrese tipo de juego: \n 1- Tablas\n 2- Sorteo"));

switch(opcion){
    case 1:

        juego1();

    break;
        
    case 2:

        juego2();    

    break;

}