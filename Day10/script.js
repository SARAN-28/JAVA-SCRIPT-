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






