const clickButton=document.querySelector("#clickbutton");

function gta(){
    if(clickButton.value=="1"){
        clickButton.value="2";
    }
    else{
        clickButton.value="1";
    }
}

clickButton.addEventListener("click",gta);