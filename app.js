function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase(); // Corrigir para evitar espaços e garantir consistência
    
    if (campoPesquisa === "") {
        section.innerHTML = "<p>Nada foi encontrado</p>";
        return;
    }

    let resultados = ""; // Inicia a variável para armazenar resultados

    for (let dado of dados) {
        let Titulo = dado.Titulo.toLowerCase();
        let Descrição = dado.Descrição.toLowerCase();
        let Link = dado.Link; // Não alterar o link para minúsculas

        // Verifica se o campo de pesquisa está em algum campo dos dados
        if (Titulo.includes(campoPesquisa) || Descrição.includes(campoPesquisa) || Link.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2><a href="${dado.Link}" target="_blank">${dado.Titulo}</a></h2>
                <p class="descricao-meta">${dado.Descrição}</p>
                <a href="${dado.Link}" target="_blank">Vídeo com a execução correta</a>
            </div>
            `;
        }
    }

    // Se não houver resultados, exibe a mensagem apropriada
    if (resultados === "") {
        section.innerHTML = "<p>Nenhum resultado encontrado</p>";
    } else {
        section.innerHTML = resultados;
    }
}
    
    