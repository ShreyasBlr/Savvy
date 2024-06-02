"use client";

import Iconify from "@/components/iconify";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import useTheme from "@/hooks/useTheme";
import { useState } from "react";

export function AddTransaction() {
  const theme = useTheme();

  return (
    <Dialog className="max-w-lg">
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
        <DialogHeader>
          <DialogTitle>Add Transaction</DialogTitle>
        </DialogHeader>
        <h2>Income</h2>
        <h2>or</h2>
        <h2>Expense</h2>
      </DialogContent>
    </Dialog>
  );
}
