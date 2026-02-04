import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  };

  const logoSrc = variant === 'dark'
    ? '/assets/logo-dark.png'
    : '/assets/logo-light.png';

  return (
    <img
      src={logoSrc}
      alt="Thagai"
      className={`${sizes[size]} w-auto object-contain`}
    />
  );
}
