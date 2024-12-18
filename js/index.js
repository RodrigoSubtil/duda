// ---- CLIENTES BOTÃO ------------------------------------------------------------------------------------

let botaoAnterior = document.querySelector("#anterior");
let botaoProximo = document.querySelector("#proximo");
let pessoas = document.querySelectorAll(".secao__clientes__pessoas--individuais"); //pega os tres mas individualmente
let isMobile = window.innerWidth <= 768; // Verifica se é tela menor ou igual a 768px

let index = 0; // Índice da primeira pessoa

function atualizar() { //atualiza o carrosel
    pessoas.forEach(pessoas => { //faz um ciclo for com todos
        pessoas.style.display = "none";
    });

    if (isMobile) {
        pessoas[index].style.display = "block"; //mostra um por um
    } else {
        if (index === 0) {
            pessoas[0].style.display = "block";
            pessoas[1].style.display = "block";
            console.log("Exibindo clientes 1 e 2");
        } else {
            pessoas[2].style.display = "block";
            console.log("Exibindo cliente 3");

        }
    }
}

botaoAnterior.addEventListener("click", function () {
    if (isMobile) {
        index = (index - 1 + pessoas.length) % pessoas.length;
        // (+ pessoas.length) Garante que, se o índice for negativo após o decremento, ele volte ao final da lista.
        // O operador de módulo (%) é usado para garantir que o índice final esteja dentro dos limites válidos (entre 0 e pessoas.length - 1).
    } else {
        index = (index === 1) ? 0 : 1;
    }
    atualizar();
});

botaoProximo.addEventListener("click", function () {
    if (isMobile) {
        index = (index + 1) % pessoas.length; // passa uma por uma
    } else {
        index = (index === 0) ? 1 : 0; // Se for 0, vai para 1, senão, fica no 0
    }
    atualizar();
    console.log(index)
});

atualizar(); // configurar o carrossel corretamente quando a página é carregada pela primeira vez.
window.addEventListener("resize", atualizar); // Atualiza ao redimensionar a janela

