"use client";

import CustomBreadcrumbs from "@/components/custom-breadcrumbs";
import PageConatiner from "@/components/page-container";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import IncomeCategories from "../income-categories";
import ExpenseCategories from "../expense-categories";

import { useSearchParams } from "next/navigation";

const CategoriesView = () => {
  const searchParams = useSearchParams();

  const tab = searchParams.get("tab") || "income";

  return (
    <div className="flex flex-col gap-4">
      <CustomBreadcrumbs
        title="Categories"
        action={
          <Link href="/dashboard/categories/add-category">
            <Button variant="outline">Add category</Button>
          </Link>
        }
      />
      <PageConatiner>
        <Tabs defaultValue={tab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="income">Income</TabsTrigger>
            <TabsTrigger value="expense">Expense</TabsTrigger>
          </TabsList>
          <TabsContent value="income">
            <IncomeCategories />
          </TabsContent>
          <TabsContent value="expense">
            <ExpenseCategories />
          </TabsContent>
        </Tabs>
      </PageConatiner>
    </div>
  );
};
export default CategoriesView;
