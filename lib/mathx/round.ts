/**
 * @function round Rounds number to a certain precision
 * Negative precision will work as well: round(1234, -2) => 1200
 *
 * @param {number} num Number to be rounded
 * @param {number} precision Precision, the number to be rounded to
 *
 * @returns {number} Rounded number
 */
function round(num: string | number, precision: string | number = 12): number {
  return +(+(+num * 10 ** +precision).toFixed(0) * 10 ** -precision)
    .toFixed(+precision < 0 ? 0 : +precision);
}

export default round;
