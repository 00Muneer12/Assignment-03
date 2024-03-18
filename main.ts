/*store a person's name in a variable, and then print that person's name in
lowercase, uppercase, title case*/

const personName: string = "ghulammuneeruddin";
//lowerCase
console.log(personName.toLowerCase());

//upperCase

console.log(personName.toUpperCase());

//title case
let firstletter: string = personName.charAt(0).toUpperCase();
let restletters: string = personName.slice(1).toLowerCase();

let titileCase = firstletter + restletters;
console.log(titileCase);

