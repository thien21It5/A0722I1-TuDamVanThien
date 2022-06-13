var demo=document.getElementById("demo");
demo.addEventListener("mouseover",mouseover);
demo.addEventListener("mouseout",mouseout);
demo.addEventListener("click",clickFunction);
function mouseover(){
    document.getElementById("demo").style.color="red";
}
function mouseout(){
    document.getElementById("demo").style.color="blue";
}
function clickFunction(){
    alert("Bài số 2 của phần Table");
}