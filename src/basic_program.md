# Basic Program

The following is a version of the hello world program in the rust documentation. I changed the traditional "hello world" string for something more educational.

```rust,editable
{{#include ../listings/listing-01-01/src/main.rs}}
```

The program contains three components that have specific roles :

- The main function
- The curly brackets
- The println! macro

When a rust program runs, the main program is the first part that executes.

```rust,editable

fn main() { // define main function 
// instructions for the main function go here
} // close curly bracket and complete expression

```

The rust compiler expects the main function to return closed, regular brackets. In contrast, regular Rust functions allow programmers to define output types and return values. For example, the main function will retun an error if the expression output is not what the compiler expects.

```rust,editable

fn main() { // define main function 
6
} // close curly bracket and complete expression

```

While the Rust main function allows limited output types, regular functions are more flexable. For example, one can define a function called facts that outputs a static string data type, call that function in the main function, and print the output of facts using the println! macro, as seen below:

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
