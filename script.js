let cart = {}
let miniCart = document.querySelector('.mini-cart')

window.onload = function() {
	getCart()
}

out()

function out() {
	let out = document.querySelector('.out')
	let articles = ''
	for(let key in goods) {
		articles += `
			<div class="article">
				<p class="name">${goods[key].name}</p>
				<img src=${goods[key].img}>
				<div class="cost">${goods[key].cost}</div>
				<button data-id=${key} class="add-to-cart">Купить</button>
			</div>
		`
	}
	out.innerHTML = articles
}

let addCart = document.querySelectorAll('.add-to-cart')

for(let el of addCart) {
	el.onclick = function(e) {
		// console.log(e.target.dataset.id)
		let id = e.target.dataset.id
		if(cart[id] == undefined) {
			cart[id] = 1
		}else{
			cart[id]++
		}
		showMiniCart()
		saveCart()
	}
}

function saveCart() {
	localStorage.setItem('cart', JSON.stringify(cart))
}

function getCart() {
	if(localStorage.getItem('cart')) {
		cart = JSON.parse(localStorage.getItem('cart'))
	}
	showMiniCart()
}

function showMiniCart() {
	let out = ''
	for(let key in cart) {
		out += `${goods[key].name} --- ${cart[key]} <br>`
	}
	// out += `<hr>`
	miniCart.innerHTML = out
}