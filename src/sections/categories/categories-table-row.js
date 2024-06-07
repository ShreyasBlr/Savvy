import Iconify from "@/components/iconify";
import { TableCell, TableRow } from "@/components/ui/table";

const CategoriesTableRow = ({ row }) => {
  return (
    <TableRow>
      <TableCell className="font-medium">{row.name}</TableCell>
      <TableCell>{row.budget}</TableCell>
      <TableCell className="text-right">
        <button>
          <Iconify
            icon="iconamoon:menu-kebab-vertical-bold"
            className="w-5 h-5"
          />
        </button>
      </TableCell>
    </TableRow>
  );
};
export default CategoriesTableRow;
