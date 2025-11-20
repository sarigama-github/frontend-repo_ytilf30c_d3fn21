import { useState } from "react";
import { useCart } from "./CartContext";
import { BACKEND_URL } from "../utils";
import { Button, Card } from "./ui";

export default function Checkout(){
  const { cart, total } = useCart();
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");

  const handleCheckout = async () => {
    try {
      setStatus("Processing...");
      const r = await fetch(`${BACKEND_URL}/checkout`,{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
          items: cart.map(c=>({ product_id: c.product_id, title: c.title, price: c.price, qty: c.qty, size: c.size })),
          email,
          shipping_address: { line1: address }
        })
      });
      const d = await r.json();
      if (d.status === "ok") setStatus(`Order placed! ID: ${d.order_id} • Total: ${d.total.toLocaleString()} DZD`);
      else setStatus("Something went wrong.");
    } catch (e) {
      console.error(e);
      setStatus("Checkout failed.");
    }
  };

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="p-6">
            <h1 className="text-2xl font-black text-white mb-4">Checkout</h1>
            <div className="grid gap-3 max-w-xl">
              <input className="px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/60 border border-white/15 focus:border-white/40 outline-none" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
              <input className="px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/60 border border-white/15 focus:border-white/40 outline-none" placeholder="Shipping address" value={address} onChange={(e)=>setAddress(e.target.value)} />
              <Button onClick={handleCheckout}>Place Order</Button>
              {status && <div className="text-white/80 text-sm">{status}</div>}
            </div>
          </Card>
        </div>
        <Card className="p-6 h-fit sticky top-24">
          <div className="text-white font-bold text-lg">Summary</div>
          <div className="mt-2 text-white/70 flex items-center justify-between">
            <span>Total</span>
            <span className="text-white">{total.toLocaleString()} DZD</span>
          </div>
        </Card>
      </div>
    </section>
  );
}
