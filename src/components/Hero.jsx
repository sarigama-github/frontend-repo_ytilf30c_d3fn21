import { motion } from "framer-motion";
import { Button, Badge } from "./ui";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-700 via-emerald-900 to-slate-950 opacity-90" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2400)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "translateZ(0)",
          willChange: "transform",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <Badge className="mb-3">MC Alger • Vert-Rouge</Badge>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Wear the Pride of Algiers
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Official MC Alger kits and street-ready gear. Engineered for performance, made for the Vert-Rouge family.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button>Shop New Arrivals</Button>
            <Button className="bg-white text-emerald-700 hover:bg-white/90 hover:text-emerald-800">Join the Fan Club</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
