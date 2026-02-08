import React from 'react';
import { motion } from 'framer-motion';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}
export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-burgundy disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    primary:
      'bg-burgundy text-white hover:bg-burgundy-light shadow-lg hover:shadow-xl hover:-translate-y-0.5',
    secondary:
      'bg-gold text-white hover:bg-gold-light shadow-lg hover:shadow-xl hover:-translate-y-0.5',
    outline:
      'border-2 border-burgundy text-burgundy hover:bg-burgundy hover:text-white',
    ghost: 'text-brown hover:bg-cream-dark hover:text-burgundy',
    white:
      'bg-white text-burgundy hover:bg-cream shadow-lg hover:shadow-xl hover:-translate-y-0.5'
  };
  const sizes = {
    sm: 'h-10 px-5 text-sm',
    md: 'h-12 px-8 text-base',
    lg: 'h-14 px-10 text-lg'
  };
  return (
    <motion.button
      whileTap={{
        scale: 0.98
      }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}>

      {children}
    </motion.button>);

}