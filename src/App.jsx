import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import BagGrid from "./components/BagGrid";
import PartnerCTA from "./components/PartnerCTA";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <BagGrid />
        <PartnerCTA />
      </main>
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            Our mission is to fight food waste globally by making it easy and affordable to rescue meals.
          </p>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} RescueBags</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
