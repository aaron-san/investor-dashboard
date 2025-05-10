"use client";
import { useStore } from "@/store";
import Pane from "./Pane";

const Notes = () => {
  const notes = useStore((state) => state.notes);

  return (
    <Pane>
      {/* Sticky header */}
      <div className="top-0 z-10 sticky">
        <h1 className="border-slate-100/20 border-b w-full text-xl">Notes:</h1>
      </div>

      {/* Scrollable notes list */}
      <div className="flex-1 mt-2 overflow-auto hide-scrollbar">
        {notes?.map((note) => {
          return (
            <div
              className="my-4 px-2 py-4 border border-border-60 rounded"
              key={note._id}
            >
              <div className="mr-2 text-slate-400 text-xs">
                {note.dateModified.toDateString()}
              </div>
              <span className="mr-2 text-border text-xs">
                {note.ticker || note.asset || note.title || ""}
              </span>
              {note.content}
            </div>
          );
        })}
      </div>
    </Pane>
  );
};

export default Notes;
