'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Avatar,AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

export const Header = () => {

  const {data : session} = useSession()


  return (
    <div className="fixed top-0 w-full h-[60px] bg-black border-b border-white/60 p-3 flex justify-between items-center z-50">
        <Link href="/">
        
        <h2 className='font-bold text-xl'> DreamScape AI
        </h2>
        </Link>
        {!session ? (
          
          <div className="__menu">
            <Button onClick={()=>signIn("google")}>Login</Button>
            </div>
            
          ):  (
            <div className="flex gap-3  justify-center items-center">
              <Button onClick={() => signOut()} variant="destructive">
                Logout
              </Button>
              
              <Avatar className="w-6 h-6"> {/* Makes avatar 24x24px */}
  <AvatarImage src={session.user?.image || ""} className="w-full h-full" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
              
            </div>
        
               
          ) }
        
    </div>




  )
}
