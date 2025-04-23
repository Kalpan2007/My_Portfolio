"use client";

import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string[];
    backgroundImage: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="relative group block h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full rounded-3xl bg-white/10 z-10 border border-white/20"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.2 } }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
              />
            )}
          </AnimatePresence>

          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative z-20 overflow-hidden rounded-3xl shadow-xl border border-transparent hover:border-white/20"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-80" />
            </div>

            {/* Content */}
            <div className="relative z-30 p-6 flex flex-col justify-between h-full text-white space-y-4">
              <h3 className="text-xl font-semibold mb-2 drop-shadow-md">{item.title}</h3>
              <ul className="bg-black/40 backdrop-blur-md p-4 rounded-xl space-y-2 text-sm text-zinc-200 list-disc pl-5">
                {item.description.map((point, idx) => (
                  <li key={idx} className="drop-shadow-sm">{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
