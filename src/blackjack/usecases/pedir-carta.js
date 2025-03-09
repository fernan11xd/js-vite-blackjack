import { deck } from '../index.js';


/**
 * Saca una carta del mazo.
 * 
 * @throws {Error} Si no hay cartas disponibles en el mazo.
 * @returns {string} La carta sacada del mazo.
 */
export const PedirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay cartas disponibles en el deck';
    }
    return deck.pop();
}
