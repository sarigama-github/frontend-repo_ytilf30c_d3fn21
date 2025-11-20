import Hero from "./components/Hero";
import { NewArrivals, ClubHistory, NewsletterCTA } from "./components/Sections";
import ProductModal from "./components/ProductModal";
import { CartProvider, useCart } from "./components/CartContext";
import { ShoppingCart, Menu } from "lucide-react";

function Navbar() {
  const { cart } = useCart();
  const count = cart.reduce((a, i) => a + i.qty, 0);
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-slate-950/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg border border-white/15 text-white/80 hover:bg-white/10 md:hidden"><Menu size={18} /></button>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
          </div>
          <span className="ml-2 font-black text-white tracking-wide">MC Alger Store</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-white/80">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#shop" className="hover:text-white">Shop</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <div className="relative text-white">
            <ShoppingCart />
            {count > 0 && <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full px-1.5">{count}</span>}
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-16 py-10 border-t border-white/10 bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-6 text-white/70 text-sm grid md:grid-cols-3 gap-6">
        <div>
          <div className="font-bold text-white">MC Alger Store</div>
          <p className="mt-2">Premium fan gear for the Vert-Rouge family worldwide.</p>
        </div>
        <div>
          <div className="font-semibold text-white">Support</div>
          <ul className="mt-2 space-y-1">
            <li>Shipping & Returns</li>
            <li>FAQ</li>
            <li>Size Guide</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Contact</div>
          <p className="mt-2">Email: support@mca-store.example</p>
          <p>IG/Twitter: @mca_store</p>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <NewArrivals />
      <ClubHistory />
      <NewsletterCTA />
      <ProductModal />
    </>
  );
}

function Shell() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_10%_-10%,rgba(16,185,129,0.25),transparent_40%),_radial-gradient(circle_at_110%_10%,rgba(239,68,68,0.25),transparent_40%)] from-slate-950 to-slate-950">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Shell />
    </CartProvider>
  );
}
