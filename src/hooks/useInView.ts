import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number | number[];
  rootMargin?: string;
  root?: Element | Document | null;
}

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options?: UseInViewOptions
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: options?.threshold ?? 0.15,
        rootMargin: options?.rootMargin ?? '0px 0px -50px 0px',
        root: options?.root ?? null,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [options?.threshold, options?.rootMargin, options?.root]);

  return [ref, isInView];
}
