import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "dev_secret";

export default async function verificarToken(req, res) {
    const authHeader = req.headers.authorization;
    
    if (!authHeader.startsWith("Bearer ")) {
        return res.status(400).json({ error: "Formato de token inválido" });
    }

    if (!authHeader) {
        return res.status(401).json({ error: "Token ausente" });
    }
    const token = authHeader.split(" ")[1];

    try {
        const payload = jwt.verify(token, SECRET);
        return res.status(200).json({ payload });
    } catch (error) {
        return res.status(401).json({ error: "Token inválido" });
    }
}