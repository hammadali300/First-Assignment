// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. 
// Then print the name after striping the white spaces.

let personspaces ="hammad khan"
console.log(`\t\t\n\t ${personspaces}   "with white spaces and new line"\t\t\n\t`)
console.log(`${personspaces.trim()} \t\n\t without white spaces\t\n\t`)
