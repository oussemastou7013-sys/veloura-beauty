'use client'

import { Sparkles } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl group animate-fadeInUp">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1782919990475-kLKWYO33bVvTcGCDSRTEpEIiZBOWXw.jpg"
              alt="Sola Beauty"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div>
              <div className="inline-flex items-center gap-2 text-accent mb-4">
                <Sparkles size={20} />
                <span className="font-semibold text-sm tracking-wide">BIENVENUE CHEZ SOLA BEAUTY</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
                L&apos;Élégance Redéfinie
              </h2>
            </div>

            <p className="text-lg text-muted-foreground font-lora leading-relaxed">
              Sola Beauty est bien plus qu&apos;un simple salon de beauté. C&apos;est un sanctuaire dédié à votre bien-être et à votre confiance. Nous croyons que chaque femme mérite de se sentir magnifique et rayonnante.
            </p>

            <p className="text-lg text-muted-foreground font-lora leading-relaxed">
              Avec une équipe de professionnels expérimentés et des produits premium sélectionnés avec soin, nous offrons des services de beauté et de bien-être de classe mondiale.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-background p-6 rounded-xl">
                <p className="text-3xl font-playfair font-bold text-accent mb-2">10+</p>
                <p className="text-sm font-lora text-muted-foreground">Années d&apos;Expérience</p>
              </div>
              <div className="bg-background p-6 rounded-xl">
                <p className="text-3xl font-playfair font-bold text-accent mb-2">100%</p>
                <p className="text-sm font-lora text-muted-foreground">Satisfaction Garantie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
