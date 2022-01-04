const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-input");
const loginButton=document.querySelector("#login-button");
const greeting=document.querySelector("#greeting");
const logoutButton=document.querySelector("#logout-button");
const logoutForm=document.querySelector("#logout-form");

const savedName=localStorage.getItem("username");
const date=new Date();
const hours=date.getHours();

function loginButtonClick(event){
   event.preventDefault();
   loginForm.classList.add("hidden");
   const typedName=loginInput.value;
   localStorage.setItem("username",typedName);
   greeting.classList.remove("hidden");
   //greeting.innerText="Hello "+typedName;
   selectHours(hours,typedName);
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
   //greeting.innerText="Hello "+savedName;
   selectHours(hours,savedName);
   logoutButton.classList.remove("hidden");
}
else{
   loginForm.addEventListener("submit",loginButtonClick);
}

logoutForm.addEventListener("submit",logoutButtonClick);

function selectHours(hours,typedName){ //#greeting에 시간대별 나오는 문구 다르게하는 함수
   if(4<=hours && hours<=11)
      greeting.innerText="Good Morning "+typedName;
   else if(12<=hours && hours<=6)
      greeting.innerText="Good Afternoon "+typedName;
   else 
      greeting.innerText="Good Night "+typedName;
}