// let firstName = 'Hung';
// let lastName = 14;
// console.log(`Toi la: ${firstName} ${lastName}`)
// console.log(typeof lastName)

// let myString = 'Tu hoc JS tren F8';
// console.log(myString.toUpperCase());  

// function isNumber(value){
//     return typeof value === 'number'
//         && !isNaN(value)
// }
// console.log(isNumber(NaN))

function getRandNumbers(min, max, length) {
    var number = [length];
    for (var i = 0; i < length; i++){
        var random =  Math.random() * (max - min) + min
        number[i] = random
    }
    return number;
}
getRandNumbers(1, 10, 4);

