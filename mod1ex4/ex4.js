'use strict'
    const name = prompt('Type your name');
    const group = Math.random();
    let house = 'Error'
    if (group <= 0.25){
        house = 'Gryffindor';
        }
    else if (group <=0.5 && group >0.25){
        house = 'Ravenclaw';
        }
    else if (group <=0.75 && group >0.5){
        house = 'Slytherin';
        }
    else if (group >0.75){
        house = 'Hufflepuff';
        }

    document.querySelector('#example').innerHTML = ''+name+ ', you are in ' +house+ '';