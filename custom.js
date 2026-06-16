const imagens = [

    "IMG/foto1.jpeg",
    "IMG/foto2.jpeg",
    "IMG/foto3.jpeg",
    "IMG/foto4.jpeg",
    "IMG/foto5.jpeg",
    "IMG/foto6.jpeg",
    "IMG/foto7.jpeg",
    "IMG/foto8.jpeg",
    "IMG/foto9.jpeg",
    "IMG/foto10.jpeg",
    "IMG/foto11.jpeg"

];

let indice = 0;

const imagem = document.getElementById("carousel-img");

setInterval(() => {

    imagem.classList.add("fade");

    setTimeout(() => {

        indice = (indice + 1) % imagens.length;

        imagem.src = imagens[indice];

        imagem.classList.remove("fade");

    }, 500);

}, 4000);

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show-element");

        }

    });

});

hiddenElements.forEach((element) => {

    observer.observe(element);

});
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        themeToggle.innerHTML =
        '<i class="fas fa-sun"></i>';

    }else{

        themeToggle.innerHTML =
        '<i class="fas fa-moon"></i>';

    }

});