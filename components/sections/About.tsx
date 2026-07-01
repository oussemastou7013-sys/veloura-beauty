'use client'

import { motion } from 'framer-motion'
import { fadeInUp, slideInLeft } from '@/lib/animations'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-lavender-light/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div {...slideInLeft}>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-purple-dark mb-6">
              À Propos de Veloura
            </h2>

            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Veloura Beauty Lounge est plus qu&apos;un simple salon de beauté. C&apos;est une 
                destination dédiée au bien-être et à la transformation personnelle. Depuis nos débuts, 
                nous nous engageons à offrir des services de luxe de première classe.
              </p>

              <p>
                Notre équipe de professionnelles passionnées possède une expertise approfondie dans 
                tous les domaines de la beauté. Nous sélectionnons méticuleusement chaque produit pour 
                garantir les meilleurs résultats à nos clients précieux.
              </p>

              <p>
                Chez Veloura, nous croyons que la beauté est l&apos;expression de la confiance en soi. 
                Chaque visite est une occasion de vous sentir renouvelée et rayonnante.
              </p>
            </div>

            {/* Values */}
            <motion.div
              className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200"
              {...fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <div>
                <div className="text-3xl font-bold text-purple-main mb-2">5+</div>
                <p className="text-sm text-gray-600">Années d&apos;Excellence</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-main mb-2">100%</div>
                <p className="text-sm text-gray-600">Satisfaction Client</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-main mb-2">20+</div>
                <p className="text-sm text-gray-600">Professionnelles</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Feature Cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: '✨',
                title: 'Excellence',
                desc: 'Qualité premium en tout temps',
              },
              {
                icon: '💆',
                title: 'Bien-être',
                desc: 'Expérience relaxante complète',
              },
              {
                icon: '👑',
                title: 'Luxe',
                desc: 'Ambiance élégante et raffinée',
              },
              {
                icon: '❤️',
                title: 'Dévouement',
                desc: 'Soin personnalisé à chaque client',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow border border-lavender-light"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-purple-main mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
