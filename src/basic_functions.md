# Basic Program

The following is a version of the hello world program in the rust documentation. I changed the traditional "hello world" string for something more educational.

```rust,editable
{{#include ../listings/listing-01-01/src/main.rs}}
```

The program contains three components that have specific roles :

- The _main_ function
- The curly brackets
- The _println!_ macro

When a rust program runs, the _main_ function is the first part that executes.

```rust,editable

fn main() { // define main function 
// instructions for the main function go here
} // close curly bracket and complete expression

```

The rust compiler expects the _main_ function to return closed, regular brackets. In contrast, regular Rust functions allow programmers to define output types and return values. For example, the _main_ function will retun an error if the expression output is not what the compiler expects.

```rust,editable

fn main() { // define main function 
6
} // close curly bracket and complete expression

```

While the Rust _main_ function allows limited output types, regular functions are more flexable. For example, one can define a function called _facts_ that outputs a static string data type, call that function in the _main_ function, and print the output of _facts_ using the __println!__ macro, as seen below:

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
