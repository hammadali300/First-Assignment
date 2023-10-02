"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// Define an array of users
let users = ["ali", "majid", "khan"];
// Check if the list of users is empty
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Remove all usernames from the array
    users = [];
    console.log("All usernames have been removed.");
}
// Print the current state of the users array
console.log("Users: " + users.join(", "));
