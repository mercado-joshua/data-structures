// https://www.delftstack.com/howto/javascript/javascript-sum-of-array/#:~:text=Use%20the%20for%20Loop%20to%20Sum%20an%20Array%20in%20a%20JavaScript%20Array,-The%20for%20loop&text=const%20array%20%3D%20%5B1%2C%202,the%20sum%20of%20the%20array.


// Example 1 - the good old 'for loop'
const listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const getTotalSumOfArray = ( list ) => {

    // [1] - create a variable that will store the result
    let sum = 0;

    // [2] - use the loop to visit each element and add them to the sum of the array
    for (let i = 0; i < list.length; i++) {
        sum += list[ i ];
    }

    return sum;
};

const total = getTotalSumOfArray( listOfNumbers );
console.log(`The total sum of the array is: ${ total }`);