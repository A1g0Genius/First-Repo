import { NextResponse } from "next/server"


export const config = {
    matcher:['/api/:path*']
}

const allowed=["https://www.google.com"]

export function middleware(req:Request) {
    // console.log(req.url)
    const origin=req.headers.get('origin')
    if (origin && !allowed.includes(origin)) {
        return NextResponse.json("Error")
    }
    // console.log(req.headers)

    return NextResponse.next()
}

