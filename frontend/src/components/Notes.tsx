"use client";
import { useStore } from "@/store";
import React from "react";
import Pane from "./Pane";

const Notes = () => {
  const notes = useStore((state) => state.notes);
  //   const setNotes = useStore((state) => state.setNotes);
  console.log("Notes in debug: ", notes);

  //   const handleAddNote = (newNote: INote) => {};
  return (
    <Pane>
      <h1>Notes:</h1>
      <hr />
      <div className="mt-2">
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
                {note.ticker || note.asset || note.title || ""}:
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
