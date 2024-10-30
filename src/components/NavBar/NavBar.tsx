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
    <div className="fixed left-0 bottom-0 transform md:translate-y-[-10rem] z-20 max-w-screen/4 bg-transparent p-3">
      <div className="flex flex-col flex-wrap justify-end gap-1">
        <div className="text-3xl align-text-top-middle">Navigation</div>
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
    </div>
  )
}

export default NavBar
