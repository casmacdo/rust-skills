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

We can use functions to calculate descriptive statistics For example, we can calculate the mean of an integer array. This code can likely be more generalizable becasue it currently requires arrays that meet the defined type specifications. A vector type might be more generalizable and sacrifice speed and memory-footprint size. 

```rust,editable

fn main() {
    let weights: [f64; 7] = [61.3, 62.1, 62.1, 61.2, 61.2, 61.3, 62.2]; // array of my weights from the past seven days using float 64 data
    let avg = mean(weights); // assign output of mean function to variable 
    println!("My average weight over the past seven days was {}", avg); // print result and context 
    }
    
// below, I create a mean function 
    
fn mean(values: [f64; 7]) -> f64 {
    let mut sum: f64 = 0.0; // declare initial sum using decimal becasue it is a float type 
    let length = values.len() as f64; // declare length using len() method. Need to change to float to divide the sum by the length later 
    for value in values { // loop through array 
        sum += value; // sum values 
    }; // close expression 
    sum/length // return mean 
} // close function expression 

```