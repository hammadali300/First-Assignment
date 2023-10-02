// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements 
// that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit 
// is in your array, the if block should print a statement,
//  such as You really like bananas!

// Create an array of favorite fruits
const favorite_fruits: string[] = ["apple", "banana", "strawberry"];

// Check if specific fruits are in the array and print corresponding messages
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes("apple")) {
    console.log("Apples are one of your favorite fruits!");
}

if (favorite_fruits.includes("kiwi")) {
    console.log("You also enjoy kiwis!");
}

if (favorite_fruits.includes("orange")) {
    console.log("Oranges are among your favorites!");
}

if (favorite_fruits.includes("strawberry")) {
    console.log("Strawberries are a tasty choice!");
}
