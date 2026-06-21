import Header from "./components/header/header";
import HomeHero from "./components/home/homeHero";
import BookCarousel from "./components/home/bookCarousel";
import GenreGrid from "./components/home/genreGrid";
import EditorialPick from "./components/home/editorialPick";
import HowItWorks from "./components/home/howItWorks";
import SellerCTA from "./components/home/sellerCTA";
import SiteFooter from "./components/siteFooter/siteFooter";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeHero />
        <BookCarousel />
        <GenreGrid />
        <EditorialPick />
        <HowItWorks />
        <SellerCTA />
      </main>
      <SiteFooter />
    </>
  );
}
