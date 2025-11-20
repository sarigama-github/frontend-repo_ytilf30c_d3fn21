import { cn } from "../utils";

export function Button({ className = "", children, ...props }) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-lg font-semibold transition-all",
        "bg-gradient-to-r from-emerald-600 to-red-600 text-white hover:from-emerald-500 hover:to-red-500",
        "shadow-lg hover:shadow-emerald-600/25",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function Badge({ children, className = "" }) {
  return <span className={cn("inline-flex items-center px-2 py-1 text-xs rounded-full bg-white/10 text-white", className)}>{children}</span>;
}

export function Input(props) {
  return <input {...props} className={cn("w-full px-3 py-2 rounded-lg bg-white/10 text-white placeholder-white/60 outline-none border border-white/15 focus:border-white/40", props.className)} />;
}

export function Select(props) {
  return <select {...props} className={cn("w-full px-3 py-2 rounded-lg bg-white/10 text-white outline-none border border-white/15 focus:border-white/40", props.className)} />;
}

export function Card({ children, className = "" }) {
  return <div className={cn("rounded-2xl bg-slate-900/60 border border-white/10 shadow-xl overflow-hidden", className)}>{children}</div>;
}
