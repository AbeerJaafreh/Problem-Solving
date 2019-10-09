/* 
Recursive Digit Sum
https://www.hackerrank.com/challenges/recursive-digit-sum/problem
*/
/*
function digitSum(n, k) {
  if (k === 0 && n.length === 1) {
    return parseInt(num);
  }
  let num = n;
  while (num.length !== 1) {
    let num2 = 0;
    if (num.length === n.length) {
      for (let i = 0; i < num.length; i++) {
        num2 += parseInt(num[i]);
      }
      num = JSON.stringify(num2 * k);
    } else {
      for (let i = 0; i < num.length; i++) {
        num2 += parseInt(num[i]);
      }
      num = JSON.stringify(num2);
    }
  }
  return parseInt(num);
}
digitSum('148', 3);
*/
