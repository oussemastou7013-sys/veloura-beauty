'use client'

import { Share2, Music, MessageCircle, MapPin, Clock, Phone } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-bold flex items-center gap-2">
              Sola<span className="text-accent">Beauty</span>
            </h3>
            <p className="text-white/70 font-lora text-sm leading-relaxed">
              Salon de beauté luxe dédié à l&apos;élégance, au style et aux soins exceptionnels.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-playfair font-bold text-lg">Liens Rapides</h4>
            <ul className="space-y-2">
              {[
                { label: 'Accueil', href: '#home' },
                { label: 'Services', href: '#services' },
                { label: 'Galerie', href: '#gallery' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors font-lora text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-playfair font-bold text-lg">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/70 font-lora text-sm">
                <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span>83 Av. de Londres, Tunis</span>
              </li>
              <li className="flex items-center gap-2 text-white/70 font-lora text-sm">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <a href="tel:+21655690127" className="hover:text-accent transition-colors">
                  +216 55 690 127
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/70 font-lora text-sm">
                <Clock size={16} className="text-accent flex-shrink-0" />
                <span>10:00 AM - 17:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-playfair font-bold text-lg">Nous Suivre</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/solaabeauty?igsh=aGxkbWphZHpibjN4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent/20 hover:bg-accent rounded-full flex items-center justify-center text-accent hover:text-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Share2 size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@solabeautycenter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent/20 hover:bg-accent rounded-full flex items-center justify-center text-accent hover:text-foreground transition-all duration-300"
                aria-label="TikTok"
              >
                <Music size={20} />
              </a>
              <a
                href="https://wa.me/21655690127"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent/20 hover:bg-accent rounded-full flex items-center justify-center text-accent hover:text-foreground transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10"></div>

        {/* Bottom Footer */}
        <div className="mt-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 font-lora text-sm">
              &copy; {currentYear} Sola Beauty. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4 text-white/60 font-lora text-sm">
              <a href="#" className="hover:text-accent transition-colors">
                Politique de Confidentialité
              </a>
              <span className="text-white/30">•</span>
              <a href="#" className="hover:text-accent transition-colors">
                Conditions d&apos;Utilisation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Accent Line */}
      <div className="h-1 bg-gradient-to-r from-accent via-accent to-accent/50"></div>
    </footer>
  )
}
