import { useEffect } from "react";
import { useStore } from "@/store";
import { notes as mockNotes, profiles as mockProfiles } from "@/mockData";

const LoadMockData = () => {
  const setNotes = useStore((state) => state.setNotes);
  const setProfiles = useStore((state) => state.setProfiles);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENVIRONMENT === "production") {
      setNotes(mockNotes);
      setProfiles(mockProfiles);
    }
  }, [setNotes, setProfiles]);

  return null; // doesn't render anything
};

export default LoadMockData;
