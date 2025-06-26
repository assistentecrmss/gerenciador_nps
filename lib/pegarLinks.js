export async function pegarLink(loja) {
    const response = await fetch("/api/links", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ loja })
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || "Erro ao buscar links");
    }

    return data;
}