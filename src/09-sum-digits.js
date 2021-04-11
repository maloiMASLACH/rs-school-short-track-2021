/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let k = `${n}`;
  k = k.split('');

  for (let i = 0; i < k.length; i++) {
    let s = 0;
    for (let j = i; j < k.length; j++) {
      s += Number(k[j]);
    }
    if (s < 10) {
      return s;
    }
  }
  return 0;
}

module.exports = getSumOfDigits;
