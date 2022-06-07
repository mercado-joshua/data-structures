// Example 7 - for... of loop
// https://bobbyhadz.com/blog/javascript-get-sum-of-array-of-numbers

const listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const getTotalSumOfArray = ( arrayOfNumbers ) => {
    let sum = 0;

    for (const number of arrayOfNumbers) {
        sum += number;
    }

    return sum;
};

const total = getTotalSumOfArray( listOfNumbers );
console.log(`The total sum of the array is: ${ total }`);