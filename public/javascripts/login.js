const Base_URL = "https://msiproject123.herokuapp.com/login/ApiLogin"

const isLog = localStorage.getItem("isLogin");

if(isLog == "true") {
	window.open("/account_member", "_self")
}

let user = document.querySelector('#user');
let password = document.querySelector('#password');
let email = document.querySelector('#email');
let checkbox = document.querySelector('#checkbox');
let listUsers = [];
const getApiUsers = async() => {
	await fetch(`${Base_URL}`)
	.then(response => response.json())
	.then(data => {return listUsers = data});
	console.log(listUsers);
	listUsers.map((item) => {
		if(user.value == item.username) {
			user.style.border = "1px solid green";
			if(password.value == item.password) {
				password.style.border = "1px solid green";
				localStorage.setItem('id_user', item.id_user);
				localStorage.setItem('username', item.username);
				localStorage.setItem('password', item.password);
				localStorage.setItem('email', item.email);
				localStorage.setItem('avatar', item.avatar);
				localStorage.setItem('role', item.role);
				localStorage.setItem('isLogin', true);
				window.open("/account_member","_self");
			}
			else {
				password.style.border = "1px solid red";
			}
		}
		else {
			user.style.border = "1px solid red";
		}
		
	})
}	

// user.value = localStorage.getItem('username');
// password.value = localStorage.getItem('password');

function check() {
	getApiUsers();
}


