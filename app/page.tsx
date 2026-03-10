import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/nav";
import OurMenu from "@/components/ourMenu";

export default function Home() {
  return (
    <div className="">
      <div className="w-full flex items-center justify-center">
        <Navbar />
      </div>
      <Hero />
      <OurMenu />
      <Footer />
    </div>
  );
}
