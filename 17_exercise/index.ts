// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//  and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
//   invite  only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, print a message to that person
//  letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
// actually have an empty list at the end of your program.


let guestlist = ["ali","ahmed","azad","ahsan","waqas","qasim","hamza","bilal","khan"];

// Inform that only two people can be invited for dinner
console.log("You can invite only two people for dinner.");

for (let i = 0; i < guestlist.length; i++) {
  console.log("You are all invited to dinner, Mr. " + guestlist[i] + "!");
}

let shortguestlist = ["ali","ahmed","azad","ahsan","waqas","qasim","hamza","bilal","khan"];

// Inform that only two people can be invited for dinner
console.log("You can invite only two people for dinner.");

// Loop to remove guests and print a message to each removed guest
while (shortguestlist.length > 2) {
  const removedGuest = shortguestlist.pop();
  console.log("Sorry, " + removedGuest + ", you can't be invited to dinner.");
}

// Loop to invite the remaining guests
for (let i = 0; i < shortguestlist.length; i++) {
  console.log("You are invited to dinner, Mr. " + shortguestlist[i] + "!");
}

let removeguestlist = ["ali","ahmed","azad","ahsan","waqas","qasim","hamza","bilal","khan"];

// Inform that only two people can be invited for dinner
console.log("You can invite only two people for dinner.");

// Loop to remove the last two guests and print a message to each removed guest
while (removeguestlist.length > 0) {
  const removedGuest = removeguestlist.pop();
  console.log("Sorry, " + removedGuest + ", you can't be invited to dinner.");
}

// Print the empty guestlist
console.log("The guestlist is now empty:", removeguestlist);

