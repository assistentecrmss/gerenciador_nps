import { pegarLink } from "../../lib/pegarLinks.js"

async function preencherProdutosFaltantes(){
    const chave_loja = sessionStorage.getItem("loja_selecionada")
    const nome_loja = sessionStorage.getItem("nome_loja_selecionada")

    const links = await pegarLink(chave_loja)

    document.getElementById("titulo").textContent = nome_loja

    criarGrafico(links)
    criarTabela(links)
}

function criarGrafico(links){
    const grafico=document.getElementById("imagem")
    grafico.src=links.produtos.grafico
}
function criarTabela(links){
    const iframe=document.getElementById("tabela")
    iframe.src=links.produtos.tabela
}

document.addEventListener("DOMContentLoaded", () => {
    preencherProdutosFaltantes()
})

const voltar = document.getElementById("voltar")

voltar.addEventListener("click", () => {
    window.location.href = "../info_geral/info_geral.html"
})