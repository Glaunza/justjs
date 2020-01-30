function getSeconds() {
    let date = new Date
    let seconds = date.getSeconds();
    return seconds;
}
let curSeconds;
curSeconds = getSeconds();
console.log("Current Seconds = " + curSeconds);

function getHours() {
    let date = new Date
    let hours = date.getHours();
    return hours;
}
let curHours;
curHours = getHours();
console.log("Current Hour = " + curHours);

function getMinutes() {
    let date = new Date
    let minutes = date.getMinutes();
    return minutes;
}
let curMinutes;
curMinutes = getMinutes();
console.log("Current Minutes = " + curMinutes);

function convert(string) {
    let curSeconds = getSeconds();
    if (curSeconds > 0 || curSeconds < 30);
    let convert

}


function aToAlpha(letterTrans) {


    let answ; //alpha / bravo that type thing

    switch (letterTrans) {

        case 'A':
            answ = 'Alpha';

            break;

        case 'B':
            answ = 'Bravo';
            break;


        case 'C':
            answ = 'Charlie';
            break;

        case 'D':
            answ = 'Delta';
            break;

        case 'E':
            answ = 'Echo';
            break;

        case 'F':
            answ = 'Foxtrot';
        case 'G':
            answ = 'Golf';
            break;

        case 'H':
            answ = 'Hotel';
            break;

        case 'I':
            answ = 'India';
            break;

        case 'J':
            answ = 'Juliet';
            break;
        case 'K':
            answ = 'Kilo';
            break;
        case 'L':
            answ = 'Lima';
            break;
        case 'M':
            answ = 'Mike';
            break;

    }
  //  console.log("whats this gonna do " + letterTrans);
    return answ;
}