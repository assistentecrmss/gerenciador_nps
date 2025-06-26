async function verificarUsuario(event) {
    event.preventDefault();

    if (!document.getElementById("usuario").value || !document.getElementById("senha").value) {
        return document.getElementById("erro").innerHTML = "Preencha todos os campos"
    }

    const login = String(document.getElementById("usuario").value)
    const password = String(document.getElementById("senha").value)
    await fazerLogin(login, password)
}

async function fazerLogin(login, senha) {
    const response = await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ login, senha })
    });
    const data = await response.json();
    if (response.ok) {
        sessionStorage.setItem("token", data.token);
        window.location.href = "/paginas/lojas/lojas.html"
    } else {
        document.getElementById("erro").innerHTML = data.error
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("login").addEventListener("submit", verificarUsuario)
})