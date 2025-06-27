"use client";
import Pane from "@/components/Pane";
import { useRouter, useParams } from "next/navigation";

export default function CompanyProfilePage() {
  const router = useRouter();
  const { ticker } = useParams(); // This is the value from the URL

  return <Pane>Company Ticker: {ticker}</Pane>;
}
