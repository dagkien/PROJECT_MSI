const Base_URL = "https://msiproject123.herokuapp.com/update_product/update";

let r = /\d+/;
let host =  window.location.toString().slice(30);
const endPoint = host.match(r)
const id = endPoint[0];
let img1,img2,img3,img4;

console.log(endPoint);
const fetchApi = async () => {
    await fetch(`${Base_URL}/${id}`)
    .then(response => response.json())
    .then(data => {return productsDetail = data});
    img1 = productsDetail?.listUrlImages.split(',')[0];
    img2 = productsDetail?.listUrlImages.split(',')[1];
    img3 = productsDetail?.listUrlImages.split(',')[2];
    img4 = productsDetail?.listUrlImages.split(',')[3];
    fetchData();
}
fetchApi();
const fetchData = () => {
            document.querySelector(".main_detail").innerHTML = `
            <div class="d_img">
                <img class="big_img" src="/images/${productsDetail.urlImages}">
                <div class="img4">
                    <img src="/images/${img1}">
                    <img src="/images/${img2}">
                    <img src="/images/${img3}">
                    <img src="/images/${img4}">
                </div>  
            </div>

          <hr/>
          <div class="d_form">

              <div class="form-2-group">    
                  <div class="form-group">
                      <label class="form-label">Name</label>
                      <input class="form-control" type="text" id="name" value="${productsDetail.name}">
                  </div>
       
                  <div class="form-group">
                      <label class="form-label">Price</label>
                      <input class="form-control" type="number" id="price" value="${productsDetail.price}">
                  </div>
                  
                  <div class="form-group">
                      <label class="form-label">Cpu</label>
                      <input class="form-control" type="text" id="cpu" value="${productsDetail.cpu}">
                  </div>
              </div>
              
              <div class="form-2-group">
                  <div class="form-group">
                      <label class="form-label">Ram</label>
                      <input class="form-control" type="text" id="ram" value="${productsDetail.ram}">
                  </div>
                  
                  <div class="form-group">
                      <label class="form-label">Screen</label>
                      <input class="form-control" type="text" id="screen" value="${productsDetail.screen}">
                  </div>

                  <div class="form-group">
                      <label class="form-label">Vga</label>
                      <input class="form-control" type="text" id="vga" value="${productsDetail.vga}">
                  </div>
              </div>
              
              
              <div class="form-2-group">    

                  <div class="form-group">
                      <label class="form-label">HDH</label>
                      <input class="form-control" type="text" id="hdh" value="${productsDetail.hdh}">
                  </div>

                  <div class="form-group">
                      <label class="form-label">Pin</label>
                      <input class="form-control" type="text" id="pin" value="${productsDetail.pin}">
                  </div>
                  
                  <div class="form-group">
                      <label class="form-label">Category</label>
                      <input class="form-control" type="number" id="categories" value="${productsDetail.id_category}">
                  </div>
              </div>

              <div class="form-2-group" style="align-self: flex-start;">    
                  <div class="form-group">
                      <label class="form-label">Url Big Image</label>
                      <input class="form-control" type="file" style="width:610px" id="urlImages" value="${productsDetail.urlImages}">
                  </div>
              </div>
                  
              <div class="form-2-group" style="align-self: flex-start;">
                <div class="form-group">
                    <label class="form-label">Url 4 Small Image</label>
                    <input id="listUrlImage"  class="form-control form-control-2" type="file" multiple style="width:610px" value="${productsDetail.listUrlImages}">
                </div>
              </div>

              <div class="form-2-group" style="align-self: flex-start;">
                  <div class="form-group">
                      <label class="form-label">Description</label>
                      <div class="form-floating">
                          <textarea class="form-control" placeholder="Leave a comment here" id="descriptionL" style="height: 120px;">${productsDetail.descriptionL}</textarea>
                        </div>
                  </div>
              </div>
              
              <div class="form-2-group-btn">    
                  <button class="btn btn-primary" onclick="save_form()">SAVE</button>
                  <button class="btn btn-secondary" onclick="reset_form()">Reset</button>
              </div>
            `
}


const save_form = async () => {
    let name = document.querySelector("#name"); 
    let ram = document.querySelector("#ram"); 
    let price = document.querySelector("#price"); 
    let cpu = document.querySelector("#cpu"); 
    let screen = document.querySelector("#screen"); 
    let vga = document.querySelector("#vga"); 
    let hdh = document.querySelector("#hdh"); 
    let pin = document.querySelector("#pin"); 
    let descriptionL = document.querySelector("#descriptionL"); 
    let categories = document.querySelector("#categories"); 
    let urlImages = document.querySelector("#urlImages"); 
    let listUrlImages = document.querySelector("#listUrlImage");
    let arrUrlImages = [listUrlImages.files[0]?.name, listUrlImages.files[1]?.name,listUrlImages.files[2]?.name,listUrlImages.files[3]?.name];
    console.log(listUrlImages.value);
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: endPoint,
            name: name.value,
            descriptionL: descriptionL.innerHTML,
            descriptionS: "Vi xử lý intel®Core™ thế hệ 10 / card đồ họa GeForce RTX™ 30 series",
            urlImages: urlImages.files[0]?.name? urlImages.files[0]?.name : urlImages.value,
            listUrlImages: arrUrlImages.toString(),
            price: parseInt(price.value),
            cpu: cpu.value,
            ram: ram.value,
            vga: vga.value,
            screen: screen.value,
            hdh: hdh.value,
            pin: pin.value,
            id_category: categories.value
        })
    };
    await fetch(`${Base_URL}/${endPoint}`, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    window.open("/product_admin", "_self")
}

const reset_form = () => {
    document.querySelector("#name").value = productsDetail.name 
    document.querySelector("#ram").value = productsDetail.ram 
    document.querySelector("#price").value = productsDetail.price 
    document.querySelector("#cpu").value = productsDetail.cpu 
    document.querySelector("#screen").value = productsDetail.screen 
    document.querySelector("#vga").value = productsDetail.vga 
    document.querySelector("#hdh").value = productsDetail.hdh 
    document.querySelector("#pin").value = productsDetail.pin 
    document.querySelector("#descriptionL").value = productsDetail.descriptionL 
    document.querySelector("#categories").value = productsDetail.categories 
    document.querySelector("#urlImages").value = productsDetail.urlImages
}
