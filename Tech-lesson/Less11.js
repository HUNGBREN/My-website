// Bài tập số 2

function is_palindrome(num) {
    // chuyển số thành chuỗi
    let num_str = num.toString();
    
    // đảo ngược chuỗi
    let reversed_str = num_str.split('').reverse().join('');
    
    // so sánh hai chuỗi
    if (num_str === reversed_str) {
    return true;
    } else {
    return false;
    }
}
console.log(is_palindrome(1221));

// // Bài tập số 1

// /* Viết function giải phương trình bậc 2
//     ax^2 + bx + c */

// // function quadratic_equation(params = {}) {

// // }

// let object = {a: 4, b: -2, c: -6}
// function quadratic_equation(params) {
//     let {a, b , c} = params;
//     // Kiểm tra xem nó có là số không đã
//     if (typeof a!= 'number' || typeof a!= 'number' || typeof a!= 'number' ) {
//         console.log('Tham số không hợp lệ');
//         return;
//     }

// }
