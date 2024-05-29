"use client";

import { useEffect } from "react";
import { PATH_AFTER_LOGIN } from "@/config-global";
import { useRouter } from "next/navigation";

const RootPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(PATH_AFTER_LOGIN);
  }, [router]);

  return null;
};

export default RootPage;
