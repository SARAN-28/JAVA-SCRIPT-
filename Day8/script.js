// Event Listener:

// let btn=document.getElementById("btn")
// btn.addEventListener("click",()=>{
//     let a=document.getElementById("head")
//     a.style.backgroundColor="green"
//     a.style.color="white"
//     a.textContent="My name is Saran"
// })

// document.getElementById("formclick").addEventListener("submit",(e)=>{
//     e.preventDefault()
//     let username=document.getElementById("username").value
//     console.log(username);
// })


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