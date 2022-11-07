# Data Types

Data primitives are the basis for other data types. Primitives are immutable and typically the lowest level language application of the programming language implimentation.

Rust has two primitive types: scalar and compound.

Compared to compound primitives, scalar primitves are less complex. Scalar data types include signed and unsigned integers, floating point, character, boolean, and unit types.

Signed integers are are whole numbers that can be positive or negative. "Signed" referes to the positive or negative sign. Signed integer types include `i8`, `i16`, `i32`, `i64`,`i128`, and `isize`. The information that proceeds the i these names referes to the amount of data that these types can store.

Signed, 8-bit data stores values from -128 to 127. Change the increment from `-=` to `+=` if you wish to see the upper limit of this data type.

```rust,editable

fn main() { // open main expression
let mut eight: i8 = 0;
loop {
    println!("{}", eight);
    eight-=1;
    };
} // close main expression

```