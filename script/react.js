about = document.getElementById("aboutme");
resum = document.getElementById("resume");
portf = document.getElementById("portfolio");
conta = document.getElementById("contact");

aboutBtn = document.getElementById("about-li");
resumBtn = document.getElementById("resume-li");
portfBtn = document.getElementById("portfolio-li");
contaBtn = document.getElementById("contact-li");

resum.style.display = "none";
portf.style.display = "none";
conta.style.display = "none"


contaBtn.onclick = function(){
    aboutBtn.classList.remove("curent");
    portfBtn.classList.remove("curent");
    resumBtn.classList.remove("curent");
    contaBtn.classList.add("curent");

    resum.style.display = "none";
    portf.style.display = "none";
    about.style.display = "none";
    conta.style.display = "flex";
};

resumBtn.onclick = function(){
    aboutBtn.classList.remove("curent");
    portfBtn.classList.remove("curent");
    resumBtn.classList.add("curent");
    contaBtn.classList.remove("curent");

    resum.style.display = "flex";
    portf.style.display = "none";
    about.style.display = "none";
    conta.style.display = "none";
};

aboutBtn.onclick = function(){
    aboutBtn.classList.add("curent");
    portfBtn.classList.remove("curent");
    resumBtn.classList.remove("curent");
    contaBtn.classList.remove("curent");

    resum.style.display = "none";
    portf.style.display = "none";
    about.style.display = "flex";
    conta.style.display = "none";
}; 

portfBtn.onclick = function(){
    aboutBtn.classList.remove("curent");
    portfBtn.classList.add("curent");
    resumBtn.classList.remove("curent");
    contaBtn.classList.remove("curent");

    resum.style.display = "none";
    portf.style.display = "flex";
    about.style.display = "none";
    conta.style.display = "none";
}; 