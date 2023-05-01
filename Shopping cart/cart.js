// Gán biến cho thẻ button
const btn = document.querySelectorAll('.btn-premium')
    // console.log(btn) --- Kiểm tra xem có hiển thị button hay không?

// Lấy số tiền tổng

const totalMoney = document.querySelector('.total-price span');

// Gán cho table  
let table_body = document.querySelector('table tbody')


// Gọi các button và index của nó ra
// hàm forEach trả về các dữ liệu và index của phần tử đó
btn.forEach(function(btn, index){
    // console.log(btn, index) 
    // Thêm sự kiện cho thẻ button
    btn.addEventListener('click',function(e){
        let btnItem = e.target
        let product = btnItem.parentElement
        let productImg = product.querySelector('img').src
        let productName = product.querySelector('h4').innerText
        let productPrice = product.querySelector('span').innerText
        // console.log(productPrice, productName, productImg)
        addCart(productPrice, productName, productImg)
    })
})

// Tạo 1 hàm có 3 tham số đã lấy được ở phần trên:
function addCart(productPrice, productName, productImg) {
    console.log(productName)
    // Khai báo biến tr bằng cách tạo 1 thẻ tr mới (create)
    let tr = document.createElement('tr')
    // Hiện alert khi đã có sản phẩm trong giỏ hàng
    let cartItem = document.querySelectorAll('tbody tr')
    for (let i=0; i < cartItem.length; i++){
        let existProduct = document.querySelectorAll('.name-product')
        // Nếu tên biến exist = tên của sản phẩm, thì in ra thông báo
        if (existProduct[i].innerHTML == productName) {
            alert('Sản phẩm này đã có trong giỏ hàng')
            return
        }
    }
    
    // Thêm nội dung vào thẻ tr, sau khi click vào từng sản phẩm
    tr.innerHTML = `
    <td class="img-price"><img src="${productImg}" alt=""><span class="name-product">${productName}</span></td>
    <td><span class="price">${productPrice}</span> đ</td>
    <td>${'<input type="number" name="price" value="1" min="1">'}</td>
    <td>${'<button class="btn btn-del">X</button>'}</td>
    `;
    // Khai báo biến để lấy ra thẻ tbody (là thẻ chứa thẻ tr)
    let cartTable = document.querySelector('tbody')
        // cartTable.innerHTML='';
    // console.log(cartTable)

    // Thêm thẻ tr mới (create) vào thẻ tbody: 
    cartTable.append(tr)
    cartTotal() // gọi hàm để hoạt động cùng addCart
}


//-----------Tính tổng-----------

// Định nghĩa hàm cartTotal
function cartTotal() {
    let cartItem = document.querySelectorAll('tbody tr')
    // console.log(cartItem.length)
    // console.log(cartItem)
    // Khai báo 1 biến tính Thành tiền
    let mulTotal = 0;
    for (let i=0; i < cartItem.length; i++){
        let inputValue = cartItem[i].querySelector('input').value
        let price = cartItem[i].querySelector('.price').innerHTML
        let multiply = (price * inputValue)  //.toLocaleString('de-DE')
        mulTotal += multiply
    }
    // hiện dấu . để ngăn cách hàng nghìn
    totalMoney.innerHTML = mulTotal.toLocaleString('de-DE'); 
    inputChange();  // gọi hàm inputChange trong hàm tính tổng
    removeProduct(); // gọi hàm removeProduct trong hàm tính tổng
}

//-----------Delete sản phẩm-----------

function removeProduct() {
    let cartItem = document.querySelectorAll('tbody tr')
    // console.log(cartItem)
    for (let i=0; i < cartItem.length; i++){
        let btnDel = document.querySelectorAll('.btn-del')
        // console.log(btnDel)
        btnDel[i].addEventListener('click', function(e){
            let delItem = e.target;
            let removeProduct = delItem.parentElement.parentElement;
            removeProduct.remove()
            cartTotal() // Gọi hàm tính tổng 1 lần nữa (sau khi xóa)
        }) 
    } 
} 

function inputChange() {
    let cartItem = document.querySelectorAll('tbody tr')
    // console.log(cartItem)
    for (var i=0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector('input')
        inputValue.addEventListener('change', function(){
            cartTotal()
        })
    }
}


