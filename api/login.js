import jwt from "jsonwebtoken";
import { trazerUsuarios } from "@/lib/usuarios.js";

async function verificarUsuario(login,password){
    
    const usuarios=await trazerUsuarios()

    if(login in usuarios){
        if(usuarios[login].senha == password){
            
            const perfil = usuarios[login].perfil
            const nome = usuarios[login].nome
            return {
                perfil: perfil,
                nome: nome
            }
        }else{
            return {
                error: "Senha incorreta"
            }
        }
    }else{
        return {
            error: "Usuário incorreto"
        }
    }

    
}

const SECRET = process.env.JWT_SECRET||"dev_secrect_key";

export default async function login(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: `Método não permitido: ${req.method}` });
    }
    const { login, password } = req.body;
    
    if (!login || !password) {
        return res.status(400).json({ error: "Preencha todos os campos" });
    }
    try {
        const user = await verificarUsuario(login, password);
        
        if (user.error) {
            return res.status(401).json({ error: user.error });
        }

        const token = jwt.sign({ ...user }, SECRET, { expiresIn: '1h' });

        return res.status(200).json({ token});
    } catch (error) {
        console.error("Erro ao verificar usuário:", error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }

}