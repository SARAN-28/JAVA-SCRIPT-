// Conditional Statement (Decision Making Statement):
// 1. if statement              — Executes code when a condition is true.
// 2. if-else statement         — Chooses between two blocks.
// 3. if-else if-else ladder    — Checks multiple conditions in sequence.
// 4. Nested if statement       — An if statement inside another if statement.
// 5. switch statement          — Selects a block based on matching values.

// 1. if statement:
// Meaning: Executes the code only when the condition is true.

// let age = 20;

// if (age >= 18) {
//     console.log("Eligible to vote");
// }

// 2. if-else statement:
// Meaning: Executes one block if the condition is true; otherwise, executes the else block.

// let number = 7;

// if (number % 2 == 0) {
//     console.log("Even number");
// } else {
//     console.log("Odd number");
// }

// 3. if-else if-else ladder:
// Meaning: Used to check multiple conditions one by one. When a condition is true, its block executes.

// let mark = 75;

// if (mark >= 90) {
//     console.log("Grade A");
// }
// else if (mark >= 70) {
//     console.log("Grade B");
// }
// else if (mark >= 50) {
//     console.log("Grade C");
// }
// else {
//     console.log("Fail");
// }

// 4. Nested if statement:
// Meaning: An if statement written inside another if statement.

// let age = 20;
// let hasID = true;

// if (age >= 18) {
//     if (hasID == true) {
//         console.log("You can enter");
//     }else{
//         console.log("Bring your ID")
//     }
// }else{
//         console.log("Not Eligible to vote")
// }

// 5. switch statement:
// Meaning: Selects a block of code based on the matching value of an expression.

// let day = 2;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     default:
//         console.log("Invalid day");
// }



// Loop:

// for-loop:
// Syntax
// for (initialization; condition; increment) {
//   // code to run
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// let numbers = [10, 20, 30, 40, 50];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log("Total sum:", sum);

// While-loop:
// Syntax
// while (condition) {
//   // code to run
// }

// let count = 1;
// while (count <= 5) {
//   console.log("Count:", count);
//   count++;
// }

// do-while:
// Syntax
// do {
//   // code to run
// } while (condition);

// let num = 1;
// do {
//   console.log("Num:", num);
//   num++;
// } while (num <= 5);

// Function:

// Syntax:
// let a="Hello"         //or
// function demo(){
//     console.log(a)
//     let a="Hello"     //or
// }
// demo()

// function fun(c,d){
//     return c+d
// }
// function work1(){
//     let a=10
//     let b=20
//     console.log(fun(a,b))
// }
// work1()
// function work2(){
//     let a=50
//     let b=90
//     console.log(fun(a,b))
// }
// work2()
// function work3(){
//     let a=230
//     let b=140
//     console.log(fun(a,b))
// }
// work3()

// function greet(name){
//     return "Welcome " + name
// }
// console.log(greet("Saran"))
// greet()

// function greet(nam="Saran"){
//     return "Welcome " + nam
// }
// console.log(greet())
// greet()


// Arrow Function:

// const greet=()=>{
//     console.log("Saran")
// }
// greet()
        // or
// const greet=()=>console.log("Saran")
// greet()

// const greet=(nam="Saran")=>{
//     console.log("Welcome",nam)
// }
// greet()
        //or
// const greet=(nam="Sarannnn")=>{
//     console.log("Welcome",nam)
// }
// greet("Saran") // overright


// Closure:

// function counter(){
//     let count=0;
//     return function(){
//         count++
//         return count
//     }
// }
// const increment=counter()
// console.log(increment())
// console.log(increment())
// console.log(increment())