let objHinh1  = document.getElementById('hinh1');
let objHinh2  = document.getElementById('hinh2');
let objHinh3  = document.getElementById('hinh3');
let objHinh4  = document.getElementById('hinh4');
let objHinh5  = document.getElementById('hinh5');

function ani1(hinh){
    switch (hinh){
        case 1:
            if(objHinh1.getAttribute('src')=== 'cat1.jpg'){
                objHinh1.src ="monkey1.jpg"
            }else if(objHinh1.getAttribute('src')==='monkey1.jpg'){
                objHinh1.src ="panda1.jpg"
            }else{
                objHinh1.src ="cat1.jpg"
            }
            break;
        case 2:
            if(objHinh1.getAttribute('src')=== 'cat2.jpg'){
                objHinh1.src ="monkey2.jpg"
            }else if(objHinh1.getAttribute('src')==='monkey2.jpg'){
                objHinh1.src ="panda2.jpg"
            }else{
                objHinh1.src ="cat2.jpg"
            }
            break;
    }
}