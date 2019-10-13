//100%
function BinaryGap(N) {
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

/*
Task Score 66%
Correctness 80%
Performance 50%
*/
function OddOccurrencesInArray(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let obj = {};
  for (const iterator of A) {
    // console.log(iterator);
    if (!!obj[iterator]) {
      obj[iterator] += 1;
    } else {
      obj[iterator] = 1;
    }
  }
  // console.log(obj);
  for (const iterator of A) {
    if (obj[iterator] === 1) {
      return iterator;
    }
  }
  return 0
}

//100%
function CyclicRotation(A, K) {
  if(A.length===0){
    return A
  }
  // write your code in JavaScript (Node.js 8.9.4)
  for (let index = 0; index < K; index++) {
    A.unshift(A.pop());
  }
  return A;
}
//100%
function FrogJmp(X, Y, D) {
  // write your code in JavaScript (Node.js 8.9.4)
  let result = Math.ceil((Y - X) / D);
  if (X >= Y) {
    return 0;
  }
  return result;
}