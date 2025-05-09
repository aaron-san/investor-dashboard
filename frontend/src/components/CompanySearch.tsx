"use client";
import React, { useRef, useState } from "react";
import axios from "axios";
import { useStore, IState } from "@/store";
import Pane from "./Pane";

const CompanySearch = () => {
  const [tickerMatches, setTickerMatches] = useState<IProfile[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const setTicker = useStore((state) => state.setTicker);
  // const ticker = useStore((state: IState) => state.ticker);
  const setProfile = useStore((state: IState) => state.setProfile);
  // const profile = useStore((state: IState) => state.profile);

  const profiles = useStore((state) => state.profiles);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = inputRef.current?.value?.trim();
    if (!value) {
      setTickerMatches([]);
      return;
    }

    const getTickerMatches = async () => {
      const response = await axios.get(
        `http://localhost:3000/profiles/${inputRef.current?.value}`
      );
      setTickerMatches(response.data);
    };
    setLoading(true);
    try {
      if (!inputRef.current?.value) {
        setTickerMatches([]);
        return;
      }
      if (process.env.NEXT_PUBLIC_ENVIRONMENT === "production") {
        const input = inputRef.current?.value.toUpperCase();
        const tickerMatches = profiles?.filter((prof) =>
          prof.ticker.toUpperCase().match(input)
        );
        setTickerMatches(tickerMatches ?? []);
        return;
      } else {
        getTickerMatches();
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
      setTickerMatches([]);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   console.log(tickerMatches);
  // }, [tickerMatches]);
  // const handleSelect = (ticker: string) => {
  //   const profile = profiles?.find((profile) => profile.ticker === ticker);
  //   if (profile) {
  //     setProfile(profile);
  //   }
  // };
  // setTicker(inputRef.current?.value ?? "Not specified");
  // console.log("Ticker: ", ticker);

  return (
    <Pane>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-2">
        <label htmlFor="ticker">Choose a ticker:</label>
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
            {tickerMatches?.map((profile) => {
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
