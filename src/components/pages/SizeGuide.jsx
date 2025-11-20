export default function SizeGuide(){
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6 text-white/80">
        <h1 className="text-3xl font-black text-white mb-4">Size Guide</h1>
        <p className="mb-4">Use these charts as a reference. For a looser streetwear fit, consider sizing up.</p>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-semibold text-white mb-2">Tops (cm)</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>XS: 84-88</li>
              <li>S: 88-92</li>
              <li>M: 92-100</li>
              <li>L: 100-108</li>
              <li>XL: 108-116</li>
              <li>XXL: 116-124</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Bottoms (cm)</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>XS: 70-74</li>
              <li>S: 74-78</li>
              <li>M: 78-86</li>
              <li>L: 86-94</li>
              <li>XL: 94-102</li>
              <li>XXL: 102-110</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
