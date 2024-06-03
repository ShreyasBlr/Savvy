import Iconify from "@/components/iconify";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const AddExpenseForm = () => {
  return (
    <form className="w-100 p-1">
      <div className="flex flex-col gap-5 mt-5 p:1">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md p-1" htmlFor="amount">
            Amount
          </Label>
          <Input
            type="number"
            inputMode="numeric"
            id="amount"
            name="amount"
            placeholder="Enter amount"
            className="text-md h-18 py-4"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md p-1" htmlFor="category">
            Category
          </Label>
          <Select id="category" name="category">
            <SelectTrigger className="w-full text-md h-18 py-4">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md p-1" htmlFor="description">
            Description
          </Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Enter description"
            className="text-md py-4"
          />
        </div>
        <Button type="submit" className="text-md h-18 py-4 mt-3">
          <Iconify icon="ph:plus-bold" />
          &nbsp; ADD
        </Button>
      </div>
    </form>
  );
};
export default AddExpenseForm;
