const a='HI';
console.log(a.padStart(4,'&'));

const date=new Date();
const hours=date.getHours();
console.log(hours);

const audio=new Audio("123.mp3");
const musicButton=document.querySelector("#music");

function musicq(){
    audio.play();
}

musicButton.addEventListener("click",musicq);


const playButton=document.querySelector("#playbutton");

function play(){
    playButton.value="2";
    //console.log("1");
}

function noPlay(){
    playButton.value="1";
   //console.log("2");
}

if(playButton.value=="1"){
    playButton.addEventListener("click",play);
}
else{
    playButton.addEventListener("click",noPlay);
}