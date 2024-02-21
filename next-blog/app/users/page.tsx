import getUsers from "@/lib/getUsers"

export default async function page() {
    const fetchUser: Promise<User[]> = getUsers();
    const user =await fetchUser
    
    const content = (
        user.map(ele => {
            return (
                <div key={ele.id}>

                <h1 className=" prose-h1:">{ele.name}</h1>
                </div>
            )
        })
    )
  return content
}
