//alert("Olá Mundo")
var meuTitulo = document.getElementById("Cabecalho");
let botaoSimples = document.getElementById("modoEscuro");

// Começa como 'true' porque a página inicia no Modo Claro
let oFundoEstaClaro = true;

botaoSimples.onclick = trocaClasse;

function trocaClasse() {
    if (oFundoEstaClaro == true) {
        // Se está claro, muda para escuro
        meuTitulo.classList.remove("fundoClaro");
        meuTitulo.classList.add("fundoEscuro");

        oFundoEstaClaro = false;
    } else {
        // Se está escuro, muda para claro
        meuTitulo.classList.add("fundoClaro");
        meuTitulo.classList.remove("fundoEscuro");

        oFundoEstaClaro = true;
    }
}