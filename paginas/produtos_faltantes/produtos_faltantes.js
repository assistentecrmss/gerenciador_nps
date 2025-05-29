import links from "../../db/links.json" with {type: 'json'}
import lojas from "../../db/lojas.json" with {type: 'json'}

function preencherProdutosFaltantes(){
    const chave_loja = sessionStorage.getItem("loja_selecionada")

    document.getElementById("titulo").textContent = lojas[chave_loja]

    criarGrafico(chave_loja)
    criarTabela(chave_loja)
}

function criarGrafico(chave_loja){
    const grafico=document.getElementById("imagem")
    grafico.src=links[chave_loja].produtos.grafico
}
function criarTabela(chave_loja){
    const iframe=document.getElementById("tabela")
    iframe.src=links[chave_loja].produtos.tabela
}

document.addEventListener("DOMContentLoaded", () => {
    preencherProdutosFaltantes()
})

const voltar = document.getElementById("voltar")

voltar.addEventListener("click", () => {
    window.location.href = "../info_geral/info_geral.html"
})