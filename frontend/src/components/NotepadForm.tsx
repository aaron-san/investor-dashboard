// import axios from "axios";
import React, { FormEvent } from "react";
import Pane from "./Pane";

const NotepadForm = () => {
  const tickerRef = React.useRef<HTMLInputElement>(null);
  const assetRef = React.useRef<HTMLInputElement>(null);
  const titleRef = React.useRef<HTMLInputElement>(null);
  // const [note, setNote] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    // await axios.post("http://localhost:3000/notes", {
    //   title: titleRef.current?.value,
    //   ticker: tickerRef.current?.value,
    //   asset: assetRef.current?.value,
    //   note: note,
    // });
  };
  return (
    <Pane>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col gap-2 mx-auto rounded max-w-[400px]"
      >
        {/* <label htmlFor="note" id="note">
        Note:
      </label> */}
        <div className="flex gap-2">
          <input
            type="text"
            ref={titleRef}
            placeholder="Title"
            className="bg-emerald-900/20 px-4 py-1 rounded outline-1 outline-border w-1/2 text-slate-200 text-tertiary"
          />
          <input
            type="text"
            ref={tickerRef}
            placeholder="Ticker"
            className="bg-emerald-900/20 px-4 py-1 rounded outline-1 outline-border w-1/2 text-slate-200 text-tertiary"
          />
          <input
            type="text"
            ref={assetRef}
            placeholder="Asset"
            className="bg-emerald-900/20 px-4 py-1 rounded outline-1 outline-border w-1/2 text-slate-200 text-tertiary"
          />
        </div>

        <textarea
          className="bg-emerald-900/20 p-2 ring-border rounded-sm outline-none ring-1 max-w-[400px] h-[160px] text-slate-200"
          // value={note}
          name="note"
          placeholder="Add note"
          // onChange={(e) => setNote(e.target.value)}
        ></textarea>
        <button
          // onClick={() => setNote(note)}
          className="py-1 bg-border hover:bg-border/90 rounded-sm text-slate-900 cursor-pointer"
        >
          Save
        </button>
      </form>
    </Pane>
  );
};

export default NotepadForm;
