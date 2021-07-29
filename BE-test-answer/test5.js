/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ["flower", "flow", "flight"];

function result(words) {
  // Your Code Here
  let arrlength = [];

  for (let i = 0; i < words.length; i++) {
    arrlength.push(words[i].length);
  }

  let min = arrlength.reduce((a, b) => {
    return Math.min(a, b);
  });

  words.sort();
  for (let i = 0; i < min; i++) {
    if (words[0][i] != words[words.length - 1][i]) {
      return words[0].substring(0, i);
    }
  }
}

console.log(result(words));
