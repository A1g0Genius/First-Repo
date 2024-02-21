import getUser from "@/lib/getUser"
import getUserPost from "@/lib/getUserPost"
import { Suspense } from "react"
import UserPosts from "./components/UserPosts"

type Param = {
    params: {
        userId:string
    }
}

export default async function page({ params: { userId } }: Param) {
    const fetchUser: Promise<User> = getUser(userId)
    const fetchUserPost: Promise<Post[]> = getUserPost(userId)
    
    // const [user,userPosts]=await Promise.all([fetchUser,fetchUserPost])

    const user=await fetchUser

    return (
      <>
            <h1>{user.name}</h1>
            <br />
            <Suspense fallback={<h2>Loading...</h2>}>
                <UserPosts promise={fetchUserPost}/>
            </Suspense>
      </>
  )
}
