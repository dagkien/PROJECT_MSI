var img = document.querySelectorAll('.img_dektop .img_changed')[0];
var arr_img = [
	"https://storage-asset.msi.com/global/picture/banner/banner_16105251275ffea9c7adeca8.11473367.jpeg",
	"https://storage-asset.msi.com/global/picture/banner/banner_1619658851edf92d0b3ccb5fede42e9ec83b6718c7.jpeg",
	"https://storage-asset.msi.com/global/picture/banner/banner_1615959771ba65a66dc2ee0833d6a641a74ab43b83.jpeg"
]
	var count = 0;
	setInterval(function(){
	    img.src = arr_img[count];
	  if(count == arr_img.length-1){
	    count = 0;
	  }
	  else {
	    count++;
	  }
	},4000);

	function a1(){
		img.src = arr_img[0];
	}
	function a2(){
		img.src = arr_img[1];
	}
	function a3(){
		img.src = arr_img[2];
	}

	var img_mb = document.querySelectorAll('.img_mobie .img_changed_mb');
	var arr_img_mb = [
	"https://storage-asset.msi.com/global/picture/banner/banner_1611221725922847694a2aaccf6a892db5014dc8c2.jpeg",
	"https://storage-asset.msi.com/global/picture/banner/banner_16105251275ffea9c7cd1fb9.93737972.jpeg",
	"https://storage-asset.msi.com/global/picture/banner/banner_161965885155b254d9d29e6491dfbb46b5f52f46e7.jpeg"
	]
	var count_mb = 0;
	setInterval(function(){
	    img_mb[0].src = arr_img_mb[count_mb];
	  if(count_mb == arr_img_mb.length-1){
	    count_mb = 0;
	  }else {
	    count_mb++;
	  }
	},4000);

	function a1_mb(){	
		img_mb[0].src = arr_img_mb[0];
	}
	function a2_mb(){
		img_mb[0].src = arr_img_mb[1];
	}
	function a3_mb(){
		img_mb[0].src = arr_img_mb[2];
	}