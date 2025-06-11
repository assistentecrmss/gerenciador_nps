import users from "./db/users.json" with {type: 'json'}

async function trazerUsuarios() {
    const link_db=users.db

    const resposnse = await fetch(link_db)
    const db=await resposnse.text()

    const usuarios_array=db.split("\n").map(usuario=>usuario.split(","))
    
    const usuarios_obj=Object.fromEntries(
        usuarios_array.map(([user,password,profile,name])=>[
            user,
            {senha:password,perfil:profile,nome:name}
        ])
    )
    return usuarios_obj
}


async function verificarUsuario(event){
    event.preventDefault();

    if(!document.getElementById("usuario").value || !document.getElementById("senha").value){
        return document.getElementById("erro").innerHTML="Preencha todos os campos" 
    }
    
    const login=String(document.getElementById("usuario").value)
    const password=String(document.getElementById("senha").value)
    const usuarios=await trazerUsuarios()

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

trazerUsuarios()