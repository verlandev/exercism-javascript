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
  let totalDays = DAYS_PER_WEEK * week
  let indexArray = (week - 1) * DAYS_PER_WEEK

  for(let i = indexArray; i < totalDays; i++){
    birdsCount += birdsPerDay[i]
    console.log(birdsCount)
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
