// STATIC METHODS

// INSTANCE METHODS
// 1. arr.push()
// adds the specified elements to the end of an array and returns the new length of the array
const sports = ["soccer", "baseball"];
const total = sports.push("football", "swimming");
console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total); // 4
// MERGING TWO ARRAYS
const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];
// Merge the second array into the first one
vegetables.push(...moreVegs);
console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']
//!! The push() method is a mutating method. It changes the length and the content of this. 
// In case you want the value of this to be the same, but return a new array with elements appended to the end, you can use arr.concat

// 2. arr.concat()
// is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];
const alphaNumeric = letters.concat(numbers);
console.log(alphaNumeric); //=> ['a', 'b', 'c', 1, 2, 3]

// 3. length - same as for strings (build in method)

// 4. includes() - same as for strings 
// determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// syntax: includes(searchElement) | includes(searchElement, fromIndex)
const array0 = [1, 2, 3];
console.log(array0.includes(2)); // =>  true

// 5. toString()  
// returns a string representing the specified array and its elements
const array1 = [1, 2, 'a', '1a'];
console.log(array1.toString());// => "1,2,a,1a"

// 6. join() 
//creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string.
//If the array has only one item, then that item will be returned without using the separator.
//syntax: join(separator)
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());// =>  "Fire,Air,Water"
console.log(elements.join(''));// => "FireAirWater"
console.log(elements.join('-'));// => "Fire-Air-Water"


// 7. arr.shift()
// removes the first element from an array and returns that removed element. This method changes the length of the array
// syntax: shift()
const array2 = [1, 2, 3];
const firstElement = array2.shift();
console.log(array2);// => Array [2, 3]
console.log(firstElement);// => 1

// 8. arr.pop() 
// removes the last element from an array and returns that element. This method changes the length of the array.
// pop()
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop()) // => "tomato"
console.log(plants); // => Array ["broccoli", "cauliflower", "cabbage", "kale"]

// 9. arr.reverse() - no copy is made, the original array is mutated
// reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first.
// syntax: reverse()
let arr123 = [1,2,3];
let newArr123 = arr123.reverse();
console.log(newArr123);

// 10. .toReversed
// Return valueA new array containing the elements in reversed order.

// 11. arr.unshift() 
// adds the specified elements to the beginning of an array and returns the new length of the array
const array12 = [1, 2, 3];
console.log(array12.unshift(4, 5));// => 5
console.log(array12);// => Array [4, 5, 1, 2, 3]


// 12. arr.indexOf()
// returns the index where the given value is stored
// syntax: indexOf(searchvalue, startIndex)
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));// => 1
// Start from index 2
console.log(beasts.indexOf('bison', 2));// => 4

// 13. arr.map() 
// creates a new array populated with the results of calling a provided function on every element in the calling array.
const array3 = [1, 4, 9, 16];
// Pass a function to map
const map1 = array3.map((x) => x * 2);
console.log(map1);//  => Array [2, 8, 18, 32]


//MANIPULATING ARRAYS

// 1. arr.slice() 
// function creates a new array from part of another, copy
// Gets a range of elements from selected start to end (exclusive)
// Note that the original array will not be modified
//syntax: arr.slice(start index, end index(it is not included))
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));// => Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));// => Array ["camel", "duck"]
console.log(animals.slice(1, 5));// => Array ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2));// => Array ["duck", "elephant"]

//2. splice()
// adds/removes items to/from an array, and returns the removed item(s) 
// manipulates the array, NOT a copy
// syntax: splice(start)
//splice(start, deleteCount)
//splice(start, deleteCount, item1)
//splice(start, deleteCount, item1, item2)
//splice(start, deleteCount, item1, item2, /* …, */ itemN)
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');// Inserts at index 1
console.log(months);// => Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');// Replaces 1 element at index 4
console.log(months);// => Array ["Jan", "Feb", "March", "April", "May"]




