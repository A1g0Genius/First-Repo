import MyProfilePic from './components/MyProfilePic'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: `Yash's Blog`,
  description: 'Created by Yash Panchiwala',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <MyProfilePic/>
        {children}</body>
    </html>
  )
}
