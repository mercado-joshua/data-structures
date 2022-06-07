// Example 6 - forEach loop

// https://www.w3docs.com/snippets/javascript/how-to-find-the-sum-of-an-array-of-numbers.html
const listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const getTotalSumOfArray = ( arrayOfNumbers ) => {
    let sum = 0;

    arrayOfNumbers.forEach(number => {
      sum += number;
    });

    return sum;
};

const total = getTotalSumOfArray( listOfNumbers );
console.log(`The total sum of the array is: ${ total }`);
