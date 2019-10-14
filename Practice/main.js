console.log('PRACTICE ME');

// console.log(solution(-1,3,3,1);
//  2,-1
// console.log(solution(2, 2, 2,-3));
//  1,-3
// console.log(solution(2, 2, [2, 0, 2, 0]));
// 

/* 
  if (U <= 0 && L <= 0) {
        return 'IMPOSSIBLE';
      }














      
*/

function digitSum(n, k) {
  if (k === 0 && n.length === 1) {
    return parseInt(num);
  }
  let num = n;
  // for (let i = 0; i < k; i++) {
  //   num += n;
  // }
  // console.log(num);
  while (num.length !== 1) {
    let num2 = 0;
    if (num.length === n.length) {
      for (let i = 0; i < num.length; i++) {
        num2 += parseInt(num[i]);
      }
      num = JSON.stringify(num2 * k);
      // console.log(num);
    } else {
      for (let i = 0; i < num.length; i++) {
        num2 += parseInt(num[i]);
      }
      // console.log(num2);
      num = JSON.stringify(num2);
      // console.log(num);
      // num = '2';
    }
  }
  // console.log(num);
  return parseInt(num);
}
digitSum('148', 3);
// 5
// digitSum(
//   '3546630947312051453014172159647935984478824945973141333062252613718025688716704470547449723886626736',
//   100000
// );

// console.log(object);

var t = ['code', 'aaagmnrs', 'anagrams', 'doce'];
