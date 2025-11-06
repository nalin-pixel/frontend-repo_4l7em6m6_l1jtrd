import { Store, ShoppingBag, PiggyBank } from "lucide-react";

const steps = [
  {
    icon: Store,
    title: "Browse local stores",
    desc: "See bakeries, cafés, groceries, and restaurants near you offering Surprise Bags."
  },
  {
    icon: ShoppingBag,
    title: "Reserve a Surprise Bag",
    desc: "Buy a discounted bag filled with surplus food that’s fresh and tasty."
  },
  {
    icon: PiggyBank,
    title: "Pick up and save",
    desc: "Collect at the set time, enjoy great value, and help reduce food waste."
  }
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">How it works</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">Three simple steps to start rescuing food and supporting local businesses.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
