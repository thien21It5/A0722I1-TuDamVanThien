//Khai báo các biến để nhận giá trị chiều cao và chiều rộng từ người dùng.
let inputWidth = prompt("Nhập chiều rộng HCN: ");
let inputHeight = prompt("Nhập chiều cao HCN: ");
//Sử dụng hàm parseInt() để chuyển kiểu dữ liệu từ chuỗi sang số nguyên.
let width = parseInt(inputWidth);
let height = parseInt(inputHeight);
//Tính diện tích và chu vi hình chữ nhật và xuất ra màn hình
let perimeter =(width+height)*2;
let area =width*height;
document.write("Chu vi HCN: "+perimeter);
document.write("<br>");
document.write("Diện tích HCN: "+area);