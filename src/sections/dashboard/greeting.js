"use client";

import { useUserContext } from "@/context/user";

const getGreeting = () => {
  var today = new Date();
  var curHr = today.getHours();

  if (curHr < 12) {
    return "Good Morning!";
  } else if (curHr < 18) {
    return "Good Afternoon!";
  } else {
    return "Good Evening!";
  }
};

const Greeting = () => {
  const { user } = useUserContext();
  return (
    <div>
      <p className="text-slate-300 text-sm">{getGreeting()}</p>
      <h6 className="text-slate-100 text-lg font-medium">{user?.name}</h6>
    </div>
  );
};
export default Greeting;
