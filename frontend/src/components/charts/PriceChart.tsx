"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import Pane from "../Pane";
import { useEffect, useState } from "react";

// interface IChartData {
//   _id: {
//     $oid: string;
//   };
//   date: string;
//   value: number | string;
// }

// const titleCamel = "initialClaims";

// const chartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
// ];

interface IChart<T> {
  titleCamel: string;
  mockDataPath: string;
  chartData?: T[];
  valueKey: keyof T;
  xKey?: keyof T;
  barColor?: string;
}

export function PriceChart<T extends Record<string, unknown>>({
  titleCamel,
  mockDataPath,
  chartData: propData,
  valueKey,
  xKey = "date" as keyof T,
  barColor = "rgb(100,200,100)",
}: IChart<T>) {
  const [chartData, setChartData] = useState<T[]>([]);

  const title = titleCamel
    ? titleCamel
        .split(/(?=[A-Z])/)
        .join(" ")
        .replace(/^./, (s) => s.toUpperCase())
    : "";

  useEffect(() => {
    if (propData && Array.isArray(propData)) {
      const normalized = propData.map((d) => ({
        ...d,
        [valueKey]: Number(d[valueKey]),
      }));
      setChartData(normalized);
      return;
    }

    import("@/mockData")
      .then((module) => {
        const data = module[mockDataPath] as T[] | undefined;
        if (!data || !Array.isArray(data)) {
          console.error("Mock data not found or invalid:", mockDataPath);
          return;
        }

        const normalized = data.map((d) => ({
          ...d,
          [valueKey]: Number(d[valueKey]),
        }));
        setChartData(normalized);
      })
      .catch((err) => {
        console.error("Failed to load mock data:", err);
      });
  }, [mockDataPath, propData, valueKey]);

  const chartConfig: ChartConfig = {
    InitialClaims: {
      label: title,
      color: "#60a5fa",
    },
  };
  return (
    <Pane>
      <h1>{title}</h1>
      <ChartContainer config={chartConfig} className="max-w-full h-[200px]">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey={xKey as string}
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => {
              const date = new Date(value);
              return date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              });
            }}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey={valueKey as string} fill={barColor} radius={4} />
        </BarChart>
      </ChartContainer>
    </Pane>
  );
}
