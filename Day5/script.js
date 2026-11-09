// CallBack function ::
// Passed a argument to another function and executed inside that function.
// - One function is created.
// - We pass another function as an argument.

// Eg:
// function hello(callback) {
//     console.log("Hello");

//     callback();
// }

// function welcome() {
//     console.log("Welcome to JavaScript");
// }

// hello(welcome);

// Rest Parameter ::
// Pass multiple arguments to a function and collect them into a single array.

// Syntax:
// function functionName(...parameter) {
//     // Code
// }

// Eg:
// function hello(...e) {
//     console.log(e);
// }

// hello(10, 20, 30, 40, 50);


// Reduce() Method ::
// It is an array method that reduces all array elements into a single value.

// Syntax :
// array.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, initialValue);

// accumulator	    - Stores the accumulated result
// currentValue	- Current array element
// initialValue	- Starting value of the accumulator

// Eg:
// let a = [1, 2, 3, 4, 5];

// let result = a.reduce((total, num) => {
//     return total + num;
// }, 0);

// console.log(result);  


// Hoisting:      //call the function first
// hello()
// function hello(){
//     console.log("Saran")
// }


//Strings Methods:

// let a="   Hello    "
// let b="World"
// let c="Hello Goog Morning"

// console.log(a.charAt(1))
// Returns character at specified index

// console.log(a.concat(b))
// Combines two strings

// console.log(a.includes("e"))
// Checks whether value exists

// console.log(a.indexOf("e"))
// Returns index position

// console.log(a.toLowerCase())
// Converts to lowercase

// console.log(a.toUpperCase())
// Converts to uppercase

// console.log(a.trim())
// Removes starting and ending spaces

// console.log(c.split(","))
// Splits string into an array

// console.log(c.slice(2,9))
// Extracts part of a string

// console.log(c.replace("Morning","Evening"))
// Replaces specified text


// Array Methods:

// let a=[10,20,30,40,50]
// let b=[" Hello ","Welcome"]
// let c=[5,3,7,0,1]

// console.log(a.push(25))
// console.log(a)
// Adds element at the end

// console.log(a.pop())
// console.log(a)
// Removes last element

// console.log(a.shift())
// console.log(a)
// Removes first element

// console.log(a.unshift(70))
// console.log(a)
// Adds element at the beginning

// console.log(a.concat(b))
// Combines two arrays

// console.log(a.slice(2,5))
// console.log(a)
// Extracts part of an array

// console.log(a.splice(1,2))
// console.log(a)
// Adds or removes array elements

// console.log(a.indexOf(20))
// Returns index position

// console.log(a.includes(20))
// hecks whether element exists

// console.log(a.join("*"))
// console.log(a.join("-"))
// Converts array into a string

// console.log(a.reverse())
// Reverses array elements

// console.log(c.sort())
// Sorts array elements

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