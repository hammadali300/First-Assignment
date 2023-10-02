
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


// Define the make_shirt function with default parameters
function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`You have ordered a ${size}-sized T-shirt with the message: "${message}".`);
  }
  
  // Create a large shirt with the default message
  make_shirt(); // Large shirt with message: "I love TypeScript"
  
  // Create a medium shirt with the default message
  make_shirt("Medium"); // Medium shirt with message: "I love TypeScript"
  
  // Create a custom-sized shirt with a different message
  make_shirt("Small", "TypeScript is awesome!"); // Small shirt with message: "TypeScript is awesome!"
  