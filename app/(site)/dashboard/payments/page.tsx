"use client";

import { useEffect, useState } from "react";
import { api } from "@/hooks/useApi";
import PaymentSummaryCard from "./_components/PaymentSummaryCard";
import PaymentTabs from "./_components/PaymentTabs";
import PaymentDetailsCard from "./_components/PaymentDetailsCard";

export default function Payments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    FetchUsers();
  }, []);

  const FetchUsers = async () => {
    const response = await api("GET", "payment/current-month");
    console.log(response);
    setPayments(response);
  };
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <PaymentSummaryCard />
        <PaymentTabs payments={payments} />
      </div>
      <div>
        <PaymentDetailsCard />
      </div>
    </main>
  );
}
