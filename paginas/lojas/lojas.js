import lojas from "../../db/lojas.json" with { type: 'json' };
import perfis from '../../db/perfis.json' with { type: 'json' };

async function preencherLojas() {

    await inicializarPerfil()
    const perfil_ativo = sessionStorage.getItem("perfil")
    const nome = sessionStorage.getItem("nome")

    document.getElementById("bem_vindo").innerHTML = `<p>Bem vindo <b>${nome}</b>, selecione a loja:</p>`

    const lojas_perfil = perfis[perfil_ativo]

    for (let i = 0; i < lojas_perfil.length; i++) {
        const chave = lojas_perfil[i]
        const elemento = document.createElement("button")
        elemento.innerHTML = lojas[chave]
        elemento.classList.add("botao")

        i == 0 ? elemento.classList.add("btn_amarelo") : elemento.classList.add("btn_azul")

        elemento.addEventListener("click", () => {
            sessionStorage.setItem("loja_selecionada", chave)
            window.location.href = "../info_geral/info_geral.html"
        })

        document.getElementById("lojas").appendChild(elemento)
    }
}

async function inicializarPerfil() {
    const token = localStorage.getItem("token")

    if (!token) {
        window.location.href = "../../index.html"
        return
    }

    const response = await fetch("/api/token", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    const data = await response.json();
    if (response.ok) {
        sessionStorage.setItem("perfil", data.payload.perfil);
        sessionStorage.setItem("nome", data.payload.nome);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    preencherLojas()
})

const voltar = document.getElementById("sair")
voltar.addEventListener("click", () => {
    localStorage.removeItem("token")
    window.location.href = "../../index.html"
})