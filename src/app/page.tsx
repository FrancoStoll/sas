import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import {
  getAllCompanions,
  getRecentSessions,
} from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";

import React from "react";

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionCompanion = await getRecentSessions(10);

  return (
    <main>
      <h1 className="text-2xl underline">Popular Companion</h1>
      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard
            {...companion}
            key={companion.id}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>

      <section className="home-section">
        <CompanionList
          title="Recently completed sessions"
          companions={recentSessionCompanion}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
