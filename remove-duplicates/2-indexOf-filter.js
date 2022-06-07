// Example 2 - using .indexOf() and .filter()

// const listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 8, 9, 1, 2];

// // use the filter() method to include only elements whose indexes match their indexOf values
// const uniqueNumbers = listOfNumbers.filter((number, index) => {
//     return listOfNumbers.indexOf(number) === index;
// });

// // To find the duplicate values, you need to reverse the condition
// const duplicateNumbers = listOfNumbers.filter((number, index) => {
//     return listOfNumbers.indexOf(number) !== index;
// });

// console.log(`listOfNumbers: ${ listOfNumbers }`);
// console.log(`uniqueNumbers: ${ uniqueNumbers }`);
// console.log(`duplicateNumbers: ${ duplicateNumbers }`);