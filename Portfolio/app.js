//alert("Olá Mundo")
var meuTitulo = document.getElementById(Titulo)
let botaoSimples = document.getElementById("simples")

let oFundoEstaescuro = false;

botaoSimples.onclick = trocaClasse

function trocaClasse () {
    if (oFundoEstaescuro == false) {
        meuTitulo.classList.remove("body")
        meuTitulo.classList.add("modoEscuro");

        oFundoEstaescuro = true;
    } else { 
        meuTitulo.classList.add("apres")
        meuTitulo.classList.remove("modoEscuro")
    }
}