"use client";

import Iconify from "@/components/iconify";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import getMonthlySummary from "@/services/transactions/get-monthly-summary";
import updateStartingBalance from "@/services/user/update-starting-balance";
import { currencyformatter } from "@/utils/format-number";
import { format } from "date-fns";
import { useCallback, useEffect, useState } from "react";

const IncomeExpenseWidget = () => {
  const [summary, setSummary] = useState({});

  const fetchSummary = useCallback(async () => {
    const data = await getMonthlySummary();
    setSummary(data);
  }, []);

  useEffect(() => {
    fetchSummary();
  }, [fetchSummary]);

  const handleStartingBalance = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formDataObj = Object.fromEntries(formData.entries());
    await updateStartingBalance({
      startingBalance: formDataObj.startingBalance,
    });
    await fetchSummary();
  };

  return (
    <div className="flex flex-col gap-2 my-5">
      <h5 className="text-slate-200 text-md font-semibold">
        {format(new Date(), "MMMM yyyy")}
      </h5>
      <div className="flex gap-2 rounded-xl bg-slate-950 p-4 w-full justify-between items-end">
        <div className="flex flex-col gap-1">
          <h4 className="text-slate-200 text-sm font-normal">Total Balance</h4>
          <h2 className="text-slate-200 text-xl font-medium">
            {currencyformatter(summary?.totalBalance || 0)}
          </h2>
        </div>
        <div className="flex flex-col gap-0">
          <h4 className="text-slate-200 text-xs font-normal">
            Starting Balance
          </h4>
          <div className="flex justify-between items-center gap-1">
            <h2 className="text-slate-200 text-sm font-medium">
              {currencyformatter(summary?.startingBalance || 0)}
            </h2>
            <Dialog className="max-w-lg">
              <DialogTrigger asChild>
                <button>
                  <Iconify
                    icon="solar:pen-bold"
                    className="w-4 h-4 text-slate-500"
                  />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-[325px]">
                <DialogHeader className="mb-4">
                  <DialogTitle>Starting Balance</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleStartingBalance}>
                  <div className="grid w-full items-center gap-1.5 mb-5">
                    <Input
                      defaultValue={summary?.startingBalance}
                      type="number"
                      inputMode="decimal"
                      step=".01"
                      id="startingBalance"
                      name="startingBalance"
                      placeholder="Enter amount"
                      className="text-md h-12 py-4"
                    />
                  </div>
                  <DialogTrigger asChild>
                    <Button className="w-full" type="submit">
                      Save
                    </Button>
                  </DialogTrigger>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <div className="flex gap-2 w-full">
        <div className="flex flex-col gap-1 rounded-xl bg-slate-950 p-4 w-full">
          <h5 className="text-green-500 text-sm font-normal">Total Income</h5>
          <h5 className="text-green-500 text-xl font-medium">
            {currencyformatter(summary?.income)}
          </h5>
        </div>
        <div className="flex flex-col gap-1 rounded-xl bg-slate-950 p-4 w-full">
          <h5 className="text-red-600 text-sm font-normal">Total Expenses</h5>
          <h5 className="text-red-600 text-xl font-medium">
            {currencyformatter(summary?.expense)}
          </h5>
        </div>
      </div>
    </div>
  );
};
export default IncomeExpenseWidget;
