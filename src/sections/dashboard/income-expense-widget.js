"use client";

import getMonthlySummary from "@/services/transactions/get-monthly-summary";
import { format } from "date-fns";
import { useEffect, useState } from "react";

const IncomeExpenseWidget = () => {
  const [summary, setSummary] = useState({});

  useEffect(() => {
    const fetchSummary = async () => {
      const data = await getMonthlySummary();
      setSummary(data);
    };
    fetchSummary();
  }, []);

  return (
    <div className="flex flex-col gap-2 my-5">
      <h5 className="text-slate-200 text-md font-semibold">
        {format(new Date(), "MMMM yyyy")}
      </h5>

      <div className="flex gap-2 w-full">
        <div className="flex flex-col gap-2 rounded-xl bg-slate-950 p-4 w-full">
          <h5 className="text-green-500 text-sm font-normal">Total Income</h5>
          <h5 className="text-green-500 text-xl font-medium">
            &#8377; {summary?.income}
          </h5>
        </div>
        <div className="flex flex-col gap-2 rounded-xl bg-slate-950 p-4 w-full">
          <h5 className="text-red-600 text-sm font-normal">Total Expenses</h5>
          <h5 className="text-red-600 text-xl font-medium">
            &#8377; {summary?.expense}
          </h5>
        </div>
      </div>
    </div>
  );
};
export default IncomeExpenseWidget;
