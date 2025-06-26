export async function trazerUsuarios() {
    const link_db= process.env.USUARIOS_DB||"https://docs.google.com/spreadsheets/d/e/2PACX-1vTTrEk5uO3XYzpRW5OGEFOQEX0YiYL8QCdrHeHx92Sp8FuGwvw5-vWCKPbpcN8fbBdQ01WJduxcJaMy/pub?gid=0&single=true&output=csv"

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