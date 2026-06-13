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