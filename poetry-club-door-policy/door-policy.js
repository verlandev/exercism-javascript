// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.
//
// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./door-policy.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Good luck with that door policy!

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
export function frontDoorResponse(line) {
  return line[0]
}

/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */
export function frontDoorPassword(word) {
  // Aplicamos la mayúscula solo a la primera letra
  const CAPITALIZE_LETTERS = word.toUpperCase()
  // Quitamos el resto de la palabra a partir del índice 1 que es la segunda posición de la palabra (la primera es 0)
  const NEXT_LETTERS = CAPITALIZE_LETTERS.slice(1)
  // Pero guardamos esa primera posición
  const FIRST_LETTER = CAPITALIZE_LETTERS[0]
  // Aplicamos las mínusculas al resto de letras
  const NEXT_LETTERS_LOWER_CASE = NEXT_LETTERS.toLowerCase()
  // Juntamos la palabra
  let frontPassword = FIRST_LETTER + NEXT_LETTERS_LOWER_CASE
  return frontPassword
}

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line
 * @returns {string}
 */
export function backDoorResponse(line) {
  // 1. Quitamos espacios innecesarios de la línea
  const LINE_WITHOUT_SPACES = line.trim()

  // Averiguaramos la longitud de la "nueva" línea. Nos devuelve un número
  let lineLength = LINE_WITHOUT_SPACES.length;

  // Podríamos hacer un bucle que recorra toda la línea y extraer así la última posición cuando el índice de la palabra sea igual a la longitud de la misma. 
  // Pero en lugar de eso, usando los métodos, vamos a "quitar" toda la parte de la línea que no nos interesa, salvo la última posición que siempre estará asociada al número que nos dé la longitud de la línea

  // Creamos una variable que almacene la última posición quitando 1 al total de la línea. Nos devuelve otro número
  let lastLetterPosition = lineLength - 1
  // Usamos el método slice() que quite todo hasta el valor de la última posición que es la que nos interesa
  let lastLetter = LINE_WITHOUT_SPACES.slice(lastLetterPosition)
  return lastLetter
}

/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
export function backDoorPassword(word) {
  // Convertimos la primera letra de la palabra en mayúsculas
  let capitalizeWord = word[0].toUpperCase()
  // Quitamos el resto de letras de la palabra partiendo de la segunda letra que es la posición 1
  let lowerCaseLetters = word.slice(1)
  // Sumamos la mayúsucla y el resto de la palabra para que salga correctamente
  let backPassword = capitalizeWord + lowerCaseLetters
  // Añadimos la el "please" al final
  return backPassword + ', please'
}
