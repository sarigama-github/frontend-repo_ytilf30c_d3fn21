export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";
