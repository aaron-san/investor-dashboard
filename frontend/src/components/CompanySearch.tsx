import React, { Suspense, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useProfileStore, IState } from "@/store";
import Pane from "./Pane";

const CompanySearch = () => {
  const [profiles, setProfiles] = useState<IProfile[]>([]);
  const [tickerMatches, setTickerMatches] = useState<IProfile[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const setTicker = useProfileStore((state) => state.setTicker);
  const ticker = useProfileStore((state: IState) => state.ticker);
  const setProfile = useProfileStore((state: IState) => state.setProfile);
  const profile = useProfileStore((state: IState) => state.profile);

  useEffect(() => {
    const getAllProfiles = async () => {
      try {
        const response = await axios.get("http://localhost:3000/profiles");
        setProfiles(response.data);
      } catch (err) {
        console.log("Trouble getting profiles: ", err);
      }
    };
    getAllProfiles();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = inputRef.current?.value?.trim();
    if (!value) {
      setTickerMatches([]);
      return;
    }

    setLoading(true);
    try {
      if (!inputRef.current?.value) setTickerMatches([]);
      // console.log("inputRef: ", inputRef.current?.value);
      const response = await axios.get(
        `http://localhost:3000/profiles/${inputRef.current?.value}`
      );
      // console.log("response: ", JSON.stringify(response.data));
      setTickerMatches(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setTickerMatches([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (ticker: string) => {
    const profile = profiles.find((profile) => profile.ticker === ticker);
    if (profile) {
      setProfile(profile);
    }
  };
  // setTicker(inputRef.current?.value ?? "Not specified");
  // console.log("Ticker: ", ticker);

  return (
    <Pane>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-2">
        <label htmlFor="ticker">Choose a ticker:</label>
        <div>{ticker}</div>
        <div className="flex gap-2">
          <input
            type="text"
            ref={inputRef}
            className="px-4 py-1 rounded outline-1 outline-border max-w-[calc(100%_-_4rem)] text-tertiary"
            placeholder="Search"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-border hover:bg-border/90 rounded transition-[border-radius] duration-200 ease-in-out cursor-pointer"
          >
            Go
          </button>
        </div>
      </form>

      {/* {inputRef.current?.value === "" && null} */}

      {/* <div>{JSON.stringify(tickerMatches)}</div> */}
      {/* {inputRef.current?.value && tickerMatches.length === 0 && (
        <p className="mt-4">No matches found</p>
      )} */}

      {loading ? (
        <p>Loading...</p>
      ) : (
        inputRef.current?.value &&
        tickerMatches.length > 0 && (
          <ul className="flex flex-wrap gap-2 mt-4 p-2 border border-border rounded max-h-[160px] overflow-auto">
            {tickerMatches.map((profile) => {
              return (
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
              );
            })}
          </ul>
        )
      )}

      {/* <select id="ticker" name="ticker">
        {profiles.slice(0, 10).map((profile) => {
          return (
            <option value={profile.ticker} key={profile.ticker}>
              {profile.ticker}
            </option>
          );
        })}
      </select> */}
    </Pane>
  );
};

export default CompanySearch;
