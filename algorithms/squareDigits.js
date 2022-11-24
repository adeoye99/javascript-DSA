function squareDigits(num) {
  let array = num.toString().split("");
  // console.log(array);

  const finalsum = array.reduce((a, b) => {
    let firstnum = Number(b);
    console.log(firstnum);
    let answer = Math.pow(firstnum, 2);
    console.log(answer);
    let string = a + answer.toString();
    console.log(string);
    return string;
  }, "");

  return Number(finalsum);
}
const numST = "23";
const num = Number(numST);
console.log(num);
const input = [1, 2, 3, 4, 5, 7, 2, 3, 6];
const srt = input.sort();
console.log(srt);
const set = new Set(input);
console.log(set);
const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};
// 5 * factorial(4)
// 5 * 4 *factorial(3)
// 5 * 4 * 3 * factorial(2)
// 5 * 4 * 3 * 2 * factorial(1)
// 5 * 4 * 3 * 2 * 1 * factorial(0)
// 5 * 4 * 3 * 2 * 1 * 1
const res = factorial(5);
console.log(res);

squareDigits(2112);
module.exports = squareDigits;
