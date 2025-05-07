import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Tailwind-aware merge
export function cns(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Simple class joiner
export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
