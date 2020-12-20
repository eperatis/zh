var celZero = -273.15;
var fahZero = -459.67;

//from fahrenheit to kelvin
const fahToKel = (input, resolve, reject) => {
    let result = (input-32)/1.8 + celZero;
    result >= 0 ? resolve(result) : reject('Invalid input');
}

//from kelvin to fahrenheit
const kelToFah = (input, resolve, reject) => {
    input >= 0 ? resolve(((input-celZero)*1.8)+32) : reject('Invalid input');
}

//from celsius to fahrenheit
const celToFah = (input, resolve, reject) => {
    input >= celZero ? resolve((input*1.8)+32) : reject('Invalid input');
}

//from fahrenheit to celsius
const fahToCel =  (input, resolve, reject) => {
    input >= fahZero ? resolve((input-32)/1.8) : reject('Invalid input');
}

//from celsius to kelvin
const celToKel = (input, resolve, reject) => {
    let result = input - celZero;
    result < 0 ? resolve(result) : reject('Invalid input');
}

//from kelvin to celsius
const kelToCel = (input, resolve, reject) => {
    input >= 0 ? resolve(input + celZero) : reject('Invalid input');
}

module.exports = {
    kelToCel : kelToCel,
    celToKel : celToKel,
    fahToCel : fahToCel,
    celToFah : celToFah,
    kelToFah: kelToFah,
    fahToKel: fahToKel
}
