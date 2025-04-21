import { useRef, useEffect, useState } from 'react';
import { useSprings, animated, SpringValue } from '@react-spring/web';

const AnimatedSpan = animated.span as React.ComponentProps<typeof animated.span>;

const Loader = () => {
  const text = "Entering 3Kverse...";
  const elements = text.split(' ');
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  const defaultFrom = { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-50px,0)' };
  const defaultTo = [
    { filter: 'blur(5px)', opacity: 0.5, transform: 'translate3d(0,5px,0)' },
    { filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const springs = useSprings(
    elements.length,
    elements.map((_, i) => ({
      from: defaultFrom,
      to: inView
        ? async (next: (arg: Record<string, SpringValue<any>>) => Promise<void>) => {
          for (const step of defaultTo) {
            await next(step);
          }
        }
        : defaultFrom,
      delay: i * 150,
      config: { easing: (t: number) => 1 - Math.pow(1 - t, 3) }, // easeOutCubic
    }))
  );

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black text-white">
      <p ref={ref} className="flex flex-wrap text-3xl md:text-5xl font-semibold text-center">
        {springs.map((props, index) => {
          const word = elements[index];
          const isHighlight = word.includes("3Kverse");

          return (
            <AnimatedSpan
              key={index}
              style={props}
              className={`inline-block will-change-[transform,filter,opacity] mx-1 
    ${isHighlight ? "bg-gradient-to-r from-cyan-300 to-blue-500 text-transparent bg-clip-text glow-soft" : ""}
  `}
            >
              {word}
              {index < elements.length - 1 && '\u00A0'}
            </AnimatedSpan>

          );
        })}
      </p>

      {/* Optional glowing effect animation */}
      <style>{`
  @keyframes glow {
    0%, 100% {
      text-shadow: 0 0 4px rgba(0,255,255,0.4), 0 0 6px rgba(0,255,255,0.3);
    }
    50% {
      text-shadow: 0 0 8px rgba(0,204,255,0.5), 0 0 12px rgba(0,204,255,0.4);
    }
  }
  .glow-soft {
    animation: glow 2s ease-in-out infinite;
  }
`}</style>

    </div>
  );
};

export default Loader;
