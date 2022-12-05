'use strict'
let firstyear = parseInt(prompt("Enter first year: "));
let lastyear = parseInt(prompt("Enter last year: "));
for (let i=firstyear;i<=lastyear;i++) {
  if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0) {
    document.querySelector('#years').innerHTML += "<li>"+i+"</li>";
  }
}