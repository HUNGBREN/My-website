const api_url = 'https://644123f2792fe886a89f75e3.mockapi.io/';
let end_points = {
    Students: 'Students',
    class: 'class'
}
/* 
*** ES5 fetch ***
fetch('đường dẫn API', {
    method:'tên phương thức viết in hoa',
    headers:  ,
    Content-type:  ,
}).then(function(response) {
    // check response status
    if (response.ok) {
        return response.json();
    }
})
.then(function(data) {
    // các thao tác xử lý dữ liệu
})

*** ES6 ***
async / await

async function fetch_data() {
    await const response = 
}

*/

// fetch(api_url + end_points.Students, {
//     method: 'GET'
// })
// .then(function(response) {
//     return response.json()
// })
// .then(function(data) {
//     console.log(data);
// })


async function fetch_data() {
    const response = await fetch(api_url + end_points.Students, {
        method: 'GET'
    });
    const data = await response.json();
    await handle_data(data);
    return data;
}

// function handle_data (params) {
//     console.log(params);
// }
function handle_data(params) {
	params.map(function(Students) {
		let {id, name, phone_number, email, address} = Students
		let tr = document.createElement('tr');
		tr.innerHTML = `
		<td>${id}</td>
		<td>${name}</td>
		<td>${phone_number}</td>
		<td>${email}</td>
		<td>${address}</td>
		`;
		
		tr.addEventListener('click', function() {
			get_data_detail(Students)
		})
		
		document.querySelector('table tbody').appendChild(tr);
	})
}

fetch_data();

async function get_studdent_by_id(id) {
	try {
		const response = await fetch(api_url + end_points.Students + `/${id}`, {
			method: 'GET'
		});
		const data = await response.json();
		await render_Students_detail(data);
	}
	catch(error) {
		console.log(error);
	}
}

function get_data_detail(params) {
	let {id} = params;
	//console.log(id)
	// console.log(params);
	get_studdent_by_id(id);
}

function render_Students_detail(params) {
	let {name, address, email, phone_number} = params;
	document.querySelector('h2').innerHTML = `name: ${name}, email: ${email}, phone: ${phone_number}, address: ${address}`;
}

/* 
POST
async function fetch_data() {
    const response = await fetch(api_url + end_points.Students, {
        method: 'POST'
        body: JSON.stringify(data gửi lên)
    });
    // các thao tác còn lại
    await handle_after_post();
}

*/
// Phần ví dụ cho đoạn POST - API endpoints
let btn = document.querySelector('button');
btn.addEventListener('click', function() {
	let name = document.querySelector('input[name="name"]').value,
		email = document.querySelector('input[name="email"]').value,
		phone_number = document.querySelector('input[name="phone_number"]').value,
		address = document.querySelector('input[name="address"]').value;
	let new_student = {
		name: name,
		email: email,
		phone_number: phone_number,
		address: address
	}
	add_student(new_student);
});
async function add_student(params) {
	const response = await fetch(api_url + end_points.Students, {
		method: 'POST',
		body: JSON.stringify(params)
	});
}