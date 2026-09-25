// Timers:

// 1. setTimeout():
// setTimeout() runs a function once after a specified time.

// Syntax:
// setTimeout(function(){
//     // code
// }, milliseconds)

// Eg:
// setTimeout(function(){
//     console.log("Hello Saran")
// }, 3000)

// Canceling setTimeout():
// When setTimeout() is created, it returns an ID.

// Eg:
// let timer = setTimeout(function(){
//     console.log("Hello Saran")
// }, 3000)

// clearTimeout(timer)

// 2. setInterval()
// setInterval() runs a function again and again at a specified interval.

// Syntax:
// setInterval(function(){
//     // code
// }, milliseconds)

// Eg:
// setInterval(function(){
//     console.log("Hello")
// }, 1000)

// Canceling setInterval()
// setInterval() also returns an ID.

// let intervalId = setInterval(function(){
//     console.log("Hello")
// }, 1000)

// clearInterval(intervalId)


// Error Handling:
// Error handling is used to prevent the program from crashing when an error occurs.

// JavaScript provides:
// try
// catch
// finally
// throw

// 1. try...catch:
// Syntax
// try{
//     // code that may cause error
// }
// catch(error){
//     // handle the error
// }

// Eg:
// try{
//     throw new Error("Custom error message")
// }
// catch(error){
//     console.log("Error occurred:", error.message)
// }

// 2. finally:
// try{
//     console.log("Trying something...")
//     throw new Error("Something went wrong")
// }
// catch(error){
//     console.log("Caught an error")
// }
// finally{
//     console.log("Finally block executed")
// }

// 3. Throwing Custom Errors:
// Eg:
// function checkAge(age) {

//     if (age < 18) {
//         throw new Error("Age must be 18 or above")
//     }

//     return "Valid age"
// }
// try {
//     console.log(checkAge(30))
// }
// catch (error) {
//     console.log(error.message)
// }

//Document Object Model

// console.log(document.title)
// console.log(document.URL)

// let a=document.getElementById("head1")
// console.log(a)
// console.log(a.textContent);

// let a=document.getElementsByTagName("h1")
// console.log(a);
// console.log(a[0].textContent);
// console.log(a[0].innerHTML);
// console.log(a[0].innerText);

// let a=document.getElementsByClassName("span1")
// console.log(a);
// console.log(a[0].textContent);
// console.log(a[0].innerHTML);
// console.log(a[0].innerText);

// let a=document.querySelector(".span")
// // console.log(a);
// console.log(a.textContent);

// let a=document.querySelectorAll('.span')
// console.log(a);
// console.log(a[0].innerHTML)
// console.log(a[1].innerHTML)
// console.log(a[2].innerHTML)

// let a=document.createElement("div")
// a.setAttribute("id","my-div")
// a.textContent="Create a Element, Set an Attribute, Type the content and Append to body"
// document.body.append("a")
// console.log(a);

// let a=document.createElement("div")
// a.textContent="<h1>Hello world</h1>"
// a.innerText="<h1>Hello world</h1>"
// a.innerHTML="<h1>Hello world</h1>"
// console.log(a);

// let a=document.getElementById("head")
// a.remove()

// let a=document.querySelector("h1")
// let att=a.getAttribute("id")
// a.removeAttribute("id")
// console.log(att);

// let a=document.getElementById("head")
// let p=document.createElement('p')
// p.textContent="This is Replacing Element"
// document.body.replaceChild(p,a)





