let students = [
	{
		name: 'Phạm Doanh Ngân',
		phone_number: '0987591281',
		email: 'phamdoanhngan0410@gmail.com'
	},
	{
		name: 'Nguyễn Đỗ Đăng Khoa',
		phone_number: '0332692984',
		email: 'khoaproyoyo@gmail.com'
	},
	{
		name: 'Đào Tăng Tuấn',
		phone_number: '0342726755',
		email: 'daotangtuan123456789@gmail.com'
	},
	{
		name: '	Đào Tăng Phương',
		phone_number: '0352637282',
		email: 'phuongtangdao@gmail.com'
	},
	{
		name: 'Nguyễn Việt Hoàng',
		phone_number: '0886939396',
		email: 'viethoang9896@gmail.com'
	},
	{
		name: 'Đỗ văn đà',
		phone_number: '0979500629',
		email: 'dovanda976@gmail.com'
	},
	{
		name: 'Nguyễn Đức Duy',
		phone_number: '0974804426',
		email: 'ducduy26092002@gmail.com'
	}
];

let typing_timer = null;

function toast(message) {
	let div = document.createElement('div');
	div.classList.add('toast');
	div.innerHTML = message;
	document.body.appendChild(div);
	
	setTimeout(() => {
		document.querySelector('.toast').remove();
	}, 1500);
}

let table_body = document.querySelector('.table tbody'),
		input = document.querySelector('.search-box input'),
		modal_trigger = document.querySelector('.tool-bar .btn'),
		modal = document.querySelector('.modal'),
		overlay = document.createElement('div');

overlay.classList.add('overlay');

function hide_modal(dom) {
	if (dom) {
		document.querySelector(`${dom}`).addEventListener('click', () => {
			modal.classList.remove('show');
			overlay.remove();
		});
	}
}

modal_trigger.addEventListener('click', () => {
	modal.classList.add('show');
	document.querySelector('main .modal').appendChild(overlay);
	hide_modal('.overlay');
});

hide_modal('.modal-header i');

function done_typing() {
	let keyword = input.value;
	search_array(students, keyword);
}

input.addEventListener('keyup', (e) => {
	if (!e.target.value) render_list(students);
	clearTimeout(typing_timer);
	typing_timer = setTimeout(done_typing, 500);
});

modal.querySelector('.btn').addEventListener('click', () => {
	let name = modal.querySelector('input[name="name"]').value,
			phone_number = modal.querySelector('input[name="phone_number"]').value,
			email = modal.querySelector('input[name="email"]').value;
	
	if (!name) {
		toast('<i style="color: #dc3545;" class="fa-regular fa-circle-xmark"></i> Tên không được để trống');
		return false;
	}
	if (!phone_number) {
		alert('SĐT không được để trống');
		toast('<i style="color: #dc3545;" class="fa-regular fa-circle-xmark"></i> SĐT không được để trống');
		return false;
	}
	if (!email) {
		toast('<i style="color: #dc3545;" class="fa-regular fa-circle-xmark"></i> Email không được để trống');
		return false;
	}
	
	students.push({
		name: name,
		phone_number: phone_number,
		email: email
	});
	
	render_list(students);
	modal.classList.remove('show');
	overlay.remove();
	toast('<i style="color: #28a745" class="fa-regular fa-circle-check"></i> Thêm học viên thành công')
});

function search_array(arr, keyword) {
	let new_arr = arr.filter(item => {
		return item.name.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) != -1;
	});
	
	render_list(new_arr);
}

function render_list(params) {
	if (!params) return false;
	table_body.innerHTML = '';
	params.map((item, index) => {
		let {name, phone_number, email} = item;
		let tr = document.createElement('tr');
		tr.innerHTML = `
		<td class="text-center">${index + 1}</td>
		<td>${name}</td>
		<td>${phone_number}</td>
		<td>${email}</td>
		<td></td>
		`;
		
		table_body.appendChild(tr);
	});
}

render_list(students);