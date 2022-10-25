# Control Structures

Control structures allow programers to insturct computers how to behave when faced with certian conditions.

Common control structures include:

- if statements
- else statements
- for loops
- while loops

We can relate the logic of these control sturtures to situations that we encounter in our lives.

For example: I could be at the grocery store looking at a bag of chips and think to myself: "if I add this bag of chips to my cart, I will likely eat its entire contents before I get home and feel like trash for the rest of the night."

A program that executes that logic could look like this:

```rust,editable

fn main(){ // declare main function
    let chips=true; // use let statement to exhibit my lack of self control
    if chips { // declare if statement with boolean condition
        println!("I ate the whole bag and feel like trash") // print result if true
    } // close if expression
} // close main function expression

```
