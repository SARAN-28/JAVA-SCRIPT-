// fetch('https://fakestoreapi.com/products')
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


async function fun(){
    try {
        const response= await fetch('https://fakestoreapi.com/products')
        // console.log(response)
        const data=await response.json()
        //console.log(data)
        data.map((value,index)=>{
            console.log(value.price)
        })
    } catch (error) {
        console.log(error)
    }
}
fun()