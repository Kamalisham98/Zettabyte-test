/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  // Your Code Here
  let max = numbers.reduce((a, b) => {
    return Math.max(a, b);
  });
  for (let i = 0; i <= max; i++) {
    if (!numbers.includes(i)) {
      return i;
    }
  }
}

console.log(result(numbers));
