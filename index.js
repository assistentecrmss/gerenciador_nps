async function verificarUsuario(event) {
  event.preventDefault();

  if (!document.getElementById("usuario").value || !document.getElementById("senha").value) {
    return document.getElementById("erro").innerHTML = "Preencha todos os campos"
  }

  const login = String(document.getElementById("usuario").value)
  const password = String(document.getElementById("senha").value)
  await fazerLogin(login, password)
}

async function fazerLogin(login, password) {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ login, password })
    });

    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      throw new Error("Resposta do servidor não é JSON.");
    }

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
      window.location.href = "/paginas/lojas/lojas.html"
    } else {
      document.getElementById("erro").innerHTML = data.error
    }

  }
  catch (error) {
    console.error("Erro durante o login:", error);
    document.getElementById("erro").innerText = "Erro no servidor. Tente novamente mais tarde.";
  }
}

async function checarTokenELogar() {
  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    const response = await fetch("/api/token", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.ok) {
      window.location.href = "/paginas/lojas/lojas.html";
    } else {
      localStorage.removeItem("token");
    }
  } catch (err) {
    console.error("Erro ao verificar token:", err);
    localStorage.removeItem("token");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  checarTokenELogar()
  document.getElementById("login").addEventListener("submit", verificarUsuario)
})