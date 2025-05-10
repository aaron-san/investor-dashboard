"use client";
// import Image from "next/image";
import { PriceChart } from "@/components/charts/PriceChart";
import Notepad from "@/components/Notepad";
import Table from "@/components/Table";
import CompanySearch from "@/components/CompanySearch";
import Description from "@/components/Profile";
import Notes from "@/components/Notes";
import { EXJPUSChart } from "@/components/EXJPUSChart";

export default function Home() {
  return (
    <div className="flex flex-wrap gap-2">
      <EXJPUSChart />
      <PriceChart
        titleCamel="Unemployment Rate"
        mockDataPath="unemploymentRate" // Use the dataset name inside mockData (e.g., 'initialClaims')
        valueKey="value" // The key you want to plot (e.g., "value")
        xKey="date" // This is optional, use it if the x-axis is date or other key
        barColor="rgb(20, 200, 240)"
      />

      <Notes />
      <CompanySearch />
      <Notepad />
      <PriceChart
        titleCamel="Initial Claims"
        mockDataPath="initialClaims" // Use the dataset name inside mockData (e.g., 'initialClaims')
        valueKey="value" // The key you want to plot (e.g., "value")
        xKey="date" // This is optional, use it if the x-axis is date or other key
        barColor="rgb(200, 100, 200)"
      />
      <Description />
      {/* <PriceChart /> */}
      <Table />
    </div>
  );
}
