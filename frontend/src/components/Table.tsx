// "use client";

import { useEffect, useState } from "react";
import { Payment, columns } from "../app/payments/columns";
import { DataTable } from "../app/payments/data-table";
import Pane from "./Pane";

export default function DemoPage() {
  const [data, setData] = useState<Payment[] | null>([]);
  async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
      {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
      },
      {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
      },
      // ...
    ];
  }

  useEffect(() => {
    const fetchData = async () => {
      const result: Payment[] = await getData();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <Pane>
      <div className="mx-auto py-10 container">
        <DataTable columns={columns} data={data || []} />
      </div>
    </Pane>
  );
}
