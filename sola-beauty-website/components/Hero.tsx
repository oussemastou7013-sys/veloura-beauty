'use client'

import Link from 'next/link'
import { MessageCircle, Calendar } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1782920003967-P7VWZP9ieTZ2jfEPMXlGhEKyDrIfBa.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 animate-fadeInUp text-balance">
          Révélez Votre Beauté<span className="text-accent ml-2">Avec Confiance</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 font-lora mb-12 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          Salon de beauté luxe dédié à l&apos;élégance, au style et aux soins exceptionnels
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scaleIn" style={{ animationDelay: '0.4s' }}>
          <Link
            href="#contact"
            className="luxury-button bg-accent text-white hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/50 flex items-center gap-2"
          >
            <Calendar size={20} />
            Réserver Maintenant
          </Link>

          <a
            href="https://wa.me/21655690127"
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-button border-2 border-white text-white hover:bg-white/10 flex items-center gap-2"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
