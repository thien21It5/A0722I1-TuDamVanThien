function additon(){
    let x=document.getElementById("add1").value;
    let y=document.getElementById("add2").value;
    let so1=parseFloat(x);
    let so2=parseFloat(y);
    let sum=so1+so2;
    document.getElementById("result").innerText="Addition: "+sum;
}
function subtraction(){
    let x=document.getElementById("add1").value;
    let y=document.getElementById("add2").value;
    let so1=parseFloat(x);
    let so2=parseFloat(y);
    let sub=so1-so2;
    document.getElementById("result").innerText="Subtraction: "+sub;
}
function multiplication(){
    let x=document.getElementById("add1").value;
    let y=document.getElementById("add2").value;
    let so1=parseFloat(x);
    let so2=parseFloat(y);
    let multi=so1*so2;
    document.getElementById("result").innerText="Multiplication: "+multi;
}
function division(){
    let x=document.getElementById("add1").value;
    let y=document.getElementById("add2").value;
    let so1=parseFloat(x);
    let so2=parseFloat(y);
    let div=so1/so2;
    document.getElementById("result").innerText="Division: "+div;
}