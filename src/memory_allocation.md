# Memory Allocation

Efficency is a primary concern in Rust's memory-allocation logic. Rust stores information using two types of memory: the stack and the heap.

One may visulize the stack as pancakes that we sequentially weigh, stack, and unstack with our older brother. Further, we can imagine that our older brother's contamination OCD compels him to put us in a headlock each time we try to take pancakes from locations on the stack other than the top.

