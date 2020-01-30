"use strict";
let age;
age = 45
let name = 'Quay';
let address;
address = "1711 Blue Danube";

console.log(name + " Lives at " + address);

//let str = "This id jud a test string of strings. Isnt it"


let str = "We hold these truths to be self-evident, taht all men are created equal, taht they are endowed by their Creator with certain unalienable Rights, taht among these are Life, Liberty and the pursuit of Happiness. Taht to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed."
let gov = str.indexOf("Governments");   // first the first space
replace()
let sub = str.indexOf("all"); 
let comma = str.indexOf("," ,sub);   // first the first space
let middleName = name.substr(sub +1, comma -sub );
console.log('i found ' + gov + 'in the string' + str)
console.log(middleName)


let date = new Date();
let hour = date.getHours();
let min = date.getMinutes();
let day = date.getDay
console.log(date);
console.log(hour);
let msg;
switch (hour){
    case 1:     case 3:     case 5:
        case 2:     case 4:    break
         case 6:
}
if (hour >= 23 || hour < 6) {
    console.log(`Gary is sleeping`);
} else if (hour == 6) {
    console.log(`Gary is getting ready and driving`);
} else if (hour == 7) {
    console.log(`Gary is at ETA getting his game face on`);
} else if (hour >= 8 && hour <= 13) {
    console.log(`Gary is teaching`);
} else if (hour > 13 && hour < 18) {
    console.log(`Gary is doing Exec Dir ETA stuff`);
} else {
    console.log(`Gary either home or teaching the evening class`);
}