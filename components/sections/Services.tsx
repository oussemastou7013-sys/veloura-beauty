'use client'

import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/constants'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import * as Icons from 'lucide-react'

export default function Services() {
  const getIcon = (iconName: string) => {
    const icon = Icons[iconName as keyof typeof Icons] as any
    return icon ? icon : Icons.Sparkles
  }

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white via-light-gray to-lavender">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div className="text-center mb-20" {...fadeInUp}>
          <h2 className="text-5xl md:text-6xl font-bold font-heading mb-6 heading-gradient">
            Nos Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-royal-purple to-rose-pink mx-auto mb-6" />
          <p className="text-xl text-dark-text/70 max-w-2xl mx-auto font-light">
            Découvrez notre collection complète de services beauté conçus pour sublimer votre beauté naturelle
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          {...staggerContainer}
        >
          {SERVICES.map((service) => {
            const Icon = getIcon(service.icon)
            return (
              <motion.div
                key={service.id}
                className="card-luxury border-none hover:shadow-luxury-lg hover:border-lavender"
                {...staggerItem}
                whileHover={{ y: -8 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-royal-purple to-rose-pink text-white">
                      <Icon size={28} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-dark-text mb-2 font-heading">
                      {service.name}
                    </h3>
                    <p className="text-sm text-dark-text/60 font-medium">
                      {service.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Categories Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          {...fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <div className="text-center">
            <div className="text-5xl font-bold heading-gradient mb-2">23</div>
            <p className="text-dark-text/70 font-medium">Services Premium</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold heading-gradient mb-2">100%</div>
            <p className="text-dark-text/70 font-medium">Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold heading-gradient mb-2">5+</div>
            <p className="text-dark-text/70 font-medium">Années Expérience</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold heading-gradient mb-2">∞</div>
            <p className="text-dark-text/70 font-medium">Clients Heureux</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
