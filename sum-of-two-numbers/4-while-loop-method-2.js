// Example 5 - the good old 'while loop'

// https://linuxhint.com/find-sum-of-array-numbers-javascript/
const listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const getTotalSumOfArray = ( arrayOfNumbers ) => {
    let sum = 0; 
    let increment = 0;

    while (increment < arrayOfNumbers.length) {
        sum += arrayOfNumbers[ increment ];
        increment++;
    }

    return sum;
}

const total = getTotalSumOfArray( listOfNumbers );
console.log(`The total sum of the array is: ${ total }`);