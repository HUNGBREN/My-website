// Gán biến cho thẻ button
const btn = document.querySelectorAll('.btn-premium')
    // console.log(btn) --- Kiểm tra xem có hiển thị button hay không?

// Lấy số tiền tổng
const totalMoney = document.querySelector('.total-price span');

// 
const productList = document.querySelector(".product-list");
// Gán cho table  
let table_body = document.querySelector('table tbody')

// Data products

let products = [
    {
        id: 1,
        name: 'Trà sữa trân châu',
        price: 10000,
        image:
            '/Shopping cart/src/images/product-1 (tranchauduongden).jpg',
    },
    {
        id: 2,
        name: 'Trà sữa phô mai',
        price: 20000,
        image:
            '/Shopping cart/src/images/product-2-Tra-sua-pho-mai-tuoi.png',
    },
    {
        id: 3,
        name: 'Trà đào dâu tây',
        price: 30000,
        image:
            '/Shopping cart/src/images/product-3-Tra-Dao-Dau-Tay-Kem-Pho-Mai.png',
    },
    {
        id: 4,
        name: 'Trà xoài bưởi hồng',
        price: 40000,
        image:
            '/Shopping cart/src/images/product-4-Tra-xoai buoi hong.png',
    },
    {
        id: 5,
        name: 'Trà dứa nhiệt đới',
        price: 50000,
        image:
            '/Shopping cart/src/images/product-5 Tra-Dua nhiet doi.jpg',
    },
    {
        id: 6,
        name: 'Trà Ô long',
        price: 60000,
        image:
            '/Shopping cart/src/images/product-6-O-Long-Thai-Cuc.jpg',
    },
    {
        id: 7,
        name: 'Trà sữa dâu tây',
        price: 75000,
        image:
            '/Shopping cart/src/images/product-7-Tra-Sua-Dau-Tay.jpg',
    },
    {
        id: 8,
        name: 'Trà dâu tằm',
        price: 75000,
        image:
            '/Shopping cart/src/images/product-8-Tra-Dau-Tam.jpg',
    },
];


// hiện dấu . để ngăn cách hàng nghìn
function format_price(price){
    return price.toLocaleString('de-DE');
}


{/* <img src="${image}" alt="${name}"> */}


/** Render Product */

function renderProduct(params) {
    if (!params) return false;

    params.forEach((value) => {
        let { name, price, image, id } = value;
        let li = document.createElement("li");
        li.classList.add("list-item");

        li.innerHTML = '';
        li.innerHTML = `
        <div class="product-item">
            
            <div class="image" style="background-image: url('${image}')"></div>
            <div class="product_info">
                <h4>${name}</h4>
                <p><span>${format_price(price)}</span> đ</p>
            </div>
            <button class="btn btn-premium" data-product-id="${id}">ĐẶT HÀNG</button>
        </div>
        `;

        li.querySelector(".btn-premium").addEventListener('click', () => {
            const productPrice = price;
            const productName = name;
            const productImg = image;
            addCart(productPrice, productName, productImg)

        });
        productList.appendChild(li);
    });
}
renderProduct(products);




// Gọi các button và index của nó ra
// hàm forEach trả về các dữ liệu và index của phần tử đó
// btn.forEach(function(btn, index){
//     // console.log(btn, index) 
//     // Thêm sự kiện cho thẻ button
//     btn.addEventListener('click',function(e){
//         let btnItem = e.target
//         let product = btnItem.parentElement
//         // let productImg = product.querySelector('img').src
//         let productImg = product.querySelector('div').style
//         let productName = product.querySelector('h4').innerText
//         let productPrice = product.querySelector('span').innerText
//         console.log(productImg)
//         addCart(productPrice, productName, productImg)
//     })
// })

// Tạo 1 hàm có 3 tham số đã lấy được ở phần trên:
function addCart(productPrice, productName, productImg) {
    // console.log(productName)
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
    <td><span class="price">${productPrice.toLocaleString('de-DE')}</span> đ</td>
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
    let totalPrice = 0;
    for (let i=0; i < cartItem.length; i++){
        let inputValue = cartItem[i].querySelector('input').value
        let price = cartItem[i].querySelector('.price').innerHTML
        let total = (price * inputValue *1000)  //.toLocaleString('de-DE')
        totalPrice += total
    }
    // hiện dấu . để ngăn cách hàng nghìn
    totalMoney.innerHTML = totalPrice.toLocaleString('de-DE'); 
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
            // confirm('Are you sure?')
            // let choice = confirm('Sure???')
            // if (choice == true) {
            //     removeProduct.remove()
            // }
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


