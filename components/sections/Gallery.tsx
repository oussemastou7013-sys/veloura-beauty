'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { GALLERY_IMAGES } from '@/lib/constants'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const handlePrevious = () => {
    setSelectedImage((prev) =>
      prev === null ? null : prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setSelectedImage((prev) =>
      prev === null ? null : prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-light-gray via-white to-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div className="text-center mb-20" {...fadeInUp}>
          <h2 className="text-5xl md:text-6xl font-bold font-heading mb-6 heading-gradient">
            Notre Galerie
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-royal-purple to-rose-pink mx-auto mb-6" />
          <p className="text-xl text-dark-text/70 max-w-2xl mx-auto font-light">
            Explorez nos créations et transformations beauté. Chaque détail compte pour nous.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          {...staggerContainer}
        >
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-3xl aspect-square shadow-luxury hover:shadow-luxury-lg transition-all duration-300"
              {...staggerItem}
              onClick={() => setSelectedImage(index)}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-purple/80 via-royal-purple/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white font-semibold text-lg">{image.alt}</p>
                <p className="text-white/80 text-sm font-light">{image.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl aspect-square"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_IMAGES[selectedImage].src}
                alt={GALLERY_IMAGES[selectedImage].alt}
                fill
                className="object-contain"
              />

              {/* Navigation Buttons */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="text-white" size={24} />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="text-white" size={24} />
              </button>

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
                aria-label="Close lightbox"
              >
                <X className="text-white" size={24} />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <p className="text-lg font-semibold">
                  {GALLERY_IMAGES[selectedImage].alt}
                </p>
                <p className="text-sm text-white/80">
                  {selectedImage + 1} / {GALLERY_IMAGES.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
