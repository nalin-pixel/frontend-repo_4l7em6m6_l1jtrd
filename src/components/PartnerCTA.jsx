import { Handshake, ArrowRight } from "lucide-react";

export default function PartnerCTA() {
  return (
    <section id="partners" className="bg-emerald-600 py-16 sm:py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
              <Handshake className="h-4 w-4" /> For businesses
            </span>
            <h2 className="mt-4 text-3xl font-bold">Unlock new revenue from surplus food</h2>
            <p className="mt-3 text-emerald-50">
              Join cafés, restaurants, and shops turning end-of-day surplus into happy customers. Reduce waste, earn extra income, and attract new foot traffic.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a href="#" className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 text-emerald-700 font-semibold shadow hover:bg-emerald-50">
              Become a partner
            </a>
            <a href="#" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/30 px-6 font-semibold hover:bg-white/10">
              Learn more <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
