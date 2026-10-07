//Promise:

//Syntax:
// function functionname(){
//     return new Promise((resolve, reject) => {
        
//     })
// }
// functionname()

// let a=true
// function order(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(a){
//                 resolve("Your order is ready")
//             }
//             else{
//                 reject("your order is cancel")
//             }
//         },9000)
//     })
// }
// function demo(){
//     order().then((message)=>{
//         console.log(message);
//     })
//     .catch((err)=>{
//         console.log("line:34",err);
//     })
// }
// demo()

// Focus and Blur:
// let input = document.getElementById("name")
// input.addEventListener("focus", () => (input.style.backgroundColor = "lightgreen"))
// input.addEventListener("blur", () => (input.style.backgroundColor = ""))

// Change:
// document.getElementById("course").addEventListener("change", (event) => {
//     document.body.style.backgroundColor = event.target.value;
// });

// Drag and Drop Event:
// let dragItem = document.getElementById("dragitem");
// dragItem.addEventListener("dragstart", () => console.log("Drag started"));
// dragItem.addEventListener("dragend", () => console.log("Drag ended"))

// Load:
// window.addEventListener("load", () => {
//     console.log("Page loaded");
// });

// Resize:
// window.addEventListener("resize", () => {
//     console.log("Window resized");
// });

// Scroll
// window.addEventListener("scroll", () => {
//     console.log("Page scrolled");
// });

// Collextions:
// let items = document.getElementsByTagName("h2");

// console.log(items);
// console.log(items[0]);
// console.log(items[0].textContent);

// Node List:
// let items = document.querySelectorAll(".item");

// console.log(items);
// console.log(items[0]);
// console.log(items[0].textContent);

//Storage:
//Local storage:-Premanant Storage
// Session storage:-Temporary Storage

//Local Storage:
// localStorage.setItem("name","Saran")
// let data=localStorage.getItem("name")
// console.log(data);
// localStorage.removeItem("name")

// Session Storage:
// sessionStorage.setItem("name","Saran")

// let data={
//     name:"Saran",
//     age:"22",
//     email:"saran@gmail.com",
//     mobile:"1234455667"
// }
// let str=JSON.stringify(data)
// sessionStorage.setItem("data",str)
// let a=JSON.parse(localStorage.getItem("data"))






