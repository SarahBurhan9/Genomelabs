import { useEffect } from "react";
import { CapabilityStrip } from "@/components/sections/CapabilityStrip";
import { Certificates } from "@/components/sections/Certificates";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { AboutGenome } from "@/components/sections/AboutGenome";
import { Research } from "@/components/sections/Research";
import { Gallery } from "@/components/sections/Gallery";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { Technology } from "@/components/sections/Technology";
import { WhyGenome } from "@/components/sections/WhyGenome";

export function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    document.querySelector(hash)?.scrollIntoView({ behavior: "instant", block: "start" });
  }, []);

  return (
    <>
      <Hero />
      <CapabilityStrip />
      <Services />
      <WhyGenome />
      <Technology />
      <AboutGenome />
      <Certificates />
      <Research />
      <Team />
      <Gallery />
      <Testimonials />
      <ClosingCta />
      <Contact />
    </>
  );
}
