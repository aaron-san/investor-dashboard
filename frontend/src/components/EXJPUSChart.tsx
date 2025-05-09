"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import Pane from "./Pane";
import { EXJPUS } from "../mockData";

interface IChartData {
  _id: { $oid: string };
  date: string;
  EXJPUS: number;
}

const modifiedData = EXJPUS.map((item) => ({
  _id: item._id,
  date: item.date,
  EXJPUS: parseFloat(item.value),
})).filter((item) => item.date > "2023-01-01");
const chartData: IChartData[] = modifiedData;

const maxVal = Math.max(...chartData.map((item) => item.EXJPUS));
const minVal = Math.min(...chartData.map((item) => item.EXJPUS));

// const chartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
// ];

const chartConfig = {
  EXJPUS: {
    label: "JPY/USD",
    color: "#2563eb",
  },
} satisfies ChartConfig;

export function EXJPUSChart() {
  return (
    <Pane>
      <h1>JPY/USD Exchange Rate</h1>
      <ChartContainer config={chartConfig} className="max-w-full h-[200px]">
        <BarChart
          accessibilityLayer
          data={chartData}
          margin={{ top: 10, right: 10, bottom: 20, left: 10 }} // 👈 Add margin to chart
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="date"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tick={(props) => {
              const { x, y, payload } = props;
              const date = new Date(payload.value);
              const formattedDate = date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              });
              return (
                <text
                  x={x}
                  y={y}
                  dy={3}
                  textAnchor="end"
                  fontSize={10}
                  transform={`rotate(-35, ${x}, ${y})`}
                  // style={{ fontSize: "12px" }}
                >
                  {formattedDate}
                </text>
              );
            }}
            // tickFormatter={(value) => value.slice(0, 3)}
            tickFormatter={(value) => {
              const date = new Date(value);
              return date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              });
            }}
          />
          <YAxis
            domain={[minVal * 0.98, maxVal * 1.02]}
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => {
              return value.toLocaleString("en-US", {
                style: "currency",
                currency: "JPY",
                minimumFractionDigits: 0,
              });
            }}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar
            dataKey="EXJPUS"
            radius={4}
            fill="#2563eb"
            data={chartData.map((entry) => {
              // console.log(entry.date);
              return {
                ...entry,
                fill:
                  new Date(entry.date) < new Date("2024-05-01")
                    ? "#ff4d4f"
                    : "#2563eb",
              };
            })}
          />
        </BarChart>
      </ChartContainer>
    </Pane>
  );
}
