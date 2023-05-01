/*
.innerHTML // thay đổi nội dung html của phần tử được chọn
.textContent // thay đổi / lấy nội dung là chữ của thẻ html


input, textarea lấy được giá trị hoặc gán giá trị
.value

template string backticks
${} sẽ chạy code js trong template string

let a = 0;

document.querySelector('button').addEventListener('click', function(e) {
	// lấy cái value bên trong ô input
	let input = document.querySelector('input');
	// console.log(input.value);
	// gán value đó thành nội dung thẻ <p>
	document.querySelector('p').innerHTML = `
	<span>default value</span>
	<button>${a}</button>
	<button>+</button>
	`;
	
	document.querySelector('p').innerHTML = '<span>' + a + '</span>';
})
*/
// Bước 1: lấy value từ input sau khi click -> 
/*
Bước 2: đẩy value mới vào 1 danh sách
+ chuẩn bị 1 cái <ul> ở file html và 1 array rỗng để lưu value mới
+ đẩy value mới vào array rỗng 
+ lấy ra các value mới và thay thế <ul> bằng <ul> mới
	- lấy ra hết bằng for, for of, map 
	- tạo thẻ <li>
	- .appendChild(li) 

Cập nhật trạng thái của task
Bước 1:
+ làm cái chữ bị gạch ngang 
+ cập nhật trạng thái của item đó bên trong list
Bước 2: render lại list
+ done rồi -> k cho click nữa
+ done rồi -> tên mặc định phải bị gạch 

*/
// Bước 3: load lại toàn bộ danh sách sau khi thêm value mới
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

// *****
if(localStorage.setItem('new_value')) {
	document.querySelector('li').innerHTML = localStorage.setItem('new_value');
};


function render_list(params) {
	if (!params) return false;
	document.querySelector('ul').innerHTML = '';
	
	for (let item of params) {
		let {task_name, status} = item;
		
		let done_class = '';
		if (status && status == 'done') {
			done_class = 'class="done"';
		}
		
		let li = document.createElement('li');
		li.innerHTML = `
		<span ${done_class}>${task_name}</span>
		<button class="complete">Done</button><br>
		<button class="delete">Delete</button><br>  
		`;

		// update status
		li.querySelector('button.complete').addEventListener('click', function() {
			if (status && status == 'done') return false;
			item.status = 'done';
			li.querySelector('span').classList.add('done');
		});


		// delete task
		li.querySelector('button.delete').addEventListener('click', function() {
			let new_array = [];
			let confirm_value = confirm('Xóa nhé');
			if (confirm_value == true) {
				for (let current_item of params) {
					if (current_item.task_name != task_name) {
						new_array.push(current_item);
					}
				}

				// .find()
				// .filter()
				// .reduce()
				// gán lại array cũ = giá trị array mới
				list = [...new_array];
				// gán lại li ở màn hình
				li.remove();
				// reset cái array dùng để so sánh thành mảng rỗng
				new_array.length = 0;

				// .localStorage
				localStorage.setItem('new_value', li);
			}
		});
		
		document.querySelector('ul').appendChild(li);
		

	}
}

