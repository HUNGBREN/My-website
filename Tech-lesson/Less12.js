// let address = 'Ha Long'

// console.log(address)

/*
Dom là 1 phần tử html (object)
.querySelector()
.querySelectorAll()


1.querySelector()
chủ thể được chọn
hành động chọn
phần tử bên trong chủ thể được chọn bởi hành động



 */
let template = document.querySelector('main');
let button = template.querySelector('button');
console.log(button);

/* 2.querySelectorAll()

*/

let button_list = template.querySelectorAll('button');
//console.log(button_list);

for (let button of button_list){
    console.log(button);
}

/* .addEventListener()
- kiểu sự kiện: click, mouseenter(tương đương hover), 
*/

// button.addEventListener('click', function(){
//     console.log('Hello everybody')
// });

// button.addEventListener('click', function(e){
//     console.log(e.currentTarget)
// });

/* Thêm style class cho DOM
1/ .classList
.classList.add()  -  thêm
.classList.remove() - xóa
.classList.contains() - chứa, bọc, bao gồm
VD: thêm class là show
dom.classList.add('show', ' ');

2/ .className
thay thế toàn bộ css class của DOM

p.className = 'p div';
*/
button.addEventListener('click', function(e){
    let p = template.querySelector('p');

    if (!p.classList.contains('active')){
        p.classList.add('active');
        e.target.textContent = 'Ẩn';
    }
    else {
        e.target.textContent = 'Hiện';
    }
    
});
