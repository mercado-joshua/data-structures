// Example 2 - reduce method

const listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const getTotalSumOfArray = (accumulator, currentValue) => {
    return accumulator + currentValue;
};

const total = listOfNumbers.reduce(getTotalSumOfArray);
console.log(`The total sum of the array is: ${ total }`);