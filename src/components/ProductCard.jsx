import { Heart, Star } from "lucide-react";
import { Button, Card } from "./ui";
import { useCart } from "./CartContext";

export default function ProductCard({ product, onView }) {
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const wished = wishlist?.some((w) => w.id === product.id);

  return (
    <Card className="group bg-gradient-to-br from-slate-900/70 to-slate-950/70">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={product.images?.[0]?.url} alt={product.images?.[0]?.alt || product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <button
          onClick={() => toggleWishlist(product)}
          className={`absolute top-3 right-3 p-2 rounded-full bg-white/10 border border-white/20 backdrop-blur text-white hover:bg-white/20 transition ${wished ? "text-red-400" : ""}`}
        >
          <Heart size={18} />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-white line-clamp-1">{product.title}</h3>
          <div className="text-emerald-400 font-bold">{product.price.toLocaleString()} DZD</div>
        </div>
        <div className="flex items-center gap-1 mt-1 text-yellow-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={14} className={i < Math.round(product.rating || 0) ? "fill-yellow-400" : "opacity-30"} />
          ))}
          <span className="text-xs text-white/60 ml-1">({product.reviews_count || 0})</span>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <Button onClick={() => onView?.(product)}>View</Button>
          <Button onClick={() => addToCart({ product_id: product.id, title: product.title, price: product.price, size: product.sizes?.[0] || "M" })} className="bg-emerald-600 hover:bg-emerald-500">Add to Cart</Button>
        </div>
      </div>
    </Card>
  );
}
