interface LogoProps {
  variant?: 'dark' | 'light' | 'original';
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'h-10',
    md: 'h-12',
    lg: 'h-20'
  };

  // Define filters: 
  // 'light' makes it white, 
  // 'dark' keeps it original (assuming dark logo), 
  // 'original' has no filters for theme-colored images
  const filterClass = variant === 'light' ? 'brightness-0 invert' : '';

  return (
    <img
      src="/assets/logo-dark.png"
      alt="Thagai"
      className={`${sizes[size]} w-auto object-contain ${filterClass}`}
    />
  );
}
