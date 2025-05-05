import { create } from "zustand";

export interface IState {
  ticker: string;
  setTicker: (ticker: string) => void;
  //   increasePopulation: () => void;
  //   removeAllBears: () => void;
  profile: IProfile | null;
  setProfile: (profile: IProfile) => void;
}

export const useProfileStore = create<IState>((set) => ({
  ticker: "",
  setTicker: (ticker: string) => set({ ticker }),
  //   increasePopulation: () =>
  //     set((state: IState) => ({ bears: state.bears + 1 })),
  //   removeAllBears: () => set({ bears: 0 }),
  profile: null,
  setProfile: (profile: IProfile) => set({ profile }),
}));
