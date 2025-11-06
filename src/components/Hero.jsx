import { Star, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-xs font-semibold">
              <Star className="h-3.5 w-3.5" /> Fight food waste near you
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Rescue Surprise Bags from local stores
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Save delicious food that would otherwise go to waste. Pick up a curated bag of surplus items at a fraction of the price while supporting local businesses.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1 max-w-md">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Enter your city or ZIP"
                  className="w-full h-12 rounded-lg border border-slate-300 pl-10 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <button className="h-12 rounded-lg bg-emerald-600 px-6 text-white font-semibold shadow hover:bg-emerald-700">
                Discover bags
              </button>
            </div>
            <p className="mt-3 text-sm text-slate-500">Join thousands of rescuers saving meals every day.</p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-emerald-200 via-emerald-100 to-white shadow-inner" />
          </div>
        </div>
      </div>
    </section>
  );
}
