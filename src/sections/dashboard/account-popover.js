"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Iconify from "@/components/iconify";
import { useUserContext } from "@/context/user";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const AccountPopover = () => {
  const router = useRouter();
  const { logout } = useUserContext();

  const handleLogout = async () => {
    try {
      await logout();
      toast("Logged out successfully");
      router.push("/login");
    } catch (error) {
      console.error(error);
      toast(error.message);
    }
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-40 p-0 mr-3">
        <ul>
          <li className="w-full p-3 border-b">
            <button className="w-full flex items-center justify-between">
              Profile
              <Iconify icon="carbon:user" />
            </button>
          </li>
          <li className="w-full p-3">
            <button
              className="w-full flex items-center justify-between text-red-500"
              onClick={handleLogout}
            >
              Logout
              <Iconify icon="carbon:logout" />
            </button>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};
export default AccountPopover;
