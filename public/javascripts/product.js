const Base_URL = "https://msiproject123.herokuapp.com/product/productApi";
const Base_URL2 = "https://msiproject123.herokuapp.com/product_detail/ApiProduct_deatil";
const Base_URL3 = "https://msiproject123.herokuapp.com/update_product/delete";

const body_table = document.querySelector("#body_table");
let modal = document.querySelector("#modal");
let ul_cate_product = document.querySelector("#ul_cate_product");
let id_cate = 1;

var title = document.querySelector("title");



const fetchApiCate = async() => {
  await fetch('http://localhost:3000/categories')
  .then(response => response.json())
  .then(data => {return listCategories = data});
 
  fetchDataCategory();
}


const fetchApi = async() => {
  await fetch(`${Base_URL}`)
    .then(response => response.json())
    .then(data => {
      data.map((item) => {
        if(item.id_category == id_cate) {   
          return listProducts = data
        }  
      })
    })
  fetchDataProducts(listProducts);
}
fetchApi();



const fetchDataProducts = (data) => {
  data.map((item) => {
    let tr = document.createElement("tr");
    tr.setAttribute("class", "product_begin")
    tr.setAttribute("data-bs-target","#exampleModal");
    tr.setAttribute("data-bs-toggle","modal");
    tr.setAttribute("class", "tr_table");
    tr.innerHTML = `
                    <th scope="row">${item?.id}</th>
                    <td><img class="imageProduct" src=/images/${item?.urlImages}></td>
                    <td>${item?.name}</td>
                    <td class="format_price">${item?.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</td>
                    <td><button class="btn btn-secondary" onclick="openModal(${item?.id})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                    </svg></button></td>
                    <td><button class="btn btn-primary" onclick="update()"><a href="/update_product/${item?.id}" style="color: white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                    <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                    </svg></a></button></td>
                    <td><button class="btn btn-danger" onclick="deleted(${item?.id})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                    </svg></button></td>
                    `;
    body_table.appendChild(tr); 
	})
}
const openModal = (e) => {
  let number = e - 1;
    modal.innerHTML = `
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" scroll="true">
  <div class="modal-dialog modal-dialog-scrollable">
  <div class="modal-content">
      <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">${listProducts[number].name}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
      <div class="modal-body" style="display: flex; flex-direction: column; justify-content: center; align-item: center;">
      <img style="max-width: 60%; align-self: center; margin-top: 170px;" src=/images/${listProducts[number].urlImages}>
      
      <p><span style="font-weight: bold" class="format_price">Giá</span>: ${listProducts[number].price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</p>
        <p><span style="font-weight: bold">Ram</span>: ${listProducts[number].ram}</p>
        <p><span style="font-weight: bold">Cpu</span>: ${listProducts[number].cpu}</p>
        <p><span style="font-weight: bold">Screen</span>: ${listProducts[number].screen}</p>
        <p><span style="font-weight: bold">Vga</span>: ${listProducts[number].vga}</p>
        <p><span style="font-weight: bold">HĐH</span>: ${listProducts[number].hdh}</p>
        <p><span style="font-weight: bold">Pin</span>: ${listProducts[number].pin}</p>
        <p><span style="font-weight: bold">Loại</span>: ${listProducts[number].categories}</p>
        <hr/>
        <p><span style="font-weight: bold">Mô Tả:</span></p>
        <p>${listProducts[number].descriptionL}</p>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
        </div>
        </div>
        </div>
        </div>
        ` 
};

const fetchDataCategory = () => {
    ul_cate_product.innerHTML = `
      <li class="active" id="name_Category_1" onclick="change_product_by_category_1()">${listCategories[0].name}</li>
      <li id="name_Category_2" onclick="change_product_by_category_2()">${listCategories[1].name}</li>
      <li id="name_Category_3" onclick="change_product_by_category_3()">${listCategories[2].name}</li>
      <li id="name_Category_4" onclick="change_product_by_category_4()">${listCategories[3].name}</li>
      <li id="name_Category_5" onclick="change_product_by_category_5()">${listCategories[4].name}</li>
    `
}


const change_product_by_category_1 = () => {
  hide_all();
  const name_Category_1 = document.querySelector("#name_Category_1");
  name_Category_1.setAttribute("class", "active");
  id_cate = 1;
}
const change_product_by_category_2 = async() => {
  hide_all();
  const name_Category_2 = document.querySelector("#name_Category_2");
  name_Category_2.setAttribute("class", "active");
  id_cate = 2;
}
const change_product_by_category_3 = () => {
  hide_all();
  const name_Category_3 = document.querySelector("#name_Category_3");
  name_Category_3.setAttribute("class", "active");
  id_cate = 3;
}
const change_product_by_category_4 = () => {
  hide_all();
  const name_Category_4 = document.querySelector("#name_Category_4");
  name_Category_4.setAttribute("class", "active");
  id_cate = 4;
}
const change_product_by_category_5 = () => {
  hide_all();
  const name_Category_5 = document.querySelector("#name_Category_5");
  name_Category_5.setAttribute("class", "active");
  id_cate = 5;
}
const change_product_by_category_1_hide = () => {
  const name_Category_1 = document.querySelector("#name_Category_1");
  name_Category_1.setAttribute("class", "");
}
const change_product_by_category_2_hide = () => {
  const name_Category_2 = document.querySelector("#name_Category_2");
  name_Category_2.setAttribute("class", "");
}
const change_product_by_category_3_hide = () => {
  const name_Category_3 = document.querySelector("#name_Category_3");
  name_Category_3.setAttribute("class", "");
}
const change_product_by_category_4_hide = () => {
  const name_Category_4 = document.querySelector("#name_Category_4");
  name_Category_4.setAttribute("class", "");
}
const change_product_by_category_5_hide = () => {
  const name_Category_5 = document.querySelector("#name_Category_5");
  name_Category_5.setAttribute("class", "");
}
const hide_all = () => {
  change_product_by_category_1_hide();
  change_product_by_category_2_hide();
  change_product_by_category_3_hide();
  change_product_by_category_4_hide();
  change_product_by_category_5_hide();
}

const deleted = (id) => {
  fetch(`${Base_URL3}/${id}`, { method: 'DELETE' })
    .then(() => {location.reload()});
}
const add = () => {
  alert("DELETING.........")
}


async function searching() {
  var product_begin = document.querySelectorAll(".tr_table");
  for(var i = 0; i < product_begin.length; i++) {
    product_begin[i].style.display="none";
  }
  let ip_search = document.querySelector("#ip_search");
  var productSearch = []
  title.innerHTML = ip_search.value
  await fetch(`${Base_URL}`)
      .then(response => response.json())
      .then(data => {       
          var re = new RegExp(ip_search.value +'.+$', 'i');
          patients = data.filter(function(e, i, a){
              return e.name.search(re) != -1;
          });
          console.log(patients);
          patients.map((item) => {
            productSearch.push(item);
          })
          if(ip_search.value.length == 0){
            data.map((item) => {
              productSearch.push(item);
            })
          }
      })
  fetchDataProducts(productSearch);
}

