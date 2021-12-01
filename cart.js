let cart = {}
let out = document.querySelector('.cart')

function loadCart() {
	if(localStorage.getItem('cart')) {
		cart = JSON.parse(localStorage.getItem('cart'))		
		showMiniCart()
	}else{
		out.innerHTML = 'Корзина пуста'
	}	
}

const showMiniCart = () => {
	let outCart = ''
	if(Object.keys(cart).length == 0) {
		out.innerHTML = 'Корзина пуста'
	}else{
		for(let id in cart) {
			
			outCart += `<div class="card">
				<img src="${goods[id].img}">
				<span>${goods[id].name}</span>
				<div>Количество: ${cart[id]}</div>
				<div>Количество: ${cart[id] * goods[id].cost}</div>
				<button data-id="${id}" class="delArt">X</button>
				<div class="block-count">					
					<button class="btn-minus" data-id="${id}">-</button>
					<button class="btn-plus" data-id="${id}">+</button>
				</div>	
			</div>`
		}
		out.innerHTML = outCart
		let dels = document.querySelectorAll('.delArt')
		let plusArr = document.querySelectorAll('.btn-plus')
		let minusArr = document.querySelectorAll('.btn-minus')
		
		for(let del of dels) {
			del.addEventListener('click', delAtr)
		}

		for(let plus of plusArr) {
			plus.addEventListener('click', plusFunc)
		}

		for(let minus of minusArr) {
			minus.addEventListener('click', minusFunc)
		}
	}
}

const delAtr = (e) => {
	let id = e.target.dataset.id
	delete cart[id]
	saveCart()
	showMiniCart()
}

const plusFunc = (e) => {
	let id = e.target.dataset.id
	cart[id]++
	saveCart()
	showMiniCart()	
}

const minusFunc = (e) => {
	let id = e.target.dataset.id
	if(cart[id] == 1) {
		delete cart[id]
	}else{
		cart[id]--
	}	
	saveCart()
	showMiniCart()	
}

function saveCart() {
	localStorage.setItem('cart', JSON.stringify(cart))
}

window.onload = function() {
	loadCart()
}