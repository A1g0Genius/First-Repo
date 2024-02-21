const getUserPost = async (userId:string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${userId}`)
    
    if (!res.ok) throw new Error("Can not find the post")
    
    return res.json()
}

export default getUserPost