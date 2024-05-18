"use client";

import { useEffect } from "react";
import { path_after_login } from "@/config-global";
import { useRouter } from "next/navigation";

const RootPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(path_after_login);
  }, [router]);

  return null;
};

export default RootPage;
