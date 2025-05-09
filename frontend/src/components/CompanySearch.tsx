"use client";
import React from "react";
import { useCompanySearch } from "@/hooks/useCompanySearch";
import { useStore } from "@/store";
import Pane from "./Pane";

const CompanySearch = () => {
  const { inputValue, setInputValue, results, loading } = useCompanySearch();
  const setTicker = useStore((state) => state.setTicker);
  const setProfile = useStore((state) => state.setProfile);

  return (
    <Pane>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-2"
      >
        <label htmlFor="ticker">Choose a ticker:</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="px-4 py-1 rounded outline-1 outline-border max-w-[calc(100%_-_4rem)] text-tertiary"
            placeholder="Search"
          />
        </div>
      </form>

      {loading ? (
        <p className="mt-2">Loading...</p>
      ) : (
        inputValue &&
        results && (
          <ul className="flex flex-wrap gap-2 mt-4 p-2 border border-border rounded max-h-[160px] overflow-auto">
            {results?.map((profile) => (
              <li
                key={profile.ticker}
                className="px-2 py-1 bg-border hover:bg-border/90 rounded duration-200 ease-in-out cursor-pointer"
                onClick={() => {
                  setTicker(profile.ticker);
                  setProfile(profile);
                }}
              >
                {profile.ticker}
              </li>
            ))}
          </ul>
        )
      )}
    </Pane>
  );
};

export default CompanySearch;
