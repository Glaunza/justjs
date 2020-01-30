let num = 99;
let str = 'something';

let test = num;
switch (test) {
   case 10:
      console.log("found 10");
      break;
   case 100:
      console.log("found 100");
      break;
   case 'something':
      console.log("found something");
      break;
   case '99':
      console.log("found 99");
      break;
   default:
      console.log("not yet found");
      break;
}

// let max = 10;
// max--;
// console.log(max);
// for (let x = 0; x <= max; x += 2) {
//    console.log('still in the loop ' + x);
// }

// let max = 10;
// max -= 3;
// console.log(max);
// for (let x = 0; x <= max; x += 2) {
//    console.log('still in the loop ' + x);
// }

let max = 10;
max += max;
console.log(max);
for (let x = 0; x <= max; x += 2) {
   console.log('still in the loop ' + x);
}

// let chid1, chid2, chid3;
// let tallestestkid(child) = "child 1"


// function tallestChild(child1, child2, child3);
// console

// let (num1, num2, num3)


function loop(jump) {

   let date = new Date();
   let hour = date.getHours();
   let sec = date.getSeconds();
   let count = 0;
   for (let i = hour; i < sec; i+=jump){
      console.log(i);
      count++;
   }
   return count;
}
let varr = loop(1);
console.log(varr);