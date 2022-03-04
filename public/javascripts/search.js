
let inputEl = document.querySelectorAll('.ip_sort');

for(let i = 0; i <= inputEl.length; i++) {
    inputEl[i]?.addEventListener("click", sort_by_key);
}

function sort_by_key() {
    if(this.checked == true) {
        console.log(this.checked);
        console.log(this.value);
        fetchApi_sort_product(this.value);
        all_sp.innerHTML = "";
    }
    else {
        let nonValue = null;
        fetchApi_sort_product(nonValue);
    }
}

const fetchApi_sort_product = async(value) => {
        await fetch(`${Base_URL}`)
          .then(response => response.json())
          .then(data => {return listProducts = data});
        listProducts.map((item)=> {
            if(value == null) {
                let div = document.createElement("div");
                div.setAttribute("class", "box_sp");
                div.innerHTML = `<img src=/images/${item.urlImages}>
                            <label class="buy_sp" onclick="add_to_cart(${item.id})"><i class="fas fa-plus check_buy"></i>&#12644;add to cart</label>
                            <h3 class="name_sp_inbox"><a href="/product_detail/${item.id}" style="color: #eee;">${item.name}</a></h3>
                            <p class="decription">${item.descriptionS}</p>`;
                all_sp.appendChild(div);
            }
            if(item.screen_sort == value) {
                let div = document.createElement("div");
                div.setAttribute("class", "box_sp");
                div.innerHTML = `<img src=/images/${item.urlImages}>
                            <label class="buy_sp" onclick="add_to_cart(${item.id})"><i class="fas fa-plus check_buy"></i>&#12644;add to cart</label>
                            <h3 class="name_sp_inbox"><a href="/product_detail/${item.id}" style="color: #eee;">${item.name}</a></h3>
                            <p class="decription">${item.descriptionS}</p>`;
                all_sp.appendChild(div);
            }
            if((item.cpu_sort + " " + item.hdh_sort) == value) {
                    let div = document.createElement("div");
                    div.setAttribute("class", "box_sp");
                    div.innerHTML = `<img src=/images/${item.urlImages}>
                                <label class="buy_sp" onclick="add_to_cart(${item.id})"><i class="fas fa-plus check_buy"></i>&#12644;add to cart</label>
                                <h3 class="name_sp_inbox"><a href="/product_detail/${item.id}" style="color: #eee;">${item.name}</a></h3>
                                <p class="decription">${item.descriptionS}</p>`;
                    all_sp.appendChild(div);
            }
        })
        
}

