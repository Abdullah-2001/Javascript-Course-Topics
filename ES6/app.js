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
// PROMISES
// ASYNC AWAIT
// REST OPERATORS
// SPREAD OPERATORS
// MAP
// ARRAYS IN DETAIL
// OBJECTS IN DETAIL

// function outerFunction() {
//     var person1 = "asma khan";
//     function innerFunction1() {
//         var person1 = "maha khan";
//         console.log("i am innerFunction1", + " " + person1);
//         function innerFunction2() {
//             var person1 = "ruhama khan";
//             console.log("i am innerFunction2", + " " + person1);
//             function innerFunction3() {
//                 var person1 = "safia khan";
//                 console.log("i am innerFunction3", + " " + person1);
//             }
//         }
//     }
// }

function outerFunction() {
    console.log("I am Outer Function");
    var person1 = "asma khan";
    function innerFunction(name) {
        console.log(name);
        console.log(person1);
    }
    return innerFunction();
}

outerFunction("maha")