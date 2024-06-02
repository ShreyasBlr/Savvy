import Iconify from "@/components/iconify";
import { Card } from "@/components/ui/card";
import useTheme from "@/hooks/useTheme";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { AddTransaction } from "./add-transaction";

const Navbar = () => {
  const theme = useTheme();
  return (
    <Card className="flex items-center justify-around p-6 pb-9 bg-slate-950 text-slate-200 border-none rounded-2xl fixed bottom-0 left-0 right-0 max-w-md mx-auto">
      <Link
        className={`px-0 ${buttonVariants({ variant: "link" })}`}
        href="/dashboard"
      >
        <Iconify
          icon="solar:home-smile-angle-bold-duotone"
          className="w-7 h-7"
          color={theme.colors.slate[100]}
        />
      </Link>

      <AddTransaction />

      <Link
        className={`px-0 ${buttonVariants({ variant: "link" })}`}
        href="/dashboard/transactions"
      >
        <Iconify
          icon="solar:transfer-vertical-bold-duotone"
          className="w-7 h-7"
          color={theme.colors.slate[400]}
        />
      </Link>

      {/* <Link
        className={`px-0 ${buttonVariants({ variant: "link" })}`}
        href="/home"
      >
        <Iconify
          icon="solar:pie-chart-2-bold-duotone"
          className="w-7 h-7"
          color={theme.colors.slate[400]}
        />
      </Link>
      <Link
        className={`px-0 ${buttonVariants({ variant: "link" })}`}
        href="/home"
      >
        <Iconify
          icon="solar:user-bold-duotone"
          className="w-7 h-7"
          color={theme.colors.slate[400]}
        />
      </Link> */}
    </Card>
  );
};
export default Navbar;
