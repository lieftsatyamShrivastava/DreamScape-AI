'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Avatar,AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

export const Header = () => {

  const {data : session} = useSession()


  return (
    <div className='w-full h-[60px] bg-black border-b border-white p-3 flex justify-between items-center'>
        <Link href="/">
        
        <h2 className='font-bold text-xl'> DreamScape AI
        </h2>
        </Link>
        {!session ? (
          
          <div className="__menu">
            <Button onClick={()=>signIn("google")}>Login</Button>
            </div>
            
          ):(
            <Avatar className='size-7'>
            <AvatarImage src={session.user?.image || ""} alt="User Avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          )
            
          
          }
        
    </div>




  )
}
