

// An array is a data type that can store a set of elements.

// How to create our list of movies in the form of a table.

// let movies = ["PS I Love You", "Titanic", "What men want"];

// create a table with a pair of square brackets; []. Everything within the brackets makes up the array.

// Since an array contains multiple things, it's good to name the array using a plural (for example, movies).

// Identify an array's size

// The number of elements stored in a table is called its size. Here's how to access it.

let movies = ["PS I Love You", "Titanic", "What men want"];
console.log(movies.length)  // Will be 3

// Access an element in an Array

// Each item is an array is identified by a number called its index. We can represent an array as a set of boxes, each storing a specific vaulue and associated with a index. Here is how one might represent the films array:

console.log(movies[0]); // will be PS I love you.
console.log(movies[1]); // will be Titanic
console.log(movies[2]); // will be What men want
console.log(movies[3]); // will be undefined as it doesnt exist

// That's exactly the way you accessed characters in a string! The same golden rules apply"

// The index of the first element of an array is 0, not one.

// The highest index number is the arrays length minus 1.

// Using an invalid index to access a javascript array element returns the value undefined.



// Add a element to an Array

// Let's say you watch Captain Marvel and you want to add it to the list. Here's how you'd do so:

movies.push("Captain Marvel");

console.log(movies[3]); //will show cap marvel

