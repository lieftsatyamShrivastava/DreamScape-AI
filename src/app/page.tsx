// "use client"

// import { Button } from "@/components/ui/button";
// import {motion} from "framer-motion"
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="w-full h-dvh flex justify-center items-center">
//        <div className="">
//         <motion.h1 initial={{
//           opacity: 0,
//           scale: 0.95,
//           filter:"blur(10px)",
//         }}
//            animate={{
//                 opacity:1,
//                 scale:1,
//                 filter:"blur(0px)"
//            }} 
//            transition={{duration: 0.7}}       
//         className="text-4xl sm:text-6xl font-bold">DreamScape AI</motion.h1>

//        <motion.p 
//        initial={{
//         opacity: 0,
//         scale: 0.95,
//         filter:"blur(10px)",
//       }}
//          animate={{
//               opacity:1,
//               scale:1,
//               filter:"blur(0px)"
//          }} 
//          transition={{duration: 0.7, delay:0.35}}

//        className=" text-center p-3 font-bold">Generate Stunning images form text using Ai models for free </motion. p>

//        <motion.div
//           initial={{
//             opacity: 0,
//             scale: 0.95,
//             filter: "blur(10px)",
//           }}
//           animate={{
//             opacity: 1,
//             scale: 1,
//             filter: "blur(0px)",
//           }}
//           transition={{ duration: 0.35, delay: 0.7 }}
//         >
//           <div className=" flex justify-center">
//           <Link href="/create">
//             <Button className="    text-center ml-3 mt-3 font-bold  p-5">Start Creating</Button>
//           </Link>
//           </div>
//         </motion.div>
//        </div>

//             </div>

//   );
// }





// my ai code cool UI 








"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Girl from "@/app/ai/image1.webp"
import { ChevronRight,  ArrowRight } from "lucide-react";
import About from "@/components/about"

export default function LandingPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const controls = useAnimation();

  const images = [Girl,];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
  }, [controls, currentImageIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          
          
        </Link>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Unleash Your Imagination with AI
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Transform your ideas into stunning visuals with DreamScape AI. Create unique, high-quality images in seconds using cutting-edge artificial intelligence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/create">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Start Creating <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/gallery">
                <Button size="lg" variant="outline">
                  Explore Gallery
                </Button>
              </Link>
            </div>
          </motion.div>
          
        </div>

        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose DreamScape AI?</h2>
          
        </motion.div>

        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Get Started in Seconds</h2>
          <div className="max-w-md mx-auto">
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-grow" />
              <Button type="submit">
                Try It Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <p className="text-sm text-center mt-4 text-gray-400">
              No credit card required. Start with our free tier today!
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Users Say</h2>
          
        </motion.div>

        <About/>

       
      </main>
      <footer className="bg-gray-900 py-4">
        <div className="container mx-auto text-center text-gray-400">
          <h1 className="text-lg">
            Made and designed by Satyam Srivastava
          </h1>
          <p className="text-sm mt-2">&copy; {new Date().getFullYear()} DreamScape AI. All rights reserved.</p>
        </div>
      </footer>
  

     
    </div>
    
  );
}



  

