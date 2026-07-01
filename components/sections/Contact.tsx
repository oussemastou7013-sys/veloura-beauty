'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { MapPin, Phone, MessageCircle, Clock, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-purple-dark mb-4">
            Nous Contacter
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous serions ravis de vous accueillir au salon. Contactez-nous dès aujourd&apos;hui!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            {...staggerContainer}
          >
            {[
              {
                icon: MapPin,
                title: 'Adresse',
                content: '23 Rue Tarek Ibn Zied, Ariana 2091, Tunisie',
                link: 'https://maps.google.com/?q=23+Rue+Tarek+Ibn+Zied+Ariana',
                isLink: true,
              },
              {
                icon: Phone,
                title: 'Téléphone',
                content: '+216 21 467 549',
                link: 'tel:+21621467549',
                isLink: true,
              },
              {
                icon: MessageCircle,
                title: 'WhatsApp',
                content: '+216 21 467 549',
                link: 'https://wa.me/21621467549',
                isLink: true,
              },
              {
                icon: Clock,
                title: 'Horaires',
                content: 'Lun - Sam: 09:00 - 20:00\nDim: Fermé',
                link: null,
                isLink: false,
              },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={idx}
                  className="flex gap-4"
                  {...staggerItem}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-purple-light text-purple-main">
                      <Icon size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    {item.isLink ? (
                      <a
                        href={item.link!}
                        target={item.link?.startsWith('https://maps') ? '_blank' : undefined}
                        rel={item.link?.startsWith('https://maps') ? 'noopener noreferrer' : undefined}
                        className="text-gray-600 hover:text-purple-main transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                    )}
                  </div>
                </motion.div>
              )
            })}

            {/* Social Links */}
            <motion.div {...staggerItem}>
              <h3 className="font-bold text-gray-900 mb-4">Suivez-nous</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/veloura_beauty_lounge_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-purple-light text-purple-main hover:bg-purple-main hover:text-white transition-all flex items-center justify-center"
                  aria-label="Instagram"
                >
                  📸
                </a>
                <a
                  href="https://wa.me/21621467549"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-purple-light text-purple-main hover:bg-purple-main hover:text-white transition-all flex items-center justify-center"
                  aria-label="WhatsApp"
                >
                  💬
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Map & CTA */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-lg h-80 bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.1234567890!2d10.1!3d36.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2b8c0d0d0d0d1%3A0x1234567890123456!2s23%20Rue%20Tarek%20Ibn%20Zied%2C%20Ariana%202091!5e0!3m2!1sfr!2stn!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Veloura Beauty Lounge Location"
              />
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-purple-main to-purple-dark rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Prêt à Vous Transformer?</h3>
              <p className="text-white/90 mb-6">
                Contactez-nous maintenant pour réserver votre consultation ou pour toute question.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+21621467549"
                  className="flex-1 px-6 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-all text-center"
                >
                  Appeler
                </a>
                <a
                  href="https://wa.me/21621467549"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-white text-purple-main rounded-lg font-semibold hover:bg-opacity-90 transition-all text-center"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
