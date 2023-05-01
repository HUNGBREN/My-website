/* 
.innerHTML   // thay đổi nội dung html của phần tử được chọn
.textContent  // thay đổi hoặc lấy nội dung là chữ của thẻ html

input, textarea lấy được giá trị hoặc gán giá trị


*/
// document.querySelector('button').addEventListener('click', function(e) {
//     // e.target
//     // e.currentTarget
//     // console.log(e.currentTarget.textContent)
//     // e.target.innerHTML = '<span>-</span> <span></span>'

//     // lấy value bên trong ô input
//     let input = document.querySelector('input');
//     // console.log(input.value);
//     // gán value đó thành nội dung thẻ <p>
//     document.querySelector('p').textContent = input.value;
// })


// Bài tập
// Bước 1: Lấy value từ input sau khi click
// Bước 2: Đẩy value mới vào 1 danh sách
// + Chuẩn bị 1 cái <ul> ở file html và 1 array rỗng để lưu value mới
// + Đẩy value mới vào array rỗng
// + Lấy ra các value mới và thay thế <ul> bằng <ul> mới
// Bước 3: Load lại toàn bộ danh sách sau khi thêm value mới

let list = [];
let btn = document.querySelector('.form button');
btn.addEventListener('click', function() {
    let input_value = document.querySelector('.form input').value;
    let item = {}
    item.task_name = input_value;
    add_task(item);
})

function add_task(params) {
    if (!params) return false;
    list.push(params);
    
    render_list(list);
}
function render_list(params) {
    if (!params) return false;
    document.querySelector('ul').innerHTML = '';

    for (let item of params) {
        let {task_name} = item;
        let li = document.createElement('li');
        li.innerHTML = task_name;

        document.querySelector('ul').appendChild(li);
    }
}