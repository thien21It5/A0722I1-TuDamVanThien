function convert(){
 let arrCurr=["0-1", "1-0"];
 let arrRatio=[0.000043, 23230];
 let input=document.getElementById("inp").value;
 let fromCurr=document.getElementById("nation").value;
 let toCurr=document.getElementById("current").value;
 if(fromCurr == toCurr){
  document.getElementById("result").innerText=input;

 }else {
  let temp = fromCurr + "-" + toCurr;
  for (let i = 0; i <= arrCurr.length; i++) {
   if (temp == arrCurr[i]) {
    document.getElementById("result").innerText = input * arrRatio[i];
   }
  }
 }
}