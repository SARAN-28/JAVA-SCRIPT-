// Call Back function and Rest Parameter;

// Syntax:
// (())=>
// function hello(...e){
//     return e.reduce((total,num)=>total+num,0)  
// }
// console.log(hello(1,2,3,4,5))  


// Hoi String:      //call the function first
// hello()
// function hello(){
//     console.log("Saran")
// }


//Strings Methods:

// let a="   Hello    "
// let b="World"
// let c="Hello Goog Morning"

// console.log(a.charAt(1))
// console.log(a.concat(b))
// console.log(a.includes("e"))
// console.log(a.indexOf("e"))
// console.log(a.toLowerCase())
// console.log(a.toUpperCase())
// console.log(a.trim())
// console.log(c.split(","))
// console.log((a + "," + b).split(","))
// console.log(c.slice(2,9))
// console.log(c.replace("Morning","Evening"))


// Array Methods:

// let a=[10,20,30,40,50]
// let b=[" Hello ","Welcome"]
// let c=[5,3,7,0,1]

// console.log(a.push(25))
// console.log(a)

// console.log(a.pop())
// console.log(a)

// console.log(a.shift())
// console.log(a)

// console.log(a.unshift(70))
// console.log(a)

// console.log(a.concat(b))

// console.log(a.slice(2,5))
// console.log(a)

// console.log(a.splice(1,2))
// console.log(a)

// console.log(a.indexOf(20))

// console.log(a.includes(20))

// console.log(a.join("*"))
// console.log(a.join("-"))

// console.log(a.reverse())

// console.log(c.sort())


// Iteration in Array:

// 1.forEach():
// let arr=[1,2,3,4,5]
// arr.forEach((value,index)=>console.log(index," ",value))

// 2.Map()
// let arr=[1,2,3,4,5].map((value)=>(value*2))
// console.log(arr)

//3.filter()
// let arr=[1,2,3,4,5].filter((value)=>(value%2===0))
// console.log(arr)


// ` Til Symbol use:
// let a="Saran"
// console.log(`Welcome you ${a} Hello`)


// Object Properties:

// let person={name:"saran",age:22,address:"namakkal",phone:1234567890}
// console.log(person)
// console.log(person.name)
// console.log(person.address)

// Object Method:

// let person={name:"Saran",
// greet: function(){
//     return "Hello " + this.name
// }
// }
// console.log(person.greet())

//Object iteration:

// 1.for...in:
// let person={name:"Saran",age:22}
// for(let key in person){
//     console.log(key,person[key])
// }

// 2.Object.keys():
// let person={name:"Saran",age:22}
// console.log(Object.keys(person))

// 3.Object.values():
// let person={name:"Saran",age:22}
// console.log(Object.values(person))