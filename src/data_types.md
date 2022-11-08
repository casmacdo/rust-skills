# Data Types

Data primitives are the basis for other data types. Primitives are immutable and typically the lowest level language application of the programming language implimentation.

Rust has two primitive types: scalar and compound.

Compared to compound primitives, scalar primitves are less complex. Scalar data types include signed and unsigned integers, floating point, character, boolean, and unit types.

Signed integers are are whole numbers that can be positive or negative. "Signed" referes to the positive or negative sign. Signed integer types include `i8`, `i16`, `i32`, `i64`,`i128`, and `isize`. The information that proceeds the i these names referes to the amount of data that these types can store. We can find out how much each of these data types stores using the following expression: -(2<sup>n - 1</sup>) to 2<sup>n -
1</sup> -1. Change the power in the code below to see the data type upper limits.

```rust,editable

extern crate num_traits;
use num_traits::checked_pow;

fn main() { // open main expression
    let base:u128 = 2; // declare base using unmutable let statement 
    let power:usize = 127; // declare power using let statement and specifying usize data type
    let res = checked_pow(base, power); // evaluate expression using checked_pow function
    println!("{}", res.unwrap() -1 , dtypes); // print result using println! macro
} // close main expression

```
