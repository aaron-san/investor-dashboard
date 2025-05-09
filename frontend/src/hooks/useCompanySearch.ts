"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useStore } from "@/store";
import { profiles as mockProfiles } from "@/mockData";

export const useCompanySearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState<IProfile[]>([]);
  const [loading, setLoading] = useState(false);

  const profiles = useStore((state) => state.profiles);
  const setProfiles = useStore((state) => state.setProfiles);

  // Fetch profiles once
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        if (process.env.NEXT_PUBLIC_ENVIRONMENT === "production") {
          setProfiles(mockProfiles);
        } else {
          const res = await axios.get("http://localhost:3000/profiles");
          setProfiles(res.data);
        }
      } catch (err) {
        console.error("Error loading profiles", err);
      }
    };

    if (!profiles) fetchProfiles();
  }, [profiles, setProfiles]);

  // Debounced input search
  useEffect(() => {
    const delay = setTimeout(async () => {
      if (!inputValue.trim()) {
        setResults([]);
        return;
      }

      setLoading(true);
      try {
        if (process.env.NEXT_PUBLIC_ENVIRONMENT === "production") {
          const matches = profiles?.filter((prof) =>
            prof.ticker.toUpperCase().includes(inputValue.toUpperCase())
          );
          setResults(matches ?? []);
        } else {
          const res = await axios.get(
            `http://localhost:3000/profiles/${inputValue}`
          );
          setResults(res.data);
        }
      } catch (err) {
        console.error("Error fetching ticker matches", err);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 400); // 400ms debounce

    return () => clearTimeout(delay);
  }, [inputValue, profiles]);

  return {
    inputValue,
    setInputValue,
    results,
    loading,
  };
};
