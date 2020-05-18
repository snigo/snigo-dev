import round from './round';

/**
 * @function toNumber Converts string or number to a certain precision
 * NOTE! This function will not coerce values to number, so
 * toNumber(false) => NaN
 * toNumber(null) => NaN
 *
 * @param {string | number} num Number to be converted
 * @param {number} precision Precision, the number to be rounded to
 */
function toNumber(
  num: string | number | String | Number | BigInt,
  precision: string | number = 12,
): number {
  if (num == null || Array.isArray(num)) return NaN;

  const str = num.toString();
  let output = /%$/.test(str) ? +str.slice(0, -1) / 100 : +str;
  if (precision !== undefined) {
    output = round(+output, precision);
  }

  return output;
}

export default toNumber;
