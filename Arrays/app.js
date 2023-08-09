// OBJECTS

// const thisIsObject = {
//     name: "ayesha",
//     age: 20,
//     city: "lahore",
// }

// C ==> Create thisIsObject.CNIC = 123456789
// R ==> Read console.log('Obj ====>', thisIsObject);
// U ==> Update thisIsObject.age = 20
// D ==> Delete delete thisIsObject.age

// const keys = Object.keys(thisIsObject)
// const values = Object.values(thisIsObject)

// console.log('Keys ====>', keys);
// console.log('Values ====>', values);
// console.log('Obj ====>', thisIsObject);

// STRING METHODS

// CharAt
// Split
// toString
// typeOf
// parsIent
// Number
// String To Number
// Number To String

// NUMBER TO STRING

// const numberToString = 123456789;
// console.log(typeof numberToString);
// console.log(typeof numberToString.toString());

// STRING TO NUMBER

// const stringToNumber = "asma pathan";
// console.log(typeof stringToNumber);
// console.log(typeof Number(stringToNumber));

// CAPITALIZE FIRST LETTER

// const string = "asma pathan";
// const capitalize = string.charAt(0).toUpperCase()
// const remaining = string.slice(1)
// console.log(capitalize + remaining);

// STARTSWITH

// const number = 12345;
// const updated = number.toString()

// if (updated.startsWith("1")) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// INCLUDES

// const string = "asma khan from karachi";

// if (string.includes("khan")) {
//     console.log("a is in var string");
// } else {
//     console.log("a is in not var string");
// }

// UNARY PLUS OPERATOR

// const sum = + "12" + 12
// console.log(sum);

// OPERATORS

// Assignment Operators => =
// Logical Operators => && ||
// Arithmetic Operators => + - / *
// Comparison Operators => === < >

// FUNCTIONS

// function checkAge() {
//     console.log();
// }

// let callFunction = checkAge

// callFunction()
// checkAge()
// console.log(typeof checkAge);

// DOM

// const button = document.getElementById("age-button")

// let sum = 0;

// sum = 0
// age = 10 and sum = 0

// age + sum => 10
// age + sum => 20
// age + sum => 30
// age + sum => 40
// age = 10 and sum = 0

// function checkAge(age) {
// sum = sum + age
// sum = 0 and age + sum = 10
// sum = 10 and age + sum = 20
// sum = 20 and age + sum = 30
// console.log("Age", age);
// console.log("New Value", newValue);
// console.log("sum", newVal);
// }

// ARRAYS

// const students = [
//     "maha khan from peshawar",
//     "bisma khan from peshawar",
//     "ruhama khan from peshawar",
//     "abdullah khan from peshawar",
// ];

// students.push("asma khan from peshawar")
// students.pop()
// students.unshift("asma khan from peshawar")
// students.shift()
// console.log(students);

// add an elem in the last of array => push
// delete an elem in the last of array => pop
// delete an elem in the beginning of array => shift
// add an elem in the beginning of array => unshift

// for (let index = 0; index < students.length; index++) {
// if (index === 2) {
//     break
// }
// else {
//     const eachStudent = index + 1 + " " + students[index]
//     console.log(eachStudent);
// }
// console.log(index + 1);
// console.log(students[index]);
// if (index === 1) {
// delete students[index]
// delete students[index]
// }
// console.log(students[index]);
// document.write(students[index] + "<br></br>");
// }

// WHITE LOOPS

// While loop works same as for loop

// var i = 0;
// while (i < 0) {
//     i++;
//     console.log(i);
// }

// DO WHILE LOOPS

// Do While loop print the statement first then check the condition

// var i = 0;

// do {
//     console.log(i);
//     i++;
//     console.log(i);
// } while (i < 5);

// EVENTS

// Links
// Buttons
// Mouse
// Fields

// when we paas a value in function this is called arguments   
// when we recieve a value in function this is called parameters   

// function handleClick(age, name, email, ...remaining) {
//     console.log(arguments.length);
//     // alert("Your age is" + " " + age)
//     // alert("Your name is" + " " + name)
//     alert("Your remain is" + " " + remaining[0])
//     alert("Your remain is" + " " + remaining[1])
//     console.log(age);
//     console.log(name);
//     console.log(email);
// }

// const container1 = document.getElementById("box1")
// const container2 = document.getElementById("box2")

// function blueToRed() {
//     container1.style.backgroundColor = "red"
//     container2.style.backgroundColor = "red"
// }

// function redToBlue() {
//     container1.style.backgroundColor = "blue"
//     container2.style.backgroundColor = "blue"
// }

// const img = document.getElementById("image")

// function over() {
//     img.style.border = "3px solid black"
// }

// function out() {
//     img.style.border = "3px solid green"
// }

// (function (a) {
//     return (function () {
//         console.log(a);
//         a = 6;
//         console.log(a);
//     })()
// })(21);

// var a = 0;
// var b = 0;

// while (a <= 3) {
//     a++;
//     b += a * 2;
//     console.log("a =====>", a);
//     console.log("b =====>", b);
// }

// var a = true + true + true
// console.log(a);

// true = 1
// false = 0

// function checkAddress(asdasdad) {
//     if (document.getElementById(asdasdad).value === "") {
//         alert("Email address required.");
//     }
//     else {
//         alert("You are ready to learn.");
//     }
// }

// var expandedParagraph = `Slow lorises are a group of several species of trepsirrhine primates which
// make up the genus Nycticebus.They have a round head, narrow snout, large eyes, and a variety of
// distinctive coloration patterns that are species - dependent.The hands and feet of slow lorises have several
// adaptations that give them a pincer - like grip and enable them to grasp branches for long periods of time.
// Slow lorises have a toxic bite, a rare trait among mammals.`;

// function expandLoris() {
//     document.getElementById("slowLoris").innerHTML = expandedParagraph;
//     document.getElementById("slowLoris").style.color = "red";
// }

// function hide() {
//     document.getElementById("image").className = "hidden";
// }

// var d = document.getElementById("ny");
// var p = d.childNodes[1];
// var contents = p.innerHTML;

// console.log(d);

// let a = 0;
// let b = 0;

// while (a < 3) {
//     a++
//     b += 1
// b = b + 1
// console.log("a ===>", a);
// console.log("b ===>", b);
// }

// MARKSHEET

// Total Marks
// var totalMarks = 600;

// Total Obtained Marks Of Each Subject
// var obtainedMarks = 0;

// Subjects
// var subjects = ["Math", "Urdu", "Physics", "English", "Islamiat", "Chemistry"];

// Calculate Total Marks
// for (let index = 0; index < subjects.length; index++) {
//     var input = prompt(`Enter your ${subjects[index]} marks`)
//     obtainedMarks = obtainedMarks + parseInt(input);
//     console.log(`Obtain in ${subjects[index]}`, input);
// }

// console.log("obtainedMarks", obtainedMarks);

// Calculate Total Percentage
// var percentage = Math.floor(obtainedMarks / totalMarks * 100)
// console.log("percentage2", percentage + " %");

// Math.floor => returns => 3.5 => 3
// Math.ceil => returns => 3.5 => 4

// function finalResult() {
//     if (percentage >= 80) {
//         console.log("GRADE A+");
//         return null
//     }
//     if (percentage < 80) {
//         console.log("GRADE B");
//         return null
//     }
//     if (percentage < 70) {
//         console.log("GRADE C");
//         return null
//     }
//     if (percentage < 60) {
//         console.log("YOU ARE FAIL !");
//         return null
//     }
// }

// finalResult()

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