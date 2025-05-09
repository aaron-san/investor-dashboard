"use client";

import { create } from "zustand";
import axios from "axios";
const environment = process.env.NEXT_PUBLIC_ENVIRONMENT;
import { profiles as mockProfiles, notes as mockNotes } from "./mockData";

export interface IState {
  ticker: string;
  setTicker: (ticker: string) => void;
  profiles: IProfile[] | null;
  //   increasePopulation: () => void;
  //   removeAllBears: () => void;
  profile: IProfile | null;
  setProfile: (profile: IProfile) => void;
  notes: INote[] | null;
  setNotes: (notes: INote[]) => void;
}

async function getProfiles() {
  try {
    const response = await axios.get("http://localhost:3000/profiles");

    return response.data;
  } catch (err) {
    console.log("Trouble getting profiles: ", err);
  }
}

async function getNotes() {
  try {
    const response = await axios.get("http://localhost:3000/notes");

    return response.data;
  } catch (err) {
    console.log("Trouble getting notes: ", err);
  }
}

export const useStore = create<IState>((set) => ({
  ticker: "",
  setTicker: (ticker: string) => set({ ticker }),
  profiles: null,
  profile: null,
  setProfile: (profile: IProfile) => set({ profile }),
  notes: null,
  setNotes: (notes: INote[]) => set({ notes }),
}));

if (environment === "production") {
  useStore.setState({ profiles: mockProfiles });
  useStore.setState({ notes: mockNotes });
} else {
  getProfiles().then((data) => {
    useStore.setState({ profiles: data });
  });
  getNotes().then((data) => {
    useStore.setState({ notes: data });
  });
}

// console.log("Profiles: ", useProfileStore.getState().profiles);
// console.log("Environment: ", environment);
