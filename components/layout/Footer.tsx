'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-r from-deep-purple via-royal-purple to-rose-pink text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <motion.div
          className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12"
          {...fadeInUp}
        >
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold mb-4 heading-gradient">Veloura</h3>
            <p className="text-white/90 font-light">
              Votre destination ultime pour la beauté et le bien-être de luxe.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: 'Services', href: '#services' },
                { label: 'Galerie', href: '#gallery' },
                { label: 'À Propos', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>Manucure & Pédicure</li>
              <li>Extensions Cils</li>
              <li>Maquillage</li>
              <li>Soins du Visage</li>
              <li>Coiffure & Extensions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>
                <a href="tel:+21621467549" className="hover:text-white transition-colors">
                  +216 21 467 549
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/21621467549"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/veloura_beauty_lounge_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/20" />

        {/* Bottom Footer */}
        <motion.div
          className="py-8 flex flex-col md:flex-row justify-between items-center text-white/70 text-sm"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <p>
            © {currentYear} Veloura Beauty Lounge. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span>Conçu avec</span>
            <Heart size={16} className="fill-pink-accent text-pink-accent" />
            <span>pour la beauté</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
