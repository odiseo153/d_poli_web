import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturedProducts } from "@/components/featured-products";
import { NewArrivals } from "@/components/new-arrivals";
import { HowToBuy } from "@/components/how-to-buy";
import { WhyChooseUs } from "@/components/why-choose-us";
import { StoreGallery } from "@/components/store-gallery";
import { InstagramFeed } from "@/components/instagram-feed";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <NewArrivals />
        <HowToBuy />
        <WhyChooseUs />
        <StoreGallery />
        <InstagramFeed />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
  