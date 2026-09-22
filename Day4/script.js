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