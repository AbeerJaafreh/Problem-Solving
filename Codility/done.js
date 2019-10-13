//Merge Sort
function mergeSort(unsortedArray) {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

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
  return 0;
}

//100%
function CyclicRotation(A, K) {
  if (A.length === 0) {
    return A;
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

function PermMissingElem(A) {
  if (A.length === 0) {
    return 1;
  }
  for (let num = 1; num <= A.length + 1; num++) {
    if (!A.includes(num)) {
      return num;
    }
  }
}

// 100%
function PermMissingElem(A) {
  let arr2 = mergeSort(A);
  for (let num = 1; num <= arr2.length + 1; num++) {
    if (arr2[num - 1] !== num) {
      return num;
    }
  }
}
