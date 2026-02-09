import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from './ui/Button';
import { Phone, Mail, Loader2, AlertCircle } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number must be 10 digits").max(10, "Phone number must be 10 digits"),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const contentType = response.headers.get('content-type');
      const isJson = contentType && contentType.includes('application/json');

      if (response.ok && isJson) {
        const result = await response.json();

        if (response.status === 207) {
          setStatus('error');
          setErrorMessage(`Message partially sent: ${result.warnings?.join(', ') || 'Email failed'}`);
        } else {
          setStatus('success');
          reset();
          setTimeout(() => setStatus('idle'), 5000);
        }
      } else {
        let errorMessage = 'Something went wrong';
        if (response.ok && !isJson) {
          errorMessage = 'API returned invalid response (HTML). Is the backend running?';
        } else {
          try {
            if (isJson) {
              const result = await response.json();
              errorMessage = result.message || errorMessage;
            } else {
              errorMessage = await response.text() || response.statusText;
            }
          } catch (e) {
            errorMessage = response.statusText || 'Unknown server error';
          }
        }
        throw new Error(errorMessage);
      }
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'Failed to send message. Please try again.');
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-24 bg-burgundy text-white relative overflow-hidden">

      {/* Rich Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Existing Wave Pattern with lower opacity */}
        <svg
          className="absolute w-full h-full opacity-5"
          viewBox="0 0 100 100"
          preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#e6d9cd" />
        </svg>

        {/* New Decorative Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4"></div>

        {/* Floating Icons for Dark Background */}
        <div className="absolute top-20 left-[10%] opacity-10 animate-float">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
            <circle cx="12" cy="12" r="10" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="absolute bottom-40 right-[15%] opacity-10 animate-float-delayed">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gold">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream">
              Let's Start a Conversation
            </h2>
            <p className="text-lg text-cream/90 leading-relaxed max-w-md">
              We understand that choosing care is a big decision. We're here to
              listen, answer your questions, and help you find the right path
              for your family—no pressure, just support.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-cream group-hover:bg-gold transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs text-cream/70 uppercase tracking-wider mb-0.5">
                    Call Us Anytime
                  </div>
                  <div className="text-xl font-serif font-bold">
                    +91 80726 50628
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-cream group-hover:bg-teal transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-cream/70 uppercase tracking-wider mb-0.5">
                    Email Us
                  </div>
                  <div className="text-lg font-serif">hello.thagai@gmail.com</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cream rounded-[2rem] p-6 md:p-8 shadow-2xl text-brown max-w-lg mx-auto w-full">
            <h3 className="font-serif text-xl font-bold mb-4">
              Send Us a Message
            </h3>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center relative overflow-hidden min-h-[400px]">
                {/* Success Animation Container */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                  className="relative mb-8"
                >
                  {/* Outer pulsing rings */}
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeOut"
                      }}
                      className="absolute inset-0 bg-teal/20 rounded-full blur-md"
                    />
                  ))}

                  {/* Main Icon Circle */}
                  <div className="w-24 h-24 bg-gradient-to-br from-teal/10 to-teal/20 rounded-full flex items-center justify-center relative z-10 shadow-lg border border-teal/20">
                    <svg className="w-10 h-10 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <motion.path
                        d="M20 6L9 17l-5-5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                      />
                    </svg>
                  </div>

                  {/* Decorative particles */}
                  {[
                    { x: -40, y: -40, color: 'bg-gold' },
                    { x: 40, y: -50, color: 'bg-burgundy' },
                    { x: -50, y: 30, color: 'bg-teal' },
                    { x: 50, y: 40, color: 'bg-gold' },
                    { x: 0, y: -70, color: 'bg-teal' },
                  ].map((p, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-2 h-2 rounded-full ${p.color}`}
                      initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                      animate={{
                        x: p.x,
                        y: p.y,
                        opacity: 0,
                        scale: [1, 0.5]
                      }}
                      transition={{
                        duration: 1.5,
                        delay: 0.3,
                        ease: "easeOut"
                      }}
                      style={{ top: '50%', left: '50%', marginTop: -4, marginLeft: -4 }}
                    />
                  ))}
                </motion.div>

                {/* Text Content */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="space-y-3 relative z-10"
                >
                  <h4 className="text-3xl font-serif font-bold text-brown">
                    Thank You!
                  </h4>
                  <p className="text-brown/70 max-w-xs mx-auto text-lg leading-relaxed">
                    We've received your message and will get back to you shortly.
                  </p>
                </motion.div>

                {/* Button */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="mt-8 relative z-10"
                >
                  <Button
                    onClick={() => setStatus('idle')}
                    variant="outline"
                    className="border-teal/30 text-teal hover:bg-teal hover:text-white transition-all hover:scale-105"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-brown/70 uppercase tracking-wide">
                      Name <span className="text-teal">*</span>
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      id="name"
                      className={`w-full px-3 py-2 rounded-lg bg-white border ${errors.name ? 'border-red-500' : 'border-brown/10'} focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-all text-sm`}
                      placeholder="Your Name" />
                    {errors.name && <p className="text-xs text-red-500 font-medium mt-1">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-brown/70 uppercase tracking-wide">
                      Phone Number <span className="text-teal">*</span>
                    </label>
                    <input
                      {...register('phoneNumber')}
                      type="tel"
                      id="phone"
                      className={`w-full px-3 py-2 rounded-lg bg-white border ${errors.phoneNumber ? 'border-red-500' : 'border-brown/10'} focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-all text-sm`}
                      placeholder="Your Phone Number" />
                    {errors.phoneNumber && <p className="text-xs text-red-500 font-medium mt-1">{errors.phoneNumber.message}</p>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-brown/70 uppercase tracking-wide">
                    Email Address <span className="text-teal">*</span>
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className={`w-full px-3 py-2 rounded-lg bg-white border ${errors.email ? 'border-red-500' : 'border-brown/10'} focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-all text-sm`}
                    placeholder="Your Email Address" />
                  {errors.email && <p className="text-xs text-red-500 font-medium mt-1">{errors.email.message}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-brown/70 uppercase tracking-wide">
                    How can we help?
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={3}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-brown/10 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-all resize-none text-sm"
                    placeholder="Tell us about your loved one's needs...">
                  </textarea>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-3 rounded-lg">
                    <AlertCircle size={16} />
                    <p className="text-xs font-medium">{errorMessage}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-burgundy hover:bg-burgundy-dark flex items-center justify-center gap-2 py-2.5 text-sm"
                  size="sm">
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="animate-spin" size={16} />
                      Sending...
                    </>
                  ) : (
                    'Request Free Consultation'
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section >
  );
}
