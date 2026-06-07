'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  duration: number
}

export default function Page() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    // Generate random stars
    const generatedStars: Star[] = []
    for (let i = 0; i < 100; i++) {
      generatedStars.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.7 + 0.3,
        duration: Math.random() * 2 + 1,
      })
    }
    setStars(generatedStars)
  }, [])

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Starfield Background */}
      <div className="absolute inset-0 z-0">
        {stars.map((star, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              boxShadow: `0 0 ${star.size * 5}px rgba(255, 255, 255, ${star.opacity})`,
              animation: `twinkle ${star.duration}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl">
          {/* Card Container */}
          <div className="rounded-3xl border border-secondary/40 bg-card/80 backdrop-blur-sm p-8 sm:p-12 shadow-2xl">
            {/* Title */}
            <div className="mb-8 text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                FOOD PRINT 0.1
              </h1>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 mb-6">
                <span className="text-sm sm:text-base">🛡️ SAFE & TRUSTED</span>
              </div>
            </div>

            {/* Subtitle */}
            <div className="mb-8 text-center space-y-4">
              <p className="text-2xl sm:text-3xl font-semibold text-white">
                🔥 Premium Community 🔥
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Exclusive Content • Expert Insights • Daily Updates • Active Community
              </p>
            </div>

            {/* CTA Button */}
            <div className="mb-8 flex justify-center">
              <Link
                href="https://t.me/+1FmPyaiBYd04YWM1"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a11.955 11.955 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.365-1.371.155-.429-.161-1.006-.487-1.497-.919-.569-.533-1.02-1.88 1.802-3.919.842-.606 1.548-1.004 2.045-1.19z" />
                </svg>
                JOIN TELEGRAM NOW
              </Link>
            </div>

            {/* Stats Section */}
            <div className="mb-8 space-y-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-2">
                  <p className="text-2xl sm:text-3xl font-bold text-primary">24/7</p>
                  <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
                    Live Support
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl sm:text-3xl font-bold text-primary">15K+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
                    Active Members
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl sm:text-3xl font-bold text-primary">95%</p>
                  <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
                    Accuracy Rate
                  </p>
                </div>
              </div>

              {/* Agency Credit Box */}
              <Link
                href="https://t.me/AyushAdsAgency"
                target="_blank"
                rel="noopener noreferrer"
                className="block border-4 border-red-500 rounded-2xl p-4 text-center bg-secondary/10 hover:bg-secondary/20 transition-colors cursor-pointer"
              >
                <p className="text-sm text-muted-foreground">
                  Ad setup by{' '}
                  <span className="text-primary font-semibold">
                    @AyushAdsAgency
                  </span>
                </p>
              </Link>
            </div>

            {/* Secondary CTA Button */}
            <div className="mb-8 flex justify-center">
              <Link
                href="https://t.me/+ZOvmFKi-dxE0NDVl"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a11.955 11.955 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.365-1.371.155-.429-.161-1.006-.487-1.497-.919-.569-.533-1.02-1.88 1.802-3.919.842-.606 1.548-1.004 2.045-1.19z" />
                </svg>
                JOIN CHANNEL
              </Link>
            </div>

            {/* Footer */}
            <div className="border-t border-secondary/40 pt-6 text-center text-xs text-muted-foreground">
              <p>© FOOD PRINT 0.1 — Premium Prediction Community</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
