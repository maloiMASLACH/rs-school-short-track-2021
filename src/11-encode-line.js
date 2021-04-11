/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const a = str.split('');
  let s = '';

  for (let i = 0; i < a.length; i++) {
    let k = 1;
    while (a[i] === a[i + 1]) {
      i++;
      k++;
    }
    s += k === 1 ? '' : k;
    s += a[i];
  }
  return s;
}

module.exports = encodeLine;
