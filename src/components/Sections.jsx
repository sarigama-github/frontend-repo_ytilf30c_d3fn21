import { useEffect, useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { BACKEND_URL } from "../utils";

export function NewArrivals() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const r = await fetch(`${BACKEND_URL}/products`);
        const d = await r.json();
        setItems(d);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-black text-white">New Arrivals</h2>
        </div>
        {loading ? (
          <p className="text-white/70">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} onView={() => window.dispatchEvent(new CustomEvent("open-product", { detail: p }))} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function BestSellers({ products = [] }) {
  const featured = useMemo(() => products.slice(0, 3), [products]);
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:3xl font-black text-white mb-6">Fan Favorites</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClubHistory() {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-3xl font-black text-white mb-3">MC Alger: Founded 1921</h3>
          <p className="text-white/80">
            A symbol of Algerian pride. From the heart of Algiers, MC Alger has forged a legacy of
            passion, resilience, and victory. Join the Vert-Rouge spirit with gear crafted for fans
            worldwide.
          </p>
        </div>
        <img className="rounded-2xl border border-white/10 shadow-xl" src="https://images.unsplash.com/photo-1511317559916-56d5ddb62563?q=80&w=1400" alt="Stadium" />
      </div>
    </section>
  );
}

export function NewsletterCTA() {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-black text-white">Join the Vert-Rouge Family</h3>
        <p className="text-white/70 mt-2">New drops, exclusive offers, and MCA news straight to your inbox.</p>
        <form className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <input className="px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/60 border border-white/15 focus:border-white/40 outline-none min-w-[260px]" placeholder="Enter your email" />
          <button className="px-5 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-500">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
