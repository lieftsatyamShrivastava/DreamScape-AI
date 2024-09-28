'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2 } from 'lucide-react'

export default function ComingSoon() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  useEffect(() => {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#F9DB6D', '#FF8C42']
    let currentIndex = 0

    const intervalId = setInterval(() => {
      document.documentElement.style.setProperty('--highlight-color', colors[currentIndex])
      currentIndex = (currentIndex + 1) % colors.length
    }, 3000)

    return () => clearInterval(intervalId)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubscribed(true)
  }
  
  return (
    <div className="min-h-screen  bg-gradient-to-bl from-orange-500 via-violet-600 to-sky-700 flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold text-white mb-4">
          AI Image Magic
        </h1>
        <p className="text-2xl text-white mb-8">
          We&apos;re crafting something <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-black to-yellow-500">extraordinary</span>
        </p>
        <div className="relative w-64 h-64 mx-auto mb-8">
          <motion.div
            className="absolute inset-0 rounded-full bg-white opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">AI</span>
          </div>
        </div>
        <p className="text-xl text-white mb-4">
          Be the first to know when we launch!
        </p>
        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/20 text-white placeholder-white/70 border-white/30"
            />
            <Button type="submit" disabled={isLoading} className="bg-white text-purple-700 hover:bg-white/90">
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              {isLoading ? 'Subscribing...' : 'Notify Me'}
            </Button>
          </form>
        ) : (
          <p className="text-xl text-white font-semibold">
            Thanks for subscribing! We&apos;ll keep you posted.
          </p>
        )}
      </motion.div>
      <style jsx global>{`
        :root {
          --highlight-color: #FF6B6B;
        }
        .text-transparent {
          color: var(--highlight-color);
          transition: color 0.5s ease;
        }
      `}</style>
    </div>
  )
}