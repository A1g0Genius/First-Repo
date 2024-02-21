import getAllUsers from "@/lib/getAllUsers";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title:"Users"
}

export default async function UsersPage() {

  const userData: Promise<User[]> = getAllUsers()

  const users = await userData
  
  const content = (
    <section>
      <h2>
        <Link href="/">back to home</Link>
      </h2>
      <br />
       <h3>User List:</h3>
      {
        users.map((user) => (
          <div key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </div>
        ))
      }
    </section>
  )
  return content
}
