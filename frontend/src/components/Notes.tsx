"use client";
import { useStore } from "@/store";
import React, { useEffect } from "react";
import Pane from "./Pane";
import axios from "axios";
import { notes as mockNotes } from "@/mockData";

const Notes = () => {
  const notes = useStore((state) => state.notes);
  const setNotes = useStore((state) => state.setNotes);

  useEffect(() => {
    async function fetchNotes() {
      try {
        if (process.env.NEXT_PUBLIC_ENVIRONMENT === "production") {
          setNotes(mockNotes);
        } else {
          const response = await axios.get("http://localhost:3000/notes");
          setNotes(response.data);
        }
      } catch (err) {
        console.error("Error loading notes", err);
      }
    }

    fetchNotes();
  }, [setNotes]);
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
