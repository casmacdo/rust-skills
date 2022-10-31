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
        println!("I ate the whole bag of chips and feel like trash") // print result if true
    } // close if expression
} // close main function expression

```

Else statements tell the computer to do an action if the first condition is not met.

Using the first example, we can create an if-else control structure that runs code when the first condition is not true:

```rust,editable

fn main(){ // declare main function
    let chips=false; // use let statement to exhibit my outstanding self control
    if chips { // declare if statement with boolean condition
        println!("I ate the whole bag of chips and feel like trash") // print result if true
    } else { // close if expression
        println!("Good work, idiot. You practiced self control!") // print supportive message
    } // close else expression
} // close main function expression

```

We can combine let and if statements. These statements might be useful when there are variables in our code that are condition-dependent. For example, after I finish a swim workout, my body looks gorgeous. However, on days when I don't swim, my body looks like a bony meat bag. A program that executes that logic could look like this:

```rust,editable

fn main(){ // declare main function
    let swim=true; // declare boolen swim variable
    let gorgeous = if swim {["went for a swim", "gorgeous"]} else {["didn't for a swim", "like a bony meat bag"]}; // boolean let-if statement
    println!("Cassidy {}, and his body looks {}", gorgeous[0], gorgeous[1]); // print result of let-if statement
} // close main expression

```
The rust compiler expects let-if epressions to produce the same data types. For example, the program below evaluates boolean conditions and outputs what people might call Toronto based on a pre-defined age.

```rust,editable

fn main() {
    let age=28; // create variable using let statement and boolean true 
    let toronto = if age < 26 {"6"} else if age > 26 && age < 86 {"Tdot"} else {"The Big Smoke"}; // declare let-if statement with expressions 
    println!("My age is {age} and I call Toronto {toronto}", age=age.to_string(), toronto=toronto)
}

```

Below, we change the expression data type for the people who refer to Toronto as "The Six." Becasue we changed the output data type of this expression, the compiler returns an error. 

```rust,editable

fn main() {
    let age=28; // create integer variable using let statement  
    let toronto = if age < 26 {6} else if age > 26 && age < 86 {"Tdot"} else {"The Big Smoke"}; // declare let-if statement with expressions 
    println!("My age is {age} and I call Toronto {toronto}", age=age.to_string(), toronto=toronto)
}

```

Loops allow us to do stuff fast. For example, if I were playing hockey and got upset and tried to fight everyone who tried to hurt me, the intensity of the game may rise as a result, and I would put my teamates in a bad position. 

```rust,editable

fn main() {
    let mut intensity = 0; // declare mutable variable using a let statement 
    let problems: [&str; 5] = ["A guy punched me", "The guy who punched me skated away after I confronted him", "The guy who punched me whined to the ref after he skated away", "The guy who punched me was too scared to look at me for the rest of the game", "The 220 lb teamate of the guy who punched me tried to intimidate the smallest player on our team"]; // declare array of problems, and specify data type and length 
    for problem in problems { // for loop that iterates through elements in array 
        if intensity < 2 { // boolean check until multiplication can represent exponential growth
            intensity += 1; // increment intensity 
        } else { // if intensity is greater than 2, the following expression can use multiplication to represent exponential growth
            intensity = intensity * intensity // multiply intensity by itself and redefine variable 
        }
        println!("{problem}, and the intensity is now {intensity}", problem=problem, intensity=intensity.to_string()) // print current intensity
    } // close for loop 
} 

```