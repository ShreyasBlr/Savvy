"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Iconify from "@/components/iconify";
import { Button } from "@/components/ui/button";
import useTheme from "@/hooks/useTheme";
import { useUserContext } from "@/context/user";

import { toast } from "sonner";

const LoginForm = () => {
  const theme = useTheme();

  const { login } = useUserContext();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const form = e.target;
      const formData = new FormData(form);
      const formDataObj = Object.fromEntries(formData.entries());
      await login(formDataObj);
      toast("Logged-in successfully");
    } catch (error) {
      console.log(error);
      toast(error.message);
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full p-6">
      <h2 className="text-sm font-normal text-center mb-3">
        Login to your account
      </h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <div className="w-full flex flex-col gap-2">
          <Label htmlFor="email" className="text-md p-1 ">
            Email
          </Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4">
              <Iconify
                icon="solar:letter-linear"
                className="w-4 h-4"
                color={theme.colors.slate[200]}
              />
            </div>
            <Input
              className="text-md h-18 py-4 pl-12"
              type="email"
              inputMode="email"
              id="email"
              name="email"
              placeholder="email@example.com"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <Label htmlFor="password" className="text-md p-1">
            Password
          </Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4">
              <Iconify
                icon="solar:lock-password-linear"
                className="w-4 h-4"
                color={theme.colors.slate[200]}
              />
            </div>
            <Input
              className="text-md h-18 py-4 pl-12"
              type="password"
              id="password"
              name="password"
              placeholder="xxxxxxxxx"
            />
          </div>
        </div>
        <div className="w-full mt-3">
          <Button className="w-full" type="submit">
            LOGIN
          </Button>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
