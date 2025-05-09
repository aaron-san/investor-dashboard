import { create } from "zustand";

export interface IState {
  ticker: string;
  setTicker: (ticker: string) => void;
  profiles: IProfile[] | null;
  setProfiles: (profiles: IProfile[]) => void;
  //   increasePopulation: () => void;
  //   removeAllBears: () => void;
  profile: IProfile | null;
  setProfile: (profile: IProfile) => void;
  notes: INote[] | null;
  setNotes: (notes: INote[]) => void;
}

export const useStore = create<IState>((set) => ({
  ticker: "",
  setTicker: (ticker: string) => set({ ticker }),
  profiles: null,
  setProfiles: (profiles: IProfile[]) => set({ profiles }),
  profile: null,
  setProfile: (profile: IProfile) => set({ profile }),
  notes: null,
  setNotes: (notes: INote[]) => set({ notes }),
}));

// console.log("Profiles: ", useProfileStore.getState().profiles);
