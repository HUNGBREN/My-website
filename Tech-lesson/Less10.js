let array = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
];

console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);

// for (biến khởi tạo; điều kiện lặp; bước nhảy){
//   code thực thi vòng lặp}
// tên array.length
for (let i = 0; i < array.length; i++){
    console.log(array[i]); 
};

/* tính tổng dãy số: 1 + 2 +...+ 99 + 100
- tạo 1 biến để lưu kết quả
- tạo 1 vòng lặp với điều kiện là biến khởi tạo tăng dần cho đến khi nhỏ hơn
chiều dài của dãy số */

let total = 0;
for (let i = 0; i <=100; i++) {
    total += i 
}
console.log(total);

/* 1 số thao tác với mảng
.push() thêm 1 phần tử vào cuối mảng
.pop() xóa 1 phần tử vào cuối mảng

.shift() xóa 1 phần tử ở đầu mảng
.unshift() thêm 1 phần tử ở đầu mảng
*/


/* Đẩy vào mảng này 100 phần tử bằng cách dùng vòng lặp
*/
let number_array = [];
for (let i = 1; i <=100; i++) {
    number_array.push(i);
}
console.log(number_array);

/* - Có 1 biến khởi tạo
    - điều kiện
while (điều kiện lặp) {code thực thi}*/
let x = 0;
while (x < array.length) {
    console.log(array[x]);
    x++;
}

/* 
ESG
for...of dùng để duyệt mảng bằng cách lấy ra các phần tử trong mảng
for...in dùng để trích object và dữ liệu trả về là mảng chứa các key của Object đó
typeof: để kiểm tra kiểu dữ liệu
*/
for (let item of array){
    console.log(item);
}
let menu = [
    {name: 'lẩu',
    topping: ['bò', 'nấm','rau']}
]
for (let item of menu){
    if (typeof item.topping =='object')
    for (let topping of item.topping)
    console.log(topping);
    else {
        console.log(item.topping)
    }
}  

/* Câu điều kiện 
if  
if...else
if...else if

switch..case

if  (điều kiện xảy ra) {
    code thực thi
}
Ví dụ về cách dùng if (khuyến khích nên làm cách này):
if (typeof item.topping == 'string') console.log();
if (typeof item.topping == 'number') console.log();

*/

/* */
let girl_friends = {
    name: 'bạn gái số 1',
    age: 22,
    cooking() {
        console.log('bạn ấy nấu ăn ngon')
    }
}
girl_friends.cooking ()

//ghi đè giá trị trong object
girl_friends.name = 'mẹ trẻ';
console.log(girl_friends);
// gán thêm thuộc tính
girl_friends.birthday = '12/12/2000';
console.log(girl_friends);
// gán thêm phương thức
/*girl_friends.cleaning = function() {}*/
delete girl_friends.birthday;
console.log(girl_friends);