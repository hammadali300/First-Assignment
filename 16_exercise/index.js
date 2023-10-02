"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more 
// guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing 
// people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your 
// list. • Print a new set of invitation messages, one for each person in your list.
let Moreguestlist = ["ali", "ahmed", "azad", "ahsan", "qasim", "hamza", "bilal"];
for (let i = 0; i < Moreguestlist.length; i++) {
    console.log("i have found a bigger dinning table MR", Moreguestlist[i]);
}
let addBegningguestlist = ["ali", "ahmed", "azad", "ahsan", "qasim", "hamza", "bilal"];
addBegningguestlist.unshift("haseeb");
for (let i = 0; i < addBegningguestlist.length; i++) {
    console.log("i have found a bigger dinning table MR", addBegningguestlist[i]);
}
let addMiddleguestlist = ["ali", "ahmed", "azad", "ahsan", "qasim", "hamza", "bilal"];
addMiddleguestlist.splice(4, 0, "waqas");
for (let i = 0; i < addMiddleguestlist.length; i++) {
    console.log("i have found a bigger dinning table MR", addMiddleguestlist[i]);
}
let addEndguestlist = ["ali", "ahmed", "azad", "ahsan", "qasim", "hamza", "bilal"];
addEndguestlist.push("khan");
for (let i = 0; i < addEndguestlist.length; i++) {
    console.log("i have found a bigger dinning table MR", addEndguestlist[i]);
}
