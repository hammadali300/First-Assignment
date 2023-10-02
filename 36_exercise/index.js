"use strict";
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed
//  on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. 
// Call the function.
Object.defineProperty(exports, "__esModule", { value: true });
// Define the make_shirt function
function make_shirt(size, message) {
    console.log(`You have ordered a ${size}-sized T-shirt with the message: "${message}".`);
}
// Call the function to create a T-shirt
make_shirt("Medium", "Hello Man");
