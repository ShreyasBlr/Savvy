"use client";

import { useUserContext } from "@/context/user";
import { useEffect, useState } from "react";

const AuthGaurd = ({ children }) => {
  const { isAuthenticated } = useUserContext();

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.replace("/login");
    } else {
      setChecked(true);
    }
  }, [isAuthenticated]);

  if (!checked) {
    return null;
  }

  return children;
};
export default AuthGaurd;
