// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./freelancer-rates.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Get those rates calculated!

const HOURS_PER_DAY = 8; // Horas de trabajo al día
const BILLABLE_DAYS = 22; // Días facturables

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  const RATE_PER_DAY = ratePerHour * HOURS_PER_DAY
  return RATE_PER_DAY
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
    const NUMBER_OF_DAYS = Math.floor(budget / (ratePerHour * HOURS_PER_DAY))
    return NUMBER_OF_DAYS
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  // Sacamos el número total de meses que necesita el proyecto y lo rendondeamos por abajo para obtener los meses enteros sobre los que se aplica el descuento
  let totalProjectMonths = Math.floor(numDays / BILLABLE_DAYS);
  // Sacamos el remanente de los días sueltos con respecto al proyecto
  let excedingDays = numDays % BILLABLE_DAYS
  // Calculamos el precio por día trabajado
  let ratePerDay = ratePerHour * HOURS_PER_DAY

  // Ahora, calculamos el precio de esos meses enteros
  let monthsCost = totalProjectMonths * BILLABLE_DAYS * ratePerDay

  // Valoramos el descuento sobre el total del proyecto (100% --> 1)
  let discountedCost = 1 - discount

  // Aplicamos el descuento a los meses del proyecto (facturables en 22 días)
  let monthsCostDiscounted = monthsCost * discountedCost
  // Calculamos el precio de los días que quedan a precio normal
  let excedingDaysCost = excedingDays * ratePerDay
  
  // Ahora sí, sacamos el coste total del proyecto incluyendo el descuento y lo redondeamos por abajo.
  let totalCost = monthsCostDiscounted + excedingDaysCost
  return Math.ceil(totalCost)
}
