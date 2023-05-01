const productList = document.querySelector('#product-list');
const cart = document.querySelector('#cart');
const checkoutBtn = document.querySelector('#checkout');
let total = 0;

productList.addEventListener('click', (event) => {
	if (event.target.classList.contains('add-to-cart')) {
		const price = Number(event.target.getAttribute('data-price'));
		total += price;
		cart.querySelector('p').textContent = `Total: $${total}`;
	}
});

checkoutBtn.addEventListener('click', () => {
	alert(`Thank you for your purchase! Total: $${total}`);
	total = 0;
	cart.querySelector('p').textContent = `Total: $${total}`;
});