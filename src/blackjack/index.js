//importamos el underscore
import _ from 'underscore';
import {CrearDeck as CrearBaraja, PedirCarta, valorCarta, turnoComputadora,crearCarta} from './usecases';

  export let deck = [];
  const tipos = ['C','D','H','S'],
        especiales = ['A','J','Q','K'];
  export let puntosJugadores = [];

  //Referencias de botones de html
  const btnPedir = document.querySelector('#btnPedir'),
      btnDetener = document.querySelector('#btnDetener'), 
      btnNuevoJuego = document.querySelector('#btnNuevo');
  
  
  //DIV Y ETIQUETA SMALL
  export const  lblPuntos = document.querySelectorAll('small'),
        divCartasJugadores = document.querySelectorAll('.divCartas');

/**
 * Inicializa el juego de Blackjack.
 * 
 * @param {number} [numJugadores=2] - El número de jugadores que participarán en el juego. Por defecto es 2.
 * 
 * @returns {void}
 */
  const InicializarJuego = ( numJugadores = 2) =>{
      //Inicialiazamos areglos
      puntosJugadores=[];
      //Inicializamos el deck con nueva baraja de cartas
      deck=CrearBaraja(tipos,especiales);

     //recorremos los arreglos por la cantidad de jugadores 
      for(let i=0; i<numJugadores; i++){
          puntosJugadores.push(0);
      }
      //habilitamos los botones
      btnDetener.disabled = false;
      btnPedir.disabled = false;
      
      //limpiamos lbls de conteo
      lblPuntos.forEach(elem=> elem.innerText = 0);
      //limpiamos las cartas
      divCartasJugadores.forEach(elem=> elem.innerHTML = '');
  }
 
  InicializarJuego();

 
/**
 * Acumula puntos para un jugador basado en la carta obtenida.
 *
 * @param {number} turno - El índice del jugador cuyos puntos se están acumulando.
 * @param {string} carta - La carta obtenida por el jugador.
 * @returns {number} Los puntos actualizados del jugador.
 */
  export const AcumularPuntos = (turno,carta)=>{
      puntosJugadores[turno] = puntosJugadores[turno]+valorCarta(carta);
      lblPuntos[turno].innerHTML = '<b>'+puntosJugadores[turno]+'</b>';
      return puntosJugadores[turno];
  }


/**
 * Muestra un mensaje indicando el ganador del juego basado en los puntos de la computadora y del jugador.
 *
 * @param {number} puntosComputadora - Los puntos obtenidos por la computadora.
 * @param {number} puntosMinimos - Los puntos mínimos requeridos por el jugador.
 */
  export const retornarMensaje = (puntosComputadora,puntosMinimos) =>{
       //Ponemos un timeout para que nuestro mensaje aparezca en un 
      //milisegundo despues
      setTimeout(() =>{
          let mensaje;
          
          if(puntosMinimos > 21){
              mensaje = 'Computadora Gana';
          }else if(puntosComputadora > 21){
              mensaje = 'Jugador Gana';
          }
          else if(puntosComputadora === puntosMinimos){ 
              mensaje = 'Nadie Gana(!)'; 
          } else{ mensaje='Computadora Gana !!';}

          alert(mensaje);
      },100);
   
      
  }

/**
 * Función para manejar la acción de pedir una carta en el juego de blackjack.
 * Solicita una carta, actualiza los puntos del jugador, crea la carta en la pantalla,
 * y verifica si el jugador ha ganado o perdido.
 * 
 * @function LlamarCarta
 * @returns {void}
 */
  const LlamarCarta = () =>{
      //pedimos cualquier carta
      const carta = PedirCarta();
      //dependiendo de las cartas vamos sumando los puntos
      const puntosJugador = AcumularPuntos(0,carta);

      //CREAMOS LA CARTA EN PANTALLA
      crearCarta(carta,0);

      if(puntosJugador > 21){
          console.warn('Lo siento, Perdiste');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugador);
      }else if(puntosJugador === 21){
          console.warn('21, Felcidades Ganaste');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          setTimeout(() => {
              alert('21, Felcidades Ganaste');
          }, 100);
          
      }
  }

/**
 * Detiene el juego actual deshabilitando los botones relevantes e iniciando el turno de la computadora.
 * 
 * Esta función realiza las siguientes acciones:
 * - Deshabilita el botón "Pedir" para evitar más solicitudes de cartas.
 * - Habilita el botón "Nuevo Juego" para permitir iniciar un nuevo juego.
 * - Deshabilita el botón "Detener" para evitar detener el juego nuevamente.
 * - Llama a la función `turnoComputadora` para manejar el turno de la computadora, pasando los puntos del jugador como argumento.
 */
  const DetenerJuego = () =>{
      //Deshabilitamos los botones
      btnPedir.disabled = true;
      btnNuevoJuego.disabled = false;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugadores[0]);
  }

  //Eventos                  //callback funcion de flecha
  btnPedir.addEventListener('click', () =>{
      LlamarCarta();    
  });

  //BTN-DETENER 
  btnDetener.addEventListener('click', ()=>{
      DetenerJuego();
  });

  /*
  RESETEAR TODO -btn Nuevo Juego
  */
  btnNuevoJuego.addEventListener('click',()=>{
      InicializarJuego();
  });


