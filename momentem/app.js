const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-input");
const loginButton=document.querySelector("#login-button");
const greeting=document.querySelector("#greeting");
const logoutButton=document.querySelector("#logout-button");
const logoutForm=document.querySelector("#logout-form");

const savedName=localStorage.getItem("username");

function loginButtonClick(event){
   event.preventDefault();
   loginForm.classList.add("hidden");
   const typedName=loginInput.value;
   localStorage.setItem("username",typedName);
   greeting.classList.remove("hidden");
   greeting.innerText="Hello "+typedName;
   logoutButton.classList.remove("hidden");
}

function logoutButtonClick(event){
   event.preventDefault();
   localStorage.removeItem("username");
   greeting.classList.add("hidden");
   logoutButton.classList.add("hidden");
   loginForm.classList.remove("hidden");
}

if(savedName!=null){ //저장된 이름 있을떄
   loginForm.classList.add("hidden");
   greeting.classList.remove("hidden");
   greeting.innerText="Hello "+savedName;
   logoutButton.classList.remove("hidden");
}
else{
   loginForm.addEventListener("submit",loginButtonClick);
}

logoutForm.addEventListener("submit",logoutButtonClick);
