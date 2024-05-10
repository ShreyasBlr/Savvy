"use client";

import Iconify from "@/components/iconify";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import useTheme from "@/hooks/useTheme";

export function AddTransaction() {
  const theme = useTheme();

  const handleAddTransaction = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
  };

  return (
    <Dialog className="max-w-md">
      <DialogTrigger asChild>
        <Button variant="link" className="px-0">
          <Iconify
            icon="solar:add-circle-bold"
            className="w-16 h-16"
            color={theme.colors.slate[0]}
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[325px]">
        <form onSubmit={handleAddTransaction} className="flex flex-col gap-6">
          <DialogHeader>
            <DialogTitle>Add Transaction</DialogTitle>
          </DialogHeader>
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="type">Transaction Type</Label>
            <RadioGroup defaultValue="expense" id="type" name="type">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="expense" id="expense" />
                  <Label htmlFor="expense">Expense</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="income" id="income" />
                  <Label htmlFor="income">Income</Label>
                </div>
              </div>
            </RadioGroup>
          </div>
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              type="number"
              inputMode="numeric"
              id="amount"
              name="amount"
              placeholder="Enter amount"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="category">Category</Label>
            <Select id="category" name="category">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="description">Description</Label>
            <Input
              type="text"
              id="description"
              name="description"
              placeholder="Enter description"
            />
          </div>
          <DialogFooter>
            <Button type="submit">Add</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
