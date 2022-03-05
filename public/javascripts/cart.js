const Base_URL_Payment = "https://msiproject123.herokuapp.com/orders/payment";
const Base_URL_Product = "https://msiproject123.herokuapp.com/product/productApi";
const Base_URL2_Detail = "https://msiproject123.herokuapp.com/product_detail/ApiProduct_deatil";
const Base_URL_Promotion = "https://msiproject123.herokuapp.com/promotion";
const redirect = () => {
	const isLoginPage = localStorage.getItem("isLogin");
	if(isLoginPage !== "true") {
		window.open("/login", "_self");
	}   
}
redirect();

let div_cart = document.querySelector("#root_item_cart");
let total_price = document.querySelector("#total_price");

let id_Product_on_localStore = localStorage.getItem("arrayId_Product_inCart");
let arr_id_Product = id_Product_on_localStore.split(',');

let cart_promocode = document.querySelector("#code_promo");

var tt = 0;
const fetchApi_Product_localStore = async(item) => {
            await fetch(`${Base_URL2_Detail}/${item}`)
            .then(response => response.json())
            .then(data => {
                return product_on_localStore = data;
            })
            .then(() => showHtml())
}

const showHtml = () => {
    let div_item = document.createElement("div");
    div_item.setAttribute("class", "item_incart");
    div_item.innerHTML = `
        <div class="d-sm-flex justify-content-between my-4 pb-4 border-bottom">
            <div class="media d-block d-sm-flex text-center text-sm-left">
                <a class="cart-item-thumb mx-auto mr-sm-4" href="#"><img src="/images/${product_on_localStore.urlImages}" alt="Product"></a>
                <div class="media-body pt-2" style="display: flex; flex-direction: column; align-datas: flex-start; padding-left: 15px;">
                    <h3 class="product-card-title font-weight-semibold border-0 "><a href="#" class="text-white">${product_on_localStore.name}</a></h3>
                    <div class="font-size-sm"><span class="text-muted mr-2">Color: </span>Black</div>
                    <div class="font-size-lg text-primary pt-2 price" data-price=${product_on_localStore.price}>${product_on_localStore.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</div>
                </div>
                </div>
            <div class="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left" style="max-width: 10rem;">
                <div class="form-group mb-2">
                    <label for="quantity">Quantity</label>
                    <input class="form-control form-control-sm text-primary quantity" style="font-size: 20px" type="number" id="quantity1" value="1" min="1" max="10" onkeyup="change_quantity()" onclick="change_quantity()">
                </div>
                <button class="btn btn-outline-danger btn-sm btn-block mb-2 form-control" type="button" onclick="delele_cart(${product_on_localStore.id})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2 mr-1">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>Remove</button>
            </div>
        </div>`

    div_cart.appendChild(div_item);
    change_quantity();
    
}

arr_id_Product.map((item) => {
    fetchApi_Product_localStore(item);
})        


const change_quantity = () => {
    let quantity = document.querySelectorAll(".quantity");
    let price = document.querySelectorAll(".price");
    
    let price1 = parseInt(price[0]?.getAttribute("data-price")) * parseInt(quantity[0]?.value);
    let price2 = parseInt(price[1]?.getAttribute("data-price")) * parseInt(quantity[1]?.value);
    let price3 = parseInt(price[2]?.getAttribute("data-price")) * parseInt(quantity[2]?.value);
    let price4 = parseInt(price[3]?.getAttribute("data-price")) * parseInt(quantity[3]?.value);

    console.log(price1,price2,price3,price4)
    if(price1) {
        tt = price1;
        if(price2) {
            tt = price1 + price2;  
            if(price3) {
                tt = price1 + price2 + price3;
            }
            if(price4) {
                tt = price1 + price2 + price3 + price4;
            }
        }
    } 
    total_price.innerHTML = tt.toLocaleString('vi', {style : 'currency', currency : 'VND'});
}

const delele_cart = (id) => {
    let arrProduct = localStorage.getItem("arrayId_Product_inCart").split(",");
    const newArr2 = [];
	localStorage.setItem("arrayId_Product_inCart",newArr2);
    
	arrProduct.filter((item) => {
		if(item != id) {
            newArr2.push(item);
		}
	})
    localStorage.setItem("arrayId_Product_inCart", newArr2);
	arrProduct = newArr2;
    
    location.reload();  
}


const payment = async() => {
    
    let note = document.querySelector("#note").value;
    let idUser = localStorage.getItem("id_user");
    let time = new Date();
    let now = time.toLocaleDateString();
    let arr_idProduct = localStorage.getItem("arrayId_Product_inCart");
    data = {
        id: "",
        idProduct: arr_idProduct,
        idCustomer: parseInt(idUser),
        date: now,
        total_payment: tt,
        note: note
    }

    // Default options are marked with *
    await fetch(Base_URL_Payment, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    localStorage.setItem("arrayId_Product_inCart", []);  
    loading();
}

const loading = () => {
    var itemProduct = document.querySelectorAll(".item_incart");
    for(var i = 0; i< itemProduct.length;i++) {
        itemProduct[i].style.display="none";
    }
    let div_succes = document.querySelector("#root_item_succes");
    var div_loading = document.createElement("div");
    div_loading.innerHTML = `<div class="circle-loading"></div>`;
    div_succes.appendChild(div_loading);
    setTimeout(()=>{
        div_loading.style.display = "none";
        succes()
    },3000)
}
const succes = () => {
    setTimeout(() => {
        let div_succes = document.querySelector("#root_item_succes");
        let div_item = document.createElement("div");
        div_item.innerHTML = `
        <div style="text-align:center; padding: 45px; background-color: rgba(255,255,255,0.9); position: relative">
        <div class="text-black p-2" style="font-size: 25px;">PAYMENT SUCCES</div>
        <div class="icon text-black"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
      </svg></i></p>
        <a href="history.html" class="text-black" style="position: absolute; bottom: 10px; right: 10px;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left" style="width: 1rem; height: 1rem;"><polyline points="15 18 9 12 15 6"></polyline></svg>Go to History<a>
        </div>`
        div_succes.appendChild(div_item);
    },100)
}

let history_code = "";

async function check_code() {
    await fetch(`${Base_URL_Promotion}`)
    .then(response => response.json())
    .then(data => {return listpromo = data})
    const rs = listpromo.filter((item) => {
        return item.code == cart_promocode.value;
    })
    if (rs.length > 0) {
        if(history_code != rs[0].code) {
            history_code = rs[0].code;
            cart_promocode.style.border = "2px solid green";
            tt = (tt * 0.8);
            total_price.innerHTML = tt.toLocaleString('vi', {style : 'currency', currency : 'VND'});
        }
        else {
            cart_promocode.style.border = "2px solid orange";
        }
    }
    else {
        cart_promocode.style.border = "2px solid red";
    }
}
