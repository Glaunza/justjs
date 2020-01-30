let ages = [32, 12, 33, 16, 15, 40, 80, 55, 11, 6];
let totalAges = ages.reduce((total, age) => total + age);
let aveAge = totalAges / ages.length;
console.log(aveAge);


let newArray = ages.filter(checkAdult)
console.log("ages > 18 " + newArray);
console.log("ages > 18 " + newArray.join(", "));

newArray = ages.filter(age => age >= 30);
console.log("ages >= 30 " + newArray);
console.log("There " + newArray.length + " people over 30")
console.log("The last person in the list over 30 is " + newArray[newArray.length - 1])

let old = ages.find(age => (age > 33));
console.log("First old person in array: " + old);

ages.forEach(age => console.log(age));

ages.forEach(age => showAge(age));

function showAge(age) {
    if (age < 10) {
        console.log("Child " + age);
    } else if (age >= 10 && age < 20) {
        console.log("Teenager " + age);
    } else if (age >= 20 && age < 43) {
        console.log("Young adult " + age);
    } else if (age >= 43) {
        console.log("just plain old " + age);
    }
}
let index = ages.findIndex(age => (age > 33));
console.log(`Location of first person > 33 is ${index} and that age is ${ages[index]}`);

newArray = ages.every(age => (age > 6));
console.log("Every age > 6 " + newArray);

newArray = ages.some(age => (age > 6));
console.log("Some ages > 6 " + newArray);

let num = ages.find(age => (age > 32));
console.log("first age > 32: " + num);

function checkAdult(age) {
    return age > 18;
}

let names = ['Liya', 'Rain', 'Lindsey', 'Peyton', 'Jarvis', 'Q',
    'Alexis', 'Julius', 'John', 'Brian'
];
newArray = names.filter(name => name.length >= 6);

newArray = names.filter(name => name.charAt(1) == 'a');
newArray = names.filter(name => name.charAt(0) == 'J' && name.length != 4);
newArray = names.filter(name => name.startsWith('J') && name.length != 4);

console.log(newArray.join("/"));

ages.forEach(age => console.log(age));
for (const age of ages) {
    console.log("->" + age);
}

let family = []
family[4] = 'Dexter';
family[14] = 'Casey';
family[24] = 'Chauncey';
for (const i in family) {
    console.log(i + " " + family[i]);
}


let fritoLay = ['fritos', 'doritos', 'ruffles', 'lays', 'sunChips', 'tostitos', 'munchos', 'takis', 'chesters', 'popcorn']

console.log(fritoLay);
for (let i = 0; i < fritoLay.length; i++) {
    if (fritoLay[i].length > 6)
        console.log('youd get ' + " " + fritoLay[i]);
}
let str = "".concat(fritoLay)
    str = str.replace(" , ")
// for (const fritoLay of fritoLays) {
//  if (fritoLay.length = 0)
//    console.log(fritoLay);
// if (fritoLay.includes('r'));
// console.log('these here include a '
//     r ' $(fritoLay)');

// }

