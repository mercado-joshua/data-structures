// Example 5 - using Hashtables

// https://www.delftstack.com/howto/javascript/javascript-remove-duplicates-from-an-array/
// const listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 8, 9, 1, 2];

// const getUniqueNumbers = ( numbers ) => {
//     let found = {}; // stores all non-duplicate values

//     const uniqueNumbers = numbers.filter((element) => {

//         // the condition will return false if the element already exists in the found object; otherwise, we will add that element to the found object with the value true
//         return found.hasOwnProperty( element )? false : ( found[ element ] = true );
//     });

//     return uniqueNumbers;
// };

// const uniqueNumbers = getUniqueNumbers( listOfNumbers );

// console.log(`listOfNumbers: ${ listOfNumbers }`);
// console.log(`uniqueNumbers: ${ uniqueNumbers }`);