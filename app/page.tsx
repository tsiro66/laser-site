import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { About } from "./components/about";
import { Prices } from "./components/prices";
import { Booking } from "./components/booking";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Hero />
      <Services />
      <About />
      <Prices />
      <Booking />
      <Footer />
    </main>
  );
}
