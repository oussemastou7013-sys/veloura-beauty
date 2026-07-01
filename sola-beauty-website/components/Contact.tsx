'use client'

import { MapPin, Phone, Clock, MessageCircle, Share2, Music } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Nous Contacter
          </h2>
          <p className="text-lg text-muted-foreground font-lora max-w-2xl mx-auto">
            Visitez-nous ou contactez-nous pour plus d&apos;informations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fadeInUp">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-8">
                Informations de Contact
              </h3>
            </div>

            {/* Address */}
            <div className="flex gap-4 group">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <MapPin size={24} className="text-accent group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="font-playfair font-bold text-foreground mb-1">Adresse</h4>
                <p className="text-muted-foreground font-lora">
                  83 Av. de Londres<br />
                  Tunis, Tunisie
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 group">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <Phone size={24} className="text-accent group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="font-playfair font-bold text-foreground mb-1">Téléphone</h4>
                <a href="tel:+21655690127" className="text-accent hover:underline font-lora">
                  +216 55 690 127
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex gap-4 group">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <MessageCircle size={24} className="text-accent group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="font-playfair font-bold text-foreground mb-1">WhatsApp</h4>
                <a
                  href="https://wa.me/21655690127"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-lora"
                >
                  +216 55 690 127
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4 group">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <Clock size={24} className="text-accent group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="font-playfair font-bold text-foreground mb-1">Horaires</h4>
                <p className="text-muted-foreground font-lora">
                  Lundi - Dimanche<br />
                  10:00 AM - 17:00 PM
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-playfair font-bold text-foreground mb-4">Suivez Nous</h4>
              <div className="flex gap-4">
              <a
                href="https://www.instagram.com/solaabeauty?igsh=aGxkbWphZHpibjN4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white hover:bg-accent/90 transition-all duration-300 hover:shadow-lg"
              >
                <Share2 size={20} />
              </a>
                <a
                  href="https://www.tiktok.com/@solabeautycenter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white hover:bg-accent/90 transition-all duration-300 hover:shadow-lg"
                >
                  <Music size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Map & CTA */}
          <div className="space-y-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            {/* Map */}
            <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.3862820768776!2d10.197433!3d36.8065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd31d6a6b6b6b7%3A0x6b6b6b6b6b6b6b6b!2s83%20Av.%20de%20Londres%2C%20Tunis!5e0!3m2!1sfr!2stn!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sola Beauty Location"
              ></iframe>
            </div>

            {/* CTA Cards */}
            <div className="space-y-4">
              <a
                href="https://wa.me/21655690127"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-accent text-white px-8 py-4 rounded-lg text-center font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contacter Sur WhatsApp
              </a>

              <a
                href="tel:+21655690127"
                className="block w-full bg-foreground text-white px-8 py-4 rounded-lg text-center font-semibold hover:bg-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Appeler Maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
