let task = [];
let default_dom = `
<li class="default justify-content-center"><b>You don't have any task :"></b></li>
`;

if (localStorage.getItem('todo_list')) {
	task = JSON.parse(localStorage.getItem('todo_list'));
	render_task(task);
}

function set_local_storage_task(params) {
	localStorage.setItem('todo_list', JSON.stringify(params));
}

let btn = document.querySelector('button');
btn.addEventListener('click', function() {
	let value = document.querySelector('input').value;
	if (!value) {
		alert('Value is requried');
		return false;
	}
	add_task({value: value});
});

function add_task(params) {
	let {value} = params;
	let new_task = {}
	new_task.name = value;
	task.push(new_task);
	set_local_storage_task(task);
	render_task(task);
}

function render_task(params) {
	if (!params || typeof params != 'object') return false;
	
	let list = document.querySelector('ul');
	if (params.length <= 0) {
		list.innerHTML = default_dom;
		return false;
	}
	
	list.innerHTML = '';
	params.map(item => {
		let {name, status} = item;
		let done_class = '';
		if (status && status == 'done') {
			done_class = 'class="done"';
		}
		
		let li = document.createElement('li');
		li.innerHTML = `
		<h4 ${done_class}>${name}</h4>
		<button class="btn success"><i class="fa fa-check" aria-hidden="true"></i></button>
		<button class="btn danger"><i class="fa fa-trash" aria-hidden="true"></i></button>
		`;
		// update
		li.querySelector('.success').addEventListener('click', function(e) {
			update_task(li, status, item, params);
		});
		// delete
		li.querySelector('.danger').addEventListener('click', function(e) {
			let confirm_action = confirm('Delete this task?');
			if (confirm_action == true) {
				delete_task(li, name, params);
			}
		});
		
		list.appendChild(li);
	});
}

function update_task(li, status, item, params) {
	if (status && status == 'done') return false;
	item.status = 'done';
	task = [...params];
	li.querySelector('h4').classList.add('done');
	set_local_storage_task(task);
}

function delete_task(li, name, params) {
	let update_list = [];
	for (let current_item of params) {
		if (current_item.name != name) update_list.push(current_item);
	}
	task = [...update_list];
	li.remove();
	update_list.length = 0;
	if (task.length) {
		render_task(task);
		set_local_storage_task(task);
	}
	else {
		localStorage.removeItem('todo_list');
		document.querySelector('ul').innerHTML = default_dom;
	}
}