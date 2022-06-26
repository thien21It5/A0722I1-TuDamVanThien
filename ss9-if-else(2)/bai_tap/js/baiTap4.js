let objHinh1  = document.getElementById('hinh1');
let objHinh2  = document.getElementById('hinh2');
let objHinh3  = document.getElementById('hinh3');
let objHinh4  = document.getElementById('hinh4');
let objHinh5  = document.getElementById('hinh5');

function changeImg(value){
    let srcHinh1 = objHinh1.getAttribute("src");
    let srcHinh2 = objHinh2.getAttribute("src");
    let srcHinh3 = objHinh3.getAttribute("src");
    let srcHinh4 = objHinh4.getAttribute("src");
    let srcHinh5 = objHinh5.getAttribute("src");
    switch (value){
        case 1:
            if(srcHinh1 === "image/cat1.jpg"){
                objHinh1.src ="image/monkey1.jpg"
            }else if(srcHinh1 ==="image/monkey1.jpg"){
                objHinh1.src ="image/panda1.jpg"
            }else{
                objHinh1.src ="image/cat1.jpg"
            }
            break;
        case 2:
            if(srcHinh2 === "image/cat2.jpg"){
                objHinh2.src ="image/monkey2.jpg"
            }else if(srcHinh2 ==="image/monkey2.jpg"){
                objHinh2.src ="image/panda2.jpg"
            }else{
                objHinh2.src ="image/cat2.jpg"
            }
            break;
        case 3:
            if(srcHinh3 === "image/cat3.jpg"){
                objHinh3.src ="image/monkey3.jpg"
            }else if(srcHinh3 ==="image/monkey3.jpg"){
                objHinh3.src ="image/panda3.jpg"
            }else{
                objHinh3.src ="image/cat3.jpg"
            }
            break;
        case 4:
            if(srcHinh4 === "image/cat4.jpg"){
                objHinh4.src ="image/monkey4.jpg"
            }else if(srcHinh4 ==="image/monkey4.jpg"){
                objHinh4.src ="image/panda4.jpg"
            }else{
                objHinh4.src ="image/cat4.jpg"
            }
            break;
        case 5:
            if(srcHinh5 === "image/cat5.jpg"){
                objHinh5.src ="image/monkey5.jpg"
            }else if(srcHinh5 ==="image/monkey5.jpg"){
                objHinh5.src ="image/panda5.jpg"
            }else{
                objHinh5.src ="image/cat5.jpg"
            }
            break;
    }
    checkResult();
}

    function checkResult(){
        if(objHinh1.getAttribute("src") === "image/cat1.jpg"  && objHinh2.getAttribute("src") === "image/cat2.jpg" && objHinh3.getAttribute("src") === "image/cat3.jpg" && objHinh4.getAttribute("src") === "image/cat4.jpg" && objHinh5.getAttribute("src") === "image/cat5.jpg"){
            objHinh1.style.border = "4px red solid";
            objHinh2.style.border = "4px red solid";
            objHinh3.style.border = "4px red solid";
            objHinh4.style.border = "4px red solid";
            objHinh5.style.border = "4px red solid";
        }else if(objHinh1.getAttribute("src") === "image/monkey1.jpg"  && objHinh2.getAttribute("src") === "image/monkey2.jpg" && objHinh3.getAttribute("src") === "image/monkey3.jpg" && objHinh4.getAttribute("src") === "image/monkey4.jpg" && objHinh5.getAttribute("src") === "image/monkey5.jpg"){
            objHinh1.style.border = "4px red solid";
            objHinh2.style.border = "4px red solid";
            objHinh3.style.border = "4px red solid";
            objHinh4.style.border = "4px red solid";
            objHinh5.style.border = "4px red solid";
        }else if(objHinh1.getAttribute("src") === "image/panda1.jpg"  && objHinh2.getAttribute("src") === "image/panda2.jpg" && objHinh3.getAttribute("src") === "image/panda3.jpg" && objHinh4.getAttribute("src") === "image/panda4.jpg" && objHinh5.getAttribute("src") === "image/panda5.jpg") {
            objHinh1.style.border = "4px red solid";
            objHinh2.style.border = "4px red solid";
            objHinh3.style.border = "4px red solid";
            objHinh4.style.border = "4px red solid";
            objHinh5.style.border = "4px red solid";
        }else{
            objHinh1.style.border = "4px white solid";
            objHinh2.style.border = "4px white solid";
            objHinh3.style.border = "4px white solid";
            objHinh4.style.border = "4px white solid";
            objHinh5.style.border = "4px white solid";
        }
    }