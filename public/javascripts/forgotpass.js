const Base_URL = "http://localhost:3000/login/ApiLogin";
const Base_URL2 = "http://localhost:3000/forgot/send";
const Base_URL3 = "http://localhost:3000/login/update";

let email = document.querySelector("#email");
let id_user_,username_,email_,role_,avata_;
const sendEmail = async() => {
  // create ramdom password
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 12;
  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }

  // gán password đã ramdom cho 1 biến mới
  let ramDom_pass = password;
  
  // kiểm tra email có tồn tại không
  let invalidEmail = 0;
  await fetch(`${Base_URL}`)
  .then(response => response.json())
  .then(data => {
    data.map((item) => {
      if(item.email == email.value) {
        id_user_ = item.id_user;
        username_ = item.username;
        email_ = item.email;
        role_ = item.role;
        avata_ = item.avatar;
        return invalidEmail = 1;
      }
    }) 
  });

  if(invalidEmail == 1) {
    const requestPOST = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        password: ramDom_pass,
      })
    };
    const requestPUT = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id_user: id_user_,
        username: username_,
        password: ramDom_pass,
        email: email_,
        role: role_,
        avatar: avata_
      })
    };
  await fetch(`${Base_URL2}`, requestPOST)
    .then(async() => {
      await fetch(`${Base_URL3}/${id_user_}`, requestPUT)
      .then(() => {
        window.open("/login", "_self");
      })
    })
  }
  else {
    alert("Email không tồn tại");
  }

  console.log(ramDom_pass);
}