import Image from "next/image";
import HeroSection from "./components/herosection";
import CTABlock from "./components/ctablock";
import ModulesSection from "./components/modulesection";
import VideoTestimonialsSection from "./components/videotestimonialssection";
import CoachSection from "./components/coachsection";
import PainPointsSection from "./components/painpointsection";
import ContentCashSystem from "./components/contentcashsystem";
import FAQSection from "./components/faqsection";
import StickyCTA from "./components/stickycta";
import ClientTestimonials from "./components/clienttestimonialssection";

export default function Home() {
  return (
    <div>
      {/* <CTABlock/> */}
      <HeroSection/>
      <VideoTestimonialsSection/>
      <ClientTestimonials/>
      <PainPointsSection/>
      <ModulesSection/>
      <CoachSection/>
      <ContentCashSystem/>
      <FAQSection/>
      <StickyCTA/>

    </div>
  );
}
