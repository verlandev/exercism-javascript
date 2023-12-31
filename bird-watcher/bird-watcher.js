// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  // Establecemos una variable local que establece el conteo a 0 y que debe ir variando a medida que avanza el bucle
  let birdsCount = 0

  // Creamos un bucle que recorra el array
  for (let i = 0; i < birdsPerDay.length; i++){
    // En cada vuelta sumamos a la variable de conteo el valor de cada una de las posiciones del índice del array
    birdsCount += birdsPerDay[i]
  }
  return birdsCount
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  // Creamos una variable inicializada en 0 que será la que lleve el conteo
  let birdsCount = 0
  // Creamos una constante con los días que tiene una semana
  const DAYS_PER_WEEK = 7
  // Calculamos el índice final para la semana dada o el primer día de la siguiente
  let totalDays = DAYS_PER_WEEK * week
  // Calculamos el índice de inicio en el array para la semana dada
    // Para la semana 1 (week = 1) --> pero restamos 1 porque en un array la primera posición es 0
    // Así para la semana 2 (week = 2) --> empieza a partir del índice 7
  let indexStart = (week - 1) * DAYS_PER_WEEK

  // Recorremos el array desde el índice de inicio hasta el índice justo antes de totalDays
  for(let i = indexStart; i < totalDays; i++){
    // Sumamos al contador el valor de cada uno de los índices a medida que va avanzando
    birdsCount += birdsPerDay[i]
  }

  return birdsCount
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  
}
