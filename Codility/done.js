
function binaryGap(N) {
  console.log(N.toString(2));
  let number = N.toString(2);
  let max = 0;
  let count = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] === '0') {
      count += 1;
    } else {
      if (count > max) {
        max = count;
      }
      count = 0;
    }
  }
  // write your code in JavaScript (Node.js 8.9.4)
  return max;
}