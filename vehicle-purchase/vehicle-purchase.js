// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  if(kind === 'car' || kind === 'truck'){
    return true
  } else {
    return false
  }
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  option1.toUpperCase()
  option2.toUpperCase()
  // Hay que tener en cuenta que el simbolo "<" indica que la primera letra viene antes que la segunda 
  // a < b < c < d ...
  if (option1 < option2){
    return option1 + ' is clearly the better choice.'
  } else {
    return option2 + ' is clearly the better choice.'
  }
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  let cost = 0
  if( age < 3 ){
    cost = 0.8 * originalPrice
  } else if ( age > 10) {
    cost = 0.5 * originalPrice
  } else {
    cost = 0.7 * originalPrice
  }
  return cost
}
