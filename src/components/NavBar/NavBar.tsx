'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Moon, Sun } from 'lucide-react'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const NavBar = () => {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    console.log(pathname)
  }, [pathname])

  return (
    <div className="w-screen h-[15vh] flex flex-wrap justify-between items-center gap-1 border px-36">
      <Button variant={pathname === '/' ? 'default' : 'outline'} onClick={() => router.push('/')}>
        Home
      </Button>
      <Button
        variant={pathname === '/about' ? 'default' : 'outline'}
        onClick={() => router.push('/about')}
      >
        About
      </Button>
      <Button
        variant={pathname === '/blogpage' ? 'default' : 'outline'}
        onClick={() => router.push('/blogpage')}
      >
        Blog
      </Button>
    </div>
  )
}

export default NavBar
