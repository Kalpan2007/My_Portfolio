import React, { useEffect, useState } from "react";

interface TextFadeInProps {
  lines: { text: string; className?: string }[];
  delay?: number; // ms between lines
}

const TextFadeIn: React.FC<TextFadeInProps> = ({ lines, delay = 700 }) => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < lines.length) {
      const timer = setTimeout(() => setVisibleCount(visibleCount + 1), delay);
      return () => clearTimeout(timer);
    }
  }, [visibleCount, lines.length, delay]);

  return (
    <div>
      {lines.map((line, i) => (
        <p
          key={i}
          className={`
            ${line.className ?? ""}
            transition-opacity duration-700
            ${i < visibleCount ? "opacity-100" : "opacity-0"}
            font-medium tracking-wide
            text-shadow-glow
          `}
        >
          {line.text}
        </p>
      ))}
    </div>
  );
};

export default TextFadeIn;
