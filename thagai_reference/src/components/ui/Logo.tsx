interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14'
  };

  // Use the same logo file, apply filter for light variant
  const filterClass = variant === 'light' ? 'brightness-0 invert' : '';

  return (
    <img
      src="/assets/logo-dark.webp"
      alt="Thagai"
      className={`${sizes[size]} w-auto object-contain ${filterClass}`}
    />
  );
}
