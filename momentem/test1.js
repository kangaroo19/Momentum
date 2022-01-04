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