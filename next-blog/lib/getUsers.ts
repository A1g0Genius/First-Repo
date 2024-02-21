import { notFound } from "next/navigation"

export default async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    
    if (!res.ok) return notFound();

    return res.json()
}
