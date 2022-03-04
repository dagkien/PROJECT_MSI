const redirect = () => {
	const isLoginPage = localStorage.getItem("isLogin");
	if(isLoginPage !== "true") {
		window.open("/login", "_self");
	}   
}
redirect();

const id_user_getLocalStore = localStorage.getItem("id_user");

let name_user = document.querySelector(".name_");
let email_user = document.querySelector(".email_");
let email_user_ip = document.querySelector("#email_user");
let id_user = document.querySelector("#id_user");
let first_name_user = document.querySelector("#first_name_user");
let lastname_user = document.querySelector("#lastname_user");
let user_male = document.querySelector("#user_male");
let user_female = document.querySelector("#user_female");
let birthday_user = document.querySelector("#birthday_user");
let region_user = document.querySelector("#region_user");
let state_user = document.querySelector("#state_user");
let city_user = document.querySelector("#city_user");
let zipcode_user = document.querySelector("#zipcode_user");
let address_user = document.querySelector("#address_user");
let phone_user = document.querySelector("#phone_user");
let profession_user = document.querySelector("#profession_user");
let education_user = document.querySelector("#education_user");
let line_time_user = document.querySelector("#line_time_user");
let avatar = document.querySelector("#avatar_user");

avatar.src = localStorage.getItem("avatar");
name_user.innerHTML = localStorage.getItem("username"); 
email_user.innerHTML = localStorage.getItem("email");

const innerDetailUser = async() => {
	await fetch(`http://localhost:3000/users/${id_user_getLocalStore}`)
	  .then(response => response.json())
	  .then(data => {return User = data});

		id_user.placeholder = User.id;
		email_user_ip.placeholder = User.email;
		first_name_user.value = User.first_name;
		lastname_user.value = User.lastname;
		birthday_user.value = User.birthday;
		state_user.value = User.state;
		city_user.value = User.city;
		zipcode_user.value = User.zipcode;
		address_user.value = User.address;
		phone_user.value = User.phone_user;
		// line_time_user.value = User.line_time;
		// education_user.value = User.education;
		// profession_user.value = User.profession;
		// region_user.value = User.region;
		// user_female.value = User.user_sex;
	}
innerDetailUser();