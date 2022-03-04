const redirect = () => {
	const isLoginPage = localStorage.getItem("isLogin");
	if(isLoginPage !== "true") {
		window.open("/login", "_self");
	}   
}
// redirect();
const checkRole = () => {
	const role = localStorage.getItem("role");
	if(role != 1) {
		window.open("/login", "_self");
	}   
}
// checkRole();

let name_user = document.querySelector("#name_user");
name_user.innerHTML = localStorage.getItem("username")