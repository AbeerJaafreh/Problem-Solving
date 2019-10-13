console.log('Codility');
function unpairNumber(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let obj = {};
  for (const iterator of A) {
    console.log(iterator);
    if (!!obj[iterator]) {
      obj[iterator] += 1;
    } else {
      obj[iterator] = 1;
    }
  }
  console.log(obj);
  for (const iterator of A) {
    if (obj[iterator] === 1) {
      return iterator;
    }
  }
}

console.log('r:', unpairNumber([9, 9, 9, 201, 0, 201]));
//2
// console.log('r:', solution(529));
//4
// console.log('r:', solution(20));
//2
