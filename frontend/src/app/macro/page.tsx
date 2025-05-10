import { PriceChart } from "@/components/charts/PriceChart";
import React from "react";

const Macro = () => {
  return (
    <div>
      <p>
        This is the Macroeconomics page and it will hold data about the larger
        economy.
      </p>
      <PriceChart
        titleCamel="Unemployment Rate"
        mockDataPath="unemploymentRate" // Use the dataset name inside mockData (e.g., 'initialClaims')
        valueKey="value" // The key you want to plot (e.g., "value")
        xKey="date" // This is optional, use it if the x-axis is date or other key
        barColor="rgb(20, 200, 240)"
      />
      {/* <GDPGrowthChart /> */}
    </div>
  );
};

export default Macro;
