/*

OBJETIVO 1- Quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o vídeo do trailer

OBJETIVO 2- Quando o usuário clicar no X, devemos fechar 
------------------------------------------------------------------------------------------------------------

OBJETIVO 1- Quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o vídeo do trailer
    - passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o JS

    const botaoTrailer = document.querySelector(".botao-trailer")

    - passo 2 - dar um jeito de identificar quando o usuário clicar no botão

    botaoTrailer.addEventListener("click", () => {
        alternarModal();
        video.setAttribute("src", linkDoVideo)
})
    
    - passo 3 - dar um jeito de pegar o elemento da modal no js
    - passo 4 - abrir a modal na tela

OBJETIVO 2- Quando o usuário clicar no X, devemos fechar 
    - passo 1 - dar um jeito de pegar o elemento de fechar o modal usando js
    - passo 2 - dar um jeito de identificar quado o usuário clicar no X
    - passo 3 - fechar a modal
*/

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}
botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo)
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
})




