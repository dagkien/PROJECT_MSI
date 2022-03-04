let user_name = document.querySelector('#user_name');
user_name.innerHTML = localStorage.getItem('username');

let user_name_edit = document.querySelector('#user_name_edit');
user_name_edit.innerHTML = localStorage.getItem('username');

let password_member = document.querySelector('#password_member');
password_member.innerHTML = localStorage.getItem('password');

let email_member = document.querySelector('#email_member');
email_member.innerHTML = localStorage.getItem('email');