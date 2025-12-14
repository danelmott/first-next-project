"use client"
import { useState } from "react"

export default function Chatbot(){
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState(null); // Renamed to lowercase 'setResponse' for convention
    const [isLoading, setIsLoading] = useState(false); // New loading state
    
    async function handleSubmit(e){
        e.preventDefault();
        if (!prompt.trim()) return; // Prevent empty submission

        setIsLoading(true);
        setResponse(null); // Clear previous response

        try {
            const peticion = await fetch("http://localhost:3000/api/users", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({prompt: prompt})
            });

            // Handle non-200 responses (e.g., 400 or 500 from your API route)
            if (!peticion.ok) {
                const errorData = await peticion.json();
                setResponse(`Error: ${errorData.error || "Ocurrió un error en el servidor."}`);
                return;
            }

            const responseData = await peticion.json();
            // CORRECTION: Use 'answer' property from the server response
            setResponse(responseData.answer); 

        } catch (error) {
            console.error("Fetch error:", error);
            setResponse("Error de red: No se pudo conectar con el servidor.");
        } finally {
            setIsLoading(false);
        }
    }

    // 
    
    return(
        <div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <input 
                    type="text" 
                    value={prompt} 
                    onChange={e => setPrompt(e.target.value)} 
                    placeholder="Escribe tu pregunta..."
                    disabled={isLoading}
                    style={{ padding: '10px', width: '300px' }}
                />
                <button type="submit" disabled={isLoading} style={{ padding: '10px' }}>
                    {isLoading ? "Enviando..." : "Listo"}
                </button>
            </form>

            <div style={{ border: '1px solid #ccc', padding: '15px', minHeight: '50px' }}>
                {isLoading && <p>Cargando respuesta de Gemini...</p>}
                {!isLoading && response && <p style={{ whiteSpace: 'pre-wrap' }}>{response}</p>}
                {!isLoading && !response && <p>Escribe algo para empezar el chat.</p>}
            </div>
        </div>
    )
}