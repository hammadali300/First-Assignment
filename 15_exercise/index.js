"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
/// Define a list of people to invite to dinner
const dinnerGuests = ["ali", "ahmed", "majid", "ahsan"];
// A guest can't make it
const guestWhoCantMakeIt = "majid";
// Loop through the list and send invitations
for (const guest of dinnerGuests) {
    if (guest === guestWhoCantMakeIt) {
        console.log(`Dear ${guestWhoCantMakeIt} you can't make it to the dinner.`);
    }
    else {
        console.log(`Dear ${guest}, You're invited to dinner on Saturday.\n`);
    }
}
let Modguestlist = ["ali", "ahmed", "azad", "ahsan"];
for (let i = 0; i < Modguestlist.length; i++) {
    console.log("you are requested to invite my dinner MR", Modguestlist[i]);
}
