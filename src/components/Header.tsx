'use client';

import Link from 'next/link'
import { Button } from './ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

export const Header = () => {

  const { data: session } = useSession()

  // useEffect(() => {
  //   console.log("session data", session);
  // }, [session])
  return (
   
    <div className=" top-0 w-full h-[60px] bg-gradient-to-r from-slate-900 to-slate-700  border-b border-white/60 p-3 flex justify-between items-center z-50">
     
     
     
      <Link href="/">

        <h2 className='font-bold text-xl'> DreamScape AI
        </h2>
      </Link>
      {!session ? (

        <div className="__menu">
          <Button onClick={() => signIn("google")}>Login</Button>
        </div>

      ) : (
        <div className="flex gap-3  justify-center items-center">
          <Button onClick={() => signOut()} variant="destructive">
            Logout
          </Button>
        
          <Avatar className="size-6 rounded-full overflow-hidden" asChild>
          <Link href="/profile">
            <AvatarImage src={session.user?.image??""} className="w-full h-full" />
            <AvatarFallback>U</AvatarFallback>
            </Link>
          </Avatar>
          

        </div>


      )}

    </div>




  )
}
