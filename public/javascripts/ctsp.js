const Base_URL = "http://localhost:3000/product_detail/ApiProduct_deatil";
let r = /\d+/;
let host =  window.location.toString().slice(30);
const endPoint = host.match(r)
let id = endPoint[0];
console.log(id);

let ctsp_body = document.querySelector('.ctsp_body');
let img1,img2,img3,img4;

const fetchApi = async() => {
	await fetch(`${Base_URL}/${id}`)
	  .then(response => response.json())
	  .then(data => {return listProductsDetail = data});
	  img1 = listProductsDetail?.listUrlImages.split(',')[0];
	  img2 = listProductsDetail?.listUrlImages.split(',')[1];
	  img3 = listProductsDetail?.listUrlImages.split(',')[2];
	  img4 = listProductsDetail?.listUrlImages.split(',')[3];
	  fetchData();
}
fetchApi();

const fetchData = () => {
	let divCtsp = document.createElement("div");
	divCtsp.setAttribute("class","ctsp")
			divCtsp.innerHTML = `
			<div id="show_ctsp_img">
					<img id="main_img" src="/images/${listProductsDetail.urlImages}" style="height: 300px; width: 300px; margin-top: 220px">
					<div class="small_img">
						<img onclick="changeImg()" src="/images/${img1}">
						<img onclick="changeImg()" src="/images/${img2}">
						<img onclick="changeImg()" src="/images/${img3}">
						<img onclick="changeImg()" src="/images/${img4}">
					</div>
					<button class="video_sp">Review</button>
			</div>
			<div id="show_ctsp_drs">
				<div class="ct_item">
					<h2 id="ten_ctsp">${listProductsDetail.name}</h2>
					<div class="danhgia"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>
					<h3>Giá bán: <span class="price">${listProductsDetail.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</span></h3>
					<p>- CPU: ${listProductsDetail.cpu}<span><i class="fas fa-check-circle"></i></span></p>
					<p>- RAM: ${listProductsDetail.ram}<span><i class="fas fa-check-circle"></i></span></p>
					<p>- VGA: ${listProductsDetail.vga}<span><i class="fas fa-check-circle"></i></span></p>
					<p>- Màn hình: ${listProductsDetail.screen}<span><i class="fas fa-check-circle"></i></span></p>
					<p>- HĐH: ${listProductsDetail.hdh}<span><i class="fas fa-check-circle"></i></span></p>
					</div>
					<hr>
					<div class="about_item">
					<h4 style="padding-bottom: 5px;">About this item</h4>
					<p>${listProductsDetail.descriptionL}</p>
				</div>
			</div>
			`			
	ctsp_body.appendChild(divCtsp);
}

const changeImg = () => {
	document.querySelector("#main_img").src = "";
};
var menu = document.querySelector('.sanpham');
		var li1_sp = document.querySelector('.li1_sp');
		li1_sp.addEventListener('click', sanpham);
		var tat_sp = 0;
		function sanpham() {
			if(tat_sp % 2== 0){
				menu.style.display = "grid";
				li1_sp.style.backgroundColor = "white";
				li1_sp.style.color = "black";
				tat_sp++;
			}
			
			else{
				menu.style.display = "none";
				li1_sp.style.backgroundColor = "transparent";
				li1_sp.style.color = "white";
				tat_sp = 0;
			}
	}


