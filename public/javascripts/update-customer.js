let r = /\d+/;
let host =  window.location.toString().slice(21);
const endPoint = host.match(r)
const id = endPoint[0];

const fetchApi = async () => {
    await fetch(`https://msiproject123.herokuapp.com/users/${id}`)
    .then(response => response.json())
    .then(data => {return user = data});
    fetchData();
}
fetchApi();

const fetchData = () => {
            document.querySelector(".main_detail").innerHTML = `
            <div class="d_img">
                <img class="avatar" src=${user.avatar}>
                <div class="img4">
                </div>  
            </div>
            <div class="d_form">
                <div class="form-2-group">    
                    <div class="form-group">
                        <label class="form-label">User Name</label>
                        <input class="form-control" type="text" id="username" value="${user.username}">
                    </div>
        
                    <div class="form-group">
                        <label class="form-label">Password</label>
                        <input class="form-control" type="number" id="password" value="${user.password}">
                    </div>                  
                </div>

                <div class="form-2-group">
                    <div class="form-group">
                        <label class="form-label">Email</label>
                        <input class="form-control" type="text" id="email" value="${user.email}">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Role</label>
                        <input class="form-control" type="text" id="role" value="${user.role}">
                    </div>
                </div>
                
                <div class="form-2-group" style="align-self: flex-start;">    
                    <div class="form-group">
                        <label class="form-label">Url Avatar</label>
                        <input class="form-control" type="text" id="avatar" value="${user.avatar}">
                    </div>
                </div>
                
              
                <div class="form-2-group-btn">    
                    <button class="btn btn-primary" onclick="save_form()">SAVE</button>
                    <button class="btn btn-secondary" onclick="reset_form()">Reset</button>
                </div>
            </div>
            `
}


const save_form = async () => {
    let username = document.querySelector("#username"); 
    let password = document.querySelector("#password"); 
    let email = document.querySelector("#email"); 
    let role = document.querySelector("#role"); 
    let avatar = document.querySelector("#avatar"); 
   
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: endPoint,
            username: username.value,
            password: password.value,
            email: email.value,
            role: role.value,
            avatar: avatar.value,
        })
    };
    await fetch(`https://msiproject123.herokuapp.com/users/${endPoint}`, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    window.open("customer.html", "_self")
}

const reset_form = () => {
    document.querySelector("#username").value = user.username 
    document.querySelector("#password").value = user.password 
    document.querySelector("#email").value = user.email 
    document.querySelector("#role").value = user.role 
}
