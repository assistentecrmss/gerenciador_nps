import lojas from "../../db/lojas.json" with {type: 'json'}
import { pegarLink } from "../../lib/pegarLinks.js"

async function preencherHistoricoSetores() {
    const chave_loja = sessionStorage.getItem("loja_selecionada")
    const links = await pegarLink(chave_loja)

    document.getElementById("titulo").textContent = lojas[chave_loja]

    criarHistoricoSetor(chave_loja, "espera",links)
    criarHistoricoSetor(chave_loja, "hortifruti",links)
    criarHistoricoSetor(chave_loja, "climatizacao",links)
    criarHistoricoSetor(chave_loja, "limpeza",links)
    criarHistoricoSetor(chave_loja, "atendimento",links)
    criarHistoricoSetor(chave_loja, "acogue",links)

}

function criarHistoricoSetor(chave_loja, setor,links) {
    const container_historico = document.getElementById("setores")

    const container_setor = document.createElement("div")
    container_setor.classList.add("horizontal")
    container_setor.style.marginInline = "2rem"

    const historico = document.createElement("img")
    historico.src = links[setor].historico
    const indicador = document.createElement("img")
    indicador.src = links[setor].indicador

    if (chave_loja == "l_0") {
        const container_geral = document.createElement("div")
        container_geral.classList.add("vertical")
        container_geral.style.border = "none"
        container_geral.style.width="50%"
        container_geral.style.boxShadow="none"

        historico.style.maxWidth="90%"
        indicador.style.maxWidth="50%"

        container_geral.appendChild(historico)
        container_geral.appendChild(indicador)

        container_setor.appendChild(container_geral)

        const ranking=document.createElement("iframe")
        ranking.src=links[setor].ranking
        ranking.width="480"
        ranking.height="650"
        ranking.frameBorder="0"

        container_setor.appendChild(ranking)
    } else {
        container_setor.appendChild(indicador)

        container_setor.appendChild(historico)
    }

    container_historico.appendChild(container_setor)
}

const voltar = document.getElementById("voltar")

voltar.addEventListener("click", () => {
    window.location.href = "../info_geral/info_geral.html"
})

document.addEventListener("DOMContentLoaded", () => {
    preencherHistoricoSetores()
})