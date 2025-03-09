import { puntosJugadores, AcumularPuntos, retornarMensaje } from '../index.js';
import { crearCarta } from './crear-carta.js';
import { PedirCarta } from './pedir-carta.js';


/**
 * Ejecuta el turno de la computadora en el juego de blackjack.
 *
 * @param {number} puntosMinimos - Los puntos mínimos que la computadora necesita alcanzar.
 */
export const turnoComputadora = (puntosMinimos) => {
    if (!puntosMinimos) throw new Error('Puntos minimos son necesarios');

    let puntosComputadora = 0;
    const turnoJugador = puntosJugadores.length - 1;

    do {
        const carta = PedirCarta(); //Pedimos la carta          
        puntosComputadora = AcumularPuntos(turnoJugador, carta); //Evaluamos el turno del jugador y los puntos de la carta
        crearCarta(carta, turnoJugador); //mostramos la carta   

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    retornarMensaje(puntosComputadora, puntosMinimos); //Retornamos la alerta si perdio, gano o empato
};
