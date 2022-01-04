const clock=document.querySelector("#clock");


function getClock(){
    const date=new Date(); //date 객체 생성
    const hours = String(date.getHours()).padStart(2, "0"); //String은 ()안의 내용 문자열로 저장한다는 뜻
    const minutes = String(date.getMinutes()).padStart(2, "0");//padstart는 2칸중 앞에 0채워넣는다는 뜻
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;

}
getClock();
setInterval(getClock,1000);
