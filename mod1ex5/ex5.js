'use strict'
    let year = prompt('Type a year');
    const number = parseFloat(year);
    let result
    if (number % 4 === 0 && number % 400 === 0) {
        result = 'Leap Year'
    }
    else
        result = 'not a leap year'
    document.querySelector('#leap').innerHTML = ''+year+ ' is '+result+'';