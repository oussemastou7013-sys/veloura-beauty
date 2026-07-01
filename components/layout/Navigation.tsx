'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Accueil', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Galerie', id: 'gallery' },
    { label: 'Qui Sommes Nous', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ]

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      // Add small delay to ensure DOM is ready
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 0)
    }
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled 
          ? 'bg-white/90 shadow-luxury border-b border-light-gray' 
          : 'bg-white/50 border-b border-white/20'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <motion.div
              className="text-2xl font-bold heading-gradient"
              whileHover={{ scale: 1.05 }}
            >
              Veloura
            </motion.div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
                type="button"
                className="text-dark-text hover:text-royal-purple font-medium transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+216-21-647-549"
              className="flex items-center space-x-2 px-4 py-2 text-royal-purple border-2 border-royal-purple rounded-full hover:bg-royal-purple hover:text-white transition-all duration-300"
              title="Appeler Veloura"
            >
              <Phone size={18} />
              <span className="hidden lg:inline">Appeler</span>
            </a>
            <a
              href="https://wa.me/21621647549"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-royal-purple text-white rounded-full hover:bg-rose-pink transition-all duration-300"
              title="Contacter sur WhatsApp"
            >
              <MessageCircle size={18} />
              <span className="hidden lg:inline">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden bg-white border-t border-gray-200 ${
          isOpen ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.id)
              }}
              type="button"
              className="block w-full text-left px-4 py-2 text-dark-text hover:bg-lavender rounded-lg transition-colors cursor-pointer font-medium"
              whileHover={{ x: 5 }}
            >
              {item.label}
            </motion.button>
          ))}
          <div className="flex gap-2 pt-4">
            <a
              href="tel:+216-21-647-549"
              className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 text-royal-purple border-2 border-royal-purple rounded-full hover:bg-royal-purple hover:text-white transition-colors"
              title="Appeler Veloura"
            >
              <Phone size={18} />
              <span>Appeler</span>
            </a>
            <a
              href="https://wa.me/21621647549"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-royal-purple text-white rounded-full hover:bg-rose-pink transition-all"
              title="Contacter sur WhatsApp"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  )
}
