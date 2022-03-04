const Base_URL = "http://localhost:3000/product/productApi";
const Base_URL2 = "http://localhost:3000/add_product/add"

const fetchApi = async() => {
	await fetch(`${Base_URL}`)
	  .then(response => response.json())
	  .then(data => {return listProducts = data});
}
fetchApi();

const fetchData = () => {
            document.querySelector(".main_detail").innerHTML = `
            <div class="d_img">
            <img class="big_img" src="">
            <div class="img4">
                <img src= >
                <img src= >
                <img src= >
                <img src= >
              </div>  
          </div>

          <hr/>
          <div class="d_form" style="margin-top: -20px">
              <div class="form-2-group">    
                  <div class="form-group">
                      <label class="form-label">Name</label>
                      <input class="form-control" type="text" id="name" value="" placeholder="Name Product">
                  </div>
       
                  <div class="form-group">
                      <label class="form-label">Price</label>
                      <input class="form-control" type="number" id="price" value="" placeholder="Price Product">
                  </div>
                  
                  <div class="form-group">
                      <label class="form-label">Cpu</label>
                      <input class="form-control" type="text" id="cpu" value="" placeholder="CPU">
                  </div>
              </div>
              
              <div class="form-2-group">
                  <div class="form-group">
                      <label class="form-label">Ram</label>
                      <input class="form-control" type="text" id="ram" value="" placeholder="RAM">
                  </div>
                  
                  <div class="form-group">
                      <label class="form-label">Screen</label>
                      <input class="form-control" type="text" id="screen" value="" placeholder="Screen">
                  </div>

                  <div class="form-group">
                      <label class="form-label">Vga</label>
                      <input class="form-control" type="text" id="vga" value="" placeholder="Vga">
                  </div>
              </div>
              
              <div class="form-2-group">    

                  <div class="form-group">
                      <label class="form-label">HDH</label>
                      <input class="form-control" type="text" id="hdh" value="" placeholder="HDH">
                  </div>

                  <div class="form-group">
                      <label class="form-label">Pin</label>
                      <input class="form-control" type="text" id="pin" value="" placeholder="Pin">
                  </div>
                  
                  <div class="form-group">
                      <label class="form-label">Category</label>
                      <input class="form-control" type="number" id="categories" value="" placeholder="Category">
                  </div>
              </div>

              <div class="form-2-group" style="align-self: flex-start;">    
                  <div class="form-group">
                      <label class="form-label">Url Big Image</label>
                      <input class="form-control" input type="file" name="productImage" style="width:610px" id="urlImages" value="" placeholder="Url big image">
                  </div>
              </div>
                  
              <div class="form-2-group" style="align-self: flex-start;">
                <div class="form-group">
                    <label class="form-label">Url 4 Small Image</label>
                    <input class="form-control" input type="file" multiple="multiple" name="productImage1" style="width:610px" id="listUrlImage" value="" placeholder="Url image">
                </div>
              </div>

              <div class="form-2-group" style="align-self: flex-start;">
                  <div class="form-group">
                      <label class="form-label">Description</label>
                      <div class="form-floating">
                          <textarea class="form-control" placeholder="Description about Product" id="descriptionL" style="height: 120px;"></textarea>
                        </div>
                  </div>
              </div>
              
              <div class="form-2-group-btn">    
                  <button class="btn btn-primary" onclick="add_product()">ADD</button>
                  <button class="btn btn-secondary" onclick="reset_form()">Cancel</button>
              </div>
            `
}
fetchData();

const add_product = async () => {
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
    let arrUrlImages = [listUrlImages.files[0].name, listUrlImages.files[1].name,listUrlImages.files[2].name,listUrlImages.files[3].name];
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: listProducts.length + 1,
            name: name.value,
            descriptionL: descriptionL.value,
            descriptionS: "Vi xử lý intel®Core™ thế hệ 10 / card đồ họa GeForce RTX™ 30 series",
            urlImages: urlImages.files[0].name,
            listUrlImages: arrUrlImages.toString(),
            price: price.value,
            cpu: cpu.value,
            ram: ram.value,
            vga: vga.value,
            screen: screen.value,
            hdh: hdh.value,
            pin: pin.value,
            id_category: categories.value
        })
    };
    await fetch(`${Base_URL2}`, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    window.open("/product_admin", "_self")
}

const reset_form = () => {
    document.querySelector("#name").value = productsDetail.name 
    document.querySelector("#ram").value = productsDetail.ram 
    document.querySelector("#price").value = parseInt(productsDetail.price) 
    document.querySelector("#cpu").value = productsDetail.cpu 
    document.querySelector("#screen").value = productsDetail.screen 
    document.querySelector("#vga").value = productsDetail.vga 
    document.querySelector("#hdh").value = productsDetail.hdh 
    document.querySelector("#pin").value = productsDetail.pin 
    document.querySelector("#descriptionL").value = productsDetail.descriptionL 
    document.querySelector("#categories").value = productsDetail.categories 
    document.querySelector("#urlImages").value = productsDetail.urlImages
}