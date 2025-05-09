"use client";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { PriceChart } from "@/components/PriceChart";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Notepad from "@/components/Notepad";
import Footer from "@/components/Footer";
import Table from "@/components/Table";
import CompanySearch from "@/components/CompanySearch";
import Description from "@/components/Profile";
import Notes from "@/components/Notes";
import { EXJPUSChart } from "@/components/EXJPUSChart";

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
      <PriceChart />
      <EXJPUSChart />
      <Table />
      <Notes />
    </div>
  );
}
