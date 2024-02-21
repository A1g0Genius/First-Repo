import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <h1>Home Page</h1>
      <p><Link href='/users'>User</Link></p>
    </main>
  )
}
