"use client";

import CustomBreadcrumbs from "@/components/custom-breadcrumbs";
import Iconify from "@/components/iconify";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

const AddCategoryView = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = e.target;
      const formData = new FormData(form);
      const formDataObj = Object.fromEntries(formData.entries());
      console.log(formDataObj);

      router.push("/dashboard/categories");
    } catch (error) {
      console.log(error);
      toast(error.message);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <CustomBreadcrumbs title="Add Category" />

      <Card className="w-full p-3">
        <form className="w-100" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5 p:1">
            <div className="grid w-full items-center gap-1.5">
              <Label className="text-md p-1" htmlFor="category">
                Category Type
              </Label>
              <Select id="category" name="category" required>
                <SelectTrigger className="w-full text-md h-12 py-4">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="income" className="text-md h-10 py-2">
                    Income
                  </SelectItem>
                  <SelectItem value="expense" className="text-md h-10 py-2">
                    Expense
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label className="text-md p-1" htmlFor="name">
                Category Name
              </Label>
              <Input
                type="text"
                id="budget"
                name="budget"
                placeholder="Enter name of category"
                className="text-md h-12 py-4"
                required
              />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label className="text-md p-1" htmlFor="budget">
                Budget
              </Label>
              <Input
                type="number"
                inputMode="numeric"
                id="budget"
                name="budget"
                placeholder="Enter budget for category"
                className="text-md h-12 py-4"
                required
              />
            </div>

            <Button type="submit" className="text-md h-12 py-4 mt-3">
              <Iconify icon="ph:plus-bold" />
              &nbsp; ADD
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
export default AddCategoryView;
