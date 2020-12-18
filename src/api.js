var celZero = -273.15;
var fahZero = -459.67;

//fahrenheitből kelvinbe
const fahToKel = (input, resolve, reject) => {
    let result = (input-32)/1.8 + celZero;
    result >= 0 ? resolve(result) : reject(`Nem megfelelő input`);
}

//kelvinből fahrenheitbe
const kelToFah = (input, resolve, reject) => {
    input >= 0 ? resolve(((input-celZero)*1.8)+32) : reject('Nem megfelelő input');
}

//celsiusból fahrenheitbe
const celToFah = (input, resolve, reject) => {
    input >= celZero ? resolve((input*1.8)+32) : reject('Nem megfelelő input');
}

//fahrenheitből celsiusba
const fahToCel =  (input, resolve, reject) => {
    input >= fahZero ? resolve((input-32)/1.8) : reject('Nem megfelelő input!');
}

//celsiusból kelvibe
const celToKel = (input, resolve, reject) => {
    let result = input - celZero;
    result < 0 ? resolve(result) : reject("Nem megfelelő input!");
}

//kelvinből celsiusba
const kelToCel = (input, resolve, reject) => {
    input >= 0 ? resolve(input + celZero) : reject('Nem megfelelő input!');
}

module.exports = {
    kelToCel : kelToCel,
    celToKel : celToKel,
    fahToCel : fahToCel,
    celToFah : celToFah,
    kelToFah: kelToFah,
    fahToKel: fahToKel
}