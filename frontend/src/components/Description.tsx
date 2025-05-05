import { useProfileStore } from "@/store";
import React from "react";
import Pane from "./Pane";

const Description = () => {
  const profile = useProfileStore((state) => state.profile);

  return (
    <Pane>
      <h1 className="border-slate-300/20 border-b w-full text-xl">Profile:</h1>

      <h2 className="mt-2 text-emerald-300 text-sm">Name Damodaran</h2>
      <div>{profile ? profile.name_damodaran : "No profile selected"}</div>
      <h2 className="mt-2 text-emerald-300 text-sm">Industry Damodaran</h2>
      <div>{profile ? profile.industry_damodaran : "No profile selected"}</div>
      <h2 className="mt-2 text-emerald-300 text-sm">Sector Damodaran</h2>
      <div>{profile ? profile.sector_damodaran : "No profile selected"}</div>
    </Pane>
  );
};

export default Description;
