// ES6

// ES6 TOPICS

// THIS KEYWORD
// CLOSURES
// LEXICAL SCOPING
// LET
// CONST
// TEMPLATE LITERALS
// ARROW FUNCTIONS
// TERNARY OPERTORS
// REST OPERATORS
// SPREAD OPERATORS
// PROMISES
// ASYNC AWAIT
// MAP
// ARRAYS IN DETAIL
// OBJECTS IN DETAIL

// function outerFunction() {
//     let name = "asma";
//     function innerFunction1(person) {
//         let name = "asma";
//         console.log(name);
//         function innerFunction2() {
//             let name = "asma";
//             console.log(name);
//             function innerFunction3() {
//                 let name = "asma";
//                 console.log(name);
//                 function innerFunction4() {
//                     let name = "asma";
//                     console.log(name);
//                 }
//             }
//         }
//     }
//     return innerFunction1;
// }

// let store = outerFunction();
// store(person)

// Difference between function and arrow function

// FUNCTION
// we can't write one line of code in normal function
// arrow functions have own this keyword

// ARROW FUNCTION
// we can write one line of code in arrow function
// arrow functions do not have own this keyword

// function normalFunction(params) {
//     let sum = 10 + 10;
//     return sum;
// }

// function arrowFunction(obj) {
//     return obj;
// }

// const arrowFunction1 = (obj) => obj;

// const arrowFunction2 = (obj) => {
//     return obj;
// };

// let obj1 = arrowFunction1({ person: "maha", age: 20, gender: "female" })
// let obj2 = arrowFunction2({ person: "maha", age: 20, gender: "female" })
// console.log(obj1);
// console.log(obj2);

// TERNARY OPERATORS

// const age = 30;
// const check1 = age === 30 ? "correct age" : "wrong age";
// const check2 = age === 30 && "correct age";
// console.log(check1);
// console.log(check2);