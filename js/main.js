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

// Juego Ruleta Rusa
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

// Piedra, Papel o Tijera
function juego3(nombre){
    let ppt;
    let cpu;
    let pptEsp;
    let cpuEsp;    
    let puntajeUsuario = 0;
    let puntajeCPU = 0;

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

        alert(nombre + ": " + pptEsp + "\nCPU: "+ cpuEsp);

        if((puntajeCPU == 0 && puntajeUsuario == 0) && ((cpu == 1 && ppt == 2) || (cpu == 2 && ppt == 3) || (cpu == 3 && ppt == 1))){
            puntajeUsuario = puntajeUsuario + 1;
            alert("¡Punto para vos!\n" + nombre+ ": " + puntajeUsuario+"\nCPU: " + puntajeCPU + "\n...¿Dos de tres?");
            
        }

        if((puntajeCPU != 0 && puntajeUsuario != 0) && ((cpu == 1 && ppt == 2) || (cpu == 2 && ppt == 3) || (cpu == 3 && ppt == 1))){
            puntajeUsuario = puntajeUsuario + 1;
            alert(nombre + ": " + puntajeUsuario + "\nCPU: " + puntajeCPU);
        }

        if((ppt == 1 && cpu == 2) || (ppt == 2 && cpu == 3) || (ppt == 3 && cpu == 1)){
            puntajeCPU = puntajeCPU + 1;
            alert(nombre + ": " + puntajeUsuario + "\nCPU: " + puntajeCPU);
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

                alert(nombre + ": " + pptEsp + "\nCPU: "+ cpuEsp);

                if (ppt == cpu){
                    alert("¡Otra vez!");
                }
            }

            if((cpu == 1 && ppt == 2)|| (cpu == 2 && ppt == 3) || (cpu == 3 && ppt == 1)){
                puntajeUsuario = puntajeUsuario + 1;
            }else{
                puntajeCPU = puntajeCPU + 1;
            }
            
            alert(nombre + ": " + puntajeUsuario + "\nCPU: " + puntajeCPU);         
        }
     
        if(puntajeUsuario == 2 || puntajeCPU == 2){
            i = 9; //Valor aleatorio para salir del for. No se Si break hubiese servido.
        }
    }

    if(puntajeUsuario > puntajeCPU){
        alert("Tuviste suerte...\n¡Ganaste!");
    } else {
        alert ("Gané\n¡Soy el mejor!");
    }
}

// ---------------------------MAIN---------------------------

let opcion = parseInt(prompt("Ingrese tipo de juego: \n 1- Tablas\n 2- Ruleta Rusa\n 3- Piedra, papel o tijera"));

switch(opcion){
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
}