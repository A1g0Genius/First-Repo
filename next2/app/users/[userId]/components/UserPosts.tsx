type Props = {
    promise:Promise<Post[]>
}

export default async function UserPosts({promise}:Props){
    const posts = await promise

    const content = (
            posts.map((post) => {
                return (
                    <article key={post.id}>
                        <h1>{post.title}</h1>
                        <h3>{post.body}</h3>
                        <br />
                 </article>
                )
        })
    )

    return content
}