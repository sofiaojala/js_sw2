'use strict'
    let confirmation = confirm('Should i calculate a square root ?');
    if (confirmation === true) {
        const number = parseInt(prompt('Number?'));
        if (number >0){
            document.querySelector('#root').innerHTML = 'The square root is '+Math.sqrt(number)+'';
        }
        else
            document.querySelector('#root').innerHTML = 'The square root of a negative number is not defined';
    }