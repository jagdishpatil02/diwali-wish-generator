'use client'

'use client'

import { useEffect, useRef, useState } from 'react'
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import { CheckIcon, ClipboardIcon } from '@heroicons/react/24/outline'





export default function WishPage({ params }: { params: { name: string } }) {
  const { width, height } = useWindowSize()
  const audioRef = useRef<HTMLAudioElement>(null)
  const [copied, setCopied] = useState(false)
  const [isConfettiActive, setIsConfettiActive] = useState(true)

  useEffect(() => {
    // Add user interaction check
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(error => console.log('Audio autoplay failed:', error))
      }
      // Remove event listener after first click
      document.removeEventListener('click', playAudio)
    }

    document.addEventListener('click', playAudio)
    
    // Cleanup
    return () => {
      document.removeEventListener('click', playAudio)
    }
  }, [])

  // Automatically stop confetti after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsConfettiActive(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const displayName = params.name.replace(/-/g, ' ')

  const copyToClipboard = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000) // Reset after 2 seconds
  }

  return (
    <div className="min-h-screen  bg-gradient-to-br from-orange-100 via-orange-300 to-yellow-200 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Add Confetti at the top level */}
      {isConfettiActive && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={200}
          recycle={false}
          colors={['#f97316', '#eab308', '#ef4444', '#ec4899']} // orange, yellow, red, pink
        />
      )}
      <div className="max-w-2xl w-full animate-fadeIn relative">
        {/* Floating Diyas Background */}
        <div className="absolute -top-8 -left-8 text-6xl animate-float">🪔</div>
        <div className="absolute -bottom-8 -right-8 text-6xl animate-float-delayed">🪔</div>

        {/* Main Card */}
        <div className="relative bg-gradient-to-r from-yellow-100 to-orange-100 rounded-[2rem] shadow-[0_0_40px_rgba(255,165,0,0.3)] overflow-hidden">
          {/* Decorative Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 p-1 rounded-[2rem]">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-[1.9rem]" />
          </div>

          {/* Content Container */}
          <div className="relative p-8 md:p-12 overflow-hidden">
            {/* Top Rangoli Design */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
            
            {/* Content */}
            <div className="relative z-10 text-center space-y-8">
              {/* Title with Decorative Elements */}
              <div className="relative">
                <h1 className="text-5xl md:text-7xl font-bold">
                  <span className="bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 
                    bg-clip-text text-transparent 
                    drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]
                    relative inline-block
                    px-4 pt-2 pb-6"
                    style={{
                      backgroundSize: '200% auto',
                      animation: 'gradient-x 3s linear infinite'
                    }}
                  >
                    Happy Diwali
                  </span>
                </h1>
              </div>

              {/* Name Section with proper spacing */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <span className="h-[2px] w-12 bg-gradient-to-r from-transparent to-orange-400" />
                <span className="text-2xl md:text-3xl text-orange-800 font-semibold animate-slideUp">
                  {displayName}
                </span>
                <span className="h-[2px] w-12 bg-gradient-to-r from-orange-400 to-transparent" />
              </div>

              {/* Message */}
              <div className="space-y-6 text-lg md:text-xl text-orange-700 leading-relaxed animate-fadeIn">
                <p className="relative">
                  <span className="absolute -left-4 top-0 text-orange-400 animate-pulse">❈</span>
                  May this Diwali bring you joy, prosperity, and abundance.
                  Let the lights of Diwali illuminate your life with happiness
                  and success.<span className="absolute -right-1 bottom-0 text-orange-400 animate-pulse">❈</span>
                </p>
                <p className="text-2xl font-medium bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 
                    bg-clip-text text-transparent 
                    drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
                  Wishing you a luminous and prosperous Diwali! 
                </p>
              </div>

              {/* Decorative Footer */}
              <div className="flex items-center justify-center gap-3 pt-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i}
                    className="w-2 h-2 rounded-full bg-orange-500 animate-glow"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 left-0 right-0 flex justify-center">
        <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-full shadow-lg flex items-center gap-4 border border-orange-200">
          <span className="text-gray-600 text-sm">
            Share this wish:
          </span>
          <div className="flex items-center gap-2">
            <input 
              type="text" 
              value={window.location.href} 
              readOnly 
              className="bg-gray-50 px-4 py-2 rounded-l-md border-r-0 focus:outline-none text-sm w-64"
            />
            <button
              onClick={copyToClipboard}
              className={`px-4 py-2 rounded-r-md flex items-center gap-2 transition-all ${
                copied 
                  ? 'bg-green-500 text-white' 
                  : 'bg-orange-500 hover:bg-orange-600 text-white'
              }`}
            >
              {copied ? (
                <>
                  <CheckIcon className="w-4 h-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <ClipboardIcon className="w-4 h-4" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 