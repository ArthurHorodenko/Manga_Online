// listar paginas

const pages = [
    "./Assets/dragon-ball-vol-1-s Capa.jpg",
    "./Assets/1.jpg",
    "./Assets/2.jpg",
    "./Assets/3.jpg",
    "./Assets/4.jpg",
    "./Assets/5.jpg",
    "./Assets/6.jpg",
    "./Assets/7.jpg",
    "./Assets/8.jpg",
    "./Assets/9.jpg",
    "./Assets/10.jpg",
    "./Assets/11.jpg",
    "./Assets/12.jpg",
    "./Assets/13.jpg",
    "./Assets/14.jpg",
    "./Assets/15.jpg",
    "./Assets/16.jpg",
    "./Assets/17.jpg",
    "./Assets/18.jpg",
    "./Assets/19.jpg",
    "./Assets/20.jpg",
    "./Assets/21.jpg",
    "./Assets/22.jpg",
    "./Assets/23.jpg",
    "./Assets/24.jpg",
    "./Assets/25.jpg",
    "./Assets/26.jpg",
    "./Assets/27.jpg",
    "./Assets/28.jpg",
    "./Assets/29.jpg",
    "./Assets/30.jpg",
    "./Assets/31.jpg",
];

// Estado da aplicação
let currentpageindex = 0;

// Seleção dos elementos do DOM
const imgElements = document.getElementById("manga-page");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const pageCounter = document.getElementById("page-counter");

// Função para atualizar a página
function updateReader() {
    imgElements.src = pages[currentpageindex];

    pageCounter.textContent = `Página ${currentpageindex + 1} de ${pages.length}`;

    // Estado dos botões
    btnPrev.disabled = currentpageindex === 0;
    btnNext.disabled = currentpageindex === pages.length - 1;
}

// Clique no botão anterior
btnPrev.addEventListener("click", () => {
    if (currentpageindex > 0) {
        currentpageindex--;
        updateReader();
    }
});

// Clique no botão próxima
btnNext.addEventListener("click", () => {
    if (currentpageindex < pages.length - 1) {
        currentpageindex++;
        updateReader();
    }
});

// Atualiza a página inicial
updateReader();

// Controle pelas setas do teclado
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && currentpageindex > 0) {
        currentpageindex--;
        updateReader();
    } else if (
        event.key === "ArrowRight" &&
        currentpageindex < pages.length - 1
    ) {
        currentpageindex++;
        updateReader();
    }
});
