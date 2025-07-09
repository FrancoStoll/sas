import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";

import React from "react";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companion</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the brainy explorer"
          topic="Neuroscience"
          subject="science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="1234"
          name="Derivatives & integrals"
          topic="Derivatives & Integrals"
          subject="science"
          duration={45}
          color="#e5d0ff"
        />
        <CompanionCard
          id="12345"
          name="Verba the Vocabulary Builder"
          topic="English Literature "
          subject="English"
          duration={45}
          color="#BDE7FF"
        />
      </section>

      <section className="home-section">
        <CompanionList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
