interface LogoProps {
  variant?: 'dark' | 'light' | 'original';
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'h-12',
    md: 'h-16',
    lg: 'h-24'
  };

  // Switch file source based on variant
  // 'light' is for dark backgrounds (Footer)
  // 'dark' or 'original' is for light backgrounds (Header)
  const src = variant === 'light' ? '/assets/logo-light.png' : '/assets/logo-dark.png';

  return (
    <img
      src={src}
      alt="Thagai"
      className={`${sizes[size]} w-auto object-contain`}
    />
  );
}
