'use strict'
    const amount = parseInt(prompt('Number of dice? '))
    let total = 0
    for (let i = 1; i <= amount ; i++) {
            const dicethrow = Math.floor(Math.random() * 6) + 1;
            total += dicethrow;
        }
    console.log('The amount of dice throws was '+total+'')