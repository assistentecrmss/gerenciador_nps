import { pegarLink } from "../../lib/pegarLinks.js"

async function preencherHistoricoNPS(){
    const chave_loja = sessionStorage.getItem("loja_selecionada")
    const nome_loja = sessionStorage.getItem("nome_loja_selecionada")
    const links = await pegarLink(chave_loja)

    document.getElementById("titulo").textContent = nome_loja

    criarHistorico(links)
    criarDivisaoPublico(links)
    historicoPublico(links)

}

function criarHistorico(links){
    const container = document.createElement("div")
    container.classList.add("horizontal")
    container.style.padding="1rem"
    container.style.marginInline="1rem"

    const historico = document.createElement("img")
    historico.src=links.nps.historico
    container.appendChild(historico)

    const resp_total = document.createElement("img")
    resp_total.src = links.respostas.total
    container.appendChild(resp_total)

    document.getElementById("container").appendChild(container)

}

function criarDivisaoPublico(links){
    const container = document.createElement("div")
    container.classList.add("horizontal")
    container.style.padding="1rem"
    container.style.marginInline="1rem"
    
    const detrator = document.createElement("img")
    detrator.src=links.nps.detratores
    container.appendChild(detrator)

    const neutro = document.createElement("img")
    neutro.src=links.nps.neutros
    container.appendChild(neutro)

    const promotor = document.createElement("img")
    promotor.src=links.nps.promotores
    container.appendChild(promotor)

    document.getElementById("container").appendChild(container)

}
function historicoPublico(links){
    const historico = document.createElement("img")
    historico.src=links.nps.historico_tipo_cliente
    historico.classList.add("horizontal")
    historico.style.width="94%"
    document.getElementById("container").appendChild(historico)
}

const voltar = document.getElementById("voltar")

voltar.addEventListener("click", () => {
    window.location.href = "../info_geral/info_geral.html"
})

document.addEventListener("DOMContentLoaded", () => {
    preencherHistoricoNPS()
})