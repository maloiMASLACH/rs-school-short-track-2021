/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const a = names;
  const x = [];
  for (let i = 0; i < a.length; i++) {
    let k = 0;
    let kx = 0;
    for (let j = 0; j < i; j++) {
      if ((a[i] === a[j]) && (i !== j)) {
        k++;
      }
    }
    if (k === 0) {
      for (let q = 0; q < x.length; q++) {
        if ((a[i] === x[q]) && (i !== q)) {
          kx++;
        }
      }
    }
    if (kx !== 0) {
      x.push(`${a[i]}(${kx})`);
    } else if (k !== 0) {
      x.push(`${a[i]}(${k})`);
    } else {
      x.push(a[i]);
    }
  }
  return x;
}

module.exports = renameFiles;
