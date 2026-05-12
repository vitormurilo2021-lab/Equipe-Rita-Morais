/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import Authority from "./components/Authority";
import About from "./components/About";
import Treatments from "./components/Treatments";
import Symptoms from "./components/Symptoms";
import Differentials from "./components/Differentials";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Location from "./components/Location";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary-light selection:text-white">
      <Header />
      <main>
        <Hero />
        <Authority />
        <About />
        <Treatments />
        <Symptoms />
        <Differentials />
        <Process />
        <Testimonials />
        <FAQ />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
