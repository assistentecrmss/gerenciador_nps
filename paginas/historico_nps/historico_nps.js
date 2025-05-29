import links from "../../db/links.json" with {type: 'json'}
import lojas from "../../db/lojas.json" with {type: 'json'}

function preencherHistoricoNPS(){
    const chave_loja = sessionStorage.getItem("loja_selecionada")

    document.getElementById("titulo").textContent = lojas[chave_loja]

    criarHistorico(chave_loja)
    criarDivisaoPublico(chave_loja)
    historicoPublico(chave_loja)

}

function criarHistorico(chave_loja){
    const container = document.createElement("div")
    container.classList.add("horizontal")
    container.style.padding="1rem"
    container.style.marginInline="1rem"

    const historico = document.createElement("img")
    historico.src=links[chave_loja].nps.historico
    container.appendChild(historico)

    const resp_total = document.createElement("img")
    resp_total.src = links[chave_loja].respostas.total
    container.appendChild(resp_total)

    document.getElementById("container").appendChild(container)

}

function criarDivisaoPublico(chave_loja){
    const container = document.createElement("div")
    container.classList.add("horizontal")
    container.style.padding="1rem"
    container.style.marginInline="1rem"
    
    const detrator = document.createElement("img")
    detrator.src=links[chave_loja].nps.detratores
    container.appendChild(detrator)

    const neutro = document.createElement("img")
    neutro.src=links[chave_loja].nps.neutros
    container.appendChild(neutro)

    const promotor = document.createElement("img")
    promotor.src=links[chave_loja].nps.promotores
    container.appendChild(promotor)

    document.getElementById("container").appendChild(container)

}
function historicoPublico(chave_loja){
    const historico = document.createElement("img")
    historico.src=links[chave_loja].nps.historico_tipo_cliente
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