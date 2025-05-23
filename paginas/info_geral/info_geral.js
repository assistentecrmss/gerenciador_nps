import links from "../../db/links.json" with {type: 'json'}
import lojas from "../../db/lojas.json" with {type: 'json'}

function preencherInfoGeral() {
    const chave_loja = sessionStorage.getItem("loja_selecionada")

    document.getElementById("titulo").textContent = lojas[chave_loja]

    criarRespostas(chave_loja)

    criarNpsAtual(chave_loja)

    const preferencia = document.createElement("img")
    preferencia.src = links[chave_loja].preferencias
    preferencia.classList.add("indicador_setor")
    document.getElementById("preferencias").appendChild(preferencia)

}

function criarRespostas(chave_loja) {
    const resp_atual = document.createElement("img")
    resp_atual.src = links[chave_loja].respostas.atual
    resp_atual.classList.add("indicador_setor")
    document.getElementById("respostas").appendChild(resp_atual)

    const resp_anterior = document.createElement("img")
    resp_anterior.src = links[chave_loja].respostas.anterior
    resp_anterior.classList.add("indicador_setor")
    document.getElementById("respostas").appendChild(resp_anterior)

    const resp_total = document.createElement("img")
    resp_total.src = links[chave_loja].respostas.total
    resp_total.classList.add("indicador_setor")
    document.getElementById("respostas").appendChild(resp_total)
}
function criarNpsAtual(chave_loja) {
    const nps_atual = document.createElement("img")
    nps_atual.src = links[chave_loja].nps.atual
    nps_atual.classList.add("indicador_setor")
    document.getElementById("nps_atual").appendChild(nps_atual)

    const variacao = document.createElement("img")
    variacao.src = links[chave_loja].nps.variacao
    variacao.classList.add("indicador_setor")
    variacao.style.width="100%"
    document.getElementById("nps_atual").appendChild(variacao)
}

document.addEventListener("DOMContentLoaded", () => {
    preencherInfoGeral()
})

const voltar = document.getElementById("voltar")
voltar.addEventListener("click", () => {
    window.location.href = "../lojas/lojas.html"
})