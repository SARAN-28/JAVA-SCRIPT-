//Temporal dead Zone:

// console.log(a)
// let a=20            //cannot access a

// console.log(a)
// const a=20          //cannot access a

// console.log(a)
// var a=20            //Undefined


//Immediate Invoke:

// (function(){
//     console.log("Hello");
// })
// ()

// (function(){
//     console.log("Hello");
// })
// let a=20                    //Invoked
// console.log("Welcome");     //Invoked
// ()


// Annoymous Function:

// setTimeout(function(){
//     console.log("hello");
// },3000)


//Call Back Function before E86:

// function callback(n){
//     console.log(n);
// }
// function main(a,b){
//     b(a*10)
// }
// main(20,callback)


// Find:

// let a=[1,2,3,4,5,6,7,8]
// console.log(a.find((value)=>value>3));

// Find Index:

// let a=[1,2,3,4,5,6,7,8]
// console.log(a.findIndex((value)=>value>3));
