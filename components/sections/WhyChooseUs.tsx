'use client'

import { motion } from 'framer-motion'
import { WHY_CHOOSE_US } from '@/lib/constants'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import * as Icons from 'lucide-react'

export default function WhyChooseUs() {
  const getIcon = (iconName: string) => {
    const icon = Icons[iconName as keyof typeof Icons] as any
    return icon ? icon : Icons.Heart
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-purple-dark mb-4">
            Pourquoi Nous Choisir
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez ce qui fait de Veloura votre destination beauté de confiance
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          {...staggerContainer}
        >
          {WHY_CHOOSE_US.map((feature) => {
            const Icon = getIcon(feature.icon)
            return (
              <motion.div
                key={feature.id}
                className="group bg-gradient-to-br from-white to-lavender-light/30 rounded-xl p-8 border border-lavender-light hover:border-purple-main transition-all hover:shadow-lg"
                {...staggerItem}
                whileHover={{ y: -10 }}
              >
                {/* Icon */}
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-light text-purple-main mb-6 group-hover:bg-purple-main group-hover:text-white transition-colors">
                  <Icon size={28} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Line */}
                <div className="mt-6 h-1 w-12 bg-gradient-to-r from-purple-main to-pink-accent rounded-full" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          {...fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Prêt à découvrir l&apos;expérience Veloura?
          </p>
          <a
            href="https://wa.me/21647549"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-purple-main text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-xl"
          >
            Réservez une Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
