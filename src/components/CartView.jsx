import { useCart } from "./CartContext";
import { Button, Card } from "./ui";
import { Link } from "react-router-dom";

export default function CartView(){
  const { cart, removeFromCart, updateQty, total } = useCart();

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          {cart.length===0 ? (
            <Card className="p-6 text-white/70">Your cart is empty.</Card>
          ) : cart.map((it)=> (
            <Card key={`${it.product_id}-${it.size}`} className="p-4 flex items-center justify-between">
              <div>
                <div className="text-white font-semibold">{it.title}</div>
                <div className="text-white/60 text-sm">Size: {it.size}</div>
              </div>
              <div className="flex items-center gap-3">
                <select value={it.qty} onChange={(e)=>updateQty(it.product_id, it.size, parseInt(e.target.value))} className="px-2 py-1 rounded bg-white/10 text-white border border-white/15">
                  {[1,2,3,4,5].map(n=> <option key={n} value={n}>{n}</option>)}
                </select>
                <div className="text-emerald-400 font-semibold">{(it.price*it.qty).toLocaleString()} DZD</div>
                <Button className="bg-red-600 hover:bg-red-500" onClick={()=>removeFromCart(it.product_id, it.size)}>Remove</Button>
              </div>
            </Card>
          ))}
        </div>
        <Card className="p-6 h-fit sticky top-24">
          <div className="text-white font-bold text-lg">Order Summary</div>
          <div className="mt-2 text-white/70 flex items-center justify-between">
            <span>Subtotal</span>
            <span className="text-white">{total.toLocaleString()} DZD</span>
          </div>
          <Link to="/checkout"><Button className="w-full mt-5">Proceed to Checkout</Button></Link>
        </Card>
      </div>
    </section>
  );
}
