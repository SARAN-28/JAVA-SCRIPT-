// OOPS - Object Oriented Programming System
// - Real World Entity 
// - Class -> Blue print
// - Function -> Behaviour
// - Value -> property
// 4 - Types:
// 1.Inheritance
// 2.Abstraction
// 3.Encapsulation
// 4.Polymorphism

// 1.Inheritance:
// Inheritance is an OOP concept in which one class can use properties and methods from another class..

// Single Inheritance:
// Single inheritance means one child class inherits from one parent class.

// class base{
//     father(){
//         console.log("Working");
//     }
// }
// class child extends base{
//     son(){
//         console.log("Playing");
//     }
// }
// let obj=new child()
// obj.son()
// obj.father()

// Multilevel Inheritance:
// Multiple inheritance means one child class inherits features from more than one parent class.

// class grandfather {
//     gfather() {
//         console.log("Rest");
//     }
// }
// class father extends grandfather {
//     fath() {
//         console.log("Working");
//     }
// }
// class child extends father {
//     son() {
//         console.log("Playing");
//     }
// }
// let obj = new child();
// obj.son();
// obj.fath();
// obj.gfather();

// Hirerchical Inheritance:
// Hierarchical inheritance means multiple child classes inherit from the same parent class.

// class father {
//     Worker() {
//         console.log("Age 40");
//     }
// }
// class child1 extends father {
//     study() {
//         console.log("Age 25");
//     }
// }
// class child2 extends father {
//     play() {
//         console.log("Age 5");
//     }
// }
// let obj1 = new child1();
// obj1.study();
// obj1.Worker();
// let obj2 = new child2();
// obj2.play();
// obj2.Worker();

// Multiple Inheritance:
// Multiple inheritance means combining features from multiple parent sources in one child.

// class base{
//     greets(){
//         console.log("Hello");
//     }
// }
// const father=(base)=> class extends base{
//     work1(){
//         console.log("Working in tcs");
//     }
// }
// const mother=(base)=> class extends base{
//     work2(){
//         console.log("Working in cts");
//     }
// }
// class child extends mother(father(base)){
//     play(){
//         console.log("Playing");
//     }
// }
// let obj=new child()
// obj.play()
// obj.work1()
// obj.work2()
// obj.greets()

// 1.What is OOP ::

// OOP = Object-Oriented Programming
// It is a way of writing programs by organizing code around objects.

// Example :

// Student
// ├── Properties → name, age, course
// └── Behaviours → study(), attendClass()

// class Student {

//     name = "Saran";
//     age = 22;
//     course = "MCA";

//     study(){
//         console.log("Student is studying");
//     }

//     attendClass(){
//         console.log("Student is attending class");
//     }
// }

// 2. Object ::

// An object is an actual instance created from a class.

// Example:

// class Student {

//     name = "Saran";

//     study(){
//         console.log("Studying");
//     }
// }

// let student1 = new Student();

// console.log(student1.name);

// student1.study();

// Student → Class / Blueprint
// student1 → Object

// 3. Class ::

// A class is a blueprint/template for creating objects.

// Example:

// class Student {

// }

// This is only a blueprint.

// We can create objects from it:

// let student1 = new Student();
// let student2 = new Student();

// Now:

//              Student
//               Class
//                 ↓
//         ┌───────┴───────┐
//         ↓               ↓
//     student1         student2

// 4. Property ::

// A property stores data/information about an object.

// Example:

// class Student {

//     name = "Saran";
//     age = 22;
//     course = "MCA";

// }

// These are properties:

// name   → "Saran"
// age    → 22
// course → "MCA"

// We can access them:

// let student1 = new Student();

// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.course);

// 5. Method ::

// A method is a function inside a class/object that represents behaviour or action.

// Example:

// class Student {

//     name = "Saran";

//     study(){
//         console.log("Student is studying");
//     }

// }

// Here:
// name = "Saran";

// is a property.

// study(){
//     console.log("Student is studying");
// }

// is a method.

// Call the method:

// let student1 = new Student();

// student1.study();

// Output:

// Student is studying

// Easy memory:

// Property = What the object has
// Method = What the object does

// 6. Constructor ::

// A constructor is a special method that automatically runs when an object is created.

// Syntax:

// class Student {

//     constructor(){
//         console.log("Student object created");
//     }

// }

// Now:

// let student1 = new Student();

// As soon as new Student() runs, the constructor automatically runs.

// Output:

// Student object created

// Why do we use constructor?

// Usually, we use it to give values to the object when it is created.

// class Student {

//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

// }

// let student1 = new Student("Saran", 22);

// console.log(student1.name);
// console.log(student1.age);

// Output:

// Saran
// 22

// 7. new ::

// new is used to create an object from a class.

// class Student {

// }

// let student1 = new Student();

// Here:

// class Student
//       ↓
//      new
//       ↓
// student1 object

// Without new:

// let student1 = Student();

// You cannot normally call a class like a regular function.

// So remember:

// new creates an object from a class.

// 8. this

// this refers to the current object in a class method/constructor.

// Look at this:

// class Student {

//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

// }

// Create an object:

// let student1 = new Student("Saran", 22);

// Now:

// this.name

// refers to the current object's name.

// Eg ::

// class Student {
//     constructor(name, age, course){
//         this.name = name;
//         this.age = age;
//         this.course = course;
//     }
//     study(){
//         console.log(this.name + " is studying");
//     }
// }

// let student1 = new Student("Saran", 22, "MCA");
// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.course);

// student1.study();