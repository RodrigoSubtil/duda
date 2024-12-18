// ---- PLANOS ------------------------------------------------------------------------------------

// circulos -------------

const container = document.querySelector(".secao__planos--circulos"); // Seleciono a classe do html onde vou por

function createCircle() {
    let circle = document.createElement('span'); // Cria o elemento <span> pra ser adicionado a div
    circle.classList.add("circle"); // Adiciona a classe estilizada
    container.appendChild(circle); // Adiciona o círculo pra dentro da div do html
}

createCircle();
createCircle();

// mouse -------------

let solucoes = document.querySelectorAll(".secao__planos__opcoes--individuais");
let fundo = document.querySelector(".secao__planos--conteudo");

let indexSolucoes = 0;

function atualizarSolucoes() { //atualiza o carrosel
    solucoes.forEach(solucoes => { //faz um ciclo for com todos
        solucoes.style.display = "none";
    });

    if (indexSolucoes === 0) {
        solucoes[0].style.display = "block";
        solucoes[1].style.display = "block";
        solucoes[2].style.display = "block";
    } else {
        solucoes[3].style.display = "block";
        solucoes[4].style.display = "block";
    }
    console.log(`Grupo ativo: ${indexSolucoes}`);
}

fundo.addEventListener("mousemove", alterar);

function alterar(event) {
    let largura = fundo.getBoundingClientRect(); // Dimensões do contêiner
    let mouseX = event.clientX - largura.left; // clientX sozinho mede a posição do mouse em relação à janela inteira
    let larguraQuinto = largura.width / 5; // Um quinto da largura do contêiner

    console.log(`Largura do contêiner: ${largura.width}`);
    console.log(`Posição do mouse no contêiner: ${mouseX}`);
    console.log(`Um quinto da largura: ${larguraQuinto}`);

    //  mais à direita
    if (mouseX > larguraQuinto * 4 && indexSolucoes !== 1) {
        indexSolucoes = 1; // Muda para o grupo 4 e 5
        container.children[0].style.background = "transparent"; // Reseta o primeiro círculo
        container.children[1].style.background = "black"; // Muda o fundo do segundo círculo
        atualizarSolucoes();

    // mais à esquerda
    } else if (mouseX <= larguraQuinto && indexSolucoes !== 0) { //parte mais a esquerda !==0 faz atua
        indexSolucoes = 0; // Muda para o grupo 1, 2 e 3
        container.children[0].style.background = "black"; // Muda o fundo do primeiro círculo
        container.children[1].style.background = "transparent"; // Reseta o segundo círculo
        atualizarSolucoes();
    }
}

atualizarSolucoes();

// ---- FORM ------------------------------------------------------------------------------------
let checkbox = document.querySelector("input[type='checkbox']"); // Seleciona a checkbox fora do formulário
let enviar = document.querySelector("#enviar"); // Seleciona o botão de envio
let informacoes = document.querySelectorAll("form input"); // Pega todos os campos de entrada dentro do formulário

let camposInvalidos = []; // Lista de dados que não foram preenchidos
let dados = {}; // Cria um objeto para armazenar os dados do formulário

function informacoesAtualizar() {
    camposInvalidos = []; // Limpa a lista de campos inválidos a cada chamada
    dados = {}; // Limpa os dados a cada chamada

    informacoes.forEach(informacoes => { //faz um ciclo for com todos

        if (!informacoes.value) { // Verifica se o campo não foi preenchido
            camposInvalidos.push(informacoes.name); // Adiciona o campo à lista de inválidos
            //amposInvalidos.push(informacoes.name) é adicionar o nome do campo ao array camposInvalidos quando o campo não foi preenchido corretamente ou não foi preenchido

        } else {
            dados[informacoes.name] = informacoes.value; // Cria chave (input.name) e valor (input.value)
        }
    });

    if (checkbox.checked) {
        dados.permitir = 'Sim';
    } else {
        dados.permitir = 'Não';
    }

}

enviar.addEventListener("click", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    informacoesAtualizar(); //valida os dados somente após o clique

    if (camposInvalidos.length > 0) {
        alert(`Campos obrigatórios não preenchidos`);
    } else {
        // Exibe o alerta com os dados
        alert(
            `Formulário enviado com sucesso!\n
            Nome: ${dados.nome}
            Email: ${dados.email}
            Telefone: ${dados.telefone}
            Número de pessoas: ${dados.numero}
            Aceitou receber novidades: ${dados.permitir}`);
    }
});


