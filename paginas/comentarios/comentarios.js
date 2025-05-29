import links from "../../db/links.json" with {type: 'json'}
import lojas from "../../db/lojas.json" with {type: 'json'}

function preencherComentarios(){
    const chave_loja = sessionStorage.getItem("loja_selecionada")

    document.getElementById("titulo").textContent = lojas[chave_loja]

    preencherIframe(chave_loja,"30_dias")
    preencherIframe(chave_loja,"detratores")
    preencherIframe(chave_loja,"neutros")
    preencherIframe(chave_loja,"promotores")
}

function preencherIframe(chave_loja,id){
    const iframe=document.getElementById(id)
    iframe.src=links[chave_loja].comentarios[id]
    iframe.style.marginInline="1rem"
}

document.addEventListener("DOMContentLoaded", () => {
    preencherComentarios()
})

const voltar = document.getElementById("voltar")

voltar.addEventListener("click", () => {
    window.location.href = "../info_geral/info_geral.html"
})