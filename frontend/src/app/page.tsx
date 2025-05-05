"use client";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { PricesChart } from "@/components/PricesChart";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Notepad from "@/components/Notepad";
import Footer from "@/components/Footer";
import Table from "@/components/Table";
import CompanySearch from "@/components/CompanySearch";
import Description from "@/components/Description";

export default function Home() {
  const [notes, setNotes] = useState<INote[]>([]);
  // const [openSidebar, setOpenSidebar] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      const notes = await axios.get("http://localhost:3000/notes");
      setNotes(notes.data);
    };
    getData();
  }, []);

  return (
    <div className="flex flex-wrap gap-2">
      <CompanySearch />
      <Notepad />
      <Description />
      <PricesChart />
      <Table />
      <ul>
        {notes.map((note) => {
          return <li key={note._id}>{note.company}</li>;
        })}
      </ul>
    </div>
  );
}
