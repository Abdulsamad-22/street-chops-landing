import DeliveryService from "@/components/delivery";
import Footer from "@/components/footer";
import OurGallery from "@/components/gallery";
import Hero from "@/components/hero";
import Navbar from "@/components/nav";
import OpeningHours from "@/components/openingHours";
import OurMenu from "@/components/ourMenu";

export default function Home() {
  return (
    <div className="">
      <div className="w-full flex items-center justify-center">
        <Navbar />
      </div>
      <Hero />
      <OurMenu />
      <OpeningHours />
      <OurGallery />
      <DeliveryService />
      <Footer />
    </div>
  );
}
