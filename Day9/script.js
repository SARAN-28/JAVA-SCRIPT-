// fetch('https://jsonplaceholder.typicode.com/users')
// .then((products)=>{
//     if(!products.ok){
//         throw new Error("Product is not found");
//     }
//     else{
//         return products.json()
//     }
// })
// .then((value)=>{
//     value.map((value,index)=>{
//         console.log(value.title)
//     })
// })
// .catch((error)=>{
//     console.log("Error: ",error)
// })


// async function fun(){
//     try {
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         console.log(response)
//         const data=await response.json()
//         console.log(data)
//         data.map((value,index)=>{
//             console.log(value.name)
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }
// fun()