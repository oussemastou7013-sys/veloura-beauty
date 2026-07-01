'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp } from '@/lib/animations'

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-luxury">
      {/* Background Image - Layer 0 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/nails-1.jpg"
          alt="Salon Veloura"
          fill
          className="object-cover opacity-25"
          priority
        />
      </div>

      {/* Overlay Gradient - Layer 10 (very strong for guaranteed contrast) */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(59, 28, 110, 0.88), rgba(106, 63, 203, 0.72), rgba(0, 0, 0, 0.5))'
        }}
      />

      {/* Content - Layer 30 (on top) */}
      <div className="relative z-30 text-center px-4 max-w-3xl">
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading mb-8 text-balance leading-tight drop-shadow-2xl"
          style={{
            textShadow: '0 14px 50px rgba(0, 0, 0, 0.95), 0 8px 25px rgba(0, 0, 0, 0.8), 0 4px 12px rgba(0, 0, 0, 0.6)'
          }}
          {...fadeInUp}
        >
          <span className="text-white block tracking-tight">Veloura Beauty Lounge</span>
        </motion.h1>

        <motion.div
          className="w-24 h-1.5 bg-gradient-to-r from-soft-pink via-rose-pink to-lavender mx-auto mb-8 shadow-lg drop-shadow-lg"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        />

        <motion.p
          className="text-3xl md:text-5xl mb-10 text-white font-bold font-heading drop-shadow-2xl"
          style={{
            textShadow: '0 6px 25px rgba(0, 0, 0, 0.8)'
          }}
          {...fadeInUp}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Expérience Beauté de Luxe
        </motion.p>

        <motion.p
          className="text-lg md:text-2xl mb-14 text-white max-w-2xl mx-auto font-light drop-shadow-lg leading-relaxed"
          style={{
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.7)'
          }}
          {...fadeInUp}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Bienvenue dans votre destination ultime pour les soins beauté haut de gamme. 
          Laissez-vous séduire par nos services premium et notre équipe de professionnelles dévouées.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-40"
          {...fadeInUp}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-luxury bg-gradient-to-r from-soft-pink to-rose-pink shadow-luxury hover:shadow-luxury-lg font-bold text-lg px-10 py-4 drop-shadow-lg"
          >
            Découvrir Nos Services
          </a>
          <a
            href="https://wa.me/21647549"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury-outline border-2 border-white text-white hover:bg-white hover:text-royal-purple hover:border-white font-bold text-lg px-10 py-4 drop-shadow-lg"
          >
            Nous Contacter
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator - Layer 30 */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-white drop-shadow-lg"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
