// Practice Problem map(), filter(), find()
// 1. you have an odd array (array with odd numbers). [1, 3, 5, 7, 9].now convert this array into an even array (array with even numbers). [2, 4, 6, 8, 10].

const oddNum = [1, 3, 5, 7, 9];
// const mapingNum = oddNum.map((n) => n + 1);
// console.log(mapingNum);

// another way use map with cellback function!
const evenNum = (num) => num + 1;
const x = oddNum.map(evenNum);
// console.log(x);

// 2. you are given an array say: [33, 50, 79, 78, 90, 101, 30]. now return/get the elements which are divisible by 10 using arry.filter method.

const nums = [33, 50, 79, 78, 90, 101, 30];
const divi = nums.filter((n) => n % 10);
// console.log(divi);

// another way cellback function!
const diviFun = (num) => {
  const x = num % 10;
  return x;
};
const divi2 = nums.filter(diviFun);
// console.log(divi2);

// also using find() methods!
const number = nums.find((n) => n % 10);
console.log(number);
