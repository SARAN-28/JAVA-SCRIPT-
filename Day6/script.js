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

// Eg:
// let count = 1;

// let interval = setInterval(function(){

//     console.log(count);
//     count++

//     if(count>5){
//         clearInterval(interval)
//     }
// },2000)


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


// Hoisting:
// Variable Hoisting:

// console.log(a)
// var a = 10;

// console.log(b)
// let b =10;

// console.log(c)
// const c = 10


// localStorage::

// What is localStorage?
// localStorage stores data in the browser as key-value pairs.

// Data remains even after:
// Page refresh
// Browser restart
// until manually removed.

// Store Data:
// localStorage.setItem("name", "Saran");
// sessionStorage.setItem("name", "Java Script")

// Get Data:
// let name = localStorage.getItem("name");
// console.log(name);
// let name = sessionStorage.getItem("name");
// console.log(name)

// Remove Data:
// localStorage.removeItem("name");
// sessionStorage.removeItem("name")

// Clear All Data:
// localStorage.clear();

// Storing and Retrieving an Object:
// Store as string:
// let user = { name: "Saran", age: 28 };
// localStorage.setItem("user", JSON.stringify(user));

// String to Object:
// let retrievedUser = JSON.parse(localStorage.getItem("user"));
// console.log(retrievedUser);


// Document Object Model ::

// 1. What is DOM?
// DOM stands for Document Object Model.

// DOM is a programming interface that 
// It allows JavaScript to access, read, modify, add, and remove HTML elements and their content.

// - HTML is used to create the structure of a webpage.
// - CSS is used to design the webpage.
// - JavaScript is used to make the webpage interactive.
// - DOM acts as a connection between HTML and JavaScript.

// 2. How does DOM work?
// When a browser loads an HTML document, it reads the HTML and creates a DOM tree.

// Document	    - Represents the entire HTML document
// html	        - Root element
// head	        - Contains page information
// title	    - Contains webpage title
// body	        - Contains visible webpage content
// h1	        - Heading element
// p	        - Paragraph element

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
// document.body.append(a)
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