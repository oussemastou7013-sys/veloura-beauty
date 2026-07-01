'use client'

import { Waves, Sparkles, Heart, Crown, Wind, Zap } from 'lucide-react'

export default function Services() {
  const services = [
    {
      category: 'Cheveux',
      icon: Wind,
      items: [
        'Coiffure & Styling',
        'Coloration',
        'Traitement Cheveux',
        'Extensions Cheveux',
        'Coiffure Mariée',
      ],
    },
    {
      category: 'Maquillage',
      icon: Crown,
      items: [
        'Maquillage Professionnel',
        'Maquillage Mariée',
        'Shaping des Sourcils',
        'Extensions de Cils',
        'Teinture des Cils',
      ],
    },
    {
      category: 'Soins du Visage',
      icon: Sparkles,
      items: [
        'Soins Faciaux',
        'Hydra Facial',
        'Skincare Premium',
        'Soin Acné',
        'Anti-Âge',
      ],
    },
    {
      category: 'Mains & Ongles',
      icon: Heart,
      items: [
        'Manucure',
        'Pédicure',
        'Extensions Ongles',
        'Nail Art',
        'Ongles Gel',
      ],
    },
    {
      category: 'Épilation',
      icon: Waves,
      items: [
        'Épilation à la Cire',
        'Épilation au Fil',
        'Épilation Laser',
        'Épilation Corps',
        'Épilation Visage',
      ],
    },
    {
      category: 'Bien-Être & Spa',
      icon: Zap,
      items: [
        'Massage Relaxant',
        'Bain Marocain',
        'Soin Corporel',
        'Kératine & Botox Cheveux',
        'Traitement Spa',
      ],
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Nos Services Luxe
          </h2>
          <p className="text-lg text-muted-foreground font-lora max-w-2xl mx-auto">
            Découvrez notre collection complète de services de beauté et de bien-être conçus pour vous faire rayonner
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.category}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border hover:border-accent animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Icon size={28} className="text-accent group-hover:text-white transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
                  {service.category}
                </h3>

                {/* Items */}
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground font-lora">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
