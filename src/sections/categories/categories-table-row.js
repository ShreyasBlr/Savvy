"use client";

import Iconify from "@/components/iconify";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TableCell, TableRow } from "@/components/ui/table";
import deleteCategory from "@/services/categories/delete-category";
import { currencyformatter } from "@/utils/format-number";
import { useRouter } from "next/navigation";

const CategoriesTableRow = ({ row, fetchCategories }) => {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/dashboard/categories/edit/${row._id}`);
  };

  const handleDelete = async () => {
    try {
      await deleteCategory(row._id);
      await fetchCategories();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <TableRow>
      <TableCell className="font-medium">{row.name}</TableCell>
      <TableCell>{currencyformatter(row.budget?.$numberDecimal)}</TableCell>
      <TableCell className="text-right">
        <Popover>
          <PopoverTrigger asChild>
            <button>
              <Iconify
                icon="iconamoon:menu-kebab-vertical-bold"
                className="w-5 h-5"
              />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-28 p-2 mr-3">
            <ul>
              <li className="w-full pb-2 border-b">
                <button
                  className="w-full text-sm flex items-center justify-between"
                  onClick={handleEdit}
                >
                  Edit
                  <Iconify icon="solar:pen-bold" />
                </button>
              </li>
              <li className="w-full pt-2">
                <button
                  className="w-full text-sm flex items-center justify-between text-red-500"
                  onClick={handleDelete}
                >
                  Delete
                  <Iconify icon="solar:trash-bin-minimalistic-bold" />
                </button>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      </TableCell>
    </TableRow>
  );
};
export default CategoriesTableRow;
