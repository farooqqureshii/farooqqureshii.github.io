import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
  }).format(date);
}

export function getWordCount(content: string): number {
  // Remove markdown syntax and count words
  const cleanContent = content
    .replace(/[#*`~\[\]()]/g, '') // Remove markdown syntax
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim();
  
  return cleanContent.split(' ').filter(word => word.length > 0).length;
}

export function getReadingTime(wordCount: number): number {
  // Average reading speed is 200-250 words per minute
  // Using 225 words per minute as a reasonable average
  const wordsPerMinute = 225;
  return Math.ceil(wordCount / wordsPerMinute);
}
