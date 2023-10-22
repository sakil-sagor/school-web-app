console.log("first")
// Original array of objects
const originalArray = { name: 'Alice', age: 30 };

// Object to add
const newPerson = "sakil"

// Adding a new object to the array using the spread operator
const newArray = { ...originalArray, newPerson }

console.log(newArray);
