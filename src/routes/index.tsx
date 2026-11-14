import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/home/HeroSection";
import { VideoGallerySection } from "@/components/home/VideoSections";
import {
  CTASection,
  DisciplinesSection,
  LeadershipSection,
  ProjectsSection,
  RegisteredSection,
  ServicesSection,
  StatsSection,
  TeamSection,
  TestimonialsSection,
  UpdatesSection,
  WhyChooseUsSection,
} from "@/components/home/Sections";
import { FeaturedHouseVideoSection } from "@/components/FeaturedVideoSections";

const title = "Abbu Turab | Architecture, Construction & Renovation in Lahore";
const description =
  "Government-registered architecture, construction and renovation firm in Lahore. Approved for DHA, Bahria Town, Lake City and all private societies. 12+ years, 300+ projects.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyChooseUsSection />
      <ProjectsSection />
        <FeaturedHouseVideoSection />
      <DisciplinesSection />
      <RegisteredSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
