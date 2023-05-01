let btn = document.querySelector('button');
btn.addEventListener('click',function(){
    // alert('Hello everybody')
    let confirm_value = confirm('Thông báo')
    if (confirm_value == true) {
        let new_content = 'Nội dung mới'
        document.querySelector('p').innerHTML = new_content;
        localStorage.setItem('new_value', new_content);
    }
});

// cloning object in JS
// ** Shalow copy **

// let a = [...b] //parameler
// hoặc concat()
// - Dùng với 1 array hoặc object ko có cấu trúc quá phức tạp

// Deep copy: ko cần dùng não =))) 
// JSON.stringify(obj)
// JSON.parse(JSON.stringify(obj))

// let a = [1, 2, 3, 4, 5];
// let b = [];

// b = [...a];
// let c = {
//     name: 'name 1',
//     title: 'title 2',
//     description: {
//         paragraph: 'content 1'
//     }
// }
// let d = {...c};
// console.log(d) 
// console.log(c) 

/* 
Lưu vào local Storage, sẽ luôn luôn lưu theo dạng string
localStorage.setItem (tên của cái localStorage đấy, value) 


*/
