import HomeCTA from "../Components/section/HomeCTA";
import HomeCulturalPortal from "../Components/section/HomeCulturalPortal";
import HomeHero from "../Components/section/HomeHero";
import HomeHighlights from "../Components/section/HomeHighlights";
import HomeIntro from "../Components/section/HomeIntro";
import HomeServicesPreview from "../Components/section/HomeServicesPreview";
import { usePageTitle } from "../hooks/usePageTitle";

const Home = () => {
  usePageTitle("home");

  return (
    <>
      <HomeHero />
      <HomeIntro />
      <HomeHighlights />
      <HomeServicesPreview />
      <HomeCulturalPortal />
      <HomeCTA />
    </>
  );
};

export default Home;
