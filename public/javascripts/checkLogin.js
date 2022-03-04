const isLogin = localStorage.getItem("isLogin");
const role_user = localStorage.getItem("role");
const toggle_menu_login = document.querySelector("#toggle_btn-search-login");

const sign_out = () => {
    localStorage.setItem('isLogin', false);
    window.open("/login", "_self");
}

if(isLogin == "true") {
    if(role_user == 1) {
        let login = document.createElement("div");
        login.style.width = "250px";
        login.innerHTML = `
        <a href="/account_member" style="color: #999999">
            <span>
                <i class="fas fa-user"></i>
            </span>
        </a>

        <a onclick="loadding_page()" style="color: #999999">
            <span>
                <i class="fas fa-cog"></i>
            </span>
        </a>

        <a onclick="sign_out()" style="color: #999999">
            <span>
                <i class="fas fa-sign-out-alt"></i>
            </span>
        </a>
    
        <span style="color: #999999">
            <i class="fas fa-search"></i>
        </span>
    `;
    toggle_menu_login?.appendChild(login);
    }
    else {
        let login = document.createElement("div");
        login.style.width = "250px";
        login.innerHTML = `
        <a href="/account_member" style="color: #999999">
            <span>
                <i class="fas fa-user"></i>
            </span>
        </a>

        <a href="/cart" style="color: #999999;">
            <span>
                <i class="fas fa-shopping-cart"></i>
            </span>
        </a>

        <a onclick="sign_out()" style="color: #999999">
            <span>
                <i class="fas fa-sign-out-alt"></i>
            </span>
        </a>
        
        <span style="color: #999999">
            <i class="fas fa-search"></i>
        </span>
        `;
        toggle_menu_login.appendChild(login);
    }
}
else {
    let logout = document.createElement("div");
    logout.innerHTML = `
    <a href="/login" style="color: #999999">
        <span>
            <i class="far fa-user"></i>
        </span>
    </a>
    <span style="color: #999999">
        <i class="fas fa-search"></i>
    </span>
    `;
    toggle_menu_login.appendChild(logout);
}


const loadding_page = () => {
    let div_loading = document.querySelector("body");
    div_loading.innerHTML = `
    <div style="display: flex; flex-direction: column; align-item: center; text-align:center; justify-content:center;">
        <div class="circle-loading" style="margin-top: 40vh"></div>
        <div style="font-size: 30px; padding-left: 35px; margin-top: -120px; font-family: Arial; font-weight: bold;">MSI ADMIN<div>
    <div>
    `;
    setTimeout(()=>{
        window.open("/dashboard", "_self")
    },1200)
}