const Base_URL = "http://localhost:3000/product/productApi";
const Base_URL2 = "http://localhost:3000/product_detail/ApiProduct_deatil";
const Base_URL_cate = "http://localhost:3000/category";

let all_sp = document.querySelector('.all_sp');
let add_sp = document.querySelectorAll('.buy_sp');
let row_sp = document.querySelector('.row_sp');
let show_sp = document.querySelector('#show_sp');
let hidden_sp = document.querySelector('#hidden_sp');
let item2 = document.querySelector('.item2');
let sp = document.querySelectorAll('.sp');
const loading = document.querySelector('.loading');

let arrayCart = [];
let listProducts = [];
let r = /\d+/;
let host =  window.location.toString().slice(30);
const endPoint = host.match(r)
let id_cate = endPoint[0];
console.log(id_cate);

const fetchApi = async(id_cate) => {
	await axios.get(`${Base_URL}`)
	.then(response => {return listProducts = response.data})
	listProducts.map((item)=> {
	if(item.id_category == id_cate) {
		let div = document.createElement("div");
		div.setAttribute("class", "box_sp");
		div.style.width = "320px;"
		div.innerHTML = `<img src=/images/${item?.urlImages}>
						<label class="buy_sp" onclick="add_to_cart(${item?.id})"><i class="fas fa-plus check_buy"></i>&#12644;add to cart</label>
						<h3 class="name_sp_inbox"><a href="/product_detail/${item?.id}" style="color: #eee;">${item?.name}</a></h3>
						<p class="decription">${item?.descriptionS}</p>`;
		all_sp.appendChild(div);
	}
	})
	loading.classList.remove('show');
}
fetchApi(id_cate);


const add_to_cart = async(id) => {
	
	await axios.get(`${Base_URL2}/${id}`)
	.then(response => {return product = response.data})
	show_giohang();

	arrayCart.push(product.id);
	localStorage.setItem("arrayId_Product_inCart", arrayCart);

}



for(let i = 0 ; i < sp.length ; i++) {
	sp[i].addEventListener('click',remove_sp);
}

function remove_sp() {
	const id = this.getAttribute("data_id");
	const newArr = [];
	localStorage.setItem("arrayId_Product_inCart",newArr);

	arrayCart.filter((item) => {
		if(item != id) {
		 	newArr.push(item);
		}
	})
	arrayCart = newArr;
	localStorage.setItem("arrayId_Product_inCart", newArr);
	this.style.display = "none";
}



const getLocalstorge = async() => {
	
	let str_sp_onlocal = localStorage.getItem("arrayId_Product_inCart");
	let arr_sp_onlocal  = str_sp_onlocal.split();
	for(let i = 0; i < arr_sp_onlocal.length; i++) {
		fetch(`${Base_URL}/${arr_sp_onlocal[i]}`)
		.then(rp => rp.json())
		.then(data => { return product = data})

		let sp = document.createElement("div");
		sp.addEventListener("click", remove_sp);
		sp.setAttribute("class","sp");
		sp.setAttribute("data_id", product?.id);
		sp.innerHTML = `<img src=/images/${product?.urlImages}>
		<h3 class="name_sp_inbox"><a href="/product_detail/${product?.id}" style="color: #eee;">${product?.name}</a></h3>
		`;
		row_sp.appendChild(sp);
	}	
	
}
	
const show_giohang = () => {	

	hidden_sp.style.display ="none";
	show_sp.style.left = "0";
	item2.style.display = "none";

	getLocalstorge();
}

const hidden_giohang = () => {
	hidden_sp.style.display ="flex";
	show_sp.style.left = "-100%";
	item2.style.display = "block";
}

window.addEventListener('scroll', () => {
	const { scrollHeight, clientHeight } = document.documentElement;
	var scrollTop = window.scrollY;

	if(clientHeight + scrollTop >= scrollHeight - 400) {
		console.log(clientHeight + scrollTop, scrollHeight);
		showLoading();
	}
	
})
async function showLoading() {
	loading.classList.add('show');
	// load more data
	setTimeout(() => {
		fetchApi(2)
	}, 2000)
}
