// Example 3 - reduce method 'with initial value' (MDN style)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
const listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const initialValue = 0;

const getTotalSumOfArray = (previousValue, currentValue) => {
    return previousValue + currentValue;
};

const total = listOfNumbers.reduce(getTotalSumOfArray, initialValue);
console.log(`The total sum of the array is: ${ total }`);