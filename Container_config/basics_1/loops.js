// Loop
/*
1. for - use to iterate values when we know break point
2. forEach - use to iterate over an Array
3. forIn - use to iterate over an Object
4. while - use to iterate when we have condition to end loop
5. do while - works same as while loop but runs atleast once doesn't matters whether the codition met requirment or not 
*/

// ***********for************

// Write a for loop that prints the numbers from 1 to 10, each on a new line.
for (i = 1; i < 11; i++) {
  // console.log(i);
}

// Write a for loop to calculate and print the sum of the first 10 natural numbers (1 to 10).
let sum = 0;
for (let i = 1; i < 11; i++) {
  sum += i;
}
// console.log("Total:", sum);

// Write a for loop that prints each character of the string "Hello, World!".
let strg = "Hello, World!";
for (let i = 0; i < strg.length; i++) {
  // console.log(strg[i]);
}

// Write a for loop that prints all the even numbers from 1 to 20.
for (let i = 1; i < 21; i++) {
  if (i % 2 === 0) {
    // console.log(i);
  }
}

// ***********forEach************

// Write a forEach loop that prints each element of the array ["apple", "banana", "cherry"].
let arr1 = ["apple", "banana", "cherry"];
arr1.forEach((val) => {
  // console.log(val);
});

//  Write a forEach loop to calculate and print the sum of the elements in the array [1, 2, 3, 4, 5].
let arr2 = [1, 2, 3, 4, 5];
let add = 0;
arr2.forEach((val) => {
  add = val + add; //|| add +=val
});

// console.log(add);

// Write a forEach loop that prints only the even numbers from the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numArr.forEach((val) => {
  if (val % 2 === 0) {
    // console.log(val);
  }
});

// ***********forIn************

// Write a for...in loop to iterate over all properties of the object {name: "Alice", age: 30, city: "New York"} and print each property name and value.
let obj1 = { name: "Alice", age: 30, city: "New York" };
for (let key in obj1) {
  //   console.log(key, obj1[key]);
}

// Write a for...in loop to calculate and print the sum of values in the object {a: 10, b: 20, c: 30}.
let obj2 = { a: 10, b: 20, c: 30 };
let sum2 = 0;
for (let key in obj2) {
  sum2 = obj2[key] + sum2; // sum2 += obj2[key]
}
console.log(sum2);
