// Encapsulation:
// -Public -> default        -  access to anywhere
// -Private ->using #        -  access only inside the class
// -Protector ->using _      -  JS doen not support the protector

// Public:
// class test{
//     name="Saran"
//     son(){
//         console.log(this.name);
//     }
// }
// class child extends test{
//     son2(){
//         console.log(this.name)
//     }
// }
// let obj=new child
// obj.son()
// obj.son2()

// Private:
// class test{
//     #name="Saran"
//     son(){
//         console.log(this.#name);
//     }
// }
// class child extends test{
//     son2(){
//         console.log(this.name)
//     }
// }
// let obj=new child
// obj.son()
// obj.son2()

//Protector:
// class test{
//     _name="Saran"
//     son(){
//         console.log(this._name);
//     }
// }
// class child extends test{
//     son2(){
//         console.log(this._name)
//     }
// }
// let obj=new child
// obj.son()
// obj.son2()


// // Polymorphism:
// -MethodOverRiding      -Same method but different name 
// -MethodOverLoading     -Same name but different parameters

// MethoOverRiding:
// class base1{
//     display(){
//         console.log("meow meow");    
//     }
// }
// class base2 extends base1{
//     display(){
//         console.log("maa maa");    
//     }
// }
// class base3 extends base2{
//     display(){
//         console.log("roar roar");    
//     }
// }
// class base4 extends base3{
//     display(){
//         console.log("bark bark");    
//     }
// }
// let obj1=new base1()
// let obj2=new base2()
// let obj3=new base3()
// let obj4=new base4()
// obj1.display()
// obj2.display()
// obj3.display()
// obj4.display()

//MethodOverLoading:
// class base{
//     display(a){
//         return a
//     }
//     display(a,b){
//         return a+b
//     }
//     display(a,b,c){
//         return a+b+c
//     }
// }
// let obj=new base
// console.log(obj.display(10));       (or)
// console.log(obj.display(10,20));    (or)
// console.log(obj.display(10,20,30));

        // (Another way)

class base{
    add(a,b,c,d){
        if(arguments.length==1){
            return a
        }
        else if(arguments.length==2){
            return a+b
        }
        else if(arguments.length==3){
            return a+b+c
        }
        else{
            return a+b+c+d
        }
    }
}
let obj=new base
console.log(obj.add(10));
console.log(obj.add(10,20));
console.log(obj.add(10,20,30));
console.log(obj.add(10,20,30,40));