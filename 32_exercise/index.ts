// Checking Usernames: Do the following to create a program that simulates how websites ensure that 
// everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are
// also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print 
//a message that the person will 
//need to enter a new username. If a username has not been used, print a message saying that the username 
//is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


// List of current usernames
const current_user: string[] = ["ali", "hammad", "khan", "hamid", "Arslan"];

// List of new usernames
const new_user: string[] = ["khalid", "HAMMAD", "touqeer", "zia", "nasir"];

// Loop through the new_users list to check each username
for (const newUsername of new_user) {
  // Convert the new username and current usernames to lowercase for case-insensitive comparison
  const lowercaseNewUsername = newUsername.toLowerCase();
  const lowercaseCurrentUsers = current_user.map(user => user.toLowerCase());

  // Use Array.includes() to check if the lowercase new username is in the lowercase current_users list
  if (lowercaseCurrentUsers.includes(lowercaseNewUsername)) {
    console.log(`Sorry, '${newUsername}' is already taken. Please enter a new username.`);
  } else {
    console.log(`Congratulations, '${newUsername}' is available!`);
    current_user.push(newUsername); // Add the new username to the current_users list
  }
}

// Updated list of current users
console.log("Updated list of current users:", current_user.join(", "));

