import NavBar from '@/components/NavBar/NavBar'
import '@/styles/globals.css'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <NavBar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}