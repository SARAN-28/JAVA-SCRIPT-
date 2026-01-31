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

// Single Inheritance:
// class base{
//     father(){
//         console.log("Working");
//     }
// }
// class child extends father(){
//     son(){
//         console.log("Playing");
//     }
// }
// let obj=new child
// obj.son()
// obj.father()

// Multilevel Inheritance:
// class grandfather{
//     gfather(){
//         console.log("Rest");
//     }
// }
// class father extends grandfather{
//     fath(){
//         console.log("Working");
//     }
// }
// class child extends father(){
//     son(){
//         console.log("Playing");
//     }
// }
// let obj=new child
// obj.son()
// obj.fath()
// obj.gfather()

// Hirerchical:
// class father{
//     Worker(){
//         console.log("Age 40")
//     }
// }
// class child1 extends father{
//     study(){
//         console.log("Age 25")
//     }
// }
// class child2 extends father{
//     play(){
//         console.log("Age 5")
//     }
// }
// let obj1=new child1
// obj1.study()
// obj1.Worker()
// let obj2=new child2
// obj2.study()
// obj2.Worker()

// Multiple Inheritance:
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