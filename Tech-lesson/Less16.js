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

let table_body = document.querySelector('.table tbdoy'),
    input = document.querySelector('input');

    input.addEventListener('keyup', function(e) {
        let keyword = e.target.value;
        let new_array = [];

        setTimeout(function() {
            new_array = students.filter(function(item) {
                return item.name.toLowerCase().indexOf(keyword.toLowerCase()) != -1;
            });
            render_list(new_array);
        }, 500);
    })


function render_list(params) {
    if(!params) return false;
    table_body.innerHTML = '';
    params.map(function(item, index) {
        let {name, phone_number, email} = item;
        let tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${name}</td>
        <td>${phone_number}</td>
        <td>${email}</td>
        `;

        table_body.appendChild(tr);
    });
}
render_list(students);