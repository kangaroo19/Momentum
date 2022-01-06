const musicButton=document.querySelector("#musicbutton");
const audio=new Audio("123.mp3");

function music(){
    if(musicButton.value=="Play"){
        audio.play();
        musicButton.value="Stop";
    }
    else{
        audio.pause();
        musicButton.value="Play";
    }
}

musicButton.addEventListener("click",music);