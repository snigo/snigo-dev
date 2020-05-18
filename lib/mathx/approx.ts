import getPrecision from './get-precision';

/**
 * Checks if the first argument approximately equals
 * to the second argument within delta
 *
 * @param {number} a Number to be checked
 * @param {number} b Number to be checked
 * @param {number} delta Acceptable difference between a and b
 *
 * @returns {boolean} True or False
 */
function approx(a: string | number, b: string | number, delta: string | number = 0): boolean {
  const precision = Math.max(getPrecision(a), getPrecision(b), getPrecision(delta));

  return +Math.abs(+a - +b).toFixed(precision) <= delta;
}

export default approx;
