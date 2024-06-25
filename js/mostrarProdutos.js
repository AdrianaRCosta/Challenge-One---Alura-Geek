
import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(id, nome, preco, imagem) {
    const Produto = document.createElement("li");
    Produto.className = "produto-card";
    Produto.innerHTML = `
        <img src="${imagem}" alt="${nome}"/>
        <div class="descricao">
            <div class="card-valor">
                <p>${nome}</p>
                <p>R$ ${preco}</p>
            </div> 
            <button class="delete-btn" data-id="${id}">
                <img src="./img/delete.png" alt="delete">
            </button>
        </div>
    `;

    Produto.querySelector(".delete-btn").addEventListener("click", () => DeletaProduto(id, Produto));

    return Produto;
}

async function listaProduto() {
    try {
        const listaApi = await conectaApi.listaProdutos();
        listaApi.forEach(elemento => lista.appendChild(
            constroiCard(elemento.id, elemento.nome, elemento.preco, elemento.imagem)
        ));
    } catch {
        lista.innerHTML = `<h2 class="mensagem_titulo">Não foi possível carregar a lista de produtos</h2>`
    }
}

async function DeletaProduto(id, Produto) {
    try {
        await conectaApi.deletaProduto(id);
        Produto.remove();
        alert("Produto deletado com sucesso!");
    } catch (error) {
        console.error("Erro ao deletar o produto:", error);
        alert("Erro ao deletar o produto.");
    }
};

listaProduto();

