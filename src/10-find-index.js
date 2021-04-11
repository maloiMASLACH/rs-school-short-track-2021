/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(arr, value) {
  const a = arr;
  const k = value;
  let cen = Math.round((a.length - 1) / 2);
  while (true) {
    if (k > a[cen]) {
      cen = Math.round(cen / 2 + cen);
      if (cen > a.length - 1) {
        cen = a.length - 1;
      }
    } else {
      cen = Math.floor(cen / 2);
    }
    if (a[cen] === k) {
      return cen;
    }
  }
}

module.exports = findIndex;
