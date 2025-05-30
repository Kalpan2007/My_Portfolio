import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollOptions = {
      top: 0,
      left: 0,
      behavior: 'smooth' as const
    };

    // Delay scroll to top to allow for page transition animations
    const timeoutId = setTimeout(() => {
      window.scrollTo(scrollOptions);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}