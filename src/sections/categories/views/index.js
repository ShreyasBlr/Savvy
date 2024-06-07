import CustomBreadcrumbs from "@/components/custom-breadcrumbs";
import PageConatiner from "@/components/page-container";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CategoriesTable from "../categories-table";
import categories from "@/data/categories";
import { Button } from "@/components/ui/button";
import Iconify from "@/components/iconify";
import Link from "next/link";

const CategoriesView = () => {
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
        <Tabs defaultValue="income">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="income">Income</TabsTrigger>
            <TabsTrigger value="expense">Expense</TabsTrigger>
          </TabsList>
          <TabsContent value="income">
            <CategoriesTable
              categories={categories.filter((cat) => cat.cat_type === "income")}
            />
          </TabsContent>
          <TabsContent value="expense">
            <CategoriesTable
              categories={categories.filter(
                (cat) => cat.cat_type === "expense"
              )}
            />
          </TabsContent>
        </Tabs>
      </PageConatiner>
    </div>
  );
};
export default CategoriesView;
