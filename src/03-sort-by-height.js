/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const q = [];
  const a = arr;
  for (let i = 0; i < arr.length; i++) {
    if (a[i] !== -1) {
      q.push(a[i]);
    }
  }
  q.sort((c, b) => c - b);
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (a[i] !== -1) {
      a[i] = q[k];
      k++;
    }
  }
  return a;
}

module.exports = sortByHeight;
