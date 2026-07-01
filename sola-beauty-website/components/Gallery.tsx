'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1782919990475-kLKWYO33bVvTcGCDSRTEpEIiZBOWXw.jpg',
      alt: 'Nail Art Professionnel',
      size: 'large',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1782919947562-Hbvbx27WlBOKsLJt7fe3SaNZZp5Wiz.jpg',
      alt: 'Manucure Classique',
      size: 'small',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1782919957061-ocRsILkyZsKP2e9aOd4IGsYtyK9Sxg.jpg',
      alt: 'Design Ongles Élégant',
      size: 'medium',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1782920075844-gbgUbGkxVa0N4FEck9qxfJtdN2UIaP.jpg',
      alt: 'Ongles Bleu Luxe',
      size: 'large',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1782920062764-2rDmWIpyA2kOGvXh8OT3Y9onNZysBK.jpg',
      alt: 'Ongles Bourgogne',
      size: 'small',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1782920003967-P7VWZP9ieTZ2jfEPMXlGhEKyDrIfBa.jpg',
      alt: 'Ongles Rouge Brillant',
      size: 'medium',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1782920018020-XJkvNvAJq2dV3TnAaksPQJqmrqvWie.jpg',
      alt: 'Extensions de Cils',
      size: 'small',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1782920108477-eCcSLAwlXCsit2S85h9kHjcPoBV2Be.jpg',
      alt: 'Ongles Holographique',
      size: 'large',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1782920036256-CHhd9JkgRTLbQNVP7lUuEtVce59mzY.jpg',
      alt: 'Manucure Rose',
      size: 'medium',
    },
  ]

  return (
    <section id="gallery" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Notre Galerie
          </h2>
          <p className="text-lg text-muted-foreground font-lora max-w-2xl mx-auto">
            Explorez nos créations et nos derniers travaux en beauté et esthétique
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto rounded-2xl object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white font-playfair text-lg font-semibold text-center px-4">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full h-screen md:h-auto md:max-h-96 lg:max-h-[600px]">
            <img
              src={selectedImage}
              alt="Gallery"
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
