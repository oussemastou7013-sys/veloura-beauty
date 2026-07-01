'use client'

import { Share2, Heart } from 'lucide-react'

export default function InstagramSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-foreground to-foreground/90">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 rounded-full mb-6">
            <Share2 size={40} className="text-accent" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Suivez Nous Sur Instagram
          </h2>

          {/* Description */}
          <p className="text-xl text-white/80 font-lora mb-12 max-w-2xl mx-auto">
            Découvrez les dernières tendances beauté, les créations exclusives et les moments spéciaux chez Sola Beauty. Rejoignez notre communauté d&apos;amies!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://www.instagram.com/solaabeauty?igsh=aGxkbWphZHpibjN4"
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-button bg-accent text-foreground hover:bg-white hover:shadow-lg hover:shadow-accent/50 flex items-center gap-2 font-bold"
            >
              <Share2 size={20} />
              Nous Suivre
            </a>

            <a
              href="https://www.instagram.com/solaabeauty?igsh=aGxkbWphZHpibjN4"
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-button border-2 border-white text-white hover:bg-white hover:text-foreground flex items-center gap-2 font-bold transition-all duration-300"
            >
              <Heart size={20} />
              @solaabeauty
            </a>
          </div>

          {/* Info */}
          <p className="text-white/60 font-lora text-sm mt-12">
            Taguez-nous dans vos photos pour une chance d&apos;être présenté sur notre page!
          </p>
        </div>
      </div>
    </section>
  )
}
