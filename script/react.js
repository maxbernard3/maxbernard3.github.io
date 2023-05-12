const about = document.getElementById("aboutme");
const resum = document.getElementById("resume");
const portf = document.getElementById("portfolio");
const conta = document.getElementById("contact");

const aboutBtn = document.getElementById("about-li");
const resumBtn = document.getElementById("resume-li");
const portfBtn = document.getElementById("portfolio-li");
const contaBtn = document.getElementById("contact-li");
const aboutBtn2 = document.getElementById("about-li2");
const resumBtn2 = document.getElementById("resume-li2");
const portfBtn2 = document.getElementById("portfolio-li2");
const contaBtn2 = document.getElementById("contact-li2");

resum.style.display = "none";
portf.style.display = "none";
conta.style.display = "none";

function contact() {
    aboutBtn.classList.remove("curent");
    portfBtn.classList.remove("curent");
    resumBtn.classList.remove("curent");
    contaBtn.classList.add("curent");

    aboutBtn2.classList.remove("curent");
    portfBtn2.classList.remove("curent");
    resumBtn2.classList.remove("curent");
    contaBtn2.classList.add("curent");

    resum.style.display = "none";
    portf.style.display = "none";
    about.style.display = "none";
    conta.style.display = "flex";
};

function resume() {
    aboutBtn.classList.remove("curent");
    portfBtn.classList.remove("curent");
    resumBtn.classList.add("curent");
    contaBtn.classList.remove("curent");

    aboutBtn2.classList.remove("curent");
    portfBtn2.classList.remove("curent");
    resumBtn2.classList.add("curent");
    contaBtn2.classList.remove("curent");

    resum.style.display = "flex";
    portf.style.display = "none";
    about.style.display = "none";
    conta.style.display = "none";
};

function aboutF() {
    aboutBtn.classList.add("curent");
    portfBtn.classList.remove("curent");
    resumBtn.classList.remove("curent");
    contaBtn.classList.remove("curent");

    aboutBtn2.classList.add("curent");
    portfBtn2.classList.remove("curent");
    resumBtn2.classList.remove("curent");
    contaBtn2.classList.remove("curent");

    resum.style.display = "none";
    portf.style.display = "none";
    about.style.display = "flex";
    conta.style.display = "none";
};

function portfolio() {
    aboutBtn.classList.remove("curent");
    portfBtn.classList.add("curent");
    resumBtn.classList.remove("curent");
    contaBtn.classList.remove("curent");

    aboutBtn2.classList.remove("curent");
    portfBtn2.classList.add("curent");
    resumBtn2.classList.remove("curent");
    contaBtn2.classList.remove("curent");

    resum.style.display = "none";
    portf.style.display = "flex";
    about.style.display = "none";
    conta.style.display = "none";
}; 

contaBtn.onclick = contact;
contaBtn2.onclick = contact;

resumBtn.onclick = resume;
resumBtn2.onclick = resume;

aboutBtn.onclick = aboutF;
aboutBtn2.onclick = aboutF;

portfBtn.onclick = portfolio;
portfBtn2.onclick = portfolio;