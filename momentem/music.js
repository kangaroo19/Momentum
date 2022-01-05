const musicButton=document.querySelector("#musicbutton");
const audio=new Audio("123.mp3");

function playMusic(){
    musicButton.value="Stop";
}

function stopMusic(){
    musicButton.value="Play";
}

if(musicButton.value=="Play"){
    musicButton.addEventListener("click",playMusic);
}

else{
    musicButton.addEventListener("click",stopMusic);
}




