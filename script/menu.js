const btn = document.getElementById("colapsed");
const menu = document.getElementById("dropdownmenu");

var a = new Boolean(true);

btn.onclick = function () {
    if (menu.style.display === "none") {
        menu.style.display = "block";

    } else {
        menu.style.display = "none";
    }
};