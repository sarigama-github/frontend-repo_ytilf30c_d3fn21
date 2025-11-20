import { useEffect, useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { BACKEND_URL } from "../utils";
import { Input, Select, Button } from "./ui";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [collection, setCollection] = useState("");

  useEffect(() => {
    async function load() {
      setLoading(true);
      const params = new URLSearchParams();
      if (q) params.set("q", q);
      if (category) params.set("category", category);
      if (color) params.set("color", color);
      if (size) params.set("size", size);
      if (collection) params.set("collection", collection);
      try {
        const r = await fetch(`${BACKEND_URL}/products?${params.toString()}`);
        const d = await r.json();
        setItems(d);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [q, category, color, size, collection]);

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-black text-white">Shop</h1>
            <p className="text-white/70">Find your MC Alger gear by type, color, size, or collection.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 w-full md:w-auto">
            <Input placeholder="Search products" value={q} onChange={(e)=>setQ(e.target.value)} className="md:col-span-2" />
            <Select value={category} onChange={(e)=>setCategory(e.target.value)}>
              <option value="">All Types</option>
              <option value="t-shirt">T-Shirts</option>
              <option value="tracksuit">Tracksuits</option>
              <option value="hoodie">Hoodies</option>
              <option value="jacket">Jackets</option>
              <option value="hat">Hats</option>
              <option value="scarf">Scarves</option>
              <option value="socks">Socks</option>
              <option value="training">Training Gear</option>
            </Select>
            <Select value={color} onChange={(e)=>setColor(e.target.value)}>
              <option value="">All Colors</option>
              <option value="green">Green</option>
              <option value="red">Red</option>
              <option value="white">White</option>
            </Select>
            <Select value={size} onChange={(e)=>setSize(e.target.value)}>
              <option value="">All Sizes</option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
            </Select>
            <Select value={collection} onChange={(e)=>setCollection(e.target.value)}>
              <option value="">All Collections</option>
              <option value="home">Home</option>
              <option value="training">Training</option>
              <option value="retro">Retro</option>
            </Select>
          </div>
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
