import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../utils";
import { Button, Card } from "./ui";
import { useCart } from "./CartContext";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState("M");
  const { addToCart } = useCart();

  useEffect(() => {
    async function load() {
      const r = await fetch(`${BACKEND_URL}/products/${id}`);
      const d = await r.json();
      setProduct(d);
      setSize(d?.sizes?.[0] || "M");
    }
    load();
  }, [id]);

  if (!product) return <div className="max-w-6xl mx-auto px-6 py-12 text-white/70">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">
      <Card className="overflow-hidden">
        <div className="aspect-square">
          <img src={product.images?.[0]?.url} alt={product.title} className="w-full h-full object-cover" />
        </div>
      </Card>
      <div>
        <h1 className="text-3xl font-black text-white">{product.title}</h1>
        <div className="mt-2 text-emerald-400 font-bold">{product.price?.toLocaleString()} DZD</div>
        <p className="mt-4 text-white/80 leading-relaxed">{product.description}</p>
        <div className="mt-5">
          <div className="text-white/80 text-sm mb-2">Size</div>
          <div className="flex flex-wrap gap-2">
            {product.sizes?.map((s)=> (
              <button key={s} onClick={()=>setSize(s)} className={`px-3 py-1.5 rounded-lg border ${size===s?"bg-emerald-600 text-white border-emerald-500":"text-white/80 border-white/20"}`}>{s}</button>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center gap-3">
          <Button onClick={()=>addToCart({ product_id: product.id, title: product.title, price: product.price, size })}>Add to Cart</Button>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-bold text-white mb-2">Details</h3>
          <ul className="list-disc list-inside text-white/70 space-y-1 text-sm">
            <li>Fabric: performance polyester</li>
            <li>Fit: athletic; size up for looser streetwear fit</li>
            <li>Club details: embroidered MCA crest, red piping</li>
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold text-white mb-2">Size Guide</h3>
          <p className="text-white/70 text-sm">Measure chest and compare to chart: XS 84-88, S 88-92, M 92-100, L 100-108, XL 108-116, XXL 116-124 (cm).</p>
        </div>
      </div>
    </div>
  );
}
