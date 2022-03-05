const BASE_URL = "https://msiproject123.herokuapp.com/users/userApi";
const BASE_URL_ = "https://msiproject123.herokuapp.com/users/addUser";

const isLog = localStorage.getItem("isLogin");
if(isLog == "true") {
	window.open("/account_member", "_self")
}

let user = document.querySelector("#user");
let password = document.querySelector("#password");
let password2 = document.querySelector("#password2")
let email = document.querySelector("#email");
let listUsers = [];
const postApiRegister = async() => {
    await fetch(`${BASE_URL}`)
    .then(response => response.json())
    .then(data => {return listUsers = data});
    console.log(listUsers);
    let idIncre = listUsers.length + 1;

    let data = {
        id_user: idIncre,
        username: user.value,
        password: password.value,
        email: email.value, 
        role: "0",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Qg1Ak2Qd9q2pBEGNuX5ynP1ewI3Awr5qYoqEd_FJ2guQi7iDXTX4nF5TETpuVKlOofU&usqp=CAU",
    };
    await fetch(`${BASE_URL_}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
    });
}
const check = async () => {
    // await fetch(`${Base_URL}`)
    // .then(response => response.json())
    // .then(data => {return listUsers = data});

    if(user.value.length && password.value.length && email.value.length != 0) {
        // listUsers.map((item) => {
        //     if(user.value == item.username) {
        //         alert("tài khoản đã tồn tại!");   
        //     }
        // })
        if(password.value != password2.value) {
            alert("mật khẩu xác nhận không trùng!");
        }
        else {
            await postApiRegister();
            window.open("/login" ,"_self")
        }
    }
    else {
        alert("Bạn phải điền đầy đủ thông tin!")
    }
}
