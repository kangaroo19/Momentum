const body=document.querySelector("body");
const images=["retro1.jpg","retro2.png","retro3.jpg","retro4.jpg","retro5.png"];

const chosenImage=images[Math.floor(Math.random()*images.length)];

console.log(chosenImage);

body.style.backgroundImage='url('+chosenImage+')'; 



   