"use strict";
// task 1
// Annotation with ARRAYS
/********************************
 * TYPE ANNOTATIONS WITH ARRAYS *
 ********************************/
Object.defineProperty(exports, "__esModule", { value: true });
// Annotating an array of strings
let fruits = ["apple", "banana", "cherry"];
// Using a loop to process each element in the array
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit: ${fruits[i].toUpperCase()}`);
}
;
// task 2
// Annotations with MULTIDIMENSIONAL
/*************************************************
 * TYPE ANNOTATIONS WITH MULTIDIMENSIONAL ARRAYS *
 *************************************************/
let arrayOne = [1, 2, 3, 4, 5];
let arrayTwo = ["A", "B", "C"];
let arrayThree = [1, 2, 3, 4, "A", "B", "C"];
console.log(arrayOne);
console.log(arrayTwo);
console.log(arrayThree);
