// ---- CLIENTES IMAGEM E NOME GERADO POR INFORMAÇÕES EXTERNAS ------------------------------------------------------------------------------------

let pessoasNome = document.querySelectorAll(".secao__clientes__pessoas--individuais h3");
let pessoasImagem = document.querySelectorAll(".secao__clientes__pessoas--individuais img");
let pessoasProfissao = document.querySelectorAll(".secao__clientes__pessoas--individuais h4");

function carregarClientes() {
    // A função fetch()  busca dados de uma URL fornecida

    fetch("https://randomuser.me/api/?results=3&nat=br") // retorna 3 pessoas aleatórias do Brasil (foto e nome)

        .then(function (cliente) { //.then é usado para processar a resposta da API
            return cliente.json(); //transforma os dados recebidos em formato json, em um objeto JavaScript
        })

        .then(function (json) {
            console.log(json); // imprime no console todo os dados do servidor API em formato json que foram convertido em objeto

            // os dados estão em um array chamado json.results
            // Cada item do array representa um cliente e contém informações como o nome (name) e a foto (picture).
            json.results.forEach((cliente, index) => {
                // Atualiza o nome do cliente no elemento correspondente
                if (pessoasNome[index]) {
                    pessoasNome[index].innerText = `${cliente.name.first} ${cliente.name.last}`;
                }

                if (pessoasImagem[index]) {
                    pessoasImagem[index].setAttribute("rc", `${cliente.picture.large}`);
                    pessoasImagem[index].setAttribute("alt", `imagem do cliente: ${cliente.name.first} ${cliente.name.last}`);
                }

                console.log(pessoasImagem[index].alt);
                console.log(cliente.name);
                console.log(index); // 0, 1, 2
            });
        });

}

function carregarProfissoes() {
    fetch("https://gist.githubusercontent.com/wallacemaxters/7863699e750a48fc2e283892738f8ca5/raw/01c7748c4e1f2e1471ea73423b8e49fec6b23eab/lista_cargos.json")

        .then(function (profissoes) {
            return profissoes.json();
        })

        .then(function (json) {
            //console.log(json);

                json.forEach((profissoes, index) => {
                    if (pessoasProfissao[index]) {
                        pessoasProfissao[index].innerText = `${profissoes}`;
                    }
                    console.log(pessoasProfissao[index]);
            });
        });
}

carregarClientes();
carregarProfissoes();

// ---- CLIENTES PROFISSÃO GERADO POR INFORMAÇÕES EXTERNAS ------------------------------------------------------------------------------------

