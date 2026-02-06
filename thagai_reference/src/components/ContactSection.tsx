import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from './ui/Button';
import { Phone, Mail, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

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
        setStatus('success');
        reset();
        setTimeout(() => setStatus('idle'), 5000);
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
      className="pt-12 pb-40 bg-burgundy text-white relative overflow-hidden">

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
                  <div className="text-2xl font-serif font-bold">
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

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-teal/10 flex items-center justify-center text-teal">
                  <CheckCircle2 size={48} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-brown">Message Sent!</h4>
                <p className="text-brown/70">Thank you for reaching out. We'll be in touch with you shortly.</p>
                <Button onClick={() => setStatus('idle')} variant="outline">Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-brown/70 uppercase tracking-wide">
                      Name <span className="text-coral">*</span>
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      id="name"
                      className={`w-full px-4 py-3 rounded-xl bg-white border ${errors.name ? 'border-coral' : 'border-brown/10'} focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-all`}
                      placeholder="Your Name" />
                    {errors.name && <p className="text-xs text-coral font-medium mt-1">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-brown/70 uppercase tracking-wide">
                      Phone Number <span className="text-coral">*</span>
                    </label>
                    <input
                      {...register('phoneNumber')}
                      type="tel"
                      id="phone"
                      className={`w-full px-4 py-3 rounded-xl bg-white border ${errors.phoneNumber ? 'border-coral' : 'border-brown/10'} focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-all`}
                      placeholder="Your Phone Number" />
                    {errors.phoneNumber && <p className="text-xs text-coral font-medium mt-1">{errors.phoneNumber.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-brown/70 uppercase tracking-wide">
                    Email Address <span className="text-coral">*</span>
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 rounded-xl bg-white border ${errors.email ? 'border-coral' : 'border-brown/10'} focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-all`}
                    placeholder="Your Email Address" />
                  {errors.email && <p className="text-xs text-coral font-medium mt-1">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-brown/70 uppercase tracking-wide">
                    How can we help?
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-brown/10 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-all resize-none"
                    placeholder="Tell us about your loved one's needs...">
                  </textarea>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-coral bg-coral/10 p-4 rounded-xl">
                    <AlertCircle size={20} />
                    <p className="text-sm font-medium">{errorMessage}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-burgundy hover:bg-burgundy-dark flex items-center justify-center gap-2"
                  size="lg">
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
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
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-cream pointer-events-none z-0"></div>
    </section>
  );
}
