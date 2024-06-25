import { conectaApi } from "./conectaApi.js";

const formulario = document.getElementById("data-formulario");

async function criarProduto(evento) {
    evento.preventDefault();
    debugger;
    const nome = document.querySelector("[data-nome]").value;
    const preco = document.querySelector("[data-preco]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    try {
        await conectaApi.criaProduto(nome, preco, imagem); 
        alert("Produto criado com sucesso!");
        location.reload(); 
    } catch (error) {
        console.error("Erro ao criar o produto:", error);
        alert("Erro ao criar o produto.");
    }
};

formulario.addEventListener("submit", evento => criarProduto(evento));