function clickYes(){
    alert("Yes. you are right ")
}
function clickNo(){
    let w=Math.floor(Math.random() * window.innerWidth);
    let h=Math.floor(Math.random() * window.innerHeight);

    document.getElementById('no').style.left= w +"px"
    document.getElementById('no').style.top= h +"px"
}