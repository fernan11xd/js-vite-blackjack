import _ from "underscore";

//Esta funcion crea un nuevo deck o baraja
/**
 * Crea baraja de cartas.
 *
 * @param {Array<string>} tipoCarta - Es un arreglo de tipo de cartas (e.g., ['C', 'D', 'H', 'S']).
 * @param {Array<string>} tipoEspecial - Envia un arreglo de tipo de cartas especiales (e.g., ['A', 'J', 'Q', 'K']).
 * @returns {Array<string>} Retorna la nueva baraja de carta.
 */
export const CrearDeck = (tipoCarta,tipoEspecial) => {
    if (!tipoCarta || tipoCarta.length === 0)
        throw new Error('tipoCarta es obligatorio como un arreglo de string');
    if (!tipoEspecial || tipoEspecial.length === 0)
        throw new Error('tipoCarta es obligatorio como un arreglo de string');
    //Inicializamos el arreglo vaciar
    let deck=[];
    //Asignamos el numero de cartas por su tipo
    for(let i=2; i<=10; i++){
        for(let tipo of tipoCarta){
            deck.push(i+tipo);
        }
    }
    //asignamos las cartas especiales por el tipo
    for(let tipo of tipoCarta){
        for(let especial of tipoEspecial){
            deck.push(especial+tipo);
        }
    }
    
    return _.shuffle(deck); //Bareajemos las cartas
}
