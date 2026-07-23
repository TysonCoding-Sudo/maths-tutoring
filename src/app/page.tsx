import Hero from "@/components/sections/Hero";
import FindYourFit from "@/components/sections/FindYourFit";
import Services from "@/components/sections/Services";
import LevelsCovered from "@/components/sections/LevelsCovered";
import PracticeZone from "@/components/sections/PracticeZone";
import MeetTutors from "@/components/sections/MeetTutors";
import Pricing from "@/components/sections/Pricing";
import BookLesson from "@/components/sections/BookLesson";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <FindYourFit />
      <Services />
      <LevelsCovered />
      <PracticeZone />
      <MeetTutors />
      <Pricing />
      <BookLesson />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
