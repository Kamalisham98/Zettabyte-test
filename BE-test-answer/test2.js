/**
 * Direction:
 * Remove duplicated data from array
 *
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

function result(data) {
  // Your Code Here
  let newArr = [];
  for (let i = 0; i < data.length; i++) {
    if (!newArr.includes(data[i])) {
      newArr.push(data[i]);
    }
  }
  return newArr;
}

console.log(result(data));
