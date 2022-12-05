'use strict'
    const num1 = prompt('Type a number');
    const num2 = prompt('Type a number');
    const num3 = prompt('Type a number');
    const sum = parseInt(num1)+parseInt(num2)+parseInt(num3)
    const product = parseInt(num1)*parseInt(num2)*parseInt(num3)
    const average = sum/3
    document.querySelector('#result').innerHTML = 'The sum is '+sum+', the product is '+product+' and the average is '+average+'';