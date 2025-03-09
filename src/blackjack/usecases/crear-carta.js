import { divCartasJugadores } from '..';


/**
 * Crea y agrega un elemento de imagen de carta al contenedor de cartas del jugador según el turno.
 *
 * @param {string} carta - El identificador de la carta (por ejemplo, '2H' para 2 de Corazones).
 * @param {number} turno - El índice del turno del jugador para determinar a qué contenedor de jugador agregar la carta.
 */
export const crearCarta = (carta, turno) => {
    if(!carta) throw new Error('La carta es necesaria');
    //creamos la img
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`; //colocamos la carta con la constante
    imgCarta.classList.add('carta');
    //mostramos las carta
    divCartasJugadores[turno].append(imgCarta); //Colocamos la img de la carta segun el turno
};
