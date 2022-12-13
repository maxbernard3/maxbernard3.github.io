console.log("is loaded")
var loca = document.getElementById("location")
var vk = false

loca.ontouchstart = function () {
    loca.focus();
    document.getElementsByClassName("header")[0].style.display = "none";
    document.getElementsByClassName("footer")[0].style.display = "none";
    document.getElementById("calendar_btn").style.display = "none";
    document.getElementsByClassName("container_santa")[0].style.justifyContent = "start";
    document.getElementsByClassName("inputs")[0].style.marginTop = "2vh";

    A = true;
}

window.onresize = function () {
    if(vk){
        document.getElementsByClassName("header")[0].style.display = "flex";
        document.getElementById("calendar_btn").style.display ="flex";
        document.getElementsByClassName("footer")[0].style.display = "flex";
        document.getElementsByClassName("container_santa")[0].style.justifyContent = "center";
    } 
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}