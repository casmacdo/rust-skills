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

The curly brackets turn the code into an expression. Expressions are code sequences that return values. The compiler expects the main functon to return closed parenthesis, so in this case, we use the println! macro to return the super complex math that we instructed the computer to do using the do_math function.

```rust,editable

fn main() { // define main function 
   let math = do_math(); // use let statement that assigns output of do-math function to math variable
   println!("Did math, and the answer is: {math}") // print output with friendly message 
}

// Below is the second function, which we call in the main function

fn do_math() -> i32 { // define math function and assign output type. i32 is a 32-bit, signed integer. A signed integer is one that can have a negative sign.
    6-7 // here is the math. We don't use a semicolon becasue we want the expression to return the result of this math
} // close the expression

```