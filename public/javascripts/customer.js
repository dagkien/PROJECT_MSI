const BASE_URL = "https://msiproject123.herokuapp.com/users/userApi";

const body_table = document.querySelector("#body_table");
let listUsers= [];

const fetchApi = async() => {
	await fetch(`${BASE_URL}`)
	  .then(response => response.json())
	  .then(data => {return listUsers = data});
	listUsers.map((item)=> {
	let tr = document.createElement("tr");
	tr.innerHTML = `
                     <th scope="row">${item?.username}</th>
                     <td><img class="imageProduct" src=${item?.avatar}></td>
                     <td>${item?.email}</td>
                     <td>${item?.role == 1 ? "Admin" : "Customer"}</td>
                     <td><button class="btn btn-primary" onclick="update()"><a href="update-customer.html?${item?.id}" style="color: white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                     <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                     <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                      </svg></a></button></td>
                     <td><button class="btn btn-danger" onclick="deleted(${item?.id})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                     <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                     <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                      </svg></button></td>
                     `;
        body_table.appendChild(tr);
	})
    
}
fetchApi();
 
const directPage = () => {
  window.open("http://youtube.com")
}

const deleted = (id) => {
  fetch(`https://msiproject123.herokuapp.com/users/${id}`, { method: 'DELETE' })
    .then(() => alert("DELETED"));
}
