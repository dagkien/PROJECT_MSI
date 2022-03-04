


// Change logo_royal 


	var logo_royal = document.querySelector('.logo_royal');

	logo_royal.addEventListener('mouseover', function(){
		logo_royal.src = "https://storage-asset.msi.com/frontend/imgs/Widget_MSIOLOGY.png";
	})

	logo_royal.addEventListener('mouseout', function(){
		logo_royal.src = "https://storage-asset.msi.com/frontend/imgs/Widget_TIAMAT.png";
	})

	logo_royal.addEventListener('click', function(){
		logo_royal.src = "https://storage-asset.msi.com/frontend/imgs/Widget_MSIOLOGY.png";
		logo_royal.style.transition = "all ease-in 3s";
		logo_royal.style.transform = "rotate(360deg)";
		logo_royal.style.border = "10px solid red";
		logo_royal.style.borderRadius = "50%";
		document.querySelector("html").setAttribute("contenteditable", "true")
	})

// MENU 


	var menu = document.querySelector('.sanpham');
	var li1_sp = document.querySelector('.li1_sp');
	li1_sp.addEventListener('click', sanpham);
	var tat_sp = 0;
	function sanpham() {
		if(tat_sp % 2== 0){
			menu.style.display = "grid";
			li1_sp.style.backgroundColor = "#ddd";
			li1_sp.style.color = "black";
			tat_sp++;
		}
		
		else{
			menu.style.display = "none";
			li1_sp.style.backgroundColor = "transparent";
			tat_sp = 0;
		}
	}

// DECRIPTION MENU DESKTOP


	 var img_sp_menu = document.querySelector('.img_sp_menu');
	 var name_sp_menu = document.querySelector('.name_sp_menu');
	  var type_sp_menu = document.querySelector('.type_sp_menu');
	 var show_page_sp = document.querySelector('.show_page_sp');
	 function laptop() {
	 	img_sp_menu.src = "https://storage-asset.msi.com/global/picture/support/navigation_15457035445c21907810f5d.png";
	 	name_sp_menu.innerHTML = "Gaming Laptops";
	 	type_sp_menu.innerHTML = "True Gaming";
	 	show_page_sp.href = "/product?idcate=1";
	 }
	 function screen() {
	 	img_sp_menu.src = "https://storage-asset.msi.com/global/picture/support/navigation_15413960185bdfd6320a775.png";
	 	name_sp_menu.innerHTML = "Curved Gaming Display";
	 	type_sp_menu.innerHTML = "Expand Your Perspective";
	 	show_page_sp.href = "/product?idcate=2";
	 }
	  function cpt() {
	 	img_sp_menu.src = "https://storage-asset.msi.com/global/picture/support/navigation_15413959335bdfd5dd23e79.png";
	 	name_sp_menu.innerHTML = "Trident Series";
	 	type_sp_menu.innerHTML = "It Changes Everything";
	 	show_page_sp.href = "sanpham1.html";
	 }
	  function card() {
	 	img_sp_menu.src = "https://storage-asset.msi.com/global/picture/support/navigation_15413966055bdfd87d4e093.png";
	 	name_sp_menu.innerHTML = "Gaming Series";
	 	type_sp_menu.innerHTML = "Play Hard Stay Silent";
	 	show_page_sp.href = "sanpham3.html";
	 }
	  function bo_mach() {
	 	img_sp_menu.src = "https://storage-asset.msi.com/global/picture/support/navigation_15413965675bdfd85781b74.png";
	 	name_sp_menu.innerHTML = "Intel Z490";
	 	type_sp_menu.innerHTML = "One Board to Rule Them All";
	 	show_page_sp.href = "sanpham4.html";
	 }
	  function phukien() {
	 	img_sp_menu.src = "https://storage-asset.msi.com/global/picture/support/navigation_15413965215bdfd82919865.png";
	 	name_sp_menu.innerHTML = "Gaming Gear";
	 	type_sp_menu.innerHTML = "The Right Gear to Rely On";
	 	show_page_sp.href = "sanpham5.html";
	 }

 // MENU MOBIE


	 var tab = document.querySelector('.tab');
	 var icon_tab = document.querySelector('#button_icon_tab')
	 var menu_mobie = document.querySelector('.menu_mobie');
	 var li_menu = document.querySelector('.menu');
	 var count_click_tap = 0;

		var p = document.createElement("p");
		p.innerHTML = li_menu.innerHTML;
		menu_mobie.appendChild(p);
		menu_mobie.style.padding = "24px";
		menu_mobie.style.lineHeight = "60px";
		menu_mobie.style.fontSize = "20px";
	 function open_tab() {
		 	if (count_click_tap % 2 != 0) {
		 		button_icon_tab.className = "fas fa-bars";
		 		menu_mobie.style.left = "-100%";
		 	}
		 	else {
		 		button_icon_tab.className = "fas fa-times";
		 		menu_mobie.style.left = "0";
		 	}
		 	count_click_tap++;
	}

