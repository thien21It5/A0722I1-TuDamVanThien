//Nhập giá trị
function num(value){
    document.getElementById('result').value += value;
}
// Xóa các giá trị
function del(){
    document.getElementById('result').value="";
}
//
function cal(){
    let x = document.getElementById('result').value;

    document.getElementById("result").value = eval(x)
}