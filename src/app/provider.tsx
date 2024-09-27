"use client"

import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'


export default function provider({ children }: { children: ReactNode }) {
  return (<SessionProvider>
   
    {children}

  </SessionProvider>

  )
}


