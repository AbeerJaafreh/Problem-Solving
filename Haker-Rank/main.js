console.log('Haker Rank');

/* 
3D Surface Area
https://www.hackerrank.com/challenges/3d-surface-area/problem
*/

function surfaceArea(A) {
  console.log('A:', A);
  let size = A.length;
  let price;
  let y = [];
  if (A.length === 1) {
    size = A[0].length;
    price = size * 2;
    A[0].forEach((elem, i) => {
      let priceElement = elem * 4;
      if (i > 0) {
        let elemIBefore = A[0][i - 1];
        if (elem <= elemIBefore) {
          priceElement -= elem;
        } else {
          priceElement -= elemIBefore;
        }
      }
      if (i < A[0].length - 1) {
        let elemIAfter = A[0][i + 1];
        if (elem <= elemIAfter) {
          priceElement -= elem;
        } else {
          priceElement -= elemIAfter;
        }
      }
      y.push(priceElement);
    });
  } else if (A[0].length === 1) {
    size = A.length;
    price = size * 2;
    A.forEach((element, i) => {
      element.forEach((elem, j) => {
        let priceElement = elem * 4;
        if (i > 0) {
          let elemIBefore = A[i - 1][0];
          if (elem <= elemIBefore) {
            priceElement -= elem;
          } else {
            priceElement -= elemIBefore;
          }
        }
        if (i < A.length - 1) {
          let elemIAfter = A[i + 1][0];
          if (elem <= elemIAfter) {
            priceElement -= elem;
          } else {
            priceElement -= elemIAfter;
          }
        }
        y.push(priceElement);
      });
    });
  } else {
    price = size ** 2 * 2;
    A.forEach((element, i) => {
      element.forEach((elem, j) => {
        let priceElement = elem * 4;
        if (i > 0) {
          let elemIBefore = A[i - 1][j];
          if (elem <= elemIBefore) {
            priceElement -= elem;
          } else {
            priceElement -= elemIBefore;
          }
        }
        if (i < A.length - 1) {
          let elemIAfter = A[i + 1][j];
          if (elem <= elemIAfter) {
            priceElement -= elem;
          } else {
            priceElement -= elemIAfter;
          }
        }
        if (j > 0) {
          let elemJBefore = A[i][j - 1];
          if (elem <= elemJBefore) {
            priceElement -= elem;
          } else {
            priceElement -= elemJBefore;
          }
        }
        if (j < A.length - 1) {
          let elemJAfter = A[i][j + 1];
          if (elem <= elemJAfter) {
            priceElement -= elem;
          } else {
            priceElement -= elemJAfter;
          }
        }
        y.push(priceElement);
      });
    });
  }
  let ptest = y.reduce((acc, elem) => {
    return acc + elem;
  }, 0);
  return price + ptest;
}
console.log(surfaceArea([[1, 3, 4], [2, 2, 3], [1, 2, 4]]));
console.log(surfaceArea([[91, 80, 7, 41, 36, 11, 48, 57, 40, 43]]));
// console.log(surfaceArea([91, 80, 7, 41, 36, 11, 48, 57, 40, 43]));

//1276
console.log(surfaceArea([[1, 3, 4]]));
console.log(surfaceArea([[1], [3], [4]]));
