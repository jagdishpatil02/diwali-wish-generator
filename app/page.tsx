'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [name, setName] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      const urlName = name.trim().replace(/\s+/g, '-')
      router.push(`/wish/${urlName}`)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-100 via-orange-300 to-yellow-200 
      flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Add decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,165,0,0.1)_0%,transparent_65%)]" />
      


      {/* Main Form Card */}
      <div className="relative bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-2xl 
        shadow-[0_0_40px_rgba(255,165,0,0.3)] border-2 border-orange-300/50 
        max-w-md w-full z-10">
        
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-600 via-yellow-500 
          to-orange-600 bg-clip-text text-transparent animate-gradient-x">
          Create a Diwali Wish
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
       
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border-2 border-orange-200 focus:border-orange-400 
                focus:outline-none focus:ring-2 focus:ring-orange-400/50 bg-white/80"
              placeholder="Whom do you want to send Diwali wishes to?"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold 
              py-3 px-6 rounded-lg shadow-lg hover:from-orange-600 hover:to-yellow-600 
              transition-all duration-200 hover:shadow-xl"
          >
            Create Wish
          </button>
        </form>
      </div>

      <footer className="fixed bottom-4 left-0 right-0">
        <div className="text-center">
          <p className="text-white/90 text-sm font-medium">
            Developed with{' '}
            <span className="inline-block animate-bounce">❤️</span>
            {' '}by{' '}
            <a 
              href="https://twitter.com/jagdishpatil02" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-orange-500 underline decoration-dotted underline-offset-2 transition-colors"
            >
              Jagdish
            </a>
          </p>
        </div>
      </footer>
    </main>
  )
} 