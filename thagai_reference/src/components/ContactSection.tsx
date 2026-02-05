import React from 'react';
import { Button } from './ui/Button';
import { Phone, Mail } from 'lucide-react';
export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-burgundy text-white relative overflow-hidden">

      {/* No gradient here - ContactSection is fully purple. Gradient is in ServicesGrid */}

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none">

          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#e6d9cd" />
        </svg>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-coral rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal rounded-full blur-[100px] opacity-30"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-coral/40 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-gold/40 rounded-full animate-float-delayed"></div>
      <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-teal/30 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-cream/20 rounded-full animate-float-delayed"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream">
              Let's Start a Conversation
            </h2>
            <p className="text-xl text-cream/90 leading-relaxed">
              We understand that choosing care is a big decision. We're here to
              listen, answer your questions, and help you find the right path
              for your family—no pressure, just support.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-cream group-hover:bg-coral transition-colors">
                  <Phone size={28} />
                </div>
                <div>
                  <div className="text-sm text-cream/70 uppercase tracking-wider mb-1">
                    Call Us Anytime
                  </div>
                  <div className="text-3xl font-serif font-bold">
                    +91 80726 50628
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-cream group-hover:bg-teal transition-colors">
                  <Mail size={28} />
                </div>
                <div>
                  <div className="text-sm text-cream/70 uppercase tracking-wider mb-1">
                    Email Us
                  </div>
                  <div className="text-xl font-serif">hello.thagai@gmail.com</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cream rounded-[2.5rem] p-8 md:p-10 shadow-2xl text-brown">
            <h3 className="font-serif text-2xl font-bold mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-bold text-brown/70 uppercase tracking-wide">

                    Name <span className="text-coral">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-brown/10 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-all"
                    placeholder="Your Name" />

                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-bold text-brown/70 uppercase tracking-wide">

                    Phone Number <span className="text-coral">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-brown/10 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-all"
                    placeholder="Your Phone Number" />

                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-bold text-brown/70 uppercase tracking-wide">

                  Email Address <span className="text-coral">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white border border-brown/10 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-all"
                  placeholder="Your Email Address" />

              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-bold text-brown/70 uppercase tracking-wide">

                  How can we help?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-brown/10 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-all resize-none"
                  placeholder="Tell us about your loved one's needs...">
                </textarea>
              </div>

              <Button
                className="w-full bg-burgundy hover:bg-burgundy-dark"
                size="lg">

                Request Free Consultation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>);

}