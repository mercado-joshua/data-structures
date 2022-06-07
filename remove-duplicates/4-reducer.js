// Example 4 - .reducer()

// https://www.geeksforgeeks.org/how-to-remove-duplicate-elements-from-javascript-array/
// const listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 8, 9, 1, 2];

// const getUniqueNumbers = ( numbers ) => {
//     const initialValue = [];

//     const uniqueNumbers = numbers.reduce((accumulator, currentValue) => {
//         if ( !accumulator.includes( currentValue ) ) accumulator.push( currentValue );

//         return accumulator;

//     }, initialValue);

//     return uniqueNumbers;
// };

// const uniqueNumbers = getUniqueNumbers( listOfNumbers );

// console.log(`listOfNumbers: ${ listOfNumbers }`);
// console.log(`uniqueNumbers: ${ uniqueNumbers }`);