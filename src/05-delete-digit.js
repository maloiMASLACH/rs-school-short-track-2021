/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = -Infinity;
  let a = n;
  a += '';
  for (let i = 0; i < a.length; i++) {
    let ar = a.split('');
    ar.splice(i, 1);
    ar = +ar.join('');
    if (ar > max) {
      max = ar;
    }
  }
  return max;
}

module.exports = deleteDigit;
