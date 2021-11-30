let cart = {}
let out = document.querySelector('.cart')

function getCart() {
	if(localStorage.getItem('cart')) {
		cart = JSON.parse(localStorage.getItem('cart'))
		// showMiniCart()
	}else{
		out.innerHTML = 'Корзина пуста'
	}	
}

window.onload = function() {
	console.log('testэ')
	getCart()
}