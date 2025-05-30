import links from "../../db/links.json" with {type: 'json'}
import lojas from "../../db/lojas.json" with {type: 'json'}

function preencherInfoGeral() {
    const chave_loja = sessionStorage.getItem("loja_selecionada")

    document.getElementById("titulo").textContent = lojas[chave_loja]

    criarRespostas(chave_loja)
    criarNpsAtual(chave_loja)
    criarNpsTotal(chave_loja)

    criarPreferencias(chave_loja)

    criarBotaoHistoricoSetor()
    criarSetor(chave_loja, "espera")
    criarSetor(chave_loja, "hortifruti")
    criarSetor(chave_loja, "climatizacao")
    criarSetor(chave_loja, "limpeza")
    criarSetor(chave_loja, "atendimento")
    criarSetor(chave_loja, "acogue")

    if (chave_loja == "l_0") { document.getElementById("ranking_nps").style.display = "flex" }

}

function criarRespostas(chave_loja) {
    const container = document.getElementById("respostas")

    const resp_atual = document.createElement("img")
    resp_atual.src = links[chave_loja].respostas.atual
    resp_atual.classList.add("respostas")
    container.appendChild(resp_atual)

    const resp_anterior = document.createElement("img")
    resp_anterior.src = links[chave_loja].respostas.anterior
    resp_anterior.classList.add("respostas")
    container.appendChild(resp_anterior)

    const resp_total = document.createElement("img")
    resp_total.src = links[chave_loja].respostas.total
    resp_total.classList.add("respostas")
    container.appendChild(resp_total)
}
function criarNpsAtual(chave_loja) {
    const nps_atual = document.createElement("img")
    nps_atual.src = links[chave_loja].nps.atual
    nps_atual.classList.add("indicador_setor")
    document.getElementById("nps_atual").appendChild(nps_atual)

    const variacao = document.createElement("img")
    variacao.src = links[chave_loja].nps.variacao
    variacao.classList.add("indicador_setor")
    variacao.style.width = "100%"
    document.getElementById("nps_atual").appendChild(variacao)
}
function criarNpsTotal(chave_loja) {
    const nps_total = document.createElement("img")
    nps_total.src = links[chave_loja].nps.total
    nps_total.classList.add("indicador_setor")
    document.getElementById("nps_total").appendChild(nps_total)

    const historico_nps = document.createElement("button")
    historico_nps.innerHTML = "Histórico do NPS"
    historico_nps.classList.add("botao")
    historico_nps.classList.add("btn_amarelo")
    historico_nps.addEventListener("click", () => {
        window.location.href = "../historico_nps/historico_nps.html"
    })
    document.getElementById("nps_total").appendChild(historico_nps)
}
function criarPreferencias(chave_loja) {
    const preferencia = document.createElement("img")
    preferencia.src = links[chave_loja].preferencias
    preferencia.classList.add("indicador_setor")
    document.getElementById("preferencias").appendChild(preferencia)

}
function criarSetor(chave_loja, setor) {
    const container = document.getElementById(String(setor))
    if (chave_loja == "l_0") {
        const indicador = document.createElement("img")
        indicador.src = links[chave_loja][setor].indicador
        indicador.style.width = "80%"
        container.appendChild(indicador)
        return
    }

    const ranking = document.createElement("img")
    ranking.src = links[chave_loja][setor].ranking
    ranking.style.width = "80%"
    container.appendChild(ranking)

    const indicador = document.createElement("img")
    indicador.src = links[chave_loja][setor].indicador
    indicador.style.width = "80%"
    container.appendChild(indicador)

    const bench = document.createElement("img")
    bench.src = links["l_0"][setor].bench
    bench.style.width = "80%"
    container.appendChild(bench)
}
function criarBotaoHistoricoSetor() {

    const historico_setores = document.createElement("button")
    historico_setores.innerHTML = "Histórico dos Setores"
    historico_setores.classList.add("botao")
    historico_setores.classList.add("btn_amarelo")
    document.getElementById("historico_setores").appendChild(historico_setores)

    historico_setores.addEventListener("click", () => {
        window.location.href = "../historico_setores/historico_setores.html"
    })
}

document.addEventListener("DOMContentLoaded", () => {
    preencherInfoGeral()
})

const voltar = document.getElementById("voltar")

voltar.addEventListener("click", () => {
    window.location.href = "../lojas/lojas.html"
})

document.getElementById("comentarios").addEventListener("click", () => {
    window.location.href = "../comentarios/comentario.html"
})

document.getElementById("produtos_faltantes").addEventListener("click", () => {
    window.location.href = "../produtos_faltantes/produtos_faltantes.html"
})