/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 *
 * let a = arr;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == true) {
        a[i][j]=1
      }
     if (arr[i][j] == false) {
        let k=0;
       for(let y=i-1;y<=i+1;y++){
         for(let x=j-1;x<=j+1;x++){
           if((x>=0)&&(y>=0)&&(x<a[i].length)&&(y<a.length)&&( arr[y][x] ==true)){
             k++
           }
         }
       }
       a[i][j]=k
      }
    }
  }
  return a;

 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(arr) {
  const a = [];
  for (let i = 0; i < arr.length; i++) {
    a[i] = [];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === true) {
        a[i][j] = 1;
      }
      if (arr[i][j] === false) {
        let k = 0;
        for (let y = i - 1; y <= i + 1; y++) {
          for (let x = j - 1; x <= j + 1; x++) {
            if ((x >= 0) && (y >= 0) && (x < arr[i].length) && (y < arr.length)) {
              if (arr[y][x] === true) {
                k += 1;
              }
            }
          }
        }
        a[i][j] = k;
      }
    }
  }
  return a;
}

module.exports = minesweeper;
