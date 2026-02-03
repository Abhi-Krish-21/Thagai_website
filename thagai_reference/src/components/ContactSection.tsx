import React from 'react';
import { Button } from './ui/Button';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-burgundy text-white relative overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none">

          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#FAF7F2" />
        </svg>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-coral rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal rounded-full blur-[100px] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Newsletter Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-8 md:p-12 mb-20 border border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                Stay Connected
              </h3>
              <p className="text-white/80">
                Join our newsletter for caregiving tips, health advice, and
                community stories.
              </p>
            </div>
            <div className="flex w-full lg:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 lg:w-80 px-6 py-4 rounded-full bg-white text-brown placeholder:text-brown/40 focus:outline-none focus:ring-2 focus:ring-coral" />

              <button className="w-14 h-14 rounded-full bg-coral hover:bg-coral-light flex items-center justify-center text-white transition-colors shadow-lg">
                <Send size={24} />
              </button>
            </div>
          </div>
        </div>

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

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-cream group-hover:bg-gold transition-colors">
                  <MapPin size={28} />
                </div>
                <div>
                  <div className="text-sm text-cream/70 uppercase tracking-wider mb-1">
                    Visit Us
                  </div>
                  <div className="text-xl font-serif">
                    123 Oak Lane, Serenity Valley, CA
                  </div>
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

                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-brown/10 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-all"
                    placeholder="John Doe" />

                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-bold text-brown/70 uppercase tracking-wide">

                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-brown/10 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-all"
                    placeholder="+91 XXXXX XXXXX" />

                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-bold text-brown/70 uppercase tracking-wide">

                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-brown/10 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-all"
                  placeholder="john@example.com" />

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