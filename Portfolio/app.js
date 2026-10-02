//alert("Olá Mundo")
var meuTitulo = document.getElementById("Cabecalho");
let botaoSimples = document.getElementById("modoEscuro");

let oFundoEstaClaro = false;

botaoSimples.onclick = trocaClasse

function trocaClasse() {
    if (oFundoEstaClaro == false){
        meuTitulo.classList.remove("fundoEscuro");
        meuTitulo.classList.add("fundoClaro");

        oFundoEstaClaro = true
    } else {
        meuTitulo.classList.add("fundoEscuro");
        meuTitulo.classList.remove("fundoClaro");

        oFundoEstaClaro = false;
    }
}