"use client"

import { Button } from "@/components/ui/button";
import {motion} from "framer-motion"
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-dvh flex justify-center items-center">
       <div className="">
        <motion.h1 initial={{
          opacity: 0,
          scale: 0.95,
          filter:"blur(10px)",
        }}
           animate={{
                opacity:1,
                scale:1,
                filter:"blur(0px)"
           }} 
           transition={{duration: 0.7}}       
        className="text-4xl sm:text-6xl font-bold">DreamScape AI</motion.h1>
       
       <motion.p 
       initial={{
        opacity: 0,
        scale: 0.95,
        filter:"blur(10px)",
      }}
         animate={{
              opacity:1,
              scale:1,
              filter:"blur(0px)"
         }} 
         transition={{duration: 0.7, delay:0.35}}
       
       className=" text-center p-3 font-bold">Generate Stunning images form text using Ai models for free </motion. p>
       
       <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{ duration: 0.35, delay: 0.7 }}
        >
          <div className=" flex justify-center">
          <Link href="/create">
            <Button className="    text-center ml-3 mt-3 font-bold  p-5">Start Creating</Button>
          </Link>
          </div>
        </motion.div>
       </div>

            </div>
           
  );
}
