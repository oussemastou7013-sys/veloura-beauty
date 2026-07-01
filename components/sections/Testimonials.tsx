'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/constants'
import { fadeInUp } from '@/lib/animations'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const handlePrevious = () => {
    setCurrent((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrent((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-20 bg-gradient-to-b from-lavender-light/50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-purple-dark mb-4">
            Ce Que Nos Clients Disent
          </h2>
          <p className="text-xl text-gray-600">
            Des témoignages authentiques de nos clients satisfaits
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-8 md:p-12 shadow-lg border border-lavender-light"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array(TESTIMONIALS[current].rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
              </div>

              {/* Quote */}
              <p className="text-2xl text-gray-700 mb-6 italic leading-relaxed">
                &quot;{TESTIMONIALS[current].text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div>
                  <p className="font-bold text-gray-900">
                    {TESTIMONIALS[current].name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {TESTIMONIALS[current].service}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={handlePrevious}
              className="p-3 rounded-full bg-purple-light text-purple-main hover:bg-purple-main hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === current
                      ? 'bg-purple-main w-8'
                      : 'bg-gray-300 w-2'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-purple-light text-purple-main hover:bg-purple-main hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Counter */}
          <div className="text-center mt-8 text-gray-600">
            {current + 1} / {TESTIMONIALS.length}
          </div>
        </div>
      </div>
    </section>
  )
}
