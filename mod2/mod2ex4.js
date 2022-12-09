
let numList = [];
let num = parseInt(prompt("A number? "));
numList.push(num);
while (num !==0) {
  num = parseInt(prompt("A number? "));
  numList.push(num);
}
numList.sort();
numList.reverse();
console.log(numList);
