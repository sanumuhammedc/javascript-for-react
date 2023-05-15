//functions in js

function greet(){
    return "Hello";
}

console.log(greet());

// function with parameters
function greet1(name){
    return "Hello " + name;
}

console.log(greet1("John"));

// function with default parameters
function greet2(name = "John"){
    return "Hello " + name;
}

console.log(greet2());

// anonymous function
const square = function(x){
    return x*x;
}

console.log(square(8));

// immidiatly invokable function expression - IIFE
(function(){
    console.log("IIFE Ran..");
}
)();

// IIFE with parameters
(function(name){
    console.log("Hello " + name);
}
)("John");

// property methods
const todo = {
    add: function(){
        console.log("Add todo..");
    }
}

todo.add();

// arrow functions
const sqr = (x) => {
    return x*x;
}
