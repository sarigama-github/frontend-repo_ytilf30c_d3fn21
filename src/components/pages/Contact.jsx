export default function Contact(){
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6 text-white/80">
        <h1 className="text-3xl font-black text-white mb-4">Contact Us</h1>
        <p className="mb-6">Questions about orders or products? We’re here to help.</p>
        <form className="grid gap-3 max-w-xl">
          <input className="px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/60 border border-white/15 focus:border-white/40 outline-none" placeholder="Your name" />
          <input className="px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/60 border border-white/15 focus:border-white/40 outline-none" placeholder="Email" />
          <textarea rows="5" className="px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/60 border border-white/15 focus:border-white/40 outline-none" placeholder="Message"></textarea>
          <button className="px-5 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-500">Send</button>
        </form>
        <div className="mt-6 text-sm">
          <p>Email: support@mca-store.example</p>
          <p>Instagram/Twitter: @mca_store</p>
        </div>
      </div>
    </section>
  );
}
