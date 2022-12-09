
function even(arr) {
  let evenArray = [];
  for (x in arr) {
    if (arr[x] % 2 === 0) {
      evenArray.push(arr[x]);
    }
  }
  return evenArray;
}
let arr1 = [1, 3, 7, 12, 17, 20];
let arr2 = even(arr1);
console.log(arr1);
console.log(arr2);