

// 1. Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array

const fruits = ["apple", "banana", "malta", "pineapple"];
console.log(fruits[2]);

fruits[1] = "orange";
console.log(fruits);

// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output

const destination = ['Dhaka', 'Barishal', 'Chattaogram'];
destination.push('Khulna');
destination.push('Mymensing', 'kushtiya');
destination.pop();
console.log(destination);

// 3. Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.
// Use the includes method to check if the array contains a javascript book.
// Print a message to the console indicating whether the element is present in the array or not.

const books = ['Bangla', 'English', 'Math', 'Science'];
console.log(books.includes('javascript book'));
console.log(Array.isArray(books));

// 4. Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non - array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.

let games = ['cricket', 'footbal', 'volleyball', 'badminton'];
let num = 50;

let checkArray = Array.isArray(num);
if (checkArray) {
    console.log('this is array');
}
else {
    console.log('Not Array');
}


console.log(Array.isArray(games));
console.log(Array.isArray(num));

// 5. Combining Arrays
// Instructions:

// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().

let animals = ['cat', 'dog', 'cow', 'goat', 'buffelo'];
let legs = ['two', 'four', 'four', 'four', 'four'];

console.log(animals.concat(legs));