import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InstagramBar from "@/components/layout/InstagramBar";

import EditorialGrid from "@/components/home/EditorialGrid";
import JustIn from "@/components/home/JustIn";
import BrandFilm from "@/components/home/BrandFilm";
import SignatureServices from "@/components/home/SignatureServices";
import NewsletterBanner from "@/components/home/NewsletterBanner";
import FeaturedCollections from "@/components/home/FeaturedCollections";

export default function Home() {
  return (
    <>
      <Navbar />
      <EditorialGrid />
      <JustIn />
      <BrandFilm />
      <SignatureServices />
      <FeaturedCollections />
      <NewsletterBanner />
      <InstagramBar />
      <Footer />
    </>
  );
}