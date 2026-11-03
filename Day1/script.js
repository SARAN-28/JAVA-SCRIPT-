// ============================================
// DAY 1: INTRODUCTION TO JAVASCRIPT
// ============================================

// JavaScript is a high-level programming language
// Used for creating interactive and dynamic web pages
// Developers can implement features like validation, animation, event handling and API interaction
// It runs on both the client side and the server side

// --------------------------------------------
// NOTE 1: Types of Programming Languages
// --------------------------------------------
// 1. Machine language : 0s and 1s, the only thing the CPU understands
// 2. Low-level        : Assembly (MOV A, 5), close to hardware, hard to write
// 3. High-level       : English-like (JavaScript, Python, Java), easy to read and write
//
// High-level  = closer to human language
// Low-level   = closer to computer language

// --------------------------------------------
// NOTE 2: Why is JavaScript High-Level?
// --------------------------------------------
// 1. Human-readable words (let, if, function, console.log)
// 2. Memory is managed automatically (garbage collection)
// 3. No hardware knowledge needed, runs on Windows, Mac, Linux and mobile
// 4. Abstraction: simple commands hide complex work (alert, console.log)
// 5. A JS engine converts the code to machine code for us

// --------------------------------------------
// NOTE 3: How JavaScript Runs
// --------------------------------------------
// Your JS code -> JS Engine (Chrome uses V8) -> Machine code -> CPU -> Output
// Every browser has a JS engine built in

// --------------------------------------------
// NOTE 4: Client Side vs Server Side
// --------------------------------------------
// Client side : runs in the user's browser
//               Examples: form validation, button clicks, animations
// Server side : runs on a server using Node.js
//               Examples: database access, login, APIs
//
// Frontend = client side (HTML + CSS + JS)
// Backend  = server side (Node.js)

// --------------------------------------------
// NOTE 5: What JavaScript Can Do in a Web Page
// --------------------------------------------
// HTML = structure (skeleton)
// CSS  = style (design)
// JS   = behavior (action)


// ============================================
// VARIABLES
// ============================================

// --------------------------------------------
// NOTE 6: What is a Variable?
// --------------------------------------------
// A variable is a named container that stores a value in memory.

// Syntax: keyword variableName = value;
// Example: let age = 20;

// Keywords:
//  1.var
//  2.let
//  3.const

// --------------------------------------------
// NOTE 7: Variable Naming Rules
// --------------------------------------------
// 1. Names are case-sensitive (age and Age are different)
// 2. Must start with a letter, _ or $ (never a number)
// 3. No spaces and no special characters except _ and $
// 4. Cannot use reserved words (let, const, if, function ...)
// 5. Convention: camelCase -> userName, totalMarks

// Print Statement
console.log("Hello World");

// Alert message
alert("Welcome to Day 1 of JavaScript!");


// --------------------------------------------
// NOTE 8: var
// --------------------------------------------
// - Redeclaration allowed
// - Reassignment allowed
// - Function scoped (ignores { } blocks)
// - Old style, avoid in modern code

// Varaiable name can be reused or redeclared and reassignment allowed and Function Scoped
// var c=10
// var c=20;    // redeclared, no error
// console.log(c);

// --------------------------------------------
// NOTE 9: let
// --------------------------------------------
// - Redeclaration NOT allowed (in the same scope)
// - Reassignment allowed
// - Block scoped (stays inside { })
// - Use when the value will change

// Variable name can't be reused or redeclared but reassignment allowed and Block Scoped
// let a=10
// let b=20;
// console.log(a+b);

// let a = 10;
// a = 15;            // reassignment is fine
// console.log(a);    // 15
// let a = 30;     // SyntaxError: 'a' has already been declared

// --------------------------------------------
// NOTE 10: const
// --------------------------------------------
// - Redeclaration NOT allowed
// - Reassignment NOT allowed (read only)
// - Block scoped
// - Must be given a value when declared
// - Use by default for values that should not change

// Variable name can't be reused or redeclared not reassignment allowed and Bloak Scoped read only
// const d=10;
// const e=20;
// console.log(d+e);
