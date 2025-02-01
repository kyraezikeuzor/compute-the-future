import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function toPath(text:string) {
  const finalString = text.toLowerCase().replaceAll(" ", "-");
  return finalString;
}

export function undoPath(path:string) {
  // Remove the leading slash
  if (path.startsWith('/')) {
      path = path.substring(1);
  }
  // Replace hyphens with spaces
  let originalString = path.replaceAll("-", " ");
  // Capitalize the first word
  originalString = originalString.charAt(0).toUpperCase() + originalString.slice(1);
  // Return the resulting string
  return originalString;
}

export function toTimespan(startDate:string, endDate:string) {
  const formattedStartDate = new Date(startDate).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
  });
  
  const formattedEndDate = new Date(endDate).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
  });

  return `${formattedStartDate} - ${formattedEndDate}`;
}

export function toDate(date:string) {
  var formattedDate = new Date(date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
  });

  return formattedDate;
}

export const getDaysLeftOrAgo = (endDate: string): string => {
  const now = new Date();
  const end = new Date(endDate);
  const timeDiff = end.getTime() - now.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  if (daysDiff > 0) {
      return `${daysDiff} days left`;
  } else if (daysDiff === 0) {
      return 'Today is the end date';
  } else {
      return `${Math.abs(daysDiff)} days ago`;
  }
}

// Usage example
const endDate = '2024-07-01';
console.log(getDaysLeftOrAgo(endDate)); // Output will depend on the current date
