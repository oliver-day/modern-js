// Problem: Create a function that takes an array of numbers and returns a number that is the sum of all values in the array.



// Solution 1
export function cumSum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

// Solution 2 (w/o JavaScript built-in reduce method)
// export function cumSum(arr) {
// let total = 0;

// for(let i = 0; i < arr.length; i++) {
//   total += arr[i];
// } 

// return total;
// }

console.log('sum: ', cumSum([1,3,5,7]));
