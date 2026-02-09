import React from 'react';
import { Button } from './ui/Button';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
export function AudienceSections() {
  return (
    <section id="families" className="py-24 bg-cream-dark overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* For Seniors */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32 relative">
          {/* Decorative Background Blob */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-teal/5 rounded-full blur-3xl -z-10"></div>

          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="lg:w-1/2 relative">

            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop"
                alt="Senior woman doctor consultation"
                className="rounded-[3rem] shadow-2xl w-full max-w-md mx-auto lg:mx-0 rotate-[-3deg] border-8 border-white" />

              <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] hidden md:block">
                <p className="font-serif text-lg italic text-brown">
                  "I feel more independent than ever."
                </p>
              </div>
            </div>
            {/* Background shape */}
            <div className="absolute top-10 -left-10 w-full h-full bg-teal rounded-[3rem] -z-10 rotate-[3deg] opacity-20"></div>
          </motion.div>

          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal-dark text-sm font-bold tracking-wide uppercase">
              For Seniors
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown leading-tight">
              Maintain Your{' '}
              <span className="text-teal italic">Independence</span> & Joy
            </h2>
            <p className="text-lg text-brown/70 leading-relaxed">
              Aging shouldn't mean giving up what you love. Our Services empowers
              you to maintain your independence, stay active in your community,
              and enjoy the comfort of your own home.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Daily routine support',
                'Social connection',
                'Transportation help',
                'Dignified care'].
                map((item, i) =>
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/50 border border-brown/5">

                    <div className="w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <span className="font-medium text-brown">{item}</span>
                  </div>
                )}
            </div>

            <Button
              variant="primary"
              className="mt-4 bg-teal hover:bg-teal-dark border-transparent">

              Explore Senior Services
            </Button>
          </div>
        </div>

        {/* For Families */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 relative">
          {/* Decorative Background Blob */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-coral/5 rounded-full blur-3xl -z-10"></div>

          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="lg:w-1/2 relative">

            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop"
                alt="Family visiting grandmother"
                className="rounded-[3rem] shadow-2xl w-full max-w-md mx-auto lg:ml-auto rotate-[3deg] border-8 border-white" />

              <div className="absolute -top-10 -left-10 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] hidden md:block">
                <div className="flex -space-x-2 mb-2">
                  {[1, 2, 3].map((i) =>
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white">
                    </div>
                  )}
                </div>
                <p className="font-serif text-sm text-brown font-bold">
                  Trusted by families like yours
                </p>
              </div>
            </div>
            {/* Background shape */}
            <div className="absolute top-10 -right-10 w-full h-full bg-coral rounded-[3rem] -z-10 rotate-[-3deg] opacity-20"></div>
          </motion.div>

          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-coral/10 text-coral-dark text-sm font-bold tracking-wide uppercase">
              For Families
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown leading-tight">
              Total <span className="text-coral italic">Peace of Mind</span> for
              You
            </h2>
            <p className="text-lg text-brown/70 leading-relaxed">
              We act as an extension of your family, providing reliable care and
              constant communication so you can rest easy knowing your loved one
              is safe, happy, and well-cared for.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: 'Real-time Updates',
                  desc: 'Get photos and notes after every visit.'
                },
                {
                  title: 'Consistent Caregivers',
                  desc: 'Familiar faces your loved one trusts.'
                },
                {
                  title: '24/7 Support',
                  desc: 'We are always just a phone call away.'
                }].
                map((item, i) =>
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-coral/20 flex items-center justify-center text-coral-dark flex-shrink-0 mt-1">
                      <Check size={20} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brown text-lg">
                        {item.title}
                      </h4>
                      <p className="text-brown/70">{item.desc}</p>
                    </div>
                  </div>
                )}
            </div>

            <Button
              variant="primary"
              className="mt-4 bg-coral hover:bg-coral-dark border-transparent">

              Family Support Guide <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>);

}