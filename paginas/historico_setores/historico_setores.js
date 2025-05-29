import links from "../../db/links.json" with {type: 'json'}
import lojas from "../../db/lojas.json" with {type: 'json'}

function preencherHistoricoSetores(){
    const chave_loja = sessionStorage.getItem("loja_selecionada")

    document.getElementById("titulo").textContent = lojas[chave_loja]

    criarHistoricoSetor(chave_loja,"espera")
    criarHistoricoSetor(chave_loja,"hortifruti")
    criarHistoricoSetor(chave_loja,"climatizacao")
    criarHistoricoSetor(chave_loja,"limpeza")
    criarHistoricoSetor(chave_loja,"atendimento")
    criarHistoricoSetor(chave_loja,"acogue")

}

function criarHistoricoSetor(chave_loja,setor){
    const container_historico=document.getElementById("setores")
    
    const container_setor=document.createElement("div")
    container_setor.classList.add("horizontal")
    container_setor.style.marginInline="2rem"

    const indicador=document.createElement("img")
    indicador.src=links[chave_loja][setor].indicador
    container_setor.appendChild(indicador)

    const historico=document.createElement("img")
    historico.src=links[chave_loja][setor].historico    
    container_setor.appendChild(historico)

    container_historico.appendChild(container_setor)
}

const voltar = document.getElementById("voltar")

voltar.addEventListener("click", () => {
    window.location.href = "../info_geral/info_geral.html"
})

document.addEventListener("DOMContentLoaded", () => {
    preencherHistoricoSetores()
})