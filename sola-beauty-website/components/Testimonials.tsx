'use client'

import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Fatima Ben',
      role: 'Cliente Régulière',
      text: 'Sola Beauty a changé ma vie! Les services sont impeccables et l\'équipe est très professionnelle. Je recommande vivement!',
      rating: 5,
    },
    {
      name: 'Layla Mansour',
      role: 'Mariée',
      text: 'Merci pour cette magnifique coiffure et ce maquillage de mariage. J\'ai adoré chaque moment dans ce salon luxueux.',
      rating: 5,
    },
    {
      name: 'Sophia Chahine',
      role: 'Cliente VIP',
      text: 'L\'expérience au Sola Beauty est incomparable. La qualité des services et l\'attention aux détails sont exceptionnelles.',
      rating: 5,
    },
    {
      name: 'Noor Khayal',
      role: 'Cliente Fidèle',
      text: 'Chaque visite chez Sola Beauty est un moment de pure détente et de luxe. Merci pour cette excellence!',
      rating: 5,
    },
    {
      name: 'Leila Amiri',
      role: 'Beauté & Bien-Être',
      text: 'Le meilleur salon de beauté de Tunis! Services haut de gamme, produits premium, ambiance magnifique. Fortement recommandé!',
      rating: 5,
    },
  ]

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Avis de Nos Clientes
          </h2>
          <p className="text-lg text-muted-foreground font-lora max-w-2xl mx-auto">
            Découvrez ce que nos clientes satisfaites pensent de Sola Beauty
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative bg-background rounded-3xl p-8 md:p-12 shadow-xl animate-fadeInUp">
          <div className="grid md:grid-cols-3 gap-6 min-h-[300px]">
            {/* Previous */}
            <div className="hidden md:flex items-center justify-center opacity-50">
              <div className="text-center">
                <p className="text-muted-foreground font-lora text-sm mb-4">
                  {testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length]?.text.substring(0, 60)}...
                </p>
              </div>
            </div>

            {/* Current */}
            <div className="flex flex-col justify-between">
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array(testimonials[currentIndex].rating)
                    .fill(null)
                    .map((_, i) => (
                      <Star key={i} size={20} className="fill-accent text-accent" />
                    ))}
                </div>

                {/* Quote */}
                <p className="text-foreground font-lora text-lg leading-relaxed mb-8">
                  &quot;{testimonials[currentIndex].text}&quot;
                </p>
              </div>

              {/* Author */}
              <div>
                <h4 className="font-playfair font-bold text-foreground text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-accent font-lora text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>

            {/* Next */}
            <div className="hidden md:flex items-center justify-center opacity-50">
              <div className="text-center">
                <p className="text-muted-foreground font-lora text-sm mb-4">
                  {testimonials[(currentIndex + 1) % testimonials.length]?.text.substring(0, 60)}...
                </p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8 md:mt-0 md:absolute md:left-0 md:right-0 md:top-1/2 md:-translate-y-1/2">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-accent text-white hover:bg-accent/90 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2 justify-center md:hidden">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-accent w-8' : 'bg-muted'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-accent text-white hover:bg-accent/90 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Indicator Dots */}
        <div className="hidden md:flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-accent w-8' : 'bg-muted'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
