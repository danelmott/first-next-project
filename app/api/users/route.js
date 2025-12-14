import { NextRequest } from "next/server"
import { NextResponse } from "next/server" // Using NextResponse for consistency
import { main } from "@/_services/gemini" // Assuming this is your Gemini API call service

// primera api hecha con next
export async function POST (Request) {
    try {
        // 1. CORRECTION: The Request.json() method must be AWAITED.
        const body = await Request.json();
        const { prompt } = body;
        
        // 2. Input Validation
        if (!prompt || typeof prompt !== 'string') {
            return NextResponse.json({
                error: "falta el parametro PROMPT o no es una cadena valida",
            }, { status: 400 }); // Set status using the options object
        }

        // 3. Call the Gemini service function
        const geminiResponse = await main(prompt);
        
        // 4. Return the successful response
        return NextResponse.json({
            answer: geminiResponse,
        }, { status: 200 });
        
    } catch (error) {
        // Handle common body parsing error gracefully
        if (error instanceof SyntaxError && error.message.includes('JSON')) {
            return NextResponse.json({
                error: "El cuerpo de la peticion (body) no es un JSON valido.",
            }, { status: 400 });
        }
        
        // 5. Server Error Handling
        console.error("error en la api route:", error);
        
        return NextResponse.json({
            error: "error del servidor al intentar procesar la peticion",
        }, { status: 500 });
    }
}