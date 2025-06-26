import { pegarLink } from "../../lib/pegarLinks.js"

async function preencherComentarios() {
    const chave_loja = sessionStorage.getItem("loja_selecionada")
    const nome_loja = sessionStorage.getItem("nome_loja_selecionada")
    const links = await pegarLink(chave_loja)
    
    document.getElementById("titulo").textContent = nome_loja

    preencherIframe(links, "30_dias")
    preencherIframe(links, "detratores")
    preencherIframe(links, "neutros")
    preencherIframe(links, "promotores")
}

function preencherIframe(links, id) {
    const iframe = document.getElementById(id)
    iframe.src = links.comentarios[id]
    iframe.style.marginInline = "1rem"
}

document.addEventListener("DOMContentLoaded", () => {
    preencherComentarios()
})

const voltar = document.getElementById("voltar")

voltar.addEventListener("click", () => {
    window.location.href = "../info_geral/info_geral.html"
})