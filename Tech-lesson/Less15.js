// function getRandNumbers(min, max, length) {
//     var number = [length];
//     for (var i = 0; i < length; i++){
//         var random =  Math.random() * (max - min) + min
//         number[i] = random
//     }
//     return number;
// }
// getRandNumbers(1, 5, 10);

function getTotal(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}
console.log(getTotal([1, 3]))
