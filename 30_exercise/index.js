"use strict";
// Create an array of usernames
const usernames = ["admin", "khan", "ali", "majid", "Sara"];
// Loop through the array and print greetings
for (const username of usernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello " + username + ", thank you for logging in again.");
    }
}
