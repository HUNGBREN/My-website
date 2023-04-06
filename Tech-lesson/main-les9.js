console.log('alo 1235');
/* Biến trong JS
3 cách khác nhau để tạo ra 1 biến
- var 
- let
- const */

let menu = 'Danh sách đồ ăn'; //string
let a = 3.14; //number
let b = '34'; //string

console.log(menu);
console.log(a);
console.log(b);

let abc = true //boolean (true/false)

let web_34 = {
    students: 16,
	trainer: 'Thanh',
	location: 'Dich Vong Hau st',
	
	equipment: {
		useable: 100,
		damaged: 0,
		tables: 8,
		chair: 16
	}
}

console.log(web_34)

let first_array = [
    1,
    '1',
    {name: 'Hung'},
    [1,4]
];
console.log(first_array);

console.log(web_34.location);

console.log(web_34.equipment.chair);
console.log(web_34['equipment'].chair);

let x = 5,
    y = 2;
    sum = x+y,
    print = 'Tong cua ' + x + ' và ' + y + ' là ' + sum;

console.log(x*y);
console.log(sum);
console.log(print);
console.log(first_array[2]);

console.log(1 % 2);

console.log(x > y);

// Toán tử logic thường đi kèm với câu điều kiện

let c = 2;
    c = 3;
    console.log(c);
let d = 5;
    c = d + 10;
    console.log(c);

/*function: Hàm
dấu () nhận tham số truyền vào function, sử dụng được bên trong dấu ngoặc nhọn
dấu () thực thi bất cứ thứ gì mà function đó muốn

gọi call tên hàm ()
*/ 
function sum_ (a,b) {
    console.log(a + b);
}
sum_(100,2);
sum_(1,100);

// let number_object = {
//     first: 1,
//     second: 2,
//     third: 3
// }
// function sum_(params) {
//     console.log(params.first + params.second);
// }
// sum_(number_object);

let library = [ 
    {
        name: 'Tam Quốc Diễn Nghĩa',
        author: 'La Quán Trung',
        date: 'năm ' + 2014,
        pages: 1856 + ' trang ',
        category: 'history'
    }
]
console.log(library);