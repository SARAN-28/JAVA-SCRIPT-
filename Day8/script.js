// JavaScript DOM – Event Listener ::
// 1. What is an Event?
// An event is an action that happens in a web browser.

// For example:
// - Clicking a button.
// - Moving the mouse.
// - Pressing a keyboard key.
// - Typing inside an input field.
// - Submitting a form.
// JavaScript can detect these events and perform specific actions.

// 2. What is an Event Listener?
// It used to listen for a particular event on an HTML element and execute a function when that event occurs.

// Syntax :
// element.addEventListener("event", function);

// element	            - HTML element we want to target
// addEventListener()	- Method used to attach an event
// "click"	            - Event name
// function	            - Code that executes when the event occurs

// let btn=document.getElementById("btn")
// btn.addEventListener("click",()=>{
//     let a=document.getElementById("head")
//     a.style.backgroundColor="green"
//     a.style.color="white"
//     a.textContent="My name is Saran"
// })


// function fun(event){
//     console.log(event.key);  
// }


// Form Validation ::

// function fun(username){
//     const user=/^[a-zA-Z0-9_]{3,16}$/
//     if(username.trim()==""){
//         alert("Type the User Name")
//     }
//     else if(!user.test(username)){
//         alert("Name is Invalid Format")
//     }
//     else{
//         alert("Successful")
//     }
// }

// document.getElementById("formclick").addEventListener("submit",(e)=>{
//     e.preventDefault()
//     let username=document.getElementById("username").value
//     fun(username);
// })


// function time(){
//     console.log("My name is Saran");
// }
// setTimeout(() => {
//     time()
// }, 3000);

// let count=0
// function time(){
//     console.log("My name is Saran");
//     count++
// }
// let interval=setInterval(() => {
//     time()
//     if(count>=5){
//         clearInterval(interval)
//     }
// }, 3000);