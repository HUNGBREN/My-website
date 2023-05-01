// Lấy danh sách sản phẩm
const productList = document.getElementById('product-list');

// Lấy giỏ hàng
const cart = document.getElementById('cart');

// Lấy số tiền tổng
const total = document.getElementById('total');

// Khởi tạo giỏ hàng rỗng
let cartItems = [];

// Thêm sự kiện click vào danh sách sản phẩm
productList.addEventListener('click', (event) => {
  // Kiểm tra xem phần tử được nhấp có thuộc tính data-price không
    const price = event.target.getAttribute('data-price');
    if (price) {
        // Thêm sản phẩm vào giỏ hàng
        const item = { price: price };
        cartItems.push(item);
        renderCart();
    }
    });

    // Thêm sự kiện click vào giỏ hàng
    cart.addEventListener('click', (event) => {
    // Kiểm tra xem phần tử được nhấp có class là "remove" không
    if (event.target.classList.contains('remove')) {
        // Xóa sản phẩm khỏi giỏ hàng
        const index = event.target.getAttribute('data-index');
        cartItems.splice(index, 1);
        renderCart();
    }
    });

    // Hàm tính tổng số tiền và hiển thị giỏ hàng
    function renderCart() {
    let cart_list = '';
    let totalPrice = 0;
    
    // Hiển thị từng sản phẩm trong giỏ hàng
    cartItems.forEach((item, index) => {
        cart_list += `<li>${index + 1}: $${item.price} <button class="remove" data-index="${index}">Xóa</button></li>`;
        totalPrice += parseInt(item.price);
    });
    
    // Hiển thị tổng số tiền
    total.innerHTML = totalPrice;
    
    // Hiển thị giỏ hàng
    cart.innerHTML = cart_list; 
    // Thêm size (M,L,XL có chèn đơn giá), topping, đường đá
    // sử dụng thẻ select, có các option 
}
