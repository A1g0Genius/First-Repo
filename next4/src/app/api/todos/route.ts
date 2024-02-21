import { NextRequest, NextResponse } from "next/server"

const SEARCH_URL = "https://jsonplaceholder.typicode.com/todos"

export async function GET(request:Request) {
    console.log("first")
    const origin = request.headers.get('origin')
    const res = await fetch(SEARCH_URL)
    const todos:Todo_Element[] = await res.json()
    return new NextResponse(JSON.stringify(todos), {
        headers: {
            'Access-Control-Allow-Orign': origin || '*',
            'Content-Type':'application/json'
        }
    })
}
