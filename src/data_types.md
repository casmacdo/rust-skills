# Data Types

Data primitives are the basis for other data types. Primitives are immutable and typically the lowest level language application of the programming language implimentation.

Rust has two primitive types: scalar and compound.

Compared to compound primitives, scalar primitves are less complex. Scalar data types include signed and unsigned integers, floating point, character, boolean, and unit types.

Signed integers are are whole numbers that can be positive or negative. "Signed" referes to the positive or negative sign. Signed integer types include `i8`, `i16`, `i32`, `i64`,`i128`, and `isize`. The information that proceeds the i these names referes to the amount of data that these types can store. We can find out how much each of these data types stores using the following expression: -(2<sup>n - 1</sup>) to 2<sup>n -
1</sup> -1. Change the bits variable to see the types' upper and lower limits.

```rust,editable

extern crate num_traits;
use num_traits::checked_pow;

fn main() { // open main expression
    let bits: [i16; 5] = [8, 16, 32, 64, 128]; // create array of bit sizes using i16 becasue 128 is too large for i8
    let base:u128 = 2; // declare base using unmutable let statement. I used u128 becasue this type is used for the checkedpow expression
    for bit in bits { // for loop that reads through elements in bits array 
        let power:usize = {bit-1} as usize; // declare power using let statement and specifying usize data type
        let res = checked_pow(base, power); // evaluate expression using checked_pow function
        println!("For i{bit}, the lower limit is -{lower} and the upper limit is {upper}", bit=bit, lower=res.unwrap(), upper=res.unwrap() -1); // print result using println! macro
    }; // close for loop expression 
} // close main expression

```
