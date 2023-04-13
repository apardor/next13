import { NextResponse } from 'next/server';
import type { NextApiRequest } from "next";


export async function GET(req: NextApiRequest) {
    const apiKey = process.env.API_KEY;
    const url = `https://api.pexels.com/v1/search?query=dog`
    const images = await fetch(url, {
        headers:{
            Authorization: `${apiKey}`,
        },
    });
    const data = await images.json();    
   return NextResponse.json(data)
}

