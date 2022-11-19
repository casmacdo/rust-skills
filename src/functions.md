# Functions

The following is a version of the hello world program in the rust documentation. I changed the traditional "hello world" string for something more educational.

```rust,editable
{{#include ../examples/01-01/src/main.rs}}
```

The program contains three components that have specific roles :

- The `main` function
- The curly brackets
- The `println!` macro

When a rust program runs, the `main` function is the first part that executes.

```rust,editable

fn main() { // define main function 
// instructions for the main function go here
} // close curly bracket and complete expression

```

The rust compiler expects the `main` function to return closed, regular brackets. In contrast, regular Rust functions allow programmers to define output types and return values. For example, the `main` function will retun an error if the expression output is not what the compiler expects.

```rust,editable

fn main() { // define main function 
6
} // close curly bracket and complete expression

```

While the Rust `main` function allows limited output types, regular functions are more flexable. For example, one can define a function called `facts` that outputs a static string data type, call that function in the `main` function, and print the output of `facts` using the `println!` macro, as seen below:

```rust,editable

fn main() { // define main function 
   let truth = facts(); // assign the output of facts to truth using a let statement
   println!("{}", truth) // print the truth using the println! macro
}

// Below is the second function, which we call in the main function

fn facts() -> &'static str { // declare facts function and assign output type
    let quads = "Cassidy has giant quads"; // assign some facts to a variable using a let statement
    quads // make the expression blast out the facts
} // close the expression

```

Modules are collections of things like functions, structs, traits, impl, blocks, or other modules. Within modules, there is public and private visability. By deafault, modules have private visability, which means that module components are not usable outside of the modules. If needed, one can use the pub keyword to make an item visable outside of the module. The example below makes a function inside of a module visable in the main program.

```rust,editable

fn main() {
    // define main function
    let domination = social_science::econ(); // assign the output of public module to variable
    println!("{}", domination); // print using println! macro
}

// Below is a module in which we have a public function that has public access 

mod social_science {
    pub fn econ() -> &'static str { 
        // declare function and set output type. I used a static string becasue I want the output to go to the stack and make the program faster
        let globalization = "Westernization"; // a string to a variable using a let statement
        globalization // pass the variable through the expression
    } // close the expression
}


```
