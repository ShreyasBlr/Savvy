"use client";

import CustomBreadcrumbs from "@/components/custom-breadcrumbs";
import PageConatiner from "@/components/page-container";
import AddTransactionForm from "../add-transaction-form";
import { useSearchParams } from "next/navigation";

const AddTransactionView = () => {
  const searchParams = useSearchParams();

  const type = searchParams.get("type") || "income";

  return (
    <div className="flex flex-col gap-3">
      <CustomBreadcrumbs
        title={`Add ${type === "income" ? "Income" : "Expense"}`}
      />
      <PageConatiner>
        <AddTransactionForm type={type} />
      </PageConatiner>
    </div>
  );
};
export default AddTransactionView;
