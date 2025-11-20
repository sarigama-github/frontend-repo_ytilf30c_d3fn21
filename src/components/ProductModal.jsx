import { useEffect, useState } from "react";
import { Button, Card } from "./ui";
import { useCart } from "./CartContext";

export default function ProductModal() {
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState("M");
  const { addToCart } = useCart();

  useEffect(() => {
    const onOpen = (e) => {
      setProduct(e.detail);
      setSize(e.detail?.sizes?.[0] || "M");
    };
    window.addEventListener("open-product", onOpen);
    return () => window.removeEventListener("open-product", onOpen);
  }, []);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setProduct(null)}>
      <Card className="max-w-3xl w-full grid md:grid-cols-2 overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="relative aspect-square">
          <img src={product.images?.[0]?.url} alt={product.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white">{product.title}</h3>
          <p className="text-white/70 mt-2 text-sm leading-relaxed">{product.description}</p>
          <div className="mt-3 text-emerald-400 font-bold">{product.price.toLocaleString()} DZD</div>
          <div className="mt-4">
            <div className="text-white/80 text-sm mb-2">Select size</div>
            <div className="flex flex-wrap gap-2">
              {product.sizes?.map((s) => (
                <button key={s} onClick={() => setSize(s)} className={`px-3 py-1.5 rounded-lg border ${size === s ? "bg-emerald-600 text-white border-emerald-500" : "text-white/80 border-white/20"}`}>
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <Button onClick={() => { addToCart({ product_id: product.id, title: product.title, price: product.price, size }); setProduct(null); }}>Add to Cart</Button>
            <Button className="bg-white text-emerald-700 hover:bg-white/90" onClick={() => setProduct(null)}>Close</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
