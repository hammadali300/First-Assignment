// Greetings: Start with the array you used in Exercise 11,
//  but instead of just printing each person’s name, print a message to them. 
//  The text of each message should be the same, but each message should be personalized with the person’s name.

var frndlist=["hammad","shaqas","dawood","farooq"]
 console.log(frndlist.length)
console.log(frndlist[1])
console.log(frndlist[2])
console.log(frndlist[3])
let greetmsg="welcome in typescrip"
 for(let i=0;i<=frndlist.length -1;i++){
    console.log(`${frndlist[i]},${greetmsg}`)
}