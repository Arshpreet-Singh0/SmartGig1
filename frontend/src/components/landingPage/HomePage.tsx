import Categories from "./categories";
import Community from "./Community";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import MarketPreview from "./MarketPreview";
import PlatformFeatures from "./PlatformFeatures";
import SuccessStories from "./SuccessStories";
import TrustSafety from "./Trust-Safety";

const HomePage = () => {
  return (
   <>
   <HeroSection />
   <HowItWorks />
   <MarketPreview />
   <Categories />
   <SuccessStories />
   <PlatformFeatures />
   <Community />
   <TrustSafety />
   </>
  )
}

export default HomePage