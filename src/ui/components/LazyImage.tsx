import { cn } from "@app/lib/lib";

interface LazyImageProps {
  src: string;
  alt: string;
  className: string;
}

export function LazyImage({ src, alt, className }: LazyImageProps) {
  return (
    <img src={src} alt={alt} className={cn(className)} loading="lazy" />
  )
}
