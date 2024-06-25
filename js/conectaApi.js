async function listaProdutos() {
    const conexao = await fetch ("http://localhost:3000/Produtos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaProduto(nome, preco, imagem) {
    debugger;
    const conexao = await fetch("http://localhost:3000/Produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            imagem: imagem
        })
    });

    if (!conexao.ok) {
        throw new Error("Erro ao criar produto");
    }

    const conexaoConvertida = await conexao.json();
    console.log("Produto Criado:", conexaoConvertida);
    return conexaoConvertida;
}




async function deletaProduto(id) {
    const conexao = await fetch(`http://localhost:3000/Produtos/${id}`, {
        method: "DELETE"
    });

    if (!conexao.ok) {
        throw new Error("Não foi possível deletar o produto");
    }
}

export const conectaApi = {
    listaProdutos,
    criaProduto,
    deletaProduto
}





