import Iconify from "@/components/iconify";
import { Card } from "@/components/ui/card";
import useTheme from "@/hooks/useTheme";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { AddTransaction } from "./add-transaction";

const Navbar = () => {
  const theme = useTheme();
  return (
    <Card className="flex items-center justify-between p-6 pb-9 bg-slate-950 text-slate-200 border-none rounded-2xl rounded-b-none fixed bottom-0 left-0 right-0 max-w-md mx-auto">
      <Link
        className={`px-0 ${buttonVariants({ variant: "link" })}`}
        href="/dashboard"
      >
        <Iconify
          icon="fluent:home-20-filled"
          className="w-7 h-7"
          color={theme.colors.slate[100]}
        />
      </Link>

      <Link
        className={`px-0 ${buttonVariants({ variant: "link" })}`}
        href="/dashboard/transactions"
      >
        <Iconify
          icon="solar:transfer-vertical-bold"
          className="w-7 h-7"
          color={theme.colors.slate[200]}
        />
      </Link>

      <AddTransaction />

      <Link
        className={`px-0 ${buttonVariants({ variant: "link" })}`}
        href="/home"
      >
        <Iconify
          icon="solar:chart-bold"
          className="w-7 h-7"
          color={theme.colors.slate[200]}
        />
      </Link>

      <Link
        className={`px-0 ${buttonVariants({ variant: "link" })}`}
        href="/dashboard/categories"
      >
        <Iconify
          icon="material-symbols:category-rounded"
          className="w-7 h-7"
          color={theme.colors.slate[200]}
        />
      </Link>
    </Card>
  );
};
export default Navbar;
