'use client'

import { Users, Award, Sparkles, Heart, Shield, ThumbsUp } from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Users,
      title: 'Experts Professionnels',
      description: 'Une équipe hautement qualifiée avec des années d\'expérience en beauté et esthétique',
    },
    {
      icon: Sparkles,
      title: 'Produits Premium',
      description: 'Nous utilisons uniquement des produits de haute qualité et des marques de luxe sélectionnées',
    },
    {
      icon: Heart,
      title: 'Atmosphère Luxueuse',
      description: 'Un environnement sophistiqué conçu pour votre confort et votre relaxation',
    },
    {
      icon: Award,
      title: 'Soin Personnalisé',
      description: 'Chaque service est adapté à vos besoins spécifiques et à votre style personnel',
    },
    {
      icon: Shield,
      title: 'Hygiène Impeccable',
      description: 'Les plus hauts standards d\'hygiène et de stérilisation sont toujours respectés',
    },
    {
      icon: ThumbsUp,
      title: 'Satisfaction Garantie',
      description: 'Votre satisfaction est notre priorité absolue. Nous garantissons votre bonheur',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Pourquoi Nous Choisir
          </h2>
          <p className="text-lg text-muted-foreground font-lora max-w-2xl mx-auto">
            Découvrez ce qui rend Sola Beauty unique et spécial
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-border group animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <Icon size={28} className="text-accent group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-playfair font-bold text-foreground mb-3">
                  {reason.title}
                </h3>

                <p className="text-muted-foreground font-lora leading-relaxed">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
