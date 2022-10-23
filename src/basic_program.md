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

The curly brackets turn the code into an expression. Expressions are code sequences that return values.

Given these parameters, the Rust compiler expects the main function to return types that terminate the program. As such, without use of specific type definitions, we need to use the println! macro to return things like the really-important string defined in the  we defined earlier.

The compiler expects the main functon to return closed parenthesis, so in this case, we use the println! macro inform people of super-important facts.

```rust,editable

fn main() { // define main function 
   let truth = facts(); // assign the output of facts to truth using a let statement
   println!("{}", truth) // print the truth using the println! macro
}

// Below is the second function, which we call in the main function

fn facts() -> &'static str { // facts function and assign output type.
    let quads = "Cassidy has giant quads"; // assign some facts to a variable using a statement let
    quads // make the expression blast out the facts
} // close the expression

```
