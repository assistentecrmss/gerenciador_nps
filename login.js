import usuarios from './db/usuarios.json' with { type: 'json' };



function verificarUsuario(event){
    event.preventDefault();

    if(!document.getElementById("usuario").value || !document.getElementById("senha").value){
        return document.getElementById("erro").innerHTML="Preencha todos os campos" 
    }
    
    const login=String(document.getElementById("usuario").value)
    const password=String(document.getElementById("senha").value)

    if(login in usuarios){
        if(usuarios[login].senha == password){
            
            sessionStorage.setItem("perfil",usuarios[login].perfil)
            sessionStorage.setItem("nome",usuarios[login].nome)

            window.location.href="/paginas/lojas/lojas.html"

        }else{
            document.getElementById("erro").innerHTML="Senha incorreta"
        }
    }else{
        document.getElementById("erro").innerHTML="Usuário incorreto"
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("login").addEventListener("submit",verificarUsuario)
})