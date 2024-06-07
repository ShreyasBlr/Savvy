"use client";

import { useUserContext } from "@/context/user";

const Greeting = () => {
  const { user } = useUserContext();
  return (
    <div>
      <p className="text-slate-300 text-sm">Good Morning!</p>
      <h6 className="text-slate-100 text-lg font-medium">{user?.name}</h6>
    </div>
  );
};
export default Greeting;
