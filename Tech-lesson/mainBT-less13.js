const task = [];

let btn = document.querySelector('button');
btn.addEventListener('click', function() {
	let value = document.querySelector('input').value;
	add_task({value: value});
});

function add_task(params) {
	let {value} = params;
	let new_task = {}
	new_task.name = value;
	task.push(new_task);
	render_task(task);
}

function render_task(params) {
	if (!params || typeof params != 'object') return false;
	let list = document.querySelector('ul');
	list.innerHTML = '';
	params.map(item => {
		let {name} = item;
		let li = document.createElement('li');
		li.innerHTML = `
		<h4>${name}</h4>
		`;
		list.appendChild(li);
	});
}