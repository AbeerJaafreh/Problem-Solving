console.log('Codility');
function FrogJmp(X, Y, D) {
  // write your code in JavaScript (Node.js 8.9.4)
  let result = Math.ceil((Y - X) / D);
  if (X >= Y) {
    return 0;
  }
  return result;
}

console.log('r:', FrogJmp(0, 11, 5));
//3
// console.log('r:', FrogJmp([1, 2, 3, 4], 4));
//4
// console.log('r:', solution(20));
//2
