// Example 3 - using .forEach() and .include()

// const listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 8, 9, 1, 2];
// const getUniqueNumbers = ( numbers ) => {
//     let uniqueNumbers = [];

//     // iterates over elements of an array and adds to a new array only elements that are not already there
//     numbers.forEach((number) => {

//         // the include() returns true if an element is in an array or false if it is not
//         if ( !uniqueNumbers.includes( number ) ) uniqueNumbers.push( number );
//     });

//     return uniqueNumbers;
// };

// const uniqueNumbers = getUniqueNumbers( listOfNumbers );

// console.log(`listOfNumbers: ${ listOfNumbers }`);
// console.log(`uniqueNumbers: ${ uniqueNumbers }`);