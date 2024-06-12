import Iconify from "@/components/iconify";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CategoriesTableRow from "./categories-table-row";
import { Card } from "@/components/ui/card";
import { currencyformatter } from "@/utils/format-number";

const CategoriesTable = ({ categories, fetchCategories }) => {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/2">Category</TableHead>
            <TableHead className="w-1/3">Budget</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((cat) => (
            <CategoriesTableRow
              key={cat._id}
              row={cat}
              fetchCategories={fetchCategories}
            />
          ))}
        </TableBody>
        <TableFooter className="bg-gray-700">
          <TableRow>
            <TableCell className="rounded-bl-md">
              <b>Total</b>
            </TableCell>
            <TableCell colSpan={2} className="rounded-br-md">
              <b>
                {currencyformatter(
                  categories.reduce((acc, cat) => acc + +cat.budget, 0)
                )}
              </b>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Card>
  );
};
export default CategoriesTable;
