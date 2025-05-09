"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import Pane from "./Pane";
import { SP500, unemploymentRate } from "../mockData";

interface IChartData {
  _id: string;
  date: string;
  value: number | string;
}

const mergeByDate = (a1: IChartData[], a2: IChartData[]) => {
  const map = new Map();

  a1.forEach(({ date, value }) => {
    if (!map.has(date)) map.set(date, { date });
    map.get(date).sp500 = value as number;
  });

  a2.forEach(({ date, value }) => {
    if (!map.has(date)) map.set(date, { date });
    map.get(date).unemploymentRate = parseFloat(value as string);
  });

  // Fill missing values with 0
  return Array.from(map.values()).map((row) => ({
    date: row.date,
    sp500: row.sp500 ?? 0,
    unemploymentRate: row.unemploymentRate ?? 0,
  }));
};

const chartData = mergeByDate(SP500, unemploymentRate);

// const chartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
// ];

const chartConfig = {
  sp500: {
    label: "S&P 500",
    color: "#2563eb",
  },
  unemploymentRate: {
    label: "Unemployment Rate",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export function PriceChart() {
  return (
    <Pane>
      <h1>S&P 500 vs. Unemployment Rate</h1>
      <ChartContainer config={chartConfig} className="max-w-full h-[200px]">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="date"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            // tickFormatter={(value) => value.slice(0, 3)}
            tickFormatter={(value) => {
              const date = new Date(value);
              return date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              });
            }}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="sp500" fill="rgb(100, 100, 200)" radius={4} />
          <Bar dataKey="unemploymentRate" fill="rgb(100,200,100)" radius={4} />
        </BarChart>
      </ChartContainer>
    </Pane>
  );
}
