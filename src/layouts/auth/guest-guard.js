"use client";

import { useEffect, useCallback } from "react";

import { paths } from "@/routes/paths";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/context/user";

// ----------------------------------------------------------------------

export default function GuestGuard({ children }) {
  const { loading } = useUserContext();

  return (
    <>{loading ? <h1>Loading...</h1> : <Container> {children}</Container>}</>
  );
}

// ----------------------------------------------------------------------

function Container({ children }) {
  const router = useRouter();

  const returnTo = paths.dashboard.root;

  const { isAuthenticated } = useUserContext();

  const check = useCallback(() => {
    if (isAuthenticated) {
      router.replace(returnTo);
    }
  }, [isAuthenticated, returnTo, router]);

  useEffect(() => {
    check();
  }, [check]);

  return <>{children}</>;
}
