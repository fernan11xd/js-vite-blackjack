
/**
 * Calcula el valor de una carta dada en un juego de blackjack.
 *
 * @param {string} carta - La carta a evaluar. La carta debe estar representada como una cadena
 *                         donde el último carácter indica el palo y los caracteres precedentes
 *                         indican el valor (por ejemplo, '10H' para el diez de corazones).
 * @returns {number} El valor de la carta. Las cartas con figuras (K, Q, J) valen 12,11,10 y los Ases valen 1,
 *                   y las cartas numéricas valen sus respectivos valores.
 */
export const valorCarta = (carta) => {
    //Con el substring solo tomamos los valores
    //0 posicion inicial
    // length posicion final
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ? //validamos si no es numero
        (valor === 'A') ? 1 :
            (valor === 'K') ? 12 :
                (valor === 'Q') ? 11 : 10
        : valor * 1; // SI ES NUMERO SE MULTIPLICA POR UNO
};
