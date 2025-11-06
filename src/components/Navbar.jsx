import { ShoppingBag, Leaf } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-white">
            <ShoppingBag className="h-5 w-5" />
          </span>
          <span className="text-lg">RescueBags</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#how" className="hover:text-slate-900">How it works</a>
          <a href="#bags" className="hover:text-slate-900">Find bags</a>
          <a href="#partners" className="hover:text-slate-900">For partners</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-10 items-center rounded-lg border border-slate-200 px-4 text-sm font-medium text-slate-700 hover:bg-slate-50">
            Log in
          </button>
          <button className="inline-flex h-10 items-center gap-2 rounded-lg bg-emerald-600 px-4 text-sm font-semibold text-white shadow hover:bg-emerald-700">
            <Leaf className="h-4 w-4" /> Get the app
          </button>
        </div>
      </div>
    </header>
  );
}
