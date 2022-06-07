// Example 4 - the good old 'while loop'

// https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
const getTotalSumOfArray = ( arrayOfNumbers ) => {
    let list = arrayOfNumbers.length; 
    let sum = 0; 

    while( list-- ) {
        sum += arrayOfNumbers[ list ];

        // console.log(`list: ${ list }`);
        // console.log(`arrayOfNumbers[ list ]: ${ arrayOfNumbers[ list ] }`);
    }

    return sum;
}

const listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const total = getTotalSumOfArray( listOfNumbers );
console.log(`The total sum of the array is: ${ total }`);