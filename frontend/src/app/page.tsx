"use client";
// import Image from "next/image";
import { PriceChart } from "@/components/PriceChart";
import Notepad from "@/components/Notepad";
import Table from "@/components/Table";
import CompanySearch from "@/components/CompanySearch";
import Description from "@/components/Profile";
import Notes from "@/components/Notes";
import { EXJPUSChart } from "@/components/EXJPUSChart";

export default function Home() {
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
