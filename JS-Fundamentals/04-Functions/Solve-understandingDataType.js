//Understanding Reference vs. Value in JavaScript
//Reference Types
// Reference types store a reference to the actual object in the variable. 
// When you assign a reference type variable to another variable or pass it
// as an argument to a function, you're passing a reference to the same
// object in memory. This means changes to one variable will affect the other.
// Examples of reference types:

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1);
console.log(arr2);