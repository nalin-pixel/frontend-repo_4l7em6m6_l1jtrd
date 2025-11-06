import { Clock, MapPin, Star } from "lucide-react";

const sampleBags = [
  {
    id: 1,
    name: "Morning Bakery Mix",
    store: "Sunrise Bakery",
    rating: 4.7,
    price: 4.99,
    original: 14.99,
    pickup: "5-6 PM",
    distance: "0.8 mi"
  },
  {
    id: 2,
    name: "Cafe Surprise Pack",
    store: "Bean & Leaf",
    rating: 4.5,
    price: 3.5,
    original: 10.5,
    pickup: "6-7 PM",
    distance: "1.2 mi"
  },
  {
    id: 3,
    name: "Grocery Veggie Saver",
    store: "GreenMart",
    rating: 4.8,
    price: 6.0,
    original: 18.0,
    pickup: "7-8 PM",
    distance: "2.1 mi"
  },
  {
    id: 4,
    name: "Sushi End-of-Day",
    store: "Mizu Sushi",
    rating: 4.6,
    price: 7.5,
    original: 22.0,
    pickup: "8-9 PM",
    distance: "1.7 mi"
  }
];

export default function BagGrid() {
  return (
    <section id="bags" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Available Surprise Bags</h2>
            <p className="mt-2 text-slate-600">Curated picks from stores near you. Quantities are limited.</p>
          </div>
          <button className="h-10 rounded-lg border border-slate-200 px-4 text-sm font-medium text-slate-700 hover:bg-slate-50">
            Filter
          </button>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sampleBags.map(bag => (
            <article key={bag.id} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
              <div className="aspect-video w-full bg-gradient-to-br from-slate-100 to-slate-50" />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900 group-hover:text-emerald-700 transition">{bag.name}</h3>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-xs font-medium text-slate-700">{bag.rating}</span>
                  </div>
                </div>
                <p className="mt-1 text-sm text-slate-600">{bag.store}</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-emerald-700">${bag.price.toFixed(2)}</span>
                    <span className="text-sm text-slate-400 line-through">${bag.original.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {bag.pickup}</span>
                    <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {bag.distance}</span>
                  </div>
                </div>
                <button className="mt-4 w-full h-10 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700">
                  Reserve
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
