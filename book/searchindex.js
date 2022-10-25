Object.assign(window.search, {"doc_urls":["functions.html#functions","control_structures.html#control-structures"],"index":{"documentStore":{"docInfo":{"0":{"body":195,"breadcrumbs":2,"title":1},"1":{"body":83,"breadcrumbs":4,"title":2}},"docs":{"0":{"body":"The following is a version of the hello world program in the rust documentation. I changed the traditional \"hello world\" string for something more educational. fn main() { // declare function, name it, and set arguments println!(\"Cassidy has giant quads\"); // use println! macro and give string argument\n} // close expression The program contains three components that have specific roles : The main function The curly brackets The println! macro When a rust program runs, the main function is the first part that executes. fn main() { // define main function // instructions for the main function go here\n} // close curly bracket and complete expression The rust compiler expects the main function to return closed, regular brackets. In contrast, regular Rust functions allow programmers to define output types and return values. For example, the main function will retun an error if the expression output is not what the compiler expects. fn main() { // define main function 6\n} // close curly bracket and complete expression While the Rust main function allows limited output types, regular functions are more flexable. For example, one can define a function called facts that outputs a static string data type, call that function in the main function, and print the output of facts using the println! macro, as seen below: fn main() { // define main function let truth = facts(); // assign the output of facts to truth using a let statement println!(\"{}\", truth) // print the truth using the println! macro\n} // Below is the second function, which we call in the main function fn facts() -> &'static str { // declare facts function and assign output type let quads = \"Cassidy has giant quads\"; // assign some facts to a variable using a let statement quads // make the expression blast out the facts\n} // close the expression","breadcrumbs":"Functions » Functions","id":"0","title":"Functions"},"1":{"body":"Control structures allow programers to insturct computers how to behave when faced with certian conditions. Common control structures include: if statements else statements for loops while loops We can relate the logic of these control sturtures to situations that we encounter in our lives. For example: I could be at the grocery store looking at a bag of chips and think to myself: \"if I add this bag of chips to my cart, I will likely eat its entire contents before I get home and feel like trash for the rest of the night.\" A program that executes that logic could look like this: fn main(){ // declare main function let chips=true; // use let statement to exhibit my lack of self control if chips { // declare if statement with boolean condition println!(\"I ate the whole bag of chips and feel like trash\") // print result if true } // close if expression\n} // close main function expression","breadcrumbs":"Control Structures » Control Structures","id":"1","title":"Control Structures"}},"length":2,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"6":{"df":1,"docs":{"0":{"tf":1.0}}},"a":{"d":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}}}},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"b":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}},"h":{"a":{"df":0,"docs":{},"v":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"r":{"a":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":2.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"c":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":2.0}},"s":{"=":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":2.23606797749979},"1":{"tf":1.4142135623730951}}}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"n":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"r":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":2.23606797749979}}}}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":2.23606797749979}}}}}},"o":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"d":{"df":0,"docs":{},"u":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}},"df":0,"docs":{}},"h":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":2,"docs":{"0":{"tf":2.449489742783178},"1":{"tf":1.4142135623730951}}}}}}}}},"f":{"a":{"c":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}},"t":{"df":1,"docs":{"0":{"tf":2.8284271247461903}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"n":{"df":2,"docs":{"0":{"tf":2.23606797749979},"1":{"tf":1.0}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":2,"docs":{"0":{"tf":4.358898943540674},"1":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}}},"g":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"o":{"df":1,"docs":{"0":{"tf":1.0}}},"r":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"l":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"p":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"m":{"a":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":2.0}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":2,"docs":{"0":{"tf":3.872983346207417},"1":{"tf":1.7320508075688772}}}},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"f":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":2.6457513110645907}}}}}}}},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}},"l":{"df":0,"docs":{},"n":{"!":{"(":{"\"":{"c":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"0":{"tf":2.23606797749979}}}}}}},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":2,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.4142135623730951}},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"q":{"df":0,"docs":{},"u":{"a":{"d":{"df":1,"docs":{"0":{"tf":2.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}},"l":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":2.23606797749979}}}}}},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"l":{"df":0,"docs":{},"f":{"df":1,"docs":{"1":{"tf":1.0}}}},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":2.0}}}}}}},"i":{"c":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"r":{"df":1,"docs":{"0":{"tf":1.0}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}},"u":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"r":{"a":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":2.0}}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":2.0}}}}}},"u":{"df":0,"docs":{},"s":{"df":2,"docs":{"0":{"tf":2.23606797749979},"1":{"tf":1.0}}}},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":1,"docs":{"0":{"tf":1.0}}}},"r":{"df":0,"docs":{},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"w":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}}},"breadcrumbs":{"root":{"6":{"df":1,"docs":{"0":{"tf":1.0}}},"a":{"d":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}}}},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"b":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}},"h":{"a":{"df":0,"docs":{},"v":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"r":{"a":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":2.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"c":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":2.0}},"s":{"=":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":2.23606797749979},"1":{"tf":1.4142135623730951}}}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"n":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"r":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":2.6457513110645907}}}}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":2.23606797749979}}}}}},"o":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"d":{"df":0,"docs":{},"u":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}},"df":0,"docs":{}},"h":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":2,"docs":{"0":{"tf":2.449489742783178},"1":{"tf":1.4142135623730951}}}}}}}}},"f":{"a":{"c":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}},"t":{"df":1,"docs":{"0":{"tf":2.8284271247461903}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"n":{"df":2,"docs":{"0":{"tf":2.23606797749979},"1":{"tf":1.0}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":2,"docs":{"0":{"tf":4.58257569495584},"1":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}}},"g":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"o":{"df":1,"docs":{"0":{"tf":1.0}}},"r":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"l":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"p":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"m":{"a":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":2.0}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":2,"docs":{"0":{"tf":3.872983346207417},"1":{"tf":1.7320508075688772}}}},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"f":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":2.6457513110645907}}}}}}}},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}},"l":{"df":0,"docs":{},"n":{"!":{"(":{"\"":{"c":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"0":{"tf":2.23606797749979}}}}}}},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":2,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.4142135623730951}},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"q":{"df":0,"docs":{},"u":{"a":{"d":{"df":1,"docs":{"0":{"tf":2.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}},"l":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":2.23606797749979}}}}}},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"l":{"df":0,"docs":{},"f":{"df":1,"docs":{"1":{"tf":1.0}}}},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":2.0}}}}}}},"i":{"c":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"r":{"df":1,"docs":{"0":{"tf":1.0}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}},"u":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":2.23606797749979}}}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"r":{"a":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":2.0}}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":2.0}}}}}},"u":{"df":0,"docs":{},"s":{"df":2,"docs":{"0":{"tf":2.23606797749979},"1":{"tf":1.0}}}},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":1,"docs":{"0":{"tf":1.0}}}},"r":{"df":0,"docs":{},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"w":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}}},"title":{"root":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});